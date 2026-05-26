import {
  Award,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  ClipboardCheck,
  FileCheck2,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  LineChart,
  Mail,
  MapPin,
  Microscope,
  Phone,
  ShieldCheck,
  Target,
  UsersRound
} from "lucide-react";

export const profile = {
  name: "VIPIN",
  headline:
    "B.Pharm | Pharma Enthusiast | Healthcare Professional",
  shortHeadline: "B.Pharm ",
  email: "Vipn22nov@gmail.com",
  phone: "+91 8826005789",
  location: "Noida, India",
  linkedIn:
    "https://www.linkedin.com/in/vipin-prajapati-5a11a0275?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  github: "https://github.com/VipinPrajapati22",
  cv: "/Vipin-CV.pdf",
  portrait: "/assets/vipin-portrait.png",
  graduationYear: "2027"
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const quickStats = [
  { label: "Graduation", value: "2027" },
  { label: "Focus", value: "Data Analyst" },
  { label: "Track", value: "Regulatory" }
];

export const skills = [
  {
    title: "Pharma Skills",
    icon: FlaskConical,
    items: [
      "Pharmacovigilance",
      "Inventory tracking",
      "Healthcare Data Handling",
      "Pharmaceutical Chemistry",
      "Clinical Data Analyst",
      "Pharmacovigilance"
    ]
  },
  {
    title: "Professional Skills",
    icon: UsersRound,
    items: [
      "Communication",
      "Data Handling",
      "Documentation",
      "Problem Solving",
      "Teamwork"
    ]
  },
  {
    title: "Technical Skills",
    icon: LineChart,
    items: [
      "Microsoft Excel (Data Entry, Pivot Tables, Reports)",
      "Microsoft Word (Documentation, Formatting)",
      "Power BI, SQL ",
      "Research",
      "Presentation Skills",
      "Internet Research",
      "AI Tools",
      "Basic Data Handling"
    ]
  }
];

export const projects = [
  {
    title: "Drug Interaction Awareness System",
    description:
      "Designed a structured awareness concept that helps patients identify common medicine-food and medicine-medicine interaction risks before routine use.",
    tools: ["Pharmacology references", "MS Excel", "Patient education flow"],
    outcome:
      "Created a practical decision guide for safer self-medication conversations and pharmacist-led counseling."
  },
  {
    title: "Pharmacovigilance Reporting Dashboard",
    description:
      "Built a sample adverse drug reaction reporting framework for capturing suspected reactions, severity, causality notes, and follow-up status.",
    tools: ["Excel dashboard", "ADR forms", "WHO-UMC basics"],
    outcome:
      "Improved understanding of signal documentation, case completeness, and drug safety communication."
  },
  {
    title: "Community Health Awareness Campaign",
    description:
      "Planned a public-facing campaign around responsible antibiotic use, medication adherence, and the role of pharmacists in primary care.",
    tools: ["Presentation design", "Public speaking", "Health literacy"],
    outcome:
      "Produced concise counseling material tailored for non-technical audiences and local community settings."
  }
];

export const achievements = [
  {
    icon: Award,
    title: "Academic Consistency",
    text: "Maintained a disciplined B.Pharm learning rhythm across core pharmaceutical science subjects."
  },
  {
    icon: ClipboardCheck,
    title: "Documentation Focus",
    text: "Practiced structured academic notes, lab observations, and presentation-ready summaries."
  },
  {
    icon: HeartPulse,
    title: "Healthcare Communication",
    text: "Developed clear patient-facing communication for awareness topics and counseling scenarios."
  },
  {
    icon: BadgeCheck,
    title: "Professional Readiness",
    text: "Actively preparing for interviews, regulatory roles, Data ."
  }
];

export const careerGoals = [
 
  {
    icon: HeartPulse,
    title: "Serve Public Healthcare",
    text: "Contribute to safer medicine use, better awareness, and more reliable healthcare delivery."
  },
  {
    icon: BriefcaseBusiness,
    title: "Enter the Pharmaceutical Industry",
    text: "Grow through quality, regulatory affairs, pharmacovigilance, and healthcare analysis roles."
  },
  {
    icon: FileCheck2,
    title: "Ensure Drug Quality",
    text: "Support systems that keep medicines safe, compliant, traceable, and patient-centered."
  }
];

export const certifications = [
  "Pharmacovigilance Fundamentals",
  "Regulatory Affairs Basics",
  "Healthcare Analysis",
  "Clinical Data Analyst"
];

export const education = {
  institution: "JSS Academy of Technical Education, Noida",
  university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
  degree: "Bachelor of Pharmacy",
  period: "2023 - 2027",
  detail:
    "Focused on pharmaceutical sciences, Pharmacovigilance, chemistry, Clinical Data Associate, and Healthcare Analysis.",
  icon: GraduationCap
};

export const focusAreas = [
  { icon: Microscope, label: "Pharmacovigilance" },
  { icon: ShieldCheck, label: "Regulatory Affairs" },
  { icon: HeartPulse, label: "Clinical Data Associate" },
  { icon: BookOpen, label: "Healthcare Analysis" },
  { icon: Target, label: "Data Analyst" },
  { icon: MapPin, label: "Noida, India" },
  { icon: Phone, label: "+91 **********" },
  { icon: Mail, label: "Open to opportunities" }
];
