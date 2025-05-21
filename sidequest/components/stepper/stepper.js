import styles from "./stepper.module.css";

export default function Stepper({ step }) {
    const currentStep = step;

    return (
        <div className={styles.stepperContainer}>
            <div className={`${styles.stepper} ${currentStep >= 1 ? styles.active : ""}`}></div>
            <div className={`${styles.stepper} ${currentStep >= 2 ? styles.active : ""}`}></div>
            <div className={`${styles.stepper} ${currentStep >= 3 ? styles.active : ""}`}></div>
        </div>
    );
}
