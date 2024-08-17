import { useEffect, useRef, useState } from "react"
import Header from "../components/header"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import { validateEmail, validatePassword } from "../utils/validateData";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { sendEmailVerification } from "firebase/auth";

const Login = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPasssword] = useState(false)
    const [isSignInForm, setIsSignForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState({})
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const [authError, setAuthError] = useState('')
    const dispatch = useDispatch()

    const [isVerificationSent, setIsVerificationSent] = useState(false);
    // const forgetPass=()=>{
    //     navigate('/forget')
    // }

    const auth = getAuth()
    useEffect(() => {
        if (isVerificationSent) {
            const intervalId = setInterval(() => {
                auth.currentUser.reload().then(() => {
                    if (auth.currentUser.emailVerified) {
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({ uid, email, displayName }));
                        clearInterval(intervalId);
                        navigate('/browse');
                    }
                });
            }, 3000); 

            return () => clearInterval(intervalId); 
        }
    }, [isVerificationSent, auth, dispatch, navigate]);


    const formBtn = () => {
        const emailMessage = validateEmail(email.current.value)
        const passwordMessage = validatePassword(password.current.value)
        // console.log(emailMessage, passwordMessage)
        setErrorMessage({ email: emailMessage, password: passwordMessage })
        // console.log(errorMessage)



        if (passwordMessage && emailMessage) return;


        if (!isSignInForm) {
            // signUp logic

            const auth = getAuth()
            createUserWithEmailAndPassword(auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // ...
                    // console.log(user)
                    updateProfile(user, {
                        displayName: name.current.value
                    }).then(() => {
                        // const { uid, email, displayName } = auth.currentUser
                        // dispatch(addUser({ uid: uid, email: email, displayName: displayName }))



                        sendEmailVerification(auth.currentUser)
                            .then(() => {
                                // Email verification sent!
                                // ...
                                window.alert('Verification link is sent')
                                setIsVerificationSent(true);
                            });
                        // Profile updated!
                        // navigate('/browse')
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                    setAuthError('Some thing went wrong while registering user')
                    // ..
                });

        }
        else {
            // signIn logic

            const auth = getAuth()
            signInWithEmailAndPassword(auth, email.current.value,
                password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                    // console.log(user)
                    navigate('/browse')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setAuthError('User not found! Please SignUp first')
                });

        }

    }

    return (
        <div>
            <Header></Header>
            <div className="absolute">
                <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg" alt="" />
            </div>
            <form onClick={(e) => e.preventDefault()} className="w-4/12 text-white bg-form-grey rounded-md p-12 absolute left-0 right-0 mx-auto my-40 z-10" action="#">
                <h2 className="font-bold text-3xl my-3 text-center">{isSignInForm ? 'Sign In' : 'Sign Up'}</h2>

                {
                    !isSignInForm && <input ref={name} className="rounded-md bg-input-grey p-3 outline-none border-none my-3 w-full" type="text" placeholder="Enter Your Full Name" />
                }
                <input ref={email} className={`rounded-md bg-input-grey p-3 outline-none my-3 w-full
                    ${errorMessage.email ? 'border-solid border-2 border-sign-in-red' : 'border-none'}`} type="email" placeholder="Enter Your email" />
                {
                    errorMessage.email && <p className="flex items-center text-center gap-1 text-sign-in-red"><RiErrorWarningLine className="" />
                        {errorMessage.email}
                    </p>
                }

                <div className={`flex ${errorMessage.password && 'border-solid border-2 border-sign-in-red'} justify-between rounded-md bg-input-grey  my-3 p-3 w-full`}>

                    <input ref={password} className=" w-full rounded-md h-full bg-transparent border-none outline-none" type={showPassword === true ? "text" : "password"} placeholder="Enter Your Password" />
                    <div className="mx-2 my-auto text-lg" onClick={() => setShowPasssword(!showPassword)}>
                        {
                            showPassword === true ? <FaRegEyeSlash /> : <FaRegEye />
                        }
                    </div>
                </div>

                {errorMessage.password &&
                    <p className="flex items-center text-center gap-1 text-sign-in-red"><RiErrorWarningLine className="" />{errorMessage.password}</p>
                }

                <button onClick={formBtn} className="rounded-md bg-red-600 p-3 my-3 w-full">{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                {
                    authError && <p className="text-sign-in-red text-center font-semibold">
                        {authError}
                    </p>
                }
                {
                    isSignInForm && <p onClick={()=>navigate('/forget password')} className=" cursor-pointer text-white my-2">Forgot password</p>
                }

                <p className="text-white">{isSignInForm ? 'New to Netflix?' : 'All ready a user?'}
                    <span onClick={() => setIsSignForm(!isSignInForm)} className="text-white font-bold cursor-pointer">
                        {isSignInForm ? ' Sign up now.' : ' Sign in now'}
                    </span> </p>
            </form>
        </div>
    )
}
export default Login