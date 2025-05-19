// pages/_app.js
import StatusBar from "@/components/statusBar/statusBar"; // ✅ path corrected
import { Rubik } from "next/font/google";
import "../styles/globals.css";

const rubik = Rubik({
	subsets: ["latin"],
	weight: ["400", "700"],
});

function MyApp({ Component, pageProps }) {
	return (
		<main className={rubik.className}>
			<StatusBar /> {/* ✅ This appears on every page */}
			<Component {...pageProps} />
		</main>
	);
}

export default MyApp;
