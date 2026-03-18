import { db } from "@/lib/firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = await request.json();
  const { title, description, image, category, repositoryLink, liveLink } = body;

  if (!title || !description || !image || !category) {
    return new Response("Missing required fields", { status: 400 });
  }

  try {
    const docRef = doc(db, "projects", params.slug);
    await updateDoc(docRef, {
      title,
      description,
      image,
      category,
      repositoryLink,
      liveLink,
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("Error updating document: ", error);
    return new Response("Error updating document", { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const docRef = doc(db, "projects", params.slug);
    await deleteDoc(docRef);
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting document: ", error);
    return new Response("Error deleting document", { status: 500 });
  }
}
