
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

// Sign Up with Email and Password
export const signUpWithEmail = async (userData: {
  email: any; password: any; fname: any; lname: any; phone?: any; organization: any; role?: Staff['role']
}): Promise<UserCredential> => {
  const { email, password, fname, lname } = userData;
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
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
  return signInWithEmailAndPassword(auth, email, password);
};

// Sign In with Google
export const signInWithGoogle = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

// Password Reset
export const sendPasswordReset = (email: string): Promise<void> => {
  return sendPasswordResetEmail(auth, email);
};

// Sign Out
export const signOut = (): Promise<void> => {
  return firebaseSignOut(auth);
};

// Update Email
export const updateUserEmail = (user: FirebaseAuthUser, newEmail: string): Promise<void> => {
  return updateEmail(user, newEmail);
}

// Update Password
export const updateUserPassword = (user: FirebaseAuthUser, newPassword: string): Promise<void> => {
  return updatePassword(user, newPassword);
}
