import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product/Product";
import RequiredAuth from "./hoc/RequiredAuth";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Login /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        

        <Route
          path="/products"
          element={
            <RequiredAuth>
              <Products />
            </RequiredAuth>
          }
        />
        <Route
          path="/products/:id"
          element={
            <RequiredAuth>
              <Product />
            </RequiredAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
