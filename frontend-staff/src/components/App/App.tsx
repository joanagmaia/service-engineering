import SignIn from "../../pages/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from "../../pages/Orders";
import PublicRoutes from "../PublicRoutes/PublicRoutes";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/orders" element={<PrivateRoutes />}>
          <Route path="/orders" element={<Orders />}></Route>
        </Route>

        <Route path="/" element={<PublicRoutes />}>
          <Route path="/" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
