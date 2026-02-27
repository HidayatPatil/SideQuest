import Button from "../button/button";
import styles from "./profilePhoto.module.css";
import { useState } from "react";

export default function ProfilePhoto() {
    const [photo, setPhoto] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const handlePhotoClick = () => {
        if (!photo) {
            setPhoto("/profileImage/maya.jpg");
        }
    };

    const handleChangePhoto = () => {
        setPhoto(null);
        setIsLoaded(false);
    };

    return (
        <div className={styles.photoContainer}>
            <div className={styles.profilePhoto} onClick={handlePhotoClick}>
                {!photo && (
                    <div className={styles.placeholder}>
                        <span className={styles.plus}>+</span>
                    </div>
                )}
                {photo && (
                    <img
                        src={photo}
                        alt="Profile"
                        className={`${styles.image} ${isLoaded ? styles.loaded : ""}`}
                        onLoad={() => setIsLoaded(true)}
                    />
                )}
            </div>

            {photo && (
                <div className={styles.buttonContainer}>
                    <Button text="Change Photo" onClick={handleChangePhoto} variant="noShadow" />
                </div>
            )}
        </div>
    );
}
