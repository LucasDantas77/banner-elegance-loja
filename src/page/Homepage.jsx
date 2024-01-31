import ListButons from "../components/listButtons";
import { MainPage } from "./styleHome";
import CapaElegance from "../assets/CAPA_ELEGANCE-removebg-preview.png";

const HomePage = () => {
  return (
    <MainPage>
      <img src={CapaElegance} alt="Capa da loja" />
      <ListButons />
    </MainPage>
  );
};

export default HomePage;
