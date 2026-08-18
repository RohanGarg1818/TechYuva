-- ==============================================================================
-- TECHYUVA DIGITAL CAMPUS — SUPABASE DATABASE SCHEMA
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. EVENTS TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Technical', 'Cultural', 'Sports', 'Academic', 'Workshop')),
    description TEXT NOT NULL,
    full_description TEXT,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    venue TEXT NOT NULL,
    organizer TEXT NOT NULL,
    organizer_role TEXT,
    organizer_email TEXT,
    organizer_phone TEXT,
    organizer_logo TEXT,
    image TEXT NOT NULL,
    is_featured BOOLEAN DEFAULT false,
    status TEXT DEFAULT 'Upcoming' CHECK (status IN ('Upcoming', 'Ongoing', 'Past')),
    department TEXT,
    registration_deadline TEXT,
    registration_url TEXT,
    highlights JSONB DEFAULT '[]'::jsonb,
    schedule JSONB DEFAULT '[]'::jsonb,
    guidelines JSONB DEFAULT '[]'::jsonb,
    speakers JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index on slug & category for fast lookup
CREATE INDEX IF NOT EXISTS idx_events_slug ON public.events(slug);
CREATE INDEX IF NOT EXISTS idx_events_category ON public.events(category);
CREATE INDEX IF NOT EXISTS idx_events_featured ON public.events(is_featured);

-- ------------------------------------------------------------------------------
-- 2. NOTICES TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.notices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    priority TEXT NOT NULL CHECK (priority IN ('very-important', 'important', 'normal')),
    department TEXT NOT NULL,
    date TEXT NOT NULL,
    time_ago TEXT,
    excerpt TEXT NOT NULL,
    content JSONB NOT NULL DEFAULT '[]'::jsonb,
    instructions JSONB DEFAULT '[]'::jsonb,
    issued_by TEXT NOT NULL,
    attachments JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index on slug & priority for fast queries
CREATE INDEX IF NOT EXISTS idx_notices_slug ON public.notices(slug);
CREATE INDEX IF NOT EXISTS idx_notices_priority ON public.notices(priority);
CREATE INDEX IF NOT EXISTS idx_notices_department ON public.notices(department);

-- ------------------------------------------------------------------------------
-- 3. ANNOUNCEMENTS TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.announcements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Academic', 'Campus', 'Student', 'Department', 'Important')),
    date TEXT NOT NULL,
    description TEXT NOT NULL,
    content JSONB DEFAULT '[]'::jsonb,
    is_featured BOOLEAN DEFAULT false,
    author TEXT DEFAULT 'TechYuva Editorial',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_announcements_slug ON public.announcements(slug);
CREATE INDEX IF NOT EXISTS idx_announcements_category ON public.announcements(category);

-- ------------------------------------------------------------------------------
-- 4. CLUBS TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.clubs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Technical', 'Cultural', 'Sports', 'Arts', 'Social', 'Entrepreneurship', 'Academic')),
    tagline TEXT,
    description TEXT NOT NULL,
    full_description JSONB DEFAULT '[]'::jsonb,
    logo TEXT NOT NULL,
    banner_image TEXT NOT NULL,
    member_count TEXT DEFAULT '100+ Members',
    is_featured BOOLEAN DEFAULT false,
    featured_size TEXT DEFAULT 'small' CHECK (featured_size IN ('large', 'small')),
    upcoming_activity TEXT,
    stats JSONB DEFAULT '[]'::jsonb,
    leadership JSONB DEFAULT '[]'::jsonb,
    upcoming_events JSONB DEFAULT '[]'::jsonb,
    gallery JSONB DEFAULT '[]'::jsonb,
    socials JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_clubs_slug ON public.clubs(slug);
CREATE INDEX IF NOT EXISTS idx_clubs_category ON public.clubs(category);
CREATE INDEX IF NOT EXISTS idx_clubs_featured ON public.clubs(is_featured);

-- ------------------------------------------------------------------------------
-- 5. RESOURCES TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.resources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Academic', 'Student Services', 'Library', 'Admissions', 'Scholarships', 'Forms', 'Portals')),
    description TEXT NOT NULL,
    icon TEXT NOT NULL,
    url TEXT NOT NULL,
    action_text TEXT DEFAULT 'Access Portal',
    is_external BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_resources_category ON public.resources(category);

-- ------------------------------------------------------------------------------
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ------------------------------------------------------------------------------
-- Enable RLS on all tables
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.clubs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;

-- 1. Events Policies
CREATE POLICY "Public events are viewable by everyone" 
ON public.events FOR SELECT USING (true);

CREATE POLICY "Admins can insert events" 
ON public.events FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Admins can update events" 
ON public.events FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can delete events" 
ON public.events FOR DELETE USING (auth.role() = 'authenticated');

-- 2. Notices Policies
CREATE POLICY "Public notices are viewable by everyone" 
ON public.notices FOR SELECT USING (true);

CREATE POLICY "Admins can manage notices" 
ON public.notices FOR ALL USING (auth.role() = 'authenticated');

-- 3. Announcements Policies
CREATE POLICY "Public announcements are viewable by everyone" 
ON public.announcements FOR SELECT USING (true);

CREATE POLICY "Admins can manage announcements" 
ON public.announcements FOR ALL USING (auth.role() = 'authenticated');

-- 4. Clubs Policies
CREATE POLICY "Public clubs are viewable by everyone" 
ON public.clubs FOR SELECT USING (true);

CREATE POLICY "Admins can manage clubs" 
ON public.clubs FOR ALL USING (auth.role() = 'authenticated');

-- 5. Resources Policies
CREATE POLICY "Public resources are viewable by everyone" 
ON public.resources FOR SELECT USING (true);

CREATE POLICY "Admins can manage resources" 
ON public.resources FOR ALL USING (auth.role() = 'authenticated');
