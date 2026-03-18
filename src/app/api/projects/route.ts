import { db } from "@/lib/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  console.log("Session:", session);

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = await request.json();
  const { title, description, image, slug, category } = body;

  if (!title || !description || !image || !slug || !category) {
    return new Response("Missing required fields", { status: 400 });
  }

  try {
    const docRef = await addDoc(collection(db, "projects"), {
      title,
      description,
      image,
      slug,
      category,
    });
    return new Response(JSON.stringify({ id: docRef.id }), { status: 201 });
  } catch (error) {
    console.error("Error adding document: ", error);
    return new Response("Error adding document", { status: 500 });
  }
}

export async function GET() {
    try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projects = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return new Response(JSON.stringify(projects), { status: 200 });
    } catch (error) {
        console.error("Error getting documents: ", error);
        return new Response("Error getting documents", { status: 500 });
    }
}
