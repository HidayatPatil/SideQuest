import { useRouter } from "next/router";
import Button from "@/components/button/button";

export default function QsApplied() {
	const router = useRouter(); // ✅ create router instance

	return (
		<div className="qsAppliedBg">
			<div className="appliedContainer">
				<h1 className="appliedTitle">Application Complete!</h1>
				<img src="\appGraphics\hifive.svg" />
				<p className="qsAppliedContent">
					You’ve successfully applied to the quest! Now just sit back and wait
					for the quest master to approve your application.
				</p>

				<div className="qsAppliedButtons">
					<Button
						text="Back to Quest Details"
						variant="secondary"
						onClick={() => router.back()} // ✅ now it works
					/>

					<Button text="Go to Home Page" variant="primary" link="/" />
				</div>
			</div>
		</div>
	);
}
