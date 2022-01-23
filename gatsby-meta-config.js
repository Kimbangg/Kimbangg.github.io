module.exports = {
  title: `Kimbangg's Blog`,
  description: ``,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://kimbangg.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `김동현`,
    bio: {
      role: `개발자`,
      description: ['사람에 가치를 두는', '능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: '', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/Kimbangg`,
      email: `devkimbangg@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.07 ~ 2021.12',
        activity: '헬시업(Healthy Up)',
        links: {
          post: '',
          github: 'https://github.com/mash-up-kr/HellTaBus_Web',
          demo: '',
        },
      },
      {
        date: '2021.11 ~',
        activity: '매치어스(MatchUs)',
        links: {
          post: '',
          github: 'https://github.com/prgrms-web-devcourse/Team_CherryBoys_MatchUs_FE',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      // {
      //   title: '헬시업(Health Up)',
      //   description:
      //     'd',
      //   techStack: ['gatsby', 'react'],
      //   thumbnailUrl: 'blog.png',
      //   links: {
      //     post: '/gatsby-starter-zoomkoding-introduction',
      //     github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      //     demo: 'https://www.zoomkoding.com',
      //   },
      // },
    ],
  },
};
