// Imports
import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {IFooter} from "@/components/Global/Footer/types/index";
import { initial, stagger, arrayLoopStaggerChildren} from "@/animations/animations";

// Styling
import styles from "@/components/Global/Footer/styles/Footer.module.scss";

// Components
import ContentSliceRevealMaskAnimation from "@/components/Animations/ContentSliceRevealMaskAnimation";

const FooterLinksWrapper: FC<IFooter.IFooterLinksWrapper> = ({sublinks}) => {
    return (
        <motion.ul
            initial={initial}
            variants={stagger}
            whileInView="animate"
            className={styles.ul}
        >
            {sublinks?.length > 0 ? (
                sublinks?.map(
                    (item: any, index: number) => (
                        <motion.li
                            custom={index}
							initial={initial}
							whileInView="animate"
							viewport={{once: true}}
							variants={arrayLoopStaggerChildren}
                        >
                            <ContentSliceRevealMaskAnimation>
                                <Link
                                    className={styles.link}
                                    href={`${item?.node?.url}`}
                                    aria-label={`${item?.node?.label}`}
                                    target={item?.node?.target || "_self"}
                                >
                                    {item?.node?.label}
                                </Link>
                            </ContentSliceRevealMaskAnimation>
                        </motion.li>
                    )
                )
            ) : (
                <></>
            )}
        </motion.ul>
    );
}

export default FooterLinksWrapper;