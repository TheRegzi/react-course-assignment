import { Link, Outlet } from "react-router-dom";


function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <li>
            <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}


function Header() {
  return (
    <header>
      <div>Header</div>
      <Nav />
    </header>
  );
}


function Footer() {
  return <footer>Footer</footer>;
}


function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;