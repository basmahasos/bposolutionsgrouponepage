import { motion } from "framer-motion";

const _motion = motion;

function Icon({ className = "" }) {
  return <span aria-hidden="true" className={className} />;
}

const ArrowRight = Icon;
const CheckCircle2 = Icon;
const Headset = Icon;
const DollarSign = Icon;
const TrendingUp = Icon;
const Layers = Icon;
const PhoneCall = Icon;
const Mail = Icon;
const MapPin = Icon;
const FileText = Icon;
const Search = Icon;
const CalendarCheck = Icon;
const UserCheck = Icon;
const ShieldCheck = Icon;
const Handshake = Icon;

function Card({ className = "", children, ...props }) {
  return (
    <div className={`bg-white border border-black/10 ${className}`} {...props}>
      {children}
    </div>
  );
}

function CardContent({ className = "", children, ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

function Button({ className = "", variant, type = "button", children, ...props }) {
  const base = "inline-flex items-center justify-center gap-2 transition-colors";
  const outline =
    variant === "outline" ? "border border-current bg-transparent" : "";

  return (
    <button type={type} className={`${base} ${outline} ${className}`} {...props}>
      {children}
    </button>
  );
}

const brand = {
  orange: "#FF861F",
  black: "#000000",
  darkGrey: "#4F4F53",
  grey: "#8D8E91",
  white: "#FFFFFF",
};

const proofPoints = ["No Upfront Cost", "No Employment Liability", "No Obligation", "Interview-Ready Candidates", "U.S. Managed", "Nearshore Talent"];

const services = [
  { icon: Headset, title: "Customer Support", copy: "Phone, chat, email, bilingual service, technical support, and help desk coverage." },
  { icon: DollarSign, title: "Accounting & Finance", copy: "Accounting, bookkeeping, AP, AR, billing, collections, finance support, and reporting roles." },
  { icon: Handshake, title: "Account Management", copy: "Account managers, customer success, retention, renewals, and client relationship support." },
  { icon: Layers, title: "Implementation", copy: "Implementation specialists, onboarding coordinators, project support, and client launch teams." },
];

const steps = [
  { icon: FileText, title: "Tell Us The Role", copy: "Send us a job description or explain the position, schedule, tools, and outcomes you need." },
  { icon: Search, title: "We Recruit", copy: "Our recruiting team sources, screens, and evaluates qualified nearshore candidates." },
  { icon: CalendarCheck, title: "We Set Up Interviews", copy: "Meet pre-qualified professionals selected specifically for your business and role requirements." },
  { icon: UserCheck, title: "You Choose. We Employ.", copy: "Once you select a candidate, we handle onboarding, payroll, HR, compliance, and support." },
];

const benefits = [
  { title: "No Employment Liability", copy: "We employ and manage the team member, reducing your administrative burden and risk." },
  { title: "No Upfront Cost", copy: "Review qualified candidates before making a commitment." },
  { title: "No Obligation", copy: "Interview candidates and evaluate talent without pressure." },
  { title: "Performance-Based Staffing", copy: "We only succeed when we place the right people into your operation." },
];

const roles = [
  "Accounting Specialists",
  "Finance Support Analysts",
  "Bookkeepers",
  "Accounts Payable Specialists",
  "Accounts Receivable Specialists",
  "Billing & Collections Specialists",
  "Account Managers",
  "Customer Success Managers",
  "Client Relationship Managers",
  "Retention Specialists",
  "Implementation Specialists",
  "Onboarding Coordinators",
  "Project Coordinators",
  "Customer Support Representatives",
  "Administrative Assistants",
  "Executive Assistants",
  "Sales Development Representatives",
  "Lead Generation Specialists",
  "Operations Coordinators",
  "Virtual Assistants",
  "Back Office Support",
];

function DotPattern({ className = "", variant = "light" }) {
  const dots = Array.from({ length: 108 });
  const fill = variant === "orange" ? brand.orange : variant === "dark" ? "#2C2C2F" : "#D9D9D9";
  return (
    <div className={`grid absolute grid-cols-9 gap-2 pointer-events-none ${className}`}>
      {dots.map((_, i) => (
        <span
          key={i}
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: i % 8 === 0 ? brand.orange : fill, opacity: i % 7 === 0 ? 0.32 : 0.9 }}
        />
      ))}
    </div>
  );
}

function BpoLogo({ invert = false }) {
  return (
    <div className="leading-none">
      <div className="font-black tracking-[-0.08em]" style={{ fontSize: 44, color: invert ? brand.white : brand.black }}>BPO</div>
      <div className="-mt-1 text-[10px] font-black tracking-[-0.03em]" style={{ color: invert ? brand.white : brand.darkGrey }}>
        S<span style={{ color: brand.orange }}>$</span>LUTIONS GROUP
      </div>
    </div>
  );
}

export default function OutsourceStaffingWebsite() {
  return (
    <div className="min-h-screen bg-white font-[Montserrat,Arial,sans-serif] text-black">
      <header className="sticky top-0 z-50 border-b backdrop-blur-xl border-black/10 bg-white/95">
        <div className="flex justify-between items-center px-6 py-5 mx-auto max-w-7xl">
          <BpoLogo />
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#4F4F53] md:flex">
            <a href="#offer" className="hover:text-black">Offer</a>
            <a href="#process" className="hover:text-black">Process</a>
            <a href="#roles" className="hover:text-black">Roles</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
          <Button className="rounded-none bg-[#FF861F] px-6 font-black text-black hover:bg-[#f47b13]">
            Submit a Role
          </Button>
        </div>
      </header>

      <main>
        <section className="overflow-hidden relative text-white bg-black">
          <DotPattern className="right-[-24px] top-8 rotate-12" variant="dark" />
          <DotPattern className="bottom-[-72px] left-[-36px] opacity-35" variant="orange" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.08fr_0.92fr] lg:py-32">
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="mb-8 h-1 w-11 bg-[#FF861F]" />
              <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-[#FF861F]">Performance-Based Outsource Staffing</p>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.93] tracking-[-0.06em] md:text-7xl">
                Give us a role. We'll set up interviews.
              </h1>
              <p className="mt-7 max-w-2xl text-xl font-black leading-8 text-white">
                No upfront cost. No employment liability. No obligation.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/72">
                We recruit, screen, and present qualified nearshore candidates for accounting, finance, account management, implementation, customer support, administration, sales, operations, and back-office roles. You interview. You choose. We handle the employment.
              </p>
              <div className="flex flex-col gap-4 mt-9 sm:flex-row">
                <Button className="rounded-none bg-[#FF861F] px-8 py-6 text-base font-black text-black hover:bg-[#f47b13]">
                  Schedule a Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="px-8 py-6 text-base font-black text-white bg-transparent rounded-none border-white/35 hover:bg-white hover:text-black">
                  Submit a Job Description
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.1 }} className="relative">
              <Card className="relative overflow-hidden rounded-[26px] border-0 bg-[#4F4F53] text-white shadow-2xl">
                <CardContent className="p-0">
                  <div className="relative min-h-[500px] p-8">
                    <DotPattern className="top-6 right-6" variant="orange" />
                    <div className="flex relative z-10 justify-between items-start">
                      <BpoLogo invert />
                      <div className="bg-[#FF861F] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-black">No Obligation</div>
                    </div>
                    <div className="relative z-10 mt-28 max-w-md">
                      <p className="text-sm font-black uppercase tracking-[0.22em] text-[#FF861F]">Candidate Pipeline</p>
                      <h2 className="mt-4 text-4xl font-black tracking-[-0.045em]">Role submitted → candidates screened → interviews scheduled.</h2>
                    </div>
                    <div className="grid relative z-10 gap-3 mt-10">
                      {["No recruiting fee before results", "No direct employee burden", "No pressure to hire", "Managed payroll, HR, and support"].map((item) => (
                        <div key={item} className="flex gap-3 items-center p-4 border border-white/15 bg-black/30">
                          <CheckCircle2 className="h-5 w-5 flex-none text-[#FF861F]" />
                          <span className="text-sm font-bold text-white/85">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-8 bg-white border-b border-black/10">
          <div className="grid gap-3 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-6">
            {proofPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm font-black text-[#4F4F53]">
                <CheckCircle2 className="h-5 w-5 flex-none text-[#FF861F]" />
                {point}
              </div>
            ))}
          </div>
        </section>

        <section id="offer" className="overflow-hidden relative px-6 py-24 mx-auto max-w-7xl">
          <DotPattern className="right-10 top-16 opacity-25" />
          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="mb-5 h-1 w-10 bg-[#FF861F]" />
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8D8E91]">The Offer</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] md:text-6xl">Stop paying recruiters before you see results.</h2>
              <p className="mt-6 text-lg leading-8 text-[#4F4F53]">
                Traditional staffing firms charge fees before you know whether a candidate is the right fit. BPO Solutions Group operates differently: give us a role and we'll source, screen, and present qualified candidates for interview.
              </p>
              <p className="mt-4 text-lg font-black leading-8 text-black">You only move forward when you find the right fit.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="bg-white rounded-none shadow-sm border-black/10">
                  <CardContent className="p-7">
                    <ShieldCheck className="h-9 w-9 text-[#FF861F]" />
                    <h3 className="mt-7 text-2xl font-black tracking-[-0.035em]">{benefit.title}</h3>
                    <p className="mt-3 leading-7 text-[#4F4F53]">{benefit.copy}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-24 text-white bg-black">
          <div className="px-6 mx-auto max-w-7xl">
            <div className="mb-14 max-w-3xl">
              <div className="mb-5 h-1 w-10 bg-[#FF861F]" />
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#FF861F]">How It Works</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] md:text-6xl">Give us a role. We handle the rest.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-4">
              {steps.map(({ icon: _Icon, title, copy }, index) => (
                <div key={title} className="border border-white/15 bg-[#4F4F53]/45 p-7">
                  <div className="flex justify-between items-center">
                    <div className="text-5xl font-black text-[#FF861F]">0{index + 1}</div>
                    {_Icon({ className: "h-9 w-9 text-[#FF861F]" })}
                  </div>
                  <h3 className="mt-10 text-2xl font-black leading-7 tracking-[-0.03em]">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/65">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="roles" className="relative bg-[#F5F5F5] py-24 text-black">
          <DotPattern className="top-8 left-8 opacity-20" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-5 h-1 w-10 bg-[#FF861F]" />
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8D8E91]">Roles We Fill</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] md:text-6xl">Interview-ready candidates for your highest-priority roles.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {roles.map((role) => (
                <div key={role} className="flex gap-3 items-center p-4 bg-white shadow-sm">
                  <CheckCircle2 className="h-5 w-5 flex-none text-[#FF861F]" />
                  <span className="font-bold text-[#4F4F53]">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="px-6 py-24 mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 h-1 w-10 bg-[#FF861F]" />
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8D8E91]">Managed Support</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] md:text-6xl">Accounting. Finance. Account Management. Implementation. Scale.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {services.map(({ icon: _Icon, title, copy }) => (
              <Card key={title} className="bg-white rounded-none shadow-sm border-black/10">
                <CardContent className="p-7">
                  {_Icon({ className: "h-10 w-10 stroke-[1.5] text-[#FF861F]" })}
                  <h3 className="mt-8 text-2xl font-black tracking-[-0.035em]">{title}</h3>
                  <p className="mt-3 leading-7 text-[#4F4F53]">{copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#FF861F] px-6 py-24 text-black">
          <DotPattern className="right-[-20px] top-[-40px] opacity-45" />
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-black/65">Ready To Review Candidates?</p>
              <h2 className="max-w-4xl text-4xl font-black tracking-[-0.05em] md:text-6xl">Give us a role. We'll build the pipeline. You decide who joins your team.</h2>
              <div className="grid gap-2 mt-7 text-2xl font-black md:grid-cols-3">
                <div>No Upfront Cost.</div>
                <div>No Employment Liability.</div>
                <div>No Obligation.</div>
              </div>
            </div>
            <Button className="rounded-none bg-black px-9 py-7 text-base font-black text-white hover:bg-[#4F4F53]">
              Schedule a Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#4F4F53] px-6 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <BpoLogo invert />
            <p className="mt-5 max-w-xl text-white/65">Performance-Based Outsource Staffing. Recruit. Interview. Hire. Scale.</p>
          </div>
          <div className="space-y-3 text-sm font-medium text-white/75">
            <div className="flex gap-3 items-center"><PhoneCall className="h-4 w-4 text-[#FF861F]" /> Schedule a discovery call</div>
            <div className="flex gap-3 items-center"><Mail className="h-4 w-4 text-[#FF861F]" /> info@bposolutionsgroup.com</div>
            <div className="flex gap-3 items-center"><MapPin className="h-4 w-4 text-[#FF861F]" /> U.S. managed • Mexico nearshore teams</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
