"use client";

import Image from "next/image";
import { useState } from "react";
import { navItems, pageContent, type PageId } from "./site-content";
import type { Content } from "@prismicio/client";

interface HomePageProps {
  dates: Content.DateDocument[];
}

export default function HomePage({ dates }: HomePageProps) {
  const [activePage, setActivePage] = useState<PageId>("home");
  const content = pageContent[activePage];

  return (
    <main className="flex h-screen flex-col overflow-hidden bg-[#93958E] font-[Times_New_Roman,Times,serif] text-[#FEFAB8] md:flex-row">
      <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden md:w-1/2 md:flex-row md:items-start">
        <nav className="flex shrink-0 flex-row flex-wrap items-start justify-start gap-4 self-start px-4 pt-8 md:flex-col md:gap-6 md:px-5 md:pt-12">
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

        <section className="min-h-0 flex-1 overflow-y-auto px-10 py-8 md:px-10 md:py-10">
          <h1 className="mb-6 text-4xl font-bold tracking-wide md:text-5xl">
            {content.title}
          </h1>

          {/* Contact tab */}
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
          ) : /* Dates tab: show Prismic dates if available, else static fallback */
          activePage === "dates" && dates.length > 0 ? (
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
        </section>
      </div>

      <section className="flex min-h-0 w-full flex-1 flex-col overflow-hidden p-[5px] md:h-full md:w-1/2 md:flex-none">
        <div className="relative min-h-0 flex-1">
          <Image
            src="/images/IMG_9994.jpg"
            alt="Guests enjoying an intimate house concert in Reykjavík"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="relative min-h-0 flex-1">
          <Image
            src="/images/IMG_0124.png"
            alt="Cozy living room gathering at a hidden concert"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>
    </main>
  );
}
