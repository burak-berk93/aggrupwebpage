
import OrderForm from "../components/OrderForm";
import Footer from "../components/Footer";
import { Container } from "@mui/material";

function Order() {
  return (
    <div>
      <Container>
        <OrderForm />
      </Container>
      <Footer />
    </div>
  );
}

export default Order;
