import { Quote } from "../components/Quote";
import SigninComponent from "../components/SigninComponent";

function Signin(){
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <SigninComponent/>
            <div className="hidden lg:block">
                <Quote/>
            </div>
        </div>
    )
}


export default Signin;