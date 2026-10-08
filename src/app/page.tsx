import SiteHeader from "@/components/SiteHeader";
import { Icon } from "@/components/Icons";

const areas = [
  { icon: "briefcase", title: "Direito do Trabalho", text: "Orientação jurídica em relações de trabalho, direitos e obrigações de empregados e empregadores." },
  { icon: "shield", title: "Direito Civil", text: "Atuação consultiva e contenciosa em obrigações, contratos, responsabilidade civil e relações privadas." },
  { icon: "book", title: "Direito de Família", text: "Atendimento jurídico em questões familiares com cuidado, clareza e tratamento individualizado." },
  { icon: "scale", title: "Consultoria Jurídica", text: "Análise preventiva de situações e documentos para apoiar decisões com maior segurança jurídica." },
];

const faqs = [
  ["Como funciona o primeiro atendimento?", "O primeiro contato serve para compreender a situação apresentada e verificar quais informações e documentos serão necessários para a análise jurídica."],
  ["O atendimento pode ser online?", "Sim. O site pode informar atendimento presencial e online, de acordo com a disponibilidade e a forma de atuação do profissional."],
  ["Quais documentos devo separar?", "Depende do assunto. Após o contato inicial, o escritório orienta quais documentos são relevantes para a análise do caso."],
  ["O site substitui uma consulta jurídica?", "Não. Os conteúdos do site têm caráter informativo e não substituem uma análise individual realizada por profissional habilitado."],
];

function LegalIllustration() {
  return <svg className="legal-illustration" viewBox="0 0 620 520" role="img" aria-label="Ilustração abstrata de advocacia">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stopColor="currentColor" stopOpacity=".14"/><stop offset="1" stopColor="currentColor" stopOpacity=".02"/></linearGradient></defs>
    <rect x="55" y="40" width="510" height="430" rx="40" fill="url(#g)"/>
    <circle cx="422" cy="154" r="90" fill="currentColor" opacity=".08"/>
    <path d="M148 398h334" stroke="currentColor" strokeWidth="9" strokeLinecap="round" opacity=".25"/>
    <path d="M315 118v250M231 367h168M202 173h226" stroke="currentColor" strokeWidth="11" strokeLinecap="round"/>
    <path d="m229 173-56 112h112l-56-112Zm172 0-56 112h112l-56-112Z" fill="none" stroke="currentColor" strokeWidth="9" strokeLinejoin="round"/>
    <path d="M173 285c0 31 25 56 56 56s56-25 56-56M345 285c0 31 25 56 56 56s56-25 56-56" fill="none" stroke="currentColor" strokeWidth="9"/>
    <rect x="95" y="95" width="84" height="28" rx="14" fill="currentColor" opacity=".12"/>
    <rect x="438" y="355" width="92" height="28" rx="14" fill="currentColor" opacity=".12"/>
  </svg>;
}

export default function Home() {
  return <main>
    <div className="demo-strip">MODELO DEMONSTRATIVO · DADOS PROFISSIONAIS FICTÍCIOS</div>
    <SiteHeader />

    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">ATUAÇÃO JURÍDICA COM SERIEDADE E CLAREZA</p>
          <h1>Orientação jurídica com atendimento <em>próximo e responsável.</em></h1>
          <p className="hero-lead">Um espaço institucional para apresentar a atuação profissional, compartilhar informações jurídicas e facilitar o contato com o escritório.</p>
          <div className="hero-actions"><a className="primary-button" href="#contato">Entrar em contato <Icon name="arrow" size={18} /></a><a className="ghost-button" href="#atuacao">Conhecer áreas de atuação</a></div>
          <div className="hero-notes"><span><Icon name="shield" size={18}/>Atendimento profissional</span><span><Icon name="clock" size={18}/>Presencial e online</span><span><Icon name="scale" size={18}/>OAB/UF 000.000</span></div>
        </div>
        <div className="hero-art"><LegalIllustration /><div className="art-card"><span className="mini-label">ATENDIMENTO</span><strong>Informação clara em cada etapa.</strong><p>Comunicação objetiva para que o cliente compreenda o andamento e as possibilidades jurídicas.</p></div></div>
      </div>
    </section>

    <section className="section" id="atuacao"><div className="container"><div className="section-head"><div><p className="eyebrow">ÁREAS DE ATUAÇÃO</p><h2>Atendimento jurídico em diferentes demandas.</h2></div><p>As áreas abaixo são apenas exemplos para o modelo. Na versão final entram somente as atuações reais do advogado.</p></div><div className="area-grid">{areas.map((area, i)=><article className="area-card" key={area.title}><div className="area-number">0{i+1}</div><span className="area-icon"><Icon name={area.icon} /></span><h3>{area.title}</h3><p>{area.text}</p><a href="#contato">Saiba como funciona <Icon name="arrow" size={16}/></a></article>)}</div></div></section>

    <section className="section about-section" id="sobre"><div className="container about-grid"><div className="portrait-placeholder"><div className="portrait-circle">NS</div><div className="portrait-caption"><strong>Dr. Nome Sobrenome</strong><span>OAB/UF 000.000</span></div></div><div className="about-copy"><p className="eyebrow">SOBRE O PROFISSIONAL</p><h2>Experiência apresentada com sobriedade e transparência.</h2><p>Este bloco será substituído pela trajetória real do advogado: formação acadêmica, áreas de atuação, cursos, títulos efetivamente comprováveis e informações relevantes sobre a prática profissional.</p><p>A proposta visual evita promessas, comparações ou linguagem de autopromoção e prioriza informações objetivas sobre o atendimento.</p><div className="credential-grid"><div><strong>Formação</strong><span>Instituição · Ano</span></div><div><strong>Atuação</strong><span>Áreas reais do profissional</span></div><div><strong>Atendimento</strong><span>Presencial e online</span></div></div></div></div></section>

    <section className="section process-section"><div className="container"><div className="section-head compact"><div><p className="eyebrow">COMO FUNCIONA</p><h2>Um atendimento organizado do primeiro contato à orientação jurídica.</h2></div></div><div className="steps"><div><b>01</b><strong>Contato inicial</strong><p>Você apresenta, de forma resumida, a situação que precisa de orientação.</p></div><div><b>02</b><strong>Análise das informações</strong><p>O profissional indica quais documentos ou informações são necessários para compreender a demanda.</p></div><div><b>03</b><strong>Orientação jurídica</strong><p>Após a análise, são apresentadas as possibilidades aplicáveis ao caso concreto.</p></div></div></div></section>

    <section className="section" id="conteudos"><div className="container"><div className="section-head"><div><p className="eyebrow">CONTEÚDO INFORMATIVO</p><h2>Informação jurídica em linguagem acessível.</h2></div><p>Na versão final, esta área pode reunir conteúdos educativos sobre temas relacionados à atuação profissional.</p></div><div className="article-grid"><article><span>ARTIGO</span><h3>O que observar antes de assinar um contrato?</h3><p>Um exemplo de conteúdo educativo para explicar pontos de atenção sem analisar situações concretas.</p><a href="#contato">Ver conteúdo <Icon name="arrow" size={16}/></a></article><article><span>GUIA</span><h3>Quais documentos ajudam em uma análise trabalhista?</h3><p>Conteúdo introdutório para orientar o público sobre organização de informações e documentos.</p><a href="#contato">Ver conteúdo <Icon name="arrow" size={16}/></a></article><article><span>INFORMAÇÃO</span><h3>Atendimento jurídico online: como funciona?</h3><p>Explicação objetiva sobre etapas, envio de documentos e canais de comunicação.</p><a href="#contato">Ver conteúdo <Icon name="arrow" size={16}/></a></article></div></div></section>

    <section className="section faq-section" id="faq"><div className="container faq-grid"><div><p className="eyebrow">DÚVIDAS FREQUENTES</p><h2>Informações antes do primeiro contato.</h2><p className="muted-copy">As respostas são gerais e serão revisadas com o advogado antes da publicação definitiva.</p></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>＋</span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="contact-section" id="contato"><div className="container contact-grid"><div><p className="eyebrow light">CONTATO</p><h2>Fale com o escritório.</h2><p>Use os canais abaixo para solicitar informações sobre atendimento e disponibilidade.</p><div className="contact-list"><a href="#"><Icon name="phone"/><span><small>TELEFONE / WHATSAPP</small><strong>(85) 9 0000-0000</strong></span></a><a href="#"><Icon name="mail"/><span><small>E-MAIL</small><strong>contato@escritorio.com.br</strong></span></a><a href="#"><Icon name="pin"/><span><small>ENDEREÇO</small><strong>Fortaleza · Ceará</strong></span></a></div></div><div className="contact-card"><span className="mini-label">ATENDIMENTO</span><h3>Presencial ou online</h3><p>Horários, endereço completo e canais de atendimento serão inseridos após a aprovação do profissional.</p><a className="primary-button full-width" href="#">Falar pelo WhatsApp <Icon name="arrow" size={18}/></a><small>Este botão é apenas demonstrativo nesta versão.</small></div></div></section>

    <footer><div className="container footer-grid"><div className="brand footer-brand"><span className="brand-mark"><Icon name="scale" size={23}/></span><span><strong>DR. NOME SOBRENOME</strong><small>ADVOCACIA</small></span></div><p>Conteúdo de caráter informativo. As informações deste site não substituem consulta jurídica individualizada.</p><div><span>OAB/UF 000.000</span><span>© 2026</span></div></div></footer>
  </main>;
}
