
// This is a helper type that allows us to omit the first argument of a function.
// It's useful for creating component props that are based on a function's arguments.
export type OmitFirstArg<F> = F extends (
    x: any,
    ...args: infer P
) => infer R
    ? (...args: P) => R
    : never;

export type ListCountAggregate = {
    aggregate: {
        count: number;
    };
};

export type Vitals = {
    bp: string;
    hr: string;
    temp: string;
};

export type Patient = {
    id: string;
    auth_id?: string;
    fname: string;
    lname: string;
    dob: string;
    gender: 'Male' | 'Female';
    contact: string;
    email: string;
    address: string;
    village?: string;
    chief?: string;
    paramount_chief?: string;
    registered: string;
    medical_aid_list?: MedicalAidStub[];
    medical_aid_list_aggregate?: ListCountAggregate;
    care_program_list?: CareProgramStub[];
    care_program_list_aggregate?: ListCountAggregate;
    patient_visit_list: PatientVisit[];
    patient_visit_list_aggregate: ListCountAggregate;
    patient_visit_completed_list: PatientVisit[];
    patient_visit_completed_list_aggregate: ListCountAggregate;
    patient_visit_incompleted_list: PatientVisit[];
    patient_visit_incompleted_list_aggregate: ListCountAggregate;
    med_center_id?: number;
    notification_preferences?: {
        email: boolean;
        sms: boolean;
        push: boolean;
    };
};

export type PatientVisit = {
    id: string;
    patient_id: string;
    patient?: Patient;
    visit_date: string;
    patient_type: 'In-patient' | 'Out-patient';
    queue_status: 'Pending Triage' | 'Pending Doctor' | 'Pending Billing' | 'Pending Dispensing' | 'Completed';
    priority?: 'Low' | 'Medium' | 'High';
    vitals?: Vitals;
    triage_notes?: string;
    care_program_id?: string;
    medication_effect_notes?: string;
    medication_quantity?: number;
};

export type Role = {
    id: string;
    name: string;
    desc: string;
    med_center_id?: number;
};

export type Department = {
    id: string;
    name: string;
    desc: string;
    med_center_id?: number;
};

export type Staff = {
    id: string;
    auth_id?: string;
    fname: string;
    lname: string;
    role_id: string;
    role?: Role;
    department_id: string;
    department?: Department;
    email: string;
    phone: string;
    med_center_id?: number;
    notification_preferences?: {
        email: boolean;
        sms: boolean;
        push: boolean;
    };
};

export type Appointment = {
    id: string;
    patient_id: string;
    patient?: Patient;
    patient_visit_id: string;
    patient_visit?: PatientVisit;
    doctor_id: string;
    doctor?: Staff;
    date: string;
    time: string;
    status: 'Confirmed' | 'Pending' | 'Cancelled';
    med_center_id?: number;
};

export type Category = {
    id: string;
    name: string;
    desc: string;
    med_center_id?: number;
};

export type Supplier = {
    id: string;
    name: string;
    contact_person: string;
    phone: string;
    email: string;
    med_center_id?: number;
};

export type CareProgram = {
    id: string;
    name: string;
    desc: string;
    target_population: string;
    med_center_id?: number;
};

export type InventoryItem = {
    id: string;
    name: string;
    category_id: string;
    category?: Category;
    quantity: number;
    reorder_level: number;
    supplier_id: string;
    supplier?: Supplier;
    program_id?: string;
    care_program?: CareProgram;
    med_center_id?: number;
};

export type BillingItem = {
    id: string;
    billing_id: string;
    billing?: Billing;
    inventory_id: string;
    inventory?: InventoryItem;
    quantity: number;
    amount: number;
};

export type Billing = {
    id: string;
    patient_id: string;
    patient?: Patient;
    patient_visit_id?: string;
    patient_visit?: PatientVisit;
    amount: number;
    due_date: string;
    status: 'Paid' | 'Pending' | 'Overdue';
    approval_status: 'Pending' | 'Approved';
    payment_method?: string;
    date_paid?: string;
    transaction_id?: string;
    item_list?: BillingItem[];
    item_list_aggregate?: ListCountAggregate;
    med_center_id?: number;
};

export type Consultation = {
    id: string;
    patient_id: string;
    patient?: Patient;
    patient_visit_id: string;
    patient_visit?: PatientVisit;
    doctor_id: string;
    doctor?: Staff;
    date: string;
    notes: string;
    diagnosis: string;
    med_center_id?: number;
};

export type MedicalRecord = {
    id: string;
    patient_id: string;
    patient?: Patient;
    doctor_id: string;
    doctor?: Staff;
    date: string;
    type: 'Prescription' | 'Lab Result' | 'Imaging Report' | 'Discharge Summary';
    title: string;
    summary: string;
    file_path?: string;
    med_center_id?: number;
}

export type MedicationHistory = {
    id: string;
    patient_id: string;
    patient?: Patient;
    collection_date: string;
    medication: string;
    dosage: string;
    quantity: number;
}

export type Shift = {
    id?: string;
    staff_id: string;
    staff?: Staff;
    date: string;
    shift: 'Morning' | 'Night';
};

export type SurveyQuestionOption = {
    id: string;
    text: string;
    question_id: string;
    question?: SurveyQuestion;
};

export type SurveyQuestion = {
    id: string;
    text: string;
    survey_id: string;
    survey?: Survey;
    option_list: SurveyQuestionOption[];
    option_list_aggregate: ListCountAggregate;
    med_center_id?: number;
};

export type Survey = {
    id: string;
    title: string;
    desc: string;
    question_list: SurveyQuestion[];
    question_list_aggregate: ListCountAggregate;
    response_list_aggregate: ListCountAggregate;
    med_center_id?: number;
};

export type SurveyResponse = {
    id?: string;
    survey_id: string;
    survey?: Survey;
    question_id: string;
    question?: SurveyQuestion;
    option_id: string;
    option?: SurveyQuestionOption;
    patient_id: string;
    patient?: Patient;
    created_at: string;
};

export type MedicalAid = {
    id: string;
    name: string;
    contact_person: string;
    phone: string;
    email: string;
    med_center_id?: number;
};

export type Benefit = {
    id: string;
    name: string;
    desc: string;
    med_center_id?: number;
};

export type MedicalAidPackage = {
    id: string;
    medical_aid_id: string;
    medical_aid?: MedicalAid;
    name: string;
    annual_limit: number;
    balance: number;
    package_benefit_list?: MedicalAidPackageBenefitStub[];
    package_benefit_list_aggregate?: ListCountAggregate;
    med_center_id?: number;
};

export type Notification = {
    id: string;
    title: string;
    desc: string;
    timestamp: string;
    read: boolean;
    patient_id?: string;
    patient?: Patient;
    staff_id?: string;
    staff?: Staff;
    type: 'individual' | 'broadcast' | 'department' | 'role';
    channel: 'in-app' | 'email' | 'desktop' | 'all';
    sender_id?: string;
    sender?: Staff;
    med_center_id?: number;
};

export type Ward = {
    id: string;
    name: string;
    desc: string;
    med_center_id?: number;
};

export type Bed = {
    id: string;
    ward_id: string;
    ward?: Ward;
    status: 'Occupied' | 'Available' | 'Cleaning';
    bed_number?: string;
    med_center_id?: number;
};

export type InventoryStatus = {
    id: string;
    name: string;
    desc: string;
};

export type CareProgramStub = {
    id: string;
    patient_id: string;
    patient?: Patient;
    care_program_id: string;
    care_program?: CareProgram;
    enrollment_date: string;
}

export type MedicalAidStub = {
    id: string;
    patient_id: string;
    patient?: Patient;
    medical_aid_id: string;
    medical_aid?: MedicalAid;
    plan: string;
    member_number: string;
}

export type MedicalAidPackageBenefitStub = {
    id: string;
    package_id: string;
    package?: MedicalAidPackage;
    benefit_id: string;
    benefit?: Benefit;
}

export type User = Staff | Patient;

export type Prescription = {
    id: string;
    med_center_id: number;
    consultation_id?: string;
    patient_id: string;
    patient?: Patient;
    doctor_id?: string;
    doctor?: Staff;
    inventory_id?: string;
    inventory?: InventoryItem;
    medication_name: string;
    dosage?: string;
    duration?: string;
    instructions?: string;
    status: 'Pending' | 'Dispensed' | 'Cancelled';
    created_at: string;
    updated_at: string;
};

export type LabRequest = {
    id: string;
    med_center_id: number;
    consultation_id?: string;
    patient_id: string;
    patient?: Patient;
    doctor_id?: string;
    doctor?: Staff;
    test_name: string;
    reason?: string;
    status: 'Pending' | 'Completed' | 'Cancelled';
    created_at: string;
    updated_at: string;
};

export type ImagingRequest = {
    id: string;
    med_center_id: number;
    consultation_id?: string;
    patient_id: string;
    patient?: Patient;
    doctor_id?: string;
    doctor?: Staff;
    scan_type: string;
    reason?: string;
    status: 'Pending' | 'Completed' | 'Cancelled';
    created_at: string;
    updated_at: string;
};
