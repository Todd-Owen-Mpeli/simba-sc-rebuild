export type ISeo = {
	canonical: string;
	cornerstone: Boolean;
	focuskw: string;
	fullHead: string;
	metaDesc: string;
	metaKeywords: string;
	metaRobotsNofollow: string;
	metaRobotsNoindex: string;
	opengraphAuthor: string;
	opengraphDescription: string;
	opengraphImage: {
		mediaItemUrl: string;
	};
	opengraphModifiedTime: string;
	opengraphPublishedTime: string;
	opengraphPublisher: string;
	opengraphSiteName: string;
	opengraphTitle: string;
	opengraphType: string;
	opengraphUrl: string;
	readingTime: number;
	title: string;
	twitterDescription: string;
	twitterTitle: string;
	twitterImage: {
		mediaItemUrl: string;
	};
};
export type IContent = [
	{
		content: any;
	}
];

/* CUSTOM POST TYPES TYPES  */
export namespace ICustomPostTypes {
	export type INews = {
		node: {
			id: string;
			slug: string;
			date: string;
			title: string;
			excerpt: string;
			featuredImage: {
				node: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}[];
	export type IBlogs = INews
	export type ICaseStudies = INews
	export type ITestimonials = {
		node: {
			testimonialReview: {
				name: string;
				jobTitle: string;
				paragraph: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}[];
	export type IJobsPositions = {
		node: {
			id: string;
			uri: string;
			date: string;
			title: string;
			excerpt: string;
			featuredImage: {
				node: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}[];
	export type IThemesOptions = {
		email: string;
		address: string;
		emailTwo: string;
		textarea: string;
		phoneNumber: string;
		facebookLink: {
			url: string;
			title: string;
			target: string;
		};
		twitterLink: {
			url: string;
			title: string;
			target: string;
		};
		linkedinLink: {
			url: string;
			title: string;
			target: string;
		};
		instagramLink: {
			url: string;
			title: string;
			target: string;
		};
		tiktokLink: {
			url: string;
			title: string;
			target: string;
		};
		youtubeLink: {
			url: string;
			title: string;
			target: string;
		};
		copyrightText: string;
		phoneNumberTwo: string;
		displayNoticeBanner: boolean;
		noticeBannerTextarea: string;
		newsletter: {
			title: string;
			paragraph: string;
			mainTitle: string;
			bottomTextarea: string;
			icon: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		};
		megaNavigation: {
			fansVideoElement: string;
			displayFansVideoElement: boolean;
		};
		topNavigation: {
			foundationPageLink: {
				url: string;
				title: string;
				target: string;
			};
			sponsorsIcons: [
				{
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				}
			];
		};
		errorPageContent: {
			title: string;
			paragraph: string;
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			backgroundImage: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		};
	};
	export namespace IClubPartners {
		export type IExcept = {
			node: {
				slug: string;
				title: string;
				excerpt: string;
				featuredImage: {
					node: {
						altText: string;
						sourceUrl: string;
						mediaDetails: {
							width: number;
							height: number;
						};
					};
				};
			};
		}[];

		/* Dynamic ACF Components specifically
		for the Club Partners Custom Post Type */
		export type IContent = {
			partnersContent: {
				titleContentImage: {
					title: string;
					paragraph: string;
					buttonLink: {
						url: string;
						title: string;
						target: string;
					};
					image: {
						altText: string;
						sourceUrl: string;
						mediaDetails: {
							width: number;
							height: number;
						};
					};
				};
			};
		};
	
	}
	
}

// SLUG RESPONSE
type SlugResponse = {
	slug: string;
	modified: string;
};
export interface ISlug extends Array<SlugResponse> {}
