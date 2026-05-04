import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styled from 'styled-components'
import { Theme } from "@radix-ui/themes";
import { Outlet } from "react-router";
import CartProvider from './context/cart/CartContextProvider';
import CatalogProvider from './context/catalog/CatalogContextProvider';
import AuthProvider from './context/auth/AuthContextProvider';
import './App.css'

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


function App() {
  return (
    <Theme accentColor="amber" grayColor="sand" radius="large" scaling="95%">
      <AuthProvider>
      <CartProvider>
        <CatalogProvider>
        <Wrapper>
          <Header />
          <Outlet />
          <Footer />
        </Wrapper>
        </CatalogProvider>
      </CartProvider>
      </AuthProvider>

    </Theme>
  );
}

export default App;
