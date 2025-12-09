import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  age: z.number().min(18, "Idade mínima é 18"),
  consent: z.boolean().refine(val => val, "É necessário consentir"),
});

type FormData = z.infer<typeof schema>;

export default function ComplexForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Formulário Avançado</h2>
      <div className="mb-2">
        <label>Nome:</label>
        <input {...register("name")} className="input" />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      </div>
      <div className="mb-2">
        <label>E-mail:</label>
        <input {...register("email")} className="input" />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>
      <div className="mb-2">
        <label>Idade:</label>
        <input type="number" {...register("age", { valueAsNumber: true })} className="input" />
        {errors.age && <span className="text-red-500">{errors.age.message}</span>}
      </div>
      <div className="mb-2">
        <label>
          <input type="checkbox" {...register("consent")} /> Eu concordo com os termos
        </label>
        {errors.consent && <span className="text-red-500">{errors.consent.message}</span>}
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
}
