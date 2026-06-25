import { createClient } from "@/prismicio";
import HomePage from "./home-page";

export const revalidate = 60;

export default async function Page() {
  const client = createClient();

  const [dates, images] = await Promise.all([
    client
      .getAllByType("date", { orderings: [{ field: "my.date.date" }] })
      .catch(() => []),
    client.getAllByType("image").catch(() => []),
  ]);

  return <HomePage dates={dates} images={images} />;
}
