import { useNavigate } from "react-router-dom"
import Header from "../components/header"
import { useRef, useState } from "react"
import { validateEmail } from "../utils/validateData"
import { RiErrorWarningLine } from "react-icons/ri"
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
const ForgotPass = () => {
    const [warning, setWarning] = useState('')
    const navigate = useNavigate()
    const emailRef = useRef(null)
    const forgetPass = () => {
        const email = emailRef.current.value
        const response = validateEmail(email)
        setWarning(response)
        if (!response) {

            const auth = getAuth();
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    window.alert('Mail send successfully ')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                
                });
        }
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg" alt="" />
            </div>
            <div className="p-8 rounded-md absolute z-30 top-[40%] left-[40%] bg-form-grey ">
                <div className="flex">

                    <input ref={emailRef} className={`bg-white outline-none p-2 ${warning ? 'border-solid border-2 border-sign-in-red' : 'border-none'}`} type="email" placeholder="Enter your Email" />

                    <button className="text-white font-Gilroy font-medium p-2 bg-sign-in-red" onClick={forgetPass}>Send link</button>
                </div>
                {
                    warning && <p className="flex items-center text-center gap-1 text-sign-in-red"><RiErrorWarningLine className="" />
                        {warning}
                    </p>
                }
                <p onClick={() => navigate('/')} className="mt-2 text-center font-medium cursor-pointer text-white font-Gilroy ">Go to SignIn page</p>
            </div>
        </div>
    )
}
export default ForgotPass