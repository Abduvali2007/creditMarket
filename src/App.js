import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Order from "./components/Order";
import Admin from "./components/Admin";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
