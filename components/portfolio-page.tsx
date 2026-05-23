"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Quote,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { MotionSection } from "@/components/motion-section";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { TypingHeadline } from "@/components/typing-headline";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  achievements,
  careerGoals,
  certifications,
  education,
  focusAreas,
  profile,
  projects,
  quickStats,
  skills
} from "@/lib/portfolio-data";
import type { LucideIcon } from "lucide-react";

export function PortfolioPage() {
  return (
    <main className="relative overflow-hidden">
      <ScrollProgress />
      <Navbar />
      <JsonLd />
      <Hero />
      <About />
      <Education />
      <Skills />
      <CareerGoals />
      <Projects />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-pharma-grid bg-[size:44px_44px] opacity-35" />
      <motion.div
        className="absolute left-1/2 top-24 -z-10 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl"
        animate={{ y: [0, 24, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-16 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <Badge className="mb-6">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            Recruiter-ready pharmacy portfolio
          </Badge>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-tight text-foreground sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <div className="mt-4 text-2xl font-semibold sm:text-3xl">
            <TypingHeadline />
          </div>
          <p className="mt-5 max-w-2xl text-balance text-lg leading-8 text-muted-foreground">
            A disciplined 6th semester B.Pharm student at JSS Academy of
            Technical Education, Noida, building a serious professional path in
            pharmacology, regulatory affairs, drug safety, and public
            healthcare.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className={buttonVariants()} href={profile.cv} download>
              <Download className="h-4 w-4" />
              Download CV
            </Link>
            <Link className={buttonVariants({ variant: "outline" })} href="#contact">
              Contact Me
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border/70 bg-background/72 p-4 backdrop-blur-xl"
              >
                <dt className="text-xs text-muted-foreground">{stat.label}</dt>
                <dd className="mt-1 text-sm font-semibold sm:text-base">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="premium-surface rounded-lg border border-border/70 p-3 shadow-premium">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted">
              <Image
                src={profile.portrait}
                alt="VIPIN professional portrait"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-5 left-4 right-4 rounded-lg border border-border/80 bg-background/88 p-4 shadow-premium backdrop-blur-xl">
            <p className="text-sm font-medium">Professional focus</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Drug safety, regulatory discipline, and patient-centered pharmacy
              practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase text-cyan-700 dark:text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-balance leading-7 text-muted-foreground">{text}</p>
    </div>
  );
}

function About() {
  return (
    <MotionSection id="about" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="About"
            title="A pharmacy student with a regulator's mindset."
            text="VIPIN is building a career around scientific clarity, disciplined learning, and medicine safety."
          />
        </div>
        <div className="grid gap-4">
          <Card className="hover:-translate-y-1 hover:shadow-premium">
            <CardHeader>
              <Quote className="h-6 w-6 text-cyan-600" />
              <CardTitle>Professional Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 leading-7 text-muted-foreground">
              <p>
                Currently in the 6th semester of Bachelor of Pharmacy, VIPIN is
                focused on understanding how medicines move from research and
                formulation to regulation, counseling, safety monitoring, and
                real patient outcomes.
              </p>
              <p>
                His long-term goal is to become a Drug Inspector and contribute
                to a healthcare system where quality, compliance, and public
                trust are treated as daily responsibilities.
              </p>
            </CardContent>
          </Card>
          <div className="grid gap-3 sm:grid-cols-2">
            {focusAreas.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-lg border border-border/70 bg-card/70 p-4"
              >
                <item.icon className="h-5 w-5 text-cyan-600" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function Education() {
  const Icon = education.icon;

  return (
    <MotionSection id="education" className="section-shell bg-muted/35">
      <SectionHeading
        eyebrow="Education"
        title="Academic foundation in pharmaceutical sciences."
        text="A focused undergraduate path aligned with drug safety, quality, regulation, and healthcare communication."
      />
      <Card className="mx-auto max-w-4xl hover:shadow-premium">
        <CardHeader className="flex flex-row items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-cyan-500/12 text-cyan-700 dark:text-cyan-300">
            <Icon className="h-6 w-6" />
          </span>
          <div>
            <CardTitle>{education.degree}</CardTitle>
            <p className="mt-2 text-muted-foreground">{education.institution}</p>
            <p className="text-sm text-muted-foreground">{education.university}</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Badge>{education.period}</Badge>
            <Badge>Graduating {profile.graduationYear}</Badge>
            <Badge>6th Semester</Badge>
          </div>
          <p className="mt-5 leading-7 text-muted-foreground">{education.detail}</p>
        </CardContent>
      </Card>
    </MotionSection>
  );
}

function Skills() {
  return (
    <MotionSection id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Balanced capability across pharmacy, communication, and tools."
        text="Built for entry-level pharma roles where learning speed, documentation, and professional presence matter."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {skills.map((group) => (
          <Card key={group.title} className="hover:-translate-y-1 hover:shadow-premium">
            <CardHeader>
              <group.icon className="h-7 w-7 text-cyan-600" />
              <CardTitle>{group.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {group.items.map((item, index) => (
                <Badge key={`${group.title}-${item}`}>{item}</Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </MotionSection>
  );
}

function CareerGoals() {
  return (
    <MotionSection id="goals" className="section-shell bg-muted/35">
      <SectionHeading
        eyebrow="Career Goals"
        title="A clear direction toward safer medicines and public trust."
        text="The portfolio positions VIPIN for internships, trainee roles, and future regulatory preparation."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {careerGoals.map((goal) => (
          <Card key={goal.title} className="hover:-translate-y-1 hover:shadow-premium">
            <CardHeader>
              <goal.icon className="h-7 w-7 text-cyan-600" />
              <CardTitle>{goal.title}</CardTitle>
            </CardHeader>
            <CardContent className="leading-7 text-muted-foreground">
              {goal.text}
            </CardContent>
          </Card>
        ))}
      </div>
    </MotionSection>
  );
}

function Projects() {
  return (
    <MotionSection id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Practical pharmacy work with real professional signals."
        text="Sample projects show initiative in drug safety, patient education, and structured healthcare documentation."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col hover:-translate-y-1 hover:shadow-premium">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-5">
              <p className="leading-7 text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Badge key={tool}>{tool}</Badge>
                ))}
              </div>
              <p className="mt-auto border-t pt-4 text-sm leading-6 text-muted-foreground">
                <span className="font-semibold text-foreground">Outcome: </span>
                {project.outcome}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </MotionSection>
  );
}

function Achievements() {
  return (
    <MotionSection id="achievements" className="section-shell bg-muted/35">
      <SectionHeading
        eyebrow="Achievements"
        title="Signals of consistency, readiness, and initiative."
        text="Realistic early-career achievements that support a motivated B.Pharm professional profile."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {achievements.map((achievement) => (
          <Card key={achievement.title} className="hover:-translate-y-1 hover:shadow-premium">
            <CardHeader>
              <achievement.icon className="h-7 w-7 text-cyan-600" />
              <CardTitle>{achievement.title}</CardTitle>
            </CardHeader>
            <CardContent className="leading-7 text-muted-foreground">
              {achievement.text}
            </CardContent>
          </Card>
        ))}
      </div>
    </MotionSection>
  );
}

function Certifications() {
  return (
    <MotionSection id="certifications" className="section-shell">
      <SectionHeading
        eyebrow="Certifications"
        title="Future credentials planned around pharma career direction."
        text="Placeholders are ready for certificates as VIPIN completes relevant courses and workshops."
      />
      <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
        {certifications.map((certification) => (
          <div
            key={certification}
            className="flex items-center justify-between rounded-lg border border-dashed border-border bg-card/70 p-4"
          >
            <span className="font-medium">{certification}</span>
            <Badge>Planned</Badge>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}

function Contact() {
  return (
    <MotionSection id="contact" className="section-shell bg-muted/35">
      <SectionHeading
        eyebrow="Contact"
        title="Open to internships, trainee roles, and professional conversations."
        text="A direct contact experience for recruiters, mentors, and pharmaceutical industry professionals."
      />
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Card>
          <CardHeader>
            <CardTitle>Professional Links</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            <ContactLink icon={Mail} label={profile.email} href={`mailto:${profile.email}`} />
            <ContactLink icon={Phone} label={profile.phone} href={`tel:${profile.phone.replaceAll(" ", "")}`} />
            <ContactLink icon={Linkedin} label="LinkedIn profile" href={profile.linkedIn} />
            <ContactLink icon={Github} label="GitHub profile" href={profile.github} />
            <ContactLink icon={MapPin} label={profile.location} href="#" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </MotionSection>
  );
}

function ContactLink({
  icon: Icon,
  label,
  href
}: {
  icon: LucideIcon;
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="flex items-center gap-3 rounded-md border border-border/70 p-3 text-sm transition hover:bg-accent"
    >
      <Icon className="h-4 w-4 text-cyan-600" />
      <span className="break-all">{label}</span>
    </Link>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/70 py-8">
      <div className="container flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {profile.name}. Pharmacy portfolio.</p>
        <p>Built for clarity, credibility, and recruiter confidence.</p>
      </div>
    </footer>
  );
}

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.shortHeadline,
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressCountry: "IN"
    },
    sameAs: [profile.linkedIn, profile.github],
    alumniOf: education.institution,
    knowsAbout: [
      "Pharmacology",
      "Regulatory Affairs",
      "Drug Safety",
      "Pharmacovigilance",
      "Pharmaceutical Industry"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
