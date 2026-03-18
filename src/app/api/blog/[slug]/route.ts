import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const docRef = doc(db, "blog", params.slug);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return new Response(JSON.stringify({ id: docSnap.id, ...docSnap.data() }), {
        status: 200,
      });
    } else {
      return new Response("Not Found", { status: 404 });
    }
  } catch (error) {
    return new Response("Error getting document", { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = await request.json();
  const { title, description, image, content } = body;

  if (!title || !description || !image || !content) {
    return new Response("Missing required fields", { status: 400 });
  }

  try {
    const docRef = doc(db, "blog", params.slug);
    await updateDoc(docRef, {
      title,
      description,
      image,
      content,
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
    const docRef = doc(db, "blog", params.slug);
    await deleteDoc(docRef);
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting document: ", error);
    return new Response("Error deleting document", { status: 500 });
  }
}
