import Carousel from "@/components/carousel/carousel";
import Button from "@/components/button/button";
import { useState, useEffect } from "react";
import SignUp from "@/components/signUp/signUp";
import AccountSetup from "@/components/accountSetup/accountSetup";
import IconButton from "@/components/iconButton/iconButton";
import BasicInfo from "@/components/basicInfo/basicInfo";

export default function Onboarding() {
    const [currentStep, setCurrentStep] = useState("default");

    useEffect(() => {
        if (currentStep === "default") {
            const timer = setTimeout(() => {
                setCurrentStep("welcome");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [currentStep]);

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
                            onNext={() => setCurrentStep("prompt")}
                            onBack={() => setCurrentStep("signup")}
                        />
                    </>
                );
            case "prompt":
                return (
                    <>
                        <IconButton
                            icon="/Icons/arrowLeft.svg"
                            variant={"noOutline"}
                            onClick={() => setCurrentStep("accountSetup")}
                        ></IconButton>
                        <div className="promptContainer">
                            <h1 className="promptTitle">
                                Help other adventurers
                                <br />
                                get to know you
                            </h1>
                            <img
                                src="/appGraphics/introduction.svg"
                                alt="Introduce yourself"
                                className="promptImage"
                            />
                            <div className="promptTextContainer">
                                <p className="promptText">
                                    Before you start exploring, tell us a bit about yourself. Your
                                    answers will help other adventurers better connect with you
                                </p>
                            </div>
                        </div>
                        <div className="buttonContainer">
                            <div className="timeContainer">
                                <img src="/Icons/clock.svg" alt="Time icon" className="timeIcon" />
                                <p className="timeText">Takes 5 - 10 minutes</p>
                            </div>
                            <Button
                                text={"Build Your Profile"}
                                onClick={() => setCurrentStep("profilePhoto")}
                                variant="primary"
                            ></Button>
                        </div>
                    </>
                );
            case "profilePhoto":
                return (
                    <>
                        <div className="profileBuilderContainer">
                            <h1 className="profileBuilderTitle">Profile Photo</h1>
                            <p className="profileBuilderText">
                                Make sure the photo clearly shows your face, this allows other
                                adventurers to easily recognize you during quest meetups
                            </p>
                            <Button
                                text={"Skip for now"}
                                onClick={() => setCurrentStep("home")} // TODO: change to overlay
                                variant="noOutline"
                            ></Button>
                            {/* <ProfilePhoto
                                onNext={() => setCurrentStep("basicInfo")}
                                onBack={() => setCurrentStep("prompt")}
                            /> */}
                        </div>
                        <div className="formButtonContainer">
                            <Button
                                text={"Back"}
                                onClick={() => setCurrentStep("prompt")}
                                variant="outline"
                            ></Button>
                            <Button
                                text={"Next"}
                                onClick={() => setCurrentStep("basicInfo")}
                                variant="primary"
                            ></Button>
                        </div>
                    </>
                );
            case "basicInfo":
                return (
                    <>
                        <div className="profileBuilderContainer">
                            <h1 className="profileBuilderTitle">Basic Information</h1>
                            <p className="profileBuilderText">
                                These can be updated later in your Profile page
                            </p>
                            <Button
                                text={"Skip for now"}
                                onClick={() => setCurrentStep("home")} // TODO: change to overlay
                                variant="noOutline"
                            ></Button>
                            <BasicInfo />
                        </div>
                        <div className="formButtonContainer">
                            <Button
                                text={"Back"}
                                onClick={() => setCurrentStep("profilePhoto")}
                                variant="outline"
                            ></Button>
                            <Button
                                text={"Next"}
                                onClick={() => setCurrentStep("selfIntro")}
                                variant="primary"
                            ></Button>
                        </div>
                    </>
                );
            case "selfIntro":
                return (
                    <>
                        <div className="profileBuilderContainer">
                            <h1 className="profileBuilderTitle">Self-introduction</h1>
                            <p className="profileBuilderText">
                                These can be updated later in your Profile page
                            </p>
                            <Button
                                text={"Skip for now"}
                                onClick={() => setCurrentStep("home")} // TODO: change to overlay
                                variant="noOutline"
                            ></Button>
                            {/* <SelfIntro
                            onNext={() => setCurrentStep("home")}
                            onBack={() => setCurrentStep("basicInfo")}
                        /> */}
                        </div>
                        <div className="formButtonContainer">
                            <Button
                                text={"Back"}
                                onClick={() => setCurrentStep("basicInfo")}
                                variant="outline"
                            ></Button>
                            <Button
                                text={"Next"}
                                onClick={() => setCurrentStep("home")} // TODO: link to home page
                                variant="primary"
                            ></Button>
                        </div>
                    </>
                );
            default:
                return (
                    <>
                        <div className="splashContainer">
                            <img
                                src="/appGraphics/logo_vertical.svg"
                                alt="Splash image"
                                className="splashImage"
                            />
                            <div className="splashTextContainer">
                                <p className="splashText">Turn the ordinary into an adventure!</p>
                            </div>
                        </div>
                    </>
                );
        }
    };

    return <div className="onboardingPage">{renderStep()}</div>;
}
