interface Artigos {
  id: number;
  titulo: string;
  data: string;
  assunto: string;
  artigo: string;
  link: string;
}

export const artigos: Artigos[] = [
  {
    id: 1,
    titulo: "Queridos recrutadores",
    data: "11 Abr 2025",
    assunto: "#T.I",
    artigo:
      "Ninguém com 1 ano de faculdade e sem experiência vai dominar React, Java, JavaScript, Python 100%.Ninguém vira pleno só porque...",
    link: "https://www.linkedin.com/posts/gustavo-suppi_queridos-recrutadores-ningu%C3%A9m-com-1-ano-activity-7315087385837367297-n4OA?utm_source=share&utm_medium=member_desktop&rcm=ACoAACo5ZAIB1bcg7pvdrSA_byc7g7S8ndqzhQI",
  },
  {
    id: 2,
    titulo: "Por que Java é a melhor linguagem?",
    data: "4 Abr 2025",
    assunto: "#Javalovers",
    artigo:
      "Se você já programou em Java, sabe que essa linguagem é igual café forte: robusta, confiável e sempre presente quando você mais precisa...",
    link: "https://www.linkedin.com/posts/carloshpjacinto_javalovers-codelikeapro-programaaexaeto-activity-7313665317640060929-S9Tz?utm_source=share&utm_medium=member_desktop&rcm=ACoAACo5ZAIB1bcg7pvdrSA_byc7g7S8ndqzhQI",
  },
  {
    id: 3,
    titulo: "Os programadores são os magos do século 21!",
    data: "28 Mar 2025",
    assunto: "#CodeMagic",
    artigo:
      "Pensa bem: com algumas linhas de código, conseguimos criar coisas incríveis, transformar ideias em realidade e, às vezes, até fazer o impossível acontecer!",
    link: "https://www.linkedin.com/posts/carloshpjacinto_codemagic-programaaexaeto-desenvolvimento-activity-7311160474824314881-Chb9?utm_source=share&utm_medium=member_desktop&rcm=ACoAACo5ZAIB1bcg7pvdrSA_byc7g7S8ndqzhQI",
  },
];
