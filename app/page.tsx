import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center">
      <Image
        src="/images/IMG_9994.jpg"
        alt="Hiddenconcerts background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <h1 className="relative z-10 text-6xl font-bold tracking-widest text-white drop-shadow-lg">
        Hiddenconcerts
      </h1>
    </main>
  );
}
