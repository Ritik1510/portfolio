import { useEffect, useState } from "react";

const DEFAULT_REPO = "Ritik1510/portfolio";

export function useGithubLastCommit(repo = DEFAULT_REPO) {
  const [commit, setCommit] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchLastCommit() {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${repo}/commits?per_page=1`,
          {
            signal: controller.signal,
            headers: { Accept: "application/vnd.github+json" },
          }
        );

        // Response handling
        if (!response.ok) return;

        const [data] = await response.json();
        if (!data) return;

        // Data handling
        const commit = {
          sha: data.sha.slice(0, 7),
          message: data.commit.message.split("\n")[0],
          date: new Date(data.commit.author.date),
          url: data.html_url,
        };

        setCommit(commit);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.warn("Failed to fetch last GitHub commit:", error);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchLastCommit();

    return () => controller.abort();
  }, [repo]);

  return { commit, loading };
}
