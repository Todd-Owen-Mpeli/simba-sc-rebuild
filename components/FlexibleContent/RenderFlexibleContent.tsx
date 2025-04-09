"use client";

// Imports
import React, {FC, Fragment} from "react";
import {usePageContext} from "@/context/providers/PageContextProvider";

// CTA Components
import CTA from "@/components/CTA/Cta";
import CTATwo from "@/components/CTA/CTATwo";

// Hero Components
import Hero from "@/components/Hero/Hero";
import HeroTwo from "@/components/HeroTwo/HeroTwo";
import HeroFour from "@/components/HeroFour/HeroFour";
import HeroThree from "@/components/HeroThree/HeroThree";

// Fans Pages
import AllYoutubeVideos from "@/components/Fans/AllYouTubeVideos/index";
import LatestVideoBlock from "@/components/Fans/LatestVideoBlock/index";
import AllPodcastsVideos from "@/components/Fans/AllPodcastsVideos/index";

// Other Components
import VideoBlock from "@/components/VideoBlock/index";
import VisitStore from "@/components/VisitStore/index";
import SponsorsLogos from "@/components/SponsorsLogos";
import ContactForm from "@/components/ContactForm/index";
import TitleParagraph from "@/components/TitleParagraph";
import LatestNewsGrid from "@/components/LatestNews/index";
import SocialMediaGrid from "@/components/SocialMediaGrid";
import AboutSimba from "@/components/AboutSimba/AboutSimba";
import NewsletterBanner from "@/components/NewsletterBanner";
import SimbaTVBanner from "@/components/SimbaTVBanner/index";
import NewOfficialKitCta from "@/components/NewOfficialKitCta";
import GeneralInformation from "@/components/GeneralInformation";
import TrophyCabinetBanner from "@/components/TrophyCabinetBanner";
import TitleContentImage from "@/components/TitleContentImage/Index";
import ClubCardMembershipCTA from "@/components/ClubCardMembershipCta";
import LastThreeFixtures from "@/components/Fixtures/LastThreeFixtures";
import OfficialMembershipsCta from "@/components/OfficialMembershipsCta";
import ClubPartnersGrid from "@/components/ClubPartners/ClubPartnersGrid";
import AboutTheClubGrid from "@/components/AboutTheClubGrid/AboutTheClubGrid";
import TitleParagraphDynamicColour from "@/components/TitleParagraphDynamicColour";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent: any = content?.postTypeFlexibleContent;

	// Components Key Value Pairs
	const componentMapping: any = {
		// CTA Components
		[`${FlexibleContent}_Cta`]: CTA,
		[`${FlexibleContent}_CtaTwo`]: CTATwo,

		// Hero Components
		[`${FlexibleContent}_Hero`]: Hero,
		[`${FlexibleContent}_HeroTwo`]: HeroTwo,
		[`${FlexibleContent}_HeroFour`]: HeroFour,
		[`${FlexibleContent}_HeroThree`]: HeroThree,

		// Other Components
		[`${FlexibleContent}_AboutSimba`]: AboutSimba,
		[`${FlexibleContent}_VideoBlock`]: VideoBlock,
		[`${FlexibleContent}_VisitStore`]: VisitStore,
		[`${FlexibleContent}_ContactForm`]: ContactForm,
		[`${FlexibleContent}_TitleParagraphDynamicColour`]:
			TitleParagraphDynamicColour,
		[`${FlexibleContent}_SimbatvBanner`]: SimbaTVBanner,
		[`${FlexibleContent}_SponsorsLogos`]: SponsorsLogos,
		[`${FlexibleContent}_TitleParagraph`]: TitleParagraph,
		[`${FlexibleContent}_LatestNewsGrid`]: LatestNewsGrid,
		[`${FlexibleContent}_SocialMediaGrid`]: SocialMediaGrid,
		[`${FlexibleContent}_ClubPartnersGrid`]: ClubPartnersGrid,
		[`${FlexibleContent}_AboutTheClubGrid`]: AboutTheClubGrid,
		[`${FlexibleContent}_NewsletterBanner`]: NewsletterBanner,
		[`${FlexibleContent}_NewOfficialKitCta`]: NewOfficialKitCta,
		[`${FlexibleContent}_TitleContentImage`]: TitleContentImage,
		[`${FlexibleContent}_LastThreeFixtures`]: LastThreeFixtures,
		[`${FlexibleContent}_GeneralInformation`]: GeneralInformation,
		[`${FlexibleContent}_TrophyCabinetBanner`]: TrophyCabinetBanner,
		[`${FlexibleContent}_ClubCardMembershipCta`]: ClubCardMembershipCTA,
		[`${FlexibleContent}_OfficialMembershipsCta`]: OfficialMembershipsCta,

		// Fans Pages
		[`${FlexibleContent}_AllYoutubeVideos`]: AllYoutubeVideos,
		[`${FlexibleContent}_LatestVideoBlock`]: LatestVideoBlock,
		[`${FlexibleContent}_AllPodcastsVideos`]: AllPodcastsVideos,
	};

	return (
		<>
			{content?.content?.length > 0 &&
				content?.content?.map((item: any, index: number) => (
					<Fragment key={index}>
						{item?.displaySection ? (
							<section>
								{componentMapping[item?.fieldGroupName] && (
									<>
										{React.createElement(componentMapping[item?.fieldGroupName], {
											...item,
										})}
									</>
								)}
							</section>
						) : (
							<></>
						)}
					</Fragment>
				))
			}
		</>
	);
};

export default RenderFlexibleContent;
