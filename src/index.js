import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Sample data for pizza

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// Default app component

function App() {
  // const c = console.log("");
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Header Component
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

// Menu component
function Menu() {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* Conditional Rendering - only render pizza list if there are pizza available (Using && operator) */}

      {pizzas.length > 0 && (
        // {/* React Fragment - when we don't want to wrap two elements in one div */}
        <>
          <p>
            Authentic italian cuisin. 6 creative dishes to choose from. All from
            our stone own, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      )}

      {/* <Pizza
        photoName={pizzaData[0].photoName}
        pizzaName={pizzaData[0].name}
        ingredients={pizzaData[0].ingredients}
        price={pizzaData[0].price}
      /> */}
    </main>
  );
}

// single pizza list item component
function Pizza({ pizzaObj }) {
  // Conditional rendering using multiple returns, eg.if..else
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

// Footer components
function Footer() {
  const hour = new Date().getHours();
  const openingHour = 10;
  const closingHour = 22;
  const isOpen = hour >= openingHour && hour <= closingHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {/* Conditional Redenring - only render footer text if isOpen is true (Using ternary operator) */}
      {isOpen ? (
        <div className="order">
          <p>We're open until {closingHour}:00. Come visit us</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          {" "}
          We're happy to welcome you between {openingHour}:00 and {closingHour}
          :00.
        </p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
