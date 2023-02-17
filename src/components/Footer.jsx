import { useCart } from "../Hooks/useCart";
import { useFilters } from "../Hooks/useFilters";
import "./Footer.css";

const Footer = () => {
  const { cart } = useCart();
  const { filters } = useFilters();
  return (
    <footer className="footer">
      {/* {JSON.stringify(filters, null, 2)} */}
      {JSON.stringify(cart, null, 2)}
      {/* <h4>Prueba técnica de React ⚛️ － <span>@midudev</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  );
};

export default Footer;
