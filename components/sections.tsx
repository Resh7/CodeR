"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight, BadgeCheck, Boxes, Building2, CheckCircle2, CircleDollarSign,
  ClipboardCheck, Cog, Factory, Gauge, Layers3, Mail, MapPin, MessageCircle,
  Microscope, Phone, ShieldCheck, Sparkles, TimerReset, UsersRound, Wrench
} from "lucide-react";
import { Reveal } from "./reveal";

const services = [
  ["CNC Wire Cutting", "Complex profiles, intricate geometries and demanding tolerances produced with controlled wire EDM processes.", CrosshairIcon],
  ["Precision Machining", "High-accuracy machining for mission-critical parts, repeat production and engineered assemblies.", Gauge],
  ["Industrial Components", "Reliable made-to-drawing components for machines, production lines and plant maintenance.", Boxes],
  ["Tool Room Works", "Dies, fixtures, jigs, gauges and customized tool-room solutions for manufacturing operations.", Wrench],
  ["Custom Manufacturing", "Purpose-built manufacturing support for low-volume, specialized and technically demanding requirements.", Factory],
  ["Engineering Design", "Design and manufacturability support that improves performance, quality and production readiness.", Layers3],
  ["Machine Components", "Precision components for machine building, modernization, maintenance and industrial automation.", Cog],
  ["Prototype Development", "Rapid and disciplined development of functional prototypes before production investment.", Sparkles],
  ["Industrial Fabrication", "Durable fabricated assemblies, frames, supports and customized industrial structures.", Building2],
  ["Government Project Support", "Documentation-driven engineering support aligned with public-sector quality and delivery expectations.", ShieldCheck]
];

function CrosshairIcon(props:any){ return <Microscope {...props}/>; }

const approach = [
  ["01", "Understanding Requirements", "We study drawings, application conditions, tolerances, materials, quantities and delivery priorities before work begins."],
  ["02", "Engineering Planning", "Our team defines the manufacturing route, tooling, machine strategy, quality checkpoints and delivery schedule."],
  ["03", "Precision Manufacturing", "Components are produced through controlled processes using modern equipment and experienced technical supervision."],
  ["04", "Quality Inspection", "Critical dimensions, finishes and functional requirements are verified against approved specifications."],
  ["05", "Delivery", "Parts are protected, documented and dispatched through a coordinated delivery process."],
  ["06", "Customer Satisfaction", "We remain available for technical clarification, repeat requirements and continuous improvement."]
];

const reasons = [
  [BadgeCheck, "Certified Professionals"],
  [Building2, "Government Project Experience"],
  [Cog, "Latest CNC Technology"],
  [Microscope, "High Precision"],
  [TimerReset, "On-Time Delivery"],
  [ClipboardCheck, "Quality Assurance"],
  [UsersRound, "Experienced Team"],
  [CheckCircle2, "Customer Satisfaction"],
  [CircleDollarSign, "Competitive Pricing"]
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="container-premium grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-premium">
              <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85" alt="Precision engineer operating industrial equipment" className="h-[560px] w-full object-cover" />
            </div>
            <motion.div whileHover={{ y: -6 }} className="absolute -bottom-7 -right-4 max-w-[250px] rounded-3xl bg-navy p-6 text-white shadow-premium sm:right-8">
              <span className="text-xs font-bold uppercase tracking-[.18em] text-blue-300">Built around accuracy</span>
              <p className="mt-3 text-lg font-extrabold leading-snug">Precision is not a final check. It is built into every stage.</p>
            </motion.div>
          </div>
        </Reveal>
        <Reveal delay={.1}>
          <span className="section-kicker">About us</span>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.035em] text-navy sm:text-5xl">Engineering capability shaped by discipline, accuracy and accountability.</h2>
          <p className="mt-6 leading-8 text-slate-600">
            MOHANA SRI CNC TECHNICS is a precision engineering and industrial manufacturing company serving organizations that require dependable quality, close dimensional control and responsive technical support.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Our capabilities include CNC wire cutting, high-accuracy components, custom manufacturing, machine components, prototype development, industrial fabrication, engineering consultation and support for government projects. We combine practical engineering experience with a structured manufacturing approach to deliver components that are production-ready, traceable and fit for purpose.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Precision CNC Wire Cutting", "Custom Engineering Solutions", "Industrial & Machine Components", "Prototype to Production Support"].map(item => (
              <div key={item} className="flex items-center gap-3 font-bold text-navy"><CheckCircle2 className="text-blue-500" size={20}/>{item}</div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Approach() {
  return (
    <section id="approach" className="bg-navy py-24 text-white lg:py-32">
      <div className="container-premium">
        <Reveal className="max-w-3xl">
          <span className="section-kicker">Our approach</span>
          <h2 className="mt-4 text-4xl font-black tracking-[-.035em] sm:text-5xl">A controlled path from requirement to reliable delivery.</h2>
        </Reveal>
        <div className="relative mt-16">
          <div className="absolute left-[23px] top-4 h-[calc(100%-32px)] w-px bg-gradient-to-b from-blue-400 via-blue-400/45 to-transparent lg:left-1/2" />
          <div className="space-y-8">
            {approach.map(([num,title,desc], index) => (
              <Reveal key={title} delay={index * .04}>
                <div className={`relative grid gap-7 lg:grid-cols-2 ${index % 2 ? "" : ""}`}>
                  <div className={`pl-20 lg:pl-0 ${index % 2 ? "lg:col-start-2 lg:pl-16" : "lg:pr-16 lg:text-right"}`}>
                    <div className="glass rounded-3xl p-7 transition hover:-translate-y-1 hover:border-blue-300/40">
                      <span className="text-xs font-black tracking-[.2em] text-blue-300">STEP {num}</span>
                      <h3 className="mt-3 text-xl font-extrabold">{title}</h3>
                      <p className="mt-3 leading-7 text-white/62">{desc}</p>
                    </div>
                  </div>
                  <span className="absolute left-0 top-6 grid h-12 w-12 place-items-center rounded-full border border-blue-300/40 bg-blue-500 font-black shadow-glow lg:left-1/2 lg:-translate-x-1/2">{num}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-premium">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="section-kicker">Our services</span>
            <h2 className="mt-4 text-4xl font-black tracking-[-.035em] text-navy sm:text-5xl">Integrated engineering services for demanding industrial requirements.</h2>
          </div>
          <p className="max-w-md leading-7 text-slate-600">Every service, image, feature, brochure and call-to-action can be managed through the admin dashboard.</p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, desc, Icon]: any, index) => (
            <Reveal key={title} delay={(index % 3) * .06}>
              <motion.article whileHover={{ y: -8 }} className="premium-card group min-h-[285px] rounded-3xl p-7">
                <div className="flex items-start justify-between">
                  <span className="grid h-13 w-13 place-items-center rounded-2xl bg-blue-500/10 p-3 text-blue-500"><Icon size={27}/></span>
                  <ArrowUpRight className="text-slate-300 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-500"/>
                </div>
                <h3 className="mt-8 text-xl font-extrabold text-navy">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{desc}</p>
                <button className="mt-6 text-sm font-extrabold text-blue-600">Explore capability</button>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const items = [
    ["Projects","https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=82"],
    ["Machines","https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=82"],
    ["Finished Products","https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1000&q=82"],
    ["Workshop","https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=82"],
    ["Government Projects","https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1000&q=82"],
    ["Capabilities","https://images.unsplash.com/photo-1565439396-6c6d0b3fa7a1?auto=format&fit=crop&w=1000&q=82"]
  ];
  return (
    <section id="gallery" className="bg-white py-24 lg:py-32">
      <div className="container-premium">
        <Reveal className="text-center">
          <span className="section-kicker">Gallery</span>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-[-.035em] text-navy sm:text-5xl">A closer look at our engineering environment and capabilities.</h2>
        </Reveal>
        <div className="mt-14 grid auto-rows-[230px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([title,url], index) => (
            <Reveal key={title} className={index === 0 || index === 4 ? "md:row-span-2" : ""}>
              <motion.article whileHover="hover" className="group relative h-full overflow-hidden rounded-3xl bg-navy">
                <motion.img variants={{ hover: { scale: 1.07 } }} transition={{ duration: .6 }} src={url} alt={title} className="h-full w-full object-cover opacity-80"/>
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent"/>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
                  <div><span className="text-xs font-bold uppercase tracking-[.15em] text-blue-200">Gallery category</span><h3 className="mt-1 text-xl font-extrabold">{title}</h3></div>
                  <ArrowUpRight/>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-premium">
        <Reveal className="text-center">
          <span className="section-kicker">Why choose us</span>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-[-.035em] text-navy sm:text-5xl">Confidence built through capability, control and consistent delivery.</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {reasons.map(([Icon,title]:any,index)=>(
            <Reveal key={title} delay={(index%5)*.04}>
              <motion.div whileHover={{ y: -6 }} className="premium-card flex min-h-44 flex-col items-center justify-center rounded-3xl p-5 text-center">
                <Icon className="text-blue-500" size={30}/>
                <h3 className="mt-5 font-extrabold text-navy">{title}</h3>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CertificationsAndTestimonials() {
  return (
    <section className="overflow-hidden bg-navy py-24 text-white lg:py-32">
      <div className="container-premium grid gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="section-kicker">Certifications</span>
          <h2 className="mt-4 text-4xl font-black tracking-[-.035em]">Quality credentials, documentation and compliance readiness.</h2>
          <p className="mt-6 leading-8 text-white/65">Upload certificate images, supporting PDFs, descriptions and issuing-organization logos through the CMS.</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {["Quality Management", "Process Compliance", "Vendor Registration", "Government Eligibility"].map((title,index)=>(
              <motion.div key={title} whileHover={{ y:-5 }} className="glass rounded-3xl p-6">
                <ShieldCheck className="text-blue-300"/>
                <h3 className="mt-4 font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">Editable certificate details and downloadable documentation.</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={.1}>
          <span className="section-kicker">Client feedback</span>
          <div className="mt-5 rounded-[2rem] bg-white p-8 text-navy shadow-premium sm:p-10">
            <div className="text-5xl font-black text-blue-500">“</div>
            <blockquote className="mt-3 text-2xl font-bold leading-relaxed">The team demonstrated strong technical understanding, clear communication and dependable dimensional quality throughout the project.</blockquote>
            <div className="mt-8 border-t border-slate-200 pt-6">
              <strong>Industrial Project Client</strong>
              <span className="mt-1 block text-sm text-slate-500">Precision Components Division</span>
            </div>
          </div>
          <div className="mt-5 flex gap-4 overflow-hidden">
            {["Client 01","Client 02","Client 03","Client 04"].map(name=><div key={name} className="glass min-w-36 rounded-2xl px-5 py-4 text-center text-sm font-extrabold text-white/70">{name}</div>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const map = "https://maps.app.goo.gl/a1KaE4b6rRsCxa7t6";
  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="container-premium grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
        <Reveal>
          <span className="section-kicker">Contact us</span>
          <h2 className="mt-4 text-4xl font-black tracking-[-.035em] text-navy sm:text-5xl">Discuss your next precision engineering requirement.</h2>
          <p className="mt-6 leading-8 text-slate-600">Share your drawings, application details, quantity and delivery expectations. Our team will review your requirement and respond with the appropriate engineering approach.</p>
          <div className="mt-8 space-y-4">
            <a href="tel:+91 9701153351" className="premium-card flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-1"><Phone className="text-blue-500"/><div><span className="block text-xs font-bold uppercase tracking-[.15em] text-slate-400">Call now</span><strong>(+91) 97011 53351</strong></div></a>
            <a href="mailto:yaswanthkumar@gmail.com" className="premium-card flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-1"><Mail className="text-blue-500"/><div><span className="block text-xs font-bold uppercase tracking-[.15em] text-slate-400">Email</span><strong>yaswanthkumar@gmail.com</strong></div></a>
            <a href="https://wa.me/9701153351" className="premium-card flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-1"><MessageCircle className="text-blue-500"/><div><span className="block text-xs font-bold uppercase tracking-[.15em] text-slate-400">WhatsApp</span><strong>Start a conversation</strong></div></a>
            <a href={map} target="https://maps.app.goo.gl/a1KaE4b6rRsCxa7t6" rel="noreferrer" className="premium-card flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-1"><MapPin className="text-blue-500"/><div><span className="block text-xs font-bold uppercase tracking-[.15em] text-slate-400">Visit us</span><strong>Open in Google Maps</strong></div></a>
          </div>
        </Reveal>
        <Reveal delay={.1}>
          <div className="rounded-[2rem] bg-navy p-7 text-white shadow-premium sm:p-10">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[.18em] text-blue-300">Request a quote</span>
              <h3 className="mt-2 text-2xl font-extrabold">Tell us about your requirement</h3>
            </div>
            <form className="grid gap-5 sm:grid-cols-2">
              {["Full name","Company","Phone number","Email address"].map(x=><label key={x} className="text-sm font-bold text-white/70">{x}<input className="mt-2 w-full rounded-xl border border-white/12 bg-white/7 px-4 py-3.5 text-white outline-none transition focus:border-blue-400" /></label>)}
              <label className="text-sm font-bold text-white/70 sm:col-span-2">Service required<select className="mt-2 w-full rounded-xl border border-white/12 bg-[#0b213b] px-4 py-3.5 text-white outline-none"><option>CNC Wire Cutting</option><option>Precision Machining</option><option>Industrial Fabrication</option><option>Government Project Support</option></select></label>
              <label className="text-sm font-bold text-white/70 sm:col-span-2">Project details<textarea rows={5} className="mt-2 w-full rounded-xl border border-white/12 bg-white/7 px-4 py-3.5 text-white outline-none transition focus:border-blue-400"/></label>
              <button type="button" className="rounded-full bg-blue-500 px-7 py-4 font-extrabold shadow-glow transition hover:bg-blue-400 sm:col-span-2">Submit inquiry</button>
            </form>
          </div>
        </Reveal>
      </div>
      <div className="container-premium mt-16 overflow-hidden rounded-[2rem] bg-slate-100 p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div><span className="section-kicker">Head office</span><h3 className="mt-2 text-2xl font-extrabold text-navy">MOHANA SRI CNC TECHNICS</h3></div>
          <address className="max-w-xl not-italic leading-7 text-slate-600">H.No: 6, Akshay Enclave, 2-181/34-35/2, Shobana Colony, Balanagar, Hyderabad, Telangana 500042</address>
        </div>
      </div>
    </section>
  );
}
