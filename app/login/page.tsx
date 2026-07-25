"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LockKeyhole, User } from "lucide-react";
import { Logo } from "@/components/logo";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const data = new FormData(event.currentTarget);
    const result = await signIn("credentials", {
      username: data.get("username"),
      password: data.get("password"),
      redirect: false
    });
    setLoading(false);
    if (result?.error) return setError("Invalid username or password.");
    router.push("/admin");
  }

  return (
    <main className="grid min-h-screen place-items-center bg-navy px-5">
      <div className="grid-noise absolute inset-0 opacity-20"/>
      <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/7 p-8 text-white shadow-premium backdrop-blur-xl">
        <Logo />
        <h1 className="mt-10 text-3xl font-black">Admin sign in</h1>
        <p className="mt-2 text-white/55">Manage services, media, users and every website section.</p>
        <form onSubmit={submit} className="mt-8 space-y-5">
          <label className="block text-sm font-bold text-white/70">Username<div className="mt-2 flex items-center rounded-xl border border-white/12 bg-white/7 px-4"><User size={18} className="text-blue-300"/><input name="username" defaultValue="admin" className="w-full bg-transparent px-3 py-4 outline-none"/></div></label>
          <label className="block text-sm font-bold text-white/70">Password<div className="mt-2 flex items-center rounded-xl border border-white/12 bg-white/7 px-4"><LockKeyhole size={18} className="text-blue-300"/><input name="password" type="password" defaultValue="admin" className="w-full bg-transparent px-3 py-4 outline-none"/></div></label>
          {error && <p className="rounded-lg bg-red-500/10 p-3 text-sm text-red-200">{error}</p>}
          <button disabled={loading} className="w-full rounded-full bg-blue-500 py-4 font-extrabold shadow-glow hover:bg-blue-400 disabled:opacity-60">{loading ? "Signing in..." : "Sign in"}</button>
        </form>
      </div>
    </main>
  );
}
