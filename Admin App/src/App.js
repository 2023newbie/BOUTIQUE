import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products, { loader as productsLoader } from './pages/Products';
import Chat, { loader as chatLoader } from './pages/Chat';
import Login, { action as loginAction } from './pages/Login';
import Dashboard, { loader as dashboardLoader } from './pages/Dashboard';
import Root, { loader as authLoader } from './pages/Root';
import AddProduct, { action as addProductAction } from './pages/AddProduct';

const router = createBrowserRouter([
  { path: '/', element: <Root />, loader: authLoader, children: [
    { index: true, element: <Dashboard />, loader: dashboardLoader },
    { path: 'products', element: <Products />, loader: productsLoader },
    { path: 'add-product', element: <AddProduct /> }
  ] },
  { path: '/chat', element: <Chat />, loader: chatLoader },
  { path: '/login', element: <Login />, action: loginAction }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
