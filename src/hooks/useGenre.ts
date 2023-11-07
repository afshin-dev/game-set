import { useEffect, useState } from "react";
import api from "../services/rawg-api-client";
import Genre from "../schemas/genre.schema";
interface GenreResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Genre[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError("");
    setLoading(true);
    api
      .get<GenreResponse>("/genres")
      .then((resp) => {
        setGenres(resp.data.results);
        setLoading(false);
      })
      .catch((e) => {
        setError(error.toString());
        setLoading(false);
      });
  }, []);

  return {
    genres,
    loading,
    error,
  };
};

export default useGenres;
