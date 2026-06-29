import { useState } from "react";
import {
  ArrowRight,
  Check,
  X,
  ShieldCheck,
  ChevronDown,
  Clock,
  Sparkles,
  MessageCircle,
  BookOpen,
  Compass,
  Quote,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

const creatorImg = "/licia-foto.png";
const journalImg = "/mqd-journal-B_3cC0rt.jpg";
const writingImg = "/mqd-writing-CmqmvkGe.jpg";
const logoImg = "/logo-nova.png";
const doorwayImg = "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200";

const bonusImgs = [
  "/bonus1-frases.png",
  "/bonus3-conversa.png",
  "/bonus2-valores.png",
];

const garantiaImg = "/mqd-garantia-Chf7xmDx.png";
const ebookImg = "/ebook-mockup.png";

/* ---------- shared ---------- */

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

function PrimaryCTA({
  children,
  href = "https://pay.kiwify.com.br/t7S1be0",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-plum)] px-7 py-4 text-[15px] font-medium text-[var(--color-primary-foreground)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_20px_60px_-20px_rgba(60,20,60,0.5)] ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted-foreground)]">
      <span className="h-px w-6 bg-current opacity-50" />
      {children}
    </span>
  );
}

/* ---------- nav ---------- */

function Nav() {
  return (
    <header className="relative z-30 section-light">
      <Container className="flex items-center justify-between py-6">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoImg} alt="Decide Agora" className="h-32 w-auto object-contain" />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-[var(--color-ink-soft)] md:flex">
          <a href="#metodo" className="hover:text-[var(--color-foreground)]">Método</a>
          <a href="#para-quem" className="hover:text-[var(--color-foreground)]">Para quem</a>
          <a href="#depoimentos" className="hover:text-[var(--color-foreground)]">Depoimentos</a>
          <a href="#faq" className="hover:text-[var(--color-foreground)]">FAQ</a>
        </nav>
        <PrimaryCTA href="https://pay.kiwify.com.br/t7S1be0" className="hidden md:inline-flex">Quero começar</PrimaryCTA>
      </Container>
    </header>
  );
}

/* ---------- HERO ---------- */

function Hero() {
  return (
    <section id="top" className="section-light relative overflow-hidden pt-6 pb-20 md:pt-8 md:pb-28">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div className="fade-up">
            <Eyebrow>E-book · Método Decide Agora</Eyebrow>
            <h1 className="display display-tight mt-5 text-[40px] sm:text-[52px] md:text-[62px]">
              Cansada de ficar{" "}
              <span className="font-italic-serif text-[var(--color-plum)]">travada</span>{" "}
              e não conseguir tomar decisões?
            </h1>
            <p className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-[var(--color-ink-soft)]">
              Pare de esperar sentir certeza para agir.<br /><br />
              Em apenas 30 dias você aprende a decidir com confiança — sem medo de errar e sem precisar da aprovação de ninguém.
            </p>

            <ul className="mt-8 space-y-3 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
              {[
                "Você demora dias para responder uma mensagem simples — com medo de errar.",
                "Pesquisa tudo, pede opinião de todo mundo e mesmo assim não age.",
                "Sabe o que quer, mas fica esperando o momento certo que nunca chega.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-plum)]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[15px] font-medium text-[var(--color-plum)]">
              Se você se identificou, este e-book foi feito para você.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <PrimaryCTA href="#metodo">Quero decidir com confiança</PrimaryCTA>
            </div>
            <div className="mt-4 space-y-2">
              {[
                "Mais de 30 tarefas práticas — uma por dia",
                "Acesso imediato após a compra",
                "Garantia incondicional de 7 dias",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[13px] text-[var(--color-ink-soft)]">
                  <Check className="size-3.5 shrink-0 text-[var(--color-plum)]" />
                  {item}
                </div>
              ))}
            </div>

            {/* Mini bio */}
            <div className="mt-10 flex items-center gap-4 border-t border-[var(--color-plum)]/10 pt-8">
              <img
                src="/licia-foto.png"
                alt="Licia Santos"
                className="size-14 shrink-0 rounded-full object-cover shadow-md ring-2 ring-[var(--color-plum)]/20"
              />
              <div>
                <p className="text-[14px] font-medium text-[var(--color-foreground)]">Licia Santos</p>
                <p className="text-[13px] text-[var(--color-ink-soft)]">Engenheira, mestre em tomada de decisão e especialista em neurogestão</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[var(--color-plum)]/8 blur-2xl" />
            <div className="overflow-hidden rounded-[1.5rem] shadow-float">
              <img
                src="/licia-foto.png"
                alt="Licia Santos"
                className="h-[520px] w-full object-cover object-top md:h-[640px]"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <p className="text-[11px] uppercase tracking-widest text-[var(--color-muted-foreground)]">E-book</p>
              <p className="mt-0.5 text-[15px] font-semibold text-[var(--color-foreground)]">Decide Agora</p>
              <p className="text-[13px] text-[var(--color-plum)] font-medium">30 dias de método prático</p>
            </div>
          </div>
        </div>

        {/* Vídeo YouTube */}
        <div className="mt-20 overflow-hidden rounded-2xl shadow-float">
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/JorseujVx_k"
              title="Como funciona o Método Decide Agora"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- DOR ---------- */

function Dor() {
  return (
    <section className="section-dark relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 grain opacity-40" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>O que ninguém te contou</Eyebrow>
          <h2 className="display mt-5 text-[34px] md:text-[46px]">
            Você sabe exatamente o que deveria fazer.{" "}
            <span className="font-italic-serif text-[var(--color-gold)]">Então por que continua travando?</span>
          </h2>

          <div className="mt-10 space-y-7 text-[17px] leading-[1.75] text-[var(--color-muted-foreground)]">
            <p>
              Não é preguiça.<br />
              Você já tentou de tudo.
            </p>
            <ul className="space-y-1 pl-4 text-[16px]">
              {["livros", "podcasts", "terapia", "cursos"].map(i => (
                <li key={i} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[var(--color-gold)] shrink-0 inline-block" />
                  {i}
                </li>
              ))}
            </ul>
            <p>
              E mesmo assim...<br />
              na hora de decidir...<br />
              <span className="text-[var(--color-gold)] font-medium">você trava.</span>
            </p>
            <p>
              Você adia a conversa importante por mais uma semana.<br />
              Aceita o projeto abaixo do que vale porque "essa não é a hora certa".<br />
              Muda o plano três vezes antes de começar.<br />
              Pergunta pra mais uma pessoa o que ela acha — mesmo já sabendo o que quer.
            </p>
            <p>
              O inimigo aqui não é você.<br />
              É o jeito que você aprendeu a lidar com escolhas.<br />
              Desde cedo você foi ensinada a esperar validação antes de agir.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur">
            <p className="text-[17px] leading-relaxed">
              Essa é a dor real. E ela tem um nome:{" "}
              <span className="font-italic-serif text-2xl text-[var(--color-gold)]">
                Paralisia de Aprovação
              </span>
              , o padrão onde a decisão fica esperando o aval do mundo antes de existir.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- AUTORIDADE (movida para antes dos depoimentos) ---------- */

function Autoridade() {
  return (
    <section className="section-light py-14 md:py-20">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[var(--color-plum)]/10 blur-2xl" />
            <div className="overflow-hidden rounded-[1.5rem] shadow-float">
              <img src={creatorImg} alt="Licia Santos" className="h-[560px] w-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-[var(--color-surface-raised)] px-5 py-4 shadow-float">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">
                Quem criou o método
              </div>
              <div className="font-display mt-1 text-xl">Licia Santos</div>
            </div>
          </div>

          <div>
            <Eyebrow>Sobre a criadora</Eyebrow>
            <h2 className="display mt-5 text-[32px] md:text-[44px]">
              Quem criou este método{" "}
              <span className="font-italic-serif text-[var(--color-plum)]">e por quê.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
              <strong className="text-[var(--color-foreground)]">Licia Santos.</strong> Engenheira de produção com 8 anos em uma multinacional automotiva, Mestre em Engenharia com foco em tomada de decisão e pós-graduada em Neurogestão.
            </p>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
              <p>
                Durante anos, Licia foi responsável por decisões técnicas de alto impacto — projetos, pessoas, prazos e recursos. Do lado de fora, tudo funcionava. Por dentro, ela também travava nas próprias escolhas pessoais.
              </p>
              <p>
                Foi estudando neurogestão que ela entendeu o que acontecia: não era fraqueza. Era um circuito que nunca tinha sido treinado para decidir sob pressão emocional.
              </p>
              <p>
                O Método Decide Agora nasceu disso: da combinação entre rigor técnico de uma engenheira e a aplicação prática da neurociência aplicada à decisão.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: "8 anos", label: "em indústria automotiva" },
                { n: "Mestrado", label: "em tomada de decisão" },
                { n: "Pós", label: "em neurogestão" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-[var(--color-plum)]/8 p-4 text-center">
                  <div className="font-display text-xl text-[var(--color-plum)]">{item.n}</div>
                  <div className="mt-1 text-[12px] text-[var(--color-ink-soft)]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- DEPOIMENTOS ---------- */

function Depoimentos() {
  return (
    <section id="depoimentos" className="section-light py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Depoimentos</Eyebrow>
          <h2 className="display mt-5 text-[34px] md:text-[46px]">
            O que muda quando uma mulher para de pedir{" "}
            <span className="font-italic-serif text-[var(--color-plum)]">permissão para si mesma.</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              iniciais: "T.G.",
              nome: "Cliente do Método T.G.",
              depoimento: "Eu simplesmente não conseguia pedir algo para comer. Sempre esperava alguém que estava comigo pedir antes para eu falar que queria igual. Hoje, por mais que escolha algo que não goste, ainda fico feliz por ter escolhido.",
            },
            {
              iniciais: "S.C.",
              nome: "Cliente do Método S.C.",
              depoimento: "Passei anos em um relacionamento ruim porque não tinha coragem de decidir terminar. Hoje consigo tomar decisões muito mais rápido usando a ferramenta 10/10/10.",
            },
            {
              iniciais: "B.O.",
              nome: "Cliente do Método B.O.",
              depoimento: "Pedia opinião para tudo — até se fazia ou não um curso. Não conseguia decidir coisas que só diziam respeito a mim. Hoje consigo decidir sem precisar pedir opinião para todo mundo.",
            },
          ].map((d) => (
            <motion.article
              key={d.iniciais}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] p-8"
            >
              <Quote className="size-6 text-[var(--color-plum)]/40" />
              <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">{d.depoimento}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-[var(--color-hairline)] pt-5">
                <div className="size-10 rounded-full bg-[var(--color-plum)] flex items-center justify-center shrink-0">
                  <span className="text-white font-medium text-xs">{d.iniciais}</span>
                </div>
                <div className="text-sm text-[var(--color-muted-foreground)]">Cliente do Método</div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- CTA INTERMEDIÁRIO ---------- */

function CTAMid() {
  return (
    <section className="section-light pb-8">
      <Container>
        <div
          className="relative overflow-hidden rounded-3xl bg-[var(--color-plum)] px-8 py-14 text-center text-[var(--color-primary-foreground)] md:px-16 md:py-20"
          style={{
            backgroundImage: `linear-gradient(135deg, color-mix(in oklab, var(--color-plum) 92%, black 8%), var(--color-plum))`,
          }}
        >
          <div className="absolute inset-0 grain opacity-30" />
          <p className="relative font-display text-2xl leading-snug md:text-3xl">
            Se você se reconheceu em alguma parte do que leu até aqui, o travamento que você
            sente tem saída. E ela começa com uma decisão de 30 dias.
          </p>
          <div className="relative mt-8 flex justify-center">
            <a
              href="https://pay.kiwify.com.br/t7S1be0"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-primary-foreground)] px-7 py-4 text-[15px] font-medium text-[var(--color-plum)] transition hover:-translate-y-[1px]"
            >
              Quero começar meus 30 dias agora
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- MÉTODO ---------- */

const etapas = [
  { n: "01", title: "Diagnóstico de Bloqueio", desc: "Identifica em qual dos 4 padrões de travamento você se encaixa.", icon: Compass },
  { n: "02", title: "Calibração de Valores", desc: "Mapeia os 5 valores centrais que vão funcionar como bússola.", icon: Star },
  { n: "03", title: "Decisões Treinadas", desc: "Tarefas diárias progressivas de baixo risco para instalar o hábito.", icon: Sparkles },
  { n: "04", title: "Registro e Evidência", desc: "Diário de Decisões para documentar o que sentiu e o que aconteceu.", icon: BookOpen },
  { n: "05", title: "Protocolo de Emergência", desc: "4 perguntas para usar em tempo real quando uma decisão parecer impossível.", icon: MessageCircle },
  { n: "06", title: "Avaliação de Encerramento", desc: "Comparação entre o Dia 1 e o Dia 30.", icon: Check },
];

function Metodo() {
  return (
    <section id="metodo" className="section-light relative py-14 md:py-20">
      <Container>
        <div className="grid items-start gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <div className="md:sticky md:top-24">
            <Eyebrow>O Método</Eyebrow>
            <h2 className="display display-tight mt-5 text-[34px] md:text-[48px]">
              Protocolo{" "}
              <span className="font-italic-serif text-[var(--color-plum)]">Decide Agora</span>:
              como o cérebro aprende a decidir em 30 dias.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-[var(--color-ink-soft)]">
              Baseado em <span className="font-italic-serif text-[var(--color-plum)] text-lg">neurogestão</span>, área que estuda como o cérebro
              regula emoções, toma decisões e forma hábitos sob pressão.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl">
              <img src={writingImg} alt="Escrevendo no diário" className="h-72 w-full object-cover" />
            </div>
          </div>

          <div className="space-y-5">
            <div className="grid gap-4 rounded-2xl bg-[var(--color-surface)] p-6 md:grid-cols-2">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">Como era antes</div>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-ink-soft)]">
                  Mulheres tentando "se conhecer melhor" como forma de ganhar coragem para agir.
                </p>
              </div>
              <div className="rounded-xl bg-[var(--color-plum)]/8 p-4">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-plum)]">Com o Protocolo</div>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-foreground)]">
                  Cada dia tem uma tarefa específica com critério de conclusão claro.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {etapas.map((e) => (
                <motion.div
                  key={e.n}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className="group rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] p-5 transition hover:border-[var(--color-plum)]/40 hover:shadow-float"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-[var(--color-plum)]">{e.n}</span>
                    <e.icon className="size-4 text-[var(--color-muted-foreground)]" />
                  </div>
                  <div className="mt-3 text-[15px] font-medium">{e.title}</div>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">{e.desc}</p>
                </motion.div>
              ))}
            </div>

            <p className="mt-2 rounded-2xl bg-[var(--color-foreground)] p-6 text-[15px] leading-relaxed text-[var(--color-primary-foreground)]">
              O <strong>Desafio 30 Dias Mulher que Decide</strong> não é um curso sobre tomada de
              decisão. É uma academia onde você treina decisão todos os dias.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- PARA QUEM É ---------- */

function ParaQuem() {
  const sim = [
    "Mulheres que vivem pensando demais antes de agir",
    "Quem já fez terapia, leu sobre autoconhecimento e ainda assim sente que algo não avança",
    "Quem demora para decidir, pede opinião de todo mundo e depois se arrepende",
    "Quem está passando por uma transição e precisa de clareza",
    "Quem quer parar de viver pela aprovação dos outros",
  ];
  const nao = [
    "Quem quer uma fórmula mágica que funciona sem comprometimento diário",
    "Quem não tem disponibilidade para 15 a 30 minutos por dia",
    "Quem está em crise aguda e precisa de acompanhamento clínico",
    "Quem acredita que o problema está só nos outros",
  ];
  return (
    <section id="para-quem" className="section-light py-14 md:py-18">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-[var(--color-plum)]/8 p-8 md:p-10">
            <Eyebrow>Para quem é</Eyebrow>
            <h3 className="font-display mt-5 text-3xl leading-tight">
              Para você, se algo aqui te tocou.
            </h3>
            <ul className="mt-8 space-y-4">
              {sim.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] leading-relaxed">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[var(--color-plum)] text-[var(--color-primary-foreground)]">
                    <Check className="size-3" />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-[var(--color-surface)] p-8 md:p-10">
            <Eyebrow>Para quem não é</Eyebrow>
            <h3 className="font-display mt-5 text-3xl leading-tight">
              Honestidade antes de qualquer compra.
            </h3>
            <ul className="mt-8 space-y-4">
              {nao.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[var(--color-muted)] text-[var(--color-ink-soft)]">
                    <X className="size-3" />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- ENTREGÁVEIS (sem valores individuais) ---------- */

const entregaveis = [
  { title: "E-book Principal — 30 Dias de Decisão", desc: "Guia completo com uma tarefa diária para cada um dos 30 dias." },
  { title: "Diagnóstico de Bloqueio Inicial", desc: "Questionário de 10 perguntas que identifica seu padrão de travamento." },
  { title: "Diário de Decisões", desc: "Páginas de registro diário para documentar cada decisão." },
  { title: "Mapa de Valores Pessoais", desc: "Exercício estruturado para identificar os 5 valores centrais." },
  { title: "Protocolo Anti-Travamento", desc: "Roteiro de 4 perguntas para usar em tempo real." },
  { title: "Checklist de Encerramento — Dia 30", desc: "Avaliação final para medir o quanto mudou." },
];

function Entregaveis() {
  return (
    <section className="section-light py-14 md:py-18">
      <Container>
        <div className="grid items-end gap-10 md:grid-cols-[1fr_auto] md:gap-16">
          <div>
            <Eyebrow>O que está incluso</Eyebrow>
            <h2 className="display mt-5 text-[34px] md:text-[46px]">
              Tudo que você recebe{" "}
              <span className="font-italic-serif text-[var(--color-plum)]">no momento da compra.</span>
            </h2>
          </div>
          <div className="text-sm text-[var(--color-muted-foreground)]">
            Acesso imediato, vitalício, em qualquer dispositivo.
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-[var(--color-plum)]/10 blur-2xl" />
            <img src={ebookImg} alt="Mockup do ebook" className="w-full rounded-2xl" />
          </div>

          <div className="space-y-3">
            {entregaveis.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex items-start gap-4 rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] p-5"
              >
                <div className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--color-plum)]/10 text-[var(--color-plum)]">
                  <Check className="size-4" />
                </div>
                <div>
                  <div className="text-[15px] font-medium">{e.title}</div>
                  <p className="mt-1 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- BÔNUS ---------- */

function Bonus() {
  const bonuses = [
    { img: bonusImgs[0], tag: "Bônus 01", title: "30 Frases do Desafio", desc: "Uma frase por dia para os 30 dias do desafio." },
    { img: bonusImgs[1], tag: "Bônus 02", title: "Guia da Conversa Difícil", desc: "Roteiro para as 4 conversas que mulheres mais evitam." },
    { img: bonusImgs[2], tag: "Bônus 03", title: "Mapa dos Valores", desc: "Exercício guiado em 5 etapas para identificar seus valores centrais." },
  ];
  return (
    <section className="section-light py-14 md:py-18">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Bônus exclusivos</Eyebrow>
          <h2 className="display mt-5 text-[34px] md:text-[44px]">
            Além dos entregáveis,{" "}
            <span className="font-italic-serif text-[var(--color-plum)]">três extras</span>{" "}
            para acelerar sua transformação.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {bonuses.map((b) => (
            <article
              key={b.title}
              className="group relative overflow-hidden rounded-3xl bg-[var(--color-surface-raised)] p-8 shadow-float"
            >
              <div className="flex flex-col items-center gap-5">
                <img src={b.img} alt={b.title} className="w-full h-56 rounded-xl object-contain shadow-md" />
                <div className="w-full">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-gold)]">{b.tag}</span>
                  <h3 className="font-display mt-2 text-2xl leading-tight">{b.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-ink-soft)]">{b.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- SUPORTE ---------- */

function Suporte() {
  return (
    <section className="section-light pb-8">
      <Container>
        <div className="grid items-center gap-8 rounded-3xl bg-[var(--color-surface)] p-8 md:grid-cols-[auto_1fr] md:gap-12 md:p-12">
          <div className="grid size-20 place-items-center rounded-full bg-[var(--color-plum)]/10 text-[var(--color-plum)]">
            <MessageCircle className="size-8" />
          </div>
          <div>
            <h3 className="font-display text-2xl md:text-3xl">
              Você não vai fazer esses 30 dias sozinha.
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
              O desafio inclui acesso a um canal de suporte por email para dúvidas sobre as
              tarefas ou sobre como aplicar o Protocolo Anti-Travamento.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- OFERTA / STACK (simplificada) ---------- */

const stack = [
  "E-book Principal — 30 Dias de Decisão",
  "Diagnóstico de Bloqueio Inicial",
  "Diário de Decisões",
  "Mapa de Valores Pessoais",
  "Protocolo Anti-Travamento",
  "Bônus 01. 30 Frases do Desafio",
  "Bônus 02. Guia da Conversa Difícil",
  "Bônus 03. Mapa dos Valores",
];

function Oferta() {
  return (
    <section id="oferta" className="section-dark relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 grain opacity-30" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>A decisão</Eyebrow>
          <h2 className="display mt-5 text-[36px] md:text-[52px]">
            Tudo que você leva{" "}
            <span className="font-italic-serif text-[var(--color-gold)]">hoje.</span>
          </h2>
          <p className="mt-5 text-[15px] text-[var(--color-muted-foreground)]">
            Acesso imediato. Vitalício. Em qualquer dispositivo.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-3xl bg-[var(--color-surface-raised)]/10 backdrop-blur ring-1 ring-white/10">
          <ul>
            {stack.map((item, i) => (
              <li
                key={item}
                className={`flex items-center gap-3 px-6 py-4 text-[15px] md:px-8 ${
                  i < stack.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <Check className="size-4 shrink-0 text-[var(--color-gold)]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="border-t border-white/10 bg-[#3b1a35] p-8 text-center md:p-12">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)]">
              Tudo isso por apenas
            </div>
            <div className="font-display mt-3 text-6xl md:text-7xl">R$ 97</div>
            <div className="mt-2 text-sm text-[var(--color-muted-foreground)]">
              à vista <span className="mx-1 opacity-50">·</span> ou 3x de R$ 35,90 no cartão
            </div>
            <div className="mt-8 flex justify-center">
              <a
                href="https://pay.kiwify.com.br/t7S1be0"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-gold)] px-8 py-4 text-[15px] font-medium text-[var(--color-plum)] transition hover:-translate-y-[1px]"
              >
                Quero parar de ficar travada agora
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-[12px] text-[var(--color-muted-foreground)]">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-3.5" /> Compra 100% segura</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5" /> Acesso imediato</span>
              <span className="inline-flex items-center gap-1.5"><Check className="size-3.5" /> Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- GARANTIA ---------- */

function Garantia() {
  return (
    <section className="section-light py-14 md:py-18">
      <Container>
        <div className="grid items-center gap-10 rounded-3xl bg-[var(--color-surface)] p-8 md:grid-cols-[auto_1fr] md:gap-14 md:p-14">
          <div className="mx-auto">
            <img src={garantiaImg} alt="Selo de garantia 7 dias" className="h-44 w-44 object-contain" />
          </div>
          <div>
            <Eyebrow>Risco zero</Eyebrow>
            <h2 className="display mt-5 text-[30px] md:text-[42px]">
              Garantia incondicional{" "}
              <span className="font-italic-serif text-[var(--color-plum)]">de 7 dias.</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
              Você acessa tudo no momento da compra. Se em qualquer ponto dentro dos primeiros 7
              dias decidir que o desafio não é para você, devolvo 100% do valor pago. Sem
              precisar justificar, sem formulário complicado.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- FAQ ---------- */

const faqs = [
  { q: "Não tenho muito tempo. Quanto tempo por dia preciso dedicar?", a: "Entre 15 e 30 minutos por dia. Cada tarefa foi desenhada para caber na rotina de quem trabalha." },
  { q: "Já fiz vários cursos e nenhum funcionou. Por que este seria diferente?", a: "Porque a maioria dos cursos ensina a entender seus padrões. Este treina você a agir dentro deles antes de eliminá-los." },
  { q: "E se eu travar em alguma tarefa e não conseguir continuar?", a: "O Protocolo Anti-Travamento foi desenvolvido exatamente para esse momento. São 4 perguntas que você usa em tempo real." },
  { q: "Funciona para quem já faz terapia?", a: "Sim. O desafio não substitui terapia: ele complementa." },
  { q: "Em quanto tempo vejo resultado?", a: "As primeiras mudanças perceptíveis costumam aparecer entre o Dia 7 e o Dia 14." },
  { q: "E se não funcionar para mim?", a: "Você tem 7 dias de garantia incondicional. Se decidir que não é para você, devolvo 100% do valor." },
];

function FAQItem({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-[var(--color-hairline)]">
      <button onClick={onClick} className="flex w-full items-center justify-between gap-6 py-6 text-left">
        <span className="font-display text-lg md:text-xl">{q}</span>
        <ChevronDown className={`size-5 shrink-0 text-[var(--color-plum)] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ${open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
        <div className="min-h-0">
          <p className="max-w-3xl text-[15px] leading-relaxed text-[var(--color-ink-soft)]">{a}</p>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-light py-14 md:py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="display mt-5 text-[32px] md:text-[42px]">
              Perguntas que aparecem{" "}
              <span className="font-italic-serif text-[var(--color-plum)]">antes de uma decisão</span>{" "}
              como essa.
            </h2>
            <div className="mt-8 overflow-hidden rounded-2xl">
              <img src={journalImg} alt="Diário aberto" className="w-full object-cover" />
            </div>
          </div>
          <div>
            {faqs.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} open={open === i} onClick={() => setOpen(open === i ? null : i)} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- CTA FINAL ---------- */

function CTAFinal() {
  return (
    <section className="section-dark relative overflow-hidden py-16 md:py-24">
      <img src={doorwayImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-[var(--color-background)]/85 to-[var(--color-background)]/60" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Sua próxima decisão</Eyebrow>
          <h2 className="display display-tight mt-6 text-[40px] md:text-[64px]">
            A vida está passando enquanto você{" "}
            <span className="font-italic-serif text-[var(--color-gold)]">"se prepara".</span>
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-[var(--color-muted-foreground)]">
            Em 30 dias, você pode estar do outro lado dessa porta. Decidindo sem precisar pedir permissão.
          </p>
          <div className="mt-10 flex flex-col items-center gap-5">
            <a
              href="https://pay.kiwify.com.br/t7S1be0"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-gold)] px-9 py-5 text-[16px] font-medium text-[var(--color-plum)] transition hover:-translate-y-[1px]"
            >
              Quero parar de ficar travada agora
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <div className="text-[13px] text-[var(--color-muted-foreground)]">
              R$ 97 à vista ou 3x de R$ 35,90 · Garantia incondicional de 7 dias
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- FOOTER ---------- */

function Footer() {
  return (
    <footer className="section-light hairline-t py-12">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <img src={logoImg} alt="Decide Agora" className="h-12 w-auto" />
        <p className="text-center text-xs text-[var(--color-muted-foreground)]">
          Ao continuar, você concorda com os termos de uso e a política de privacidade.
          <br />© {new Date().getFullYear()} Mulher que Decide. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}

/* ---------- PAGE ---------- */

function App() {
  return (
    <main className="section-light min-h-screen">
      <Nav />
      <Hero />
      <Dor />
      <Depoimentos />
      <CTAMid />
      <Metodo />
      <Autoridade />
      <ParaQuem />
      <Entregaveis />
      <Bonus />
      <Suporte />
      <Oferta />
      <Garantia />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}

export default App;
