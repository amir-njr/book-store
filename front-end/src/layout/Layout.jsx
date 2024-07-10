// Layout
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, fullName }) => {
  return (
    <div>
      <Header fullName={fullName} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
