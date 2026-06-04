
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut as firebaseSignOut,
  updateProfile,
  updateEmail,
  updatePassword,
  type Auth,
  type User as FirebaseAuthUser,
  type UserCredential
} from "firebase/auth";
import { app, auth } from "./firebase";
import type { User, Staff } from "./types";

export { auth };

const getClientAuth = (): Auth => {
  if (!auth) {
    throw new Error('Firebase auth is not configured for this prototype environment.');
  }

  return auth;
};

// Sign Up with Email and Password
export const signUpWithEmail = async (userData: {
  email: any; password: any; fname: any; lname: any; phone?: any; organization: any; role?: Staff['role']
}): Promise<UserCredential> => {
  const { email, password, fname, lname } = userData;
  const userCredential = await createUserWithEmailAndPassword(getClientAuth(), email, password);
  const fullName = `${fname} ${lname}`;

  if (userCredential.user) {
    await updateProfile(userCredential.user, {
      displayName: fullName,
    });
  }

  return userCredential;
};

// Sign In with Email and Password
export const signInWithEmail = (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(getClientAuth(), email, password);
};

// Sign In with Google
export const signInWithGoogle = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(getClientAuth(), provider);
};

// Password Reset
export const sendPasswordReset = (email: string): Promise<void> => {
  return sendPasswordResetEmail(getClientAuth(), email);
};

// Sign Out
export const signOut = (): Promise<void> => {
  return firebaseSignOut(getClientAuth());
};

// Update Email
export const updateUserEmail = (user: FirebaseAuthUser, newEmail: string): Promise<void> => {
  return updateEmail(user, newEmail);
}

// Update Password
export const updateUserPassword = (user: FirebaseAuthUser, newPassword: string): Promise<void> => {
  return updatePassword(user, newPassword);
}
