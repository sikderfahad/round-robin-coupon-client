import { Helmet } from "react-helmet";
import CouponPage from "./components/CouponPage";
import ToastBox from "./components/toastBox/ToastBox";

const App = () => {
  return (
    <div>
      <Helmet>
        <title>Round Robin Coupon | Home</title>
      </Helmet>
      <CouponPage />
      <ToastBox />
    </div>
  );
};

export default App;
