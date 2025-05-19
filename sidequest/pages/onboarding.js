import Carousel from "@/components/carousel/carousel";
import Button from "@/components/button/button";

export default function Onboarding() {
    return (
        <div className="onboardingPage">
            <Carousel></Carousel>
            <div className="buttonContainer">
                <Button
                    text={"Sign Up"}
                    onClick={() => alert("Sign Up Clicked!")}
                    variant="primary"
                ></Button>
                <Button
                    text={"Already have an account? Log In"}
                    onClick={() => alert("Log In Clicked!")}
                    variant="outline"
                ></Button>
            </div>
        </div>
    );
}
