
import {
    Users,
    Calendar,
    FileText,
    BriefcaseMedical,
    BarChart,
    User,
    Package,
    ClipboardPlus,
    History,
    LayoutDashboard,
    Settings,
    Clock,
    CalendarDays,
    FileQuestion,
    HeartPulse,
    Banknote,
} from "lucide-react";

export type NavItem = {
    href?: string;
    label?: string;
    icon?: React.ElementType;
    badge?: (data: any) => number;
    isExternal?: boolean;
    type?: 'separator';
    allowedRoles?: string[];
};

export const allNavItems: NavItem[] = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard", allowedRoles: ['Admin', 'Doctor', 'Nurse', 'Receptionist', 'Pharmacist'] },
    { href: "/reports", icon: BarChart, label: "Reports", allowedRoles: ['Admin', 'Doctor'] },
    { href: "/calendar", icon: CalendarDays, label: "Calendar", allowedRoles: ['Admin', 'Doctor', 'Nurse'] },
    { type: "separator" },
    { href: "/patients", icon: Users, label: "Patients", allowedRoles: ['Admin', 'Doctor', 'Nurse', 'Receptionist'] },
    { href: "/staff", icon: BriefcaseMedical, label: "Staff", allowedRoles: ['Admin'] },
    { href: "/staff/shifts", icon: Clock, label: "Shifts", allowedRoles: ['Admin'] },
    { type: "separator" },
    { href: "/triage", icon: HeartPulse, label: "Triage", allowedRoles: ['Admin', 'Nurse'], badge: (data) => data?.triage || 0 },
    { href: "/consultation", icon: ClipboardPlus, label: "Consultation", allowedRoles: ['Admin', 'Doctor'], badge: (data) => data?.consultation || 0 },
    { href: "/surveys", icon: FileQuestion, label: "Surveys", allowedRoles: ['Admin', 'Receptionist'] },
    { href: "/inventory", icon: Package, label: "Inventory", allowedRoles: ['Admin', 'Pharmacist'] },
    { href: "/appointments", icon: Calendar, label: "Appointments", allowedRoles: ['Admin', 'Doctor', 'Nurse', 'Receptionist'] },
    { type: "separator" },
    { href: "/billing", icon: FileText, label: "Billing", allowedRoles: ['Admin', 'Receptionist'], badge: (data) => data?.billing || 0 },
    { href: "/financials", icon: Banknote, label: "Financials", allowedRoles: ['Admin'] },
    { type: "separator" },
    { href: "/settings", icon: Settings, label: "Settings", allowedRoles: ['Admin'] },
    { href: "/audit-trail", icon: History, label: "Audit Trail", allowedRoles: ['Admin'] },
    { type: "separator" },
    { href: "/patient-portal", icon: User, label: "Patient Portal", isExternal: true, allowedRoles: ['Admin', 'Doctor', 'Nurse', 'Receptionist', 'Pharmacist'] },
];
