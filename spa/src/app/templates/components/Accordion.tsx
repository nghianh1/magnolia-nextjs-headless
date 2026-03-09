"use client";
import React, { useState } from "react";
import { environment } from "../../../environments/environment";
import { decodeIfEscaped } from "../../services/content-service";

interface AccordionNode {
  "@id": string;
  "@nodes"?: string[];
  expanded?: boolean;
  title?: string;
  description?: string;
  imageChooser?: {
    field?: "image" | "externalImage";
    image?: {
      "@link": string;
    };
    imageAlt?: string;
    externalImage?: string;
    externalImageAlt?: string;
  };
}

interface AccordionData {
  "@nodes"?: string[];
  [key: string]: AccordionNode | string[] | undefined;
}

interface IAccordionProps {
  accordion: AccordionData;
}

const Accordion: React.FC<IAccordionProps> = ({ accordion }) => {
  const nodeKeys = accordion["@nodes"] || [];
  const initialActiveIndices = nodeKeys.reduce((acc: number[], key, index) => {
    const node = accordion[key] as AccordionNode;
    if (node?.expanded) {
      acc.push(index);
    }
    return acc;
  }, []);

  const [activeIndices, setActiveIndices] =
    useState<number[]>(initialActiveIndices);

  const handleToggle = (index: number) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="w-full my-6 space-y-2">
      {nodeKeys.map((key, index) => {
        const node = accordion[key] as AccordionNode;
        let imageSrc = "";
        let imageAlt = "Image";

        if (node.imageChooser && node.imageChooser.field) {
          if (node.imageChooser.field === "image" && node.imageChooser.image) {
            imageSrc = `${environment.damRawBase}${node.imageChooser.image["@link"]}`;
            imageAlt = node.imageChooser.imageAlt || "Image";
          } else if (
            node.imageChooser.field === "externalImage" &&
            node.imageChooser.externalImage
          ) {
            imageSrc = node.imageChooser.externalImage;
            imageAlt = node.imageChooser.externalImageAlt || "Image";
          }
        }
        const hasDescription =
          !!node.description && node.description.trim() !== "";
        const isExpanded = activeIndices.includes(index);

        return (
          <div key={node["@id"]} className="border rounded-md shadow-sm">
            <button
              type="button"
              onClick={() => handleToggle(index)}
              className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
            >
              <span className="font-semibold">{node.title}</span>
              <span
                className={`ml-2 inline-flex items-center justify-center transform transition-transform duration-200 ${
                  isExpanded ? "" : "rotate-180"
                }`}
              >
                ▿
              </span>
            </button>
            {isExpanded && (
              <div className="px-4 py-2 bg-white">
                {imageSrc ? (
                  hasDescription ? (
                    <div className="flex space-x-4">
                      <div className="w-1/2 h-64 flex items-center justify-center">
                        <img
                          src={imageSrc}
                          alt={imageAlt}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div
                        className="w-1/2"
                        dangerouslySetInnerHTML={{
                          __html: decodeIfEscaped(node.description || ""),
                        }}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-64 flex items-center justify-center">
                      <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  )
                ) : (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: decodeIfEscaped(node.description || ""),
                    }}
                  />
                )}
              </div>
            )}
          </div>
        );
      })}

      

    </div>
  );
};

export default Accordion;
