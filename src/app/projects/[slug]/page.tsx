"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function ProjectDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "projects", params.slug);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProject(docSnap.data());
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="container py-12 text-center">
        <p>Loading project...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container py-12 text-center">
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="rounded-lg mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
        <div className="flex gap-4 mt-8">
            {project.liveLink && <Link href={project.liveLink} passHref>
              <Button>Live Demo</Button>
            </Link>}
            {project.repositoryLink && <Link href={project.repositoryLink} passHref>
              <Button variant="outline">View on GitHub</Button>
            </Link>}
        </div>
      </div>
    </div>
  );
}
