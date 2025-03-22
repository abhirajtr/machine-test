import AuthImage from "../assets/images/auth_image.svg?url";
import Logo from "../assets/images/logo.svg?url";

const AuthLayoutSide = () => {
    return (
        <div className="flex-1 relative overflow-hidden">
            <img src={AuthImage} alt="Auth Image" className="w-full h-full object-cover" />
            <img src={Logo} alt="Recruiter logo" className="absolute top-4 left-4 w-30 md:w-32 lg:w-40 h-auto" />
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white text-center w-full">
                <p className="text-3xl lg:text-4xl font-semibold leading-tight tracking-wide font-[Source Sans Pro] drop-shadow-lg">
                    Transforming Talent Acquisition <br />
                    through Automation
                </p>
            </div>
        </div>
    )
}

export default AuthLayoutSide