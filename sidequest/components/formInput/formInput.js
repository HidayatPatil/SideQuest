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

    return (
        <div className={styles.inputContainer}>
            <label className={styles.label}>{label}</label>
            <div className={styles.inputWrapper}>
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
                {clearable && value && (
                    <button className={styles.clearButton} onClick={onClear} type="button">
                        <img src="/Icons/X.svg" alt="clear" />
                    </button>
                )}
            </div>

            {!isValid && errorMessage && (
                <span className={styles.errorMessage}>{errorMessage}</span>
            )}
        </div>
    );
}
