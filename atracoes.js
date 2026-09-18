// ATRACOES SEM HORA
const ATRACOES = [
  { id: 1,  nome: "Catedral Metropolitana",        minutos: 45 },
  { id: 2,  nome: "Congresso Nacional",            minutos: 60 },
  { id: 3,  nome: "Praça dos Três Poderes",        minutos: 30 },
  { id: 4,  nome: "Palácio do Planalto",           minutos: 40 },
  { id: 5,  nome: "Palácio da Alvorada",           minutos: 20 },
  { id: 6,  nome: "Ponte JK",                      minutos: 30 },
  { id: 7,  nome: "Memorial JK",                   minutos: 60 },
  { id: 8,  nome: "Santuário Dom Bosco",           minutos: 40 },
  { id: 9,  nome: "Torre de TV",                   minutos: 45 },
  { id: 10, nome: "Museu Nacional",                minutos: 60 },
  { id: 11, nome: "Palácio Itamaraty",             minutos: 60 },
  { id: 12, nome: "Templo da Boa Vontade",         minutos: 40 },
  { id: 13, nome: "Pontão do Lago Sul",            minutos: 90 },
  { id: 14, nome: "Parque da Cidade",              minutos: 90 },
  { id: 15, nome: "Espaço Lucio Costa",            minutos: 30 },
];

// ATIVIDADES HORA MARCADA
//
const FIXAS = [
  { id: "missa-catedral", grupo: "Missas",   nome: "Missa na Catedral",                     horarios: ["12:00"],          minutos: 60 },
  { id: "missa-dom-bosco", grupo: "Missas",  nome: "Missa no Santuário Dom Bosco",          horarios: ["07:00", "18:00"], minutos: 60 },
  { id: "sol-ermida", grupo: "Nascer e pôr do sol",       nome: "Pôr do sol na Ermida Dom Bosco",        horarios: ["18:00"],          minutos: 60 },
  { id: "sol-ponte", grupo: "Nascer e pôr do sol",        nome: "Pôr do sol na Ponte JK",                horarios: ["18:00"],          minutos: 60 },
  { id: "zoo-noturno", grupo: "Noite",      nome: "Visita noturna ao Zoológico",           horarios: ["19:00"],          minutos: 90 },
  { id: "palacio-justica", grupo: "Visitas guiadas",  nome: "Visita guiada ao Palácio da Justiça",   horarios: ["10:00", "15:00"], minutos: 60 },
  { id: "itamaraty-visita", grupo: "Visitas guiadas", nome: "Visitação ao Palácio Itamaraty",        obs: "Seg a sex",
    horarios: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"], minutos: 60 },
  { id: "missa-fatima", grupo: "Missas",     nome: "Missa na Igrejinha Nossa Senhora de Fátima", obs: "Domingo",
    horarios: ["07:00", "09:00", "11:00", "18:00"], minutos: 60 },
  { id: "sol-cruzeiro", grupo: "Nascer e pôr do sol",     nome: "Nascer do sol na Praça do Cruzeiro",    horarios: ["05:00"],          minutos: 60 },
  { id: "planetario", grupo: "Noite",       nome: "Sessão de cúpula no Planetário",        horarios: ["18:00"],          minutos: 60 },
];

function formatarTempo(min) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h}h`;
  return `${h}h${String(m).padStart(2, "0")}`;
}
