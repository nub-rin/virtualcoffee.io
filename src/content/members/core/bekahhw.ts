import type { MemberObject } from '../types';
import { profileMasks } from '../flare';

export const bekahhw: MemberObject = {
	// GitHub username (required)
	github: 'bekahhw',
	//
	// Everything below here is optional. By default, we pull most profile data from your GitHub profile. You can override that data here, as well as provide some additional account links below.
	//
	// Name - If not defined here, it will default to your display name on GitHub. If that's not defined, then your GitHub username.
	// name: 'Your Name',
	//
	// Main URL - If not defined here, it will default to the website displayed on your GitHub profile. If that's not defined, then a link to your GitHub profile will be displayed.
	// mainUrl: 'https://virtualcoffee.io',
	//
	// Bio - Accepts [markdown](https://spec.commonmark.org/0.30/). Please keep your bio to a reasonable length. Refer to our [members page](https://virtualcoffee.io/members/) for examples.
	// bio: `This is _my_ **bio** and [here is a link](https://virtualcoffee.io)`,
	//
	// flare - If you want to add a flare to your profile, you can do so here.
	// Uncomment the `import { profileMasks } from '../flare';` line at the top of this file to use the profileMasks.
	// So far  all we have is a profile mask, which makes your profile picture a different shape from the default square.
	// Leave this out if you prefer the default square.
	// You can choose from the following profile masks:
	// profileMasks.octogon, profileMasks.hexagon, profileMasks.triangle,
	// profileMasks.circle, profileMasks.rabbet, profileMasks.star
	// you can also use a custom string. the profileMask values are [css clipPath values](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)
	flare: {
		// example:
		profileMask: profileMasks.circle,
	},
	//
	// Links - You can add one of each type, except website - you can add as many `website` accounts as you wish.
	accounts: [
		{ type: 'linkedin', username: 'bekahhw' },
		{ type: 'dev', username: 'bekahhw' },
		// { type: 'codenewbie', username: 'bekahhw' },
		{ type: 'twitter', username: 'bekahhw' },
		{ type: 'twitch', username: 'bekahhw' },
		{ type: 'youtube', channelId: 'UCyQMaTyYIcq4npG26u6Z2Fg' },
		//  { type: 'youtube', customUrl: 'https://www.youtube.com/c/yourCustomUrl' },
		// { type: 'polywork', username: 'bekahhw' },
		// { type: 'hashnode', username: 'yourUserName' },
		{
			type: 'website',
			url: 'https://bekahhw.com',
			title: `Code. Community. Feelings. It's all here`,
		},
	],
	badges: ['Hacktoberfest2022', 'Hacktoberfest2023', 'Hacktoberfest2024'],
	location: {
		latitude: 40.375059,
		longitude: -80.947491,
		title: 'Eastern, Ohio', // optional
	},
};
