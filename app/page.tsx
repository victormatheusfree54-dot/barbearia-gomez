'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export default function Home() {
  const whatsappNumber = "5521967436081";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" as const }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.2 }
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary/30">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md shadow-lg shadow-black/20">
        <nav className="flex justify-between items-center px-6 py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="text-2xl">✂️</span>
            <span className="text-2xl font-headline font-bold text-primary-container tracking-tighter uppercase">Barbearia Gomez</span>
          </div>
          <div className="hidden md:flex gap-8 items-center font-headline tracking-tighter uppercase">
            <a className="text-neutral-400 font-medium hover:text-primary transition-all duration-300" href="#servicos" onClick={(e) => handleSmoothScroll(e, 'servicos')}>Serviços</a>
            <a className="text-neutral-400 font-medium hover:text-primary transition-all duration-300" href="#planos" onClick={(e) => handleSmoothScroll(e, 'planos')}>Planos</a>
            <a className="text-neutral-400 font-medium hover:text-primary transition-all duration-300" href="#localizacao" onClick={(e) => handleSmoothScroll(e, 'localizacao')}>Localização</a>
            <a className="bg-primary-container text-on-primary-container px-6 py-2 text-sm font-bold active:scale-95 ease-in-out transition-all rounded-sm" href={whatsappLink} target="_blank" rel="noopener noreferrer">Agendar</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMY0W8vSBSYPx7cUMnGQTDzEJvSi4vGQAooaDbtz_U59vwVAs6C1N5miFVKxcSsVPDzoHfmNgvFLtL0Z2edpc9qcrizTpZIeTmO_Co92I2tVz5aLLQnAUCNLKsmz8mfJXYsZUfBeoCxaqEjJNvSIpibd_vmw6yOGmp6d1nas4VjiRtzSt2uQTRkgQstBfCe64kXbOBBrEGQajb1S8-0bdbw6UGzB6Gg225ka8Pj355wdTOxzOTdQ4A3mQzXUpTUiYvQbzWfKb5PFTo"
              alt="Interior de barbearia de luxo"
              fill
              className="object-cover opacity-40 grayscale"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center w-full">
            <motion.div 
              className="md:col-span-8 lg:col-span-7"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-primary text-sm">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="font-label text-sm tracking-[0.2em] uppercase text-on-surface-variant">5 Estrelas no Google Maps</span>
              </div>
              
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1] tracking-tight">
                A Arte da <span className="text-primary italic">Barbearia</span> Revisitada.
              </h1>
              
              <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
                Em Paciência, RJ, oferecemos mais que um corte. Proporcionamos um refúgio de sofisticação com profissionais qualificados e procedimentos de alto padrão.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  className="bg-primary text-on-primary px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-[#e9c349] transition-all active:scale-95 inline-flex items-center justify-center gap-3 rounded-sm" 
                  href={whatsappLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Agendar no WhatsApp 🟢
                </a>
                <a 
                  className="border border-outline-variant/40 text-primary px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-surface-container-high transition-all active:scale-95 inline-flex items-center justify-center rounded-sm" 
                  href="#servicos"
                  onClick={(e) => handleSmoothScroll(e, 'servicos')}
                >
                  Ver Procedimentos
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bento Services Grid */}
        <section className="luxury-gap px-6 max-w-7xl mx-auto" id="servicos">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
            {...fadeInUp}
          >
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl md:text-5xl mb-6">Procedimentos <span className="text-primary italic">Diferenciados</span></h2>
              <p className="text-on-surface-variant text-lg">Técnicas ancestrais fundidas com a precisão moderna para resultados impecáveis.</p>
            </div>
            <div className="hidden md:block h-px flex-grow mx-12 bg-outline-variant/20"></div>
            <span className="font-label text-primary tracking-widest uppercase text-sm">Especialidades</span>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Service 1 */}
            <motion.div variants={fadeInUp} className="md:col-span-2 bg-surface-container border border-outline-variant/15 p-12 group hover:bg-surface-container-high transition-colors rounded-sm">
              <div className="text-4xl mb-8">🧔🏻‍♂️</div>
              <h3 className="font-headline text-3xl mb-4">Barboterapia Premium</h3>
              <p className="text-on-surface-variant mb-8 max-w-md">Toalhas quentes, óleos essenciais e massagem facial para uma experiência de relaxamento profundo e barbear perfeito.</p>
              <div className="w-full h-80 md:h-96 overflow-hidden rounded-sm relative shadow-xl shadow-black/40">
                <Image 
                  src="/barbearia-gomez.jpg" 
                  alt="Interior da Barbearia Gomez" 
                  fill
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeInUp} className="bg-surface-container-low border border-outline-variant/15 p-12 flex flex-col justify-between group rounded-sm">
              <div>
                <div className="text-4xl mb-8">✂️</div>
                <h3 className="font-headline text-3xl mb-4">Corte de Visagismo</h3>
                <p className="text-on-surface-variant mb-6">Estudo das linhas faciais para criar o corte que melhor harmoniza com seu rosto e estilo pessoal.</p>
              </div>
              <ul className="space-y-4 font-label text-sm uppercase tracking-wider text-on-surface/70">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Degradê Americano</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Scissor Over Comb</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Modern Mullet</li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeInUp} className="bg-surface-container-low border border-outline-variant/15 p-12 group rounded-sm">
              <div className="text-4xl mb-8">🧴</div>
              <h3 className="font-headline text-2xl mb-4">Limpeza de Pele</h3>
              <p className="text-on-surface-variant">Remoção de impurezas com produtos importados exclusivos para a pele masculina.</p>
            </motion.div>

            {/* Service 4 */}
            <motion.div variants={fadeInUp} className="md:col-span-2 bg-surface-container border border-outline-variant/15 p-12 flex items-center gap-12 group rounded-sm">
              <div className="flex-1">
                <div className="text-4xl mb-8">🎨</div>
                <h3 className="font-headline text-3xl mb-4">Pigmentação & Camuflagem</h3>
                <p className="text-on-surface-variant">Correção natural de falhas na barba e cobertura discreta de fios brancos.</p>
              </div>
              <div className="hidden md:block w-48 h-48 rounded-sm overflow-hidden relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9HeCfVckRnM81d0hJKiIjCaUwMmyOlFbiUAjhznEO-ar-wXYXEK_3byp_fZqyFQh1AulIg4u9ATNXa-QnnLaRKSzAr_9NfxyI-MoMwwCx-XFbY1FnPHaIlZUn0gqi-0pTAlsXWis1N0YBabs3042Z9NEfwamNI4c0jsObmA40z122dviri5JKnBTYwsFe6PyQTeDn0n-Lxa9qT6iFUPa_UqvFeGDfiBZv49lelZOS1wcgyUBpz_l5BSoSj_t-MwFQRQeW4ewUM3bV" 
                  alt="Barba bem feita" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Plans Section */}
        <section className="bg-surface-container-lowest luxury-gap" id="planos">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="text-center mb-24"
              {...fadeInUp}
            >
              <h2 className="font-headline text-4xl md:text-6xl mb-6 italic">Club Gomez</h2>
              <p className="text-on-surface-variant text-lg max-w-2xl mx-auto uppercase tracking-widest text-sm">Assinaturas mensais para o homem que valoriza sua imagem constantemente.</p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Plan 1 */}
              <motion.div variants={fadeInUp} className="bg-surface p-10 flex flex-col items-center text-center group border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 rounded-sm">
                <span className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-6">Essential</span>
                <h3 className="font-headline text-3xl mb-2">Corte Mensal</h3>
                <div className="text-primary text-4xl font-bold font-headline mb-8">R$ 80<span className="text-lg text-on-surface-variant font-body font-normal">/mês</span></div>
                <ul className="space-y-5 mb-12 text-on-surface-variant flex-grow">
                  <li>1 Corte de Cabelo Premium</li>
                  <li>Lavagem com Shampoo Especial</li>
                  <li>Finalização com Pomada Importada</li>
                  <li>Café Espresso Cortesia</li>
                </ul>
                <a className="w-full py-4 border border-primary/20 text-primary font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-on-primary transition-all rounded-sm" href={whatsappLink} target="_blank" rel="noopener noreferrer">Assinar agora</a>
              </motion.div>

              {/* Plan 2 - Featured */}
              <motion.div variants={fadeInUp} className="bg-surface-container-high p-10 flex flex-col items-center text-center relative overflow-hidden group border-2 border-primary/50 rounded-sm scale-105 z-10 shadow-2xl shadow-black/50">
                <div className="absolute top-0 right-0 bg-primary text-on-primary px-6 py-1 text-[10px] font-bold uppercase tracking-tighter">Mais Procurado</div>
                <span className="font-label text-xs tracking-[0.3em] uppercase text-primary mb-6">Executive</span>
                <h3 className="font-headline text-3xl mb-2">Combo Premium</h3>
                <div className="text-primary text-4xl font-bold font-headline mb-8">R$ 140<span className="text-lg text-on-surface-variant font-body font-normal">/mês</span></div>
                <ul className="space-y-5 mb-12 text-on-surface-variant flex-grow">
                  <li>Cabelo & Barba (1x mês)</li>
                  <li>Barboterapia Completa</li>
                  <li>Sobrancelha Express</li>
                  <li>Cerveja Artesanal de Boas-vindas</li>
                  <li>Prioridade no Agendamento</li>
                </ul>
                <a className="w-full py-4 bg-primary text-on-primary font-bold uppercase tracking-widest text-xs hover:bg-[#e9c349] transition-all rounded-sm" href={whatsappLink} target="_blank" rel="noopener noreferrer">Assinar agora</a>
              </motion.div>

              {/* Plan 3 */}
              <motion.div variants={fadeInUp} className="bg-surface p-10 flex flex-col items-center text-center group border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 rounded-sm">
                <span className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-6">Elite</span>
                <h3 className="font-headline text-3xl mb-2">Total Gomez</h3>
                <div className="text-primary text-4xl font-bold font-headline mb-8">R$ 220<span className="text-lg text-on-surface-variant font-body font-normal">/mês</span></div>
                <ul className="space-y-5 mb-12 text-on-surface-variant flex-grow">
                  <li>Cortes & Barbas Ilimitados</li>
                  <li>Manicure Masculina</li>
                  <li>Máscara de Argila Preta</li>
                  <li>Voucher Presente Mensal</li>
                  <li>Acesso VIP a Eventos da Casa</li>
                </ul>
                <a className="w-full py-4 border border-primary/20 text-primary font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-on-primary transition-all rounded-sm" href={whatsappLink} target="_blank" rel="noopener noreferrer">Assinar agora</a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Location Section */}
        <section className="luxury-gap px-6 max-w-7xl mx-auto" id="localizacao">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="font-headline text-4xl md:text-5xl mb-8 leading-tight">No Coração de <br/><span className="text-primary italic">Paciência, RJ</span></h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <p className="text-lg font-bold mb-1">Nosso Endereço</p>
                    <p className="text-on-surface-variant">Estrada do Campinho, 1234 - Paciência<br/>Rio de Janeiro - RJ, 23580-000</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🕒</div>
                  <div>
                    <p className="text-lg font-bold mb-1">Horário de Funcionamento</p>
                    <p className="text-on-surface-variant">Segunda a Sexta: 09:00 às 20:00<br/>Sábado: 08:00 às 19:00</p>
                  </div>
                </div>
              </div>
              
              <a className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:underline decoration-primary/40 underline-offset-8" href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                Como chegar pelo Maps ↗️
              </a>
            </motion.div>
            
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -inset-4 border border-primary/20 -z-10 group-hover:scale-[1.02] transition-transform duration-500 rounded-sm"></div>
              <div className="h-[500px] bg-surface-container overflow-hidden grayscale contrast-125 opacity-80 rounded-sm relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC19ot68Md3_RBktuDIN5831lfhX0zY4qzO5OCQfLLh-3bOHn2XlpuQl3SL_zZhgPXoYd-d31VnjeFDLfhtmAzhTHXc_EMuNMD-jO5f3lODuOX59OXYJqqN_xnaF-cp1fSWe6Tbh4cp1hbdfxLHwa1N_uW2gukxe5wwOcIJk1nz_4NXeIov9BGSBGl0l2iNpSxIqMgjg0iZbuE6VwTrAQece4IKxQJ1dOHCVf2xSx1KrUZKi8YZ3lMACUcUCKHqL-szEz6PbQvj5UvJ" 
                  alt="Mapa localização" 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                  <div className="bg-neutral-950 p-6 flex flex-col items-center text-center shadow-2xl rounded-sm border border-white/5">
                    <div className="text-3xl mb-2">📌</div>
                    <p className="font-headline text-xl text-primary">Barbearia Gomez</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-24 px-6 max-w-7xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-primary-container/20 to-surface-container p-12 md:p-24 text-center border-t border-primary/10 relative overflow-hidden rounded-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <h2 className="font-headline text-4xl md:text-6xl mb-8 relative z-10">Pronto para elevar seu visual?</h2>
            <p className="text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto relative z-10">Não somos apenas barbeiros, somos consultores de imagem dedicados à sua melhor versão.</p>
            <a 
              className="bg-primary text-on-primary px-16 py-6 font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#e9c349] transition-all active:scale-95 relative z-10 inline-block rounded-sm shadow-xl shadow-primary/20" 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
            >
              Agendar Horário VIP
            </a>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 w-full py-12 px-8 border-t border-neutral-800/30">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-screen-2xl mx-auto">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-headline text-lg text-primary-container mb-2 font-bold uppercase tracking-widest">Barbearia Gomez</span>
            <p className="font-body text-sm tracking-wide text-neutral-500 text-center md:text-left">© {new Date().getFullYear()} Barbearia Gomez. Paciência, RJ.</p>
          </div>
          <div className="flex gap-8 font-body text-sm tracking-wide uppercase">
            <a className="text-neutral-500 hover:text-white transition-colors opacity-80 hover:opacity-100" href="#servicos" onClick={(e) => handleSmoothScroll(e, 'servicos')}>Serviços</a>
            <a className="text-neutral-500 hover:text-white transition-colors opacity-80 hover:opacity-100" href="#planos" onClick={(e) => handleSmoothScroll(e, 'planos')}>Planos</a>
            <a className="text-neutral-500 hover:text-white transition-colors opacity-80 hover:opacity-100" href="#localizacao" onClick={(e) => handleSmoothScroll(e, 'localizacao')}>Localização</a>
          </div>
          <div className="flex gap-4 text-xl">
            <span>💈</span>
            <span>✂️</span>
            <span>⭐</span>
          </div>
        </div>
      </footer>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe md:hidden bg-neutral-900/95 backdrop-blur-lg border-t border-neutral-800/50 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
        <a className="flex flex-col items-center justify-center text-primary p-2 active:scale-90 transition-transform" href="#" onClick={(e) => handleSmoothScroll(e, '')}>
          <span className="text-xl mb-1">🏠</span>
          <span className="font-body text-[10px] uppercase font-bold tracking-wider">Início</span>
        </a>
        <a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-primary active:scale-90 transition-transform" href="#servicos" onClick={(e) => handleSmoothScroll(e, 'servicos')}>
          <span className="text-xl mb-1">✂️</span>
          <span className="font-body text-[10px] uppercase font-bold tracking-wider">Cortes</span>
        </a>
        <a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-primary active:scale-90 transition-transform" href="#planos" onClick={(e) => handleSmoothScroll(e, 'planos')}>
          <span className="text-xl mb-1">💎</span>
          <span className="font-body text-[10px] uppercase font-bold tracking-wider">Planos</span>
        </a>
        <a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-primary active:scale-90 transition-transform" href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <span className="text-xl mb-1">💬</span>
          <span className="font-body text-[10px] uppercase font-bold tracking-wider">Whats</span>
        </a>
      </nav>

      {/* Floating Action Button (Desktop/Tablet) */}
      <a 
        className="hidden md:flex fixed bottom-12 right-12 z-40 bg-[#25d366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all items-center justify-center group" 
        href={whatsappLink}
        target="_blank" 
        rel="noopener noreferrer"
      >
        <span className="text-3xl leading-none">💬</span>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold uppercase tracking-widest text-xs whitespace-nowrap">Agende no WhatsApp</span>
      </a>
      
      {/* Spacer for mobile nav */}
      <div className="h-20 md:hidden"></div>
    </div>
  );
}
