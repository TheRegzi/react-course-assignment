import Nav from "./Nav";
import * as H from "./Header.styles";

function Header() {
    return (
      <H.HeaderStyle>
        <div>Header</div>
        <Nav />
      </H.HeaderStyle>
    );
  }

  export default Header;