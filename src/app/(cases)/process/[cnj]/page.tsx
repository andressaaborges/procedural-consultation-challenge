import { api } from '@/data/api'
import { Case } from '@/data/types/case'
import { Metadata } from 'next'

interface ProcessProps {
  params: {
    cnj: string
  }
}

async function getProcess(cnj: string): Promise<Case> {
  const response = await api(`/cases/${cnj}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'Erro desconhecido')
  }

  const caseItem = await response.json()

  return caseItem
}

export async function generateMetadata({
  params,
}: ProcessProps): Promise<Metadata> {
  return {
    title: `Processo nº ${params.cnj}`,
  }
}

export default async function ProcessPage({ params }: ProcessProps) {
  try {
    const caseItem = await getProcess(params.cnj)

    return (
      <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
        <div className="col-span-6 row-span-6 flex flex-col gap-10">
          <h2 className="text-2xl font-semibold text-white/75">
            Processo nº {caseItem.cnj} do {caseItem.court}
          </h2>
          <div className="flex flex-col shadow-2xl">
            <h4 className="rounded-se-lg rounded-ss-lg bg-sky-600 border-b-4 border-zinc-950 p-4 font-semibold text-white">
              Movimentações
            </h4>
            {caseItem.movements.map((movement) => (
              <div
                key={movement.date.concat(movement.description)}
                className="bg-zinc-900 border-b-4 border-zinc-950 text-zinc-950 p-4"
              >
                <span className="text-sm rounded-lg bg-sky-200 py-1 px-2 my-2 shadow-2xl">
                  {movement.date}
                </span>
                <p className="text-base text-white/50 mt-2 font-semibold">
                  {movement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-3 row-span-3 flex flex-col gap-10">
          <h2 className="text-xl font-semibold text-white/75">
            Mais informações:
          </h2>

          <div className="flex flex-col gap-4 rounded-lg bg-zinc-900 p-4 my-2 shadow-2xl border-l-4 border-sky-600 hover:border-lime-600">
            <h4 className="font-semibold">Detalhes do processo</h4>
            <div className="border-l-4 border-yellow-600 text-white p-4">
              <p className="text-base">{caseItem.details}</p>
            </div>
          </div>
        </div>

        <div className="col-span-3 row-span-2 flex flex-col rounded-lg gap-4 bg-zinc-900 p-4  shadow-2xl border border-sky-600 hover:border-lime-600">
          <h4 className="font-semibold">Partes envolvidas</h4>
          <div className="flex flex-col">
            <div className="border-l-4 border-yellow-600 text-white text-base p-4">
              <p>
                <span className="font-semibold">Autor: </span>
                {caseItem.parties.plaintiff}
              </p>
              <p>
                <span className="font-semibold">Réu: </span>
                {caseItem.parties.defendant}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    return (
      <div className="flex items-start justify-center">
        <p className="text-lg text-white font-semibold border-b-4 border-lime-600 pb-3">
          {(error as Error).message}
        </p>
      </div>
    )
  }
}
