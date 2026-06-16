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

const heroImg = "/mqd-hero-DW0UWT_S.jpg";
const creatorImg = "/Captura_de_tela_2026-06-11_161258.png";
const journalImg = "/mqd-journal-B_3cC0rt.jpg";
const writingImg = "/mqd-writing-CmqmvkGe.jpg";
const logoImg = "/logo-nova.png";
const doorwayImg = "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200";

const avatarImgs = [
  "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=100",
  "https://images.pexels.com/photos/3758977/pexels-photo-3758977.jpeg?auto=compress&cs=tinysrgb&w=100",
  "https://images.pexels.com/photos/3777525/pexels-photo-3777525.jpeg?auto=compress&cs=tinysrgb&w=100",
  "https://images.pexels.com/photos/3760215/pexels-photo-3760215.jpeg?auto=compress&cs=tinysrgb&w=100",
];

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
          <img src={logoImg} alt="Decide Agora" className="h-64 w-auto object-contain" />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-[var(--color-ink-soft)] md:flex">
          <a href="#metodo" className="hover:text-[var(--color-foreground)]">Método</a>
          <a href="#para-quem" className="hover:text-[var(--color-foreground)]">Para quem</a>
          <a href="#depoimentos" className="hover:text-[var(--color-foreground)]">Depoimentos</a>
          <a href="#faq" className="hover:text-[var(--color-foreground)]">FAQ</a>
        </nav>
        <PrimaryCTA className="hidden md:inline-flex">Quero começar</PrimaryCTA>
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
          <div className="fade-up order-2 md:order-1">
            <Eyebrow>Desafio 30 Dias</Eyebrow>
            <h1 className="display display-tight mt-5 text-[44px] sm:text-[56px] md:text-[68px]">
              Existe uma mulher inteira
              <br />
              <span className="font-italic-serif text-[var(--color-plum)]">dentro de você</span>{" "}
              esperando uma decisão.
            </h1>
            <p className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-[var(--color-ink-soft)]">
              Você sabe que ela está lá. Inteligente, criativa, capaz. O que falta não é mais
              autoconhecimento. É aprender a decidir, sustentar e avançar sem precisar da
              aprovação de ninguém.
            </p>

            <ul className="mt-8 space-y-3 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
              {[
                "Você pensa por horas, decide em 5 minutos e se arrepende em 10. Em 30 dias, esse ciclo para.",
                "Mulheres que dependem de aprovação externa levam em média 3 vezes mais tempo para agir.",
                "A distância entre quem você é e quem você sente que poderia ser tem nome e tem solução.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-plum)]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <PrimaryCTA>Quero treinar meu cérebro para decidir</PrimaryCTA>
              <div className="flex items-center gap-3 text-[13px] text-[var(--color-muted-foreground)]">
                <ShieldCheck className="size-4" />
                Garantia incondicional de 7 dias
              </div>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[var(--color-plum)]/8 blur-2xl" />
            <div className="overflow-hidden rounded-[1.5rem] shadow-float">
              <img
                src={heroImg}
                alt="Mulher pensativa"
                className="h-[520px] w-full object-cover md:h-[640px]"
              />
            </div>
          </div>
        </div>

        {/* video */}
        <div className="mt-16 overflow-hidden rounded-2xl shadow-float">
          <div className="relative aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/JorseujVx_k"
              title="Como funciona o Método Decide Agora"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
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
    <section className="section-dark relative overflow-hidden py-12 md:py-32">
      <div className="absolute inset-0 grain opacity-40" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>O que ninguém te contou</Eyebrow>
          <h2 className="display mt-5 text-[34px] md:text-[46px]">
            Você está cansada de ser{" "}
            <span className="font-italic-serif text-[var(--color-gold)]">a pessoa mais difícil</span>{" "}
            de convencer dentro da sua própria cabeça.
          </h2>

          <div className="mt-10 space-y-7 text-[17px] leading-[1.75] text-[var(--color-muted-foreground)]">
            <p>
              Não é preguiça. Não é falta de informação. Você já leu os livros, já fez terapia,
              já ouviu os podcasts. Sabe o que precisa fazer. E mesmo assim, na hora de decidir,
              algo trava.
            </p>
            <p>
              Você adia a conversa importante por mais uma semana. Aceita o projeto abaixo do que
              vale porque "essa não é a hora certa". Muda o plano três vezes antes de começar.
              Pergunta pra mais uma pessoa o que ela acha, mesmo já sabendo o que quer.
            </p>
            <p>
              Isso tem uma causa específica. O cérebro humano não foi treinado para tomar
              decisões sob pressão emocional. Quando medo, dúvida e necessidade de aprovação
              entram juntos no circuito, o sistema nervoso escolhe a opção mais segura: não
              decidir.
            </p>
            <p>
              O inimigo aqui não é você. É o jeito que você aprendeu a lidar com escolhas.
              Provavelmente desde cedo você foi ensinada a considerar o outro antes de si mesma.
              A esperar validação antes de agir.
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

/* ---------- PROVA SOCIAL 1 ---------- */

const provaSocial1 = [
  {
    name: "Camila R.",
    age: "34 anos, terapeuta",
    avatar: avatarImgs[0],
    before:
      "Ficava semanas adiando uma conversa de reajuste com cliente. Aceitava o preço antigo por medo de perder o vínculo.",
    result:
      "Aplicou o Protocolo Anti-Travamento em uma decisão real e respondeu no mesmo dia. Em 30 dias, reajustou 4 clientes sem perder nenhum.",
  },
  {
    name: "Marina T.",
    age: "41 anos, empreendedora",
    avatar: avatarImgs[1],
    before:
      "Levava em média 3 semanas para decidir qualquer mudança no negócio. Sentia que precisava de aprovação do marido, da sócia e da mãe antes de agir.",
    result:
      "Nos últimos 30 dias tomou 12 decisões sozinha, incluindo encerrar uma parceria que travava o negócio há 8 meses.",
  },
];

function ProvaSocial1() {
  return (
    <section className="section-light py-12 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Histórias reais</Eyebrow>
          <h2 className="display mt-5 text-[32px] md:text-[42px]">
            Mulheres que pararam de esperar{" "}
            <span className="font-italic-serif text-[var(--color-plum)]">permissão</span> para agir.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {provaSocial1.map((p) => (
            <article
              key={p.name}
              className="rounded-2xl bg-[var(--color-surface-raised)] p-8 shadow-float"
            >
              <Quote className="size-6 text-[var(--color-plum)]/40" />
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                <p><span className="font-medium text-[var(--color-foreground)]">Antes:</span> {p.before}</p>
                <p><span className="font-medium text-[var(--color-foreground)]">Resultado:</span> {p.result}</p>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-[var(--color-hairline)] pt-5">
                <div className="size-12 rounded-full bg-[var(--color-plum)] flex items-center justify-center shrink-0">
                    <span className="text-white font-medium text-sm">{p.name.split(' ').map((n: string) => n[0]).slice(0,2).join('')}</span>
                  </div>
                <div>
                  <div className="text-sm font-medium">{p.name}</div>
                  <div className="text-xs text-[var(--color-muted-foreground)]">{p.age}</div>
                </div>
              </div>
            </article>
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
  {
    n: "01",
    title: "Diagnóstico de Bloqueio",
    desc: "Identifica em qual dos 4 padrões de travamento você se encaixa.",
    icon: Compass,
  },
  {
    n: "02",
    title: "Calibração de Valores",
    desc: "Mapeia os 5 valores centrais que vão funcionar como bússola.",
    icon: Star,
  },
  {
    n: "03",
    title: "Decisões Treinadas",
    desc: "Tarefas diárias progressivas de baixo risco para instalar o hábito.",
    icon: Sparkles,
  },
  {
    n: "04",
    title: "Registro e Evidência",
    desc: "Diário de Decisões para documentar o que sentiu e o que aconteceu.",
    icon: BookOpen,
  },
  {
    n: "05",
    title: "Protocolo de Emergência",
    desc: "4 perguntas para usar em tempo real quando uma decisão parecer impossível.",
    icon: MessageCircle,
  },
  {
    n: "06",
    title: "Avaliação de Encerramento",
    desc: "Comparação entre o Dia 1 e o Dia 30.",
    icon: Check,
  },
];

function Metodo() {
  return (
    <section id="metodo" className="section-light relative py-12 md:py-32">
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
    "Mulheres entre 28 e 45 anos que sentem que \"funcionam\" externamente mas estão travadas por dentro",
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
    <section id="para-quem" className="section-light py-12 md:py-28">
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

/* ---------- ENTREGÁVEIS ---------- */

const entregaveis = [
  {
    title: "PDF Principal, 30 Dias de Decisão",
    desc: "Guia completo com uma tarefa diária para cada um dos 30 dias.",
    value: "R$ 197",
  },
  {
    title: "Diagnóstico de Bloqueio Inicial",
    desc: "Questionário de 10 perguntas que identifica seu padrão de travamento.",
    value: "R$ 97",
  },
  {
    title: "Diário de Decisões",
    desc: "Páginas de registro diário para documentar cada decisão.",
    value: "R$ 67",
  },
  {
    title: "Mapa de Valores Pessoais",
    desc: "Exercício estruturado para identificar os 5 valores centrais.",
    value: "R$ 87",
  },
  {
    title: "Protocolo Anti-Travamento",
    desc: "Roteiro de 4 perguntas para usar em tempo real.",
    value: "R$ 47",
  },
  {
    title: "Checklist de Encerramento, Dia 30",
    desc: "Avaliação final para medir o quanto mudou.",
    value: "R$ 37",
  },
];

function Entregaveis() {
  return (
    <section className="section-light py-12 md:py-28">
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
                className="flex items-start justify-between gap-6 rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--color-plum)]/10 text-[var(--color-plum)]">
                    <Check className="size-4" />
                  </div>
                  <div>
                    <div className="text-[15px] font-medium">{e.title}</div>
                    <p className="mt-1 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">{e.desc}</p>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted-foreground)]">Valor</div>
                  <div className="font-display text-lg text-[var(--color-plum)]">{e.value}</div>
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
    {
      img: bonusImgs[0],
      tag: "Bônus 01",
      title: "30 Frases do Desafio",
      desc: "Uma frase por dia para os 30 dias do desafio.",
      value: "R$ 47",
    },
    {
      img: bonusImgs[1],
      tag: "Bônus 02",
      title: "Guia da Conversa Difícil",
      desc: "Roteiro para as 4 conversas que mulheres mais evitam.",
      value: "R$ 97",
    },
    {
      img: bonusImgs[2],
      tag: "Bônus 03",
      title: "Mapa dos Valores",
      desc: "Exercício guiado em 5 etapas para identificar seus valores centrais.",
      value: "R$ 87",
    },
  ];
  return (
    <section className="section-light py-12 md:py-28">
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
                  <div className="mt-4 text-sm">
                    Valor: <span className="font-medium text-[var(--color-plum)]">{b.value}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- DEPOIMENTOS ---------- */

const depoimentos = [
  {
    name: "Juliana M.",
    age: "38 anos, psicóloga clínica",
    avatar: avatarImgs[0],
    before:
      "Sabia de cor cada padrão que precisava mudar. Mesmo assim, quando chegava a hora de decidir algo importante, travava.",
    virada:
      "Aplicou o Protocolo Anti-Travamento em uma decisão profissional que estava adiando há 4 meses.",
    resultado:
      "Tomou a decisão em 12 minutos, comunicou no mesmo dia. Foi a primeira vez que sentiu \"clareza sem ansiedade\".",
  },
  {
    name: "Fernanda C.",
    age: "31 anos, designer",
    avatar: avatarImgs[1],
    before:
      "Vivia no ciclo de começar algo novo a cada 3 meses e abandonar antes de completar.",
    virada:
      "O Diagnóstico de Bloqueio identificou que ela se encaixava no padrão de Aprovação Antecipada.",
    resultado:
      "Completou os 30 dias pela primeira vez na vida e, no Dia 28, assinou contrato com um cliente que tinha medo de abordar.",
  },
  {
    name: "Tatiane R.",
    age: "44 anos, empreendedora",
    avatar: avatarImgs[2],
    before:
      "Levava em média 3 semanas para decidir qualquer coisa que envolvesse dinheiro.",
    virada:
      "O Mapa de Valores Pessoais deu a ela um critério de decisão claro pela primeira vez.",
    resultado:
      "Encerrou duas parcerias que travavam o negócio e dobrou o faturamento mensal em 60 dias.",
  },
  {
    name: "Renata S.",
    age: "29 anos, enfermeira",
    avatar: avatarImgs[3],
    before:
      "Sempre se descrevia como \"indecisa por natureza\". Aceitava plantões que não queria.",
    virada:
      "A tarefa do Dia 8 a forçou a dizer não para algo pequeno. Nada de errado aconteceu.",
    resultado:
      "Em 30 dias disse não para 11 situações. A culpa caiu de 9 para 3 em uma escala de 10.",
  },
];

function Depoimentos() {
  return (
    <section id="depoimentos" className="section-light py-12 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Depoimentos</Eyebrow>
          <h2 className="display mt-5 text-[34px] md:text-[46px]">
            O que muda quando uma mulher para de pedir{" "}
            <span className="font-italic-serif text-[var(--color-plum)]">permissão para si mesma.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {depoimentos.map((d) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] p-8"
            >
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-full bg-[var(--color-plum)] flex items-center justify-center shrink-0">
                    <span className="text-white font-medium text-sm">{d.name.split(' ').map((n: string) => n[0]).slice(0,2).join('')}</span>
                  </div>
                <div>
                  <div className="text-sm font-medium">{d.name}</div>
                  <div className="text-xs text-[var(--color-muted-foreground)]">{d.age}</div>
                </div>
              </div>
              <div className="mt-5 space-y-3 text-[14px] leading-relaxed text-[var(--color-ink-soft)]">
                <p><span className="font-medium text-[var(--color-foreground)]">Antes:</span> {d.before}</p>
                <p><span className="font-medium text-[var(--color-foreground)]">Virada:</span> {d.virada}</p>
                <p className="rounded-xl bg-[var(--color-plum)]/8 p-4 text-[var(--color-foreground)]">
                  <span className="font-medium">Resultado:</span> {d.resultado}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- AUTORIDADE ---------- */

function Autoridade() {
  return (
    <section className="section-light py-12 md:py-32">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[var(--color-plum)]/10 blur-2xl" />
            <div className="overflow-hidden rounded-[1.5rem] shadow-float">
              <img src={creatorImg} alt="Licia Santos" className="h-[560px] w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-[var(--color-surface-raised)] px-5 py-4 shadow-float">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">
                Quem criou o método
              </div>
              <div className="font-display mt-1 text-xl">Licia Santos</div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <Eyebrow>Sobre a criadora</Eyebrow>
            <h2 className="display mt-5 text-[32px] md:text-[44px]">
              Quem criou este método{" "}
              <span className="font-italic-serif text-[var(--color-plum)]">e por quê.</span>
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
              <p>
                Durante anos eu tomei decisões que impactavam milhões de reais dentro de uma multinacional.
              </p>
              <p>
                Mas existia uma área da minha vida onde eu continuava travando: as minhas próprias escolhas.
                Eu analisava demais. Buscava a opinião de todo mundo. Tinha medo de errar.
              </p>
              <p>
                Até perceber que o problema não era falta de inteligência, conhecimento ou capacidade.
                Era falta de confiança.
              </p>
              <p>
                Foi estudando tomada de decisão no mestrado, comportamento humano e Neurogestão que comecei
                a entender por que tantas mulheres inteligentes se sentem presas, mesmo sabendo exatamente
                o que deveriam fazer.
              </p>
              <p>
                O Método Decide Agora nasceu dessa busca. Para ajudar mulheres que estão cansadas de pensar
                demais, duvidar de si mesmas e adiar decisões importantes.
              </p>
              <p>
                Porque a sua vida começa a mudar quando você para de esperar ter certeza absoluta e aprende
                a confiar mais em quem você é.
              </p>
            </div>
          </div>
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

/* ---------- OFERTA / STACK ---------- */

const stack = [
  ["E-book Principal — Pare de Duvidar de Você", "R$ 197"],
  ["Bônus 01. 30 Frases do Desafio", "R$ 47"],
  ["Bônus 02. Guia da Conversa Difícil", "R$ 97"],
  ["Bônus 03. Mapa dos Valores", "R$ 87"],
  ["Recurso Extra. Cartão SOS Anti-Travamento", "R$ 27"],
];

function Oferta() {
  return (
    <section id="oferta" className="section-dark relative overflow-hidden py-12 md:py-32">
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
            {stack.map(([item, val], i) => (
              <li
                key={item}
                className={`flex items-center justify-between px-6 py-4 text-[15px] md:px-8 ${
                  i < stack.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <span className="flex items-center gap-3">
                  <Check className="size-4 text-[var(--color-gold)]" />
                  {item}
                </span>
                <span className="text-[var(--color-muted-foreground)] line-through">{val}</span>
              </li>
            ))}
            <li className="flex items-center justify-between bg-white/5 px-6 py-5 md:px-8">
              <span className="font-display text-xl">Valor total</span>
              <span className="font-display text-xl text-[var(--color-muted-foreground)] line-through">R$ 455</span>
            </li>
          </ul>

          <div className="border-t border-white/10 bg-[#3d1238] p-8 text-center md:p-12">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)]">
              Preço hoje
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
                Quero começar meus 30 dias agora
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
    <section className="section-light py-12 md:py-28">
      <Container>
        <div className="grid items-center gap-10 rounded-3xl bg-[#ede5db] p-8 md:grid-cols-[auto_1fr] md:gap-14 md:p-14">
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
  {
    q: "Não tenho muito tempo. Quanto tempo por dia preciso dedicar?",
    a: "Entre 15 e 30 minutos por dia. Cada tarefa foi desenhada para caber na rotina de quem trabalha.",
  },
  {
    q: "Já fiz vários cursos e nenhum funcionou. Por que este seria diferente?",
    a: "Porque a maioria dos cursos ensina a entender seus padrões. Este treina você a agir dentro deles antes de eliminá-los.",
  },
  {
    q: "E se eu travar em alguma tarefa e não conseguir continuar?",
    a: "O Protocolo Anti-Travamento foi desenvolvido exatamente para esse momento. São 4 perguntas que você usa em tempo real.",
  },
  {
    q: "Funciona para quem já faz terapia?",
    a: "Sim. O desafio não substitui terapia: ele complementa.",
  },
  {
    q: "Em quanto tempo vejo resultado?",
    a: "As primeiras mudanças perceptíveis costumam aparecer entre o Dia 7 e o Dia 14.",
  },
  {
    q: "E se não funcionar para mim?",
    a: "Você tem 7 dias de garantia incondicional. Se decidir que não é para você, devolvo 100% do valor.",
  },
];

function FAQItem({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-[var(--color-hairline)]">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-lg md:text-xl">{q}</span>
        <ChevronDown
          className={`size-5 shrink-0 text-[var(--color-plum)] transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
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
    <section id="faq" className="section-light py-12 md:py-32">
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
    <section className="section-dark relative overflow-hidden py-14 md:py-36">
      <img src={doorwayImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-[var(--color-background)]/85 to-[var(--color-background)]/60" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Sua próxima decisão</Eyebrow>
          <h2 className="display display-tight mt-6 text-[40px] md:text-[64px]">
            A vida está passando enquanto você{" "}
            <span className="font-italic-serif text-[var(--color-gold)]">"se prepara".</span>
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-[var(--color-ink-soft)]">
            Em 30 dias, você pode estar do outro lado dessa porta. Decidindo sem precisar pedir
            permissão.
          </p>
          <div className="mt-10 flex flex-col items-center gap-5">
            <a
              href="https://pay.kiwify.com.br/t7S1be0"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-gold)] px-9 py-5 text-[16px] font-medium text-[var(--color-plum)] transition hover:-translate-y-[1px]"
            >
              Quero começar meus 30 dias agora
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
      <Container className="flex flex-col items-center gap-6 text-center">
        <img src={logoImg} alt="Decide Agora" className="h-24 w-auto" />
        <p className="text-xs text-[var(--color-muted-foreground)]">
          Ao continuar, você concorda com os{" "}
          <a href="https://docs.google.com/document/d/1eJUnG-jSLtyqxlTaHvjvdx4dlSsCMiJJ/edit?usp=sharing&ouid=102952477424481436790&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--color-plum)]">
            termos de uso e política de privacidade
          </a>.<br />
          © {new Date().getFullYear()} Mulher que Decide. Todos os direitos reservados.
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
      <ProvaSocial1 />
      <CTAMid />
      <Metodo />
      <ParaQuem />
      <Entregaveis />
      <Bonus />
      <Depoimentos />
      <Autoridade />
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
