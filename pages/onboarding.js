import Carousel from "@/components/carousel/carousel";
import Button from "@/components/button/button";
import { useState, useEffect } from "react";
import SignUp from "@/components/signUp/signUp";
import AccountSetup from "@/components/accountSetup/accountSetup";
import IconButton from "@/components/iconButton/iconButton";
import ProfilePhoto from "@/components/profilePhoto/profilePhoto";
import BasicInfo from "@/components/basicInfo/basicInfo";
import SelfIntro from "@/components/selfIntro/selfIntro";
import Stepper from "@/components/stepper/stepper";

export default function Onboarding() {
    const [currentStep, setCurrentStep] = useState("default");
    const [showDialogue, setShowDialogue] = useState(false);

    const openDialogue = () => {
        setShowDialogue(true);
    };

    const closeDialogue = () => {
        setShowDialogue(false);
    };

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
                        <Stepper step={1} />
                        <div className="profileBuilderContainer">
                            <h1 className="profileBuilderTitle">Profile Photo</h1>
                            <p className="profileBuilderText">
                                Make sure the photo clearly shows your face, this allows other
                                adventurers to easily recognize you during quest meetups
                            </p>
                            <Button
                                text={"Skip for now"}
                                onClick={openDialogue}
                                variant="noOutline"
                            ></Button>
                            <ProfilePhoto />
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
                        {showDialogue && (
                            <div className="skipOverlay">
                                <div className="skipDialogue">
                                    <h1 className="skipDialogueTitle">Skip Building Profile?</h1>
                                    <p className="skipDialogueText">
                                        You can find and update your profile information later in
                                        the profile page.
                                    </p>
                                    <div className="skipDialogueButtonContainer">
                                        <Button
                                            text={"Got it, Skip"}
                                            variant="primary"
                                            link="/"
                                        ></Button>
                                        <Button
                                            text={"Back"}
                                            onClick={closeDialogue}
                                            variant="outline"
                                        ></Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                );
            case "basicInfo":
                return (
                    <>
                        <Stepper step={2} />
                        <div className="profileBuilderContainer">
                            <h1 className="profileBuilderTitle">Basic Information</h1>
                            <p className="profileBuilderText">
                                These can be updated later in your Profile page
                            </p>
                            <Button
                                text={"Skip for now"}
                                onClick={openDialogue}
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
                        {showDialogue && (
                            <div className="skipOverlay">
                                <div className="skipDialogue">
                                    <h1 className="skipDialogueTitle">Skip Building Profile?</h1>
                                    <p className="skipDialogueText">
                                        You can find and update your profile information later in
                                        the profile page.
                                    </p>
                                    <div className="skipDialogueButtonContainer">
                                        <Button
                                            text={"Got it, Skip"}
                                            variant="primary"
                                            link="/"
                                        ></Button>
                                        <Button
                                            text={"Back"}
                                            onClick={closeDialogue}
                                            variant="outline"
                                        ></Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                );
            case "selfIntro":
                return (
                    <>
                        <Stepper step={3} />
                        <div className="profileBuilderContainer">
                            <h1 className="profileBuilderTitle">Self-introduction</h1>
                            <p className="profileBuilderText">
                                These can be updated later in your Profile page
                            </p>
                            <Button
                                text={"Skip for now"}
                                onClick={openDialogue}
                                variant="noOutline"
                            ></Button>
                            <SelfIntro />
                        </div>
                        <div className="formButtonContainer">
                            <Button
                                text={"Back"}
                                onClick={() => setCurrentStep("basicInfo")}
                                variant="outline"
                            ></Button>
                            <Button text={"Next"} variant="primary" link="/"></Button>
                        </div>
                        {showDialogue && (
                            <div className="skipOverlay">
                                <div className="skipDialogue">
                                    <h1 className="skipDialogueTitle">Skip Building Profile?</h1>
                                    <p className="skipDialogueText">
                                        You can find and update your profile information later in
                                        the profile page.
                                    </p>
                                    <div className="skipDialogueButtonContainer">
                                        <Button
                                            text={"Got it, Skip"}
                                            variant="primary"
                                            link="/"
                                        ></Button>
                                        <Button
                                            text={"Back"}
                                            onClick={closeDialogue}
                                            variant="outline"
                                        ></Button>
                                    </div>
                                </div>
                            </div>
                        )}
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
