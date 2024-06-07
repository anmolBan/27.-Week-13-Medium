import { Quote } from "../components/Quote";
import SignupComponent from "../components/SignupComponent";

function Signup(){
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <SignupComponent/>
            <div className="hidden lg:block">
                <Quote/>
            </div>
        </div>
    )
}


export default Signup;