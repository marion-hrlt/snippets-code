import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
	{
		title: "WordPress",
		Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
		description: <>Cette doc regroupe toutes les fonctions ou tips que j'ai rencontré sur le CMS WordPress.</>,
	},
	{
		title: "Gagner du temps",
		Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
		description: <>Cette doc me permet de gagner du temps sur certaines fonctions ou composants que j'ai déjà rencontré au cours de mes expériences.</>,
	},
	{
		title: "Base de code",
		Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
		description: <>Je mets à disposition une base de theme et plugin utiles pour mes développements sur WordPress.</>,
	},
];

function Feature({Svg, title, description}) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
