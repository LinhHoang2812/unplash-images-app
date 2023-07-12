import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./context";
import axios from "axios";

const Gallery = () => {
  const { search } = useGlobalContext();
  const { isLoading, data } = useQuery({
    queryKey: ["image", search],
    queryFn: () =>
      axios.get(
        `https://api.unsplash.com/search/photos?client_id=${
          import.meta.env.VITE_API_KEY
        }&query=${search}&page=1`
      ),
  });
  if (isLoading) {
    return (
      <h4 style={{ marginTop: "15rem", marginLeft: "30rem" }}>Loading......</h4>
    );
  }
  if (data.data.results.length === 0) {
    return (
      <h4 style={{ marginTop: "15rem", marginLeft: "30rem" }}>
        No results found
      </h4>
    );
  }

  return (
    <section className="image-container">
      {data.data.results.map((img) => (
        <img className="img" src={img.urls.small} key={img.id} />
      ))}
    </section>
  );
};
export default Gallery;
