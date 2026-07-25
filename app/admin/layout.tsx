import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { AdminSidebar } from "@/components/admin-sidebar";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  return (
    <div className="min-h-screen bg-[#f3f6f9]">
      <AdminSidebar />
      <main className="min-h-screen p-5 lg:ml-72 lg:p-10">{children}</main>
    </div>
  );
}
