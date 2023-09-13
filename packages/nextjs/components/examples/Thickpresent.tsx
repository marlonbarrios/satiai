import ThickpresentData from "../data/thickpresent.json";
import { Example } from "./Example";

const Thickpresent = () => {
  return (
    <div>
      <Example data={ThickpresentData} />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/mfr78xim0tY"
        title="Tick Present Meditation"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Thickpresent;
