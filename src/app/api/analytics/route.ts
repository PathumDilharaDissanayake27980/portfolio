import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebaseAdmin';

export async function POST(request: Request) {
  try {
    if (!adminDb) return NextResponse.json({ ok: true });
    const { pathname } = await request.json();
    if (!pathname) return NextResponse.json({ ok: true });

    const { FieldValue } = await import('firebase-admin/firestore');
    await adminDb.doc('analytics/views').set(
      { [pathname]: FieldValue.increment(1) },
      { merge: true }
    );
  } catch {
    // silently ignore
  }
  return NextResponse.json({ ok: true });
}
