import Carousel from "@/components/carousel/carousel";
import Button from "@/components/button/button";
import FormInput from "@/components/formInput/formInput";
import { useState } from "react";

export default function Onboarding() {
    const [email, setEmail] = useState("");

    return (
        <div className="onboardingPage">
            <Carousel />
            <FormInput
                type="text"
                placeholder="Enter your email"
                label="Email"
                value={email}
                onChange={setEmail}
                errorMessage="Invalid email address"
                isValid={true}
                isRequired={true}
                clearable={true}
                onClear={() => setEmail("")}
            />
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
