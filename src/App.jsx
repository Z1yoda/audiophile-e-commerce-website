import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Navigation from './Components/Navigation'
import Home from './pages/Home'
import Headphones from './pages/category/Headphones'
import Speakers from './pages/category/Speakers'
import Earphones from './pages/category/Earphones'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductDetail from './pages/productDetail'
import { ModalProvider } from './Components/context/modalContext'
import Checkout from './pages/Checkout'
import useFetch from './hooks/useFetch'
import MainLayout from './layouts/MainLayout'
import { useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner'
import ErrorPage from './pages/ErrorPage'

function ProtectedRoute({ children, redirectTo = '/login', isAuthenticated }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(redirectTo);
    }
  }, [isAuthenticated, navigate, redirectTo]);

  return isAuthenticated ? children : null;
}


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { data: products, isPending, error } = useFetch('http://localhost:3001/data');


  useEffect(() => {
    const storedUserInfos = JSON.parse(localStorage.getItem('userInfos')) || [];
    setIsAuthenticated(storedUserInfos);
  }, []);

  console.log(products);

  return (
    <>
      {error && <p>{error}</p>}
      {isPending && <div style={{ margin: "300px 700px" }}><Oval
        visible={true}
        height="100"
        width="100"
        color="#D87D4A"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      /></div>}
      {
        products && <ModalProvider >
          <Routes>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/:category/headphones" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Headphones /></ProtectedRoute>} />
              <Route path="/category/speakers" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Speakers /></ProtectedRoute>} />
              <Route path="/category/earphones" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Earphones /></ProtectedRoute>} />
              <Route path="/product/:slug" element={<ProtectedRoute isAuthenticated={isAuthenticated}><ProductDetail /></ProtectedRoute>} />
              <Route path="/checkout" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Checkout /></ProtectedRoute>} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ModalProvider>

      }
    </>
  )
}

export default App
