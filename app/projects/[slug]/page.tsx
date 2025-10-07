// app/projects/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const proj = projects.find((p) => p.slug === params.slug);
  if (!proj) return { title: "Project" };
  return {
    title: `${proj.title} · Ricky`,
    description: proj.des,
    openGraph: {
      title: proj.title,
      description: proj.des,
      images: [{ url: "/api/og?title=" + encodeURIComponent(proj.title) }],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const proj = projects.find((p) => p.slug === params.slug);
  if (!proj) return <div className="p-6">Project not found.</div>;

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-400">
        <Link href="/">Home</Link> <span className="mx-2">/</span>
        <Link href="/#projects">Projects</Link> <span className="mx-2">/</span>
        <span className="text-gray-200">{proj.title}</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold">{proj.title}</h1>
      <p className="mt-3 text-gray-400">{proj.des}</p>

      <div className="mt-8 relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-[#13162D]">
        <Image
          src={proj.img}
          alt={`${proj.title} cover`}
          fill
          className="object-contain object-center"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      {/* Tech stack icons */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {proj.iconLists.map((icon, i) => (
          <span
            key={`${proj.slug}-icon-${i}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black-400"
          >
            <Image src={icon} alt="" width={20} height={20} />
          </span>
        ))}
      </div>

      {/* Example detail sections – expand as you like */}
      <section className="mt-10 space-y-4 text-gray-300 leading-relaxed">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p>
          Write a short narrative: goals, users, problems solved, and your role.
          Mention notable tech decisions (e.g., auth, caching, CI/CD).
        </p>

        <h2 className="text-xl font-semibold mt-8">Tech & Architecture</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Backend / API: FastAPI</li>
          <li>Frontend: Next.js (App Router) + Tailwind</li>
          <li>Data / ML: scikit-learn, pandas (if applicable)</li>
          <li>Infra / DevOps: Docker, Vercel/AWS, CI with GitHub Actions</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">Key Features</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Feature one with impact/result</li>
          <li>Feature two with brief detail</li>
          <li>Feature three (performance, a11y, testing, etc.)</li>
        </ul>
      </section>
    </main>
  );
}
// import { projects } from "@/data";
// import Image from "next/image";

// export default function ProjectPage({ params }: { params: { slug: string } }) {
//   const project = projects.find((p) => p.slug === params.slug);

//   if (!project) {
//     return (
//       <main className="p-10">
//         <h1 className="text-3xl font-bold">Project not found</h1>
//       </main>
//     );
//   }

//   return (
//     <main className="p-10">
//       <h1 className="text-3xl font-bold">{project.title}</h1>
//       <p className="mt-4 text-gray-400">{project.des}</p>
//       <div className="mt-8 relative w-full max-w-3xl aspect-[16/9] rounded-2xl overflow-hidden bg-[#13162D]">
//         <Image
//           src={project.img}
//           alt={project.title}
//           fill
//           className="object-contain"
//         />
//       </div>
//     </main>
//   );
// }
