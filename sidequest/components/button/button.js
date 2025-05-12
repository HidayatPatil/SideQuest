//import Link from "next/link";
import styles from "@/components/button.module.css";

export default function Button({
    text,
    icon, // icon URL or whatever XD RAWR
    onClick,
    variant = "primary", // default
    link,
}) {
    const content = (
        <>
            {icon && (
                <img
                    src={icon}
                    alt="icon"
                    className={styles.icon}
                />
            )}
            <span
                className={`${styles.buttonText} ${styles[`${variant}Text`]}`}
            >
                {text}
            </span>
        </>
    );

    if (link) {
        return (
            <a
                href={link}
                className={`${styles.button} ${styles[variant]}`}
                onClick={onClick}
            >
                {content}
            </a>
        );
    }

    //no link, just a button
    return (
        <button
            className={`${styles.button} ${styles[variant]}`}
            onClick={onClick}
            disabled={variant === "primaryDisabled"}
        >
            {content}
        </button>
    );
}

// <Button
//     text="Join Now"
//     icon="/Icons/plus.svg"
//     variant="primary"
//     onClick={() => alert("Joined!")}
//     style={{ width: "100%" }} // Or any custom width
// />

// <Button
//     text="View Profile"
//     link="/profile"
//     icon="/Icons/user.svg"
//     variant="secondary"
// />
