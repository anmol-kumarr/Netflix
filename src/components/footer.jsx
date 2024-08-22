import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className=" max-w-[900px] sm:h-[300px]  items-center p-5 mx-auto mt-3 flex flex-wrap justify-between font-Gilroy font-medium text-sm bg-netflix-bg">
            <div className="">
                <div className="flex text-white text-2xl gap-3 p-2">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                    <FaYoutube />
                </div>
                <div className="text-gray-500 list-none flex flex-col gap-2 mt-2 p-2 ">
                    <li>Audio Description</li>
                    <li>Investor Relation</li>
                    <li>Legal Notices</li>

                </div>
                <p className="text-gray-500 font-Gilroy mt-2 p-2"> 
                    &#169;1997-2024 Netflix, Inc
                </p>

            </div>


            <div className="text-gray-500 list-none flex flex-col gap-2 p-2">
                <li>Help Center</li>
                <li>Job</li>
                <li>Cookie Preferences</li>
            </div>


            <div className="text-gray-500 list-none  flex flex-col gap-2 p-2">
                <li>Gift Card</li>
                <li>Terms of use</li>
                <li>Corporate Information</li>
            </div>


            <div className="text-gray-500 list-none flex flex-col gap-2 p-2">
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact us</li>
            </div>
        </div>
    )
}
export default Footer