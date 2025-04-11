"use client";

// Imports
import {FC, Fragment, useState} from "react";
import useWindowSize from "@/hooks/useWindowSize";
import {IImageSlider} from "@/components/ClubPartners/ImageSlider/types/index";

// Swiper.js Slider
import "swiper/css";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Styling
import styles from "@/components/ClubPartners/ImageSlider/styles/ImageSlider.module.scss";

const ImageSlider: FC<IImageSlider.IProps> = ({ imageSlider }) => {
	// State to track window width and check if on desktop
	const windowSize = useWindowSize();

	// State to track window width and check if on desktop
	const [onDesktop, setOnDesktop] = useState(false);

	const handleResize = () => {
		if ((windowSize?.width ?? 0) > 1024) {
			setOnDesktop(true);
		} else {
			setOnDesktop(false);
		}
	};

	return (
		<div className={styles.imageSlider}>
			<div className={styles.container}>
				<Swiper
					loop={true}
					navigation={true}
					spaceBetween={30}
					centeredSlides={true}
					modules={[Autoplay, Navigation]}
					slidesPerView={onDesktop ? 3 : 1}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
				>
					{imageSlider?.length > 0 ? (
						imageSlider?.map((item: any, index: number) => (
							<Fragment key={index}>
								<SwiperSlide>
									<div
										className={styles.slide}
										style={{
											backgroundImage: `linear-gradient(0deg,rgb(0, 0, 0, 0.30),
													rgba(0, 0, 0, 0.10)),url("${item?.image?.sourceUrl}")`,
										}}
									/>
								</SwiperSlide>
							</Fragment>
						))
					) : (
						<></>
					)}
				</Swiper>
			</div>
		</div>
	);
};

export default ImageSlider;
