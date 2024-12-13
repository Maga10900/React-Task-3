import React, { useContext, useState } from "react";
import ServicesItem from "./ServicesItem";
import AddForm from "../AddForm";
import LoginForm from "../LoginForm";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import { MyContext } from "../../App";

 
function Services() {
  const [search, setSearch] = useState("");

  let { stateServices } = useContext(MyContext)
 
  const filteredArray = stateServices.services.filter((item) =>
    item.serviceName.toLowerCase().startsWith(search.toLowerCase())
  );
 
  return (
    <section className="services">
      <header className="services-header">
        <h1>Our Services</h1>
        <LoginForm />
      </header>
 
      <div className="services-controls">
        <input
          type="text"
          onInput={(e) => setSearch(e.target.value)}
          placeholder="Search services..."
          className="services-search"
        />
        <AddForm />
      </div>
      <Link to='about'>ABOUT</Link>
      <Link to='contacts'>CONTACTS</Link>
       <Outlet/>
    
 
      <ul className="services-list">
        {filteredArray.map((item, index) => (
          <ServicesItem
            key={index}
            {...item}
          />
        ))}
      </ul>
    </section>
  );
}
 
export default Services;