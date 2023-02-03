import React from "react";
import fetchImages from "../Config/Config";
import Loading from "../Components/Loading";
import Button from "react-bootstrap/Button";
import { useInfiniteQuery } from "react-query";
import Container from "react-bootstrap/Container";
import CardGroupComponent from "../Components/Card";

export default function Home({ category, page }) {
  // infinte scroll
  const {
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    data = {},
  } = useInfiniteQuery(
    ["photos", category],
    ({ pageParam = page }) => fetchImages(category, pageParam),
    {
      getNextPageParam: (lastPage, page) => {
        return lastPage.page + 1;
      },
    }
  );

  // Loading spinner component
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      {/* fetch image component */}
      {data.pages?.map((currentPage, key) => (
        <CardGroupComponent imageArr={currentPage?.photos} key={key} />
      ))}

      {/* loading icon for newly fetch images */}
      {isFetchingNextPage && <Loading />}

      {/* "load more" button */}
      {hasNextPage && (
        <div className="text-center my-4">
          <Button variant="primary px-5" onClick={() => fetchNextPage()}>
            {" "}
            Load More{" "}
          </Button>
        </div>
      )}
    </Container>
  );
}
