import { db } from "@/lib/firebase";
import { addDoc, collection, getDocs, orderBy, query } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = await request.json();
  const { title, description, image, slug, content } = body;

  if (!title || !description || !image || !slug || !content) {
    return new Response("Missing required fields", { status: 400 });
  }

  try {
    const docRef = await addDoc(collection(db, "blog"), {
      title,
      description,
      image,
      slug,
      content,
      createdAt: new Date(),
    });
    return new Response(JSON.stringify({ id: docRef.id }), { status: 201 });
  } catch (error) {
    return new Response("Error adding document", { status: 500 });
  }
}

export async function GET() {
    try {
        const q = query(collection(db, "blog"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const posts = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return new Response(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new Response("Error getting documents", { status: 500 });
    }
}
