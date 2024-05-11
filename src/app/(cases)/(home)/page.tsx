export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <div className="flex items-start justify-center">
      <p className="text-lg text-white font-semibold border-b-4 border-lime-600 pb-3">
        A opção de selecionar pelo tribunal estará disponível EM BREVE!
      </p>
    </div>
  )
}
