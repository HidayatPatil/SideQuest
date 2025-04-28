// pages/_app.js
import { Rubik } from "next/font/google";
import "../styles/globals.css";

const rubik = Rubik({
	subsets: ["latin"],
	weight: ["400", "700"], // Choose weights you need
});

function MyApp({ Component, pageProps }) {
	return (
		<main className={rubik.className}>
			<Component {...pageProps} />
		</main>
	);
}

export default MyApp;
