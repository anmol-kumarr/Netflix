import { NavLink, useLocation, useNavigate, } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import { getAuth,signOut } from "firebase/auth";

const Header = () => {

    
    // const userLoggedIn = useSelector(state => state.user)
    const path = useLocation()

    const [isScrolled, setIsScrolled] = useState(false);
    // const user = useSelector(state => state.user)
    // const { displayName } = useSelector(state => state?.user)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const navigate = useNavigate()
    const signOutHandler = () => {
        const auth = getAuth()
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/')
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className={`fixed  bg-gradient-to-b from-black z-50 w-full top-0 left-0 transition-colors duration-600 ${isScrolled && path.pathname !== '/' ? 'bg-black text-white' : 'bg-transparent text-white'
            }`} >
            <div className="flex justify-between px-5">


                <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
                {


                    path.pathname !== '/' && <>
                        <div className="flex gap-8 items-center ">
                            <NavLink className={({ isActive }) => `${isActive ? 'font-bold' : ''}`} to='/browse'>Home</NavLink>
                            <NavLink to='/tvshows'>Tv Shows</NavLink>
                            <NavLink to='/news and popular'>News & Popular</NavLink>
                            <NavLink to='/My List'>My List</NavLink>
                        </div>


                        <div className="flex items-center gap-5">
                            <IoSearch className="text-2xl" />


                            <img className="rounded-sm h-10" src="https://occ-0-2610-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="" />
                            {/* <p>
                                {displayName && displayName.length > 5 ?
                                    displayName.slice(0, 5)
                                    : displayName}
                            </p> */}


                            <button onClick={signOutHandler}>Sign Out</button>
                        </div>

                    </>
                }


            </div>

        </div >

    )
}
export default Header;