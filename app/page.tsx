import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#93958E] font-[Times_New_Roman,Times,serif] text-[#FEFAB8] md:flex-row">
      <section className="flex w-full flex-col justify-center gap-6 px-10 py-12 md:w-1/2 md:px-14 md:py-16">
        <h1 className="text-5xl font-bold tracking-wide md:text-6xl">
          Hidden Concerts
        </h1>
        <div className="space-y-5 text-lg leading-relaxed md:text-xl">
          <p>
            Join an intimate house concert in Reykjavík and experience live
            music in a truly special setting.
          </p>
          <p>
            You&apos;ll be welcomed into an authentic Reykjavík home, where
            carefully selected Icelandic musicians perform up close in a cozy
            living room atmosphere. With a maximum of 15 guests, the evening
            feels personal, relaxed, and thoughtfully curated.
          </p>
          <p>
            This is more than a concert, it&apos;s a chance to slow down and
            connect through music. Expect a warm ambiance, beautiful acoustic
            sounds, and stories shared between songs. Guests are warmly invited
            to chat with the artists, ask questions, and be part of the
            experience.
          </p>
          <p>
            A unique and memorable evening for those seeking something genuine,
            local, and quietly magical in Reykjavík.
          </p>
        </div>
      </section>

      <section className="flex w-full flex-col p-[5px] md:h-screen md:w-1/2">
        <div className="relative min-h-[40vh] flex-1 md:min-h-0">
          <Image
            src="/images/IMG_9994.jpg"
            alt="Guests enjoying an intimate house concert in Reykjavík"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="relative min-h-[40vh] flex-1 md:min-h-0">
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
