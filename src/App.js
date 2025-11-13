import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation-bar/navigation-bar.component";
import { Routes, Route, Outlet } from "react-router-dom";

const Shop = () => {
  return <h1>I am shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
