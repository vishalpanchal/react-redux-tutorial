import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./container/Header";
import ProductDetail from "./container/ProductDetail";
import ProductListing from "./container/ProductListing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={ProductListing} />
          <Route path="/product/:productId" exact Component={ProductDetail} />
          <Route>404 not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
