import { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import showToast from "../hooks/showToast";
import Button from "./button/Button";

const formateRemainingTime = (timeStamp) => {
  const totalSeconds = Math.ceil(timeStamp / 1000);
  if (totalSeconds < 60) {
    return `${totalSeconds} second${totalSeconds !== 1 ? "s" : ""}`;
  }
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes} minute${minutes !== 1 ? "s" : ""} and ${seconds} second${
    seconds !== 1 ? "s" : ""
  }`;
};

export default function CouponPage() {
  const [coupon, setCoupon] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [btnState, setBtnState] = useState("idle");
  const axiosSecure = useAxiosSecure();

  const claimCoupon = async () => {
    setLoading(true);
    setBtnState("loading");

    const lastRequestTime = localStorage.getItem("lastRequestTime");
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;
    const remainingTime = oneHour - (now - parseInt(lastRequestTime, 10));

    if (lastRequestTime && remainingTime > 0) {
      setLoading(false);
      setMessage(
        `Please wait ${formateRemainingTime(
          remainingTime
        )} before requesting another coupon.`
      );
      setBtnState("error");

      return showToast(
        `Please wait ${formateRemainingTime(
          remainingTime
        )} before requesting another coupon.`,
        "warning"
      );
    }

    try {
      const res = await axiosSecure.get("/get-coupon");
      const coupon = res?.data?.coupon;
      if (!coupon) {
        setMessage(res?.data?.msg);
        showToast(res?.data?.msg, "error");
        setBtnState("error");
        return;
      }
      setCoupon(coupon);
      localStorage.setItem("lastRequestTime", JSON.stringify(now));
      showToast("Congrates! Got your coupon. Please save it");
      setBtnState("success");
      setLoading(false);
      //   console.log(res.data);
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
      showToast("Failed to get coupon. Please try again.", "error");
      setBtnState("error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="card w-full md:w-96 bg-white shadow-lg rounded-xl p-4">
        <div className="card-body text-center">
          <h1 className="text-2xl font-bold text-gray-700">
            Round-Robin Coupon System
          </h1>
          <p className="mt-2 text-gray-600">
            Click below to claim your coupon!
          </p>
          {message && (
            <p className="mt-4 text-red-500 font-medium">{message}</p>
          )}
          {coupon && (
            <p className="mt-4 text-xl text-green-600">
              Your Coupon: <span className="font-semibold"> {coupon}</span>
            </p>
          )}

          <Button state={btnState} onClickHandler={claimCoupon} />
        </div>
      </div>
    </div>
  );
}
