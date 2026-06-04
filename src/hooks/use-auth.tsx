"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import type { User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { signInWithGoogle as firebaseSignInWithGoogle, signOut as firebaseSignOut } from 'firebase/auth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<any>;
  signInWithEmail: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
  role: string | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signInWithGoogle: async () => {},
  signInWithEmail: async () => {},
  signOut: async () => {},
  role: null,
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsub: (() => void) | null = null;

    const setup = async () => {
      try {
        if (!auth) {
          const mod = await import('@/lib/firebase');
          const clientAuth = mod.auth;
          if (!clientAuth) {
            setLoading(false);
            return;
          }
          unsub = clientAuth.onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
          });
        } else {
          unsub = auth.onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
          });
        }
      } catch (e) {
        setLoading(false);
      }
    };

    setup();

    return () => {
      if (unsub) try { unsub(); } catch (e) { /* noop */ }
    };
  }, []);

  const signInWithGoogle = async () => {
    const { GoogleAuthProvider, signInWithPopup } = await import('firebase/auth');
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const signInWithEmail = async (email: string, password: string) => {
    const { signInWithEmailAndPassword } = await import('firebase/auth');
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOut = async () => {
    await firebaseSignOut(auth);
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signInWithGoogle,
      signInWithEmail,
      signOut,
      role: null,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
