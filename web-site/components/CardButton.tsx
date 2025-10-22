"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface CardButtonProps {
  title: string;
  description: string;
  imgSrc: string; // image or video
  href: string; // main card link
  githubLink?: string;
  docLink?: string;
  ctaLabel?: string;
  ctaLink?: string;
}

export default function CardButton({
  title,
  description,
  imgSrc,
  href,
  githubLink,
  docLink,
  ctaLabel,
  ctaLink,
}: CardButtonProps) {
  const isVideo = imgSrc.endsWith(".mp4");
  const router = useRouter();

  const handleClick = () => {
    // Navigate when clicking anywhere except the buttons
    router.push(href);
  };

  return (
    <div
      onClick={handleClick}
      className="group block bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
    >
      {/* Media */}
      <div className="flex justify-center py-4">
        {isVideo ? (
          <video className="h-30 w-auto rounded-md" autoPlay loop muted playsInline>
            <source src={`${process.env.NODE_ENV === "production" ? "/battmo.org" : ""}${imgSrc}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={`${process.env.NODE_ENV === "production" ? "/battmo.org" : ""}${imgSrc}`} alt={title} className="h-30 w-auto object-contain rounded-md" />
        )}
      </div>

      {/* Text + Buttons */}
      <div className="p-4 text-center">
        <h2 className="font-semibold text-lg mb-1">{title}</h2>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        <div className="flex justify-center gap-4 flex-wrap">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // prevent navigation override
              className="px-3 py-1 rounded-md bg-gray-800 text-white text-sm hover:bg-gray-700 transition"
            >
              GitHub
            </a>
          )}

          {/* CTA button (priority over Docs) */}
          {ctaLabel && ctaLink ? (
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-3 py-1 rounded-md bg-primary text-white text-sm hover:bg-primary/90 transition"
            >
              {ctaLabel}
            </a>
          ) : docLink ? (
            <a
              href={docLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-3 py-1 rounded-md bg-primary text-white text-sm hover:bg-primary/90 transition"
            >
              Docs
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
