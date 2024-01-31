// Menu component
const Menu = ({ pizzaData }) => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* Conditional Rendering - only render pizza list if there are pizza available (Using && operator) */}

      {pizzaData.length > 0 && (
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
};

// single pizza list item component
const Pizza = ({ pizzaObj }) => {
  // Conditional rendering using multiple returns, eg.if..else
  // if (pizzaObj.soldOut) return null;

  // Destructured props (pizzaObj)
  const { name, ingredients, price, photoName, soldOut } = pizzaObj;

  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
};

export default Menu;
