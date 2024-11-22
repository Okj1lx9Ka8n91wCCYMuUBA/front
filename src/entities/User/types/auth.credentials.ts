import { z } from 'zod'

export const emailSchema = z.string().email().optional()
export const InnSchema = z.string().optional()

export const passwordSchema = z
	.string()
	.min(8)
	.regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)

export type Email = z.infer<typeof emailSchema>
export type Inn = z.infer<typeof InnSchema>
export type Password = z.infer<typeof passwordSchema>
