import styles from "@/components/feedbackPanel/feedback.module.css";
import Button from "../button/button";
import { useState } from "react";

const members = [
    { name: "Jordan", id: "149385", img: "/profileImage/JD.png" },
    { name: "Maya", id: "109259", img: "/profileImage/Maya.jpg" },
    { name: "Gilbert", id: "165510", img: "/profileImage/Gilbert.png" },
    { name: "Dylany", id: "149840", img: "/profileImage/Dylany.png" },
];

export default function FeedBack({ onClose }) {
    const [feedbackState, setFeedbackState] = useState(
        members.map(() => ({ upvoted: false, downvoted: false }))
    );

    const toggleUpvote = (index) => {
        setFeedbackState((prev) =>
            prev.map((f, i) =>
                i === index ? { ...f, upvoted: !f.upvoted } : f
            )
        );
    };

    const toggleDownvote = (index) => {
        setFeedbackState((prev) =>
            prev.map((f, i) =>
                i === index ? { ...f, downvoted: !f.downvoted } : f
            )
        );
    };

    const handleSubmit = () => {
        onClose(); // Parent handles closing + showing snackbar
    };

    return (
        <div className={styles.panelBody}>
            <div
                className={styles.panelHandle}
                onClick={onClose}
            ></div>
            <p className={styles.panelTitle}>
                Send an upvote to a quester from your party
            </p>

            {members.map((member, index) => {
                const { upvoted, downvoted } = feedbackState[index];
                return (
                    <div
                        className={styles.memberCard}
                        key={member.id}
                    >
                        <img
                            className={styles.memberImage}
                            src={member.img}
                            alt={member.name}
                        />
                        <div className={styles.memberDetails}>
                            <h4>{member.name}</h4>
                            <p>ID#{member.id}</p>
                        </div>
                        <div
                            className={`${styles.upvote} ${
                                upvoted ? styles.upvoteActive : ""
                            }`}
                            onClick={() => toggleUpvote(index)}
                        >
                            <img
                                src={
                                    upvoted
                                        ? "/Icons/feedbackThumbsupWhite.svg"
                                        : "/Icons/feedbackThumbsup.svg"
                                }
                                alt="Upvote"
                            />
                        </div>
                        <div
                            className={`${styles.downvote} ${
                                downvoted ? styles.downvoteActive : ""
                            }`}
                            onClick={() => toggleDownvote(index)}
                        >
                            <img
                                src={
                                    downvoted
                                        ? "/Icons/feedbackWarningWhite.png"
                                        : "/Icons/feedbackWarning.svg"
                                }
                                alt="Downvote"
                            />
                        </div>
                    </div>
                );
            })}

            <div className={styles.submitButton}>
                <Button
                    text="Submit"
                    variant="primary"
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
}
