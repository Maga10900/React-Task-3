import { useContext } from "react";
import { MyContext } from "../App";

function AddForm() {
  let { dispatchServices } = useContext(MyContext);

  function handleForm(ev) {
    ev.preventDefault();
    let formData = Object.fromEntries([...new FormData(ev.target)]);

    dispatchServices({type:'ADD TO ARRAY', payload: formData})
  }

  return (
    <section>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="serviceName" name="serviceName" />
        <input
          type="text"
          placeholder="serviceDescription"
          name="serviceDescription"
        />
        <button>ADD</button>
      </form>
    </section>
  );
}

export default AddForm;
