import LogoPinterest from "../../assets/logo-pinterest-removebg-preview.png";
import LogoWhats from "../../assets/whats-logo-removebg-preview.png";
import LogoInsta from "../../assets/instalog-removebg-preview.png";
import { LiBtns, TextInsta, TextPinterest, TextWhats, UlBtns } from "./style";

const ListButons = () => {
  return (
    <UlBtns>
      <img src="" alt="" />
      <h2>Nos siga pelas redes abaixo!</h2>
      <LiBtns>
        <TextPinterest>Pinterest</TextPinterest>
        <button>
          <img src={LogoPinterest} alt="logo do pinterest" />
        </button>
      </LiBtns>
      <LiBtns>
        <TextWhats>Whatsapp</TextWhats>
        <button>
          <img src={LogoWhats} alt="Logo do whatsapp" />
        </button>
      </LiBtns>
      <LiBtns>
        <TextInsta>Instagram</TextInsta>
        <button>
          <img src={LogoInsta} alt="Logo do Instagram" />
        </button>
      </LiBtns>
    </UlBtns>
  );
};

export default ListButons;
