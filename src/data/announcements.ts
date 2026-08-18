import { AnnouncementItem } from '@/types';

export const mockAnnouncements: AnnouncementItem[] = [
  {
    id: '1',
    slug: 'registration-open-localize-hackathon',
    title: 'Registration Open for Localize Hackathon 2026',
    category: 'Campus',
    date: '24 Aug',
    description: 'Form your teams of up to 4 members. The theme for this year focuses on solving hyper-local civic issues using open-source technologies.',
    content: [
      'USICT in collaboration with open-source communities announces the Localize Hackathon 2026. Teams will build software and hardware solutions addressing civic challenges, green energy management, and student welfare.',
      'Cash prizes worth ₹1,50,000 and direct internship interview opportunities for top-ranking teams.'
    ],
    isFeatured: true,
    author: 'TechYuva Editorial'
  },
  {
    id: '2',
    slug: 'library-extension-hours-announced',
    title: 'Library Extension Hours Announced for Examination Season',
    category: 'Academic',
    date: '22 Aug',
    description: 'In preparation for the mid-term examinations, the central library will remain open until midnight starting next Monday.',
    content: [
      'To support students preparing for upcoming examinations, the central library reference section and study halls will remain open from 8:00 AM until 12:00 Midnight, seven days a week, starting Monday, August 25.'
    ],
    author: 'Library Administration'
  },
  {
    id: '3',
    slug: 'call-for-submissions-annual-tech-magazine',
    title: 'Call for Submissions: Annual Tech Magazine (Vol. 12)',
    category: 'Student',
    date: '20 Aug',
    description: 'Students and faculty are invited to submit research papers, technical articles, and project summaries for the upcoming issue.',
    content: [
      'The editorial board of "USICT TechPulse" is now accepting original submissions covering Artificial Intelligence, Quantum Computing, Cyber Security, and Green Tech. Selected papers will be featured in the official annual release.'
    ],
    author: 'Publications Committee'
  },
  {
    id: '4',
    slug: 'innovation-week-kickoff',
    title: 'Innovation Week & Student Startup Showcase Kickoff',
    category: 'Department',
    date: '16 Aug',
    description: 'A 5-day celebration of entrepreneurship featuring student venture pitches, patent clinics, and venture capital interactions.',
    content: [
      'Organized by the USICT E-Cell and Incubation Foundation. Join us for panel discussions with successful alumni founders and industry mentors.'
    ],
    author: 'E-Cell USICT'
  },
  {
    id: '5',
    slug: 'acm-student-chapter-bootcamp-series',
    title: 'ACM Student Chapter Announces Fall Competitive Programming Bootcamp',
    category: 'Academic',
    date: '14 Aug',
    description: 'A structured 6-week weekend series covering advanced dynamic programming, graph algorithms, and competitive coding tactics.',
    content: [
      'Open to all 1st, 2nd, and 3rd-year students looking to hone their data structure and algorithmic problem-solving skills for ICPC and campus placements.'
    ],
    author: 'ACM USICT Chapter'
  }
];
