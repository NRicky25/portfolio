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

  const d = proj.details;

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      {/* Breadcrumbs */}
      <nav className="mb-6 text-sm text-gray-400">
        <Link href="/">Home</Link> <span className="mx-2">/</span>
        <Link href="/#projects">Projects</Link> <span className="mx-2">/</span>
        <span className="text-gray-200">{proj.title}</span>
      </nav>

      {/* Title + short description */}
      <h1 className="text-3xl md:text-4xl font-bold">{proj.title}</h1>
      {proj.des && <p className="mt-3 text-gray-400">{proj.des}</p>}

      {/* Hero image */}
      <div className="mt-8 relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-[#13162D]">
        <Image
          src={proj.img}
          alt={`${proj.title} cover`}
          fill
          className="object-contain object-center"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      {/* Icons (tech stack) */}
      {proj.iconLists?.length ? (
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
      ) : null}

      {/* Brief */}
      {d?.brief && (
        <section className="mt-10 space-y-4 text-gray-300 leading-relaxed">
          <h2 className="text-xl font-semibold">Project Brief</h2>
          <p>{d.brief}</p>
        </section>
      )}

      {d?.duration && (
        <section className="mt-10 space-y-4 text-gray-300 leading-relaxed">
          <h2 className="text-xl font-semibold">Project Duration (Estimate)</h2>
          <p>{d.duration}</p>
        </section>
      )}

      {/* Repositories */}
      {d?.repos && (d.repos.fe || d.repos.be) ? (
        <section className="mt-10 text-gray-300">
          <h2 className="text-xl font-semibold mb-2">Repositories</h2>
          <ul className="list-disc pl-6 space-y-1">
            {d.repos.fe && (
              <li>
                Frontend:&nbsp;
                <a
                  className="underline"
                  href={d.repos.fe}
                  target="_blank"
                  rel="noreferrer"
                >
                  {d.repos.fe}
                </a>
              </li>
            )}
            {d.repos.be && (
              <li>
                Backend:&nbsp;
                <a
                  className="underline"
                  href={d.repos.be}
                  target="_blank"
                  rel="noreferrer"
                >
                  {d.repos.be}
                </a>
              </li>
            )}
          </ul>
        </section>
      ) : null}

      {/* Generic sections (Approach, Design & Dev, Testing, Maintenance, etc.) */}
      {d?.sections?.length
        ? d.sections.map((s, idx) => (
            <section
              key={`${proj.slug}-sec-${idx}`}
              className="mt-10 text-gray-300 leading-relaxed"
            >
              <h2 className="text-xl font-semibold">{s.heading}</h2>

              {/* Paragraphs */}
              {s.paragraphs?.map((p, i) => (
                <p key={i} className="mt-3">
                  {p}
                </p>
              ))}

              {/* Bullets (with optional nested sub-bullets) */}
              {s.bullets?.length ? (
                <ul className="mt-3 list-disc pl-6 space-y-2">
                  {s.bullets.map((b, i) =>
                    typeof b === "string" ? (
                      <li key={i}>{b}</li>
                    ) : (
                      <li key={i}>
                        {b.text}
                        {b.sub && b.sub.length > 0 && (
                          <ul className="list-[circle] pl-6 mt-1 space-y-1 text-sm text-gray-400">
                            {b.sub.map((sb, j) => (
                              <li key={j}>{sb}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  )}
                </ul>
              ) : null}
            </section>
          ))
        : null}

      {/* Tools / badges */}
      {d?.tools?.length ? (
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Tools & Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {d.tools.map((t, i) => (
              <span
                key={`${proj.slug}-tool-${i}`}
                className="rounded-full border border-white/15 bg-black-400 px-3 py-1 text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      {/* Gallery */}
      {d?.gallery?.length ? (
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {d.gallery.map((src, i) => (
              <div
                key={`${proj.slug}-img-${i}`}
                className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-[#0F1220]"
              >
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
