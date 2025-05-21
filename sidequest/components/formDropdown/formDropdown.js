import styles from "./formDropdown.module.css";
import { useState, useEffect, useRef } from "react";
import Button from "@/components/button/button";

export default function FormDropdown({ placeholder, label, options = [] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleToggleOption = (optionId) => {
        setSelectedOptions((prev) => {
            if (prev.includes(optionId)) {
                return prev.filter((id) => id !== optionId);
            } else {
                return [...prev, optionId];
            }
        });
    };

    const handleSave = () => {
        setIsOpen(false);
    };

    const displayValue =
        selectedOptions.length > 0
            ? options
                  .filter((option) => selectedOptions.includes(option.id))
                  .map((option) => option.label)
                  .join(", ")
            : placeholder;

    return (
        <div className={styles.dropdownContainer} ref={dropdownRef}>
            <label className={styles.label}>{label}</label>
            <div className={styles.dropdownTrigger} onClick={() => setIsOpen(!isOpen)}>
                <span
                    className={selectedOptions.length > 0 ? styles.triggerText : styles.placeholder}
                >
                    {displayValue}
                </span>
                <img src="/Icons/dropdownArrow.svg" alt="toggle" className={styles.chevron} />
            </div>

            {isOpen && (
                <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                        <div className={styles.overlayHandle} onClick={handleSave}></div>
                        <h2 className={styles.overlayTitle}>Select {label}</h2>
                        <div className={styles.optionsList}>
                            {options.map((option) => (
                                <label key={option.id} className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={selectedOptions.includes(option.id)}
                                        onChange={() => handleToggleOption(option.id)}
                                        className={styles.checkbox}
                                    />
                                    <span className={styles.checkboxText}>{option.label}</span>
                                </label>
                            ))}
                        </div>
                        <Button text="Save" variant="primary" onClick={handleSave} />
                    </div>
                </div>
            )}
        </div>
    );
}
