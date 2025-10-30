import Image from "next/image";
import FloatingRegisterButton from "@/components/FloatingRegisterButton";

export default function Home() {
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
      logo: undefined,
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
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <FloatingRegisterButton />
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl flex-1">
            {/* TopNavBar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-4 lg:px-10 py-3 animate-fade-in-up">
              <div className="flex items-center gap-4">
                <div className="size-10 text-primary">
                  <Image
                    src="/logotrans.png"
                    alt="logo"
                    width={80}
                    height={80}
                    className="size-10"
                    priority
                  />
                </div>
                <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">CIARS</h2>
              </div>
              <nav
                className="hidden md:flex flex-1 items-center justify-end gap-8"
                aria-label="Primary"
              >
                <ul className="flex items-center gap-9">
                  <li>
                    <a className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="#overview">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="#why-now">
                      Why Now
                    </a>
                  </li>
                  <li>
                    <a className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="#partners">
                      Partners
                    </a>
                  </li>
                  <li>
                    <a className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="#gallery">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="#about">
                      Theme
                    </a>
                  </li>
                  <li>
                    <a className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="#call-for-abstracts">
                      Call for Papers
                    </a>
                  </li>
                </ul>
                <button
                  type="button"
                  className="flex min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all"
                >
                  <span className="truncate">Register</span>
                </button>
              </nav>
              <div className="md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all"
                >
                  Register
                </button>
              </div>
            </header>

            <main className="flex-grow">
              {/* HeroSection */}
              <section id="overview" className="relative py-10 md:py-20 animate-fade-in-up">
                <div className="@container">
                  <div className="@[480px]:p-4">
                    <div 
                      className="flex min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center text-center px-4 py-10 @[480px]:px-10" 
                      style={{
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIdD0U31gYEzLnmYMnaI1sgE5B7LN-3EhhLKFMs36SPaCvjKmMaJaZtMPqlHs92WfDANFJ30S02Xn9y6aMWXk4rDl38X38mLMTMPtQNtbgj-s8RZrMPktoeUxk-4h-Y2LI4Z1zU0EY2y0CgHgSJzkwgjWnbPIb_ykwp3YfBQWjELuHaPmbrpM8zcpYUwawy3kfxstdOo2E3IJnT5WsWRbK7ZQ4FdtR-jGkeWfg1rTfgTpZukvC8aj8hQ2u5Ak5dEtTiR6AbI1XyTwS")'
                      }}
                    >
                      <div className="flex flex-col gap-4 max-w-4xl">
                        <p className="text-white text-base font-medium leading-normal @[480px]:text-lg">Centre for Integrative Anti-Racism Studies</p>
                        <h1 className="text-white text-4xl font-light leading-tight tracking-[-0.033em] @[480px]:text-6xl @[480px]:font-light @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                          13th Decolonizing Conference
                        </h1>
                        <h2 className="text-white text-lg font-normal leading-normal @[480px]:text-xl @[480px]:font-normal @[480px]:leading-normal">
                          COLONIAL RUPTURES: UNMASKING ONGOING COLONIALITY, RESISTANCE, AND LIBERATORY POSSIBILITIES
                        </h2>
                        <p className="text-white/80 text-sm font-normal leading-normal @[480px]:text-base">
                          March 12-14, 2025 | OISE, University of Toronto
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Content Section */}
              <section id="why-now" className="py-10 md:py-16 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                  {/* SectionHeader */}
                  <div className="lg:col-span-2 animate-fade-in-up">
                    <h2 className="text-text-light dark:text-text-dark text-3xl md:text-4xl font-light leading-tight tracking-[-0.015em]">Why This Conference Now?</h2>
                    {/* Logo below heading */}
                    <div className="mt-6 flex justify-center">
                      <Image
                        src="/logotrans.png"
                        alt="CIARS logo"
                        width={220}
                        height={220}
                        className="w-44 h-44 object-contain"
                        priority
                      />
                    </div>
                  </div>
                  {/* BodyText */}
                  <div className="lg:col-span-3 space-y-4 animate-fade-in-up">
                    <p className="text-text-light/80 dark:text-text-dark/80 text-base font-normal leading-relaxed">
                      In a world grappling with the enduring legacies of colonialism, this conference provides a critical space for dialogue, reflection, and action. We convene to challenge the structures that perpetuate coloniality and to amplify the voices of resistance that forge paths toward liberatory futures. This gathering is a call to scholars, activists, artists, and community members to collectively unmask ongoing colonial ruptures and imagine possibilities for profound, sustainable change and regeneration.
                    </p>
                    {/* ButtonGroup */}
                    <div className="flex justify-stretch pt-4">
                      <div className="flex flex-1 gap-3 flex-wrap justify-start">
                        <a href="#call-for-abstracts" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-medium leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all">
                          <span className="truncate">Submit an Abstract</span>
                        </a>
                        <button type="button" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary/20 dark:bg-primary/30 text-text-light dark:text-text-dark text-base font-medium leading-normal tracking-[0.015em] hover:bg-primary/30 dark:hover:bg-primary/40 transition-all">
                          <span className="truncate">Register Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Partner Logos Banner */}
              <section id="partners" className="py-20 md:py-24 bg-background-light dark:bg-background-dark -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-24 xl:-mx-40">
                <div className="w-full">
                  <h3 className="text-center text-text-light dark:text-text-dark text-2xl font-light leading-tight tracking-[-0.015em] px-4 pb-12">
                    In Collaboration With
                  </h3>
                  <div className="relative w-full overflow-hidden mask-gradient">
                    <div className="flex animate-scroll">
                      {[...Array(2)].map((_, loopIndex) => (
                        <div key={loopIndex} className="flex items-center justify-around gap-16 px-12 flex-shrink-0">
                          {partners.map((partner) => (
                            <div key={`${partner.name}-${loopIndex}`} className="w-48 h-28 flex items-center justify-center rounded-lg p-4">
                              {partner.logo ? (
                                <Image
                                  src={partner.logo}
                                  alt={partner.alt}
                                  width={192}
                                  height={112}
                                  className="h-full w-auto object-contain"
                                  priority={loopIndex === 0}
                                />
                              ) : (
                                <span className="text-xs text-center font-medium text-gray-600 dark:text-gray-300">
                                  {partner.name}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Image Banner/Carousel Section */}
              <section id="gallery" className="py-10 md:py-16 animate-fade-in-up">
                <div className="w-full overflow-hidden">
                  <h3 className="text-center text-text-light dark:text-text-dark text-2xl font-light leading-tight tracking-[-0.015em] px-4 pb-8">From Our Past Gatherings</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
                    <div className="aspect-w-1 aspect-h-1">
                      <Image 
                        className="h-full w-full rounded-lg object-cover" 
                        alt="Attendees engaged in a vibrant discussion during a previous conference workshop." 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8ceV3j7ffMMRTOsRXH7CKTkuqVrh7U8eJzKqec0xwO1u6BX1CrO8UJzvE6tjOXjgY6Gd1dfqQmgMqFAnxmwVazA1CXSgFzd4Gkf27qv9M-Xk081LyhiUwDrtAxKwqaPfYjwzpkOx2iuPx2HIvhbeBp51spMvcGNIjA-0zej8ScsTO-uhcKvOJo4pgxfWWqp8D7R46nQ-CKq51Fi6PJDhYQUAHs8GP1GRqdSPGgoZOHKmxIcORR6zPz1VDIFmOxLBE5lO5tZozUmwf"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="aspect-w-1 aspect-h-1">
                      <Image 
                        className="h-full w-full rounded-lg object-cover" 
                        alt="A keynote speaker passionately addressing the audience at a past event." 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdh80r-Ak6lOVFKNacdXEqWgTbwI6fwL50tJsd2RsZWywxqaKx-JLMNpkqYeL8sYrRDMeEqyCglCp2SgcIp42MlIQ5UvLvNHRgKUs3aJ5WvUgA0TiqR_A1MprWcvBxW1aG8HFM8vj33l9b-AVCGm-UD8bSYaIWpyKvXYBrBULcDECrpqfa1-I0HKc-1kx_GisIBUYMykZ5ZWphGP9b771A-vvI89g4iDlcLPkpZQd3yY5-2vlnhUZryqqVJ5-A_UWTvZSFg6sO9KH_"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="aspect-w-1 aspect-h-1">
                      <Image 
                        className="h-full w-full rounded-lg object-cover" 
                        alt="Conference participants networking and sharing ideas during a coffee break." 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjOQ8mtyy84RyNzB7AP3GgSymNMBFae2lRr9r5kb10zVnSkn8BkwaUeClfmZMiWULjzW5jHGwSD4VrXfQ-xA18u_1PPA9nv-8SsZyC3m8T86LC_0OiGyDThYTFACb6cjlZx5i3ukgLbQt2GeEzEZsdZQii2jAM-uleOc7Q7oNasELgR3AXD6Eo4igdpd-59bNNGmVLyKCbE-lg0yM6ullDvS3F3RDPmzFM-TaGNhNulOol9O099Kp5wQhj8MXY6cWFREJ2-6hyw_Ye"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="aspect-w-1 aspect-h-1">
                      <Image 
                        className="h-full w-full rounded-lg object-cover" 
                        alt="A collaborative art piece created by attendees during a past conference." 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZTOWTR9gEBnInMs_XS0CVQAcHYPqKjtbDGqa4C-G50S8lT9vp5Csvs-V49k491_bkd9qqlHXLvkRiPmOOqsteqU0rysrXl5P0v-n3EAlf1dccwoDGgulILzydNQ04YpqXC_PlYJZM1o33jBJ827_t-NrruQiTxUZn4e7HQVAzg38wLSksagpHyeerASwDK6FtOR4ry35_cf_J_xwqPwLfA6XSOp4B1MLVDAsnPNq7slapWDSVlZWJSHF5DWs-FCGGq_wtRvnaeNxI"
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Conference Theme Section */}
              <section id="about" className="py-10 md:py-16 px-4">
                <div className="max-w-5xl mx-auto">
                  {/* Section Header */}
                  <div className="text-center mb-12 animate-fade-in-up">
                    <h2 className="text-text-light dark:text-text-dark text-3xl md:text-4xl font-light leading-tight tracking-[-0.015em] mb-4">
                      About the Conference
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                  </div>

                  {/* Conference Overview */}
                  <div className="space-y-8">
                    <div className="animate-fade-in-up">
                      <h3 className="text-text-light dark:text-text-dark text-2xl font-light leading-tight tracking-[-0.015em] mb-4">
                        What Conversations
                      </h3>
                      <div className="space-y-4 text-text-light/80 dark:text-text-dark/80 text-base font-normal leading-relaxed">
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
                    <div className="animate-fade-in-up bg-card-light dark:bg-card-dark rounded-xl p-8 border border-border-light dark:border-border-dark">
                      <h3 className="text-text-light dark:text-text-dark text-2xl font-light leading-tight tracking-[-0.015em] mb-4">
                        Defining Features
                      </h3>
                      <p className="text-text-light/80 dark:text-text-dark/80 text-base font-normal leading-relaxed">
                        As a defining feature, the conference calls for learners and community workers to reject performative intellectualism and politics and instead create communities and uphold academic mentorship - specifically holding each other up rather than tearing each other down. It is urgent for us to reject colonial binaries that promote &ldquo;thinking in hierarchies&rdquo;, eradicate toxicity and dehumanization and see education and social justice work as foundational to human liberation. Together, we aim to resist hate, violence, oppression and genocide within the corollary of colonialism by bridging the gaps between scholarship, activism and social politics.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call for Abstracts */}
              <section id="call-for-abstracts" className="py-24 md:py-32 px-4">
                <div className="max-w-2xl mx-auto">
                  {/* Header */}
                  <div className="text-center mb-20 animate-fade-in-up">
                    <p className="text-primary text-xs uppercase tracking-[0.2em] mb-8">
                      Call for Papers & Participation
                    </p>
                    <h2 className="text-text-light dark:text-text-dark text-4xl md:text-6xl font-light leading-tight tracking-tight mb-8">
                      Build liberatory futures with us
                    </h2>
                    <p className="text-text-light/70 dark:text-text-dark/70 text-lg leading-relaxed">
                      Building on the conference&rsquo;s commitment to de/anti-colonial praxis, we invite papers and creative contributions that examine the intersections of coloniality, resistance, and liberation across educational, cultural, and political contexts.
                    </p>
                  </div>

                  {/* Dot divider */}
                  <div className="flex justify-center gap-2 mb-20">
                    <div className="w-1 h-1 rounded-full bg-primary/30" />
                    <div className="w-1 h-1 rounded-full bg-primary/30" />
                    <div className="w-1 h-1 rounded-full bg-primary/30" />
                  </div>

                  {/* Guiding Questions */}
                  <div className="mb-20 animate-fade-in-up">
                    <h3 className="text-text-light dark:text-text-dark text-2xl font-light mb-8 text-center">
                      Guiding Questions
                    </h3>
                    <div className="space-y-6 text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                      <p>How can we build anti-colonial solidarities rooted in radical hope and futurity?</p>
                      <p>How do we deploy critical understandings and literacies of Land&mdash;and its earthly teachings of relationality, sharing, reciprocity, connection, and mutual interdependence&mdash;to subvert colonial hierarchies of schooling and education and foster social responsibility (see Dei, 2008)?</p>
                      <p>How do we reclaim our resistive subjectivities and continue our ancestral struggles for liberation and capacitate abolitionist politics?</p>
                      <p>What epistemic and political practices are imperative for futurities that free us from the &ldquo;clutches of coloniality&rdquo;?</p>
                      <p>How can we reassert control over our stories, identities, and lived experiences, while advancing critical scholarship to upend mental and intellectual enslavement?</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-16 bg-primary/20 mx-auto mb-20" />

                  {/* Submission Guidelines */}
                  <div className="mb-20 animate-fade-in-up">
                    <h3 className="text-text-light dark:text-text-dark text-2xl font-light mb-8 text-center">
                      Submission Guidelines
                    </h3>
                    <div className="space-y-8 text-text-light/80 dark:text-text-dark/80">
                      <div className="text-center">
                        <p className="text-text-light dark:text-text-dark font-medium mb-2">Abstract Length</p>
                        <p className="text-sm">250&ndash;300 words outlining purpose, method, and contribution</p>
                      </div>
                      <div className="text-center">
                        <p className="text-text-light dark:text-text-dark font-medium mb-2">Paper Length</p>
                        <p className="text-sm">Full papers (optional) up to 4,000 words</p>
                      </div>
                      <div className="text-center">
                        <p className="text-text-light dark:text-text-dark font-medium mb-2">Presentation Formats</p>
                        <p className="text-sm">Papers, panels, workshops, performances, dialogues, and community-engaged sessions</p>
                      </div>
                      <div className="text-center">
                        <p className="text-text-light dark:text-text-dark font-medium mb-2">Evaluation Criteria</p>
                        <p className="text-sm">Alignment with theme, originality, clarity, community accountability, and transformative potential</p>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-16 bg-primary/20 mx-auto mb-20" />

                  {/* Key Dates */}
                  <div className="mb-20 animate-fade-in-up text-center">
                    <h3 className="text-text-light dark:text-text-dark text-2xl font-light mb-8">
                      Key Dates
                    </h3>
                    <div className="space-y-4 text-text-light/80 dark:text-text-dark/80">
                      <p><span className="text-text-light dark:text-text-dark font-medium">Deadline:</span> January 12, 2025 at 11:59 PM EST</p>
                      <p><span className="text-text-light dark:text-text-dark font-medium">Notification:</span> February 10, 2025</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-16 bg-primary/20 mx-auto mb-20" />

                  {/* Submit */}
                  <div className="mb-20 animate-fade-in-up text-center">
                    <h3 className="text-text-light dark:text-text-dark text-2xl font-light mb-8">
                      How to Submit
                    </h3>
                    <p className="text-text-light/80 dark:text-text-dark/80 mb-6">
                      Send your abstract and supporting materials via email
                    </p>
                    <a href="mailto:ciars.conference@utoronto.ca" className="inline-block text-primary text-xl underline underline-offset-8 hover:text-primary/80 transition-colors">
                      ciars.conference@utoronto.ca
                    </a>
                  </div>

                  {/* Dot divider */}
                  <div className="flex justify-center gap-2 mb-20">
                    <div className="w-1 h-1 rounded-full bg-primary/30" />
                    <div className="w-1 h-1 rounded-full bg-primary/30" />
                    <div className="w-1 h-1 rounded-full bg-primary/30" />
                  </div>

                  {/* Accessibility */}
                  <div className="text-center animate-fade-in-up">
                    <p className="text-text-light/60 dark:text-text-dark/60 text-sm leading-relaxed max-w-lg mx-auto">
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
