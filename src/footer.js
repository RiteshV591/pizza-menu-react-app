// Footer components
export const Footer = () => {
  const hour = new Date().getHours();
  const openingHour = 10;
  const closingHour = 22;
  const isOpen = hour >= openingHour && hour <= closingHour;

  return (
    <footer className="footer">
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
};
