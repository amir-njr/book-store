// Components
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen my-10">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
