import { Plus, Search, SlidersHorizontal } from "lucide-react";

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div><span className="section-kicker">CMS</span><h1 className="mt-2 text-3xl font-black text-navy">Gallery</h1><p className="mt-2 max-w-2xl text-slate-500">Upload images and videos, organize categories, edit metadata and reorder media.</p></div>
        <button className="flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-extrabold text-white shadow-glow"><Plus size={19}/>Add new</button>
      </div>
      <div className="premium-card mt-8 rounded-3xl p-6">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex flex-1 items-center rounded-xl border border-slate-200 px-4"><Search size={18} className="text-slate-400"/><input placeholder="Search gallery..." className="w-full bg-transparent px-3 py-3 outline-none"/></div>
          <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-bold text-slate-600"><SlidersHorizontal size={18}/>Filters</button>
        </div>
        <div className="mt-6 grid min-h-80 place-items-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 text-center">
          <div><h2 className="text-xl font-extrabold text-navy">Gallery manager ready</h2><p className="mt-2 max-w-md text-slate-500">Connect this screen to the included Prisma model and protected API pattern to enable full CRUD operations.</p></div>
        </div>
      </div>
    </>
  );
}
