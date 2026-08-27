import backroundImageHomePage from "../assets/backroundImageHomePage.jpg";
import Login from "./Login";
export default function Home() {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* image */}
      <img
        src={backroundImageHomePage}
        className="absolute w-full h-full object-cover"
      />

      {/* overly */}
      <div className="absolute inset-0 bg-black/80" />

      {/* content */}
      <div className="absolute inset-0 flex justify-center items-center text-white">
        {/* ===================== Login ====================== */}
        <Login />
        {/* ================================================== */}
      </div>
    </div>
  );
}
