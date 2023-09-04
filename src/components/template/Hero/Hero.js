// Components
import Right from "./Right";
import Left from "./Left";

const Hero = () => {
    return (
        <div className="flex items-center px-2">
            <Right />
            <Left />
        </div>
    );
};

export default Hero;