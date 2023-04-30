import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./page/HomePage";
import RootPage from "./page/RootPage";
import ShopPage from "./page/ShopPage";
import DetailPage from "./page/DetailPage";
import CartPage from "./page/CartPage";
import CheckoutPage from "./page/CheckoutPage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import { useDispatch } from "react-redux";
import { loginActions } from "./store/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/detail", element: <DetailPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch()

  const data = JSON.parse(localStorage.getItem('user_accounts'))
  const loginData = data.find(item => item.isLogin === true)
  if (loginData) {
    dispatch(loginActions.login(loginData)) 
  }

  return <RouterProvider router={router} />;
}

export default App;
