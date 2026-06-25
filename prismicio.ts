import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

/**
 * The project's Prismic repository name — replace with your own.
 * Find it in your Prismic dashboard URL: https://your-repo-name.prismic.io
 */
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY_NAME ?? "your-repo-name";

export function createClient(config: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient(repositoryName, {
    ...config,
  });

  prismicNext.enableAutoPreviews({ client });

  return client;
}
