import { TiHome } from "react-icons/ti";
import { FiTv } from "react-icons/fi";
import { PiListHeartDuotone } from "react-icons/pi";
import { NavLink } from "react-router-dom";
const MobileNav = () => {
    return (
        <div className="fixed left-0 bottom-0 z-50 w-full  bg-black md:hidden block ">
            <div className="flex text-white justify-between mx-6 p-1">

                <NavLink to='/browse' className={({ isActive }) =>  `font-Gilroy text-center  ${isActive ? 'font-bold text-[15px] ' : 'font-semibold text-[13px]'}`}>

                    <div className=" font-Gilroy text-center" >
                        <TiHome className="text-[30px]"></TiHome>
                        <p className=""  >Home</p>
                    </div>
                </NavLink>


                <NavLink to='/'  className={({ isActive }) =>  `font-Gilroy text-center  ${isActive ? 'font-bold text-[15px]' : 'font-semibold text-[13px]'}`}>

                    <div className=" flex flex-col items-center justify-center">
                        <FiTv className="text-[30px]"></FiTv>
                        <p>Tv Shows</p>
                    </div>
                </NavLink>


                <NavLink to='/'  className={({ isActive }) =>  `font-Gilroy text-center ${isActive ? 'font-bold  text-[15px]' : 'font-semibold  text-[13px]'}`}>

                    <div className=" flex flex-col items-center justify-center">
                        <PiListHeartDuotone className="text-[30px] "></PiListHeartDuotone>
                    </div>
                    <p className="">My list</p>
                </NavLink>

                <NavLink to='/'  className={({ isActive }) =>  `font-Gilroy text-center ${isActive ? 'font-bold  text-[15px]' : 'font-semibold  text-[13px]'}`}>

                    <div className=" flex flex-col items-center justify-center">
                        <img className="rounded-md" src="https://occ-0-2610-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="" height={10} />
                        <p className="font-Gilroy text-center">My netflix</p>
                    </div>
                </NavLink>

            </div>
        </div >
    )
}
export default MobileNav