"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EditProjectForm from "./EditProjectForm";

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (slug) => {
    try {
      await fetch(`/api/projects/${slug}`, {
        method: "DELETE",
      });
      fetchProjects();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <p>Loading projects...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-bold">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.category}</p>
            </div>
            <div className="flex gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Edit</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Project</DialogTitle>
                  </DialogHeader>
                  <EditProjectForm project={project} onFinished={fetchProjects} />
                </DialogContent>
              </Dialog>
              <Button variant="destructive" onClick={() => handleDelete(project.slug)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
