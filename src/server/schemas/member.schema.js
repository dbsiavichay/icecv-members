import z from 'zod'

const childrenSchema = z.object({
  id: z.number().nonnegative(),
  firstName: z.string(),
  lastName: z.string().optional(),
  birthdate: z.date().optional(),
})

const contactSchema = z.object({
  address: z.string(),
  email: z.string(),
  phones: z.object({
    type: z.enum(['landline', 'mobile']),
    number: z.string(),
  }).array()
})

export const memberSchema = z.object({
  id: z.number().nonnegative(),
  code: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  birthdate: z.date(),
  birthplace: z.object({}),
  ocupation: z.string(),
  civilState: z.enum(['married', 'singled', 'divorced', 'widowed']),
  marriageDate: z.date().optional(),
  spouseName: z.string().optional(),
  conversionDate: z.date(),
  baptismDate: z.date().optional(),
  ecclesiasticalData: z.object({
    question: z.string(),
    answer: z.string()
  }).array(),
  contactData: contactSchema,
  childrens: childrenSchema.array()
})