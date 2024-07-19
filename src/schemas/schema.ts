import { z } from "zod";

const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;

export const addressSchema = z.object({
  cep: z.string().regex(cepRegex, "CEP inválido. Formato esperado: XXXXX-XXX"),
  rua: z.string().min(1, "Rua é obrigatória"),
  numero: z.string().min(1, "Número da residência é obrigatório"),
  complemento: z.string().optional(),
  bairro: z.string().min(1, "Bairro é obrigatório"),
  cidade: z.string().min(1, "Cidade é obrigatória"),
  estado: z.string().min(1, "Estado é obrigatório"),
});

export const signinSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export const creditCardSchema = z.object({
  cardNumber: z.string().regex(/^\d{16}$/, "Número de cartão inválido"),
  cardHolderName: z.string().min(1, "Nome impresso no cartão é obrigatório"),
  expiryDate: z.string().regex(/^\d{2}\/\d{2}$/, "Data de validade inválida"),
  securityCode: z.string().regex(/^\d{3,4}$/, "Código de verificação inválido"),
  cpfCnpj: z.string().refine((value) => {
    const cpfRegex = /^\d{11}$/;
    const cnpjRegex = /^\d{14}$/;
    return cpfRegex.test(value) || cnpjRegex.test(value);
  }, "CPF/CNPJ inválido"),
  birthDate: z
    .string()
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Data de nascimento inválida"),
  paymentMethod: z
    .string()
    .refine((method) => method === "Débito" || method === "Crédito", {
      message: "Forma de pagamento inválida, selecione 'Débito' ou 'Crédito'",
    }),
});

export const paymentMethodSchema = z.object({
  paymentMethod: z.enum(["pix", "card", "boleto"]),
});

const productSchema = z.object({
  productId: z.number(),
  productName: z.string(),
  price: z.number(),
  rating: z.object({
    rate: z.number(),
    quantity: z.number(),
  }),
  imagesByColor: z.array(
    z.object({
      color: z.string(),
      url: z.string(),
    })
  ),
  images: z.array(
    z.object({
      color: z.string(),
      urls: z.array(z.string()),
    })
  ),
  description: z.string(),
  technicalDetails: z.array(
    z.object({
      marca: z.string().optional(),
      modelo: z.string().optional(),
    })
  ),
  specifications: z.array(z.record(z.string())),
  content: z.array(z.string()),
  warranty: z.string(),
  weight: z.string(),
  categoryId: z.number(),
  categoryFiltersOption: z.array(
    z.object({
      brand: z.string().optional(),
      color: z.string().optional(),
      connection: z.array(z.string()).optional(),
      driver: z.string().optional(),
      material: z.string().optional(),
    })
  ),
});

const cartTotalItemSchema = z.object({
  product: productSchema,
  quantity: z.number(),
});

const orderSchema = z.object({
  updatedOrder: z.array(cartTotalItemSchema),
  total: z.number(),
});

export const mainOrderSchema = z.object({
  paymentMethod: paymentMethodSchema,
  address: addressSchema,
  order: orderSchema,
});
