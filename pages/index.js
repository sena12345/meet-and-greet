import styles from '../styles/Home.module.css';
import Layout from '../components/layout';

export default function Home() {
	return (
		<Layout>
			<a className={styles.title} href="/people/users">
				Start
			</a>
		</Layout>
	);
}
