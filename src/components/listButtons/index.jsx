import { LiBtns, UlBtns } from "./style";
import { BsStars } from "react-icons/bs";

const ListButons = () => {
  return (
    <UlBtns>
      <LiBtns>
        <button>
          <BsStars />
          <a href="https://www.pinterest.com/elegancebijoux48/">Pinterest</a>
          <BsStars />
        </button>
      </LiBtns>
      <LiBtns>
        <button>
          <BsStars />
          <a href="https://wa.me/message/SGX7I46A6QVPG1">Whatsapp</a>
          <BsStars />
        </button>
      </LiBtns>
      <LiBtns>
        <button>
          <BsStars />
          <a href="https://www.instagram.com/elegance.bijouxx?igsh=b2U3MDdpcmsyYno0">
            Instagram
          </a>
          <BsStars />
        </button>
      </LiBtns>
    </UlBtns>
  );
};

export default ListButons;
