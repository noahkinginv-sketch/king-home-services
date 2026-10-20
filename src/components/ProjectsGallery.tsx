"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Project = {
  image: string;
  alt: string;
  category: string;
  title: string;
  description: string;
};

export default function ProjectsGallery({
  projects,
}: {
  projects: Project[];
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [selectedProject]);

  function closeDialog() {
    dialogRef.current?.close();
  }

  return (
    <>
      <div className="grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.image} className="min-w-0">
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              aria-label={`Enlarge photo: ${project.title}`}
              className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9b7418]"
            >
              <span className="relative block aspect-[4/3] overflow-hidden bg-[#f3f1eb]">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-[#c6a24b]"
                />
              </span>
              <span className="mt-4 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9b7418]">
                {project.category}
              </span>
              <span className="mt-1 block text-lg font-semibold text-[#292a27]">
                {project.title}
              </span>
              <span className="mt-1 block text-sm leading-6 text-[#65665f]">
                {project.description}
              </span>
            </button>
          </article>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={selectedProject?.title ?? "Enlarged project photo"}
        onClose={() => setSelectedProject(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeDialog();
          }
        }}
        className="fixed inset-0 m-auto h-[min(92dvh,900px)] w-[min(92vw,1200px)] max-h-none max-w-none overflow-hidden border-0 bg-[#171815] p-0 text-white shadow-2xl backdrop:bg-black/80"
      >
        {selectedProject && (
          <div className="relative h-full w-full">
            <Image
              src={selectedProject.image}
              alt={selectedProject.alt}
              fill
              sizes="92vw"
              className="object-contain"
            />
            <button
              type="button"
              onClick={closeDialog}
              aria-label="Close enlarged photo"
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl leading-none text-white transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <p className="absolute inset-x-0 bottom-0 bg-black/65 px-4 py-3 text-sm font-medium sm:px-6">
              {selectedProject.title}
            </p>
          </div>
        )}
      </dialog>
    </>
  );
}
