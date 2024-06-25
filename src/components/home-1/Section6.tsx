import productDatabase from "@data/product-database";
import Box from "../Box";
import CategorySectionHeader from "../CategorySectionHeader";
import Container from "../Container";
import FlexBox from "../FlexBox";
import Grid from "../grid/Grid";
import ProductCard1 from "../product-cards/ProductCard1";

const Section6: React.FC = () => {
  return (
    <Container mb="80px">
      <FlexBox>
        <Box flex="1 1 0" minWidth="0px">
          <CategorySectionHeader title="Cars" seeMoreLink="#" />
          <Grid container spacing={6}>
            {productDatabase.slice(0, 6).map((item, ind) => (
              <Grid item lg={3} sm={6} xs={12} key={ind}>
                <ProductCard1 hoverEffect {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </FlexBox>
    </Container>
  );
};

export default Section6;
