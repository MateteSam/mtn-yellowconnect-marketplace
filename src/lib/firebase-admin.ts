
import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';

let app: any = null;
let adminAuth: any = null;
let adminDb: any = null;

const makeFallbackProxy = (name: string) => {
  const fallback = () => {
    throw new Error(`${name} called but Firebase Admin SDK is not initialized. Verify your environment variables: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY.`);
  };
  return new Proxy(fallback, {
    get(target, prop) {
      if (prop === 'then' || prop === 'catch') {
        return undefined;
      }
      return makeFallbackProxy(`${name}.${String(prop)}`);
    }
  });
};

try {
  const serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  };

  const hasServiceAccount =
    process.env.FIREBASE_PROJECT_ID &&
    process.env.FIREBASE_CLIENT_EMAIL &&
    process.env.FIREBASE_PRIVATE_KEY;

  const credential = hasServiceAccount
    ? admin.credential.cert(serviceAccount)
    : undefined;

  app = getApps().length
    ? getApps()[0]
    : admin.initializeApp({
        credential,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      });

  adminAuth = admin.auth(app);
  adminDb = admin.firestore(app);
} catch (error: any) {
  console.warn("⚠️ Firebase Admin SDK could not be initialized. Server-side features requiring Firestore or Auth will fail. Error:", error.message);
  adminAuth = makeFallbackProxy('adminAuth');
  adminDb = makeFallbackProxy('adminDb');
}

export { admin, adminAuth, adminDb };

