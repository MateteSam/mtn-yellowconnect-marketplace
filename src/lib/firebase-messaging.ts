
"use client";

import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebase";

export const requestNotificationPermission = async () => {
  if (!messaging) return null;

  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;
      if (!vapidKey) {
        console.error("VAPID key is not set in environment variables.");
        return null;
      }
      
      const token = await getToken(messaging, { vapidKey });
      return token;
    } else {
      console.log("Notification permission not granted.");
      return null;
    }
  } catch (error) {
    console.error("An error occurred while requesting permission or getting token: ", error);
    return null;
  }
};

export const onMessageListener = () => {
  return new Promise((resolve) => {
    if (messaging) {
      onMessage(messaging, (payload) => {
        resolve(payload);
      });
    }
  });
};
