"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import IMyCarouselProps, { CarouselListKey } from "./MyCarousel.model";

// TODO: Replace with your Magnolia instance URL or use an environment variable
const MAGNOLIA_HOST = "http://localhost:8080";

interface CarouselImage {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const MyCarousel: React.FC<IMyCarouselProps> = ({ autoplay, carouselList }) => {
  const imageKeys = (carouselList["@nodes"] ||
    Object.keys(carouselList).filter(
      (key) => !key.startsWith("@"),
    )) as CarouselListKey[];

  const images: CarouselImage[] = imageKeys
    .map((key) => {
      const node = carouselList[key];
      if (node && node.imageChooser) {
        const chooser = node.imageChooser;
        let imageSrc = "";
        let imageAlt = node.title || "";

        if (chooser.field === "image" && chooser.image) {
          const link = chooser.image["@link"] as string;
          imageSrc = link.startsWith("http") ? link : `${MAGNOLIA_HOST}${link}`;
          imageAlt = chooser.imageAlt || node.title || "";
        } else if (chooser.field === "externalImage" && chooser.externalImage) {
          imageSrc = chooser.externalImage;
          imageAlt = chooser.externalImageAlt || node.title || "";
        }
        const title = node.title || "";
        const description = node.description || "";
        return { imageSrc, imageAlt, title, description };
      }
      return null;
    })
    .filter((item): item is CarouselImage => item !== null);

  const extendedImages =
    images.length > 1
      ? [images[images.length - 1], ...images, images[0]]
      : images;

  const [currentIndex, setCurrentIndex] = useState<number>(
    images.length > 1 ? 1 : 0,
  );
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isLockedRef = useRef<boolean>(false);

  useEffect(() => {
    if (images.length <= 1) return;

    if (currentIndex === 0) {
      isLockedRef.current = true;
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length);
      }, 500);
      return () => clearTimeout(timeout);
    }

    if (currentIndex === images.length + 1) {
      isLockedRef.current = true;
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, images.length]);

  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
        isLockedRef.current = false;
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const isAutoplayEnabled = autoplay.field === "enableAutoPlay";
    const rawTime = isAutoplayEnabled ? Number(autoplay.time) || 3000 : 3000;
    const autoplayTime = Math.min(300000, Math.max(1000, rawTime));

    if (
      isAutoplayEnabled &&
      images.length > 1 &&
      !isPaused &&
      isTransitioning
    ) {
      timerRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, autoplayTime);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [autoplay, images.length, isPaused, currentIndex, isTransitioning]);

  const handlePauseToggle = () => {
    setIsPaused((prev) => !prev);
  };

  const handleNext = () => {
    if (!isLockedRef.current) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (!isLockedRef.current) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  }, []);

  const currentSlideIndex =
    images.length > 1
      ? currentIndex === 0
        ? images.length
        : currentIndex === images.length + 1
          ? 1
          : currentIndex
      : 1;

  return (
    <div
      className="w-full  mx-auto"
      role="group"
      aria-roledescription="carousel"
      aria-label="Image carousel"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {images.length > 0 ? (
        <>
          <div className="relative w-full h-64 overflow-hidden rounded-md bg-gray-100">
            <div className="sr-only" aria-live="polite" aria-atomic="true">
              Slide {currentSlideIndex} of {images.length}
            </div>
            {/* Sliding container */}
            <div
              className={`flex h-full ${isTransitioning ? "transition-transform duration-500 ease-in-out grid" : ""}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {extendedImages.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0 relative"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.imageSrc}
                    alt={image.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                  {(image.title || image.description) && (
                    <div className="absolute bottom-0 left-0 p-4">
                      <div className="inline-block bg-black bg-opacity-50 text-white rounded-md px-4 py-2">
                        {image.title && (
                          <h2 className="text-2xl md:text-3xl font-bold">
                            {image.title}
                          </h2>
                        )}
                        {image.description && (
                          <p className="text-base mt-1">{image.description}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {images.length > 1 && (
            <div className="flex justify-center items-center space-x-3 mt-3 mb-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Go to previous slide"
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
              >
                &lt;
              </button>
              {autoplay.field === "enableAutoPlay" && autoplay.pauseButton && (
                <button
                  type="button"
                  onClick={handlePauseToggle}
                  aria-label={
                    isPaused
                      ? "Start automatic slide show"
                      : "Stop automatic slide show"
                  }
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                >
                  {isPaused ? "Play" : "Pause"}
                </button>
              )}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Go to next slide"
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
              >
                &gt;
              </button>
            </div>
          )}
        </>
      ) : (
        <p>No images available.</p>
      )}
    </div>
  );
};

export default MyCarousel;
