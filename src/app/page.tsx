"use client";
import { useState } from "react";
import Image from "next/image";
import FloatingRegisterButton from "@/components/FloatingRegisterButton";
import MobileMenu from "@/components/MobileMenu";
import Lightbox from "@/components/Lightbox";

const GALLERY_IMAGES = [
  "/pastconference/IMG_2476.jpg",
  "/pastconference/IMG_1952.jpg",
  "/pastconference/IMG_1832.jpg",
  "/pastconference/IMG_2092.jpg",
  "/pastconference/IMG_2010.jpg",
  "/pastconference/IMG_2494.jpg",
  "/pastconference/IMG_1922.jpg",
  "/pastconference/IMG_2175.jpg",
  "/pastconference/IMG_1982.jpg",
  "/pastconference/IMG_1931.jpg",
  "/pastconference/IMG_2301.jpg",
  "/pastconference/IMG_1821.jpg",
  "/pastconference/IMG_2276.jpg",
  "/pastconference/IMG_2145.jpg",
  "/pastconference/IMG_1972.jpg",
  "/pastconference/IMG_2204.jpg",
  "/pastconference/IMG_2142.jpg",
  "/pastconference/IMG_2304.jpg",
  "/pastconference/IMG_2502.jpg",
  "/pastconference/IMG_2068.jpg",
  "/pastconference/IMG_1936.jpg",
  "/pastconference/IMG_2386.jpg",
  "/pastconference/IMG_2249.jpg",
  "/pastconference/IMG_2022.jpg",
  "/pastconference/IMG_2055.jpg",
  "/pastconference/IMG_2109.jpg",
  "/pastconference/IMG_1830.jpg",
  "/pastconference/IMG_1842.jpg",
  "/pastconference/IMG_2534.jpg",
  "/pastconference/IMG_1848.jpg",
  "/pastconference/IMG_1766.jpg",
  "/pastconference/IMG_2306.jpg",
  "/pastconference/IMG_2327.jpg",
  "/pastconference/IMG_1798.jpg",
  "/pastconference/IMG_2079.jpg",
  "/pastconference/IMG_2432.jpg",
  "/pastconference/IMG_2281.jpg",
  "/pastconference/IMG_2030.jpg",
  "/pastconference/IMG_1862.jpg",
  "/pastconference/IMG_2539.jpg",
  "/pastconference/IMG_2244.jpg",
  "/pastconference/IMG_2533.jpg",
  "/pastconference/IMG_2046.jpg",
  "/pastconference/IMG_2335.jpg",
  "/pastconference/IMG_2141.jpg",
];

const IMAGES_PER_BATCH = 12;

// Centralized URL for easier updates
const REGISTRATION_URL = "https://www.eventbrite.ca/e/colonial-ruptures-a-convergence-of-resistance-and-renewal-tickets-1442166622189?aff=oddtdtcreator";

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_BATCH);
  const [loadedMap, setLoadedMap] = useState<Record<number, boolean>>({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const carouselStyles = `
    @keyframes scroll-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(calc(-50%)); }
    }
    .carousel-scroll {
      animation: scroll-left 40s linear infinite;
      width: max-content;
    }
    .carousel-scroll:hover {
      animation-play-state: paused;
    }
  `;

  const markLoaded = (i: number) => {
    setLoadedMap((prev) => (prev[i] ? prev : { ...prev, [i]: true }));
  };
  const partners = [
    {
      name: "CIARS",
      alt: "Centre for Integrative Anti-Racism Studies logo",
      logo: "/logos/ciars.jpeg",
    },
    {
      name: "Critical Studies in Equity",
      alt: "Critical Studies in Equity and Solidarity logo",
      logo: "/logos/cses.webp",
    },
    {
      name: "IERIS",
      alt: "Institute for Educational Research and Innovation Studies, University of Education Winneba",
      logo: "/logos/winnena.jpg",
    },
    {
      name: "CLD",
      alt: "Centre for Leadership and Diversity logo",
      logo: null,
    },
    {
      name: "Centre for Black Student Achievement",
      alt: "Centre of Excellence for Black Student Achievement logo",
      logo: "/logos/centerofexcellence.jpeg",
    },
    {
      name: "Delmore Buddy Daye Institute",
      alt: "Delmore \"Buddy\" Daye Learning Institute logo",
      logo: "/logos/delmore.png",
    },
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light">
      <style>{carouselStyles}</style>
      
      {/* NOTE: Update the link inside this component file manually */}
      <FloatingRegisterButton />

      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl flex-1">
            {/* TopNavBar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light px-4 lg:px-10 py-3 animate-fade-in-up">
              <div className="flex items-center gap-2 sm:gap-4">
                    <div className="size-12 sm:size-14 text-primary flex items-center justify-center">
                  <Image
                    src="/logotrans.png"
                    alt="logo"
                    width={96}
                    height={96}
                    sizes="(max-width:640px) 48px, (max-width:1024px) 80px, 96px"
                    className="w-12 sm:w-14 h-auto"
                    priority
                  />
                </div>
                <h2 className="text-text-light text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">CIARS</h2>
              </div>
              <nav
                className="hidden md:flex flex-1 items-center justify-end gap-8"
                aria-label="Primary"
              >
                <ul className="flex items-center gap-9">
                  <li>
                    <a className="text-text-light text-sm font-medium leading-normal hover:text-primary transition-colors" href="#overview">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a className="text-text-light text-sm font-medium leading-normal hover:text-primary transition-colors" href="#why-now">
                      Why Now
                    </a>
                  </li>
                  <li>
                    <a className="text-text-light text-sm font-medium leading-normal hover:text-primary transition-colors" href="#partners">
                      Partners
                    </a>
                  </li>
                  <li>
                    <a className="text-text-light text-sm font-medium leading-normal hover:text-primary transition-colors" href="#gallery">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a className="text-text-light text-sm font-medium leading-normal hover:text-primary transition-colors" href="#about">
                      Theme
                    </a>
                  </li>
                  <li>
                    <a className="text-text-light text-sm font-medium leading-normal hover:text-primary transition-colors" href="#call-for-abstracts">
                      Call for Papers
                    </a>
                  </li>
                </ul>
                {/* UPDATED: Desktop Register Button */}
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all"
                >
                  <span className="truncate">Register</span>
                </a>
              </nav>
              <div className="md:hidden flex items-center gap-2">
                {/* UPDATED: Mobile Register Button */}
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg h-10 px-3 sm:px-4 bg-primary text-white text-sm font-medium leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all"
                >
                  <span className="hidden xs:inline">Register</span>
                  <span className="xs:hidden">Join</span>
                </a>
                <MobileMenu />
              </div>
            </header>

            <main className="flex-grow">
              {/* HeroSection */}
              <section id="overview" className="relative py-10 md:py-20 animate-fade-in-up">
                <div className="@container">
                  <div className="@[480px]:p-4">
                      <div 
                      className="flex min-h-[360px] sm:min-h-[480px] md:min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center text-center px-4 py-10 @[480px]:px-10" 
                      style={{
                        backgroundImage: 'url("/hero-bg.jpg")',
                      }}
                    >
                      <div className="flex flex-col gap-3 sm:gap-4 max-w-4xl">
                        <p className="text-white text-sm sm:text-base font-medium leading-normal @[480px]:text-lg">Centre for Integrative Anti-Racism Studies</p>
                        <h1 className="text-white text-3xl sm:text-4xl font-light leading-tight tracking-[-0.033em] @[480px]:text-5xl md:text-6xl @[480px]:font-light @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                          13th Decolonizing Conference
                        </h1>
                        <h2 className="text-white text-base sm:text-lg font-normal leading-normal @[480px]:text-xl @[480px]:font-normal @[480px]:leading-normal">
                          COLONIAL RUPTURES: UNMASKING ONGOING COLONIALITY, RESISTANCE, AND LIBERATORY POSSIBILITIES
                        </h2>
                        <p className="text-white/80 text-xs sm:text-sm font-normal leading-normal @[480px]:text-base">
                          March 12-14, 2026 | OISE, University of Toronto
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Content Section */}
              <section id="why-now" className="py-8 sm:py-10 md:py-16 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
                  {/* SectionHeader */}
                  <div className="lg:col-span-2 animate-fade-in-up">
                    <h2 className="text-text-light text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-[-0.015em]">Why This Conference Now?</h2>
                    {/* Logo below heading: hidden on very small screens, centered under the subtitle */}
                    <div className="mt-4 sm:mt-6 hidden sm:flex w-full items-center justify-center">
                      <Image
                        src="/logotrans.png"
                        alt="CIARS logo"
                        width={220}
                        height={220}
                        sizes="(max-width:640px) 128px, (max-width:1024px) 176px, 220px"
                        className="w-28 sm:w-44 h-auto object-contain"
                        priority
                      />
                    </div>
                  </div>
                  {/* BodyText */}
                  <div className="lg:col-span-3 space-y-3 sm:space-y-4 animate-fade-in-up">
                    <p className="text-text-light/80 text-sm sm:text-base font-normal leading-relaxed">
                      In a world grappling with the enduring legacies of colonialism, this conference provides a critical space for dialogue, reflection, and action. We convene to challenge the structures that perpetuate coloniality and to amplify the voices of resistance that forge paths toward liberatory futures. This gathering is a call to scholars, activists, artists, and community members to collectively unmask ongoing colonial ruptures and imagine possibilities for profound, sustainable change and regeneration.
                    </p>
                    {/* ButtonGroup */}
                    <div className="flex justify-stretch pt-3 sm:pt-4">
                      <div className="flex flex-1 gap-2 sm:gap-3 flex-wrap justify-start">
                        <a href="#call-for-abstracts" className="flex min-w-[120px] flex-1 sm:flex-initial cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 sm:h-12 px-4 sm:px-5 bg-primary text-white text-sm sm:text-base font-medium leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all">
                          <span className="truncate">Submit an Abstract</span>
                        </a>
                        {/* UPDATED: Content Section Register Button */}
                        <a 
                          href={REGISTRATION_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex min-w-[120px] flex-1 sm:flex-initial cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 sm:h-12 px-4 sm:px-5 bg-primary/20 text-text-light text-sm sm:text-base font-medium leading-normal tracking-[0.015em] hover:bg-primary/30 transition-all"
                        >
                          <span className="truncate">Register Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Partner Logos Banner */}
              <section id="partners" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background-light -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-24 xl:-mx-40">
                <div className="w-full">
                  <h3 className="text-center text-text-light text-xl sm:text-2xl font-light leading-tight tracking-[-0.015em] px-4 pb-8 sm:pb-12">
                    In Collaboration With
                  </h3>
                  <div className="relative w-full overflow-hidden">
                    <div className="carousel-scroll flex gap-6 md:gap-16 items-center py-4 md:py-0">
                      {[...partners, ...partners].map((partner, i) => (
                        <div key={`${partner.name}-${i}`} className="flex-shrink-0 w-28 sm:w-40 md:w-48 h-16 sm:h-24 md:h-28 flex items-center justify-center rounded-lg p-2 sm:p-3 md:p-4 mx-3">
                          {partner.logo ? (
                            <Image
                              src={partner.logo}
                              alt={partner.alt}
                              width={192}
                              height={112}
                              className="h-full w-auto object-contain"
                              priority={i === 0}
                            />
                          ) : (
                            <span className="text-xs text-center font-medium text-gray-600">
                              {partner.name}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Image Banner/Carousel Section */}
              <section id="gallery" className="py-8 sm:py-10 md:py-16 animate-fade-in-up">
                <div className="w-full overflow-hidden">
                  <h3 className="text-center text-text-light text-xl sm:text-2xl font-light leading-tight tracking-[-0.015em] px-4 pb-6 sm:pb-8">From Our Past Gatherings</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 px-4">
                    {GALLERY_IMAGES.slice(0, visibleCount).map((src, idx) => (
                      <div key={src} className="aspect-w-1 aspect-h-1">
                        <div
                          className="relative h-full w-full rounded-lg overflow-hidden bg-gray-100"
                          style={{ cursor: 'pointer' }}
                          onClick={() => { setLightboxIndex(idx); setLightboxOpen(true); }}
                        >
                          {/* blurred placeholder layer */}
                          <div
                            className={`absolute inset-0 bg-center bg-cover transform transition-all duration-500 ease-out ${loadedMap[idx] ? 'opacity-0 scale-105' : 'opacity-100 scale-105 filter blur-2xl'}`}
                            style={{ backgroundImage: `url(${src})`, transitionDelay: `${(idx % IMAGES_PER_BATCH) * 60}ms` }}
                          />

                          {/* actual image */}
                          <Image
                            className={`relative h-full w-full object-cover transition-opacity duration-500 ${loadedMap[idx] ? 'opacity-100' : 'opacity-0'}`}
                            alt=""
                            src={src}
                            width={400}
                            height={300}
                            loading="lazy"
                            onLoadingComplete={() => markLoaded(idx)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Load more button */}
                  <div className="flex flex-col items-center mt-6">
                    <button
                      onClick={() => setVisibleCount((c) => Math.min(GALLERY_IMAGES.length, c + IMAGES_PER_BATCH))}
                      disabled={visibleCount >= GALLERY_IMAGES.length}
                      className="px-4 py-2 rounded-lg bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      {visibleCount >= GALLERY_IMAGES.length ? "All images loaded" : "Load more"}
                    </button>
                    <div className="text-sm text-text-light/60 mt-2">Showing {visibleCount} of {GALLERY_IMAGES.length}</div>
                  </div>
                </div>
              </section>

              {lightboxOpen && (
                <Lightbox
                  images={GALLERY_IMAGES}
                  index={lightboxIndex}
                  onClose={() => setLightboxOpen(false)}
                  onChange={(i) => setLightboxIndex(i)}
                />
              )}

              {/* Conference Theme Section */}
              <section id="about" className="py-8 sm:py-10 md:py-16 px-4">
                <div className="max-w-5xl mx-auto">
                  {/* Section Header */}
                  <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in-up">
                    <h2 className="text-text-light dark:text-text-dark text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-[-0.015em] mb-4">
                      About the Conference
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                  </div>

                  {/* Conference Overview */}
                  <div className="space-y-6 sm:space-y-8">
                    <div className="animate-fade-in-up">
                      <h3 className="text-text-light dark:text-text-dark text-xl sm:text-2xl font-light leading-tight tracking-[-0.015em] mb-3 sm:mb-4">
                        What Conversations
                      </h3>
                      <div className="space-y-3 sm:space-y-4 text-text-light/80 dark:text-text-dark/80 text-sm sm:text-base font-normal leading-relaxed">
                        <p>
                          Working through anti- and decolonial lenses, the conference encourages dialectical and conjunctural analyses that connect histories, ideas, events, and practices that have shaped human growth and continue to do so (see Hall, 1989). The conference will be a space to advance critical anti-colonial knowledge, critique the present, and reimagine the world grounded in &ldquo;home-grown cultural perspectives&rdquo; (Yankah, 2004, p. 25). We do not aim solely to resist; rather, we seek to build new futures that challenge dominant and colonial ways of knowing and being.
                        </p>
                        <p>
                          We seek scholarship grounded in community accountability, rejecting academic hierarchies and performative intellectualism in favor of collective, ethical learning.
                        </p>
                        <p>
                          Using de/anti-colonial prisms, the conference will explore the meaning of &ldquo;living well together for new futures&rdquo; that resist continuing global capital extractivism, white supremacy, and fascist agendas. The conference invites work that examines the entanglements of white supremist logics, and racial capitalism with the enduring impacts on institutional carceralities, material, symbolic, physical violences and generational trauma. It calls for ethical, transformative scholarship that bridges divides, nurtures community, and aligns theory with activism to move beyond mere awakening of critical consciousness.
                        </p>
                      </div>
                    </div>

                    {/* Defining Features */}
                    <div className="animate-fade-in-up bg-card-light rounded-xl p-5 sm:p-6 md:p-8 border border-border-light">
                      <h3 className="text-text-light text-xl sm:text-2xl font-light leading-tight tracking-[-0.015em] mb-3 sm:mb-4">
                        Defining Features
                      </h3>
                      <p className="text-text-light/80 text-sm sm:text-base font-normal leading-relaxed">
                        As a defining feature, the conference calls for learners and community workers to reject performative intellectualism and politics and instead create communities and uphold academic mentorship - specifically holding each other up rather than tearing each other down. It is urgent for us to reject colonial binaries that promote &ldquo;thinking in hierarchies&rdquo;, eradicate toxicity and dehumanization and see education and social justice work as foundational to human liberation. Together, we aim to resist hate, violence, oppression and genocide within the corollary of colonialism by bridging the gaps between scholarship, activism and social politics.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call for Abstracts */}
              <section id="call-for-abstracts" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4">
                <div className="max-w-2xl mx-auto">
                  {/* Header */}
                  <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
                    <p className="text-primary text-xs uppercase tracking-[0.2em] mb-6 sm:mb-8">
                      Call for Papers & Participation
                    </p>
                    <h2 className="text-text-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight mb-6 sm:mb-8">
                      Build liberatory futures with us
                    </h2>
                    <p className="text-text-light/70 text-base sm:text-lg leading-relaxed">
                      Building on the conference&rsquo;s commitment to de/anti-colonial praxis, we invite papers and creative contributions that examine the intersections of coloniality, resistance, and liberation across educational, cultural, and political contexts.
                    </p>
                  </div>

                  {/* Dot divider */}
                  <div className="flex justify-center gap-2 mb-12 sm:mb-16 md:mb-20">
                    <div className="w-1 h-1 rounded-full bg-primary/30" />
                    <div className="w-1 h-1 rounded-full bg-primary/30" />
                    <div className="w-1 h-1 rounded-full bg-primary/30" />
                  </div>

                  {/* Guiding Questions */}
                  <div className="mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
                    <h3 className="text-text-light text-xl sm:text-2xl font-light mb-6 sm:mb-8 text-center">
                      Guiding Questions
                    </h3>
                    <div className="space-y-4 sm:space-y-6 text-text-light/80 text-sm sm:text-base leading-relaxed">
                      <p>How can we build anti-colonial solidarities rooted in radical hope and futurity?</p>
                      <p>How do we deploy critical understandings and literacies of Land&mdash;and its earthly teachings of relationality, sharing, reciprocity, connection, and mutual interdependence&mdash;to subvert colonial hierarchies of schooling and education and foster social responsibility (see Dei, 2008)?</p>
                      <p>How do we reclaim our resistive subjectivities and continue our ancestral struggles for liberation and capacitate abolitionist politics?</p>
                      <p>What epistemic and political practices are imperative for futurities that free us from the &ldquo;clutches of coloniality&rdquo;?</p>
                      <p>How can we reassert control over our stories, identities, and lived experiences, while advancing critical scholarship to upend mental and intellectual enslavement?</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-16 bg-primary/20 mx-auto mb-12 sm:mb-16 md:mb-20" />

                  {/* Submission Guidelines */}
                  <div className="mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
                    <h3 className="text-text-light text-xl sm:text-2xl font-light mb-6 sm:mb-8 text-center">
                      Submission Guidelines
                    </h3>
                    <div className="space-y-6 sm:space-y-8 text-text-light/80">
                      <div className="text-center">
                        <p className="text-text-light font-medium mb-2">Abstract Length</p>
                        <p className="text-sm">250&ndash;300 words outlining purpose, method, and contribution</p>
                      </div>
                      <div className="text-center">
                        <p className="text-text-light font-medium mb-2">Paper Length</p>
                        <p className="text-sm">Full papers (optional) up to 4,000 words</p>
                      </div>
                      <div className="text-center">
                        <p className="text-text-light font-medium mb-2">Presentation Formats</p>
                        <p className="text-sm">Papers, panels, workshops, performances, dialogues, and community-engaged sessions</p>
                      </div>
                      <div className="text-center">
                        <p className="text-text-light font-medium mb-2">Evaluation Criteria</p>
                        <p className="text-sm">Alignment with theme, originality, clarity, community accountability, and transformative potential</p>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-16 bg-primary/20 mx-auto mb-12 sm:mb-16 md:mb-20" />

                  {/* Key Dates */}
                  <div className="mb-12 sm:mb-16 md:mb-20 animate-fade-in-up text-center">
                    <h3 className="text-text-light text-xl sm:text-2xl font-light mb-6 sm:mb-8">
                      Key Dates
                    </h3>
                    <div className="space-y-3 sm:space-y-4 text-text-light/80 text-sm sm:text-base">
                      <p><span className="text-text-light dark:text-text-dark font-medium">Deadline:</span> January 12, 2025 at 11:59 PM EST</p>
                      <p><span className="text-text-light dark:text-text-dark font-medium">Notification:</span> February 10, 2025</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-16 bg-primary/20 mx-auto mb-12 sm:mb-16 md:mb-20" />

                  {/* Submit */}
                  <div className="mb-12 sm:mb-16 md:mb-20 animate-fade-in-up text-center">
                    <h3 className="text-text-light text-xl sm:text-2xl font-light mb-6 sm:mb-8">
                      How to Submit
                    </h3>
                    <p className="text-text-light/80 text-sm sm:text-base mb-4 sm:mb-6">
                      Send your abstract and supporting materials via email
                    </p>
                    <a href="mailto:ciars.conference@utoronto.ca" className="inline-block text-primary text-lg sm:text-xl underline underline-offset-8 hover:text-primary/80 transition-colors break-all">
                      ciars.conference@utoronto.ca
                    </a>
                  </div>

                  {/* Dot divider */}
                  <div className="flex justify-center gap-2 mb-12 sm:mb-16 md:mb-20">
                    <div className="w-1 h-1 rounded-full bg-primary/30" />
                    <div className="w-1 h-1 rounded-full bg-primary/30" />
                    <div className="w-1 h-1 rounded-full bg-primary/30" />
                  </div>

                  {/* Accessibility */}
                  <div className="text-center animate-fade-in-up">
                    <p className="text-text-light/60 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
                      We welcome multi-modal, community-engaged, and creative proposals that honour accessibility, language diversity, and collective learning practices. Let us know how we can support your participation.
                    </p>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}