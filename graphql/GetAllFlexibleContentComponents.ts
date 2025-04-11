// Imports
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

// Components: ACF Flexible Content Post Types
import { CTA } from "@/components/CTA/graphql/index";
import { Hero } from "@/components/Hero/graphql/index";
import { CTATwo } from "@/components/CTATwo/graphql/index";
import { HeroTwo } from "@/components/HeroTwo/graphql/index";
import { HeroFour } from "@/components/HeroFour/graphql/index";
import { HeroThree } from "@/components/HeroThree/graphql/index";
import { VideoBlock } from "@/components/VideoBlock/graphql/index";
import { AboutSimba } from "@/components/AboutSimba/graphql/index";
import { SponsorsLogos } from "@/components/SponsorsLogos/graphql/index";
import { TitleParagraph } from "@/components/TitleParagraph/graphql/index";
import { AboutTheClubGrid } from "@/components/AboutTheClubGrid/graphql/index";
import { GeneralInformation } from "@/components/GeneralInformation/graphql/index";
import { OfficialMembershipsCta } from "@/components/OfficialMembershipsCta/graphql/index";

// Components: Fans
import { LatestVideoBlock } from "@/components/Fans/LatestVideoBlock/graphql/index";
import { AllYouTubeVideos } from "@/components/Fans/AllYouTubeVideos/graphql/index";

// Components: Club Partners Flexible Content Post Types
import { ImageSlider } from "@/components/ClubPartners/ImageSlider/graphql/index";
import { ClubPartnersGrid } from "@/components/ClubPartners/ClubPartnersGrid/graphql/index";
import { TitleContentImage } from "@/components/ClubPartners/TitleContentImage/graphql/index";

/* PAGES & BLOGS POSTS*/
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export const getAllFlexibleContentComponents = async (
	slug: string,
	postType: string,
	postTypeFlexibleContent: string
): Promise<any> => {
	try {
		const content: DocumentNode = gql`
			{
        		mainContent: ${postType}(where: {name: "${slug}", status: PUBLISH}) {
        		  edges {
						node {
							template {
								... on DefaultTemplate {
									flexibleContent {
										flexibleContent {
											... on ${postTypeFlexibleContent}_Hero {${Hero}}
											... on ${postTypeFlexibleContent}_HeroTwo {${HeroTwo}}
											... on ${postTypeFlexibleContent}_HeroThree {${HeroThree}}
											... on ${postTypeFlexibleContent}_HeroFour {${HeroFour}}
											... on ${postTypeFlexibleContent}_Cta {${CTA}}
											... on ${postTypeFlexibleContent}_CtaTwo {${CTATwo}}
											... on ${postTypeFlexibleContent}_TitleParagraph {${TitleParagraph}}
											... on ${postTypeFlexibleContent}_AboutSimba {${AboutSimba}}
											... on ${postTypeFlexibleContent}_AboutTheClubGrid {${AboutTheClubGrid}}
											... on ${postTypeFlexibleContent}_GeneralInformation {${GeneralInformation}}
											... on ${postTypeFlexibleContent}_OfficialMembershipsCta {${OfficialMembershipsCta}}
											... on ${postTypeFlexibleContent}_SponsorsLogos {${SponsorsLogos}}
											... on ${postTypeFlexibleContent}_ClubPartnersGrid {${ClubPartnersGrid}}
											... on ${postTypeFlexibleContent}_VideoBlock {${VideoBlock}}
											... on ${postTypeFlexibleContent}_LatestVideoBlock {${LatestVideoBlock}}
											... on ${postTypeFlexibleContent}_AllYoutubeVideos {${AllYouTubeVideos}}
											... on ${postTypeFlexibleContent}_AllPodcastsVideos {
												fieldGroupName
												displaySection
												title
												cta {
													text
													link {
														url
														title
														target
													}
												}
											}
											... on ${postTypeFlexibleContent}_VisitStore {
												fieldGroupName
												displaySection
												title
												buttonLink {
                  								  	url
                  								  	title
                  								  	target
                  								}
												backgroundImage {
                  								  	altText
                  								  	sourceUrl
                  								  	mediaDetails {
                  								  	  	height
                  								  	  	width
                  								  	}
                  								}
											}
											... on ${postTypeFlexibleContent}_TrophyCabinetBanner {
												fieldGroupName
                  								displaySection
                  								title
                  								paragraph
												buttonLink {
                									url
                									title
                									target
                								}
												trophyCabinet {
                  									name
                  									totalAmount
                  									image {
                  										altText
                  										sourceUrl
                  										mediaDetails {
                  											height
                  											width
                  										}
                  									}
                  								}
												backgroundImage {
                  								  	altText
                  								  	sourceUrl
                  								  	mediaDetails {
                  								  	  	height
                  								  	  	width
                  								  	}
                  								}
											}
											... on ${postTypeFlexibleContent}_TitleContentImage {
            									fieldGroupName
												displaySection
            									title
            									subtitle
            									textTitle
            									paragraph
            									image {
            										altText
            										sourceUrl
            										mediaDetails {
            											height
            											width
            										}
            									}
            									buttonLink {
            										url
            										title
            										target
            									}
            									displayContentOption
            									displayParagraphColor
            									displayBackgroundColor
            								}
											... on ${postTypeFlexibleContent}_TitleParagraphDynamicColour {
            									fieldGroupName
												displaySection
            									title
            									paragraph
												buttonLink {
                									url
                									title
                									target
                								}
                								buttonLinkTwo {
                									url
                									title
                									target
                								}
            									displayContentColor
            									displayBackgroundColor
            								}
											... on ${postTypeFlexibleContent}_ClubCardMembershipCta {
												fieldGroupName
                  								displaySection
                  								title
                  								displayVideo
												buttonLink {
                									url
                									title
                									target
                								}
												video {
                  								  	link
                  								  	title
                  								  	mediaDetails {
                  								  	  	height
                  								  	  	width
                  								  	}
                  								}
												clubCardMembershipText
												backgroundImage {
                  								  	altText
                  								  	sourceUrl
                  								  	mediaDetails {
                  								  	  	height
                  								  	  	width
                  								  	}
                  								}
											}
											... on ${postTypeFlexibleContent}_NewsletterBanner {
												fieldGroupName
                  								displaySection
                  								title
                  								paragraph
                  								buttonLink {
                  								  	url
                  								  	title
                  								  	target
                  								}
											}
											... on ${postTypeFlexibleContent}_SimbatvBanner {
												fieldGroupName
                  								displaySection
                  								title
                  								paragraph
												buttonLink {
                									url
                									title
                									target
                								}
												contentOptions {
                  								  	subtitle
                  								  	buttonTitle
                  								  	contentExcerpt
                  								  	buttonFunction
                  								}
												backgroundImage {
                  								  	altText
                  								  	sourceUrl
                  								  	mediaDetails {
                  								  	  	height
                  								  	  	width
                  								  	}
                  								}
											}
											... on ${postTypeFlexibleContent}_SocialMediaGrid {
												fieldGroupName
												displaySection
												title
											}
											... on ${postTypeFlexibleContent}_LastThreeFixtures {
												fieldGroupName
												displaySection
												title
											}
											... on ${postTypeFlexibleContent}_NewOfficialKitCta {
												fieldGroupName
                  								displaySection
                  								title
												ctaTitle
                  								link {
                  								  	url
                  								  	title
                  								  	target
                  								}
                  								image {
                  								  	altText
                  								  	sourceUrl
                  								  	mediaDetails {
                  								  	  	height
                  								  	  	width
                  								  	}
                  								}
												imageTwo {
                  								  	altText
                  								  	sourceUrl
                  								  	mediaDetails {
                  								  	  	height
                  								  	  	width
                  								  	}
                  								}
											}
											... on ${postTypeFlexibleContent}_LatestNewsGrid {
												fieldGroupName
                  								displaySection
                  								title
                  								ctaLink {
                  								  	url
                  								  	title
                  								  	target
                  								}
                  								buttonLink {
                  								  	url
                  								  	title
                  								  	target
                  								}
                  								image {
                  								  	altText
                  								  	sourceUrl
                  								  	mediaDetails {
                  								  	  	height
                  								  	  	width
                  								  	}
                  								}
											}
											... on ${postTypeFlexibleContent}_ContactForm {
												fieldGroupName
												displaySection
												title
												formTitle
												paragraph
												image {
                  								  	altText
                  								  	sourceUrl
                  								  	mediaDetails {
                  								  	  	height
                  								  	  	width
                  								  	}
                  								}
											}
										}
									}
								}
							}
						}
					}
        		}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return {
			content:
				response.data?.mainContent?.edges[0]?.node?.template?.flexibleContent
					?.flexibleContent,
		};
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all flexible content components"
		);
	}
};

/* CLUB PARTNERS */
/* Fetch all Club Partners Flexible Content Components 
(For every flexible content page) */
export const getAllClubPartnersFlexibleContentComponents = async (
	slug: string,
	postType: string,
	postTypeFlexibleContent: string
): Promise<any> => {
	try {
		const content: DocumentNode = gql`
			{
        		mainContent: ${postType}(where: {name: "${slug}", status: PUBLISH}) {
        		  edges {
						node {
							partnersContent {
								flexibleContent {
									... on ${postTypeFlexibleContent}_ImageSlider {${ImageSlider}}
									... on ${postTypeFlexibleContent}_TitleContentImage {${TitleContentImage}}
								}
							}
						}
					}
        		}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return {
			content:
				response.data?.mainContent?.edges[0]?.node?.partnersContent
					?.flexibleContent,
		};
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all club partners flexible content components"
		);
	}
};
