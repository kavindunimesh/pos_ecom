import Box from "@component/Box";
import HoverBox from "@component/HoverBox";
import { H4, Small } from "@component/Typography";
import NextImage from "next/image";
import React from "react";
import { CSSProperties } from "styled-components";
import FlexBox from "../FlexBox";

export interface ProductCard4Props {
  className?: string;
  style?: CSSProperties;
  imgUrl: string;
  title: string;
  price: number;
  category: string;
}

const ProductCard4: React.FC<ProductCard4Props> = ({
  imgUrl,
  title,
  price,
  category
}) => {
  return (
    <Box>
      <HoverBox mb="1rem" mx="auto" borderRadius={8}>
        <NextImage
          src={imgUrl}
          width={100}
          height={100}
          layout="responsive"
          alt={title}
        />
      </HoverBox>

      <FlexBox justifyContent="center" alignItems="center" mb="0.25rem">
        <Small fontWeight="600" pl="0.25rem">
          {category}
        </Small>
      </FlexBox>

      <H4
        fontWeight="600"
        fontSize="14px"
        textAlign="center"
        mb="0.25rem"
        title={title}
        ellipsis
      >
        {title}
      </H4>
      <H4
        fontWeight="600"
        fontSize="14px"
        textAlign="center"
        color="primary.main"
      >
        ${Math.ceil(price).toLocaleString()}
      </H4>
    </Box>
  );
};

export default ProductCard4;
