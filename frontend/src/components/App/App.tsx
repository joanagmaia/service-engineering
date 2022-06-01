import Menu from "../../pages/Menu";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="app">
      <Menu />
      <ToastContainer />
    </div>
  );
};

export default App;
