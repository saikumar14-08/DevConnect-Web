import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const PremiumPage = () => {
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const checkPrem = async () => {
      try {
        await verifyPaymentUser();
      } catch (e) {
        console.log(e.message);
      }
    };
    checkPrem();
  }, []);
  const verifyPaymentUser = async () => {
    const res = await axios.get(BASE_URL + "/premium/verify", {
      withCredentials: true,
    });
    if (res?.data?.isPremium) {
      setIsPremium(true);
    }
  };

  const handleSubscribe = async (choice) => {
    const pay = await axios.post(
      BASE_URL + "/payment",
      { choice },
      { withCredentials: true }
    );
    const { amount, currency, notes, orderId, key_id } = await pay?.data;
    const options = {
      key: key_id,
      amount,
      currency,
      name: "Dev Connect",
      description: `You're purchasing`,
      order_id: orderId,
      prefill: {
        name: notes?.firstName + " " + notes?.lastName,
        email: notes?.email,
      },
      theme: {
        color: "#F37254",
      },
      handler: function () {
        verifyPaymentUser(pay);
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const firstName = useSelector((store) => store?.add_user?.firstName);
  console.log("Premium: ", isPremium);

  return isPremium ? (
    <div className="text-3xl justify-center p-4">
      Hey, {firstName}. You are already a Premium User.
    </div>
  ) : (
    <div className="flex flex-row">
      <div className="card w-96 bg-base-300 shadow-sm m-10">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">Plus</h2>
            <span className="text-xl">₹ 19/mo</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Unlimited Swipes</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Bookmark Profiles</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Verified Badge</span>
            </li>
          </ul>
          <div className="mt-6">
            <button
              className="btn btn-primary btn-block"
              onClick={() => handleSubscribe("plus")}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-300 shadow-sm m-10">
        <div className="card-body">
          <span className="badge badge-xs badge-warning">Most Popular</span>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">Premium</h2>
            <span className="text-xl">₹ 29/mo</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>One-Time Boosts</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Mentorship Matching</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>AI-Powered Matchmaking </span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>+ All Plus features</span>
            </li>
          </ul>
          <div className="mt-6">
            <button
              className="btn btn-primary btn-block"
              onClick={() => handleSubscribe("premium")}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPage;
