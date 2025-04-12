// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IError} from "@/components/Error/types/index";
import {fadeIn, initialTwo} from "@/animations/animations";

// Styling
import styles from "@/components/Error/styles/Error.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph/Paragraph";

const Error: FC<IError.IProps> = ({title, paragraph, backgroundImage}) => {
	return (
		<div className={styles.Error}>
			<div
				className={styles.container}
				style={{
					backgroundImage: `linear-gradient(0deg,rgba(234, 29, 37, 0),rgba(234, 29, 37, 0.5),rgba(234, 29, 37, 0.80)),url("${backgroundImage?.sourceUrl}")`,
				}}
			>
				<div className={styles.content}>
					<motion.h1
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className={styles.title}
					>
						{title}
					</motion.h1>
					<Paragraph content={paragraph} className={styles.paragraph} />
				</div>
			</div>
		</div>
	);
};

export default Error;
