import {  useLocation, useOutletContext, useParams } from "react-router-dom";

function ServicePage() {
  let { id } = useParams();
  let {state} = useLocation()
  console.log(state)


  if (!state) {
    return (
      <section>
        <h1>404 IS NOT FOUND!!!!</h1>
      </section>
    );
  }

  return (
    <section>
      <h1>ServicePage</h1>
      <div>
        <p>{state ? state.serviceName : "HAS NOT"}</p>
        <p>
          {state ? state.serviceDescription : "HAS NOT"}
        </p>
      </div>
    </section>
  );
}

export default ServicePage;
