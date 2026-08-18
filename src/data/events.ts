import { EventItem } from '@/types';

export const mockEvents: EventItem[] = [
  {
    id: '1',
    slug: 'annual-tech-fest-2026',
    title: 'Annual Tech Fest 2026: Innovation Summit',
    category: 'Technical',
    description: 'The biggest technical symposium of the year featuring hackathons, workshops, and keynotes from top tech giants.',
    fullDescription: 'The Annual Tech Fest is USICT’s premier technology and innovation gathering, bringing together the brightest minds across campus and beyond. This year’s theme, "Next-Gen Architectures," focuses on the intersection of scalable systems, artificial intelligence, and sustainable computing practices.\n\nOver three meticulously planned days, participants will engage in hands-on workshops, thought-provoking panel discussions, and competitive hackathons designed to push the boundaries of what’s possible. The event serves as a crucial bridge between academic theory and industry application.',
    date: '18 Sep 2026',
    time: '10:00 AM - 6:00 PM',
    venue: 'Main Auditorium, USICT Campus Block E',
    organizer: 'Computer Science Department',
    organizerRole: 'Event Coordinator',
    organizerEmail: 'events@techyuva.edu',
    organizerPhone: '+91 98765 43210',
    organizerLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgbueeX66yUwggw0icxjZTI366If5Vo_cXMkjGEhnOLmCfMqYnP3sbKKB8Ul8m2UeOlNdbeaONKJf0RNxIct8qWw8SREqSet8fmiCoyzi7SS4bPgCMHvHEhNA2AEFowPtCU9XQfaVM3MPyt6MPezzfF-tTWj3V-Mm6GFQXm6Z8-tjC0Z8ZtePY4ydaCx43Y-dumSggWM5F6waB7UCHB7UmE1rJQAgtj5jPAW8XrjhU9XysTT2ZRbmg',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAFg8BL9_uYDfW6A8vkteRQQbU8t6sdLppUGsFGHP__6IN2Rbjxb9nk2cPBpf0polHMeXRWmGsKiyHHalMigRxkHSisNIAIHztZHpcIEL9zRFpxY5WCaUWwWavFf38OwiZKnVJlQpg-IdAwP9IBIyU1sATTWkE2eQ6SkoEj7OO0OzQzNwPtZ13eP4CFd4s-TGS3Xl4_oapvmdaU-0fTQau0j5ZmA82j_GrHmw2ZGFWfiuWyHYYdCTm',
    isFeatured: true,
    status: 'Upcoming',
    department: 'Computer Science',
    registrationDeadline: 'Registration closes in 4 days',
    highlights: [
      {
        icon: 'lightbulb',
        title: 'Innovation Showcase',
        description: 'Explore cutting-edge projects developed by senior cohort students and faculty research groups.'
      },
      {
        icon: 'code',
        title: '24Hr Hackathon',
        description: 'Compete in our rigorous coding challenge with problem statements provided by industry partners.'
      }
    ],
    schedule: [
      {
        time: '10:00 AM',
        venue: 'Main Auditorium',
        title: 'Opening Ceremony & Welcome Address',
        description: 'Kickoff the event with insights from the Dean of Computer Science and a high-level overview of the fest objectives.'
      },
      {
        time: '11:00 AM',
        venue: 'Main Auditorium',
        title: 'The Future of Generative UI',
        description: 'A deep dive into how AI is reshaping interface design and component architecture.',
        badge: 'Keynote',
        speaker: {
          name: 'Dr. Elena Rostova',
          role: 'VP of AI Research, TechCorp',
          avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcp3l_emqJG802yXXRymZGLgzUfnsZIdld4ILCt7qd53J1Y_JwEKqlo0Hk39cBg8_8dzgn-C-2TzbjvdLXAEj8mOOAOmwB9lKQwiQgq0QJzKPwGtv7veAnIQkKBC-FVC-UZLQTiW1AKauSgwIciHjNCeFREID9P9QAWSiEbv9LeYRt-5VkfCgNVxS96qFnrvjqMgMROG2mj7Kg901-TVyfSaC4K-ix_2_Gl6YCbQOt4vMYXOwiunYp'
        }
      },
      {
        time: '01:00 PM',
        venue: 'Labs 1-4',
        title: 'Interactive Workshops: Track Selection',
        description: 'Participants split into specialized tracks covering Web3, Cloud Infrastructure, and Embedded Systems.'
      },
      {
        time: '03:00 PM',
        venue: 'Incubation Centre',
        title: 'Project Demonstrations & Hackathon Round 1',
        description: 'First round of project evaluations by industry mentors and academic jury.'
      },
      {
        time: '05:30 PM',
        venue: 'Main Auditorium',
        title: 'Closing Keynote & Day 1 Wrap-up',
        description: 'Summary of day 1 outcomes and briefing for the 24-hour overnight hackathon track.'
      }
    ],
    guidelines: [
      'Valid student ID card is mandatory for campus entry and badge collection.',
      'Participants must bring their own laptops and chargers for technical tracks.',
      'Teams for the hackathon are capped at a maximum of 4 members.',
      'Code of conduct must be adhered to at all times during the symposium.'
    ],
    relatedEventIds: ['2', '3', '4']
  },
  {
    id: '2',
    slug: 'annual-athletics-meet',
    title: 'Annual Athletics Meet 2026',
    category: 'Sports',
    description: 'Inter-departmental sports competition featuring track and field events, basketball finals, and more.',
    date: '18 Sep 2026',
    time: '08:00 AM - 5:00 PM',
    venue: 'University Sports Complex',
    organizer: 'Sports Council',
    department: 'Physical Education',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgrND4aOxFz06t5sheRAIgIkkzrXVgP3ocKa5wNi8GLWuflACodeY7NRTFKPZt8URtr3cTz_N6StCQx5CR79J1yQ0hPZ2C5vLV01t_Ht36qr1Qrqr4UBARQaUdxXLkalNDEmXIBop0KEQvTLRptoadwFRIvv3mU5oqMyR0LAi6FVkptPNVk05L8wpoSjBqwqxonG4H9_p-2QjmdMuiVMVo7do4MDCsGjRiZas3rB7apF2Ef8Quz2Ck',
    isFeatured: false,
    status: 'Upcoming'
  },
  {
    id: '3',
    slug: 'seminar-on-generative-ai-paradigms',
    title: 'Seminar on Generative AI Paradigms',
    category: 'Academic',
    description: 'Guest lecture by industry leaders discussing the future implications of AI in software engineering and design.',
    date: '22 Sep 2026',
    time: '02:00 PM - 4:30 PM',
    venue: 'Seminar Hall B',
    organizer: 'AI Research Group',
    department: 'Computer Science',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtHTGd5s2h2PgDwyCIRQWNzWg6UPFfCV_fsWZ7wEO-L970eihXTDnC7a7uvbYn1OFrq54y5X5bNqajgCjBR8C4IhOSue85y0LePCWM2kKw98XVm08r7ic9hT_43R6gX96B7gQDB-Y-mj0qK8785-nWCSi99p6-5sFwIcYcB3dzYN57cS0J6cbYd4jWaUGUKfC-zzI06eHvOTrAEhV63o-CfiOMXGytIrP0QLZGkmIc1QV2MQBjaxqZ',
    isFeatured: false,
    status: 'Upcoming'
  },
  {
    id: '4',
    slug: 'codesprint-hackathon-2026',
    title: 'CodeSprint Hackathon 2026',
    category: 'Technical',
    description: 'Annual 24-hour coding sprint. Build innovative solutions for real-world campus problems and win exciting prizes.',
    date: '20 Sep 2026',
    time: '09:00 AM - Next Day 09:00 AM',
    venue: 'Library Block & CSE Labs',
    organizer: 'InfoX Coding Society',
    department: 'Computer Science',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNBc5hnzgdiG9r-TqnNxTt8KpQcwTKPSn80yaQZPAbG4SUQ7xNRQh1gcCO5Ij69TFQuGo1fknsaHqQ__CU1LoPd8hswcfc5e3uAfF37f33LAKXOSXadHYRS1i9DvRThqEW9bY9eF-X2g5iDDAI-VVpxyddDMZbUYbvpO8mJdfGEQB0JFLtsEwoRGQBbWVXaRzbYM1WNwU36SdDR23UMK_XRkV5TlgAufL6HcyJ04tiepIjtvPaE1V9',
    isFeatured: false,
    status: 'Upcoming'
  },
  {
    id: '5',
    slug: 'robotics-symposium-2026',
    title: 'Robotics & Automation Symposium',
    category: 'Technical',
    description: 'Explore autonomous robotic systems, microcontroller design, and live competitive combat bot demos.',
    date: '24 Sep 2026',
    time: '11:00 AM - 04:00 PM',
    venue: 'Seminar Hall B & Lab Block',
    organizer: 'Robotics Club',
    department: 'Electronics & Communication',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPGdyt9WFq98j-qiLtAlRlO5t1ocOH7U_35sdmzion-coaGvjuVyUp00ipiE8232fdTDbQsJNM4C4YIzEG4B-grx9d2gwT8pGM_VJcH70DgnJLJoU3hqH3mWR4m83WIgU2qPxOrn7wZ718aN3fJzF_AkLCENGG1u9h3GuNSTMmMoZdFojmNaxxv7cH02GVx-kc1uDD15RckywftgmN5fhSx2Bm5WOQ7kW0XDESWVek7s22CLxUnFHV',
    isFeatured: false,
    status: 'Upcoming'
  },
  {
    id: '6',
    slug: 'annual-cultural-night-2026',
    title: 'Annual Cultural Night: Srijan Fest',
    category: 'Cultural',
    description: 'An evening of music, dance, and drama celebrating the diverse artistic talents of the USICT student body.',
    date: '28 Sep 2026',
    time: '05:30 PM - 09:30 PM',
    venue: 'Open Air Theatre (OAT)',
    organizer: 'Srijan Cultural Society',
    department: 'Student Council',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg6YUGgQEmn9VKO-ZlNhfrFjulku9ZqzEc5A1DejdVgFXkT8bj1-XUyXSWodS6XSJa3m0e6jSQQvIxIw9GBU9xqP5xNlVv6nMXoE9C0zQ8JHN6pZr83U0A4IiBM5qXXDp8taRD9n0599EKuBUn77Es-Vi5bw0wtrQugVisqqlrhply3kXFKczTK0Ssi5H7GF6l1EnmbwnUmE9hIdNFH64Au7QdOu0npHeWUziwtHy6slafehI2BTQu',
    isFeatured: false,
    status: 'Upcoming'
  },
  {
    id: '7',
    slug: 'inter-department-chess-tournament',
    title: 'Inter-Department Chess Championship',
    category: 'Sports',
    description: 'Compete for the grand master title in this two-day strategic showdown. Registration required for all rounds.',
    date: '05 Oct 2026',
    time: '10:00 AM - 06:00 PM',
    venue: 'Student Activity Center',
    organizer: 'Sports Club',
    department: 'Student Affairs',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCFXbse7b9VohAFAThdyQhUtlF_CnzY3ad63Jho7k9Mt1Ee_jW0X2kaDHJZShmrRoG05RD2F9JfMZ5gRi3yNBCSQW4CUjh2gEvTW1XB0MTZ8tAWMa3frBqe08WGaMjFf-tX21BxH4Kti99KfgYNDDz_AfZ4OmleKyjegISMQimV-RqLKOEtEjEF3yx9Avg4kQZJ5Zwh8zFT8az-kJGP0GQHpfoXemxuvQoSryBLIxUV9tNrb_GL8zX',
    isFeatured: false,
    status: 'Upcoming'
  },
  {
    id: '8',
    slug: 'workshop-on-blockchain-fundamentals',
    title: 'Workshop on Blockchain & Smart Contracts',
    category: 'Workshop',
    description: 'Learn the fundamentals of decentralized ledgers and smart contracts in this hands-on interactive coding session.',
    date: '12 Oct 2026',
    time: '02:00 PM - 05:00 PM',
    venue: 'Lab 4, Block B',
    organizer: 'Web3 Student Chapter',
    department: 'Information Technology',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6BwBin7FKUpyvnqLGGX-35hMfGM8AmJ1vO6ZBy8aj3a0xOs9XgBuRg4riijhfpdxZ6w9gLb9mWxLfFiMeBurNldZ79PlS0k-RY2SM5bkFRMWdxj6P4Ah0LA_ryRilCk5e_aItn-CCZYPvSQf5q1d95dC2dbea9Za_NW3Y8LHQjzzIRGlVcciw7OBkpgfPPRmpinevjeFOp9Ucv8Mg0o-Gp2QQKYe6Z1g4qNEz8dkbiSI0TjVy1bK6',
    isFeatured: false,
    status: 'Upcoming'
  }
];
