import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import AddProjectForm from "@/components/AddProjectForm";
import AddBlogPostForm from "@/components/AddBlogPostForm";
import ProjectsList from "@/components/ProjectsList";
import BlogPostsList from "@/components/BlogPostsList";
import Analytics from "@/components/Analytics";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Admin Dashboard</h1>
      <div className="mb-8">
        <Analytics />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <AddProjectForm />
          <div className="mt-8">
            <ProjectsList />
          </div>
        </div>
        <div>
          <AddBlogPostForm />
          <div className="mt-8">
            <BlogPostsList />
          </div>
        </div>
      </div>
    </div>
  );
}
