import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import * as L from "./Layout.styles";

function Layout() {
  return (
    <div>
      <L.LayoutWrapper>
      <Header />
      <L.Main>
      <Outlet />
      </L.Main>
      <Footer />
      </L.LayoutWrapper>
    </div>
  );
}

export default Layout;