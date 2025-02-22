import {z} from 'zod';

export const customerSchema = z.object({
  fullName: z
    .string({ required_error: 'El nombre completo es requerido' })
    .min(1, 'El nombre completo no puede estar vacío')
		.max(50, 'El nombre completo no puede tener mas de 50 caracteres')
		.regex(/^[a-zA-Z\s]+$/, 'El nombre solo puede contener letras y espacios'),
  email: z
    .string({ required_error: 'El email es requerido' })
		.min(1, 'El email no puede estar vacío')
		.max(50, 'El email no puede tener mas de 50 caracteres')
    .email('El email debe ser válido'),
  password: z
    .string({ required_error: 'La contraseña es requerida' })
    .min(4, 'La contraseña debe tener al menos 4 caracteres')
		.max(22, 'La contraseña como maximo puede tener 22 caracteres')
		.regex(/^[a-zA-Z0-9\s]+$/, 'La contraseña solo puede contener letras, espacios y números')
	});