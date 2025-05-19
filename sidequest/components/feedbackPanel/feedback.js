import styles from "@/components/feedbackPanel/feedback.module.css";
import Button from "../button/button";

export default function FeedBack({ onClose }) {
	return (
		<div className={styles.panelBody}>
			{/* <div
				onClick={onClose}
				style={{ position: "absolute", right: 20, top: 20, cursor: "pointer" }}
			>
				<img src="/Icons/X.svg" alt="Close" />
			</div> */}
			<div className={styles.panelHandle} onClick={onClose}></div>
			<p className={styles.panelTitle}>
				Send an upvote to a quester from your party
			</p>
			<div className={styles.memberCard}>
				<img className={styles.memberImage} src="\profileImage\JD.png" />
				<div className={styles.memberDetails}>
					<h4>Jordan</h4>
					<p>ID#149385</p>
				</div>
				<div className={styles.upvote}>
					<img src="\Icons\feedbackThumbsup.svg" />
				</div>
				<div className={styles.downvote}>
					<img src="\Icons\feedbackWarning.svg" />
				</div>
			</div>
			<div className={styles.memberCard}>
				<img className={styles.memberImage} src="\profileImage\Maya.jpg" />
				<div className={styles.memberDetails}>
					<h4>Maya</h4>
					<p>ID#109259</p>
				</div>
				<div className={styles.upvote}>
					<img src="\Icons\feedbackThumbsup.svg" />
				</div>
				<div className={styles.downvote}>
					<img src="\Icons\feedbackWarning.svg" />
				</div>
			</div>
			<div className={styles.memberCard}>
				<img className={styles.memberImage} src="\profileImage\Gilbert.png" />
				<div className={styles.memberDetails}>
					<h4>Gilbert</h4>
					<p>ID#165510</p>
				</div>
				<div className={styles.upvote}>
					<img src="\Icons\feedbackThumbsup.svg" />
				</div>
				<div className={styles.downvote}>
					<img src="\Icons\feedbackWarning.svg" />
				</div>
			</div>
			<div className={styles.memberCard}>
				<img className={styles.memberImage} src="\profileImage\Dylany.png" />
				<div className={styles.memberDetails}>
					<h4>Dylany</h4>
					<p>ID#149840</p>
				</div>
				<div className={styles.upvote}>
					<img src="\Icons\feedbackThumbsup.svg" />
				</div>
				<div className={styles.downvote}>
					<img src="\Icons\feedbackWarning.svg" />
				</div>
			</div>
			<div className={styles.submitButton}>
				<Button text="Submit" variant="primary" onClick={onClose} />
			</div>
		</div>
	);
}
