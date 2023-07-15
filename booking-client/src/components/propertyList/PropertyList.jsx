import "./propertyList.css";
import useFetch from "../hooks/useFetch";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");
  const images = [
    "https://cf.bstatic.com/xdata/images/hotel/square600/466470357.webp?k=4dec329fed5468a80db9024f1f926a804f659f7621908af5af259fb0b4bc82fe&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square600/466470357.webp?k=4dec329fed5468a80db9024f1f926a804f659f7621908af5af259fb0b4bc82fe&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square600/466470357.webp?k=4dec329fed5468a80db9024f1f926a804f659f7621908af5af259fb0b4bc82fe&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square600/466470357.webp?k=4dec329fed5468a80db9024f1f926a804f659f7621908af5af259fb0b4bc82fe&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square600/466470357.webp?k=4dec329fed5468a80db9024f1f926a804f659f7621908af5af259fb0b4bc82fe&o=",

  ]
  return (
    <div className="pList">
      {loading ? (
        "Loading"
      ) : (
        <>
        {data && 
         images.map((img,i) => (  
          <div className="pListItem" key={i}>
            <img
              src={img}
              alt=""
              className="pListImg"
            />
            <div className="pListTitle">
              <h1>{data[i]?.type}</h1>
              <h2>{data[i]?.count} {data[i]?.type}</h2>
            </div>
          </div>
          ))}
         
        </>
      )}
    </div>
  );
};

export default PropertyList;
