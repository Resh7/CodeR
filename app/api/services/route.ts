import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  description: z.string().min(10),
  features: z.array(z.string()).default([]),
  imageUrl: z.string().optional().nullable(),
  logoUrl: z.string().optional().nullable(),
  brochureUrl: z.string().optional().nullable(),
  published: z.boolean().default(true)
});

export async function GET() {
  const services = await prisma.service.findMany({ orderBy: { sortOrder: "asc" } });
  return NextResponse.json(services);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const count = await prisma.service.count();
  const service = await prisma.service.create({
    data: { ...parsed.data, features: JSON.stringify(parsed.data.features), sortOrder: count }
  });
  return NextResponse.json(service, { status: 201 });
}
