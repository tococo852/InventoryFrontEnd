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
`;

function App() {
  return (
<Theme
  accentColor="orange"
  grayColor="slate"
  radius="large"
  scaling="95%"
>      <AuthProvider>
      <CartProvider>
        <CatalogProvider>
        <Wrapper>
          <Header />
          <main style={{ flex: 1 }}>
              <Outlet />
            </main>
          <Footer />
        </Wrapper>
        </CatalogProvider>
      </CartProvider>
      </AuthProvider>

    </Theme>
  );
}

export default App;
