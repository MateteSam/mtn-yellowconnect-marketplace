
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ConsultationInputSchema = z.object({
  notes: z.string().describe('The detailed notes from a patient consultation, including symptoms, patient history, and examination findings.'),
  inventory: z.array(z.object({
    name: z.string(),
    category: z.string(),
  })).describe('A list of available medical supplies and medications in the inventory.'),
});

const ConsultationAnalysisSchema = z.object({
  summary: z.string().describe('A concise summary of the consultation notes.'),
  diagnosis: z.string().describe('A likely diagnosis based on the provided notes. Should be a common medical condition name.'),
  prescriptions: z.array(z.string()).describe('A list of recommended medication names from the inventory that are relevant to the diagnosis.'),
  labTests: z.array(z.string()).describe('A list of suggested lab tests to confirm the diagnosis (e.g., "Full Blood Count", "Cholesterol Panel").'),
});

export type ConsultationAnalysis = z.infer<typeof ConsultationAnalysisSchema>;

const consultationPrompt = ai.definePrompt({
  name: 'consultationPrompt',
  input: { schema: ConsultationInputSchema },
  output: { schema: ConsultationAnalysisSchema },
  prompt: `
    You are an expert medical AI assistant for a hospital. Your task is to analyze consultation notes and provide a structured analysis.
    
    Given the following consultation notes and a list of available inventory items, please perform the following:
    1.  Create a brief, one-paragraph summary of the key points from the notes.
    2.  Based on the symptoms and findings, determine the most likely primary diagnosis.
    3.  From the provided inventory list, recommend up to 3 relevant medications or supplies for the suggested diagnosis. Only recommend items from the inventory list.
    4.  Suggest up to 3 common lab tests that would help confirm or rule out the diagnosis.

    Consultation Notes:
    {{{notes}}}

    Available Inventory:
    {{#each inventory}}
    - {{name}} ({{category}})
    {{/each}}
  `,
});

const consultationFlow = ai.defineFlow(
  {
    name: 'consultationFlow',
    inputSchema: ConsultationInputSchema,
    outputSchema: ConsultationAnalysisSchema,
  },
  async (input) => {
    const { output } = await consultationPrompt(input);
    return output!;
  }
);

export async function analyzeConsultation(
  input: z.infer<typeof ConsultationInputSchema>
): Promise<ConsultationAnalysis> {
  return await consultationFlow(input);
}
