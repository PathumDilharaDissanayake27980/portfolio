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
import EditBlogPostForm from "./EditBlogPostForm";

export default function BlogPostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/blog");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (slug) => {
    try {
      await fetch(`/api/blog/${slug}`, {
        method: "DELETE",
      });
      fetchPosts();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <p>Loading blog posts...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-bold">{post.title}</h3>
            </div>
            <div className="flex gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Edit</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Blog Post</DialogTitle>
                  </DialogHeader>
                  <EditBlogPostForm post={post} onFinished={fetchPosts} />
                </DialogContent>
              </Dialog>
              <Button variant="destructive" onClick={() => handleDelete(post.slug)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
