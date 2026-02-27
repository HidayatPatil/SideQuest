import styles from "./formInput.module.css";

export default function FormInput({
    type = "text",
    placeholder,
    label,
    value,
    onChange,
    onFocus,
    onBlur,
    errorMessage,
    isValid,
    isRequired,
    clearable,
    onClear,
}) {
    const handleChange = (e) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const passwordRules = [
        { text: "8+ Characters", fulfilled: value.length >= 8 },
        { text: "At least 1 lowercase", fulfilled: /[a-z]/.test(value) },
        { text: "At least 1 uppercase", fulfilled: /[A-Z]/.test(value) },
        { text: "At least 1 number", fulfilled: /[0-9]/.test(value) },
        { text: "At least 1 symbol", fulfilled: /[^A-Za-z0-9]/.test(value) },
    ];

    const validateEmail = (email) => {
        return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };

    return (
        <div className={styles.inputContainer}>
            <label className={styles.label}>{label}</label>
            <div className={styles.inputWrapper}>
                {type === "longText" ? (
                    <textarea
                        placeholder={placeholder}
                        value={value}
                        onChange={handleChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        className={`${styles.input} ${styles.longText} ${
                            !isValid ? styles.error : ""
                        }`}
                        required={isRequired}
                        rows={3}
                    />
                ) : (
                    <input
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={handleChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        className={`${styles.input} ${!isValid ? styles.error : ""}`}
                        required={isRequired}
                    />
                )}
                {clearable && value && (
                    <button className={styles.clearButton} onClick={onClear} type="button">
                        <img src="/Icons/X.svg" alt="clear" />
                    </button>
                )}
            </div>

            {type === "email" && !validateEmail(value) && (
                <p className={styles.emailHint}>Please enter a valid email address.</p>
            )}

            {type === "email" && validateEmail(value) && (
                <div className={styles.emailValid}>
                    <img
                        src="/Icons/CheckListTick.svg"
                        alt="fulfilled"
                        className={styles.emailCheckIcon}
                    />
                    <span className={styles.emailHint}>Email address valid!</span>
                </div>
            )}

            {type === "password" && (
                <div className={styles.passwordRules}>
                    <p className={styles.rulesTitle}>Your password must include:</p>
                    <div className={styles.rulesList}>
                        {passwordRules.map((rule, index) => (
                            <div key={index} className={styles.ruleItem}>
                                {rule.fulfilled ? (
                                    <img
                                        src="/Icons/CheckListTick.svg"
                                        alt="fulfilled"
                                        className={styles.checkIcon}
                                    />
                                ) : (
                                    <img
                                        src="/Icons/checkCircle.svg"
                                        alt="unfulfilled"
                                        className={styles.checkIcon}
                                    />
                                )}
                                <span
                                    className={`${styles.ruleText} ${
                                        rule.fulfilled ? styles.fulfilled : ""
                                    }`}
                                >
                                    {rule.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {!isValid && errorMessage && (
                <span className={styles.errorMessage}>{errorMessage}</span>
            )}
        </div>
    );
}
