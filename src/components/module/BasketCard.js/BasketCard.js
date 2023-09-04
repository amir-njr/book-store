
// Components
import Right from "./Right";
import Middle from "./Middle";
import Left from "./Left";

export default function BasketCard({ selected }) {
  const { title, price, qty, category } = selected;


  return (
    <div className="md:flex md:flex-row flex flex-col gap-4 border-b-2 py-2 border-blue-600">
      <Right category={category} title={title} price={price}/>
      <Middle qty={qty} />
      <Left selected={selected}/>
    </div>
  );
}
