import { useEffect, useState } from "react";
import Platform from "../schemas/platform.schema";
import api from "../services/rawg-api-client";
import axios from "axios";
interface PlatformsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Platform[];
}
const PAGE_SIZE = 8;

const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>();
  const [next, setNext] = useState<string | null>(null);

  const loadMorePlatform = () => {
    if (!next) {
      return;
    }

    axios
      .get<PlatformsResponse>(next, {
        params: {
          page_size: PAGE_SIZE,
        },
      })
      .then((resp) => {
        setPlatforms([...platforms, ...resp.data.results]);
        setNext(resp.data.next);
      })
      .catch((e) => {
        // nothing set
      });
  };

  useEffect(() => {
    setError("");
    setLoading(true);

    api
      .get<PlatformsResponse>("/platforms", {
        params: {
          page_size: PAGE_SIZE,
        },
      })
      .then((resp) => {
        setPlatforms(resp.data.results);
        setNext(resp.data.next);

        setError("");

        setLoading(false);
      })
      .catch((e) => {
        setError(`${e}`);
        setLoading(false);
      });
  }, []);

  return {
    platforms,
    error,
    loading,
    loadMorePlatform,
  };
};

export default usePlatforms;
