import { useState } from "react";
import styled from "styled-components";
import CategorySidebar from "./components/CategorySidebar";
import ProductDisplay from "./components/ProductDisplay";

const CatalogLayout = styled.div`
  display: flex;
  height: 100%;
  min-height: 70vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.aside`
  border-right: 1px solid #ccc; 
  padding-right: 1rem;
  flex: 0 0 8%;
  

  @media (max-width: 768px) {
    border-right: none;
    padding-right: 0;
  }
`;

const Content = styled.main`
  padding-left: 1rem;
  flex: 1 1 70%;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const ProductCatalog = () => {
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <CatalogLayout>
      <Sidebar
            style={{
        display:"flex",
        justifyContent:"center",

      }}>
        <CategorySidebar
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />
      </Sidebar>

      <Content>
        <ProductDisplay
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          categoryFilter={categoryFilter}
        />
      </Content>
    </CatalogLayout>
  );
};

export default ProductCatalog;
