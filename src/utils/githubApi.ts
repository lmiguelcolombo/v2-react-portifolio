import { useMemo, useState } from "react";

interface RepoProps {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

const useRepos = () => {
  const [repos, setRepos] = useState<RepoProps[]>([]);

  useMemo(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/lmiguelcolombo/repos"
        );
        const reposData = await response.json();
        setRepos(reposData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchRepos();
  }, []);

  return repos;
};

export default useRepos;
