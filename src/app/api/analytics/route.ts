import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebaseAdmin';
import { FieldValue } from 'firebase-admin/firestore';

export async function POST(request: Request) {
  try {
    const { pathname } = await request.json();
    if (!pathname) return NextResponse.json({ ok: true });

    await adminDb.doc('analytics/views').set(
      { [pathname]: FieldValue.increment(1) },
      { merge: true }
    );
  } catch {
    // silently ignore
  }
  return NextResponse.json({ ok: true });
}
