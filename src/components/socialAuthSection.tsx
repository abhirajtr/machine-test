import Linkedin from "@src/assets/icons/linkedin_icon.svg";
import Google from "@src/assets/icons/google_icon.svg";
import Microsoft from "@src/assets/icons/microsoft_icon.svg";
import { Button } from "antd";

const SocialAuthSection = () => {
    return (
        <div className="my-4 grid grid-cols-3 gap-3">
            <Button
                size="large"
                icon={<Linkedin className="w-5 h-5" />}
                className="flex items-center justify-center gap-2 h-12"
            >Linkedin</Button>
            <Button
                size="large"
                icon={<Google className="w-5 h-5" />}
                className="flex items-center justify-center gap-2 h-12"
            >Google</Button>
            <Button
                size="large"
                icon={<Microsoft className="w-5 h-5" />}
                className="flex items-center justify-center gap-2 h-12"
            >Microsoft</Button>
        </div>
    )
}

export default SocialAuthSection