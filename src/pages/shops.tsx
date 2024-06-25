import FlexBox from "@component/FlexBox";
import Grid from "@component/grid/Grid";
import NavbarLayout from "@component/layout/NavbarLayout";
import Pagination from "@component/pagination/Pagination";
import ShopCard1 from "@component/shop/ShopCard1";
import { H2, SemiSpan } from "@component/Typography";
import React from "react";

const ShopList = () => {
  return (
    <div>
      <H2 mb="24px">All Shops</H2>

      <Grid container spacing={6}>
        {shopList.map((item, ind) => (
          <Grid item lg={4} sm={6} xs={12} key={ind}>
            <ShopCard1 {...item} />
          </Grid>
        ))}
      </Grid>

      <FlexBox
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        mt="32px"
      >
        <SemiSpan>Showing 1-9 of 300 Shops</SemiSpan>
        <Pagination pageCount={shopList.length} />
      </FlexBox>
    </div>
  );
};

const shopList = [
  {
    name: "Scarlett Beauty",
    rating: 5,
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    phone: "(613) 343-9004",
    coverImgUrl: "/assets/images/banners/cycle.png",
    imgUrl: "/assets/images/faces/propic.png",
    shopUrl: "/shop/53244445",
  },
  {
    name: "Scroll Through",
    rating: 5,
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    phone: "(613) 343-9004",
    coverImgUrl: "/assets/images/banners/banner.png",
    imgUrl: "/assets/images/faces/propic(1).png",
    shopUrl: "/shop/53244445",
  },
  {
    name: "Coveted Clicks",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    phone: "(613) 343-9004",
    coverImgUrl: "/assets/images/banners/banner-3.png",
    imgUrl: "/assets/images/faces/propic(2).png",
    shopUrl: "/shop/53244445",
  },
  {
    name: "Constant Shoppers",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    phone: "(613) 343-9004",
    coverImgUrl: "/assets/images/banners/banner-4.png",
    imgUrl: "/assets/images/faces/propic(3).png",
    shopUrl: "/shop/53244445",
  },
  {
    name: "Keyboard Kiosk",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    phone: "(613) 343-9004",
    coverImgUrl: "/assets/images/banners/banner-5.png",
    imgUrl: "/assets/images/faces/propic(4).png",
    shopUrl: "/shop/53244445",
  },
  {
    name: "Anytime Buys",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    phone: "(613) 343-9004",
    coverImgUrl: "/assets/images/banners/banner-6.png",
    imgUrl: "/assets/images/faces/propic(5).png",
    shopUrl: "/shop/53244445",
  },
  {
    name: "Word Wide Wishes",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    phone: "(613) 343-9004",
    coverImgUrl: "/assets/images/banners/banner-7.png",
    imgUrl: "/assets/images/faces/propic(6).png",
    shopUrl: "/shop/53244445",
  },
  {
    name: "Cybershop",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    phone: "(613) 343-9004",
    coverImgUrl: "/assets/images/banners/banner-8.png",
    imgUrl: "/assets/images/faces/propic(7).png",
    shopUrl: "/shop/53244445",
  },
  {
    name: "Scarlett Beauty",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    phone: "(613) 343-9004",
    coverImgUrl: "/assets/images/banners/banner-9.png",
    imgUrl: "/assets/images/faces/propic(8).png",
    shopUrl: "/shop/53244445",
  },
];

ShopList.layout = NavbarLayout;

export default ShopList;
