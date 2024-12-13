import BagItem from "./BagItem";
import { useContext } from "react";
import { MyContext } from "../../App";

function BagList() {
  let { stateBag } = useContext(MyContext);
  console.log(stateBag)
  return (
    <section className="services-list">
      <ul>
        {stateBag.bag.map((item, index) => (
          <BagItem key={index} obj={item} />
        ))}
      </ul>

      {stateBag.bag.reduce((a, sum) => a + sum.totalPrice, 0)}
    </section>
  );
}

export default BagList;

