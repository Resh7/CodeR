"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import {
  BarChart3, BookOpenText, BriefcaseBusiness, Building2, FileBadge, FolderOpen,
  Images, LogOut, MessageSquareQuote, Settings, Users
} from "lucide-react";
import { Logo } from "./logo";

const items = [
  ["Dashboard", "/admin", BarChart3],
  ["Users", "/admin/users", Users],
  ["Gallery", "/admin/gallery", Images],
  ["Services", "/admin/services", BriefcaseBusiness],
  ["Projects", "/admin/projects", Building2],
  ["Testimonials", "/admin/testimonials", MessageSquareQuote],
  ["Clients", "/admin/clients", BookOpenText],
  ["Certificates", "/admin/certificates", FileBadge],
  ["Website Content", "/admin/content", FolderOpen],
  ["Media Library", "/admin/media", Images],
  ["Settings", "/admin/settings", Settings]
];

export function AdminSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-72 flex-col bg-navy p-6 text-white lg:flex">
      <Logo />
      <nav className="mt-10 flex-1 space-y-1 overflow-y-auto">
        {items.map(([label,href,Icon]:any)=><Link key={label} href={href} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-white/60 transition hover:bg-white/8 hover:text-white"><Icon size={19}/>{label}</Link>)}
      </nav>
      <button onClick={()=>signOut({callbackUrl:"/login"})} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-white/60 hover:bg-white/8 hover:text-white"><LogOut size={19}/>Logout</button>
    </aside>
  );
}
