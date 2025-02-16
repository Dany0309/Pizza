import React from "react";
import "./scss/app.scss";

// import Header from "./components/Header";
// import Sort from "./components/Sort";
// import Categories from "./components/Categories";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  const [items,setItems]=React.useState([]);

  React.useEffect(()=>{
    fetch("https://3d3594b01633b18c.mokky.dev/items")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  },[]);

  

  return (
    <div className="wrapper">
      {/* Хедер */}
      
        <div className="container">
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>

  );
}

export default App;
