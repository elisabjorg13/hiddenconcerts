export type PageId = "home" | "dates" | "tickets" | "practical";

export const contactEmail = "contact@hiddenconcerts.is";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "link"; before: string; linkText: string; href: string };

export type NavItem =
  | { id: PageId; label: string }
  | { label: string; mailto: string };

export type PageContent = {
  title: string;
  blocks: ContentBlock[];
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "dates", label: "Dates" },
  { id: "tickets", label: "Tickets" },
  { id: "practical", label: "Practical info" },
  { label: "Contact", mailto: contactEmail },
];

export const pageContent: Record<PageId, PageContent> = {
  home: {
    title: "Hidden Concerts",
    blocks: [
      {
        type: "paragraph",
        text: "Join an intimate house concert in Reykjavík and experience live music in a truly special setting.",
      },
      {
        type: "paragraph",
        text: "You'll be welcomed into an authentic Reykjavík home, where carefully selected Icelandic musicians perform up close in a cozy living room atmosphere. With a maximum of 15 guests, the evening feels personal, relaxed, and thoughtfully curated.",
      },
      {
        type: "paragraph",
        text: "This is more than a concert, it's a chance to slow down and connect through music. Expect a warm ambiance, beautiful acoustic sounds, and stories shared between songs. Guests are warmly invited to chat with the artists, ask questions, and be part of the experience.",
      },
      {
        type: "paragraph",
        text: "A unique and memorable evening for those seeking something genuine, local, and quietly magical in Reykjavík.",
      },
    ],
  },
  dates: {
    title: "Dates",
    blocks: [
      { type: "paragraph", text: "Next available dates" },
      { type: "paragraph", text: "22. June 2026, 17:00" },
      { type: "paragraph", text: "27. June 2026, 14:00" },
      { type: "paragraph", text: "28. June 2026, 15:00" },
    ],
  },
  tickets: {
    title: "Tickets",
    blocks: [
      {
        type: "link",
        before: "purchase tickets ",
        linkText: "here",
        href: "https://www.airbnb.co.uk/experiences/7072679?viralityEntryPoint=2&s=76",
      },
    ],
  },
  practical: {
    title: "Practical info",
    blocks: [
      {
        type: "paragraph",
        text: "The Hidden Concert series is located in an old charming apartment close to Reykjavik city centre. It is on the second floor with no elevator. There is a maximum of 15 guests per concert.",
      },
    ],
  },
};
