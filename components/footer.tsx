import Link from "next/link";
import { ArrowUp, Linkedin, Mail, MapPin, Youtube } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-[#030d19] text-white">
      <div className="container-premium grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div><Logo/><p className="mt-6 leading-7 text-white/55">Precision CNC wire cutting, industrial manufacturing and engineering solutions built around accuracy, reliability and professional execution.</p></div>
        <div><h3 className="font-extrabold">Quick Links</h3><div className="mt-5 space-y-3 text-white/55"><Link className="block hover:text-white" href="#about">About Us</Link><Link className="block hover:text-white" href="#approach">Our Approach</Link><Link className="block hover:text-white" href="#services">Services</Link><Link className="block hover:text-white" href="#gallery">Gallery</Link></div></div>
        <div><h3 className="font-extrabold">Contact</h3><div className="mt-5 space-y-4 text-white/55"><p className="flex gap-3"><MapPin size={19} className="shrink-0 text-blue-400"/>Balanagar, Hyderabad, Telangana 500042</p><p className="flex gap-3"><Mail size={19} className="text-blue-400"/>info@mohanasricnctechnics.com</p></div></div>
        <div><h3 className="font-extrabold">Engineering Updates</h3><p className="mt-5 text-white/55">Receive company, capability and project updates.</p><div className="mt-4 flex"><input aria-label="Email for newsletter" placeholder="Your email" className="min-w-0 flex-1 rounded-l-xl bg-white/8 px-4 outline-none"/><button className="rounded-r-xl bg-blue-500 px-4 py-3 font-bold">Join</button></div><div className="mt-5 flex gap-3"><Linkedin/><Youtube/></div></div>
      </div>
      <div className="border-t border-white/8"><div className="container-premium flex flex-col gap-4 py-6 text-sm text-white/42 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 MOHANA SRI CNC TECHNICS. All rights reserved.</p><div className="flex gap-5"><Link href="#">Privacy Policy</Link><Link href="#">Terms</Link><Link href="#home" aria-label="Back to top"><ArrowUp/></Link></div></div></div>
    </footer>
  );
}
