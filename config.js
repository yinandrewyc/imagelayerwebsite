const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://imagelayerproject.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://kellercenter.princeton.edu/sites/default/files/styles/free_style/public/images/Tezign%20Logo.png?itok=OsubPShi',
    logoLink: 'https://www.tezign.com/',
    title:
      "Image Layer Project",
    githubUrl: 'https://github.com/yinandrewyc/imagelayerwebsite/',
    helpUrl: '',
    tweetText: '',
    social: '',//`<li>
		//     <a href="" target="_blank" rel="noopener">
		//       <div class="twitterBtn">
		//         <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
		//       </div>
		//     </a>
		//   </li>
		// 	<li>
		//     <a href="" target="_blank" rel="noopener">
		//       <div class="discordBtn">
		//         <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		//       </div>
		//     </a>
		//   </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/heatmap',
      '/regression',
    ],
    collapsedNav: [
      '/regression',// add trailing slash if enabled above
    ],
    links: [{ text: 'LinkedIn', link: 'https://www.linkedin.com/in/andrew-yin-2k20' }],
    frontline: false,
    ignoreIndex: true,
    title: "",
      // "<a href='https://facebook.com' target='_blank'>More Info </a><div class='greenCircle'></div><a href='https://reddit.com' target='_blank'>Info?</a>",
  },
  siteMetadata: {
    title: 'Image Layer Project GitBook',
    description: 'Machine Learning Image Generation Project | Summer 2020 ',
    ogImage: null,
    docsLocation: 'https://github.com/yinandrewyc/imagelayerwebsite/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
