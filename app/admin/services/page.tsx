"use client";

import { useEffect, useState } from "react";
import { GripVertical, Pencil, Plus, Trash2 } from "lucide-react";

type Service = { id:string; title:string; slug:string; description:string; published:boolean };

export default function ServicesAdmin() {
  const [services,setServices] = useState<Service[]>([]);
  const [loading,setLoading] = useState(true);
  async function load(){ const response = await fetch("/api/services"); setServices(await response.json()); setLoading(false); }
  useEffect(()=>{ load(); },[]);
  async function remove(id:string){
    if(!confirm("Delete this service?")) return;
    await fetch(`/api/services/${id}`,{method:"DELETE"});
    setServices(items=>items.filter(x=>x.id!==id));
  }
  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div><span className="section-kicker">CMS</span><h1 className="mt-2 text-3xl font-black text-navy">Services</h1><p className="mt-2 text-slate-500">Manage service cards, content, images, logos, brochures and display order.</p></div>
        <button className="flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-extrabold text-white shadow-glow"><Plus size={19}/>Add service</button>
      </div>
      <div className="premium-card mt-8 overflow-hidden rounded-3xl">
        <div className="grid grid-cols-[36px_1fr_110px_90px] border-b border-slate-100 px-6 py-4 text-xs font-black uppercase tracking-[.12em] text-slate-400"><span></span><span>Service</span><span>Status</span><span>Actions</span></div>
        {loading ? <p className="p-8 text-slate-500">Loading services...</p> : services.map(service=>(
          <div key={service.id} className="grid grid-cols-[36px_1fr_110px_90px] items-center border-b border-slate-100 px-6 py-5 last:border-0">
            <GripVertical className="cursor-grab text-slate-300"/>
            <div><strong className="text-navy">{service.title}</strong><p className="mt-1 line-clamp-1 text-sm text-slate-500">{service.description}</p></div>
            <span className={`w-fit rounded-full px-3 py-1 text-xs font-extrabold ${service.published?"bg-green-100 text-green-700":"bg-slate-100 text-slate-500"}`}>{service.published?"Published":"Draft"}</span>
            <div className="flex gap-2"><button aria-label="Edit" className="rounded-lg bg-slate-100 p-2 text-slate-500"><Pencil size={17}/></button><button onClick={()=>remove(service.id)} aria-label="Delete" className="rounded-lg bg-red-50 p-2 text-red-500"><Trash2 size={17}/></button></div>
          </div>
        ))}
      </div>
    </>
  );
}
