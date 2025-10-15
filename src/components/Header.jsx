import { Link } from "react-router";

export default function Header() {
  return (
    <div className="font-montserrat">
    <div className="bg-[#252B42] flex justify-between text-white p-3 w-full font-medium">
      <div className="ml-10 flex gap-10 text-sm">
        <h6>(225) 555-0118</h6>
        <a href="">michelle.rivera@example.com</a>
      </div>
      <h6 className="text-sm">Follow Us  and get a chance to win 80% off</h6>
      <div className="flex gap-6 mr-10 text-sm">
        <a href="">Follow us : </a>
        <a href="">I</a>
        <a href="">Y</a>
        <a href="">F</a>
        <a href="">T</a>
      </div>
    </div>
    <div className="flex p-4"> 
      <h3 className="text-2xl font-bold ml-5">Bandage</h3>
      <div className="flex w-full overflow-hidden justify-between items-center ml-20">
        <nav>
          <ul className="flex">
            <li className="mr-4"><a href="" className="font-bold text-[#737373] hover:text-black">Home</a></li>
            <div className="group">
              <li className="mr-4"><a href="" className="font-bold text-[#737373] hover:text-black">Shop</a></li>
              <div className="invisible group-hover:visible absolute transition-all bg-white text-black p-4 flex flex-row gap-29">
                <div className="flex flex-col">
                  <a href="" className="mb-10 font-bold">Kadın</a>
                  <a href="" className="font-bold text-gray-500 hover:text-black">Bags</a>
                  <a href="" className="font-bold text-gray-500 mt-5 hover:text-black">Belts</a>
                  <a href="" className="font-bold text-gray-500 mt-5 hover:text-black">Cosmetics</a>
                  <a href="" className="font-bold text-gray-500 mt-5 hover:text-black">Bags</a>
                  <a href="" className="font-bold text-gray-500 mt-5 hover:text-black">Hats</a>
                </div>
                <div className="flex flex-col mr-27">
                  <a href="" className="mb-10 font-bold">Erkek</a>
                  <a href="" className="font-bold text-gray-500 hover:text-black">Bags</a>
                  <a href="" className="font-bold text-gray-500 mt-5 hover:text-black">Belts</a>
                  <a href="" className="font-bold text-gray-500 mt-5 hover:text-black">Cosmetics</a>
                  <a href="" className="font-bold text-gray-500 mt-5 hover:text-black">Bags</a>
                  <a href="" className="font-bold text-gray-500 mt-5 hover:text-black">Hats</a>
                </div>
              </div>
            </div>
            <li className="mr-4"><a href="" className="font-bold text-[#737373]  hover:text-black">About</a></li>
            <li className="mr-4"><a href="" className="font-bold text-[#737373]  hover:text-black">Blog</a></li>
            <li className="mr-4"><a href="" className="font-bold text-[#737373]  hover:text-black">Contact</a></li>
            <li className="mr-4"><a href="" className="font-bold text-[#737373]  hover:text-black">Pages</a></li>
          </ul>
        </nav>
        <ul className="flex text-[#23A6F0]">
          <li className="mr-8">Login/Register</li>
          <li className="mr-8">S</li>
          <li className="mr-8">B</li>
          <li className="mr-6">W</li>
        </ul>
      </div>
    </div>
    </div>
  )
}