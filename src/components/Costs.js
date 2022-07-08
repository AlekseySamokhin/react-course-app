import ConstItem from "./CostItem";
import "./Costs.css";

function Costs(props) {
  return (
    <div className="costs">
      <ConstItem
        date={props.costs[0].date}
        description={props.costs[0].description}
        amount={props.costs[0].amount}
      ></ConstItem>
      <ConstItem
        date={props.costs[1].date}
        description={props.costs[1].description}
        amount={props.costs[1].amount}
      ></ConstItem>
      <ConstItem
        date={props.costs[2].date}
        description={props.costs[2].description}
        amount={props.costs[2].amount}
      ></ConstItem>
    </div>
  );
}

export default Costs;
