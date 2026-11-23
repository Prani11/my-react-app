
import { useState } from "react";

function MenuItem({ name, category, price }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Price: ₹{price}</p>
      <hr />
    </div>
  );
}

function App() {
  const [filter, setFilter] = useState("All");

  const menu = [
    { id: 1, name: "Veg Biryani", category: "Veg", price: 150 },
    { id: 2, name: "Chicken Biryani", category: "Non-Veg", price: 250 },
    { id: 3, name: "Paneer Curry", category: "Veg", price: 180 },
    { id: 4, name: "Chicken Curry", category: "Non-Veg", price: 220 }
  ];

  const filteredMenu = menu.filter(
    item => filter === "All" || item.category === filter
  );

  return (
    <div>
      <h1>Food Menu</h1>

      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Veg")}>Veg</button>
      <button onClick={() => setFilter("Non-Veg")}>Non-Veg</button>

      {filteredMenu.map(item => (
        <MenuItem
          key={item.id}
          name={item.name}
          category={item.category}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default App;
