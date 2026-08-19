import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { mockEvents } from '@/data/events';
import { mockAnnouncements } from '@/data/announcements';
import { mockClubs } from '@/data/clubs';
import { mockResources } from '@/data/resources';
import { EventItem, AnnouncementItem, ClubItem, ResourceItem } from '@/types';

// ==========================================
// EVENTS SERVICE
// ==========================================
export async function getEvents(): Promise<EventItem[]> {
  if (!isSupabaseConfigured || !supabase) {
    return mockEvents;
  }

  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) {
      return mockEvents;
    }

    return data.map((item: any) => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
      category: item.category,
      description: item.description,
      fullDescription: item.full_description,
      date: item.date,
      time: item.time,
      venue: item.venue,
      organizer: item.organizer,
      organizerRole: item.organizer_role,
      organizerEmail: item.organizer_email,
      organizerPhone: item.organizer_phone,
      organizerLogo: item.organizer_logo,
      image: item.image,
      isFeatured: item.is_featured,
      status: item.status,
      department: item.department,
      registrationDeadline: item.registration_deadline,
      registrationUrl: item.registration_url,
      highlights: item.highlights || [],
      schedule: item.schedule || [],
      guidelines: item.guidelines || [],
      speakers: item.speakers || [],
    }));
  } catch {
    return mockEvents;
  }
}

export async function getEventBySlug(slug: string): Promise<EventItem | null> {
  if (!isSupabaseConfigured || !supabase) {
    return mockEvents.find((e) => e.slug === slug) || null;
  }

  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error || !data) {
      return mockEvents.find((e) => e.slug === slug) || null;
    }

    return {
      id: data.id,
      slug: data.slug,
      title: data.title,
      category: data.category,
      description: data.description,
      fullDescription: data.full_description,
      date: data.date,
      time: data.time,
      venue: data.venue,
      organizer: data.organizer,
      organizerRole: data.organizer_role,
      organizerEmail: data.organizer_email,
      organizerPhone: data.organizer_phone,
      organizerLogo: data.organizer_logo,
      image: data.image,
      isFeatured: data.is_featured,
      status: data.status,
      department: data.department,
      registrationDeadline: data.registration_deadline,
      registrationUrl: data.registration_url,
      highlights: data.highlights || [],
      schedule: data.schedule || [],
      guidelines: data.guidelines || [],
      speakers: data.speakers || [],
    };
  } catch {
    return mockEvents.find((e) => e.slug === slug) || null;
  }
}

// ==========================================
// ANNOUNCEMENTS SERVICE
// ==========================================
export async function getAnnouncements(): Promise<AnnouncementItem[]> {
  if (!isSupabaseConfigured || !supabase) {
    return mockAnnouncements;
  }

  try {
    const { data, error } = await supabase
      .from('announcements')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) {
      return mockAnnouncements;
    }

    return data.map((item: any) => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
      category: item.category,
      date: item.date,
      description: item.description,
      content: item.content || [],
      isFeatured: item.is_featured,
      author: item.author,
    }));
  } catch {
    return mockAnnouncements;
  }
}

// ==========================================
// CLUBS SERVICE
// ==========================================
export async function getClubs(): Promise<ClubItem[]> {
  if (!isSupabaseConfigured || !supabase) {
    return mockClubs;
  }

  try {
    const { data, error } = await supabase
      .from('clubs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) {
      return mockClubs;
    }

    return data.map((item: any) => ({
      id: item.id,
      slug: item.slug,
      name: item.name,
      category: item.category,
      tagline: item.tagline,
      description: item.description,
      fullDescription: item.full_description || [],
      logo: item.logo,
      bannerImage: item.banner_image,
      memberCount: item.member_count,
      isFeatured: item.is_featured,
      featuredSize: item.featured_size,
      upcomingActivity: item.upcoming_activity,
      stats: item.stats || [],
      leadership: item.leadership || [],
      upcomingEvents: item.upcoming_events || [],
      gallery: item.gallery || [],
      socials: item.socials || {},
    }));
  } catch {
    return mockClubs;
  }
}

export async function getClubBySlug(slug: string): Promise<ClubItem | null> {
  if (!isSupabaseConfigured || !supabase) {
    return mockClubs.find((c) => c.slug === slug) || null;
  }

  try {
    const { data, error } = await supabase
      .from('clubs')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error || !data) {
      return mockClubs.find((c) => c.slug === slug) || null;
    }

    return {
      id: data.id,
      slug: data.slug,
      name: data.name,
      category: data.category,
      tagline: data.tagline,
      description: data.description,
      fullDescription: data.full_description || [],
      logo: data.logo,
      bannerImage: data.banner_image,
      memberCount: data.member_count,
      isFeatured: data.is_featured,
      featuredSize: data.featured_size,
      upcomingActivity: data.upcoming_activity,
      stats: data.stats || [],
      leadership: data.leadership || [],
      upcomingEvents: data.upcoming_events || [],
      gallery: data.gallery || [],
      socials: data.socials || {},
    };
  } catch {
    return mockClubs.find((c) => c.slug === slug) || null;
  }
}

// ==========================================
// RESOURCES SERVICE
// ==========================================
export async function getResources(): Promise<ResourceItem[]> {
  if (!isSupabaseConfigured || !supabase) {
    return mockResources;
  }

  try {
    const { data, error } = await supabase
      .from('resources')
      .select('*')
      .order('title', { ascending: true });

    if (error || !data || data.length === 0) {
      return mockResources;
    }

    return data.map((item: any) => ({
      id: item.id,
      title: item.title,
      category: item.category,
      description: item.description,
      icon: item.icon,
      url: item.url,
      actionText: item.action_text,
      isExternal: item.is_external,
    }));
  } catch {
    return mockResources;
  }
}
