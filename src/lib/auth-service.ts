import { adminAuth } from './firebase-admin';

/**
 * Generates a random 8-character password.
 */
export function generatePassword(length: number = 8): string {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

/**
 * Creates a Firebase user and sets custom claims.
 */
export async function createFirebaseUser(
    email: string,
    password: string,
    displayName: string,
    claims: { role: string; med_center_id: string;[key: string]: any }
): Promise<string> {
    try {
        const userRecord = await adminAuth.createUser({
            email,
            password,
            displayName,
        });

        await adminAuth.setCustomUserClaims(userRecord.uid, claims);

        return userRecord.uid;
    } catch (error: any) {
        console.error('Error creating Firebase user:', error);
        throw new Error(error.message || 'Failed to create Firebase user');
    }
}

/**
 * Deletes a Firebase user.
 */
export async function deleteFirebaseUser(uid: string): Promise<void> {
    try {
        await adminAuth.deleteUser(uid);
    } catch (error: any) {
        console.error('Error deleting Firebase user:', error);
        // We don't necessarily want to throw here if the user is already gone
    }
}
