import styles from "./selfIntro.module.css";
import FormInput from "../formInput/formInput";
import { useState } from "react";

export default function SelfIntro() {
    const [personality, setPersonality] = useState("");
    const [culture, setCulture] = useState("");
    const [bio, setBio] = useState("");

    return (
        <div className={styles.basicInfoContainer}>
            <FormInput
                type="text"
                placeholder="ex. Reserved, Cheerful, INFP... "
                label="Briefly describe your personality"
                value={personality}
                onChange={setPersonality}
                errorMessage=""
                isValid={true}
                isRequired={false}
                clearable={false}
                onClear={() => setPersonality("")}
            />
            <FormInput
                type="longText"
                placeholder="ex. Grew up in Montreal, with Chinese immigrant parents..."
                label="Briefly describe your cultural background"
                value={culture}
                onChange={setCulture}
                errorMessage=""
                isValid={true}
                isRequired={false}
                clearable={false}
                onClear={() => setCulture("")}
            />
            <FormInput
                type="longText"
                placeholder="ex. Student at UCLA. New to the city, and looking to meet new friends..."
                label="Write a short bio about yourself"
                value={bio}
                onChange={setBio}
                errorMessage=""
                isValid={true}
                isRequired={false}
                clearable={false}
            />
        </div>
    );
}
