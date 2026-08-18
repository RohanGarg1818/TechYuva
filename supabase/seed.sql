-- ==============================================================================
-- TECHYUVA DIGITAL CAMPUS — INITIAL SEED DATA
-- ==============================================================================

-- 1. SEED EVENTS
INSERT INTO public.events (slug, title, category, description, full_description, date, time, venue, organizer, organizer_role, organizer_email, organizer_phone, organizer_logo, image, is_featured, status, department, registration_deadline, highlights, schedule, guidelines)
VALUES
(
    'annual-tech-fest-2026',
    'Annual Tech Fest 2026: Innovation Summit',
    'Technical',
    'The biggest technical symposium of the year featuring hackathons, workshops, and keynotes from top tech giants.',
    'The Annual Tech Fest is USICT premier technology and innovation gathering, bringing together the brightest minds across campus and beyond. This year theme, Next-Gen Architectures, focuses on the intersection of scalable systems, artificial intelligence, and sustainable computing practices.\n\nOver three meticulously planned days, participants will engage in hands-on workshops, thought-provoking panel discussions, and competitive hackathons designed to push the boundaries of what possible. The event serves as a crucial bridge between academic theory and industry application.',
    '18 Sep 2026',
    '10:00 AM - 6:00 PM',
    'Main Auditorium, USICT Campus Block E',
    'Computer Science Department',
    'Event Coordinator',
    'events@techyuva.edu',
    '+91 98765 43210',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCgbueeX66yUwggw0icxjZTI366If5Vo_cXMkjGEhnOLmCfMqYnP3sbKKB8Ul8m2UeOlNdbeaONKJf0RNxIct8qWw8SREqSet8fmiCoyzi7SS4bPgCMHvHEhNA2AEFowPtCU9XQfaVM3MPyt6MPezzfF-tTWj3V-Mm6GFQXm6Z8-tjC0Z8ZtePY4ydaCx43Y-dumSggWM5F6waB7UCHB7UmE1rJQAgtj5jPAW8XrjhU9XysTT2ZRbmg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDAFg8BL9_uYDfW6A8vkteRQQbU8t6sdLppUGsFGHP__6IN2Rbjxb9nk2cPBpf0polHMeXRWmGsKiyHHalMigRxkHSisNIAIHztZHpcIEL9zRFpxY5WCaUWwWavFf38OwiZKnVJlQpg-IdAwP9IBIyU1sATTWkE2eQ6SkoEj7OO0OzQzNwPtZ13eP4CFd4s-TGS3Xl4_oapvmdaU-0fTQau0j5ZmA82j_GrHmw2ZGFWfiuWyHYYdCTm',
    true,
    'Upcoming',
    'Computer Science',
    'Registration closes in 4 days',
    '[{"icon": "lightbulb", "title": "Innovation Showcase", "description": "Explore cutting-edge projects developed by senior cohort students."}, {"icon": "code", "title": "24Hr Hackathon", "description": "Compete in our rigorous coding challenge with problem statements provided by industry partners."}]'::jsonb,
    '[{"time": "10:00 AM", "venue": "Main Auditorium", "title": "Opening Ceremony", "description": "Kickoff the event with Dean address."}, {"time": "11:00 AM", "venue": "Main Auditorium", "title": "Generative UI Keynote", "description": "Deep dive into interface design by Dr. Elena Rostova."}]'::jsonb,
    '["Valid student ID card is mandatory for campus entry.", "Participants must bring their own laptops.", "Teams for hackathon are capped at 4 members."]'::jsonb
),
(
    'annual-athletics-meet',
    'Annual Athletics Meet 2026',
    'Sports',
    'Inter-departmental sports competition featuring track and field events, basketball finals, and more.',
    'Join us for the thrilling annual sports meet bringing together all university departments in track, basketball, and athletic finals.',
    '18 Sep 2026',
    '08:00 AM - 5:00 PM',
    'University Sports Complex',
    'Sports Council',
    'Sports Secretary',
    'sports@techyuva.edu',
    '+91 98765 43211',
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCgrND4aOxFz06t5sheRAIgIkkzrXVgP3ocKa5wNi8GLWuflACodeY7NRTFKPZt8URtr3cTz_N6StCQx5CR79J1yQ0hPZ2C5vLV01t_Ht36qr1Qrqr4UBARQaUdxXLkalNDEmXIBop0KEQvTLRptoadwFRIvv3mU5oqMyR0LAi6FVkptPNVk05L8wpoSjBqwqxonG4H9_p-2QjmdMuiVMVo7do4MDCsGjRiZas3rB7apF2Ef8Quz2Ck',
    false,
    'Upcoming',
    'Physical Education',
    NULL,
    '[]'::jsonb,
    '[]'::jsonb,
    '[]'::jsonb
),
(
    'seminar-on-generative-ai-paradigms',
    'Seminar on Generative AI Paradigms',
    'Academic',
    'Guest lecture by industry leaders discussing the future implications of AI in software engineering and design.',
    'An intensive academic symposium examining recent breakthroughs in foundation models and automated reasoning.',
    '22 Sep 2026',
    '02:00 PM - 4:30 PM',
    'Seminar Hall B',
    'AI Research Group',
    'Convener',
    'ai@techyuva.edu',
    '+91 98765 43212',
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCtHTGd5s2h2PgDwyCIRQWNzWg6UPFfCV_fsWZ7wEO-L970eihXTDnC7a7uvbYn1OFrq54y5X5bNqajgCjBR8C4IhOSue85y0LePCWM2kKw98XVm08r7ic9hT_43R6gX96B7gQDB-Y-mj0qK8785-nWCSi99p6-5sFwIcYcB3dzYN57cS0J6cbYd4jWaUGUKfC-zzI06eHvOTrAEhV63o-CfiOMXGytIrP0QLZGkmIc1QV2MQBjaxqZ',
    false,
    'Upcoming',
    'Computer Science',
    NULL,
    '[]'::jsonb,
    '[]'::jsonb,
    '[]'::jsonb
);

-- 2. SEED NOTICES
INSERT INTO public.notices (slug, title, priority, department, date, time_ago, excerpt, content, instructions, issued_by, attachments)
VALUES
(
    'end-semester-examination-schedule',
    'End Semester Examination Schedule Released',
    'very-important',
    'Academic Administration',
    '17 August 2026',
    'Just now',
    'The updated examination schedule for the upcoming semester is now available. Review specific dates and reporting venues.',
    '["This is to inform all students enrolled in undergraduate and postgraduate programs that the End Semester Examinations for the academic session 2025-2026 will commence starting from the 1st of September 2026. The detailed schedule outlining specific dates, timings, and venues for respective courses has been finalized.", "Students are strongly advised to carefully review the timetable to ensure they are aware of their examination dates. Any discrepancies must be reported immediately to Academic Administration."]'::jsonb,
    '["Valid institutional ID cards are mandatory for entry.", "Students must report 30 minutes prior to scheduled time.", "Electronic devices including smartwatches are strictly prohibited."]'::jsonb,
    'Academic Administration',
    '[{"name": "Examination_Schedule_Fall2026.pdf", "size": "2.4 MB", "type": "PDF Document", "downloadUrl": "#"}]'::jsonb
),
(
    'mandatory-anti-ragging-affidavit-submission',
    'Mandatory Anti-Ragging Affidavit Submission',
    'very-important',
    'Dean of Students',
    '15 August 2026',
    '2 days ago',
    'All enrolled students are required to submit their signed anti-ragging undertakings on the national portal before the cutoff.',
    '["As per the directives of the University Grants Commission (UGC) and the Supreme Court of India, all students of USICT are mandated to submit an online anti-ragging affidavit for the academic year 2026-2027.", "Students must visit antiragging.in, complete the online declaration, and submit the reference number to class mentors."]'::jsonb,
    '["Reference number submission is compulsory for registration validation."]'::jsonb,
    'Office of the Dean, Student Welfare',
    '[{"name": "UGC_AntiRagging_Notification.pdf", "size": "1.1 MB", "type": "PDF Document", "downloadUrl": "#"}]'::jsonb
),
(
    'scholarship-application-deadline-extension',
    'Scholarship Application Deadline Extension for Fall 2026',
    'important',
    'Student Affairs',
    '14 August 2026',
    '3 days ago',
    'The deadline for the USICT Merit Scholarship and Financial Aid applications has been extended by one week.',
    '["The competent authority has approved an extension of the deadline for submitting scholarship applications for the Fall 2026 semester.", "Eligible students may now submit supporting financial documents through the student resource portal."]'::jsonb,
    '[]'::jsonb,
    'Scholarship Committee, USICT',
    '[]'::jsonb
);

-- 3. SEED ANNOUNCEMENTS
INSERT INTO public.announcements (slug, title, category, date, description, is_featured, author)
VALUES
(
    'registration-open-localize-hackathon',
    'Registration Open for Localize Hackathon 2026',
    'Campus',
    '24 Aug',
    'Form your teams of up to 4 members. The theme for this year focuses on solving hyper-local civic issues using open-source technologies.',
    true,
    'TechYuva Editorial'
),
(
    'library-extension-hours-announced',
    'Library Extension Hours Announced for Examination Season',
    'Academic',
    '22 Aug',
    'In preparation for the mid-term examinations, the central library will remain open until midnight starting next Monday.',
    false,
    'Library Administration'
),
(
    'call-for-submissions-annual-tech-magazine',
    'Call for Submissions: Annual Tech Magazine (Vol. 12)',
    'Student',
    '20 Aug',
    'Students and faculty are invited to submit research papers, technical articles, and project summaries for the upcoming issue.',
    false,
    'Publications Committee'
);

-- 4. SEED CLUBS
INSERT INTO public.clubs (slug, name, category, tagline, description, full_description, logo, banner_image, member_count, is_featured, featured_size, upcoming_activity, stats, leadership)
VALUES
(
    'infox-coding-society',
    'InfoX - The Coding Society',
    'Technical',
    'Empowering USICT students through code, innovation, and collaborative problem-solving.',
    'The premier programming community fostering a culture of algorithmic thinking and software development through rigorous hackathons and workshops.',
    '["InfoX is the premier technical society of USICT, dedicated to fostering a robust culture of competitive programming, software development, and technological exploration.", "Our mission is to bridge the gap between academic theory and industry practice through rigorous peer-to-peer learning and hands-on workshops."]'::jsonb,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCLvETaUruuzE-p73rYwy3IpHuOdoNQkvCwQ9vkIZQ-gBEG3viRoprJ-L-UiD8D7sLw6MAuJujrQLqsywT6nDZpn7nceWYkcmh__IdYZDN314UlOkKiUbSJ3nAUYWs3be0aQdPqtS-0dYhlU5kjEizmEo9-S_EnKv2PrA2Fhbg_4--Ae_GS6m-iD1x2b51y1uyZatZglDA2_yxMrbNV4pvUVjhqlaeQNYqTysYDzCfzcImyK4-CBX1U',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA4qF1DhxpuIbIWihO1mTlyf8W3bp8nL7hFvMa6C-8fWDImz7s7GUYeA7ZSRNfSV6mAPPixQklGpUNLLn8dFTexklSw4gEUN-y0-AsZ91TSoPofmGZprs2lFhGeDNHgsC7WwIqPb76XjIs2-AmCS3J2SzyD_iyR_d_mypt6_7suN7PR7vTd1wS_lPDoYZ_fbQ06Rf24fLpMDRfOFupgB82SjPtwv64K8r8Dd2g8fCnlza4p6oK7eagt',
    '350+ Members',
    true,
    'large',
    'Latest: CodeSprint 2026 (Registration Open)',
    '[{"label": "Events Hosted", "value": "50+"}, {"label": "Flagship Hackathons", "value": "3"}, {"label": "Active Projects", "value": "12"}]'::jsonb,
    '[{"name": "Rahul Sharma", "role": "President", "avatar": "https://lh3.googleusercontent.com/aida-public/AB6AXuBMfC5hos1LOXJg12AAaRDLlBNVS7Tt0WlwrR5YOQHwaItXwY1EuPqZ6n0caUu_HWrn_B0tu7M56fAjuAwGQ0lV95r9JymeJ8Ge6AWOwwmM5duqEVCnAsbZ2gVlfp9HKK8VwRTm0xqEcYSE93qEnK1nAy2KVp5pi9WekkKItnBmecQ0l6RgynSFfaGGEZnbjOCu_JP5X3EewSnyfgzV2FGWrsOrkp3YXfKYyzFN5a3BSdn5_gltY9hh"}]'::jsonb
),
(
    'srijan-cultural-society',
    'Srijan Cultural Society',
    'Cultural',
    'Celebrating diverse arts, music, and drama across campus.',
    'Celebrating diverse arts, music, dance, and drama across campus through vibrant annual festivals and competitions.',
    '["Srijan is the cultural heart of USICT, nurturing artistic talents across music, fine arts, dance, and stage drama."]'::jsonb,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAmxBVX5_xrQRlhOyuWLaYHWR85WGrQxOKqtxKke2CNxwlA7Os_iDeE4P-KKCPXDULsXRx75zHY_sPWhcFnf_XoZ28O3j99GU6Rbqo8B-To81l5HGslAkwpLBrTlAFVfPged9IGck3zv_B1NzM5MW4g1F9V3K5zaQ1ZMcq3hXbvY3o3nNaH8Gx7dG6jvSIfAWN1tOQJP3BXxeEVqF3_dAJD_UhoKh7GZXp1dcSSX1kk566KoO2SuLPq',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDg6YUGgQEmn9VKO-ZlNhfrFjulku9ZqzEc5A1DejdVgFXkT8bj1-XUyXSWodS6XSJa3m0e6jSQQvIxIw9GBU9xqP5xNlVv6nMXoE9C0zQ8JHN6pZr83U0A4IiBM5qXXDp8taRD9n0599EKuBUn77Es-Vi5bw0wtrQugVisqqlrhply3kXFKczTK0Ssi5H7GF6l1EnmbwnUmE9hIdNFH64Au7QdOu0npHeWUziwtHy6slafehI2BTQu',
    '280+ Members',
    true,
    'small',
    'Auditions Tomorrow',
    '[]'::jsonb,
    '[]'::jsonb
);

-- 5. SEED RESOURCES
INSERT INTO public.resources (title, category, description, icon, url, action_text)
VALUES
('Student Portal', 'Student Services', 'Access academic transcripts, class timetables, attendance, and fee history.', 'school', '#', 'Access Portal'),
('Academic Portal', 'Academic', 'Faculty resources, course syllabi, departmental tools, and research submissions.', 'account_balance', '#', 'Access Portal'),
('Examination Cell', 'Academic', 'End-term exam datesheets, previous years questions, re-evaluation forms, and results.', 'edit_document', '#', 'View Details'),
('Digital Library & Catalogue', 'Library', 'Search 50,000+ IEEE, ACM, Springer e-journals, reserve book loans, and study pods.', 'local_library', '#', 'Search Catalog'),
('Official Forms & Downloads', 'Forms', 'Downloadable PDF forms for hostel allotment, no-dues clearance, bonafide certificates.', 'description', '#', 'View Forms'),
('Faculty & Staff Directory', 'Student Services', 'Searchable phone and email directory of professors, deans, and administrative heads.', 'contacts', '#', 'Find Contacts');
