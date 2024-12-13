import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

function BagItem({ obj }) {
  let { dispatchBag } = useContext(MyContext);
  return (
    <li>
      <Link state={obj} to={`/service-page/${obj.id}`}>SHOW SERVICE</Link>
      <h3>{obj.serviceName}</h3>
      <p>{obj.serviceDescription}</p>
      <p>{obj.price}</p>
      <p>{obj.count}</p>
      <button onClick={() =>
            dispatchBag({ type: "INCREMENT", payload: obj.id })
          }>+</button>
      <button onClick={() =>
            dispatchBag({ type: "DECREMENT", payload: obj.id })
          }>-</button>
      <button onClick={() =>
            dispatchBag({ type: "DELETE FROM BAG", payload: obj.id })
          }>Delete</button>
    </li>
  );
}

export default BagItem;
