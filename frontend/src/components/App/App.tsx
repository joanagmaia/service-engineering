import { useGetProduct } from "../../hooks";
import Menu from "../../pages/Menu";

const App = () => {
  const { data } = useGetProduct();

  return (
    <div className="app">
      <Menu products={data} />
    </div>
  );
};

export default App;
