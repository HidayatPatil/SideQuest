import styles from "./signUp.module.css";
import FormInput from "@/components/formInput/formInput";
import { useState } from "react";
import Button from "@/components/button/button";
import IconButton from "../iconButton/iconButton";

export default function SignUp({ onNext, onBack }) {
    const [email, setEmail] = useState("");

    return (
        <div className={styles.signUpContainer}>
            <IconButton
                icon="/Icons/arrowLeft.svg"
                variant={"noOutline"}
                onClick={onBack}
            ></IconButton>
            <h1>Start your adventure</h1>
            <div className={styles.imageContainer}>
                <img src="/appGraphics/signup.svg" alt="Sign Up" className={styles.image} />
            </div>
            <FormInput
                type="text"
                placeholder="ex. janedoe@sidequest.com"
                label="Email"
                value={email}
                onChange={setEmail}
                errorMessage="Invalid email address"
                isValid={true}
                isRequired={true}
                clearable={true}
                onClear={() => setEmail("")}
            />
            <div className={styles.buttonContainer}>
                <Button
                    text={"Continue with email"}
                    onClick={email ? onNext : null}
                    variant={email ? "primary" : "disabled"}
                ></Button>
            </div>
            <div className={styles.orContainer}>
                <hr className={styles.line} />
                <span className={styles.orText}>or</span>
                <hr className={styles.line} />
            </div>
        </div>
    );
}
