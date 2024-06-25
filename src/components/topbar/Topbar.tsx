import Container from "../Container";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import NavLink from "../nav-link/NavLink";
import StyledTopbar from "./Topbar.style";

const Topbar: React.FC = () => {

  return (
    <StyledTopbar>
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
      >
        <FlexBox className="topbar-left">
          <div className="logo">
            <img src="/assets/images/logo.svg" alt="logo" />
          </div>
          <FlexBox alignItems="center">
            <Icon size="14px">phone-call</Icon>
            <span>+94 7x xxx xxxx</span>
          </FlexBox>
          <FlexBox alignItems="center" ml="20px">
            <Icon size="14px">mail</Icon>
            <span>support@site.com</span>
          </FlexBox>
        </FlexBox>
        <FlexBox className="topbar-right" alignItems="center">
          <NavLink className="link" href="/faq">
            Theme FAQ"s
          </NavLink>
          <NavLink className="link" href="/help">
            Need Help?
          </NavLink>
        </FlexBox>
      </Container>
    </StyledTopbar>
  );
};

export default Topbar;
