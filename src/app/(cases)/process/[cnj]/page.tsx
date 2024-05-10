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
          <h2>
            Processo nº {caseItem.cnj} do {caseItem.court}
          </h2>
          <div className="flex flex-col">
            <h4 className="rounded-se-lg rounded-ss-lg bg-zinc-900 border-b-4 border-zinc-950 p-4 font-semibold">
              Movimentações
            </h4>
            {caseItem.movements.map((movement) => (
              <div
                key={movement.date.concat(movement.description)}
                className="bg-zinc-400 border-b-4 border-zinc-950 text-zinc-950 p-4"
              >
                <p>
                  <span>{movement.date}</span>
                  <br />
                  {movement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-3 row-span-3 flex flex-col gap-10">
          <h2>Mais informações</h2>

          <div className="flex flex-col">
            <h4 className="rounded-se-lg rounded-ss-lg bg-zinc-900 border-b-4 border-zinc-950 p-4 font-semibold">
              Detalhes do processo
            </h4>
            <div className="bg-zinc-400 border-b-4 border-zinc-950 text-zinc-950 p-4">
              <p>{caseItem.details}</p>
            </div>
          </div>
        </div>

        <div className="col-span-3 row-span-3 flex flex-col gap-0">
          <h4 className="rounded-se-lg rounded-ss-lg bg-zinc-900 border-b-4 border-zinc-950 p-4 font-semibold">
            Partes envolvidas
          </h4>
          <div className="flex flex-col">
            <div className="bg-zinc-400 border-b-4 border-zinc-950 text-zinc-950 p-4">
              <p>Autor: {caseItem.parties.plaintiff}</p>
              <p>Réu: {caseItem.parties.defendant}</p>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    return <p>{(error as Error).message}</p>
  }
}
