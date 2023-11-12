/* 
    implementation of tags 
    with tanstack query for example and exprience (exp)
*/
import React, { useState } from "react";
import api from "../services/rawg-api-client";
import {
  useQuery,
  keepPreviousData,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Badge, Button } from "@chakra-ui/react";

interface Tag {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  language: string;
}
interface TagsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Tag[];
}
const Tags = () => {
  const [next, setNext] = useState<string | null>(null);
  const [pervious, setPrevious] = useState<string | null>(null);
  const [current, setCurrent] = useState<string | null>(null);

  const result = useQuery<Tag[], Error>({
    placeholderData: keepPreviousData,
    queryKey: ["tags", current ?? "1"],
    queryFn: () => {
      return api
        .get<TagsResponse>("/tags", {
          params: {
            page_size: 20,
            page: current ?? 1,
          },
        })
        .then((res) => {
          let nextURL: URLSearchParams | null;
          let previousURL: URLSearchParams | null;
          if (res.data.next) {
            nextURL = new URLSearchParams(res.data.next);
            const nextPageNumber = nextURL?.get("page");
            if (nextPageNumber !== current) {
              setNext(nextPageNumber);
            }
          }
          if (res.data.previous) {
            previousURL = new URLSearchParams(res.data.previous);
            const previousPageNumber = previousURL.get("page");
            if (previousPageNumber != current) {
              setPrevious(previousPageNumber);
            }
          }

          return res.data.results;
        });
    },
    staleTime: 1000 * 10,
  });

  const qc = useQueryClient();
  const addTag = useMutation<
    Tag,
    Error,
    Omit<Tag, "id">,
    Record<string, string>
  >({
    mutationFn: (newTag) => {
      return Promise.resolve({
        id: 10_000_000,
        ...newTag,
      } as Tag);
    },
    onSuccess: (saved, newTag, ctx) => {
      qc.setQueryData<Tag[]>(["tags", "1"], (tags = []) => {
        return [...tags, saved];
      });
    },
    onError: (err, newTag, ctx) => {
      alert(err.message);
    },
  });
  if (result.isError) {
    return <div>{result.error.message}</div>;
  }

  if (result.isPending) {
    return <div>fetching data ...</div>;
  }
  return (
    <>
      {result.data?.map((t) => {
        return <Badge key={t.id}>{t.name}</Badge>;
      })}
      <hr></hr>
      <Button
        variant={"ghost"}
        colorScheme={"gray"}
        disabled={pervious === null}
        onClick={() => {
          setCurrent(pervious);
        }}
      >
        previous
      </Button>
      <Button
        variant={"ghost"}
        colorScheme={"gray"}
        disabled={next === null}
        onClick={() => {
          setCurrent(next);
        }}
      >
        next
      </Button>
      <Button
        onClick={() => {
          addTag.mutate({
            name: "new tag",
            slug: "new-tag",
            image_background: "",
            games_count: 3,
            language: "En",
          });
        }}
      >
        add one test tag
      </Button>
    </>
  );
};

export default Tags;
