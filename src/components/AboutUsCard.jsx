import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutUs() {
    return (
        <div className="flex flex-col font-montserrat w-[316px] h-[383px] gap-5">
            <div className="bg-[url('/src/assets/aboutuscard.jpg')] bg-center bg-cover w-[316px] h-[231px]"></div>
            <div className="flex flex-col items-center gap-3">
                <h5 className="font-bold text-[16px] text-[#252B42]">Username</h5>
                <h6 className="font-bold text-[14px] text-[#737373]">Profession</h6>
                <div className="flex flex-row gap-5 text-[#23A6F0]">
                    <Link><FaFacebook size={20}/></Link>
                    <Link><FaInstagram className="max-[1100px]:text-[#E51F5A]" size={20}/></Link>
                    <Link><FaTwitter size={20}/></Link>
                </div>
            </div>
        </div>
    )
}