// ATIVIDADES COM HORÁRIO
// A ordem dos grupos na tela segue a ordem em que aparecem aqui.
const FIXAS = [
  { id: "congresso", grupo: "Visitas guiadas",        nome: "Congresso Nacional",                    horarios: ["09:00", "11:00", "14:00", "16:00"], minutos: 60 },
  { id: "planalto", grupo: "Visitas guiadas",         nome: "Palácio do Planalto",                   obs: "Domingo",
    horarios: ["09:00", "10:00", "11:00", "13:00"], minutos: 40 },
  { id: "itamaraty-visita", grupo: "Visitas guiadas", nome: "Visitação ao Palácio Itamaraty",        obs: "Seg a sex",
    horarios: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"], minutos: 60 },
  { id: "palacio-justica", grupo: "Visitas guiadas",  nome: "Visita guiada ao Palácio da Justiça",   horarios: ["10:00", "15:00"], minutos: 60 },
  { id: "tres-poderes", grupo: "Monumentos",          nome: "Praça dos Três Poderes",                horarios: ["08:00", "10:00", "16:00"], minutos: 30 },
  { id: "alvorada", grupo: "Monumentos",              nome: "Palácio da Alvorada",                   horarios: ["08:00", "17:00"], minutos: 20 },
  { id: "torre-tv", grupo: "Monumentos",              nome: "Torre de TV",                           horarios: ["09:00", "11:00", "15:00", "17:00"], minutos: 45 },
  { id: "ponte-jk", grupo: "Monumentos",              nome: "Ponte JK",                              horarios: ["07:00", "17:00"], minutos: 30 },
  { id: "memorial-jk", grupo: "Museus",               nome: "Memorial JK",                           obs: "Ter a dom",
    horarios: ["09:00", "11:00", "14:00", "16:00"], minutos: 60 },
  { id: "museu-nacional", grupo: "Museus",            nome: "Museu Nacional",                        obs: "Ter a dom",
    horarios: ["09:00", "11:00", "14:00", "16:00"], minutos: 60 },
  { id: "lucio-costa", grupo: "Museus",               nome: "Espaço Lucio Costa",                    obs: "Ter a dom",
    horarios: ["09:00", "11:00", "14:00", "16:00"], minutos: 30 },
  { id: "catedral", grupo: "Igrejas e templos",       nome: "Catedral Metropolitana",                horarios: ["08:00", "10:00", "14:00", "16:00"], minutos: 45 },
  { id: "dom-bosco", grupo: "Igrejas e templos",      nome: "Santuário Dom Bosco",                   horarios: ["08:00", "10:00", "15:00"], minutos: 40 },
  { id: "tbv", grupo: "Igrejas e templos",            nome: "Templo da Boa Vontade",                 horarios: ["08:00", "10:00", "15:00"], minutos: 40 },
  { id: "missa-catedral", grupo: "Missas",            nome: "Missa na Catedral",                     horarios: ["12:00"],          minutos: 60 },
  { id: "missa-dom-bosco", grupo: "Missas",           nome: "Missa no Santuário Dom Bosco",          horarios: ["07:00", "18:00"], minutos: 60 },
  { id: "missa-fatima", grupo: "Missas",              nome: "Missa na Igrejinha Nossa Senhora de Fátima", obs: "Domingo",
    horarios: ["07:00", "09:00", "11:00", "18:00"], minutos: 60 },
  { id: "parque-cidade", grupo: "Ao ar livre",        nome: "Parque da Cidade",                      horarios: ["06:00", "08:00", "16:00"], minutos: 90 },
  { id: "pontao", grupo: "Ao ar livre",               nome: "Pontão do Lago Sul",                    horarios: ["11:00", "16:00", "19:00"], minutos: 90 },
  { id: "sol-cruzeiro", grupo: "Nascer e pôr do sol", nome: "Nascer do sol na Praça do Cruzeiro",    horarios: ["05:00"],          minutos: 60 },
  { id: "sol-ermida", grupo: "Nascer e pôr do sol",   nome: "Pôr do sol na Ermida Dom Bosco",        horarios: ["18:00"],          minutos: 60 },
  { id: "sol-ponte", grupo: "Nascer e pôr do sol",    nome: "Pôr do sol na Ponte JK",                horarios: ["18:00"],          minutos: 60 },
  { id: "zoo-noturno", grupo: "Noite",                nome: "Visita noturna ao Zoológico",           horarios: ["19:00"],          minutos: 90 },
  { id: "planetario", grupo: "Noite",                 nome: "Sessão de cúpula no Planetário",        horarios: ["18:00"],          minutos: 60 },
];

function formatarTempo(min) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h}h`;
  return `${h}h${String(m).padStart(2, "0")}`;
}
