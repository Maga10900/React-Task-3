import { createContext, useReducer } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainComp from "./components/MainComp";
import { initialObjectServices, reducerServices } from "./reducer/reducerServices";
import { initialObjectBag, reducerBag } from "./reducer/reducerBag";

export const MyContext = createContext();

function App() {
  let [stateServices, dispatchServices] = useReducer(reducerServices, initialObjectServices)
  let [stateBag, dispatchBag] = useReducer(reducerBag, initialObjectBag)

  return (
    <MyContext.Provider
      value={{
        stateServices,
        dispatchServices,
        stateBag,
        dispatchBag
      }}
    >
      <Header />
      <MainComp />
      <Footer />
    </MyContext.Provider>
  );
}

export default App;
