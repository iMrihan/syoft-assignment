import "./App.css";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import AddProduct from "./Components/product/AddProduct";
import Product from "./Components/product/Product";
import { Routes, Route } from "react-router";
import { Navbar } from "./Components/Navbar/Navbar";
import PrivateRoute from "./Components/PrivateRoute";
import { Logout } from "./Components/Auth/Logout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* Routes here */}
        <Route path="/" element={<Product />} />

        <Route
          exact
          path="/admin"
          element={
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          }
        />
        <Route exact path="/register" element={<Register />} />

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
