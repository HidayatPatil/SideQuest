import styles from "./basicInfo.module.css";
import FormInput from "../formInput/formInput";
import FormDropdown from "../formDropdown/formDropdown";
import { useState } from "react";

export default function BasicInfo() {
    const [pronouns, setPronouns] = useState("");
    const [occupation, setOccupation] = useState("");

    const languageOptions = [
        { id: "english", label: "English" },
        { id: "french", label: "French" },
        { id: "spanish", label: "Spanish" },
        { id: "chinese", label: "Chinese" },
        { id: "japanese", label: "Japanese" },
        { id: "korean", label: "Korean" },
        { id: "sign", label: "Sign Language" },
    ];

    const accessibilityOptions = [
        { id: "wheelchair", label: "Wheelchair Accessible" },
        { id: "hearing", label: "Hearing Assistance" },
        { id: "visual", label: "Visual Aids" },
        { id: "cognitive", label: "Cognitive Support" },
        { id: "motor", label: "Motor Assistance" },
        { id: "sensory", label: "Sensory-Friendly" },
        { id: "light", label: "Light Sensitivity" },
    ];

    return (
        <div className={styles.basicInfoContainer}>
            <FormInput
                type="text"
                placeholder="ex. She/Her, They/Them"
                label="Pronouns"
                value={pronouns}
                onChange={setPronouns}
                errorMessage=""
                isValid={true}
                isRequired={false}
                clearable={true}
                onClear={() => setPronouns("")}
            />
            <FormInput
                type="text"
                placeholder="ex. Student, UX Designer"
                label="Occupation"
                value={occupation}
                onChange={setOccupation}
                errorMessage=""
                isValid={true}
                isRequired={false}
                clearable={true}
                onClear={() => setOccupation("")}
            />
            <FormDropdown
                placeholder="Select languages"
                label="Spoken Languages"
                options={languageOptions}
            />
            <FormDropdown
                placeholder="Select accessibility needs"
                label="Accessibility Needs"
                options={accessibilityOptions}
            />
        </div>
    );
}
