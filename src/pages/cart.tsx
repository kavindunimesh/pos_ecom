import { useAppContext } from "@context/app/AppContext";
import { CartItem } from "@reducer/cartReducer";
import Link from "next/link";
import React, { Fragment } from "react";
import Box from "../components/Box";
import Button from "../components/buttons/Button";
import { Card1 } from "../components/Card1";
import Divider from "../components/Divider";
import FlexBox from "../components/FlexBox";
import Grid from "../components/grid/Grid";
import CheckoutNavLayout from "../components/layout/CheckoutNavLayout";
import ProductCard7 from "../components/product-cards/ProductCard7";
import TextArea from "../components/textarea/TextArea";
import Typography from "../components/Typography";

const Cart = () => {
  const { state } = useAppContext();
  const cartList: CartItem[] = state.cart.cartList;

  const getTotalPrice = () => {
    return (
      cartList.reduce(
        (accumulator, item) => accumulator + item.price * item.qty,
        0
      ) || 0
    );
  };

  return (
    <Fragment>
      <Grid container spacing={6}>
        <Grid item lg={8} md={8} xs={12}>
          {cartList.map((item) => (
            <ProductCard7 key={item.id} mb="1.5rem" {...item} />
          ))}
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <Card1>
            <FlexBox
              justifyContent="space-between"
              alignItems="center"
              mb="1rem"
            >
              <Typography color="gray.600">Total:</Typography>
              <FlexBox alignItems="flex-end">
                <Typography fontSize="18px" fontWeight="600" lineHeight="1">
                  ${getTotalPrice().toFixed(2)}
                </Typography>
                <Typography fontWeight="600" fontSize="14px" lineHeight="1">
                  00
                </Typography>
              </FlexBox>
            </FlexBox>

            <Divider mb="1rem" />

            <FlexBox alignItems="center" mb="1rem">
              <Typography fontWeight="600" mr="10px">
                Additional Comments
              </Typography>
              <Box p="3px 10px" bg="primary.light" borderRadius="3px">
                <Typography fontSize="12px" color="primary.main">
                  Note
                </Typography>
              </Box>
            </FlexBox>

            <TextArea rows={6} fullwidth mb="1rem" />

            <Divider mb="1rem" />
            
            <Link href="/checkout">
              <Button variant="contained" color="primary" fullwidth>
                Checkout Now
              </Button>
            </Link>
          </Card1>
        </Grid>
      </Grid>
    </Fragment>
  );
};

Cart.layout = CheckoutNavLayout;

export default Cart;
