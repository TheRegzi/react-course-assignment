import Nav from "./Nav";
import * as H from "./Header.styles";
import logo from "../nlg_favicon/apple-touch-icon.png"

function Header() {
    return (
      <H.HeaderStyle>
        <H.LogoLink href="/">
        <H.LogoImage src={logo} alt="NLG Logo" />
        </H.LogoLink>
        <Nav />
      </H.HeaderStyle>
    );
  }

  export default Header;