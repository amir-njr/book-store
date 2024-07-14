// Hooks
import { useEffect, useState } from "react";
// React-Router-Dom
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// JS - Cookie
import Cookies from "js-cookie";
// Config -Api
import { UserBaseUrl } from "./configs/api";

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
import Dashboard from "./pages/Dashboard/Dashboard";
import Shaparak from "./pages/Shaparak/Shaparak";
import Payment from "./pages/Payment";
import Users from "./pages/Dashboard/Users";
import AddUser from "./pages/Dashboard/AddUser";
import Books from "./pages/Dashboard/Books";
import AddBook from "./pages/Dashboard/AddBook";
import NotFound from "./pages/NotFound";
import MyBooks from "./pages/Dashboard/MyBooks";

function App() {
  const { pathname } = useLocation();
  const [userData, setUserData] = useState({});

  const fetcher = async (token) => {
    const res = await fetch(UserBaseUrl("who-is"), {
      headers: { Authorization: `Bearer ${token}` },
    });
    const json = await res.json();
    setUserData(json);
  };
  useEffect(() => {
    const token = Cookies.get("accessToken");
    fetcher(token);
  }, []);

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
          <Route path="/payment" element={<Payment id={userData._id} />} />
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
        ) : pathname.includes("dashboard") ? (
          <DashLayout userData={userData}>
            <Routes>
              <Route
                path="/dashboard"
                element={
                  userData.status !== 500 ? (
                    <Dashboard role={userData.role} />
                  ) : (
                    <Navigate to="/sign-in" />
                  )
                }
              />
              <Route
                path="/dashboard/users"
                element={
                  userData.status !== 500 ? (
                    <Users />
                  ) : (
                    <Navigate to="/sign-in" />
                  )
                }
              />
              <Route
                path="/dashboard/add-user"
                element={
                  userData.status !== 500 ? (
                    <AddUser />
                  ) : (
                    <Navigate to="/sign-in" />
                  )
                }
              />
              <Route
                path="/dashboard/books"
                element={
                  userData.status !== 500 ? (
                    <Books />
                  ) : (
                    <Navigate to="/sign-in" />
                  )
                }
              />
              <Route
                path="/dashboard/add-book"
                element={
                  userData !== 500 ? <AddBook /> : <Navigate to="/sign-in" />
                }
              />

              <Route
                path="/dashboard/my-books"
                element={
                  userData !== 500 ? (
                    <MyBooks email={userData.email} />
                  ) : (
                    <Navigate to="/sign-in" />
                  )
                }
              />
            </Routes>
          </DashLayout>
        ) : (
          <CartProvider>
            <BookProvider>
              <Layout fullName={userData.fullName}>
                <div className="container mx-auto px-10 min-h-screen py-14">
                  <Routes>
                    <Route index element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/detail/:id" element={<DetailPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
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
