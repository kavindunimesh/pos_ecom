import Container from "../components/Container";
import Layout from "../components/layout/AppLayout";
import Navbar from "../components/navbar/Navbar";
import Section12 from "../components/home-1/Section12";
import Typography from "@component/Typography";
import Grid from "../components/grid/Grid";
import TextField from "../components/text-field/TextField";
import TextArea from "@component/textarea/TextArea";
import Icon from "../components/icon/Icon";
import FlexBox from "../components/FlexBox";
import Button from "../components/buttons/Button";
import Box from "../components/Box";

const ContactPage = () => (
  <Layout navbar={<Navbar />} title="Ecommerce">
    <Container mb="70px">
      <h1>Contact Us</h1>
      <Typography fontSize="16px" mb={35}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas minima laudantium modi itaque eum asperiores velit, accusantium id rem hic autem iste repellat ipsa aspernatur, ab iure, non quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas minima laudantium modi itaque eum asperiores velit, accusantium id rem hic autem iste repellat ipsa aspernatur, ab iure, non quam.
      </Typography>

      <Grid container spacing={4}>
        <Grid item lg={6} md={12} sm={12}>
          <h2>It's Free to Get in Touch With Us!</h2>

          <Box mb="1rem">
            <FlexBox alignItems="center" >
              <Icon
                size="18px"
                defaultcolor="currentColor"
              >
                pin
              </Icon>
              <Typography as="h3" fontSize="16px" ml={10}>Address</Typography>
            </FlexBox>
            <Typography fontSize="16px" ml={10}>No 69 lorem at lorem road,No 69 lorem at lorem road</Typography>
            <Typography fontSize="16px" ml={10}>Lorem ipsum,</Typography>
            <Typography fontSize="16px" ml={10}>Sri Lanka.</Typography>
          </Box>

          <Box mb="1rem">
            <FlexBox alignItems="center">
              <Icon
                size="18px"
                defaultcolor="currentColor"
              >
                mail
              </Icon>
              <Typography as="h3" fontSize="16px" ml={10}>Email</Typography>
            </FlexBox>
            <Typography fontSize="16px" ml={10}>contact@site.com</Typography>
          </Box>

          <Box mb="1rem">
            <FlexBox alignItems="center">
              <Icon
                size="18px"
                defaultcolor="currentColor"
              >
                phone-call
              </Icon>
              <Typography as="h3" fontSize="16px" ml={10}>Phone</Typography>
            </FlexBox>
            <Typography fontSize="16px" ml={10}>+94 7x xxx xxxx</Typography>
          </Box>

        </Grid>

        <Grid item lg={6} md={12} sm={12}>
          <Box>
            <TextField
              mb="20px"
              name="name"
              label="Full Name"
              fullwidth
            />

            <TextField
              mb="20px"
              name="email"
              label="Email Address"
              fullwidth
            />

            <TextArea
              name="comment"
              placeholder="Enter your message here..."
              fullwidth
              rows={8}
            >
            </TextArea>

            <Button
              mb="1.65rem"
              mt="1.65rem"
              variant="contained"
              color="primary"
              type="submit"
              fullwidth
            >
              Send us what you think
            </Button>
          </Box>


        </Grid>
      </Grid>

      <Typography fontSize="16px" mt={50} mb={40}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas minima laudantium modi itaque eum asperiores velit, accusantium id rem hic autem iste repellat ipsa aspernatur, ab iure, non quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas minima laudantium modi itaque eum asperiores velit, accusantium id rem hic autem iste repellat ipsa aspernatur, ab iure, non quam.
      </Typography>

      <Section12 />
    </Container>

  </Layout>
);

export default ContactPage;
