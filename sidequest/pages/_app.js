// pages/_app.js
import "../styles/globals.css"; // This applies global CSS to the whole app

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
