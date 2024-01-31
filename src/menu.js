import { Pizza } from "./pizzaList.js";

// Menu component
export const Menu = ({ pizzaData }) => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaData.length > 0 && (
        <>
          <p>
            Authentic italian cuisin. 6 creative dishes to choose from. All from
            our stone own, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} />
            ))}
          </ul>
        </>
      )}
    </main>
  );
};
