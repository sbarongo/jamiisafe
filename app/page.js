"use client";

import React, { useEffect, useState } from "react";

function Counter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const steps = 40;
    const increment = Math.ceil(end / steps);
    const interval = window.setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        window.clearInterval(interval);
      }
      setCount(current);
    }, 30);

    return () => window.clearInterval(interval);
  }, [end]);

  return <span>{count.toLocaleString()}</span>;
}

export default function JamiiSafeWebsite() {
  const audience = [
    "Kids",
    "Teens & youth",
    "Parents & guardians",
    "Seniors & first-time internet users",
    "SMEs & informal business owners",
    "Community groups & NGOs",
  ];

  const programs = [
    {
      title: "Jamii Safe Conversations",
      subtitle: "Weekly Instagram & TikTok discussions",
      description:
        "Live conversations every Monday on topics like cyberbullying, scams, privacy, digital consent, and safer online habits.",
      audience: "For the wider public",
      accent: "from-sky-500 to-blue-600",
      badge: "Weekly Live",
      icon: "💬",
    },
    {
      title: "Jamii Safe Workshops",
      subtitle: "Training for schools, communities & businesses",
      description:
        "Practical workshops for kids, parents, youth, NGOs, community groups, SMEs, and business owners.",
      audience: "Learning for every stage",
      accent: "from-pink-500 to-fuchsia-600",
      badge: "Practical Training",
      icon: "🎓",
    },
    {
      title: "Jamii Safe Research",
      subtitle: "Insights on digital safety in Kenya",
      description:
        "Research and community-informed insights that highlight digital risks, literacy gaps, and emerging safety trends.",
      audience: "Evidence for action",
      accent: "from-violet-500 to-indigo-600",
      badge: "Local Insights",
      icon: "📊",
    },
    {
      title: "Jamii Safe Digital Clinics",
      subtitle: "Support for seniors & first-time internet users",
      description:
        "Hands-on digital safety support that helps seniors and first-time users navigate devices, apps, and online spaces safely.",
      audience: "Direct community support",
      accent: "from-orange-400 to-amber-500",
      badge: "Guided Support",
      icon: "🛠️",
    },
  ];

  const pillars = [
    {
      title: "Community Education",
      shortTitle: "Education",
      description: "Workshops, conversations, and digital clinics",
      outcome: "Helping people build safer online habits.",
      accent: "from-sky-400 to-blue-500",
    },
    {
      title: "Research & Insights",
      shortTitle: "Research",
      description: "Understanding risks affecting communities",
      outcome: "Generating local evidence for action.",
      accent: "from-pink-400 to-fuchsia-500",
    },
    {
      title: "Jamii Safe Research & Policy Advocacy",
      shortTitle: "Advocacy",
      description: "Turning insights into safer digital environments",
      outcome: "Shaping safer digital futures.",
      accent: "from-orange-400 to-amber-500",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Jamii Safe logo"
              className="h-12 w-auto rounded-xl object-contain"
            />
            <div>
              <p className="text-lg font-extrabold tracking-tight text-sky-300">Jamii Safe</p>
              <p className="text-xs text-slate-400">Digital safety for everyday Kenyans</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-sky-300">About</a>
            <a href="#serve" className="transition hover:text-sky-300">Who We Serve</a>
            <a href="#programs" className="transition hover:text-sky-300">Programs</a>
            <a
              href="https://iamsabrina.hashnode.dev"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-sky-300"
            >
              Research
            </a>
            <a href="#contact" className="transition hover:text-sky-300">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.22),transparent_30%),radial-gradient(circle_at_top_right,rgba(244,114,182,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.16),transparent_30%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]" />
          <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:42px_42px]" />
          <div className="absolute left-10 top-24 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute right-10 top-10 h-44 w-44 rounded-full bg-pink-500/20 blur-3xl" />
          <div className="absolute bottom-8 left-1/3 h-36 w-36 rounded-full bg-orange-400/15 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
            <div>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
                Safer digital lives for Kenyan communities.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Jamii Safe advances digital safety, security, and privacy through accessible education,
                awareness, research, and advocacy designed for everyday Kenyans.
              </p>

              <div className="mt-8 flex flex-wrap items-stretch gap-4">
                <a
                  href="#programs"
                  className="rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-950/40 transition hover:-translate-y-0.5"
                >
                  Explore Programs
                </a>
                <a
                  href="https://iamsabrina.hashnode.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-950/30 transition hover:-translate-y-0.5"
                >
                  Our Research
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl bg-gradient-to-r from-orange-400 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-950/30 transition hover:-translate-y-0.5"
                >
                  Get in Touch
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:items-stretch">
                <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 backdrop-blur">
                  <p className="text-lg font-black text-white">Community-first</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Built for everyday Kenyans</p>
                </div>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 backdrop-blur">
                  <p className="text-lg font-black text-white">Privacy & safety</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Security awareness that feels practical</p>
                </div>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 backdrop-blur">
                  <p className="text-lg font-black text-white">Local impact</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Education, research, and advocacy</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <div className="grid gap-4">
                  <div className="rounded-[1.75rem] border border-sky-300/15 bg-gradient-to-br from-sky-500/10 via-slate-900 to-slate-900 p-6">
                    <div className="mb-4 h-2 w-16 rounded-full bg-sky-400" />
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">Impact Focus</p>
                    <h3 className="mt-3 text-3xl font-black text-white">Safer Kids</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      Age-appropriate digital safety education that helps children build safer online habits early.
                    </p>
                  </div>

                  <div className="rounded-[1.75rem] border border-pink-300/15 bg-gradient-to-br from-pink-500/10 via-slate-900 to-slate-900 p-6">
                    <div className="mb-4 h-2 w-16 rounded-full bg-pink-400" />
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-200">Impact Focus</p>
                    <h3 className="mt-3 text-3xl font-black text-white">Safer Families</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      Practical guidance for parents and guardians to support safe, secure, and private digital experiences at home.
                    </p>
                  </div>

                  <div className="rounded-[1.75rem] border border-orange-300/15 bg-gradient-to-br from-orange-400/10 via-slate-900 to-slate-900 p-6">
                    <div className="mb-4 h-2 w-16 rounded-full bg-orange-400" />
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">Impact Focus</p>
                    <h3 className="mt-3 text-3xl font-black text-white">Safer Communities</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      Local awareness, digital resilience, and community-centered support that helps entire communities thrive online.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-md ring-1 ring-white/10 backdrop-blur lg:col-span-1">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">Who We Are</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white">Community-first by design</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                A community-first organization advancing digital safety, security, and privacy for everyday Kenyans through education, awareness, and advocacy.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:col-span-2">
              <div className="rounded-[2rem] border border-sky-300/20 bg-gradient-to-br from-sky-600 to-blue-700 p-8 text-white shadow-lg shadow-sky-950/30">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100">Mission</p>
                <p className="mt-4 text-lg leading-8">
                  To empower Kenyan communities with the knowledge and tools needed to stay safe, secure, and private in the digital world.
                </p>
              </div>
              <div className="rounded-[2rem] border border-pink-300/20 bg-gradient-to-br from-pink-500 to-orange-400 p-8 text-white shadow-lg shadow-pink-950/30">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-100">Vision</p>
                <p className="mt-4 text-lg leading-8">
                  A digitally safe Kenya where everyone can participate online with confidence and protection.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="serve" className="bg-gradient-to-b from-slate-950 to-slate-900 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Who We Serve</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
                Tailored support for every stage of digital life
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                We support all Kenyans with focused programs that meet the needs of families, learners, entrepreneurs, and community networks.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {audience.map((group) => (
                <div
                  key={group}
                  className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-950/20"
                >
                  <h3 className="text-lg font-bold text-white">{group}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Relevant guidance, awareness, and practical support for safer digital participation.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">Three Pillars of Impact</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white lg:text-4xl">
              How Jamii Safe creates change
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              A simple pathway from community learning to evidence and advocacy.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
            {pillars.map((pillar, index) => (
              <React.Fragment key={pillar.title}>
                <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-md ring-1 ring-white/10 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
                  <div className={`mb-5 h-2 w-20 rounded-full bg-gradient-to-r ${pillar.accent}`} />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {pillar.shortTitle}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-white">{pillar.title}</h3>
                  <p className="mt-4 text-base font-medium text-slate-200">{pillar.description}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{pillar.outcome}</p>
                </div>

                {index < pillars.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="flex items-center gap-3 text-slate-500">
                      <div className="h-px w-10 bg-gradient-to-r from-sky-400 via-pink-400 to-orange-400" />
                      <span className="text-2xl">→</span>
                      <div className="h-px w-10 bg-gradient-to-r from-sky-400 via-pink-400 to-orange-400" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        <section id="programs" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">Programs</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-white lg:text-4xl">
                  Four practical programs for safer digital communities
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  Jamii Safe delivers public awareness, practical learning, local research, and direct support through four focused programs that are easy to understand and easy to grow.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300 backdrop-blur">
                Designed for communities, families, schools, NGOs, SMEs, and first-time internet users.
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {programs.map((program) => (
                <div
                  key={program.title}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-lg shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className={`h-2 w-full bg-gradient-to-r ${program.accent}`} />
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                          {program.badge}
                        </p>
                        <h3 className="mt-4 text-2xl font-black text-white">{program.title}</h3>
                        <p className="mt-2 text-base font-medium text-slate-200">{program.subtitle}</p>
                      </div>
                      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${program.accent} text-2xl shadow-lg`}>
                        <span aria-hidden="true">{program.icon}</span>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-slate-300">{program.description}</p>

                    <div className="mt-6 flex items-center justify-between gap-4">
                      <p className="text-sm font-medium text-slate-400">{program.audience}</p>
                      <span className="text-sm font-semibold text-white">Learn more →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-sky-500/10 via-pink-500/10 to-orange-400/10 p-8 shadow-lg shadow-black/10 backdrop-blur">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Get Involved</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-white">Partner with Jamii Safe</h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  We welcome partnerships with schools, community groups, NGOs, businesses, and supporters who want to help build safer and more confident digital communities across Kenya.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <a
                  href="mailto:hello@jamiisafe.org"
                  className="rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-950/30 transition hover:-translate-y-0.5"
                >
                  Partner With Us
                </a>
                <a
                  href="#programs"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Explore Programs
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-600 via-blue-700 to-pink-500 p-8 text-white shadow-xl shadow-sky-950/30">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Our Impact</p>
              <h3 className="mt-3 text-3xl font-black tracking-tight">Growing safer digital communities</h3>
              <p className="mt-4 text-base leading-7 text-white/90">
                Through conversations, workshops, research, and digital clinics, Jamii Safe is helping more people across Kenya build safer and more confident digital lives.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-black/10 p-4">
                  <p className="text-2xl font-black"><Counter end={2500} />+</p>
                  <p className="mt-2 text-sm text-white/80">People reached through talks & workshops</p>
                </div>
                <div className="rounded-2xl bg-black/10 p-4">
                  <p className="text-2xl font-black"><Counter end={40} />+</p>
                  <p className="mt-2 text-sm text-white/80">Digital safety conversations hosted</p>
                </div>
                <div className="rounded-2xl bg-black/10 p-4">
                  <p className="text-2xl font-black"><Counter end={15} />+</p>
                  <p className="mt-2 text-sm text-white/80">Communities and groups supported</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-md ring-1 ring-white/10 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Contact</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white">Let’s build safer digital communities together</h2>
              <div className="mt-6 space-y-4 text-base text-slate-300">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a className="text-sky-300 hover:underline" href="mailto:hello@jamiisafe.org">
                    hello@jamiisafe.org
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Instagram:</span>{" "}
                  <a
                    className="text-sky-300 hover:underline"
                    href="https://instagram.com/jamiisafeke"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @jamiisafeke
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Research:</span>{" "}
                  <a
                    className="text-sky-300 hover:underline"
                    href="https://iamsabrina.hashnode.dev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    iamsabrina.hashnode.dev
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Jamii Safe. All rights reserved.</p>
          <p>Advancing digital safety, security, and privacy for everyday Kenyans.</p>
        </div>
      </footer>
    </div>
  );
}



