import loader from "../../public/loading.gif";
import Image from "next/image";
const Loading = () => {
  return (
    <div className="loader">
      <Image src={loader} fill alt="loader" />
    </div>
  );
};

export default Loading;
