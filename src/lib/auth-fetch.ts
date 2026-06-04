
import { auth } from './auth';

/**
 * A secure wrapper around the native fetch API that automatically adds
 * the Firebase Authorization header.
 */
export async function authFetch(url: string, options: RequestInit = {}): Promise<Response> {
    if (!auth) {
        return new Response(JSON.stringify({ error: 'Firebase auth is not configured' }), {
            status: 503,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const user = auth.currentUser;

    if (!user) {
        console.warn('authFetch called without an authenticated user.');
        return new Response(JSON.stringify({ error: 'Unauthenticated' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const token = user ? await user.getIdToken() : null;

    const headers = new Headers(options.headers || {});
    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
    }

    return fetch(url, {
        ...options,
        headers,
    });
}
