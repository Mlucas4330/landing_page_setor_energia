import { ChevronDown, LucideX, FileSearch, BookOpen, MousePointerClick, Sparkles, Cpu, CheckCircle2 } from 'lucide-react';
import { ChevronRight } from "lucide-react"
import { useRef, useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import TryLegnet from './components/TryLegnet';
import isos from './assets/isos.png';
import criativo_vertical from './assets/criativo_vertical.mp4';
import Marquee from "react-fast-marquee"
import abengoa from "./assets/abengoa.png"
import cocacola from "./assets/cocacola.png"
import raizen from "./assets/raizen.png"
import tigre from "./assets/tigre.png"
import volvo from "./assets/volvo.png"
import { emptyForm, formatPhone, formatCNPJ, submitToHubSpot } from "./utils/hubspotService"

function App() {
  const formRef = useRef<HTMLElement>(null);
  const [showFloatingVideo, setShowFloatingVideo] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [formData, setFormData] = useState(emptyForm);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'telefone') {
      setFormData(prev => ({ ...prev, [id]: formatPhone(value) }));
    } else if (id === 'cnpj') {
      setFormData(prev => ({ ...prev, [id]: formatCNPJ(value) }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const success = await submitToHubSpot(formData);
    setLoading(false);
    if (success) setFormData(emptyForm);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFloatingVideo(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Toaster position="top-center" />
      <div className="bg-[#f5f5f5] text-black">

        {/* HEADER */}
        <header className="sticky top-0 z-50">
          <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4">
            <div className="flex items-center gap-2 md:gap-4">
              <button className="h-10 w-10 md:h-14 md:w-14 flex items-center justify-center hover:shadow-xl cursor-pointer transition-all duration-300 hover:scale-110 rounded-full backdrop-blur-xs shadow-lg">
                <img
                  src="icone_legnet.png"
                  alt="Legnet"
                  className="w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_0_10px_#c5ff00]"
                />
              </button>
              <button className="px-4 md:px-6 py-2 md:py-3 shadow-lg text-base md:text-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-xs rounded-full">
                Agile & LegNet
              </button>
            </div>
            <button
              onClick={scrollToForm}
              className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg transition-all duration-300 font-medium cursor-pointer bg-[#c5ff00] rounded-full hover:drop-shadow-[0_0_10px_#c5ff00] hover:scale-105"
            >
              Solicite uma Demonstração
            </button>
          </div>
        </header>

        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 md:px-8 py-12 md:py-16">
          <section className="space-y-8 md:space-y-12">
            <div className="text-8xl lg:text-9xl font-bold leading-none">
              Agile<br />
              <span className="relative inline-block">
                &amp; Leg
                <span className="relative inline-block">
                  <button className="absolute -top-10 sm:-top-12 md:-top-14 left-0 shadow-lg rounded-full backdrop-blur-xs p-3 md:p-4 transition-all duration-300 hover:scale-110">
                    <img
                      src="icone_legnet.png"
                      alt="Legnet"
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 drop-shadow-[0_0_10px_#c5ff00]"
                    />
                  </button>
                  Net
                </span>
              </span>
            </div>

            <p className="text-base sm:text-lg md:text-xl font-light">
              Fiscalização não cobra discurso. Cobra evidência.
            </p>

            <p className="text-base sm:text-lg md:text-xl font-light">
              Sua concessão de energia está blindada contra os riscos regulatórios que tiram o sono de qualquer diretor? Com a LegNet, sua resposta é um SIM confiante.
            </p>

            <div className="space-y-3 md:space-y-4">
              {[
                'Controle absoluto de 100% das suas obrigações e evidências',
                'Responda a fiscalizações em minutos, não em semanas',
                'Blinde sua concessão, sua reputação e seu CPF',
                'Apresente ao conselho dados precisos e confiáveis',
                'Transforme compliance de centro de custo em pilar estratégico',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#c5ff00] font-normal text-sm md:text-base">{i + 1}.</span>
                  <p className="font-light text-sm md:text-base">{text}</p>
                </div>
              ))}
            </div>

            <div>
              <button
                onClick={scrollToForm}
                className="px-8 py-4 text-base md:text-lg transition-all duration-300 font-medium cursor-pointer bg-[#c5ff00] rounded-full hover:drop-shadow-[0_0_10px_#c5ff00] hover:scale-105"
              >
                Solicite uma Demonstração
              </button>
              <p className="text-sm font-light text-gray-500 mt-3">
                Sem compromisso. Descubra em minutos como blindar sua operação.
              </p>
            </div>
          </section>

          <section ref={formRef} className="bg-white space-y-6 md:space-y-8 shadow-lg rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-center">Solicite uma Proposta</h2>


            <a href="https://wa.me/5521997279076"
              target="_blank"
              rel="noopener noreferrer"
              className="block shadow-md bg-white rounded-full w-full py-3 text-center text-black text-sm md:text-base"
            >
              WhatsApp
            </a>

            <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
              {[
                { id: 'nome', label: 'Nome*', type: 'text', placeholder: 'Nome', required: true },
                { id: 'email', label: 'E-mail*', type: 'email', placeholder: 'email@exemplo.com', required: true },
                { id: 'telefone', label: 'Telefone*', type: 'text', placeholder: '(00) 00000-0000', required: true },
                { id: 'cnpj', label: 'CNPJ*', type: 'text', placeholder: 'CNPJ da Empresa', required: true },
                { id: 'motivosite', label: 'Motivo', type: 'text', placeholder: 'Como podemos ajudar?', required: false },
              ].map(({ id, label, type, placeholder, required }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-xs md:text-sm font-normal mb-1">{label}</label>
                  <input
                    type={type}
                    id={id}
                    value={formData[id as keyof typeof formData]}
                    onChange={handleInputChange}
                    className="w-full p-3 pl-6 shadow-md bg-white transition-all duration-300 hover:scale-105 cursor-pointer rounded-full text-black text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#c5ff00]"
                    placeholder={placeholder}
                    required={required}
                  />
                </div>
              ))}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 text-base md:text-lg transition-all duration-300 font-medium cursor-pointer bg-[#c5ff00] rounded-full hover:drop-shadow-[0_0_10px_#c5ff00] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          </section>
        </div>

        {/* SEÇÃO 2: O PROBLEMA */}
        <section className="px-4 md:px-8 gap-14 py-10 md:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">
            Planilhas e e-mails não sustentam uma concessão.
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-light text-center max-w-3xl mx-auto mb-8 md:mb-12">
            No setor de energia, a gestão de conformidade é uma operação de alto risco. A pressão é constante, a legislação é complexa e as consequências de uma falha são devastadoras. Você reconhece estes desafios?
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="shadow-md bg-white rounded-xl p-5 md:p-6">
              <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 rounded-xl bg-[#333] text-[#c5ff00] mb-4">
                <span className="text-sm md:text-base">Risco Regulatório Invisível</span>
                <ChevronRight className="shrink-0" />
              </div>
              <p className="font-light text-sm md:text-base">
                Milhares de obrigações pulverizadas em diferentes áreas, tornando impossível ter uma visão clara do seu real estado de conformidade.
              </p>
            </div>

            <div className="shadow-md bg-white rounded-xl p-5 md:p-6">
              <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 rounded-xl bg-[#333] text-[#c5ff00] mb-4">
                <span className="text-sm md:text-base">Pânico em Auditorias</span>
                <ChevronRight className="shrink-0" />
              </div>
              <p className="font-light text-sm md:text-base">
                A notificação de uma fiscalização dispara uma caça frenética por documentos e evidências, gerando estresse, retrabalho e um enorme risco de falhas.
              </p>
            </div>

            <div className="shadow-md bg-white rounded-xl p-5 md:p-6">
              <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 rounded-xl bg-[#333] text-[#c5ff00] mb-4">
                <span className="text-sm md:text-base">Exposição do Executivo</span>
                <ChevronRight className="shrink-0" />
              </div>
              <p className="font-light text-sm md:text-base">
                Em caso de um incidente, a responsabilidade recai diretamente sobre o CPF do gestor. A falta de um sistema auditável deixa você exposto.
              </p>
            </div>

            <div className="shadow-md bg-white rounded-xl p-5 md:p-6 sm:col-span-2 lg:col-span-3">
              <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 rounded-xl bg-[#333] text-[#c5ff00] mb-4">
                <span className="text-sm md:text-base">Conselho Desinformado</span>
                <ChevronRight className="shrink-0" />
              </div>
              <p className="font-light text-sm md:text-base">
                Apresentar o status de compliance ao conselho com base em dados frágeis gera insegurança e questionamentos sobre a sua gestão.
              </p>
            </div>
          </div>
        </section>

        <TryLegnet scrollToForm={scrollToForm} />

        {/* SEÇÃO 3: CLIENTES */}
        <section className="px-4 md:px-8 py-8 md:py-12 my-10 md:my-16 bg-[#c2c0c0]">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">
            Líderes do setor elétrico confiam na nossa solução.
          </h2>

          <Marquee speed={50}>
            {[abengoa, cocacola, raizen, tigre, volvo].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Logo Cliente"
                className="mx-8 md:mx-12 h-16 sm:h-20 md:h-28 w-auto"
              />
            ))}
          </Marquee>
        </section>

        <TryLegnet scrollToForm={scrollToForm} />

        {/* SEÇÃO 4: A SOLUÇÃO */}
        <section className="mx-4 md:mx-8 px-4 md:px-8 my-10 md:my-16 py-10 md:py-16 bg-white rounded-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">
            A fortaleza de evidências que sua operação precisa.
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-light text-center max-w-3xl mx-auto mb-8 md:mb-12">
            Chega de improviso. Apresentamos a plataforma <strong>Agile</strong>, alimentada pela <strong>LegNet</strong>, a mais completa e atualizada inteligência de requisitos legais do setor elétrico. Nós transformamos a complexidade regulatória em controle absoluto.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="shadow-md p-5 md:p-6 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Controle Absoluto</h3>
              <p className="font-light text-sm md:text-base">
                Centralize 100% das suas obrigações e evidências em um único local. Tenha uma visão 360º da sua conformidade, a um clique de distância.
              </p>
            </div>

            <div className="shadow-md p-5 md:p-6 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Auditorias Simplificadas</h3>
              <p className="font-light text-sm md:text-base">
                Responda a qualquer fiscalização em minutos, não em semanas. Exporte relatórios completos e auditáveis que eliminam qualquer questionamento.
              </p>
            </div>

            <div className="shadow-md p-5 md:p-6 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Segurança Jurídica</h3>
              <p className="font-light text-sm md:text-base">
                Blinde sua concessão, sua reputação e seu CPF. Nossa plataforma cria uma trilha de auditoria irrefutável para cada requisito legal.
              </p>
            </div>

            <div className="shadow-md p-5 md:p-6 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Decisões Estratégicas</h3>
              <p className="font-light text-sm md:text-base">
                Apresente ao conselho dados precisos e confiáveis. Transforme a área de compliance de um centro de custo em um pilar estratégico de governança.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={scrollToForm}
              className="px-8 py-4 text-base md:text-lg transition-all duration-300 font-medium cursor-pointer bg-[#c5ff00] rounded-full hover:drop-shadow-[0_0_10px_#c5ff00] hover:scale-105"
            >
              Quero ver a plataforma em ação
            </button>
          </div>
        </section>

        {/* SEÇÃO 5: O QUE VOCÊ REALMENTE GANHA — DIFERENCIAIS */}
        <section className="py-10 md:py-16 px-4 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">
            Inteligência de Dados + Tecnologia de Gestão
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-light text-center max-w-3xl mx-auto mb-8 md:mb-12">
            Dois pilares que trabalham juntos para eliminar o risco regulatório da sua operação.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

            {/* 1 */}
            <div className="shadow-lg bg-white p-5 md:p-6 rounded-xl">
              <div className="flex justify-center mb-4">
                <FileSearch size={32} className="text-[#c5ff00]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">O cérebro da sua conformidade.</h3>
              <p className="font-light text-center mb-3 md:mb-4 text-sm md:text-base font-medium">
                LegNet — a mais sofisticada inteligência jurídica do setor elétrico.
              </p>
              <ul className="space-y-2">
                {[
                  'Equipe de mais de 20 advogados especializados',
                  'Mapeia, interpreta e atualiza cada requisito legal',
                  'Obrigações entregues de forma clara e direta',
                  'Sempre alinhada com a legislação vigente',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-light text-sm md:text-base">
                    <span className="text-[#c5ff00] font-bold shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 2 */}
            <div className="shadow-lg bg-white p-5 md:p-6 rounded-xl">
              <div className="flex justify-center mb-4">
                <BookOpen size={32} className="text-[#c5ff00]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">A força da sua gestão.</h3>
              <p className="font-light text-center mb-3 md:mb-4 text-sm md:text-base font-medium">
                Agile — o motor que transforma inteligência em ação.
              </p>
              <ul className="space-y-2">
                {[
                  'Crie planos e delegue tarefas com facilidade',
                  'Anexe evidências e gerencie prazos',
                  'Conformidade organizada e auditável',
                  'Garante que nada fique apenas no papel',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-light text-sm md:text-base">
                    <span className="text-[#c5ff00] font-bold shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 3 */}
            <div className="shadow-lg bg-white p-5 md:p-6 rounded-xl">
              <div className="flex justify-center mb-4">
                <MousePointerClick size={32} className="text-[#c5ff00]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">Auditorias respondidas em minutos</h3>
              <p className="font-light text-center mb-3 md:mb-4 text-sm md:text-base">
                Não em semanas. Não com caça frenética a documentos.
              </p>
              <p className="font-light text-sm md:text-base">
                Relatórios completos e auditáveis gerados automaticamente, que eliminam qualquer questionamento de fiscais e reguladores.
              </p>
            </div>

            {/* 4 */}
            <div className="shadow-lg bg-white p-5 md:p-6 rounded-xl">
              <div className="flex justify-center mb-4">
                <Sparkles size={32} className="text-[#c5ff00]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">Segurança para o executivo</h3>
              <ul className="space-y-2">
                {[
                  'Trilha de auditoria irrefutável por requisito',
                  'Blinda o CPF do gestor em caso de incidente',
                  'Dados precisos para apresentar ao conselho',
                  'Compliance como pilar estratégico, não risco',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-light text-sm md:text-base">
                    <span className="text-[#c5ff00] font-bold shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 5 */}
            <div className="shadow-lg bg-white p-5 md:p-6 rounded-xl sm:col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-4">
                <Cpu size={32} className="text-[#c5ff00]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">O sistema que trabalha por você</h3>
              <p className="font-light text-center mb-3 md:mb-4 text-sm md:text-base font-medium">
                Enquanto outros sistemas exigem trabalho, o Agile entrega decisão.
              </p>
              <p className="font-light text-sm md:text-base mb-2">A plataforma não espera você agir. Ela:</p>
              <ul className="space-y-2">
                {['Alerta', 'Sugere', 'Organiza', 'Valida', 'Direciona'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-light text-sm md:text-base">
                    <span className="text-[#c5ff00] font-bold shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        <TryLegnet scrollToForm={scrollToForm} />

        {/* COMPARATIVO */}
        <section className="mx-4 md:mx-8 px-4 md:px-8 my-10 md:my-16 py-10 md:py-16 bg-white rounded-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">
            Comparativo
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-light text-center max-w-3xl mx-auto mb-8 md:mb-12">
            Não oferecemos um serviço de validação porque conformidade não pode depender de agenda humana. O Agile + LegNet é um avaliador legal digital que trabalha todos os dias, em todos os requisitos, sem custo variável.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="shadow-md p-5 md:p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-500">Concorrente</h3>
              <ul className="space-y-3">
                {[
                  'Validação manual',
                  'Serviço pontual',
                  'Dependente de pessoas',
                  'Olha o passado',
                  'Risco de subjetividade',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-light text-sm md:text-base text-gray-500">
                    <span className="shrink-0">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="shadow-md p-5 md:p-6 rounded-xl border-2 border-[#c5ff00]">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">Agile + LegNet</h3>
              <ul className="space-y-3">
                {[
                  'Avaliação e validação automatizada',
                  'Conformidade contínua',
                  'Independente de escala',
                  'Atua preventivamente',
                  'Padrão técnico e replicável',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-light text-sm md:text-base">
                    <span className="text-[#c5ff00] font-bold shrink-0">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* O QUE MUDA NA PRÁTICA */}
        <section className="py-10 md:py-16 px-4 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            O que muda na prática para a empresa
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="shadow-md bg-white p-5 md:p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-500">Concorrente</h3>
              <ul className="space-y-3">
                {[
                  'O usuário preenche evidências',
                  'Alguém valida depois',
                  'O risco aparece tarde',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-light text-sm md:text-base text-gray-500">
                    <span className="shrink-0">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="shadow-md bg-white p-5 md:p-6 rounded-xl border-2 border-[#c5ff00]">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">Agile + LegNet</h3>
              <ul className="space-y-3">
                {[
                  'O sistema orienta o que fazer',
                  'Sugere evidências, documentos e planos de ação',
                  'A não conformidade é evitada, não apenas identificada',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-light text-sm md:text-base">
                    <span className="text-[#c5ff00] font-bold shrink-0">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS EXCLUSIVOS */}
        <section className="mx-4 md:mx-8 px-4 md:px-8 my-10 md:my-16 py-10 md:py-16 bg-[#333] rounded-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">
            Diferencial exclusivo do Agile + LegNet
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
            {[
              'A mais completa inteligência jurídica do setor elétrico',
              'Trilha de auditoria irrefutável para cada requisito legal',
              'Conexão automática entre obrigações e evidências',
              'O sistema trabalha para o gestor, não o contrário',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                <CheckCircle2 size={20} className="text-[#c5ff00] shrink-0 mt-0.5" />
                <p className="text-white font-light text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <TryLegnet scrollToForm={scrollToForm} />

        {/* ISO */}
        <section className="mx-4 md:mx-8 my-10 md:my-16 p-6 md:p-8 bg-[#c2c0c0] rounded-3xl">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white mx-auto max-w-3xl leading-relaxed">
            Atuamos com padrões reconhecidos mundialmente, garantindo qualidade, segurança e eficácia em todos os processos.
          </p>
          <img
            src={isos}
            alt="Certificações ISO e ONU"
            className="w-full max-w-2xl h-auto object-contain mx-auto"
          />
        </section>

        <TryLegnet scrollToForm={scrollToForm} />

        {/* FAQ */}
        <section className="py-10 md:py-16 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">

            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-3 md:p-4">
                  <span className="text-base md:text-lg font-bold">Qual a diferença entre o Agile + LegNet e um serviço humano de validação?</span>
                  <span className="transition group-open:rotate-180 text-[#c5ff00] shrink-0 ml-4"><ChevronDown /></span>
                </summary>
                <div className="p-3 md:p-4 font-light text-sm md:text-base">
                  Serviços humanos validam o que já aconteceu — olham o passado. O Agile + LegNet atua preventivamente, orientando antes, durante e depois da conformidade. A plataforma alerta, sugere evidências, organiza planos de ação e direciona o gestor em tempo real, sem depender de agenda humana ou custo variável.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-3 md:p-4">
                  <span className="text-base md:text-lg font-bold">Como a plataforma protege o CPF do gestor em caso de incidente?</span>
                  <span className="transition group-open:rotate-180 text-[#c5ff00] shrink-0 ml-4"><ChevronDown /></span>
                </summary>
                <div className="p-3 md:p-4 font-light text-sm md:text-base">
                  A plataforma cria uma trilha de auditoria irrefutável para cada requisito legal. Cada evidência, documento e ação fica registrada com data, responsável e vínculo direto à obrigação legal correspondente. Em caso de fiscalização ou incidente, você tem prova documental de que a conformidade foi gerida de forma séria e sistemática.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-3 md:p-4">
                  <span className="text-base md:text-lg font-bold">Como responder a uma fiscalização da ANEEL em minutos?</span>
                  <span className="transition group-open:rotate-180 text-[#c5ff00] shrink-0 ml-4"><ChevronDown /></span>
                </summary>
                <div className="p-3 md:p-4 font-light text-sm md:text-base">
                  Com o Agile, todas as evidências e documentos já estão organizados e vinculados a cada requisito legal. Ao receber uma notificação, você exporta relatórios completos e auditáveis com um clique — eliminando a caça frenética por documentos, o retrabalho e o risco de falhas na resposta.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-3 md:p-4">
                  <span className="text-base md:text-lg font-bold">Por que conformidade no setor elétrico não pode depender de planilhas?</span>
                  <span className="transition group-open:rotate-180 text-[#c5ff00] shrink-0 ml-4"><ChevronDown /></span>
                </summary>
                <div className="p-3 md:p-4 font-light text-sm md:text-base">
                  Porque são milhares de obrigações pulverizadas em diferentes áreas, tornando impossível ter uma visão clara do real estado de conformidade com planilhas e e-mails. O Agile + LegNet centraliza 100% das obrigações e evidências, oferece visão 360º da conformidade e garante que nenhum requisito seja esquecido — sem depender de controles manuais sujeitos a falhas humanas.
                </div>
              </details>
            </div>

          </div>
        </section>

        {/* CTA FINAL */}
        <section className="mx-4 md:mx-8 px-4 md:px-8 my-10 md:my-16 py-14 md:py-20 bg-[#111] rounded-3xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6">
            Sua concessão está segura ou você está contando com a sorte?
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-light text-white/80 max-w-2xl mx-auto mb-10">
            Não espere a próxima notificação para descobrir uma falha. No setor de energia, quem não prova conformidade, se expõe. Proteja sua operação, sua carreira e sua concessão com a única solução que une inteligência jurídica e gestão de ponta.
          </p>
          <button
            onClick={scrollToForm}
            className="px-10 py-5 text-lg md:text-xl transition-all duration-300 font-bold cursor-pointer bg-[#c5ff00] rounded-full hover:drop-shadow-[0_0_20px_#c5ff00] hover:scale-105"
          >
            AGENDAR DEMONSTRAÇÃO AGORA
          </button>
          <p className="text-white/50 text-sm mt-6">Agenda liberada para esta semana. Garanta seu horário.</p>
        </section>

        {/* Vídeo flutuante */}
        {showFloatingVideo && (
          <div className="fixed bottom-24 right-4 z-50">
            <div className="relative">
              <video
                className="object-cover rounded-lg shadow-lg w-36 h-56 sm:w-44 sm:h-64 md:w-[180px] md:h-[280px]"
                controls
                controlsList="nodownload nofullscreen"
                disablePictureInPicture
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={criativo_vertical} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              <button
                className="absolute -top-2 -right-2 bg-gray-800 cursor-pointer duration-300 transition-all hover:scale-105 text-white rounded-full w-6 h-6 p-1 flex items-center justify-center"
                onClick={() => setShowFloatingVideo(false)}
              >
                <LucideX size={14} />
              </button>
            </div>
          </div>
        )}

        <footer className="px-4 pb-8">
          <p className="text-gray-600 text-center font-light mb-4 text-sm md:text-base">
            © 2025 Agile & LegNet. Todos os direitos reservados.
          </p>
        </footer>
      </div >
    </>
  );
}

export default App;