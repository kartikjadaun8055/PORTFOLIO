import emailjs from "@emailjs/browser";
import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

emailjs.init("XWX-q1Z9K-80cL9yg");

export default function PortfolioWebsite() {
  const services = [
    {
      title: "Java & DSA",
      desc: "Strong focus on Java fundamentals, problem solving, data structures, and algorithms.",
    },
    {
      title: "MERN Stack Learning",
      desc: "Building skills in MongoDB, Express.js, React.js, and Node.js for full-stack development.",
    },
    {
      title: "Responsive Web Development",
      desc: "Creating modern websites that work smoothly on desktop, tablet, and Android devices.",
    },
    {
      title: "Frontend Development",
      desc: "Designing clean user interfaces with reusable components and mobile-first layouts.",
    },
    {
      title: "Backend Basics",
      desc: "Learning APIs, server-side logic, routing, and database integration step by step.",
    },
    {
      title: "Portfolio Website Setup",
      desc: "Personal branding websites with resume, contact links, skills, and future project showcase.",
    },
  ];

  const projects = [];

  const testimonials = [
    {
      name: "Rohit",
      role: "Startup Founder",
      text: "Excellent design sense and smooth communication. The portfolio and landing page looked premium and worked perfectly on mobile.",
    },
    {
      name: "Aisha Khan",
      role: "Product Manager",
      text: "Very clean UI, strong attention to spacing and responsiveness. The final site felt polished and professional.",
    },
    {
      name: "Neha Verma",
      role: "Freelance Client",
      text: "Fast delivery, modern design, and mobile-friendly implementation. Highly recommended for portfolio websites.",
    },
  ];

  const skills = [
    { name: "Java (DSA)", value: "90%" },
    { name: "MongoDB", value: "70%" },
    { name: "React.js", value: "75%" },
    { name: "Express.js", value: "68%" },
    { name: "Node.js", value: "72%" },
    { name: "Responsive Web Design", value: "85%" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus("");

  try {
    await addDoc(collection(db, "portfolioMessages"), {
      ...formData,
      ownerEmail: "kartikjadon9068@gmail.com",
      ownerPhone: "+91 9068105578",
      createdAt: serverTimestamp(),
    });

    await emailjs.send(
      "service_8eqjzpx",
      "template_7sa0vbp",
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
        reply_to: formData.email,
      }
    );

    setSubmitStatus("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    setSubmitStatus("Something went wrong.");
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b0b0d] text-white scroll-smooth">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0d]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="text-xl font-extrabold tracking-wide text-[#ff7a00] sm:text-2xl">
            Port<span className="text-white">folio</span>
          </a>

          <nav className="hidden items-center gap-5 text-sm font-medium text-white/80 md:flex lg:gap-7">
            <a href="#home" className="transition hover:text-[#ff7a00]">
              Home
            </a>
            <a href="#services" className="transition hover:text-[#ff7a00]">
              Services
            </a>
            <a href="#about" className="transition hover:text-[#ff7a00]">
              About
            </a>
            <a href="#portfolio" className="transition hover:text-[#ff7a00]">
              Portfolio
            </a>
            <a href="#contact" className="transition hover:text-[#ff7a00]">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-xl bg-[#ff7a00] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:scale-105 md:inline-flex"
            >
              Hire Me
            </a>

            <details className="relative md:hidden">
              <summary className="list-none cursor-pointer rounded-lg border border-white/20 px-3 py-2">
                ☰
              </summary>
              <div className="absolute right-0 mt-3 w-48 rounded-xl border border-white/10 bg-[#111114] p-4 shadow-xl">
                <a href="#home" className="block py-2 text-sm hover:text-[#ff7a00]">
                  Home
                </a>
                <a href="#services" className="block py-2 text-sm hover:text-[#ff7a00]">
                  Services
                </a>
                <a href="#about" className="block py-2 text-sm hover:text-[#ff7a00]">
                  About
                </a>
                <a href="#portfolio" className="block py-2 text-sm hover:text-[#ff7a00]">
                  Portfolio
                </a>
                <a href="#contact" className="block py-2 text-sm hover:text-[#ff7a00]">
                  Contact
                </a>
              </div>
            </details>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,0,0.22),transparent_28%),radial-gradient(circle_at_right,rgba(255,122,0,0.14),transparent_22%)]" />

          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
            <div className="relative z-10 order-2 lg:order-1">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#ff7a00]">
                Hi, I am Kartik Jadaun
              </p>

              <h1 className="max-w-2xl text-[clamp(2.25rem,6vw,5.25rem)] font-black leading-[1.05] tracking-tight">
                Software Engineer <span className="text-[#ff7a00]">in the Making</span>
              </h1>

              <p className="mt-6 max-w-xl text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/70">
                Java (DSA), MERN Stack learner, and aspiring software engineer. I am currently
                building my skills in MongoDB, React.js, Express.js, and Node.js while creating a
                strong foundation in problem solving and responsive web development.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#portfolio"
                  className="rounded-xl bg-[#ff7a00] px-6 py-3 font-semibold text-white transition hover:scale-105"
                >
                  View Portfolio
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-[#ff7a00] hover:text-[#ff7a00]"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  ["Fresher", "Current Status"],
                  ["Java + MERN", "Learning Path"],
                  ["Open", "Internship Ready"],
                ].map(([number, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur"
                  >
                    <div className="text-2xl font-extrabold text-[#ff7a00]">{number}</div>
                    <div className="mt-1 text-sm text-white/70">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-8 rounded-full bg-[#ff7a00]/15 blur-3xl" />
                <div className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
                <img
                  src="/kartik-photo.png"
                  alt="Kartik Jadaun profile"
                  className="relative z-10 mx-auto aspect-[4/5] w-[min(82vw,320px)] rounded-[32px] object-cover shadow-2xl shadow-black/60 sm:w-[340px] lg:w-[380px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff7a00]">
              What I Do
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              My Learning & Development Focus
            </h2>
            <p className="mt-4 text-white/70">
              Areas I am actively learning and improving to become a strong software engineer.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/20"
              >
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 leading-7 text-white/65">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-white/[0.02] py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:px-8 xl:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff7a00]">
                About Me
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Building a strong software engineering foundation
              </h2>
              <p className="mt-5 leading-8 text-white/70">
                I am a fresher focused on Java, DSA, and MERN stack development. My goal is to
                become a skilled software engineer by building a strong understanding of problem
                solving, frontend development, backend basics, and modern web technologies.
              </p>
              <p className="mt-4 leading-8 text-white/70">
                I am continuously improving my coding skills, working on responsive websites, and
                preparing for internships and real-world software development opportunities.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#111114] p-6 xl:p-8">
              <h3 className="text-2xl font-bold">Skills Overview</h3>
              <div className="mt-6 space-y-5">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-white/85">{skill.name}</span>
                      <span className="text-[#ff7a00]">{skill.value}</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/10">
                      <div
                        className="h-3 rounded-full bg-[#ff7a00]"
                        style={{ width: skill.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff7a00]">
              Portfolio
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">My Project Section</h2>
          </div>

          <div className="mt-12">
            {projects.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.03] p-10 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff7a00]">
                  Projects Coming Soon
                </p>
                <h3 className="mt-3 text-2xl font-bold">
                  I am currently building my first real-world projects
                </h3>
                <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/65">
                  Right now, I am focused on learning Java, DSA, and the MERN stack. As I complete
                  projects, I will add them here with live demos and code links.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-xl shadow-black/20"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm font-medium text-[#ff7a00]">{project.category}</p>
                      <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                      <p className="mt-3 text-white/65">
                        Clean visual design, strong layout balance, and premium dark-theme
                        presentation.
                      </p>
                      <button className="mt-5 rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold transition hover:border-[#ff7a00] hover:text-[#ff7a00]">
                        View Project
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="testimonials" className="bg-white/[0.02] py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff7a00]">
                Testimonials
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What Clients Say</h2>
              <p className="mt-4 text-white/70">
                This section can later be updated with recommendations, internship feedback, or
                mentor testimonials.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-3xl border border-white/10 bg-[#111114] p-7"
                >
                  <div className="mb-4 text-3xl text-[#ff7a00]">★★★★★</div>
                  <p className="leading-7 text-white/70">“{item.text}”</p>
                  <div className="mt-6 border-t border-white/10 pt-5">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm text-white/55">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02]">
            <div className="grid gap-10 p-6 sm:p-8 lg:p-12 xl:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff7a00]">
                  Contact Me
                </p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Send Me a Message</h2>
               

                <div className="mt-8 space-y-4 text-white/75">
                  <p>
                    <span className="font-semibold text-white">Email:</span> kartikjadon9068@gmail.com
                  </p>
                  <p>
                    <span className="font-semibold text-white">Location:</span> India
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="rounded-2xl border border-white/10 bg-[#0d0d10] px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-[#ff7a00]"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="rounded-2xl border border-white/10 bg-[#0d0d10] px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-[#ff7a00]"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="rounded-2xl border border-white/10 bg-[#0d0d10] px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-[#ff7a00]"
                />

                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="rounded-2xl border border-white/10 bg-[#0d0d10] px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-[#ff7a00]"
                />

                {submitStatus && (
                  <p className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80">
                    {submitStatus}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-fit rounded-xl bg-[#ff7a00] px-6 py-3 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#09090b]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center text-sm text-white/55 sm:px-6 md:flex-row md:text-left lg:px-8">
          <p>© 2026 Kartik Jadaun. All rights reserved.</p>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/kartikjadaun"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#ff7a00]"
            >
              LinkedIn
            </a>
            <a href="#portfolio" className="hover:text-[#ff7a00]">
              Projects
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}





