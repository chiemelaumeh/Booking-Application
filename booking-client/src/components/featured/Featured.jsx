import useFetch from "../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Berlin,London,Madrid"
  );
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://cdn.generationvoyage.fr/2023/04/madrid-1536x917.jpg.webp"
              alt=""
            />
            <div className="featuredTitle">
              <h1>Berlin</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://cdn.generationvoyage.fr/2023/04/madrid-1536x917.jpg.webp"
              alt=""
            />
            <div className="featuredTitle">
              <h1>London</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://cdn.generationvoyage.fr/2023/04/madrid-1536x917.jpg.webp"
              alt=""
            />
            <div className="featuredTitle">
              <h1>Madrid</h1>
              <h2>{data[2]} Properties</h2>
            </div>
          </div>
        </>
    
      )}
    </div>
  );
};

export default Featured;
