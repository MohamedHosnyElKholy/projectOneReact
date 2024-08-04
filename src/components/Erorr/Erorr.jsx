
import imageErorr from "../../assets/erorr.jpg";
export default function Erorr() {
  return (
    <div className="error p-5">
      <div className="container mx-auto">
        <img src={imageErorr} className="w-full" alt="erorr" />
      </div>
    </div>
  );
}
