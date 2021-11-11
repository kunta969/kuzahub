import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Farmly Services</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Karibu Farmly</h1>

				<p className={styles.description}>
					Open-source software solution for local farmers
				</p>

				<div className={styles.grid}>
					<Link href="./marketplace" passHref>
						<div className={styles.card}>
							<Image
								src="/images/market-min.jpg"
								width="250"
								height="160"
								layout="responsive"
								alt="market"
							/>
							<br />
							<h2>Products Marketplace &rarr;</h2>
							<p>
								Connect to local farming producers. No middlemen, No hidden
								costs.
							</p>
						</div>
					</Link>

					<Link href="./invest" passHref>
						<div className={styles.card}>
							<Image
								src="/images/invest-min.jpg"
								width="250"
								height="160"
								layout="responsive"
								alt="market"
							/>
							<br />
							<h2>Investments Center &rarr;</h2>
							<p>
								Invest in agribusiness projects at the comfort of your home.
							</p>
						</div>
					</Link>

					<Link href="./supply" passHref>
						<div className={styles.card}>
							<Image
								src="/images/logistics-min.jpg"
								width="250"
								height="160"
								layout="responsive"
								alt="market"
							/>
							<br />
							<h2>Logistics & Supply &rarr;</h2>
							<p>Explore logistical solutions for your business.</p>
						</div>
					</Link>

					<Link href="./news" passHref>
						<div className={styles.card}>
							<Image
								src="/images/news-min.jpg"
								width="250"
								height="160"
								layout="responsive"
								alt="market"
							/>
							<br />
							<h2>News &rarr;</h2>
							<p>
								Access curated articles on most recent developments in the
								Agribusiness space.
							</p>
						</div>
					</Link>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
}
