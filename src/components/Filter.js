import { useEffect, useState } from "react";
import { useProducts } from "./context";
import './Filter.css'

export default function Filter() {

const [items, setItems] = useState([]);
const { setActualCat } = useProducts();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((response) => response.json())
      .then((data) => {
        const formatted = data.map((categ, id) => ({
          id: id + 1,
          text: categ,
          checked: false,
        }));

        formatted.unshift({
          id: 0, 
          text: "All",
          checked: false,
        });

        setItems(formatted);
      });
  }, []);



  const handleCheckboxChange = (itemId) => {
    const updatedItems = items.map((item) => ({
      ...item,
      checked: item.id === itemId,
    }));
    setItems(updatedItems);
  };

  useEffect(() => {
    setActualCat(items.filter((item) => item.checked));
  }, [items, setActualCat]);

  

  return (
    <div className="categories">
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <span>{item.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );

}
