"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="container py-12 text-center">
        <p>Loading posts...</p>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-center mb-8">My Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <ScrollAnimation key={post.slug} delay={index * 0.1}>
            <Card>
              <CardHeader>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="rounded-t-lg"
                />
                <CardTitle className="pt-4">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{post.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/${post.slug}`} passHref>
                  <Button>Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
