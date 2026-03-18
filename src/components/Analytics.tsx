"use client";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Analytics() {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "analytics", "views");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setAnalytics(docSnap.data());
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
    return <p>Loading analytics...</p>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Page Views</CardTitle>
      </CardHeader>
      <CardContent>
        {analytics ? (
          <ul>
            {Object.entries(analytics).map(([path, count]) => (
              <li key={path}>
                <strong>{path}:</strong> {count}
              </li>
            ))}
          </ul>
        ) : (
          <p>No analytics data found.</p>
        )}
      </CardContent>
    </Card>
  );
}
