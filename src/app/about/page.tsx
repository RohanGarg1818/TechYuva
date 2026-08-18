import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 space-y-20 lg:space-y-28">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-[500px]">
        <div className="lg:col-span-7 space-y-6 md:space-y-8 pr-0 lg:pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full border border-outline-variant">
            <span className="material-symbols-outlined text-[16px] text-primary fill">school</span>
            <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider font-bold">
              ESTABLISHED 1999
            </span>
          </div>

          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-background">
            University School of Information, Communication & Technology
          </h1>

          <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-[600px] leading-relaxed">
            Fostering excellence in engineering education and technical research. USICT is dedicated to nurturing technologists, innovators, and leaders who shape the future of computing globally.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#campus-life"
              className="bg-primary text-on-primary px-8 py-3.5 rounded font-label-sm text-xs uppercase tracking-wider font-bold hover:bg-primary-container transition-colors shadow-sm"
            >
              Explore Campus Life
            </Link>
            <Link
              href="/resources"
              className="bg-transparent border border-outline-variant text-on-surface px-8 py-3.5 rounded font-label-sm text-xs uppercase tracking-wider font-bold hover:bg-surface-container transition-colors"
            >
              Student Resources
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          <div className="aspect-[4/5] rounded-xl overflow-hidden border border-outline-variant shadow-elevated relative bg-surface-container-low">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXYD_9LdwS5eWQxRqpfO_IatpomF6z3bqJefQo3sHg0jZT3PfHdmnNZUNELlQbAY1QhoD8JEkX0O3pmMeg__kK-S_ZCokUBlOsvLB_NjpTYlgdOsLqHAFCG2VFH2RTOUFh3L2py-FmvH2gwx7tXKk4OVAqBS_MeYR-l3NP4C6cdriJ9OZLkfoxAkOvnsVo8JnIVi8llSEJenNB2-_t4LGMroukKmuCTT8KPDzvUbnJKAFhDb8WArMg"
              alt="USICT Campus Main Facade"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Mission & Vision Bento */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        <div className="col-span-1 lg:col-span-3 pb-6 border-b border-outline-variant">
          <h2 className="font-h2 text-h2 text-on-background mb-1">Our Purpose</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Guiding institutional principles that drive educational excellence and discovery.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant flex flex-col justify-between shadow-sm hover:shadow-subtle transition-shadow">
          <div>
            <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined text-[26px]">visibility</span>
            </div>
            <h3 className="font-h3 text-h3 text-on-background mb-4 font-bold">Vision</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              To be a globally recognized center of excellence in Information and Communication Technology, fostering innovation, cutting-edge research, and holistic development to address critical societal challenges.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant flex flex-col justify-between shadow-sm hover:shadow-subtle transition-shadow lg:col-span-2">
          <div>
            <div className="w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center mb-6 text-tertiary">
              <span className="material-symbols-outlined text-[26px]">rocket_launch</span>
            </div>
            <h3 className="font-h3 text-h3 text-on-background mb-4 font-bold">Mission</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                To provide world-class education and rigorous research infrastructure, empowering students with industry-relevant skills and sound ethical values.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                To bridge academia and industry through interdisciplinary laboratories, incubator-backed startups, and continual curriculum modernization.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-outline-variant flex items-center gap-4 flex-wrap">
            <span className="font-label-sm text-xs text-on-background font-bold uppercase tracking-wider">
              Core Values:
            </span>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-surface-container-high border border-outline-variant rounded font-label-sm text-xs text-on-surface font-semibold">
                Excellence
              </span>
              <span className="px-3 py-1 bg-surface-container-high border border-outline-variant rounded font-label-sm text-xs text-on-surface font-semibold">
                Innovation
              </span>
              <span className="px-3 py-1 bg-surface-container-high border border-outline-variant rounded font-label-sm text-xs text-on-surface font-semibold">
                Integrity
              </span>
              <span className="px-3 py-1 bg-surface-container-high border border-outline-variant rounded font-label-sm text-xs text-on-surface font-semibold">
                Inclusivity
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life Highlights */}
      <section className="space-y-8" id="campus-life">
        <div className="flex justify-between items-end pb-6 border-b border-outline-variant">
          <div>
            <h2 className="font-h2 text-h2 text-on-background mb-1">Campus Life</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Experience the state-of-the-art infrastructure of the Dwarka campus.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter h-auto md:h-[480px]">
          {/* Main Large Photo */}
          <div className="md:col-span-7 relative group rounded-xl overflow-hidden border border-outline-variant min-h-[300px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9P5p2dyt4u_xFt68JOPZXbYeIpWf3nik1vdWCyaE5lXyw8eIZkufyD5pNhR8Z9zSIOlTNH0HnMSHeGJoBgnoL9PlLQdTnVrKDgWdH1uNYklP8X9ERDCqtjR4jt9unsViVXYkKMqs_CnN9wrsbhykVC5xgdh5f_W3k4E4DfcOiCa58p3lvYyixYB5Ssa93ERaXXniMzg5BODD60dYNMMftGssApULWoGBxs3RnHr-_zaD_8O-Iht7M"
              alt="Hackathon in Progress"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full text-white">
              <span className="px-3 py-1 bg-primary rounded font-label-sm text-[11px] uppercase tracking-wider font-bold mb-2 inline-block">
                Tech Culture
              </span>
              <h3 className="font-h3 text-2xl font-bold mb-1">24/7 Innovation Hubs</h3>
              <p className="font-body-md text-sm opacity-90 max-w-md">
                Modern computer labs equipped with high-performance computing clusters and fiber connectivity.
              </p>
            </div>
          </div>

          {/* Stacked Side Photos */}
          <div className="md:col-span-5 grid grid-rows-2 gap-gutter h-[480px]">
            <div className="relative group rounded-xl overflow-hidden border border-outline-variant">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqhKv7VgHQljNZbWHgaSd73wvH7ZF6O6Jt8Kk_EkXGRRAwul5YbE7jheoYztir7M58Cccq9X8Q2EkOxZfb9eV-WpAaqh6GpWuofHFKqYwYezfFp7wKQLbrolCIod1_RMDCFgxET7rB8rSRtU7J5wrzgGE8TCXTgW_fy9WdGN8aFI9DkBrxc6ennk5FXX_UHRCU0YNvPR4DMcehaopYm2uA3veW2dIWi5JqwJ0YKeWrfJ2V1NjH_T0W"
                alt="Campus Greens"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="font-h3 text-lg font-bold mb-0.5">Vibrant Campus Community</h3>
                <p className="text-xs opacity-90">Expansive green courtyards designed for collaboration.</p>
              </div>
            </div>

            <div className="relative group rounded-xl overflow-hidden border border-outline-variant">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAImPjx30IzOUwH_zd-uFrAEfB2tx5tmwwVbITTU5KhJIa-9HKsqhCjyDiLpSSWVD-y-tf5Wfg-YlaBOnn9Qqit9kqYozGuN_XWh2JRjmkByAVcFaCQ-jzKcGzPiMsIAdtGJ-xFhjtg680dAXYZpkr4kcEFTeOsrw_EimuVvKL-pi-q4zEXaA5xWJ8INHuH1-_DLEoquppDUnGuCE4M3TI7IQU_OLytLW-DKOxdY8KmRlCBicRqBwzJ"
                alt="Central Library"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="font-h3 text-lg font-bold mb-0.5">Central Digital Library</h3>
                <p className="text-xs opacity-90">Extensive physical catalog and global research subscriptions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Timeline */}
      <section className="max-w-3xl mx-auto space-y-12">
        <div className="text-center pb-6">
          <h2 className="font-h2 text-h2 text-on-background mb-2">Legacy of Excellence</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Key milestones in the university&apos;s educational leadership.
          </p>
        </div>

        <div className="relative border-l-2 border-outline-variant ml-4 md:ml-1/2 space-y-12 pb-4">
          {/* Milestone 1 */}
          <div className="relative pl-8 md:pl-0">
            <div className="md:hidden absolute w-3.5 h-3.5 bg-primary rounded-full -left-[8px] top-1.5 border-2 border-surface" />
            <div className="hidden md:block absolute w-3.5 h-3.5 bg-primary rounded-full left-1/2 -ml-[7px] top-1.5 border-2 border-surface z-10" />
            <div className="md:flex md:justify-between md:items-start w-full">
              <div className="md:w-[45%] md:text-right md:pr-8 mb-1 md:mb-0">
                <span className="font-h3 text-2xl text-primary font-bold">2023</span>
              </div>
              <div className="md:w-[45%] md:pl-8">
                <h4 className="font-body-lg text-lg font-bold text-on-background mb-1">
                  NAAC A++ &amp; NBA Tier-1 Accreditation
                </h4>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  Awarded prestigious NAAC A++ grade accreditation along with NBA Tier-1 accreditation for undergraduate computing programs, affirming our commitment to global education standards.
                </p>
              </div>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="relative pl-8 md:pl-0">
            <div className="md:hidden absolute w-3.5 h-3.5 bg-primary rounded-full -left-[8px] top-1.5 border-2 border-surface" />
            <div className="hidden md:block absolute w-3.5 h-3.5 bg-primary rounded-full left-1/2 -ml-[7px] top-1.5 border-2 border-surface z-10" />
            <div className="md:flex md:justify-between md:items-start w-full flex-row-reverse">
              <div className="md:w-[45%] md:text-left md:pl-8 mb-1 md:mb-0">
                <span className="font-h3 text-2xl text-primary font-bold">2018</span>
              </div>
              <div className="md:w-[45%] md:pr-8 md:text-right">
                <h4 className="font-body-lg text-lg font-bold text-on-background mb-1">
                  AI &amp; Data Science Center of Excellence
                </h4>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  Established the dedicated Center of Excellence in Artificial Intelligence, supporting high-impact student research and industry patents.
                </p>
              </div>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="relative pl-8 md:pl-0">
            <div className="md:hidden absolute w-3.5 h-3.5 bg-primary rounded-full -left-[8px] top-1.5 border-2 border-surface" />
            <div className="hidden md:block absolute w-3.5 h-3.5 bg-primary rounded-full left-1/2 -ml-[7px] top-1.5 border-2 border-surface z-10" />
            <div className="md:flex md:justify-between md:items-start w-full">
              <div className="md:w-[45%] md:text-right md:pr-8 mb-1 md:mb-0">
                <span className="font-h3 text-2xl text-primary font-bold">1999</span>
              </div>
              <div className="md:w-[45%] md:pl-8">
                <h4 className="font-body-lg text-lg font-bold text-on-background mb-1">
                  Inception of USICT
                </h4>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  Founded under Guru Gobind Singh Indraprastha University with a visionary mandate to pioneer computer science and telecommunication pedagogy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
