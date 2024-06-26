'use client'

import { cnjRegexValidation } from '@/utils/validation'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const CnjFormSchema = z.object({
  cnj: z.string().regex(cnjRegexValidation, {
    message:
      'Número inválido! CNJ deve seguir o formato: 0000000-00.0000.0.00.0000',
  }),
})

type CnjFormData = z.infer<typeof CnjFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CnjFormData>({
    resolver: zodResolver(CnjFormSchema),
  })

  const router = useRouter()
  async function onSubmit(data: CnjFormData) {
    router.push(`/process/${data.cnj}`)
  }

  return (
    <div className="flex flex-col items-center justify-items-center gap-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-[420px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700 focus-within:outline-1 focus-within:ring focus-within:ring-sky-600"
      >
        <Search className="w-6 h-5 text-zinc-500" />

        <input
          type="text"
          {...register('cnj')}
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          placeholder="Digite o número de processo..."
          required
        />

        <button
          type="submit"
          className="bg-sky-600 hover:bg-sky-700 active:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-500 px-5 py-1 rounded-full font-semibold"
        >
          Buscar
        </button>
      </form>

      <p className="text-lg text-white font-semibold">
        {errors.cnj
          ? errors.cnj.message
          : 'Digite o número CNJ do processo com números, hífen e pontos para realizar a busca!'}
      </p>
    </div>
  )
}
