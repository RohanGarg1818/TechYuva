import { NoticeItem } from '@/types';

export const mockNotices: NoticeItem[] = [
  {
    id: '1',
    slug: 'end-semester-examination-schedule',
    title: 'End Semester Examination Schedule Released',
    priority: 'very-important',
    department: 'Academic Administration',
    date: '17 August 2026',
    timeAgo: 'Just now',
    excerpt: 'The updated examination schedule for the upcoming semester is now available. Review specific dates and reporting venues.',
    content: [
      'This is to inform all students enrolled in undergraduate and postgraduate programs that the End Semester Examinations for the academic session 2025-2026 will commence starting from the 1st of September 2026. The detailed schedule outlining specific dates, timings, and venues for respective courses has been finalized and is attached to this notice.',
      'Students are strongly advised to carefully review the timetable to ensure they are aware of their examination dates. Any discrepancies or clashes in the schedule must be reported immediately to the Academic Administration office via email or in person no later than the 22nd of August 2026. Requests for schedule adjustments after this deadline will not be entertained.',
      'Admit cards will be available for download from the student portal starting August 25th. Ensure all fee dues are cleared before attempting to download the admit card. We wish all students the very best for their upcoming examinations.'
    ],
    instructions: [
      'Valid institutional ID cards are mandatory for entry into the examination hall.',
      'Students must report to the examination venue at least 30 minutes prior to the scheduled start time.',
      'Electronic devices, including mobile phones and smartwatches, are strictly prohibited inside the examination halls.',
      'Seating arrangements will be displayed on the notice boards of the respective blocks one day prior to the exams.'
    ],
    issuedBy: 'Academic Administration',
    attachments: [
      {
        name: 'Examination_Schedule_Fall2026.pdf',
        size: '2.4 MB',
        type: 'PDF Document',
        downloadUrl: '#'
      },
      {
        name: 'Exam_Guidelines_Instructions.pdf',
        size: '840 KB',
        type: 'PDF Document',
        downloadUrl: '#'
      }
    ],
    relatedNoticeIds: ['2', '3', '4']
  },
  {
    id: '2',
    slug: 'mandatory-anti-ragging-affidavit-submission',
    title: 'Mandatory Anti-Ragging Affidavit Submission',
    priority: 'very-important',
    department: 'Dean of Students',
    date: '15 August 2026',
    timeAgo: '2 days ago',
    excerpt: 'All enrolled students are required to submit their signed anti-ragging undertakings on the national portal before the semester cutoff.',
    content: [
      'As per the directives of the University Grants Commission (UGC) and the Supreme Court of India, all students of USICT are mandated to submit an online anti-ragging affidavit for the academic year 2026-2027.',
      'Students must visit the anti-ragging portal (antiragging.in), complete the online declaration, and submit the generated reference number to their respective class mentors by August 30, 2026.'
    ],
    issuedBy: 'Office of the Dean, Student Welfare',
    attachments: [
      {
        name: 'UGC_AntiRagging_Notification.pdf',
        size: '1.1 MB',
        type: 'PDF Document',
        downloadUrl: '#'
      }
    ],
    relatedNoticeIds: ['1', '3']
  },
  {
    id: '3',
    slug: 'scholarship-application-deadline-extension',
    title: 'Scholarship Application Deadline Extension for Fall 2026',
    priority: 'important',
    department: 'Student Affairs',
    date: '14 August 2026',
    timeAgo: '3 days ago',
    excerpt: 'The deadline for the USICT Merit Scholarship and Financial Aid applications has been extended by one week.',
    content: [
      'The competent authority has approved an extension of the deadline for submitting scholarship applications for the Fall 2026 semester.',
      'Eligible students may now submit their income certificates, previous semester grade sheets, and bank account details through the student resource portal until August 25, 2026.'
    ],
    issuedBy: 'Scholarship Committee, USICT',
    attachments: [
      {
        name: 'Merit_Scholarship_Criteria_2026.pdf',
        size: '1.8 MB',
        type: 'PDF Document',
        downloadUrl: '#'
      }
    ],
    relatedNoticeIds: ['1', '2']
  },
  {
    id: '4',
    slug: 'fee-payment-deadline-extension-semester-5',
    title: 'Fee Payment Deadline Extension for Semester 5',
    priority: 'normal',
    department: 'Accounts Office',
    date: '12 August 2026',
    timeAgo: '5 days ago',
    excerpt: 'Semester 5 students are granted an extension until August 24 to complete their semester tuition fee payments without penalty.',
    content: [
      'Notice is hereby given to all students of Semester 5 that the online fee payment window on the university portal has been extended until August 24, 2026, 11:59 PM.',
      'Late fee charges will apply strictly thereafter.'
    ],
    issuedBy: 'Finance & Accounts Branch',
    attachments: [
      {
        name: 'Fee_Structure_Semester5.pdf',
        size: '620 KB',
        type: 'PDF Document',
        downloadUrl: '#'
      }
    ],
    relatedNoticeIds: ['1']
  },
  {
    id: '5',
    slug: 'schedule-for-minor-project-evaluations',
    title: 'Schedule for Minor Project Evaluations (B.Tech CS / IT)',
    priority: 'normal',
    department: 'Department of CSE',
    date: '10 August 2026',
    timeAgo: '1 week ago',
    excerpt: 'Evaluation schedule and panel allotment for B.Tech 7th Semester Minor Project presentations.',
    content: [
      'The Department of Computer Science and Engineering will conduct the Minor Project Phase-1 evaluations between August 28 and August 30, 2026.',
      'Project groups must upload their synopses and progress reports to the department repository by August 25.'
    ],
    issuedBy: 'Head, Department of CSE',
    relatedNoticeIds: ['1']
  },
  {
    id: '6',
    slug: 'photography-club-inaugural-meeting',
    title: 'Photography Club Inaugural Meeting & Photo Walk',
    priority: 'normal',
    department: 'Student Life',
    date: '08 August 2026',
    timeAgo: '1 week ago',
    excerpt: 'Join us for the first meeting of the semester. We will be discussing upcoming photo walks and the annual campus exhibition.',
    content: [
      'The USICT Photography Club invites all enthusiasts and aspiring visual storytellers for the inaugural semester orientation in Seminar Hall A at 4:00 PM.'
    ],
    issuedBy: 'Photography Club Council',
    relatedNoticeIds: []
  },
  {
    id: '7',
    slug: 'library-maintenance-closure-notice',
    title: 'Central Library Server Maintenance Notice',
    priority: 'normal',
    department: 'Central Library',
    date: '05 August 2026',
    timeAgo: '2 weeks ago',
    excerpt: 'The central library will undergo scheduled network maintenance this weekend. Online catalogue remains accessible.',
    content: [
      'Please note that physical reading rooms will have modified timings from 9:00 AM to 5:00 PM during the server upgrade this Saturday.'
    ],
    issuedBy: 'Chief Librarian, USICT',
    relatedNoticeIds: []
  }
];
