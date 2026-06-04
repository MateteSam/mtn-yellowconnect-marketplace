import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { adminAuth } from '@/lib/firebase-admin';
import type { User } from '@/lib/types';

// Admin: 1,/
// Doctor: 2,/
// Nurse: 3, 
// Pharmacist: 4, 
// Receptionist: 5,/ 
// Triage Nurse: 6, 
// Dispensary Assistant: 7, 
// Finance Officer: 8, 
// Patient: 0
export type RoleName = 'Patient' | 'Admin' | 'Doctor' | 'Nurse' | 'Pharmacist' | 'Receptionist' | 'Triage Nurse' | 'Dispensary Assistant' | 'Finance Officer' | 'any';

type AuthResult = {
  decodedToken?: any;
  user?: User | null;
  med_center_id?: number | null;
  error: NextResponse | null;
};

export async function getDecodedToken(): Promise<AuthResult> {
  const authorization = (await headers()).get('Authorization');
  if (!authorization?.startsWith('Bearer ')) {
    return {
      decodedToken: null,
      error: NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    };
  }

  const token = authorization.split('Bearer ')[1];
  if (!token) {
    return {
      decodedToken: null,
      error: NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    };
  }

  try {
    const decodedToken = await adminAuth.verifyIdToken(token, true);
    return { decodedToken, error: null };
  } catch (error: any) {
    console.error('Auth check failed:', error.message);
    return {
      decodedToken: null,
      error: NextResponse.json({ error: 'Authentication token is invalid or has expired.' }, { status: 401 })
    };
  }
}

export async function checkAuth(roleCheck: RoleName | RoleName[] | 'any' = 'any'): Promise<AuthResult & { decodedToken?: any }> {
  try {
    const { decodedToken, error } = await getDecodedToken();
    if (error) return { error };

    const med_center_id = decodedToken.med_center_id ? Number(decodedToken.med_center_id) : null;
    const user = (decodedToken.user as User) || null;
    const role = (decodedToken.role as string) || null;

    if (!user) {
      return {
        user: null,
        med_center_id: null,
        error: NextResponse.json({ error: 'Forbidden: User not found in claims' }, { status: 403 })
      };
    }

    const userRole = role || (user as any).role?.name;

    if (Array.isArray(roleCheck)) {
      if (!roleCheck.includes('any') && !roleCheck.includes(userRole as RoleName)) {
        return {
          user: null,
          med_center_id: null,
          error: NextResponse.json({ error: `Forbidden: Insufficient permissions. Requires one of ${roleCheck.join(', ')} roles.` }, { status: 403 })
        };
      }
    } else if (roleCheck !== 'any' && userRole !== roleCheck) {
      return {
        user: null,
        med_center_id: null,
        error: NextResponse.json({ error: `Forbidden: Insufficient permissions. Requires ${roleCheck} role.` }, { status: 403 })
      };
    }

    return { user, med_center_id, decodedToken, error: null };
  } catch (error: any) {
    console.error('Auth check failed:', error.message);
    return {
      user: null,
      med_center_id: null,
      error: NextResponse.json({ error: 'Authentication token is invalid or has expired.' }, { status: 401 })
    };
  }
}
