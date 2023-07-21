import "./reserve.css";
import useFetch from "../../components/hooks/useFetch";

const Reserve = ({ setOpenModal, hotelId }) => {
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
console.log(data)
  return (
    <div className="reserve">
      <div className="rContainer">
        <button onClick={() => setOpenModal(false)} className="rClose">
          X
        </button>
        <span>Select your rooms:</span>
        {data.map((item) => (
          <div className="rItem">
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people <b>{item.maxPeople}</b>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reserve;
