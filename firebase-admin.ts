import { initFirestore } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app"
import admin from "firebase-admin";
let app;

if (!admin.app.length) {
  app = admin.initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
  });
}

const adminDb = initFirestore({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  }),
});

const authAdmin = admin.auth(app);

export { authAdmin, adminDb };
