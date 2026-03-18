"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function AddProjectForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [repositoryLink, setRepositoryLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          image,
          slug,
          category,
          repositoryLink,
          liveLink,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setTitle("");
        setDescription("");
        setImage("");
        setSlug("");
        setCategory("");
        setRepositoryLink("");
        setLiveLink("");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Project</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="repositoryLink">Repository Link</Label>
            <Input
              id="repositoryLink"
              value={repositoryLink}
              onChange={(e) => setRepositoryLink(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="liveLink">Live Link</Label>
            <Input
              id="liveLink"
              value={liveLink}
              onChange={(e) => setLiveLink(e.target.value)}
            />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Project"}
          </Button>
          {success && <p className="text-green-500">Project added successfully!</p>}
        </form>
      </CardContent>
    </Card>
  );
}
