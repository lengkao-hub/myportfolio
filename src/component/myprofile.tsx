import Image from "next/image";
import { FaFacebook, FaLinkedin, FaPhoneVolume } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

export default function Myprofile() {
  return (
    <div className="bg-white/50 min-h-screen text-white p-5">
      <div>
        <Image className="border-3 border-white rounded-full mx-auto" src="/image/anima2.webp" width={100} height={100} alt="profile" />
      </div>
      <div className="text-2xl text-center font-bold">Mr LENKAO LEE </div>
      <div className="text-xl text-center">WEB Developer</div>

      <div className="mt-5 border-t-2 border-white p-5">

        <div className="text-xl text-center">contact</div>
        <div className="flex justify-around gap-5 mt-5 ">
          <FaPhoneVolume size={40} className="hover:text-sky-500 duration-500" />
          <FaFacebook size={40} className="hover:text-sky-500 duration-500" />
          <FaSquareWhatsapp size={40} className="hover:text-sky-500 duration-500" />
          <FaLinkedin size={40} className="hover:text-sky-500 duration-500" />
        </div>

      </div>
      <div className="mt-5 border-t-2 border-white p-5">
        <div className="text-l text-center">Address</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quis fugiat. Corporis illo cupiditate iste impedit, est, amet assumenda magni repellendus placeat quia recusandae veniam ea explicabo natus quos minima!
        Deserunt facilis nisi 
        </p>
      </div>

    </div>
  )
}