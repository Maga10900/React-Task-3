import React, { useState } from "react";
import EditForm from "./EditForm";
import { useContext } from "react";
import { MyContext } from "../../App";

function ServicesItem(obj) {
  const [isEditing, setIsEditing] = useState(false);

  let { dispatchServices, dispatchBag } = useContext(MyContext);

  return (
    <li className="services-item">
      <div className="services-item-content">
        <h3>{obj.serviceName}</h3>
        <p>{obj.serviceDescription}</p>
      </div>
      <div className="services-item-actions">
        <button
          className="btn delete"
          onClick={() =>
            dispatchServices({ type: "DELETE FROM ARRAY", payload: obj.id })
          }
        >
          Delete
        </button>
        <button className="btn add" onClick={() => dispatchBag({type:'ADD TO BAG', payload:obj})}>
          Add to Bag
        </button>
        <button className="btn edit" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

      {isEditing && (
        <EditForm
          serviceNameValue={obj.serviceName}
          serviceDescriptionValue={obj.serviceDescription}
          flag={isEditing}
          id={obj.id}
        />
      )}
    </li>
  );
}

export default ServicesItem;
