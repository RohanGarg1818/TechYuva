import { ClubItem } from '@/types';

export const mockClubs: ClubItem[] = [
  {
    id: '1',
    slug: 'infox-coding-society',
    name: 'InfoX - The Coding Society',
    category: 'Technical',
    tagline: 'Empowering USICT students through code, innovation, and collaborative problem-solving.',
    description: 'The premier programming community fostering a culture of algorithmic thinking and software development through rigorous hackathons and workshops.',
    fullDescription: [
      'InfoX is the premier technical society of USICT, dedicated to fostering a robust culture of competitive programming, software development, and technological exploration. Founded in 2018, we have grown into a vibrant community of over 350 active members who share a passion for creating elegant solutions to complex problems.',
      'Our mission is to bridge the gap between academic theory and industry practice. We achieve this through rigorous peer-to-peer learning, hands-on workshops, and large-scale hackathons. Whether you are a novice looking to write your first "Hello World" or an experienced developer aiming to master advanced data structures, InfoX provides the resources, mentorship, and environment to help you excel.'
    ],
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLvETaUruuzE-p73rYwy3IpHuOdoNQkvCwQ9vkIZQ-gBEG3viRoprJ-L-UiD8D7sLw6MAuJujrQLqsywT6nDZpn7nceWYkcmh__IdYZDN314UlOkKiUbSJ3nAUYWs3be0aQdPqtS-0dYhlU5kjEizmEo9-S_EnKv2PrA2Fhbg_4--Ae_GS6m-iD1x2b51y1uyZatZglDA2_yxMrbNV4pvUVjhqlaeQNYqTysYDzCfzcImyK4-CBX1U',
    bannerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4qF1DhxpuIbIWihO1mTlyf8W3bp8nL7hFvMa6C-8fWDImz7s7GUYeA7ZSRNfSV6mAPPixQklGpUNLLn8dFTexklSw4gEUN-y0-AsZ91TSoPofmGZprs2lFhGeDNHgsC7WwIqPb76XjIs2-AmCS3J2SzyD_iyR_d_mypt6_7suN7PR7vTd1wS_lPDoYZ_fbQ06Rf24fLpMDRfOFupgB82SjPtwv64K8r8Dd2g8fCnlza4p6oK7eagt',
    memberCount: '350+ Members',
    isFeatured: true,
    featuredSize: 'large',
    upcomingActivity: 'Latest: CodeSprint 2026 (Registration Open)',
    stats: [
      { label: 'Events Hosted', value: '50+' },
      { label: 'Flagship Hackathons', value: '3' },
      { label: 'Active Projects', value: '12' },
      { label: 'Industry Mentors', value: '20+' }
    ],
    leadership: [
      {
        name: 'Rahul Sharma',
        role: 'President',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMfC5hos1LOXJg12AAaRDLlBNVS7Tt0WlwrR5YOQHwaItXwY1EuPqZ6n0caUu_HWrn_B0tu7M56fAjuAwGQ0lV95r9JymeJ8Ge6AWOwwmM5duqEVCnAsbZ2gVlfp9HKK8VwRTm0xqEcYSE93qEnK1nAy2KVp5pi9WekkKItnBmecQ0l6RgynSFfaGGEZnbjOCu_JP5X3EewSnyfgzV2FGWrsOrkp3YXfKYyzFN5a3BSdn5_gltY9hh'
      },
      {
        name: 'Priya Patel',
        role: 'Technical Head',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZqUk0j18H4zsZsoPCU8vOay26p8ZyssdUtQ5-WAhhnnTbb0TGEFG5uKHJ9mm1dO5hIyLzNjSSqOjQ_wIVARzwFfC3VHC6NfG7aXNX9Z8hpYAAuwHdzapv1iCXptBdp5B0uDptkq9PsTayh1BeU2HihT4WTHxIij2THVJaCfX5dRvHhGPRk2F0Q7xDB5-3E2GdClzKwD0S6-7R1hBs6pJOP-ADypBgZEts2V0H05B1ZnQjl9W4JyEg'
      },
      {
        name: 'Amit Kumar',
        role: 'Events Coordinator',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeapZhaVMCzhq2npUAOhToGK4tEJcEP4NCsiBlS5YCrXrFdGCD-7x8KWQbL78AmySvOhXleCK6AHrThHagdbNxxIrUwFx9ru01pdby8FspjvULWYF7K89Z8Duo4M0xLYJx89o-ysdev1xouTBFxpYbfDmasCgswgwHzfj2hnIOr0ah-z8WufQKd3fDtb0Ma67erVBy2kMOvoVHyRrkXqPwaPvToi0RVqaF4QcgoHK3J9VpxG5dotH-'
      }
    ],
    upcomingEvents: [
      {
        title: 'Advanced Web Dev Bootcamp',
        badge: 'Workshop',
        badgeType: 'warning',
        description: 'Master modern frontend frameworks including React and Next.js in this intensive 2-day hands-on session.',
        date: 'Oct 15, 2026',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjNlc-k7jttye3P7qXwTz8N6VqyKEa4C1Yu8IursbL_FtVbGpv_idIFeaLLZNtR30vv5xnwd32FdkHaYeW6z0_5sIvq09DQl_q7e1ZHc8okJfzUB7idd32e1qmO3-B_RK7O5jnT7edcvqJeCwT6nSm1P8Y2yueMWge6tXGnAf-MG5fiA26YFULLMTX3yUCflt1ct2ux4Y8NtwOMX9bT7cjlxKYq0OLbrkzMmus3Yr6aGmT_8N2DwEU'
      },
      {
        title: 'CodeSprint 2026',
        badge: 'Flagship',
        badgeType: 'primary',
        description: 'Our annual 24-hour hackathon. Build innovative solutions for real-world campus problems and win exciting prizes.',
        date: 'Nov 02, 2026',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDODb7-jeyg-IpHfAtrL_7IGPdrR8oUB0M6wyT-kOrif5WJz6eWbfsb6AOrypKl09F7exV2pGrhlCiMpcB7QwxdirUxVKMN6MVg__CHb61_8bL4LxyT_wK8kw3UCbe0mi9_lVACl-hfRBMiVeDazoCZqrf1yP97IF2OBW3v4kODtY4A2e1jMJc1021wVc_jP9uRpQjxBZKxhU9ByNrXR84SMMyqg7QF7l9MESbIVgPzHNFlBeAC1WEQ'
      }
    ],
    gallery: [
      {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFUwR6ndRzSqB-OZDT64AVh7kOqLipVyDEoKGp1RxJJ0db2lTk6GVspBa3o4Er5KUUrrD8Ufc93dfjOUdDGyQs6yje8xOtqY1iY-u7p3wKvYi2arg2kQArmJQE-33JBiZP2s8lx80xSVIqIWCzq2ZBDKk4L55MqjEAW-Ddjto5VQd0y2CknqxCGfvlWr2MHfVjLDFh2hcvUVyGxbXsRAe4GwjYNr7PQqtpGsrPNPhRVd6T-By4T0vT',
        title: 'Hackathon Winners 2025'
      },
      {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcbhyrHxgonKx2o-vCBbcgxZOnGUD5wFQN9P1ahPwC2tORac3M269lDyIx-AayCnQqW5zcXvL1-SexrALsKy0737Z7YRtn1sgxWLJ0iEBacH5m0lGZUbzf8kOONPzwE0W5MBr1OrniPdp-cy6QjEtcALdmozxGRGYT7Nr_K-TlWeqifbtv5-jGmKykaXe8jbKvhWLJxNhB3nVWfOZ9wgBUc4ETLhCXkS8L1oLJ8ibePOMi3hj__2pn',
        title: 'Mentorship Session'
      },
      {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBumkUZkAka7pylxixnwzfdW9x5yhJfmEzqs1p6rO0OGhOhSabq3UtfU8P1eyI47Lxr1UZ75b6rPUdnj9japP6ygd6VxLy2M6AmGjJTd4N6CFufhglornfc3WqJX9OYGxQgcLUdHIUEio-Z1RJnldyEB9_hkqKbJkGhBBhzkCYOdA8REKP4fj1XvOVtyBdDLd5vR4hnZeJS0353pELjqbFLVsJM5QM5TLKGRCp1b6ImELZuhuBWA7ac',
        title: 'Annual Meet'
      },
      {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFuY9KBYd18LeOlJxJl7aRFHzMwXmyS80hurDiG00G31wXJHe7tLlTGSqnsCxHgsJL2TO4qTeN24hNFTAsnJkHlRqSk-dAbzRkUt6pqSm75YZ4gQXExa8c5koRpVUtJdVmV24t1q4INIpLSYzmuqQg0Cdy6R41nU2M-aQNrdVCok5PjuSMb1dxd29uvjc0P4MxN1e93HnxVMvmnB-NpCh6xwbQGZ9_phf39wBA3laUBTe7kygcHP9b',
        title: 'CodeLab Night'
      }
    ],
    socials: {
      email: 'infox@techyuva.edu',
      website: 'https://infox.usict.ac.in',
      github: 'https://github.com/infox-usict'
    }
  },
  {
    id: '2',
    slug: 'srijan-cultural-society',
    name: 'Srijan Cultural Society',
    category: 'Cultural',
    tagline: 'Celebrating diverse arts, music, and drama across campus.',
    description: 'Celebrating diverse arts, music, dance, and drama across campus through vibrant annual festivals and competitions.',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmxBVX5_xrQRlhOyuWLaYHWR85WGrQxOKqtxKke2CNxwlA7Os_iDeE4P-KKCPXDULsXRx75zHY_sPWhcFnf_XoZ28O3j99GU6Rbqo8B-To81l5HGslAkwpLBrTlAFVfPged9IGck3zv_B1NzM5MW4g1F9V3K5zaQ1ZMcq3hXbvY3o3nNaH8Gx7dG6jvSIfAWN1tOQJP3BXxeEVqF3_dAJD_UhoKh7GZXp1dcSSX1kk566KoO2SuLPq',
    bannerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg6YUGgQEmn9VKO-ZlNhfrFjulku9ZqzEc5A1DejdVgFXkT8bj1-XUyXSWodS6XSJa3m0e6jSQQvIxIw9GBU9xqP5xNlVv6nMXoE9C0zQ8JHN6pZr83U0A4IiBM5qXXDp8taRD9n0599EKuBUn77Es-Vi5bw0wtrQugVisqqlrhply3kXFKczTK0Ssi5H7GF6l1EnmbwnUmE9hIdNFH64Au7QdOu0npHeWUziwtHy6slafehI2BTQu',
    memberCount: '280+ Members',
    isFeatured: true,
    featuredSize: 'small',
    upcomingActivity: 'Auditions Tomorrow'
  },
  {
    id: '3',
    slug: 'ecell-usict',
    name: 'E-Cell USICT',
    category: 'Entrepreneurship',
    tagline: 'Incubating ideas and fostering the next generation of founders.',
    description: 'Incubating ideas, providing seed mentorship, and fostering the next generation of student startup founders.',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4b0kh0HUYht6WG8NFP--CnALfYfJsJ1FtfXbrOS2LAq0Vq6D0nQYHBTLuAIGdEwxq-cpik7KDy2tm0S0RLCc4PAyUETRIjcd0QlYxDyla8ot2_weXvBH-8kkYtV1rE1k4TEwr8-MNwMzOgZhQiCtsPnZlYcZtLIl4Iz3zE5BPGx5PQxJXoZre_SopS4Jm0Iw0K0nCzukIoVOpeIeRysudptbLeTr4_ApYTlxujS-7OGDvI55s14A-',
    bannerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpAYZHm3-v9IKblO0IK439vdD4sCEBPbBMN82pZzHc2o0vEAA8K2WawZoADc-v1k3BQQmYBpiPhCE1SaivwdHGAuO286EvWKjk2Y_dGoHCJhvHnNyUMDQbfXOJfjrx92I9fakRDRnWmjfFXRjFCTDZnWEP08PLfLjjyjXNtjQx81jfMyGntL9ds_MrvCnxp6dnM_LB9Cj16hAXdaFPaFQTEf8Wut_LeuVaZT_ecNGE6uAgSYvAbLER',
    memberCount: '190+ Members',
    isFeatured: true,
    featuredSize: 'small',
    upcomingActivity: 'Latest: Pitch Deck Workshop'
  },
  {
    id: '4',
    slug: 'robotics-club',
    name: 'USICT Robotics Club',
    category: 'Technical',
    tagline: 'Designing, building, and programming autonomous systems.',
    description: 'Designing, building, and programming autonomous robots, drones, and embedded computing systems for national competitions.',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYuOHpPXUcKXW2IfYsQhKz8IJB3LWo8ZVF__s-KCrx5Q9WSxqiZLauCdy7lzw2qmhohl5lPP8IjmL10Sy3336gwbyIGMmk8waRvfnsKt8d4z_RUWXifDzgP6shKt62n0wzKLzxfmr8pkRswPqW-QPvNB3nzvKmJnt1W8qIYp3XK59JpYebpaIeIzKap5cjaul1g0UeyZkJ8haDfQlIl4mQ7lDeWZsWQnaLRa0XoglNikz__iwzxXYR',
    bannerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEytKp7lf52ZSVoTgQ3HWo1Fdi9qeIqBmDOit06IwAg6PH0Pomzqhzy196sJcwu1Iwzgf5Gr0SeWafwFzs3AW9PAvGssBYkEXvq5TcDTlZqLOxExAPgwp9krX3cm4bfYVvc3I_EOqtauzoUcdDrw9STsJplYRjmIABc6ash--b6des_dPSKseEDVk6VOtlMpX-Xm_wouBHMSjzrXew_Nfr_oNs5v3T8HiGedOeyyBsU32EkUYhXCH_',
    memberCount: '210+ Members',
    updatedAt: 'Updated 2 days ago'
  },
  {
    id: '5',
    slug: 'sports-society',
    name: 'Sports Society USICT',
    category: 'Sports',
    tagline: 'Promoting athletics, fitness, and team sports spirit.',
    description: 'Managing intramural leagues, varsity team tryouts, athletic meets, and campus fitness initiatives.',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAjC2tMB_31mEXQ8mgx5zwO5lzlrzAfX_oOqbDMoWgkmmv8r2F7YTwnY5p-_U3uvuDT79VcVLqPym9MTw1wM5q4fNIYNtCCjP4X4FskuHKlXj_VztSxt2MUCvx0kNYycATsx2HyfPb0T8BKGBpUHJFUdTswq3cS8LRqwGW9SXebNP0ZiMD5-iEvYSk7pbZYoKJPi7dI5YQe6TVgu7_KMk6HAPGVDjZLRK0s-ZyU0XevmQ5u-w03QvC',
    bannerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxFb5EkWOie1mtFGQTaHD14vIlCsrTHL_GD-oSzbXtM2k7F_waomlf7brm_7dav59aEWkXJKRSMMFWIhLUlAtqf4hNyhEs48rZmdUdNrwvyeCJdiec43zjChxA63uS2c-vRO9UgjSvX7hcIMtQBbNSQkoGLKIM5nSX7G2xumfs_VkmC310Z05KQIFfOVZXm9v02NH7oxXqYf1ar1Ujc73nuiRAOYoAhZk7QFoTVbelI6UL2njapdzD',
    memberCount: '400+ Members',
    updatedAt: 'Updated 1 week ago'
  },
  {
    id: '6',
    slug: 'literary-debate-society',
    name: 'Literary & Debate Society',
    category: 'Arts',
    tagline: 'Honing articulation, oratory, and intellectual discourse.',
    description: 'Honing communication skills through structured debates, Model United Nations, poetry slams, and the campus magazine.',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPIsdPNgbNtWCT292-KSg_lpQCWeVUkxqXRbQY1gYTZ4BjONkjlTibOq8pdIz_HC5xb3MuOUjBOdXwh2WJ2eAo8A8txQ-cpcKrJHnl1OItt6bWIq-neyQQHTxb2gixj2bJbVqSGkYUDyQ-Zns7tq1TzF5vF9k9Xa_bjXarw_XJvzUvvfhDQ-sqwubuhwjjrUri_1L-3WW1cmhu6plusQyucly-I8Lk-_qQ8v-q_F-zQC2nYyjfkCB1',
    bannerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpAYZHm3-v9IKblO0IK439vdD4sCEBPbBMN82pZzHc2o0vEAA8K2WawZoADc-v1k3BQQmYBpiPhCE1SaivwdHGAuO286EvWKjk2Y_dGoHCJhvHnNyUMDQbfXOJfjrx92I9fakRDRnWmjfFXRjFCTDZnWEP08PLfLjjyjXNtjQx81jfMyGntL9ds_MrvCnxp6dnM_LB9Cj16hAXdaFPaFQTEf8Wut_LeuVaZT_ecNGE6uAgSYvAbLER',
    memberCount: '150+ Members',
    updatedAt: 'Updated today'
  }
];
