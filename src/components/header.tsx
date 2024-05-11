import Link from 'next/link'
import { SearchForm } from './search-form'

export function Header() {
  return (
    <div className="flex flex-col items-center justify-items-center gap-14">
      <div className="flex flex-col items-center justify-items-center gap-2">
        <Link href="/" className="text-3xl font-extrabold text-white">
          Consulta Processual
        </Link>
        <p className="text-xl text-white/50">
          Consultar processos por número CNJ em um clique
        </p>
      </div>

      <div className="flex items-center gap-4">
        <SearchForm />
      </div>
    </div>
  )
}
