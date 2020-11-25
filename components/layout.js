import styles from '../styles/Home.module.css';
import Head from 'next/head';
export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Meet & Greet</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className={styles.title}>Welcome to meet & Greet!</h1>

			<main className={styles.main}>{children}</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</footer>
		</div>
	);
}
