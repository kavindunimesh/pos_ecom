import Card from "@component/Card";
import { Chip } from "@component/Chip";
import HoverBox from "@component/HoverBox";
import NextImage from "next/image";
import React from "react";

export interface ProductCard6Props {
  imgUrl: string;
  title: string;
}

const ProductCard6: React.FC<ProductCard6Props> = ({
  title,
  imgUrl,
}) => {
  return (
    <Card position="relative">
      <Chip
        bg="secondary.main"
        position="absolute"
        color="white"
        fontWeight="600"
        fontSize="10px"
        p="4px 10px"
        top="0.875rem"
        left="0.875rem"
        zIndex={2}
      >
        {title}
      </Chip>

      <HoverBox position="relative" height="120px" borderRadius={8}>
        <NextImage src={imgUrl} layout="fill" objectFit="cover" />
      </HoverBox>
    </Card>
  );
};

export default ProductCard6;
