import * as z from "zod";

export const ESPECIES = ["Cachorro", "Gato", "Pássaro", "Outro"] as const;
export type Especie = (typeof ESPECIES)[number];

export const SEXOS = ["Macho", "Fêmea"] as const;
export type Sexo = (typeof SEXOS)[number];

export const PetSchema = z.object({
  nome: z.string().min(1, "Nome obrigatório"),
  especie: z.enum(ESPECIES),
  raca: z.string().min(1, "Raça obrigatória"),
  peso: z.string().min(1, "Peso obrigatório"),
  sexo: z.enum(SEXOS),
});

export type PetInput = z.infer<typeof PetSchema>;