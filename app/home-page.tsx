"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems, pageContent, type PageId } from "./site-content";
import type { Content } from "@prismicio/client";

interface HomePageProps {
  dates: Content.DateDocument[];
  images: Content.ImageDocument[];
}

function Slideshow({ images }: { images: Content.ImageDocument[] }) {
  const [curr, setCurr] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [phase, setPhase] = useState<"idle" | "fading">("idle");

  useEffect(() => {
    if (images.length < 2) return;
    const interval = setInterval(() => {
      const nextIdx = (curr + 1) % images.length;
      setNext(nextIdx);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setPhase("fading"));
      });
      setTimeout(() => {
        setCurr(nextIdx);
        setNext(null);
        setPhase("idle");
      }, 1400);
    }, 5000);
    return () => clearInterval(interval);
  }, [curr, images.length]);

  const currImg = images[curr]?.data.image;
  const nextImg = next !== null ? images[next]?.data.image : null;
  const isFading = phase === "fading";

  return (
    <div className="relative h-full w-full">
      {currImg?.url && (
        <div
          className={`absolute inset-0 flex items-start justify-end p-4 ease-in-out ${isFading ? "transition-opacity duration-[1200ms]" : ""}`}
          style={{ opacity: isFading ? 0 : 1 }}
        >
          <img
            src={currImg.url}
            alt={currImg.alt ?? ""}
            className="max-h-full max-w-full object-contain object-right-top"
          />
        </div>
      )}
      {nextImg?.url && (
        <div
          className="absolute inset-0 flex items-start justify-end p-4 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: isFading ? 1 : 0 }}
        >
          <img
            src={nextImg.url}
            alt={nextImg.alt ?? ""}
            className="max-h-full max-w-full object-contain object-right-top"
          />
        </div>
      )}
    </div>
  );
}

export default function HomePage({ dates, images }: HomePageProps) {
  const [activePage, setActivePage] = useState<PageId>("home");
  const content = pageContent[activePage];

  const pageContent_ = (
    <>
      {activePage === "contact" ? (
        <div className="space-y-5 text-base leading-relaxed md:text-lg">
          <p>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/hiddenconcerts/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
            >
              @hiddenconcerts
            </a>
          </p>
          <p>Email: contact@hiddenconcerts.is</p>
        </div>
      ) : activePage === "dates" && dates.length > 0 ? (
        <div className="space-y-5 text-base leading-relaxed md:text-lg">
          <p>Next available dates</p>
          {dates.map((d) => (
            <p key={d.id}>{d.data.date}</p>
          ))}
        </div>
      ) : (
        <div className="space-y-5 text-base leading-relaxed md:text-lg">
          {content.blocks.map((block, index) =>
            block.type === "paragraph" ? (
              <p key={index}>{block.text}</p>
            ) : (
              <p key={index}>
                {block.before}
                <a
                  href={block.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  {block.linkText}
                </a>
              </p>
            ),
          )}
        </div>
      )}
    </>
  );

  return (
    <main className="flex min-h-screen flex-col bg-[#884617] font-[Arial,Helvetica,sans-serif] text-[#FEFAB8] md:h-screen md:flex-row md:overflow-hidden">

      {/* ── Left column: nav + content ── */}
      <div className="flex w-full flex-col md:min-h-0 md:w-1/2 md:flex-1 md:flex-row md:items-start md:overflow-hidden">
        <nav className="flex w-full shrink-0 flex-row flex-wrap items-start justify-center gap-4 px-4 pt-8 md:w-auto md:self-start md:flex-col md:justify-start md:gap-6 md:px-5 md:pt-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActivePage(item.id)}
              className={`text-left text-sm transition-opacity hover:opacity-80 md:text-base ${
                activePage === item.id ? "font-bold" : "opacity-70"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <section className="flex-1 px-10 py-8 md:min-h-0 md:overflow-y-auto md:px-10 md:py-10">
          <h1 className="mb-6 text-3xl font-bold tracking-wide md:text-4xl">
            {content.title}
          </h1>
          {pageContent_}
        </section>
      </div>

      {/* ── Right column: desktop slideshow / mobile image column ── */}
      <section className="w-full p-4 md:relative md:h-full md:w-1/2 md:flex-none md:overflow-hidden">

        {/* Desktop: animated slideshow */}
        {images.length > 0 ? (
          <div className="hidden md:block md:absolute md:inset-0">
            <Slideshow images={images} />
          </div>
        ) : (
          <div className="hidden md:block md:absolute md:inset-0 md:flex md:items-start md:justify-end md:p-4">
            <Image
              src="/images/IMG_9994.jpg"
              alt="Hiddenconcerts"
              width={1200}
              height={800}
              priority
              className="max-h-full max-w-full object-contain object-right-top"
            />
          </div>
        )}

        {/* Mobile: all images stacked in a column */}
        <div className="flex flex-col gap-4 md:hidden">
          {images.length > 0 ? (
            images.map((img) =>
              img.data.image?.url ? (
                <img
                  key={img.id}
                  src={img.data.image.url}
                  alt={img.data.image.alt ?? ""}
                  className="w-full h-auto"
                />
              ) : null,
            )
          ) : (
            <Image
              src="/images/IMG_9994.jpg"
              alt="Hiddenconcerts"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          )}
        </div>
      </section>
    </main>
  );
}
