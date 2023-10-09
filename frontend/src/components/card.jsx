import React from "react";

const Card = ({ amount, img, checkoutHandler }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top w-50 h-50" alt={img} />
        <div className="card-body">
          <h4>₹{amount}</h4>
          <button
            onClick={() => checkoutHandler(amount)}
            className="btn btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
