import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const permissions = [
  ["dashboard.view", "View dashboard"],
  ["users.manage", "Manage users"],
  ["roles.manage", "Manage roles"],
  ["services.manage", "Manage services"],
  ["gallery.manage", "Manage gallery"],
  ["testimonials.manage", "Manage testimonials"],
  ["clients.manage", "Manage clients"],
  ["certificates.manage", "Manage certificates"],
  ["content.manage", "Manage website content"],
  ["media.manage", "Manage media"],
  ["settings.manage", "Manage settings"]
];

const services = [
  ["cnc-wire-cutting", "CNC Wire Cutting", "High-accuracy wire EDM solutions for complex profiles, tight tolerances and demanding tool-room applications."],
  ["precision-machining", "Precision Machining", "Reliable machining of critical components with consistent dimensional control and excellent repeatability."],
  ["industrial-components", "Industrial Components", "Made-to-drawing components engineered for industrial machinery, assemblies and production environments."],
  ["tool-room-works", "Tool Room Works", "Comprehensive tool-room support for dies, jigs, fixtures, gauges and specialized engineering requirements."],
  ["custom-manufacturing", "Custom Manufacturing", "Flexible low-volume and specialized manufacturing for unique engineering challenges and application needs."],
  ["engineering-design", "Engineering Design", "Practical design support that improves manufacturability, function, serviceability and production readiness."],
  ["machine-components", "Machine Components", "Precision components for machine building, maintenance, upgrades and industrial automation systems."],
  ["prototype-development", "Prototype Development", "Fast, controlled prototype development that converts concepts into testable and production-ready parts."],
  ["industrial-fabrication", "Industrial Fabrication", "Robust fabrication solutions for frames, supports, enclosures and custom industrial assemblies."],
  ["government-project-support", "Government Project Support", "Documentation-focused engineering and manufacturing support for public-sector and institutional requirements."]
];

async function main() {
  const permissionRecords = [];
  for (const [key, label] of permissions) {
    permissionRecords.push(await prisma.permission.upsert({
      where: { key },
      update: { label },
      create: { key, label }
    }));
  }

  const superAdmin = await prisma.role.upsert({
    where: { name: "Super Admin" },
    update: {},
    create: { name: "Super Admin", description: "Complete website and user administration." }
  });

  for (const permission of permissionRecords) {
    await prisma.rolePermission.upsert({
      where: { roleId_permissionId: { roleId: superAdmin.id, permissionId: permission.id } },
      update: {},
      create: { roleId: superAdmin.id, permissionId: permission.id }
    });
  }

  const adminUsername = process.env.ADMIN_USERNAME || "admin";
  const adminPassword = process.env.ADMIN_PASSWORD || "admin";
  const adminEmail = process.env.ADMIN_EMAIL || null;
  const hash = await bcrypt.hash(adminPassword, 12);
  await prisma.user.upsert({
    where: { username: adminUsername },
    update: { passwordHash: hash, roleId: superAdmin.id },
    create: {
      username: adminUsername,
      name: "Administrator",
      email: adminEmail,
      passwordHash: hash,
      roleId: superAdmin.id
    }
  });

  for (let index = 0; index < services.length; index++) {
    const [slug, title, description] = services[index];
    await prisma.service.upsert({
      where: { slug },
      update: { title, description, sortOrder: index },
      create: {
        slug,
        title,
        description,
        features: JSON.stringify(["Precision-focused execution", "Quality-controlled workflow", "Custom engineering support"]),
        sortOrder: index
      }
    });
  }
}

main().finally(() => prisma.$disconnect());
