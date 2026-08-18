export type NoticePriority = 'very-important' | 'important' | 'normal';

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  category: 'Technical' | 'Cultural' | 'Sports' | 'Academic' | 'Workshop';
  description: string;
  fullDescription?: string;
  date: string;
  time: string;
  venue: string;
  organizer: string;
  organizerRole?: string;
  organizerEmail?: string;
  organizerPhone?: string;
  organizerLogo?: string;
  image: string;
  isFeatured?: boolean;
  status?: 'Upcoming' | 'Past' | 'Ongoing';
  department?: string;
  schedule?: {
    time: string;
    venue: string;
    title: string;
    description: string;
    badge?: string;
    speaker?: {
      name: string;
      role: string;
      avatar: string;
    };
  }[];
  speakers?: {
    name: string;
    role: string;
    topic: string;
    avatar: string;
  }[];
  guidelines?: string[];
  highlights?: {
    icon: string;
    title: string;
    description: string;
  }[];
  registrationUrl?: string;
  registrationDeadline?: string;
  relatedEventIds?: string[];
}

export interface NoticeItem {
  id: string;
  slug: string;
  title: string;
  priority: NoticePriority;
  department: string;
  date: string;
  timeAgo?: string;
  excerpt: string;
  content: string[];
  instructions?: string[];
  issuedBy: string;
  attachments?: {
    name: string;
    size: string;
    type: string;
    downloadUrl: string;
  }[];
  relatedNoticeIds?: string[];
}

export interface AnnouncementItem {
  id: string;
  slug: string;
  title: string;
  category: 'Academic' | 'Campus' | 'Student' | 'Department' | 'Important';
  date: string;
  description: string;
  content?: string[];
  isFeatured?: boolean;
  author?: string;
}

export interface ClubItem {
  id: string;
  slug: string;
  name: string;
  category: 'Technical' | 'Cultural' | 'Sports' | 'Arts' | 'Social' | 'Entrepreneurship' | 'Academic';
  tagline: string;
  description: string;
  fullDescription?: string[];
  logo: string;
  bannerImage: string;
  memberCount: string;
  isFeatured?: boolean;
  featuredSize?: 'large' | 'small';
  updatedAt?: string;
  upcomingActivity?: string;
  stats?: {
    label: string;
    value: string;
  }[];
  leadership?: {
    name: string;
    role: string;
    avatar: string;
  }[];
  upcomingEvents?: {
    title: string;
    badge: string;
    badgeType?: string;
    description: string;
    date: string;
    image: string;
    rsvpUrl?: string;
  }[];
  gallery?: {
    image: string;
    title: string;
    aspect?: string;
  }[];
  socials?: {
    email?: string;
    website?: string;
    github?: string;
    linkedin?: string;
  };
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Academic' | 'Student Services' | 'Library' | 'Admissions' | 'Scholarships' | 'Forms' | 'Portals';
  description: string;
  icon: string;
  url: string;
  actionText?: string;
  isExternal?: boolean;
}
