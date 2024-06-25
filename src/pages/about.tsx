import Container from "../components/Container";
import Layout from "../components/layout/AppLayout";
import Navbar from "../components/navbar/Navbar";
import Section12 from "../components/home-1/Section12";
import Section8 from "../components/home-1/Section8";
import Typography from "@component/Typography";

const AboutPage = () => (
  <Layout navbar={<Navbar />} title="Ecommerce">
    <Container mb="70px">
      <h1>About Us</h1>
      <Typography fontSize="16px" mb={35}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas minima laudantium modi itaque eum asperiores velit, accusantium id rem hic autem iste repellat ipsa aspernatur, ab iure, non quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas minima laudantium modi itaque eum asperiores velit, accusantium id rem hic autem iste repellat ipsa aspernatur, ab iure, non quam.
      </Typography>

      <Section8 />

      <Typography fontSize="16px" mb={35}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas minima laudantium modi itaque eum asperiores velit, accusantium id rem hic autem iste repellat ipsa aspernatur, ab iure, non quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas minima laudantium modi itaque eum asperiores velit, accusantium id rem hic autem iste repellat ipsa aspernatur, ab iure, non quam.
      </Typography>
      
      <Section12 />
    </Container>

  </Layout>
);

export default AboutPage;
