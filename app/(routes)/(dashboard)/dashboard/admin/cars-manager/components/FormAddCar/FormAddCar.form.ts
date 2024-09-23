import { z } from "zod";

export const formSchema = z.object({
  Name: z.string().min(2).max(50),
  Cv: z.string().min(2).max(50),
  Transmision: z.string().min(2).max(20),
  Personas: z.string(),
  Foto: z.string().min(50).max(100),
  Motor: z.string().min(2).max(50),
  Tipo: z.string().min(2).max(50),
  Precio: z.string().min(2).max(50),
  Publicado: z.boolean(),
});
