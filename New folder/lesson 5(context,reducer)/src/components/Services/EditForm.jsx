import { useContext } from "react";
import { MyContext } from "../../App";

function EditForm({
  flag,
  id,
  serviceNameValue,
  serviceDescriptionValue,
}) {
  console.log(id);

  let { dispatchServices} = useContext(MyContext)

  function handleForm(ev) {
    ev.preventDefault();
    let formData = Object.fromEntries([...new FormData(ev.target)]);
    dispatchServices({type:'EDIT SERVICE', data: {id:id, formData:formData}})
  }

  return (
    <section className={flag ? "" : "hide"}>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="serviceName" name="serviceName" defaultValue={serviceNameValue.current}/>
        <input
          type="text"
          placeholder="serviceDescription"
          name="serviceDescription"
          defaultValue={serviceDescriptionValue.current}
        />
        <button>ADD</button>
      </form>
    </section>
  );
}

export default EditForm;
