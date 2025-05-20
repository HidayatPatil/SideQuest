import Carousel from "@/components/carousel/carousel";
import Button from "@/components/button/button";
import { useState } from "react";
import SignUp from "@/components/signUp/signUp";
import AccountSetup from "@/components/accountSetup/accountSetup";

export default function Onboarding() {
    const [currentStep, setCurrentStep] = useState("welcome");

    const renderStep = () => {
        switch (currentStep) {
            case "welcome":
                return (
                    <>
                        <Carousel />
                        <div className="buttonContainer">
                            <Button
                                text={"Sign Up"}
                                onClick={() => setCurrentStep("signup")}
                                variant="primary"
                            ></Button>
                            <Button
                                text={"Already have an account? Log In"}
                                onClick={() => setCurrentStep("signup")}
                                variant="outline"
                            ></Button>
                        </div>
                    </>
                );
            case "signup":
                return (
                    <>
                        <SignUp
                            onNext={() => setCurrentStep("accountSetup")}
                            onBack={() => setCurrentStep("welcome")}
                        />
                        <div className="buttonContainer">
                            <Button
                                icon={"/Icons/googleLogo.svg"}
                                iconPosition="left"
                                text={"Continue with Google"}
                                onClick={() => setCurrentStep("accountSetup")}
                                variant="outline"
                            ></Button>
                            <Button
                                icon={"/Icons/appleLogo.svg"}
                                iconPosition="left"
                                text={"Continue with Apple"}
                                onClick={() => setCurrentStep("accountSetup")}
                                variant="outline"
                            ></Button>
                        </div>
                    </>
                );
            case "accountSetup":
                return (
                    <>
                        <AccountSetup
                            onNext={() => setCurrentStep("welcome")}
                            onBack={() => setCurrentStep("signup")}
                        />
                    </>
                );
        }
    };

    return <div className="onboardingPage">{renderStep()}</div>;
}
