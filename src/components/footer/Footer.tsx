import Image from "@component/Image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { getTheme } from "../../utils/utils";
import Box from "../Box";
import Container from "../Container";
import FlexBox from "../FlexBox";
import Grid from "../grid/Grid";
import Icon from "../icon/Icon";
import Typography, { Paragraph } from "../Typography";

const StyledLink = styled.a`
  position: relative;
  display: block;
  padding: 0.3rem 0rem;
  color: ${getTheme("colors.gray.500")};
  cursor: pointer;
  border-radius: 4px;
  :hover {
    color: ${getTheme("colors.gray.100")};
  }
`;

const Footer: React.FC = () => {
  return (
    <footer>
      <Box bg="#0F3460">
        <Container p="1rem" color="white">
          <Box py="5rem" overflow="hidden">
            <Grid container spacing={6}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Link href="/">
                  <a>
                    <Image
                      mb="1.25rem"
                      src="/assets/images/logo.svg"
                      alt="logo"
                    />
                  </a>
                </Link>

                <Paragraph mb="1.25rem" color="gray.500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor libero id et, in gravida. Sit diam duis mauris nulla
                  cursus. Erat et lectus vel ut sollicitudin elit at amet.
                </Paragraph>

               
              </Grid>

              <Grid item lg={2} md={6} sm={6} xs={12}>
                <Typography
                  fontSize="25px"
                  fontWeight="600"
                  mb="1.25rem"
                  lineHeight="1"
                >
                  My account
                </Typography>

                <div>

                <Link href="/profile">
                      <StyledLink>Profile</StyledLink>
                    </Link>

                    <Link href="/checkout">
                      <StyledLink>Checkout</StyledLink>
                    </Link>
                  
                    <Link href="/cart">
                      <StyledLink>Cart</StyledLink>
                    </Link>

                    
                    <Link href="/wish-list">
                      <StyledLink>Wishlist</StyledLink>
                    </Link>
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Typography
                  fontSize="25px"
                  fontWeight="600"
                  mb="1.25rem"
                  lineHeight="1"
                >
                  Customer Care
                </Typography>

                <div>
                  {customerCareLinks.map((item, ind) => (
                    <Link href="/" key={ind}>
                      <StyledLink>{item}</StyledLink>
                    </Link>
                  ))}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Typography
                  fontSize="25px"
                  fontWeight="600"
                  mb="1.25rem"
                  lineHeight="1"
                >
                  Contact Us
                </Typography>
                <Typography py="0.3rem" color="gray.500">
                  No 69 lorem at lorem road
                </Typography>
                <Typography py="0.3rem" color="gray.500">
                  Email: contact@site.com
                </Typography>
                <Typography py="0.3rem" mb="1rem" color="gray.500">
                  Phone: +94 7x xxx xxxx
                </Typography>

                <FlexBox className="flex" mx="-5px">
                  {iconList.map((item) => (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopenner"
                      key={item.iconName}
                    >
                      <Box
                        m="5px"
                        size="small"
                        p="10px"
                        bg="rgba(0,0,0,0.2)"
                        borderRadius="50%"
                      >
                        <Icon size="12px" defaultcolor="auto">
                          {item.iconName}
                        </Icon>
                      </Box>
                    </a>
                  ))}
                </FlexBox>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

const customerCareLinks = [
  "Contact Us",
  "How to Buy",
  "Corporate & Bulk Purchasing",
  "Returns & Refunds",
];

const iconList = [
  { iconName: "facebook", url: "/" },
  { iconName: "twitter", url: "/" },
  {
    iconName: "youtube",
    url: "/",
  },
  { iconName: "google", url: "/" },
  { iconName: "instagram", url: "/" },
];

export default Footer;
