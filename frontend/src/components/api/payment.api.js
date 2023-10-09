import axios from "axios";

export const checkoutHandler = async (amount) => {
  const {
    data: { key },
  } = await axios.get("http://www.localhost:5500/api/getkey");

  const {
    data: { order },
  } = await axios.post("http://localhost:5500/api/checkout", {
    amount,
  });

  const options = {
    key,
    amount: order.amount,
    currency: "INR",
    name: "Divine Beauty",
    description: "payments page",
    image:
      "https://png.pngtree.com/element_our/sm/20180515/sm_5afafeb5de543.jpg",
    order_id: order.id,
    callback_url: "http://localhost:5500/api/verification",
    prefill: {
      name: "Divine Beauty",
      email: "divinebeauty@example.com",
      contact: "9083527139",
    },
    notes: {
      address: "Jalpaiguri, WB",
    },
    theme: {
      color: "#121212",
    },
  };
  const razor = new window.Razorpay(options);
  return razor.open();
};
