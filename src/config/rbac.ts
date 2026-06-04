import { RoleName } from "@/lib/auth-utils";

export const PAGE_PERMISSIONS: Record<string, RoleName[]> = {
    '/dashboard': ['any'],
    '/reports': ['Admin', 'Doctor'],
    '/calendar': ['any'],
    '/patients': ['Admin', 'Doctor', 'Nurse', 'Receptionist'],
    '/staff': ['Admin', 'Doctor', 'Nurse', 'Receptionist', 'Pharmacist'],
    '/staff/shifts': ['Admin', 'Doctor', 'Nurse', 'Receptionist', 'Pharmacist'],
    '/triage': ['Admin', 'Nurse'],
    '/nurse-care-program': ['Admin', 'Nurse'],
    '/consultation': ['Admin', 'Doctor'],
    '/consultations': ['Admin', 'Doctor'],
    '/prescriptions': ['Admin', 'Doctor', 'Pharmacist'],
    '/surveys': ['Admin', 'Receptionist'],
    '/inventory': ['Admin', 'Pharmacist'],
    '/appointments': ['Admin', 'Doctor', 'Nurse', 'Receptionist'],
    '/billing': ['Admin', 'Finance Officer', 'Receptionist'],
    '/financials': ['Admin', 'Finance Officer'],
    '/settings': ['Admin'],
    '/audit-trail': ['Admin'],
    '/patient-portal': ['Admin', 'Doctor', 'Nurse', 'Receptionist', 'Pharmacist'],
};

export const API_PERMISSIONS: Record<string, { GET?: RoleName[], POST?: RoleName[], PUT?: RoleName[], DELETE?: RoleName[], PATCH?: RoleName[] }> = {
    '/patients': {
        GET: ['Admin', 'Doctor', 'Nurse', 'Receptionist'],
        POST: ['Admin', 'Receptionist', 'Nurse'],
        PUT: ['Admin', 'Receptionist', 'Nurse'],
        DELETE: ['Admin']
    },
    '/patients/[id]/care-program-history': {
        GET: ['Admin', 'Doctor', 'Nurse']
    },
    '/staff': {
        GET: ['Admin', 'Doctor', 'Nurse', 'Receptionist', 'Pharmacist'],
        POST: ['Admin']
    },
    '/inventory': {
        GET: ['Admin', 'Doctor', 'Nurse', 'Pharmacist', 'Receptionist', 'Finance Officer'],
        POST: ['Admin', 'Pharmacist']
    },
    '/categories': {
        GET: ['Admin', 'Doctor', 'Nurse', 'Pharmacist', 'Receptionist', 'Finance Officer'],
        POST: ['Admin', 'Pharmacist']
    },
    '/suppliers': {
        GET: ['Admin', 'Doctor', 'Nurse', 'Pharmacist', 'Receptionist', 'Finance Officer'],
        POST: ['Admin', 'Pharmacist']
    },
    '/inventory-statuses': {
        GET: ['Admin', 'Doctor', 'Nurse', 'Pharmacist', 'Receptionist', 'Finance Officer'],
        POST: ['Admin', 'Pharmacist']
    },
    '/surveys': {
        GET: ['Admin', 'Doctor', 'Nurse', 'Receptionist'],
        POST: ['Admin', 'Receptionist']
    },
    '/survey-responses': {
        POST: ['Patient']
    },
    '/care-programs': {
        GET: ['Admin', 'Doctor', 'Nurse', 'Receptionist'],
        POST: ['Admin']
    },
    '/appointments': {
        GET: ['Admin', 'Doctor', 'Nurse', 'Receptionist'],
        POST: ['Admin', 'Doctor', 'Nurse', 'Receptionist']
    },
    '/billing': {
        GET: ['Admin', 'Finance Officer', 'Receptionist'],
        POST: ['Admin', 'Finance Officer', 'Receptionist']
    },
    '/consultations': {
        GET: ['Admin', 'Doctor'],
        POST: ['Admin', 'Doctor']
    },
    '/prescriptions': {
        GET: ['Admin', 'Doctor', 'Pharmacist'],
        POST: ['Admin', 'Doctor']
    },
    '/patient-visits': {
        GET: ['Admin', 'Doctor', 'Nurse', 'Receptionist'],
        POST: ['Admin', 'Receptionist', 'Nurse']
    },
    '/wards': {
        GET: ['Admin', 'Doctor', 'Nurse', 'Receptionist'],
        POST: ['Admin']
    },
    '/departments': {
        GET: ['Admin', 'Doctor', 'Nurse', 'Receptionist', 'Pharmacist'],
        POST: ['Admin']
    },
    '/roles': {
        GET: ['Admin', 'Doctor', 'Nurse', 'Receptionist', 'Pharmacist'],
        POST: ['Admin']
    },
    '/shifts': {
        GET: ['Admin', 'Doctor', 'Nurse', 'Receptionist', 'Pharmacist'],
        POST: ['Admin']
    },
    '/beds': {
        GET: ['Admin', 'Doctor', 'Nurse', 'Receptionist'],
        POST: ['Admin']
    },
    '/medical-records': {
        GET: ['Admin', 'Doctor', 'Nurse'],
        POST: ['Admin', 'Doctor']
    },
    '/lab-requests': {
        GET: ['Admin', 'Doctor', 'Nurse'],
        POST: ['Admin', 'Doctor']
    },
    '/imaging-requests': {
        GET: ['Admin', 'Doctor', 'Nurse'],
        POST: ['Admin', 'Doctor']
    },
    '/triage': {
        GET: ['Admin', 'Nurse'],
        POST: ['Admin', 'Nurse']
    },
    '/medical-aids': {
        GET: ['Admin', 'Doctor', 'Nurse', 'Receptionist'],
        POST: ['Admin']
    },
    '/user/profile': {
        GET: ['any'],
        PATCH: ['any']
    },
    '/user/notifications': {
        GET: ['any'],
        PATCH: ['any']
    },
    '/notifications': {
        GET: ['any'],
        POST: ['Admin', 'Doctor', 'Nurse', 'Receptionist']
    },
    '/audit-trail': {
        GET: ['Admin']
    }
};

export const DEFAULT_REDIRECT = '/dashboard';
