// React-Router-Dom
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

// Layouts
import LoginLayout from "./layout/LoginLayout/LoginLayout";
import DashLayout from "./layout/DashLayout/DashLayout";
import Layout from "./layout/Layout";
// Context-Provider
import BookProvider from "./context/BookContext";
import CartProvider from "./context/CartContext";

// Components
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Shaparak from "./pages/Shaparak/Shaparak";
import Payment from "./pages/Payment";

function App() {
  const { pathname } = useLocation();

  if (pathname === "/shaparak") {
    return (
      <Routes>
        <Route path="/shaparak" element={<Shaparak />} />
      </Routes>
    );
  } else if (pathname === "/payment") {
    return (
      <CartProvider>
        <Routes>
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </CartProvider>
    );
  } else
    return (
      <>
        {pathname === "/sign-in" || pathname === "/sign-up" ? (
          <LoginLayout>
            <Routes>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </LoginLayout>
        ) : pathname === "/dashboard" ? (
          <DashLayout>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </DashLayout>
        ) : (
          <CartProvider>
            <BookProvider>
              <Layout>
                <div className="container mx-auto px-10 min-h-screen py-14">
                  <Routes>
                    <Route index element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/detail/:id" element={<DetailPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                  </Routes>
                </div>
              </Layout>
            </BookProvider>
          </CartProvider>
        )}
      </>
    );
}

export default App;
