import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./card";

import axios from "axios";

const Home = () => {
  const checkoutHandler = async (amount) => {
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
    razor.open();
  };

  return (
    <Box>
      <Stack
        h={"100vh"}
        alignItems="center"
        justifyContent="center"
        direction={["column", "row"]}
      >
        <Card
          amount={5000}
          img={
            "https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png"
          }
          checkoutHandler={checkoutHandler}
        />
        <Card
          amount={3000}
          img={
            "http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
          }
          checkoutHandler={checkoutHandler}
        />
      </Stack>
    </Box>
  );
};

export default Home;
