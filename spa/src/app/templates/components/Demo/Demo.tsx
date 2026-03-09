"use client";

import React from "react";
import IDemoProps from "./Demo.model";

// TODO: Replace with your Magnolia app base path or use an environment variable
const MAGNOLIA_APP_BASE = "/home";

const Demo: React.FC<IDemoProps> = ({
  title,
  variant = "primary",
  backgroundColor,
  size = "medium",
  disabled,
  pageLinkChooser,
}) => {
  const baseClasses =
    "font-bold rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white";
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    ternary: "bg-green-500 hover:bg-green-700 text-white",
    outline:
      "bg-transparent border border-gray-500 hover:bg-gray-100 text-gray-700",
    link: "bg-transparent text-blue-500 hover:underline",
  };
  const sizeStyles = {
    small: "py-1 px-2 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg",
  };
  const variantClass = variantStyles[variant] || variantStyles.primary;
  const sizeClass = sizeStyles[size] || sizeStyles.medium;
  const buttonStyle = backgroundColor ? { backgroundColor } : {};

  const disabledClass = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  let linkHref = "#";
  let isExternal = false;
  if (
    pageLinkChooser &&
    pageLinkChooser.field &&
    (pageLinkChooser.internalLink || pageLinkChooser.externalLink)
  ) {
    if (pageLinkChooser.field === "internalPageLink") {
      let link = pageLinkChooser.internalLink || "";
      if (link.startsWith(MAGNOLIA_APP_BASE)) {
        link = link.slice(MAGNOLIA_APP_BASE.length);
        if (!link.startsWith("/")) {
          link = "/" + link;
        }
      }
      linkHref = link;
      isExternal = false;
    } else if (pageLinkChooser.field === "externalPageLink") {
      linkHref = pageLinkChooser.externalLink || "#";
      isExternal = true;
    }
  }

  return (
    <div className="p-2">
      <a
        href={disabled ? undefined : linkHref}
        className={`${variantClass} ${sizeClass} ${baseClasses} ${disabledClass}`}
        style={buttonStyle}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        aria-disabled={disabled ? "true" : undefined}
        tabIndex={disabled ? -1 : 0}
      >
        {title}
      </a>
    </div>
  );
};

export default Demo;
