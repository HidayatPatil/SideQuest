import styles from "@/components/questApplicationPanel/questApplication.module.css";
import Button from "../button/button";

export default function QuestApplication({ onClose }) {
	return (
		<div className={styles.panelBody}>
			<div className={styles.panelHandle} onClick={onClose}></div>
			<div className={styles.panelHeader}>
				<p className={styles.panelTitle}>Quest Checklist</p>
				<img
					className={styles.closePanel}
					src="/Icons/X.svg"
					onClick={onClose}
					alt="Close"
				/>
			</div>
			<p className={styles.panelSubHeading}>
				Make sure you’re prepared for your quest!
			</p>
			<img className={styles.panelImage} src="\appGraphics\signup.svg" />
			<div className={styles.checkList}>
				<div className={styles.requirement}>
					<img src="\Icons\CheckListTick.svg" />
					<p className={styles.listItem}>
						Yes, I’m able to attend on the specified date
					</p>
				</div>
				<div className={styles.requirement}>
					<img src="\Icons\CheckListTick.svg" />
					<p className={styles.listItem}>Yes, I have my own transportation</p>
				</div>
				<div className={styles.requirement}>
					<img src="\Icons\CheckListTick.svg" />
					<p className={styles.listItem}>Yes, I’ve purchased my own ticket</p>
				</div>
			</div>
			<div className={styles.submitButton}>
				<Button text="I'm All Set To Go!" variant="primary" link="/qsApplied" />
			</div>
		</div>
	);
}
