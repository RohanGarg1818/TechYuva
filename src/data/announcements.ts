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
  },
  // Merged Notices below
  {
    id: 'notice-1',
    slug: 'end-semester-examination-schedule',
    title: 'End Semester Examination Schedule Released',
    category: 'Academic',
    date: '17 Aug',
    description: 'The updated examination schedule for the upcoming semester is now available. Review specific dates and reporting venues.',
    content: [
      'This is to inform all students enrolled in undergraduate and postgraduate programs that the End Semester Examinations for the academic session 2025-2026 will commence starting from the 1st of September 2026. The detailed schedule outlining specific dates, timings, and venues for respective courses has been finalized and is attached to this notice.',
      'Students are strongly advised to carefully review the timetable to ensure they are aware of their examination dates. Any discrepancies or clashes in the schedule must be reported immediately to the Academic Administration office via email or in person no later than the 22nd of August 2026. Requests for schedule adjustments after this deadline will not be entertained.',
      'Admit cards will be available for download from the student portal starting August 25th. Ensure all fee dues are cleared before attempting to download the admit card. We wish all students the very best for their upcoming examinations.'
    ],
    author: 'Academic Administration'
  },
  {
    id: 'notice-2',
    slug: 'mandatory-anti-ragging-affidavit-submission',
    title: 'Mandatory Anti-Ragging Affidavit Submission',
    category: 'Student',
    date: '15 Aug',
    description: 'All enrolled students are required to submit their signed anti-ragging undertakings on the national portal before the semester cutoff.',
    content: [
      'As per the directives of the University Grants Commission (UGC) and the Supreme Court of India, all students of USICT are mandated to submit an online anti-ragging affidavit for the academic year 2026-2027.',
      'Students must visit the anti-ragging portal (antiragging.in), complete the online declaration, and submit the generated reference number to their respective class mentors by August 30, 2026.'
    ],
    author: 'Office of the Dean, Student Welfare'
  },
  {
    id: 'notice-3',
    slug: 'scholarship-application-deadline-extension',
    title: 'Scholarship Application Deadline Extension for Fall 2026',
    category: 'Student',
    date: '14 Aug',
    description: 'The deadline for the USICT Merit Scholarship and Financial Aid applications has been extended by one week.',
    content: [
      'The competent authority has approved an extension of the deadline for submitting scholarship applications for the Fall 2026 semester.',
      'Eligible students may now submit their income certificates, previous semester grade sheets, and bank account details through the student resource portal until August 25, 2026.'
    ],
    author: 'Scholarship Committee, USICT'
  },
  {
    id: 'notice-4',
    slug: 'fee-payment-deadline-extension-semester-5',
    title: 'Fee Payment Deadline Extension for Semester 5',
    category: 'Campus',
    date: '12 Aug',
    description: 'Semester 5 students are granted an extension until August 24 to complete their semester tuition fee payments without penalty.',
    content: [
      'Notice is hereby given to all students of Semester 5 that the online fee payment window on the university portal has been extended until August 24, 2026, 11:59 PM.',
      'Late fee charges will apply strictly thereafter.'
    ],
    author: 'Finance & Accounts Branch'
  },
  {
    id: 'notice-5',
    slug: 'schedule-for-minor-project-evaluations',
    title: 'Schedule for Minor Project Evaluations (B.Tech CS / IT)',
    category: 'Department',
    date: '10 Aug',
    description: 'Evaluation schedule and panel allotment for B.Tech 7th Semester Minor Project presentations.',
    content: [
      'The Department of Computer Science and Engineering will conduct the Minor Project Phase-1 evaluations between August 28 and August 30, 2026.',
      'Project groups must upload their synopses and progress reports to the department repository by August 25.'
    ],
    author: 'Head, Department of CSE'
  },
  {
    id: 'notice-6',
    slug: 'photography-club-inaugural-meeting',
    title: 'Photography Club Inaugural Meeting & Photo Walk',
    category: 'Student',
    date: '08 Aug',
    description: 'Join us for the first meeting of the semester. We will be discussing upcoming photo walks and the annual campus exhibition.',
    content: [
      'The USICT Photography Club invites all enthusiasts and aspiring visual storytellers for the inaugural semester orientation in Seminar Hall A at 4:00 PM.'
    ],
    author: 'Photography Club Council'
  },
  {
    id: 'notice-7',
    slug: 'library-maintenance-closure-notice',
    title: 'Central Library Server Maintenance Notice',
    category: 'Campus',
    date: '05 Aug',
    description: 'The central library will undergo scheduled network maintenance this weekend. Online catalogue remains accessible.',
    content: [
      'Please note that physical reading rooms will have modified timings from 9:00 AM to 5:00 PM during the server upgrade this Saturday.'
    ],
    author: 'Chief Librarian, USICT'
  }
];
