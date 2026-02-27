import styles from "./accountSetup.module.css";
import FormInput from "@/components/formInput/formInput";
import { useState } from "react";
import Button from "@/components/button/button";
import IconButton from "@/components/iconButton/iconButton";

export default function AccountSetup({ onNext, onBack }) {
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [password, setPassword] = useState("");
    const [agreement, setAgreement] = useState(false);

    return (
        <div className={styles.accountSetupContainer}>
            <div className={styles.inputContainer}>
                <IconButton
                    icon="/Icons/arrowLeft.svg"
                    variant={"noOutline"}
                    onClick={onBack}
                ></IconButton>
                <h1>Set up your account</h1>
                <FormInput
                    type="text"
                    placeholder="ex. Jane Doe"
                    label="Name"
                    value={name}
                    onChange={setName}
                    errorMessage="Invalid name"
                    isValid={true}
                    isRequired={true}
                    clearable={true}
                    onClear={() => setName("")}
                />
                <FormInput
                    type="date"
                    label="Date of Birth"
                    value={birthDate}
                    onChange={setBirthDate}
                    isValid={true}
                    isRequired={true}
                    clearable={true}
                    onClear={() => setBirthDate("")}
                />
                <FormInput
                    type="password"
                    label="Password"
                    placeholder="ex. RtxJwa379!"
                    value={password}
                    onChange={setPassword}
                    errorMessage="Invalid password"
                    isValid={true}
                    isRequired={true}
                    clearable={true}
                    onClear={() => setPassword("")}
                />
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.agreementContainer}>
                    <input
                        type="checkbox"
                        id="agreement"
                        className={styles.checkbox}
                        value={agreement}
                        onClick={() => setAgreement(!agreement)}
                    />
                    <label htmlFor="agreement" className={styles.agreementText}>
                        By creating an account, you agree to our <a>Terms and Conditions</a> and{" "}
                        <a>Privacy Policy</a>.
                    </label>
                </div>
                <Button
                    text={"Create Account"}
                    onClick={name && birthDate && password && agreement ? onNext : null}
                    variant={name && birthDate && password && agreement ? "primary" : "disabled"}
                ></Button>
            </div>
        </div>
    );
}
