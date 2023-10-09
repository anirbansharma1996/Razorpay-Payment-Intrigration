import React from "react";
import Card from "./card";
import { checkoutHandler } from "./api/payment.api";
const data = [
  {
    amount: 50000,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    amount: 3000,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
];

const Home = () => {
 

  return (
    <div>
      <div className="container d-flex">
        {data?.map((el) => (
          <Card
            key={el.amount}
            amount={el.amount}
            img={el.image}
            checkoutHandler={checkoutHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
