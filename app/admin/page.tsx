import { prisma } from "@/lib/prisma";
import { BarChart3, BriefcaseBusiness, Eye, Images, PlaySquare, Users } from "lucide-react";

export default async function Dashboard() {
  const [users, services, images] = await Promise.all([
    prisma.user.count(),
    prisma.service.count(),
    prisma.galleryItem.count({ where: { mediaType: "image" } })
  ]);
  const cards = [
    ["Total Users", users, Users],
    ["Images", images, Images],
    ["Videos", 0, PlaySquare],
    ["Projects", 0, BriefcaseBusiness],
    ["Services", services, BriefcaseBusiness],
    ["Visitors", "Analytics ready", Eye]
  ];
  return (
    <>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div><span className="section-kicker">Administration</span><h1 className="mt-2 text-3xl font-black text-navy">Dashboard overview</h1></div>
        <div className="rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-500 shadow-sm">Super Admin</div>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map(([label,value,Icon]:any)=>(
          <div key={label} className="premium-card rounded-3xl p-6">
            <div className="flex items-start justify-between"><div><span className="text-sm font-bold text-slate-500">{label}</span><strong className="mt-3 block text-3xl font-black text-navy">{value}</strong></div><span className="rounded-2xl bg-blue-500/10 p-3 text-blue-500"><Icon/></span></div>
          </div>
        ))}
      </div>
      <div className="mt-7 grid gap-5 xl:grid-cols-[1.3fr_.7fr]">
        <div className="premium-card rounded-3xl p-7"><div className="flex items-center gap-3"><BarChart3 className="text-blue-500"/><h2 className="text-xl font-extrabold text-navy">Website activity</h2></div><div className="mt-8 grid h-64 place-items-center rounded-2xl bg-slate-50 text-center text-slate-400">Connect Google Analytics or Plausible to display live visitor data.</div></div>
        <div className="premium-card rounded-3xl p-7"><h2 className="text-xl font-extrabold text-navy">CMS readiness</h2><div className="mt-6 space-y-4">{["Services API active","Authentication active","Role schema active","SEO foundation active","Media model active"].map(x=><div key={x} className="flex items-center justify-between border-b border-slate-100 pb-4 font-bold text-slate-600"><span>{x}</span><span className="h-2.5 w-2.5 rounded-full bg-green-500"/></div>)}</div></div>
      </div>
    </>
  );
}
