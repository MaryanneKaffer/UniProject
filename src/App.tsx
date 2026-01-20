function App() {

  return (
    <div className='flex flex-col gap-10'>
      <section id="home" className='h-[90dvh] pt-[45px] items-center justify-center flex'>
        <span className='flex flex-col gap-1'>
          <p className='w-[500px] text-5xl'>Site Informativo de Apoio Psicológico</p>
          <p className='w-[500px] text-3xl italic text-center'>“Você não está sozinho”</p>
        </span>
        <img src='/assets/cover.png' className='h-[800px]' />
      </section>

      <section id="content" className=' bg-gray-300/80 rounded-md p-20'>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-8'>
            <span>
              <p className='text-4xl mb-3'>Entenda seus Sentimentos</p>
              <div className='text-2xl ml-4 flex flex-col gap-1'>
                <p>O que é ansiedade?</p>
                <p>O que é depressão?</p>
                <p>Estresse e esgotamento emocional?</p>
                <p>Quando procurar ajuda?</p>
                <p className='text-blue-500'>Iremos te ajudar a entender mais sobre como se sente.</p>
              </div>
            </span>
            <span>
              <p className='text-4xl mb-3'>Dicas de Autocuidado</p>
              <div className='text-2xl ml-4 flex flex-col gap-1'>
                <p>Respiração guiada</p>
                <p>Rotina de sono</p>
                <p>Organização do dia</p>
                <p>Atividades que ajudam a relaxar</p>
                <p className='text-blue-500'>Aprenda a cuidar melhor de si mesmo.</p>
              </div>
            </span>
            <span>
              <p className='text-4xl mb-3'>Onde Buscar Ajuda</p>
              <div className='text-2xl ml-4 flex flex-col gap-1'>
                <p>Telefones de apoio (ex: CVV)</p>
                <p>Clínicas ou serviços locais</p>
                <p>Contate um psicologo conosco</p>
                <p className='text-blue-500'>Aprenda a cuidar melhor de si mesmo.</p>
              </div>
            </span>
          </div>
          <img src='/assets/meditation.svg' className='h-[700px]' />
        </div>
      </section>
      <section id='about' className='flex-1 py-12'>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-3 w-[1000px]'>
            <p className='text-4xl'>Sobre</p>
            <div className='text-2xl ml-4 flex flex-col gap-4'>
              <p>Este site foi criado com o objetivo de oferecer informações acessíveis sobre apoio psicológico, saúde mental e autocuidado. A proposta é disponibilizar conteúdos simples, confiáveis e atualizados, ajudando as pessoas a reconhecerem sinais emocionais e a entenderem quando e onde buscar ajuda.</p>
              <p>Além disso, o site busca promover o bem-estar e a conscientização sobre a importância de cuidar da saúde mental, reforçando que pedir ajuda é um ato de coragem e autocuidado. Aqui, você também encontra informações sobre serviços, contatos e redes de apoio psicológico, tanto locais quanto online, facilitando o acesso a suporte emocional.</p>
              <p>Este projeto acredita que a informação pode ser um primeiro passo para o cuidado, e que ninguém precisa enfrentar seus sentimentos sozinho.</p>
            </div>
          </div>
          <img src='/assets/flower.svg' className='h-[400px]' />
        </div>
      </section>
    </div>
  )
}

export default App
