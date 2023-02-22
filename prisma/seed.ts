import { prisma } from "./client";

interface fieldsDto {
  id: string;
  description: string;
  created: string;
}

const skillsArray: Array<fieldsDto> = [
  {
    id: "EF69LP49",
    description:
      "Mostrar-se interessado e envolvido pela leitura de livros de literatura e por outras produções culturais do campo e receptivo a textos que rompam com seu universo de expectativas, que representem um desafio em relação às suas possibilidades atuais e suas experiências anteriores de leitura, apoiando-se nas marcas linguísticas, em seu conhecimento sobre os gêneros e a temática e nas orientações dadas pelo professor.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP27",
    description:
      "Analisar a forma composicional de textos pertencentes a gêneros normativos/ jurídicos e a gêneros da esfera política, tais como propostas, programas políticos (posicionamento quanto a diferentes ações a serem propostas, objetivos, ações previstas etc.), propaganda política (propostas e sua sustentação, posicionamento quanto a temas em discussão) e textos reivindicatórios: cartas de reclamação, petição (proposta, suas justificativas e ações a serem adotadas) e suas marcas linguísticas, de forma a incrementar a compreensão de textos pertencentes a esses gêneros e a possibilitar a produção de textos mais adequados e/ou fundamentados quando isso for requerido.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP02",
    description:
      "Explorar o espaço reservado ao leitor nos jornais, revistas, impressos e on-line, sites noticiosos etc., destacando notícias, fotorreportagens, entrevistas, charges, assuntos, temas, debates em foco, posicionando-se de maneira ética e respeitosa frente a esses textos e opiniões a eles relacionadas, e publicar notícias, notas jornalísticas, fotorreportagem de interesse geral nesses espaços do leitor.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP21",
    description:
      "Posicionar-se em relação a conteúdos veiculados em práticas não institucionalizadas de participação social, sobretudo àquelas vinculadas a manifestações artísticas, produções culturais, intervenções urbanas e práticas próprias das culturas juvenis que pretendam denunciar, expor uma problemática ou “convocar” para uma reflexão/ação, relacionando esse texto/produção com seu contexto de produção e relacionando as partes e semioses presentes para a construção de sentidos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP31",
    description:
      "Utilizar pistas linguísticas – tais como “em primeiro/segundo/terceiro lugar”, “por outro lado”, “dito de outro modo”, isto é”, “por exemplo” – para compreender a hierarquização das proposições, sintetizando o conteúdo dos textos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP01",
    description:
      "Diferenciar liberdade de expressão de discursos de ódio, posicionando-se contrariamente a esse tipo de discurso e vislumbrando possibilidades de denúncia quando for o caso.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP02",
    description:
      "Analisar e comparar peças publicitárias variadas (cartazes, folhetos, outdoor, anúncios e propagandas em diferentes mídias, spots, jingle, vídeos etc.), de forma a perceber a articulação entre elas em campanhas, as especificidades das várias semioses e mídias, a adequação dessas peças ao público-alvo, aos objetivos do anunciante e/ou da campanha e à construção composicional e estilo dos gêneros em questão, como forma de ampliar suas possibilidades de compreensão (e produção) de textos pertencentes a esses gêneros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12LP18",
    description:
      "Apreciar poemas e outros textos versificados, observando rimas, sonoridades, jogos de palavras, reconhecendo seu pertencimento ao mundo imaginário e sua dimensão de encantamento, jogo e fruição.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15LP17",
    description:
      "Apreciar poemas visuais e concretos, observando efeitos de sentido criados pelo formato do texto na página, distribuição e diagramação das letras, pelas ilustrações e por outros efeitos visuais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP23",
    description:
      "Apreciar poemas e outros textos versificados, observando rimas, aliterações e diferentes modos de divisão dos versos, estrofes e refrões e seu efeito de sentido.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP14",
    description:
      "Analisar, em textos argumentativos e propositivos, os movimentos argumentativos de sustentação, refutação e negociação e os tipos de argumentos, avaliando a força/tipo dos argumentos utilizados.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15LP12",
    description:
      "Atribuir significado a aspectos não linguísticos (paralinguísticos) observados na fala, como direção do olhar, riso, gestos, movimentos da cabeça (de concordância ou discordância), expressão corporal, tom de voz.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15LP11",
    description:
      "Reconhecer características da conversação espontânea presencial, respeitando os turnos de fala, selecionando e utilizando, durante a conversação, formas de tratamento adequadas, de acordo com a situação e a posição do interlocutor.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LP13",
    description:
      "Estabelecer relações entre partes do texto, identificando substituições lexicais (de substantivos por sinônimos) ou pronominais (uso de pronomes anafóricos – pessoais, possessivos, demonstrativos), que contribuem para a continuidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LP15",
    description:
      "Estabelecer relações entre partes do texto, identificando o antecedente de um pronome relativo ou o referente comum de uma cadeia de substituições lexicais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LP10",
    description:
      "Comparar as regras de colocação pronominal na norma-padrão com o seu uso no português brasileiro coloquial.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LP11",
    description:
      "Inferir efeitos de sentido decorrentes do uso de recursos de coesão sequencial (conjunções e articuladores textuais).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP36",
    description:
      "Utilizar, ao produzir texto, recursos de coesão referencial (léxica e pronominal) e sequencial e outros recursos expressivos adequados ao gênero textual.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP03",
    description:
      "Identificar a ideia central do texto, demonstrando compreensão global.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP19",
    description:
      "Recuperar as ideias principais em situações formais de escuta de exposições, apresentações e palestras.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP16",
    description:
      "Ler e compreender, em colaboração com os colegas e com a ajuda do professor, quadras, quadrinhas, parlendas, trava-línguas, dentre outros gêneros do campo da vida cotidiana, considerando a situação comunicativa e o tema/assunto do texto e relacionando sua forma de organização à sua finalidade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP12",
    description:
      "Ler e compreender com certa autonomia cantigas, letras de canção, dentre outros gêneros do campo da vida cotidiana, considerando a situação comunicativa e o tema/assunto do texto e relacionando sua forma de organização à sua finalidade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP11",
    description:
      "Ler e compreender, com autonomia, textos injuntivos instrucionais (receitas, instruções de montagem etc.), com a estrutura própria desses textos (verbos imperativos, indicação de passos a ser seguidos) e mesclando palavras, imagens e recursos gráfico- visuais, considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP12",
    description:
      "Ler e compreender, com autonomia, cartas pessoais e diários, com expressão de sentimentos e opiniões, dentre outros gêneros do campo da vida cotidiana, de acordo com as convenções do gênero carta e considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP18",
    description:
      "Ler e compreender, com autonomia, cartas dirigidas a veículos da mídia impressa ou digital (cartas de leitor e de reclamação a jornais, revistas) e notícias, dentre outros gêneros do campo jornalístico, de acordo com as convenções do gênero carta e considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP19",
    description:
      "Identificar e discutir o propósito do uso de recursos de persuasão (cores, imagens, escolha de palavras, jogo de palavras, tamanho de letras) em textos publicitários e de propaganda, como elementos de convencimento.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP24",
    description:
      "Ler/ouvir e compreender, com autonomia, relatos de observações e de pesquisas em fontes de informações, considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP09",
    description:
      "Ler e compreender, com autonomia, boletos, faturas e carnês, dentre outros gêneros do campo da vida cotidiana, de acordo com as convenções do gênero (campos, itens elencados, medidas de consumo, código de barras) e considerando a situação comunicativa e a finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP10",
    description:
      "Ler e compreender, com autonomia, cartas pessoais de reclamação, dentre outros gêneros do campo da vida cotidiana, de acordo com as convenções do gênero carta e considerando a situação comunicativa e o tema/assunto/finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP14",
    description:
      "Identificar, em notícias, fatos, participantes, local e momento/tempo da ocorrência do fato noticiado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP15",
    description:
      "Distinguir fatos de opiniões/sugestões em textos (informativos, jornalísticos, publicitários etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP19",
    description:
      "Ler e compreender textos expositivos de divulgação científica para crianças, considerando a situação comunicativa e o tema/ assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP09",
    description:
      "Ler e compreender, com autonomia, textos instrucional de regras de jogo, dentre outros gêneros do campo da vida cotidiana, de acordo com as convenções do gênero e considerando a situação comunicativa e a finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP10",
    description:
      "Ler e compreender, com autonomia, anedotas, piadas e cartuns, dentre outros gêneros do campo da vida cotidiana, de acordo com as convenções do gênero e considerando a situação comunicativa e a finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP15",
    description:
      "Ler/assistir e compreender, com autonomia, notícias, reportagens, vídeos em vlogs argumentativos, dentre outros gêneros do campo político-cidadão, de acordo com as convenções dos gêneros e considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP16",
    description:
      "Comparar informações sobre um mesmo fato veiculadas em diferentes mídias e concluir sobre qual é mais confiável e por quê.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP22",
    description:
      "Ler e compreender verbetes de dicionário, identificando a estrutura, as informações gramaticais (significado de abreviaturas) e as informações semânticas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12LP04",
    description:
      "Ler e compreender, em colaboração com os colegas e com a ajuda do professor ou já com certa autonomia, listas, agendas, calendários, avisos, convites, receitas, instruções de montagem (digitais ou impressos), dentre outros gêneros do campo da vida cotidiana, considerando a situação comunicativa e o tema/assunto do texto e relacionando sua forma de organização à sua finalidade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12LP08",
    description:
      "Ler e compreender, em colaboração com os colegas e com a ajuda do professor, fotolegendas em notícias, manchetes e lides em notícias, álbum de fotos digital noticioso e notícias curtas para público infantil, dentre outros gêneros do campo jornalístico, considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12LP09",
    description:
      "Ler e compreender, em colaboração com os colegas e com a ajuda do professor, slogans, anúncios publicitários e textos de campanhas de conscientização destinados ao público infantil, dentre outros gêneros do campo publicitário, considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12LP10",
    description:
      "Ler e compreender, em colaboração com os colegas e com a ajuda do professor, cartazes, avisos, folhetos, regras e regulamentos que organizam a vida na comunidade escolar, dentre outros gêneros do campo da atuação cidadã, considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12LP17",
    description:
      "Ler e compreender, em colaboração com os colegas e com a ajuda do professor, enunciados de tarefas escolares, diagramas, curiosidades, pequenos relatos de experimentos, entrevistas, verbetes de enciclopédia infantil, entre outros gêneros do campo investigativo, considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP11",
    description:
      "Conhecer, diferenciar e relacionar letras em formato imprensa e cursiva, maiúsculas e minúsculas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP07",
    description:
      "Escrever palavras, frases, textos curtos nas formas imprensa e cursiva.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP04",
    description:
      "Usar acento gráfico (agudo ou circunflexo) em monossílabos tônicos terminados em a, e, o e em palavras oxítonas terminadas em a, e, o, seguidas ou não de s.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP04",
    description:
      "Usar acento gráfico (agudo ou circunflexo) em paroxítonas terminadas em -i(s), -l, -r, -ão(s).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP03",
    description:
      "Acentuar corretamente palavras oxítonas, paroxítonas e proparoxítonas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP04",
    description: "Distinguir as letras do alfabeto de outros sinais gráficos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP10",
    description:
      "Nomear as letras do alfabeto e recitá-lo na ordem das letras.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP06",
    description:
      "Perceber o princípio acrofônico que opera nos nomes das letras do alfabeto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP03",
    description:
      "Localizar palavras no dicionário para esclarecer significados, reconhecendo o significado mais plausível para o contexto que deu origem à consulta.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP02",
    description:
      "Identificar o caráter polissêmico das palavras (uma mesma palavra com diferentes significados, de acordo com o contexto de uso), comparando o significado de determinados termos utilizados nas áreas científicas com esses mesmos termos utilizados na linguagem usual.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP35",
    description:
      "Planejar textos de divulgação científica, a partir da elaboração de esquema que considere as pesquisas feitas anteriormente, de notas e sínteses de leituras ou de registros de experimentos ou de estudo de campo, produzir, revisar e editar textos voltados para a divulgação do conhecimento e de dados e resultados de pesquisas, tais como artigo de divulgação científica, artigo de opinião, reportagem científica, verbete de enciclopédia, verbete de enciclopédia digital colaborativa , infográfico, relatório, relato de experimento científico, relato (multimidiático) de campo, tendo em vista seus contextos de produção, que podem envolver a disponibilização de informações e conhecimentos em circulação em um formato mais acessível para um público específico ou a divulgação de conhecimentos advindos de pesquisas bibliográficas, experimentos científicos e estudos de campo realizados.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP51",
    description:
      "Engajar-se ativamente nos processos de planejamento, textualização, revisão/ edição e reescrita, tendo em vista as restrições temáticas, composicionais e estilísticas dos textos pretendidos e as configurações da situação de produção – o leitor pretendido, o suporte, o contexto de circulação do texto, as finalidades etc. – e considerando a imaginação, a estesia e a verossimilhança próprias ao texto literário.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP16",
    description:
      "Analisar e utilizar as formas de composição dos gêneros jornalísticos da ordem do relatar, tais como notícias (pirâmide invertida no impresso X blocos noticiosos hipertextuais e hipermidiáticos no digital, que também pode contar com imagens de vários tipos, vídeos, gravações de áudio etc.), da ordem do argumentar, tais como artigos de opinião e editorial (contextualização, defesa de tese/opinião e uso de argumentos) e das entrevistas: apresentação e contextualização do entrevistado e do tema, estrutura pergunta e resposta etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP40",
    description:
      "Analisar, em gravações de seminários, conferências rápidas, trechos de palestras, dentre outros, a construção composicional dos gêneros de apresentação – abertura/saudação, introdução ao tema, apresentação do plano de exposição, desenvolvimento dos conteúdos, por meio do encadeamento de temas e subtemas (coesão temática), síntese final e/ou conclusão, encerramento –, os elementos paralinguísticos (tais como: tom e volume da voz, pausas e hesitações – que, em geral, devem ser minimizadas –, modulação de voz e entonação, ritmo, respiração etc.) e cinésicos (tais como: postura corporal, movimentos e gestualidade significativa, expressão facial, contato de olho com plateia, modulação de voz e entonação, sincronia da fala com ferramenta de apoio etc.), para melhor performar apresentações orais no campo da divulgação do conhecimento.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP42",
    description:
      "Analisar a construção composicional dos textos pertencentes a gêneros relacionados à divulgação de conhecimentos: título, (olho), introdução, divisão do texto em subtítulos, imagens ilustrativas de conceitos, relações, ou resultados complexos (fotos, ilustrações, esquemas, gráficos, infográficos, diagramas, figuras, tabelas, mapas) etc., exposição, contendo definições, descrições, comparações, enumerações, exemplificações e remissões a conceitos e relações por meio de notas de rodapé, boxes ou links; ou título, contextualização do campo, ordenação temporal ou temática por tema ou subtema, intercalação de trechos verbais com fotos, ilustrações, áudios, vídeos etc. e reconhecer traços da linguagem dos textos de divulgação científica, fazendo uso consciente das estratégias de impessoalização da linguagem (ou de pessoalização, se o tipo de publicação e objetivos assim o demandarem, como em alguns podcasts e vídeos de divulgação científica), 3ª pessoa, presente atemporal, recurso à citação, uso de vocabulário técnico/especializado etc., como forma de ampliar suas capacidades de compreensão e produção de textos nesses gêneros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP35",
    description:
      "Criar contos ou crônicas (em especial, líricas), crônicas visuais, minicontos, narrativas de aventura e de ficção científica, dentre outros, com temáticas próprias ao gênero, usando os conhecimentos sobre os constituintes estruturais e recursos expressivos típicos dos gêneros narrativos pretendidos, e, no caso de produção em grupo, ferramentas de escrita colaborativa.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP30",
    description:
      "Criar narrativas ficcionais, tais como contos populares, contos de suspense, mistério, terror, humor, narrativas de enigma, crônicas, histórias em quadrinhos, dentre outros, que utilizem cenários e personagens realistas ou de fantasia, observando os elementos da estrutura narrativa próprios ao gênero pretendido, tais como enredo, personagens, tempo, espaço e narrador, utilizando tempos verbais adequados à narração de fatos passados, empregando conhecimentos sobre diferentes modos de se iniciar uma história e de inserir os discursos direto e indireto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP31",
    description:
      "Criar poemas compostos por versos livres e de forma fixa (como quadras e sonetos), utilizando recursos visuais, semânticos e sonoros, tais como cadências, ritmos e rimas, e poemas visuais e vídeo-poemas, explorando as relações entre imagem e texto verbal, a distribuição da mancha gráfica (poema visual) e outros recursos visuais e sonoros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP05",
    description:
      "Reconhecer o sistema de escrita alfabética como representação dos sons da fala.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP13",
    description:
      "Comparar palavras, identificando semelhanças e diferenças entre sons de sílabas mediais e finais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP06",
    description:
      "Identificar a sílaba tônica em palavras, classificando-as em oxítonas, paroxítonas e proparoxítonas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP06",
    description: "Segmentar oralmente palavras em sílabas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP07",
    description: "Identificar fonemas e sua representação por letras.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP08",
    description:
      "Relacionar elementos sonoros (sílabas, fonemas, partes de palavras) com sua representação escrita.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP09",
    description:
      "Comparar palavras, identificando semelhanças e diferenças entre sons de sílabas iniciais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP02",
    description:
      "Segmentar palavras em sílabas e remover e substituir sílabas iniciais, mediais ou finais para criar novas palavras.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP03",
    description:
      "Ler e escrever palavras com correspondências regulares diretas entre letras e fonemas (f, v, t, d, p, b) e correspondências regulares contextuais (c e q; e e o, em posição átona em final de palavra).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP04",
    description:
      "Ler e escrever corretamente palavras com sílabas CV, V, CVC, CCV, identificando que existem vogais em todas as sílabas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP05",
    description:
      "Ler e escrever corretamente palavras com marcas de nasalidade (til, m, n).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP01",
    description:
      "Ler e escrever palavras com correspondências regulares contextuais entre grafemas e fonemas – c/qu; g/gu; r/rr; s/ss; o (e não u) e e (e não i) em sílaba átona em final de palavra – e com marcas de nasalidade (til, m, n).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP02",
    description:
      "Ler e escrever corretamente palavras com sílabas CV, V, CVC, CCV, VC, VV, CVV, identificando que existem vogais em todas as sílabas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP03",
    description:
      "Ler e escrever corretamente palavras com os dígrafos lh, nh, ch.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP01",
    description:
      "Grafar palavras utilizando regras de correspondência fonema--grafema regulares diretas e contextuais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP02",
    description:
      "Ler e escrever, corretamente, palavras com sílabas VV e CVV em casos nos quais a combinação VV (ditongo) é reduzida na língua oral (ai, ei, ou).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP01",
    description:
      "Grafar palavras utilizando regras de correspondência fonema-grafema regulares, contextuais e morfológicas e palavras de uso frequente com correspondências irregulares.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP12",
    description:
      "Recorrer ao dicionário para esclarecer dúvida sobre a escrita de palavras, especialmente no caso de palavras com relações irregulares fonema-grafema.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP13",
    description:
      "Memorizar a grafia de palavras de uso frequente nas quais as relações fonema-grafema são irregulares e com h inicial que não representa fonema.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP03",
    description:
      "Observar escritas convencionais, comparando-as às suas produções escritas, percebendo semelhanças e diferenças.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP01",
    description:
      "Utilizar, ao produzir o texto, grafia correta de palavras conhecidas ou com estruturas silábicas já dominadas, letras maiúsculas em início de frases e em substantivos próprios, segmentação entre as palavras, ponto final, ponto de interrogação e ponto de exclamação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP07",
    description:
      "Utilizar, ao produzir um texto, conhecimentos linguísticos e gramaticais, tais como ortografia, regras básicas de concordância nominal e verbal, pontuação (ponto final, ponto de exclamação, ponto de interrogação, vírgulas em enumerações) e pontuação do discurso direto, quando for o caso.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12LP03",
    description:
      "Copiar textos breves, mantendo suas características e voltando para o texto sempre que tiver dúvidas sobre sua distribuição gráfica, espaçamento entre as palavras, escrita das palavras e pontuação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP08",
    description:
      "Utilizar, ao produzir um texto, recursos de referenciação (por substituição lexical ou por pronomes pessoais, possessivos e demonstrativos), vocabulário apropriado ao gênero, recursos de coesão pronominal (pronomes anafóricos) e articuladores de relações de sentido (tempo, causa, oposição, conclusão, comparação), com nível suficiente de informatividade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15LP19",
    description:
      "Recontar oralmente, com e sem apoio de imagem, textos literários lidos pelo professor.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP16",
    description:
      "Explorar e analisar espaços de reclamação de direitos e de envio de solicitações (tais como ouvidorias, SAC, canais ligados a órgãos públicos, plataformas do consumidor, plataformas de reclamação), bem como de textos pertencentes a gêneros que circulam nesses espaços, reclamação ou carta de reclamação, solicitação ou carta de solicitação, como forma de ampliar as possibilidades de produção desses textos em casos que remetam a reivindicações que envolvam a escola, a comunidade ou algum de seus membros como forma de se engajar na busca de solução de problemas pessoais, dos outros e coletivos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP18",
    description:
      "Explorar e analisar instâncias e canais de participação disponíveis na escola (conselho de escola, outros colegiados, grêmio livre), na comunidade (associações, coletivos, movimentos, etc.), no munícipio ou no país, incluindo formas de participação digital, como canais e plataformas de participação (como portal e-cidadania), serviços, portais e ferramentas de acompanhamentos do trabalho de políticos e de tramitação de leis, canais de educação política, bem como de propostas e proposições que circulam nesses canais, de forma a participar do debate de ideias e propostas na esfera social e a engajar-se com a busca de soluções para problemas ou questões que envolvam a vida da escola e da comunidade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP23",
    description:
      "Respeitar os turnos de fala, na participação em conversações e em discussões ou atividades coletivas, na sala de aula e na escola e formular perguntas coerentes e adequadas em momentos oportunos em situações de aulas, apresentação oral, seminário etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP27",
    description:
      "Tecer considerações e formular problematizações pertinentes, em momentos oportunos, em situações de aulas, apresentação oral, seminário etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP02",
    description:
      "Escrever, espontaneamente ou por ditado, palavras e frases de forma alfabética – usando letras/grafemas que representem fonemas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP20",
    description:
      "Realizar pesquisa, a partir de recortes e questões definidos previamente, usando fontes indicadas e abertas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP24",
    description:
      "Realizar pesquisa, estabelecendo o recorte das questões, usando fontes abertas e confiáveis.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP28",
    description:
      "Declamar poemas, com entonação, postura e interpretação adequadas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12LP01",
    description:
      "Ler palavras novas com precisão na decodificação, no caso de palavras de uso frequente, ler globalmente, por memorização.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP01",
    description:
      "Ler e compreender, silenciosamente e, em seguida, em voz alta, com autonomia e fluência, textos curtos com nível de textualidade adequado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP30",
    description:
      "Diferenciar discurso indireto e discurso direto, determinando o efeito de sentido de verbos de enunciação e explicando o uso de variedades linguísticas no discurso direto, quando for o caso.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP24",
    description:
      "Discutir casos, reais ou simulações, submetidos a juízo, que envolvam (supostos) desrespeitos a artigos, do ECA, do Código de Defesa do Consumidor, do Código Nacional de Trânsito, de regulamentações do mercado publicitário etc., como forma de criar familiaridade com textos legais – seu vocabulário, formas de organização, marcas de estilo etc. -, de maneira a facilitar a compreensão de leis, fortalecer a defesa de direitos, fomentar a escrita de textos normativos (se e quando isso for necessário) e possibilitar a compreensão do caráter interpretativo das leis e as várias perspectivas que podem estar em jogo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP25",
    description:
      "Posicionar-se de forma consistente e sustentada em uma discussão, assembleia, reuniões de colegiados da escola, de agremiações e outras situações de apresentação de propostas e defesas de opiniões, respeitando as opiniões contrárias e propostas alternativas e fundamentando seus posicionamentos, no tempo de fala previsto, valendo-se de sínteses e propostas claras e justificadas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15LP07",
    description:
      "Editar a versão final do texto, em colaboração com os colegas e com a ajuda do professor, ilustrando, quando for o caso, em suporte adequado, manual ou digital.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP19",
    description:
      "Analisar, em gêneros orais que envolvam argumentação, os efeitos de sentido de elementos típicos da modalidade falada, como a pausa, a entonação, o ritmo, a gestualidade e expressão facial, as hesitações etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP06",
    description:
      "Identificar os efeitos de sentido provocados pela seleção lexical, topicalização de elementos e seleção e hierarquização de informações, uso de 3ª pessoa etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP07",
    description:
      "Identificar o uso de recursos persuasivos em textos argumentativos diversos (como a elaboração do título, escolhas lexicais, construções metafóricas, a explicitação ou a ocultação de fontes de informação) e perceber seus efeitos de sentido.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP04",
    description:
      "Identificar e analisar os efeitos de sentido que fortalecem a persuasão nos textos publicitários, relacionando as estratégias de persuasão e apelo ao consumo com os recursos linguístico-discursivos utilizados, como imagens, tempo verbal, jogos de palavras, figuras de linguagem etc., com vistas a fomentar práticas de consumo conscientes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP05",
    description:
      "Inferir e justificar, em textos multissemióticos – tirinhas, charges, memes, gifs etc. –, o efeito de humor, ironia e/ou crítica pelo uso ambíguo de palavras, expressões ou imagens ambíguas, de clichês, de recursos iconográficos, de pontuação etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP05",
    description:
      "Analisar o efeito de sentido produzido pelo uso, em textos, de recurso a formas de apropriação textual (paráfrases, citações, discurso direto, indireto ou indireto livre).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP06",
    description:
      "Analisar o uso de recursos persuasivos em textos argumentativos diversos (como a elaboração do título, escolhas lexicais, construções metafóricas, a explicitação ou a ocultação de fontes de informação) e seus efeitos de sentido.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP08",
    description:
      "Identificar os efeitos de sentido devidos à escolha de imagens estáticas, sequenciação ou sobreposição de imagens, definição de figura/fundo, ângulo, profundidade e foco, cores/tonalidades, relação com o escrito (relações de reiteração, complementação ou oposição) etc. em notícias, reportagens, fotorreportagens, foto-denúncias, memes, gifs, anúncios publicitários e propagandas publicados em jornais, revistas, sites na internet etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP07",
    description:
      "Analisar, em notícias, reportagens e peças publicitárias em várias mídias, os efeitos de sentido devidos ao tratamento e à composição dos elementos nas imagens em movimento, à performance, à montagem feita (ritmo, duração e sincronização entre as linguagens – complementaridades, interferências etc.) e ao ritmo, melodia, instrumentos e sampleamentos das músicas e efeitos sonoros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP33",
    description: "Pontuar textos adequadamente.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LP11",
    description:
      "Utilizar, ao produzir texto, conhecimentos linguísticos e gramaticais: tempos verbais, concordância nominal e verbal, regras ortográficas, pontuação etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LP09",
    description:
      "Identificar efeitos de sentido do uso de orações adjetivas restritivas e explicativas em um período composto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP23",
    description:
      "Planejar e produzir, com certa autonomia, pequenos registros de observação de resultados de pesquisa, coerentes com um tema investigado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP22",
    description:
      "Planejar e produzir, com certa autonomia, verbetes de enciclopédia infantil, digitais ou impressos, considerando a situação comunicativa e o tema/ assunto/finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP25",
    description:
      "Representar cenas de textos dramáticos, reproduzindo as falas das personagens, de acordo com as rubricas de interpretação e movimento indicadas pelo autor.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP27",
    description:
      "Ler e compreender, com certa autonomia, textos em versos, explorando rimas, sons e jogos de palavras, imagens poéticas (sentidos figurados) e recursos visuais e sonoros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP17",
    description:
      "Planejar e produzir, em colaboração com os colegas e com a ajuda do professor, listas, agendas, calendários, avisos, convites, receitas, instruções de montagem e legendas para álbuns, fotos ou ilustrações (digitais ou impressos), dentre outros gêneros do campo da vida cotidiana, considerando a situação comunicativa e o tema/assunto/ finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP18",
    description:
      "Registrar, em colaboração com os colegas e com a ajuda do professor, cantigas, quadras, quadrinhas, parlendas, trava-línguas, dentre outros gêneros do campo da vida cotidiana, considerando a situação comunicativa e o tema/assunto/finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP25",
    description:
      "Produzir, tendo o professor como escriba, recontagens de histórias lidas pelo professor, histórias imaginadas ou baseadas em livros de imagens, observando a forma de composição de textos narrativos (personagens, enredo, tempo e espaço).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP13",
    description:
      "Planejar e produzir bilhetes e cartas, em meio impresso e/ou digital, dentre outros gêneros do campo da vida cotidiana, considerando a situação comunicativa e o tema/assunto/finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP14",
    description:
      "Planejar e produzir pequenos relatos de observação de processos, de fatos, de experiências pessoais, mantendo as características do gênero, considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP27",
    description:
      "Reescrever textos narrativos literários lidos pelo professor.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP25",
    description:
      "Criar narrativas ficcionais, com certa autonomia, utilizando detalhes descritivos, sequências de eventos e imagens apropriadas para sustentar o sentido do texto, e marcadores de tempo, espaço e de fala de personagens.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP26",
    description:
      "Ler e compreender, com certa autonomia, narrativas ficcionais que apresentem cenários e personagens, observando os elementos da estrutura narrativa: enredo, tempo, espaço, personagens, narrador e a construção do discurso indireto e discurso direto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP13",
    description:
      "Planejar e produzir cartas pessoais e diários, com expressão de sentimentos e opiniões, dentre outros gêneros do campo da vida cotidiana, de acordo com as convenções dos gêneros carta e diário e considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP14",
    description:
      "Planejar e produzir textos injuntivos instrucionais, com a estrutura própria desses textos (verbos imperativos, indicação de passos a ser seguidos) e mesclando palavras, imagens e recursos gráfico-visuais, considerando a situação comunicativa e o tema/ assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP20",
    description:
      "Produzir cartas dirigidas a veículos da mídia impressa ou digital (cartas do leitor ou de reclamação a jornais ou revistas), dentre outros gêneros do campopo lítico-cidadão, com opiniões e críticas, de acordo com as convenções do gênero carta e considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP21",
    description:
      "Produzir anúncios publicitários, textos de campanhas de conscientização destinados ao público infantil, observando os recursos de persuasão utilizados nos textos publicitários e de propaganda (cores, imagens, slogan, escolha de palavras, jogo de palavras, tamanho e tipo de letras, diagramação).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP11",
    description:
      "Planejar e produzir, com autonomia, cartas pessoais de reclamação, dentre outros gêneros do campo da vida cotidiana, de acordo com as convenções do gênero carta e com a estrutura própria desses textos (problema, opinião, argumentos), considerando a situação comunicativa e o tema/assunto/finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP16",
    description:
      "Produzir notícias sobre fatos ocorridos no universo escolar, digitais ou impressas, para o jornal da escola, noticiando os fatos e seus atores e comentando decorrências, de acordo com as convenções do gênero notícia e considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP11",
    description:
      "Registrar, com autonomia, anedotas, piadas e cartuns, dentre outros gêneros do campo da vida cotidiana, de acordo com as convenções do gênero e considerando a situação comunicativa e a finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP12",
    description:
      "Planejar e produzir, com autonomia, textos instrucionais de regras de jogo, dentre outros gêneros do campo da vida cotidiana, de acordo com as convenções do gênero e considerando a situação comunicativa e a finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP17",
    description:
      "Produzir roteiro para edição de uma reportagem digital sobre temas de interesse da turma, a partir de buscas de informações, imagens, áudios e vídeos na internet, de acordo com as convenções do gênero e considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP15",
    description:
      "Opinar e defender ponto de vista sobre tema polêmico relacionado a situações vivenciadas na escola e/ou na comunidade, utilizando registro formal e estrutura adequada à argumentação, considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP21",
    description:
      "Escrever, em colaboração com os colegas e com a ajuda do professor, listas de regras e regulamentos que organizam a vida na comunidade escolar, dentre outros gêneros do campo da atuação cidadã, considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP18",
    description:
      "Planejar e produzir cartazes e folhetos para divulgar eventos da escola ou da comunidade, utilizando linguagem persuasiva e elementos textuais e visuais (tamanho da letra, leiaute, imagens) adequados ao gênero, considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12LP05",
    description:
      "Planejar e produzir, em colaboração com os colegas e com a ajuda do professor, (re)contagens de histórias, poemas e outros textos versificados (letras de canção, quadrinhas, cordel), poemas visuais, tiras e histórias em quadrinhos, dentre outros gêneros do campo artístico-literário, considerando a situação comunicativa e a finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12LP11",
    description:
      "Escrever, em colaboração com os colegas e com a ajuda do professor, fotolegendas em notícias, manchetes e lides em notícias, álbum de fotos digital noticioso e notícias curtas para público infantil, digitais ou impressos, dentre outros gêneros do campo jornalístico, considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12LP12",
    description:
      "Escrever, em colaboração com os colegas e com a ajuda do professor, slogans, anúncios publicitários e textos de campanhas de conscientização destinados ao público infantil, dentre outros gêneros do campo publicitário, considerando a situação comunicativa e o tema/ assunto/finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15LP10",
    description:
      "Escutar, com atenção, falas de professores e colegas, formulando perguntas pertinentes ao tema e solicitando esclarecimentos sempre que necessário.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP18",
    description:
      "Escutar, com atenção, apresentações de trabalhos realizadas por colegas, formulando perguntas pertinentes ao tema e solicitando esclarecimentos sempre que necessário.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP22",
    description:
      "Compreender e comparar as diferentes posições e interesses em jogo em uma discussão ou apresentação de propostas, avaliando a validade e força dos argumentos e as consequências do que está sendo proposto e, quando for o caso, formular e negociar propostas de diferentes naturezas relativas a interesses coletivos envolvendo a escola ou comunidade escolar.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP17",
    description:
      "Perceber e analisar os recursos estilísticos e semióticos dos gêneros jornalísticos e publicitários, os aspectos relativos ao tratamento da informação em notícias, como a ordenação dos eventos, as escolhas lexicais, o efeito de imparcialidade do relato, a morfologia do verbo, em textos noticiosos e argumentativos, reconhecendo marcas de pessoa, número, tempo, modo, a distribuição dos verbos nos gêneros textuais (por exemplo, as formas de pretérito em relatos; as formas de presente e futuro em gêneros argumentativos; as formas de imperativo em gêneros publicitários), o uso de recursos persuasivos em textos argumentativos diversos (como a elaboração do título, escolhas lexicais, construções metafóricas, a explicitação ou a ocultação de fontes de informação) e as estratégias de persuasão e apelo ao consumo com os recursos linguístico-discursivos utilizados (tempo verbal, jogos de palavras, metáforas, imagens).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP18",
    description:
      "Utilizar, na escrita/reescrita de textos argumentativos, recursos linguísticos que marquem as relações de sentido entre parágrafos e enunciados do texto e operadores de conexão adequados aos tipos de argumento e à forma de composição de textos argumentativos, de maneira a garantir a coesão, a coerência e a progressão temática nesses textos (“primeiramente, mas, no entanto, em primeiro/segundo/terceiro lugar, finalmente, em conclusão” etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP15",
    description:
      "Utilizar, nos debates, operadores argumentativos que marcam a defesa de ideia e de diálogo com a tese do outro: concordo, discordo, concordo parcialmente, do meu ponto de vista, na perspectiva aqui assumida etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15LP02",
    description:
      "Estabelecer expectativas em relação ao texto que vai ler (pressuposições antecipadoras dos sentidos, da forma e da função social do texto), apoiando-se em seus conhecimentos prévios sobre as condições de produção e recepção desse texto, o gênero, o suporte e o universo temático, bem como sobre saliências textuais, recursos gráficos, imagens, dados da própria obra (índice, prefácio etc.), confirmando antecipações e inferências realizadas antes e durante a leitura de textos, checando a adequação das hipóteses realizadas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15LP03",
    description: "Localizar informações explícitas em textos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15LP04",
    description:
      "Identificar o efeito de sentido produzido pelo uso de recursos expressivos gráfico-visuais em textos multissemióticos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP04",
    description: "Inferir informações implícitas nos textos lidos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP05",
    description:
      "Inferir o sentido de palavras ou expressões desconhecidas em textos, com base no contexto da frase ou do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP06",
    description:
      "Recuperar relações entre partes de um texto, identificando substituições lexicais (de substantivos por sinônimos) ou pronominais (uso de pronomes anafóricos – pessoais, possessivos, demonstrativos) que contribuem para a continuidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP04",
    description:
      "Distinguir, em segmentos descontínuos de textos, fato da opinião enunciada em relação a esse mesmo fato.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP03",
    description:
      "Identificar, em notícias, o fato central, suas principais circunstâncias e eventuais decorrências; em reportagens e fotorreportagens o fato ou a temática retratada e a perspectiva de abordagem, em entrevistas os principais temas/subtemas abordados, explicações dadas ou teses defendidas em relação a esses subtemas; em tirinhas, memes, charge, a crítica, ironia ou humor presente.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP03",
    description:
      "Analisar textos de opinião (artigos de opinião, editoriais, cartas de leitores, comentários, posts de blog e de redes sociais, charges, memes, gifs etc.) e posicionar-se de forma crítica e fundamentada, ética e respeitosa frente a fatos e opiniões relacionados a esses textos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP04",
    description:
      "Identificar e avaliar teses/opiniões/posicionamentos explícitos e implícitos, argumentos e contra-argumentos em textos argumentativos do campo (carta de leitor, comentário, artigo de opinião, resenha crítica etc.), posicionando-se frente à questão controversa de forma sustentada.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP05",
    description:
      "Identificar e avaliar teses/opiniões/posicionamentos explícitos e argumentos em textos argumentativos (carta de leitor, comentário, artigo de opinião, resenha crítica etc.), manifestando concordância ou discordância.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP10",
    description:
      "Planejar artigos de opinião, tendo em vista as condições de produção do texto – objetivo, leitores/espectadores, veículos e mídia de circulação etc. –, a partir da escolha do tema ou questão a ser discutido(a), da relevância para a turma, escola ou comunidade, do levantamento de dados e informações sobre a questão, de argumentos relacionados a diferentes posicionamentos em jogo, da definição – o que pode envolver consultas a fontes diversas, entrevistas com especialistas, análise de textos, organização esquemática das informações e argumentos – dos (tipos de) argumentos e estratégias que pretende utilizar para convencer os leitores.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP08",
    description:
      "Planejar reportagem impressa e em outras mídias (rádio ou TV/vídeo, sites), tendo em vista as condições de produção do texto – objetivo, leitores/espectadores, veículos e mídia de circulação etc. – a partir da escolha do fato a ser aprofundado ou do tema a ser focado (de relevância para a turma, escola ou comunidade), do levantamento de dados e informações sobre o fato ou tema – que pode envolver entrevistas com envolvidos ou com especialistas, consultas a fontes diversas, análise de documentos, cobertura de eventos etc. -, do registro dessas informações e dados, da escolha de fotos ou imagens a produzir ou a utilizar etc., da produção de infográficos, quando for o caso, e da organização hipertextual (no caso a publicação em sites ou blogs noticiosos ou mesmo de jornais impressos, por meio de boxes variados).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP19",
    description:
      "Realizar levantamento de questões, problemas que requeiram a denúncia de desrespeito a direitos, reivindicações, reclamações, solicitações que contemplem a comunidade escolar ou algum de seus membros e examinar normas e legislações.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP21",
    description:
      "Realizar enquetes e pesquisas de opinião, de forma a levantar prioridades, problemas a resolver ou propostas que possam contribuir para melhoria da escola ou da comunidade, caracterizar demanda/necessidade, documentando-a de diferentes maneiras por meio de diferentes procedimentos, gêneros e mídias e, quando for o caso, selecionar informações e dados relevantes de fontes pertinentes diversas (sites, impressos, vídeos etc.), avaliando a qualidade e a utilidade dessas fontes, que possam servir de contextualização e fundamentação de propostas, de forma a justificar a proposição de propostas, projetos culturais e ações de intervenção.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP09",
    description:
      "Produzir reportagem impressa, com título, linha fina (optativa), organização composicional (expositiva, interpretativa e/ou opinativa), progressão temática e uso de recursos linguísticos compatíveis com as escolhas feitas e reportagens multimidiáticas, tendo em vista as condições de produção, as características do gênero, os recursos e mídias disponíveis, sua organização hipertextual e o manejo adequado de recursos de captação e edição de áudio e imagem e adequação à norma-padrão.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP21",
    description:
      "Divulgar resultados de pesquisas por meio de apresentações orais, painéis, artigos de divulgação científica, verbetes de enciclopédia, podcasts científicos etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP22",
    description:
      "Produzir resumos, a partir das notas e/ou esquemas feitos, com o uso adequado de paráfrases e citações.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP36",
    description:
      "Produzir, revisar e editar textos voltados para a divulgação do conhecimento e de dados e resultados de pesquisas, tais como artigos de divulgação científica, verbete de enciclopédia, infográfico, infográfico animado, podcast ou vlog científico, relato de experimento, relatório, relatório multimidiático de campo, dentre outros, considerando o contexto de produção e as regularidades dos gêneros em termos de suas construções composicionais e estilos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP25",
    description:
      "Divulgar o resultado de pesquisas por meio de apresentações orais, verbetes de enciclopédias colaborativas, reportagens de divulgação científica, vlogs científicos, vídeos de diferentes tipos etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP26",
    description:
      "Produzir resenhas, a partir das notas e/ou esquemas feitos, com o manejo adequado das vozes envolvidas (do resenhador, do autor da obra e, se for o caso, também dos autores citados na obra resenhada), por meio do uso de paráfrases, marcas do discurso reportado e citações.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP28",
    description:
      "Ler, de forma autônoma, e compreender – selecionando procedimentos e estratégias de leitura adequados a diferentes objetivos e levando em conta características dos gêneros e suportes –, romances infantojuvenis, contos populares, contos de terror, lendas brasileiras, indígenas e africanas, narrativas de aventuras, narrativas de enigma, mitos, crônicas, autobiografias, histórias em quadrinhos, mangás, poemas de forma livre e fixa (como sonetos e cordéis), vídeo-poemas, poemas visuais, dentre outros, expressando avaliação sobre o texto lido e estabelecendo preferências por gêneros, temas, autores.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP33",
    description:
      "Ler, de forma autônoma, e compreender – selecionando procedimentos e estratégias de leitura adequados a diferentes objetivos e levando em conta características dos gêneros e suportes – romances, contos contemporâneos, minicontos, fábulas contemporâneas, romances juvenis, biografias romanceadas, novelas, crônicas visuais, narrativas de ficção científica, narrativas de suspense, poemas de forma livre e fixa (como haicai), poema concreto, ciberpoema, dentre outros, expressando avaliação sobre o texto lido e estabelecendo preferências por gêneros, temas, autores.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP37",
    description:
      "Produzir roteiros para elaboração de vídeos de diferentes tipos (vlog científico, vídeo-minuto, programa de rádio, podcasts) para divulgação de conhecimentos científicos e resultados de pesquisa, tendo em vista seu contexto de produção, os elementos e a construção composicional dos roteiros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP39",
    description:
      "Definir o recorte temático da entrevista e o entrevistado, levantar informações sobre o entrevistado e sobre o tema da entrevista, elaborar roteiro de perguntas, realizar entrevista, a partir do roteiro, abrindo possibilidades para fazer perguntas a partir da resposta, se o contexto permitir, tomar nota, gravar ou salvar a entrevista e usar adequadamente as informações obtidas, de acordo com os objetivos estabelecidos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP11",
    description:
      "Planejar resenhas, vlogs, vídeos e podcasts variados, e textos e vídeos de apresentação e apreciação próprios das culturas juvenis (algumas possibilidades: fanzines, fanclipes, e-zines, gameplay, detonado etc.), dentre outros, tendo em vista as condições de produção do texto – objetivo, leitores/espectadores, veículos e mídia de circulação etc. –, a partir da escolha de uma produção ou evento cultural para analisar – livro, filme, série, game, canção, videoclipe, fanclipe, show, saraus, slams etc. – da busca de informação sobre a produção ou evento escolhido, da síntese de informações sobre a obra/evento e do elenco/seleção de aspectos, elementos ou recursos que possam ser destacados positiva ou negativamente ou da roteirização do passo a passo do game para posterior gravação dos vídeos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP09",
    description:
      "Planejar notícia impressa e para circulação em outras mídias (rádio ou TV/vídeo), tendo em vista as condições de produção, do texto – objetivo, leitores/espectadores, veículos e mídia de circulação etc. –, a partir da escolha do fato a ser noticiado (de relevância para a turma, escola ou comunidade), do levantamento de dados e informações sobre o fato – que pode envolver entrevistas com envolvidos ou com especialistas, consultas a fontes, análise de documentos, cobertura de eventos etc.–, do registro dessas informações e dados, da escolha de fotos ou imagens a produzir ou a utilizar etc. e a previsão de uma estrutura hipertextual (no caso de publicação em sites ou blogs noticiosos).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP12",
    description:
      "Planejar coletivamente a realização de um debate sobre tema previamente definido, de interesse coletivo, com regras acordadas e planejar, em grupo, participação em debate a partir do levantamento de informações e argumentos que possam sustentar o posicionamento a ser defendido (o que pode envolver entrevistas com especialistas, consultas a fontes diversas, o registro das informações e dados obtidos etc.), tendo em vista as condições de produção do debate – perfil dos ouvintes e demais participantes, objetivos do debate, motivações para sua realização, argumentos e estratégias de convencimento mais eficazes etc. e participar de debates regrados, na condição de membro de uma equipe de debatedor, apresentador/mediador, espectador (com ou sem direito a perguntas), e/ou de juiz/avaliador, como forma de compreender o funcionamento do debate, e poder participar de forma convincente, ética, respeitosa e crítica e desenvolver uma atitude de respeito e diálogo para com as ideias divergentes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP38",
    description:
      "Organizar os dados e informações pesquisados em painéis ou slides de apresentação, levando em conta o contexto de produção, o tempo disponível, as características do gênero apresentação oral, a multissemiose, as mídias e tecnologias que serão utilizadas, ensaiar a apresentação, considerando também elementos paralinguísticos e cinésicos e proceder à exposição oral de resultados de estudos e pesquisas, no tempo determinado, a partir do planejamento e da definição de diferentes formas de uso da fala – memorizada, com apoio da leitura ou fala espontânea.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP13",
    description:
      "Planejar entrevistas orais com pessoas ligadas ao fato noticiado, especialistas etc., como forma de obter dados e informações sobre os fatos cobertos sobre o tema ou questão discutida ou temáticas em estudo, levando em conta o gênero e seu contexto de produção, partindo do levantamento de informações sobre o entrevistado e sobre a temática e da elaboração de um roteiro de perguntas, garantindo a relevância das informações mantidas e a continuidade temática, realizar entrevista e fazer edição em áudio ou vídeo, incluindo uma contextualização inicial e uma fala de encerramento para publicação da entrevista isoladamente ou como parte integrante de reportagem multimidiática, adequando-a a seu contexto de publicação e garantindo a relevância das informações mantidas e a continuidade temática.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP11",
    description:
      "Produzir, revisar e editar peças e campanhas publicitárias, envolvendo o uso articulado e complementar de diferentes peças publicitárias: cartaz, banner, indoor, folheto, panfleto, anúncio de jornal/revista, para internet, spot, propaganda de rádio, TV, a partir da escolha da questão/problema/causa significativa para a escola e/ou a comunidade escolar, da definição do público-alvo, das peças que serão produzidas, das estratégias de persuasão e convencimento que serão utilizadas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP15",
    description:
      "Identificar a proibição imposta ou o direito garantido, bem como as circunstâncias de sua aplicação, em artigos relativos a normas, regimentos escolares, regimentos e estatutos da sociedade civil, regulamentações para o mercado publicitário, Código de Defesa do Consumidor, Código Nacional de Trânsito, ECA, Constituição, dentre outros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP20",
    description:
      "Comparar propostas políticas e de solução de problemas, identificando o que se pretende fazer/implementar, por que (motivações, justificativas), para que (objetivos, benefícios e consequências esperados), como (ações e passos), quando etc. e a forma de avaliar a eficácia da proposta/solução, contrastando dados e informações de diferentes fontes, identificando coincidências, complementaridades e contradições, de forma a poder compreender e posicionar-se criticamente sobre os dados e informações usados em fundamentação de propostas e analisar a coerência entre os elementos, de forma a tomar decisões fundamentadas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP32",
    description:
      "Selecionar informações e dados relevantes de fontes diversas (impressas, digitais, orais etc.), avaliando a qualidade e a utilidade dessas fontes, e organizar, esquematicamente, com ajuda do professor, as informações necessárias (sem excedê-las) com ou sem apoio de ferramentas digitais, em quadros, tabelas ou gráficos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP33",
    description:
      "Articular o verbal com os esquemas, infográficos, imagens variadas etc. na (re)construção dos sentidos dos textos de divulgação científica e retextualizar do discursivo para o esquemático – infográfico, esquema, tabela, gráfico, ilustração etc. – e, ao contrário, transformar o conteúdo das tabelas, esquemas, infográficos, ilustrações etc. em texto discursivo, como forma de ampliar as possibilidades de compreensão desses textos e analisar as características das multissemioses e dos gêneros em questão.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP34",
    description:
      "Grifar as partes essenciais do texto, tendo em vista os objetivos de leitura, produzir marginálias (ou tomar notas em outro suporte), sínteses organizadas em itens, quadro sinóptico, quadro comparativo, esquema, resumo ou resenha do texto lido (com ou sem comentário/análise), mapa conceitual, dependendo do que for mais adequado, como forma de possibilitar uma maior compreensão do texto, a sistematização de conteúdos e informações e",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP18",
    description:
      "Identificar o objeto da reclamação e/ou da solicitação e sua sustentação, explicação ou justificativa, de forma a poder analisar a pertinência da solicitação ou justificação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP38",
    description:
      "Analisar os efeitos de sentido do uso de figuras de linguagem, como comparação, metáfora, metonímia, personificação, hipérbole, dentre outras.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP37",
    description:
      "Analisar os efeitos de sentido do uso de figuras de linguagem como ironia, eufemismo, antítese, aliteração, assonância, dentre outras.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LP04",
    description:
      "Utilizar, ao produzir texto, conhecimentos linguísticos e gramaticais: ortografia, regências e concordâncias nominal e verbal, modos e tempos verbais, pontuação etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LP04",
    description:
      "Escrever textos corretamente, de acordo com a norma-padrão, com estruturas sintáticas complexas no nível da oração e do período.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP32",
    description:
      "Escrever palavras com correção ortográfica, obedecendo as convenções da língua escrita.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP10",
    description:
      "Identificar gêneros do discurso oral, utilizados em diferentes situações e contextos comunicativos, e suas características linguístico-expressivas e composicionais (conversação espontânea, conversação telefônica, entrevistas pessoais, entrevistas no rádio ou na TV, debate, noticiário de rádio e TV, narração de jogos esportivos no rádio e TV, aula, debate etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP27",
    description:
      "Identificar, em textos dramáticos, marcadores das falas das personagens e de cena.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP31",
    description:
      "Identificar, em textos versificados, efeitos de sentido decorrentes do uso de recursos rítmicos e sonoros e de metáforas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP26",
    description:
      "Observar, em poemas concretos, o formato, a distribuição e a diagramação das letras do texto na página.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP28",
    description:
      "Observar, em ciberpoemas e minicontos infantis em mídia digital, os recursos multissemióticos presentes nesses textos digitais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP20",
    description:
      "Identificar e reproduzir, em listas, agendas, calendários, regras, avisos, convites, receitas, instruções de montagem e legendas para álbuns, fotos ou ilustrações (digitais ou impressos), a formatação e diagramação específica de cada um desses gêneros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP16",
    description:
      "Identificar e reproduzir, em bilhetes, recados, avisos, cartas, e-mails, receitas (modo de fazer), relatos (digitais ou impressos), a formatação e diagramação específica de cada um desses gêneros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP17",
    description:
      "Identificar e reproduzir, em relatos de experiências pessoais, a sequência dos fatos, utilizando expressões que marquem a passagem do tempo (“antes”, “depois”, “ontem”, “hoje”, “amanhã”, “outro dia”, “antigamente”, “há muito tempo” etc.), e o nível de informatividade necessário.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP16",
    description:
      "Identificar e reproduzir, em textos injuntivos instrucionais (receitas, instruções de montagem, digitais ou impressos), a formatação própria desses textos (verbos imperativos, indicação de passos a ser seguidos) e a diagramação específica dos textos desses gêneros (lista de ingredientes ou materiais e instruções de execução '– modo de fazer').",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP17",
    description:
      "Identificar e reproduzir, em gêneros epistolares e diários, a formatação própria desses textos (relatos de acontecimentos, expressão de vivências, emoções, opiniões ou críticas) e a diagramação específica dos textos desses gêneros (data, saudação, corpo do texto, despedida, assinatura).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP13",
    description:
      "Identificar e reproduzir, em textos injuntivos instrucionais (instruções de jogos digitais ou impressos), a formatação própria desses textos (verbos imperativos, indicação de passos a ser seguidos) e formato específico dos textos orais ou escritos desses gêneros (lista/ apresentação de materiais e instruções/passos de jogo).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP14",
    description:
      "Identificar e reproduzir, em textos de resenha crítica de brinquedos ou livros de literatura infantil, a formatação própria desses textos (apresentação e avaliação do produto).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12LP07",
    description:
      "Identificar e (re)produzir, em cantiga, quadras, quadrinhas, parlendas, trava-línguas e canções, rimas, aliterações, assonâncias, o ritmo de fala relacionado ao ritmo e à melodia das músicas e seus efeitos de sentido.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12LP14",
    description:
      "Identificar e reproduzir, em fotolegendas de notícias, álbum de fotos digital noticioso, cartas de leitor (revista infantil), digitais ou impressos, a formatação e diagramação específica de cada um desses gêneros, inclusive em suas versões orais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12LP15",
    description: "Identificar a forma de composição de slogans publicitários.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12LP16",
    description:
      "Identificar e reproduzir, em anúncios publicitários e textos de campanhas de conscientização destinados ao público infantil (orais e escritos, digitais ou impressos), a formatação e diagramação específica de cada um desses gêneros, inclusive o uso de imagens.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP23",
    description:
      "Analisar o uso de adjetivos em cartas dirigidas a veículos da mídia impressa ou digital (cartas do leitor ou de reclamação a jornais ou revistas), digitais ou impressas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP18",
    description:
      "Analisar o padrão entonacional e a expressão facial e corporal de âncoras de jornais radiofônicos ou televisivos e de entrevistadores/entrevistados.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP20",
    description:
      "Analisar a validade e força de argumentos em argumentações sobre produtos de mídia para público infantil (filmes, desenhos animados, HQs, games etc.), com base em conhecimentos sobre os mesmos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP21",
    description:
      "Analisar o padrão entonacional, a expressão facial e corporal e as escolhas de variedade e registro linguísticos de vloggers de vlogs opinativos ou argumentativos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP16",
    description:
      "Identificar e reproduzir, em notícias, manchetes, lides e corpo de notícias simples para público infantil e cartas de reclamação (revista infantil), digitais ou impressos, a formatação e diagramação específica de cada um desses gêneros, inclusive em suas versões orais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP26",
    description:
      "Utilizar, ao produzir o texto, conhecimentos linguísticos e gramaticais: regras sintáticas de concordância nominal e verbal, convenções de escrita de citações, pontuação (ponto final, dois-pontos, vírgulas em enumerações) e regras ortográficas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP27",
    description:
      "Utilizar, ao produzir o texto, recursos de coesão pronominal (pronomes anafóricos) e articuladores de relações de sentido (tempo, causa, oposição, conclusão, comparação), com nível adequado de informatividade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP26",
    description:
      "Identificar e reproduzir, em relatórios de observação e pesquisa, a formatação e diagramação específica desses gêneros (passos ou listas de itens, tabelas, ilustrações, gráficos, resumo dos resultados), inclusive em suas versões orais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP24",
    description:
      "Identificar e reproduzir, em seu formato, tabelas, diagramas e gráficos em relatórios de observação e pesquisa, como forma de apresentação de dados e informações.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP23",
    description:
      "Identificar e reproduzir, em verbetes de enciclopédia infantil, digitais ou impressos, a formatação e diagramação específica desse gênero (título do verbete, definição, detalhamento, curiosidades), considerando a situação comunicativa e o tema/assunto/finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP24",
    description:
      "Identificar e reproduzir, em enunciados de tarefas escolares, diagramas, entrevistas, curiosidades, digitais ou impressos, a formatação e diagramação específica de cada um desses gêneros, inclusive em suas versões orais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP25",
    description:
      "Identificar e reproduzir, em relatos de experimentos, entrevistas, verbetes de enciclopédia infantil, digitais ou impressos, a formatação e diagramação específica de cada um desses gêneros, inclusive em suas versões orais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12LP02",
    description:
      "Buscar, selecionar e ler, com a mediação do professor (leitura compartilhada), textos que circulam em meios impressos ou digitais, de acordo com as necessidades e interesses.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP02",
    description:
      "Selecionar livros da biblioteca e/ou do cantinho de leitura da sala de aula e/ou disponíveis em meios digitais para leitura individual, justificando a escolha e compartilhando com os colegas sua opinião, após a leitura.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP26",
    description:
      "Ler e compreender, com certa autonomia, textos literários, de gêneros variados, desenvolvendo o gosto pela leitura.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15LP15",
    description:
      "Reconhecer que os textos literários fazem parte do mundo do imaginário e apresentam uma dimensão lúdica, de encantamento, valorizando-os, em sua diversidade cultural, como patrimônio artístico da humanidade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP21",
    description:
      "Ler e compreender, de forma autônoma, textos literários de diferentes gêneros e extensões, inclusive aqueles sem ilustrações, estabelecendo preferências por gêneros, temas, autores.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP22",
    description:
      "Perceber diálogos em textos narrativos, observando o efeito de sentido de verbos de enunciação e, se for o caso, o uso de variedades linguísticas no discurso direto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15LP18",
    description: "Relacionar texto com ilustrações e outros recursos gráficos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP26",
    description:
      "Identificar elementos de uma narrativa lida ou escutada, incluindo personagens, enredo, tempo e espaço.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP28",
    description:
      "Reconhecer o conflito gerador de uma narrativa ficcional e sua resolução, além de palavras, expressões e frases que caracterizam personagens e ambientes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP29",
    description:
      "Identificar, em narrativas, cenário, personagem central, conflito gerador, resolução e o ponto de vista com base no qual histórias são narradas, diferenciando narrativas em primeira e terceira pessoas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12LP19",
    description:
      "Reconhecer, em textos versificados, rimas, sonoridades, jogos de palavras, palavras, expressões, comparações, relacionando-as com sensações e associações.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP29",
    description:
      "Observar, em poemas visuais, o formato do texto na página, as ilustrações e outros efeitos visuais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP20",
    description:
      "Reconhecer a função de textos utilizados para apresentar informações coletadas em atividades de pesquisa (enquetes, pequenas entrevistas, registros de experimentações).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP20",
    description:
      "Reconhecer a função de gráficos, diagramas e tabelas em textos, como forma de apresentação de dados e informações.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP23",
    description: "Comparar informações apresentadas em gráficos ou tabelas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15LP16",
    description:
      "Ler e compreender, em colaboração com os colegas e com a ajuda do professor e, mais tarde, de maneira autônoma, textos narrativos de maior porte como contos (populares, de fadas, acumulativos, de assombração etc.) e crônicas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15LP14",
    description:
      "Construir o sentido de histórias em quadrinhos e tirinhas, relacionando imagens e palavras e interpretando recursos gráficos (tipos de balões, de letras, onomatopeias).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LP03",
    description:
      "Analisar diferenças de sentido entre palavras de uma série sinonímica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LP03",
    description:
      "Formar, com base em palavras primitivas, palavras derivadas com os prefixos e sufixos mais produtivos no português.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LP05",
    description:
      "Analisar processos de formação de palavras por composição (aglutinação e justaposição), apropriando-se de regras básicas de uso do hífen em palavras compostas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP34",
    description:
      "Formar antônimos com acréscimo de prefixos que expressam noção de negação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP35",
    description:
      "Distinguir palavras derivadas por acréscimo de afixos e palavras compostas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP43",
    description:
      "Identificar e utilizar os modos de introdução de outras vozes no texto – citação literal e sua formatação e paráfrase –, as pistas linguísticas responsáveis por introduzir no texto a posição do autor e dos outros autores citados (“Segundo X; De acordo com Y; De minha/nossa parte, penso/amos que”...) e os elementos de normatização (tais como as regras de inclusão e formatação de citações e paráfrases, de organização de referências bibliográficas) em textos científicos, desenvolvendo reflexão sobre o modo como a intertextualidade e a retextualização ocorrem nesses textos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LP14",
    description:
      "Identificar, em textos, os efeitos de sentido do uso de estratégias de modalização e argumentatividade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LP16",
    description:
      "Explicar os efeitos de sentido do uso, em textos, de estratégias de modalização e argumentatividade (sinais de pontuação, adjetivos, substantivos, expressões de grau, verbos e perífrases verbais, advérbios etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP28",
    description:
      "Observar os mecanismos de modalização adequados aos textos jurídicos, as modalidades deônticas, que se referem ao eixo da conduta (obrigatoriedade/permissibilidade) como, por exemplo: Proibição: “Não se deve fumar em recintos fechados.”; Obrigatoriedade: “A vida tem que valer a pena.”; Possibilidade: “É permitido a entrada de menores acompanhados de adultos responsáveis”, e os mecanismos de modalização adequados aos textos políticos e propositivos, as modalidades apreciativas, em que o locutor exprime um juízo de valor (positivo ou negativo) acerca do que enuncia. Por exemplo: “Que belo discurso!”, “Discordo das escolhas de Antônio.” “Felizmente, o buraco ainda não causou acidentes mais graves.”",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP16",
    description:
      "Analisar a modalização realizada em textos noticiosos e argumentativos, por meio das modalidades apreciativas, viabilizadas por classes e estruturas gramaticais como adjetivos, locuções adjetivas, advérbios, locuções adverbiais, orações adjetivas e adverbiais, orações relativas restritivas e explicativas etc., de maneira a perceber a apreciação ideológica sobre os fatos noticiados ou as posições implícitas ou assumidas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP31",
    description:
      "Analisar e utilizar modalização epistêmica, isto é, modos de indicar uma avaliação sobre o valor de verdade e as condições de verdade de uma proposição, tais como os asseverativos – quando se concorda com (“realmente, evidentemente, naturalmente, efetivamente, claro, certo, lógico, sem dúvida” etc.) ou discorda de (“de jeito nenhum, de forma alguma”) uma ideia; e os quase-asseverativos, que indicam que se considera o conteúdo como quase certo (“talvez, assim, possivelmente, provavelmente, eventualmente”).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP11",
    description:
      "Formar o aumentativo e o diminutivo de palavras com os sufixos -ão e -inho/-zinho.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP08",
    description:
      "Identificar e diferenciar, em textos, substantivos e verbos e suas funções na oração: agente, ação, objeto da ação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP10",
    description:
      "Reconhecer prefixos e sufixos produtivos na formação de palavras derivadas de substantivos, de adjetivos e de verbos, utilizando-os para compreender palavras e para formar novas palavras.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP08",
    description:
      "Reconhecer e grafar, corretamente, palavras derivadas com os sufixos -agem, -oso, -eza, -izar/-isar (regulares morfológicas).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP05",
    description:
      "Identificar a expressão de presente, passado e futuro em tempos verbais do modo indicativo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP06",
    description:
      "Flexionar, adequadamente, na escrita e na oralidade, os verbos em concordância com pronomes pessoais/nomes sujeitos da oração.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP07",
    description:
      "Identificar, em textos, o uso de conjunções e a relação que estabelecem entre partes do texto: adição, oposição, tempo, causa, condição, finalidade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP08",
    description:
      "Diferenciar palavras primitivas, derivadas e compostas, e derivadas por adição de prefixo e de sufixo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP14",
    description:
      "Identificar em textos e usar na produção textual pronomes pessoais, possessivos e demonstrativos, como recurso coesivo anafórico.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP06",
    description:
      "Identificar em textos e usar na produção textual a concordância entre substantivo ou pronome pessoal e verbo (concordância verbal).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP09",
    description:
      "Identificar, em textos, adjetivos e sua função de atribuição de propriedades aos substantivos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP07",
    description:
      "Identificar em textos e usar na produção textual a concordância entre artigo, substantivo e adjetivo (concordância no grupo nominal).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LP04",
    description:
      "Analisar a função e as flexões de substantivos e adjetivos e de verbos nos modos Indicativo, Subjuntivo e Imperativo: afirmativo e negativo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LP05",
    description:
      "Identificar os efeitos de sentido dos modos verbais, considerando o gênero textual e a intenção comunicativa.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LP06",
    description:
      "Empregar, adequadamente, as regras de concordância nominal (relações entre os substantivos e seus determinantes) e as regras de concordância verbal (relações entre o verbo e o sujeito simples e composto).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LP07",
    description:
      "Identificar, em textos, períodos compostos por orações separadas por vírgula sem a utilização de conectivos, nomeando-os como períodos compostos por coordenação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LP08",
    description:
      "Identificar, em texto ou sequência textual, orações como unidades constituídas em torno de um núcleo verbal e períodos como conjunto de orações conectadas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LP09",
    description:
      "Classificar, em texto ou sequência textual, os períodos simples compostos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LP04",
    description: "Reconhecer, em textos, o verbo como o núcleo das orações.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LP05",
    description:
      "Identificar, em orações de textos lidos ou de produção própria, verbos de predicação completa e incompleta: intransitivos e transitivos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LP06",
    description:
      "Empregar as regras básicas de concordância nominal e verbal em situações comunicativas e na produção de textos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LP07",
    description:
      "Identificar, em textos lidos ou de produção própria, a estrutura básica da oração: sujeito, predicado, complemento (objetos direto e indireto).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LP08",
    description:
      "Identificar, em textos lidos ou de produção própria, adjetivos que ampliam o sentido do substantivo sujeito ou complemento verbal.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LP09",
    description:
      "Identificar, em textos lidos ou de produção própria, advérbios e locuções adverbiais que ampliam o sentido do verbo núcleo da oração.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LP10",
    description:
      "Utilizar, ao produzir texto, conhecimentos linguísticos e gramaticais: modos e tempos verbais, concordância nominal e verbal, pontuação etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LP11",
    description:
      "Identificar, em textos lidos ou de produção própria, períodos compostos nos quais duas orações são conectadas por vírgula, ou por conjunções que expressem soma de sentido (conjunção “e”) ou oposição de sentidos (conjunções “mas”, “porém”).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LP06",
    description:
      "Identificar, em textos lidos ou de produção própria, os termos constitutivos da oração (sujeito e seus modificadores, verbo e seus complementos e modificadores).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LP07",
    description:
      "Diferenciar, em textos lidos ou de produção própria, complementos diretos e indiretos de verbos transitivos, apropriando-se da regência de verbos de uso frequente.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LP08",
    description:
      "Identificar, em textos lidos ou de produção própria, verbos na voz ativa e na voz passiva, interpretando os efeitos de sentido de sujeito ativo e passivo (agente da passiva).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LP09",
    description:
      "Interpretar efeitos de sentido de modificadores (adjuntos adnominais – artigos definido ou indefinido, adjetivos, expressões adjetivas) em substantivos com função de sujeito ou de complemento verbal, usando-os para enriquecer seus próprios textos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LP10",
    description:
      "Interpretar, em textos lidos ou de produção própria, efeitos de sentido de modificadores do verbo (adjuntos adverbiais – advérbios e expressões adverbiais), usando-os para enriquecer seus próprios textos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LP11",
    description:
      "Identificar, em textos lidos ou de produção própria, agrupamento de orações em períodos, diferenciando coordenação de subordinação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LP12",
    description:
      "Identificar, em textos lidos, orações subordinadas com conjunções de uso frequente, incorporando-as às suas próprias produções.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LP13",
    description:
      "Inferir efeitos de sentido decorrentes do uso de recursos de coesão sequencial: conjunções e articuladores textuais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LP05",
    description:
      "Identificar, em textos lidos e em produções próprias, orações com a estrutura sujeito-verbo de ligação-predicativo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LP06",
    description:
      "Diferenciar, em textos lidos e em produções próprias, o efeito de sentido do uso dos verbos de ligação “ser”, “estar”, “ficar”, “parecer” e “permanecer”.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LP07",
    description:
      "Comparar o uso de regência verbal e regência nominal na norma-padrão com seu uso no português brasileiro coloquial oral.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LP08",
    description:
      "Identificar, em textos lidos e em produções próprias, a relação que conjunções (e locuções conjuntivas) coordenativas e subordinativas estabelecem entre as orações que conectam.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP23",
    description:
      "Analisar, em textos argumentativos, reivindicatórios e propositivos, os movimentos argumentativos utilizados (sustentação, refutação e negociação), avaliando a força dos argumentos utilizados.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15LP09",
    description:
      "Expressar-se em situações de intercâmbio oral com clareza, preocupando-se em ser compreendido pelo interlocutor e usando a palavra com tom de voz audível, boa articulação e ritmo adequado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP13",
    description:
      "Engajar-se e contribuir com a busca de conclusões comuns relativas a problemas, temas ou questões polêmicas de interesse da turma e/ou de relevância social.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP14",
    description:
      "Formular perguntas e decompor, com a ajuda dos colegas e dos professores, tema/questão polêmica, explicações e ou argumentos relativos ao objeto de discussão para análise mais minuciosa e buscar em fontes diversas informações ou dados que permitam analisar partes da questão e compartilhá-los com a turma.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP15",
    description:
      "Apresentar argumentos e contra-argumentos coerentes, respeitando os turnos de fala, na participação em discussões sobre temas controversos e/ou polêmicos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP27",
    description:
      "Recitar cordel e cantar repentes e emboladas, observando as rimas e obedecendo ao ritmo e à melodia.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP25",
    description:
      "Planejar e produzir, com certa autonomia, verbetes de dicionário, digitais ou impressos, considerando a situação comunicativa e o tema/assunto/finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP21",
    description:
      "Explorar, com a mediação do professor, textos informativos de diferentes ambientes digitais de pesquisa, conhecendo suas possibilidades.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP17",
    description:
      "Buscar e selecionar, com o apoio do professor, informações de interesse sobre fenômenos sociais e naturais, em textos que circulam em meios impressos ou digitais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15LP05",
    description:
      "Planejar, com a ajuda do professor, o texto que será produzido, considerando a situação comunicativa, os interlocutores (quem escreve/para quem escreve); a finalidade ou o propósito (escrever para quê); a circulação (onde o texto vai circular); o suporte (qual é o portador do texto); a linguagem, organização e forma do texto e seu tema, pesquisando em meios impressos ou digitais, sempre que for preciso, informações necessárias à produção do texto, organizando em tópicos os dados e as fontes pesquisadas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP23",
    description:
      "Planejar e produzir, em colaboração com os colegas e com a ajuda do professor, entrevistas, curiosidades, dentre outros gêneros do campo investigativo, que possam ser repassados oralmente por meio de ferramentas digitais, em áudio ou vídeo, considerando a situação comunicativa e o tema/assunto/finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP24",
    description:
      "Planejar e produzir, em colaboração com os colegas e com a ajuda do professor, relatos de experimentos, registros de observação, entrevistas, dentre outros gêneros do campo investigativo, que possam ser repassados oralmente por meio de ferramentas digitais, em áudio ou vídeo, considerando a situação comunicativa e o tema/assunto/ finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP20",
    description:
      "Expor trabalhos ou pesquisas escolares, em sala de aula, com apoio de recursos multissemióticos (imagens, diagrama, tabelas etc.), orientando-se por roteiro escrito, planejando o tempo de fala e adequando a linguagem à situação comunicativa.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP09",
    description:
      "Organizar o texto em unidades de sentido, dividindo-o em parágrafos segundo as normas gráficas e de acordo com as características do gênero textual.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP09",
    description:
      "Planejar uma campanha publicitária sobre questões/problemas, temas, causas significativas para a escola e/ou comunidade, a partir de um levantamento de material sobre o tema ou evento, da definição do público-alvo, do texto ou peça a ser produzido – cartaz, banner, folheto, panfleto, anúncio impresso e para internet, spot, propaganda de rádio, TV etc. –, da ferramenta de edição de texto, áudio ou vídeo que será utilizada, do recorte e enfoque a ser dado, das estratégias de persuasão que serão utilizadas etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP14",
    description:
      "Definir o contexto de produção da entrevista (objetivos, o que se pretende conseguir, porque aquele entrevistado etc.), levantar informações sobre o entrevistado e sobre o acontecimento ou tema em questão, preparar o roteiro de perguntar e realizar entrevista oral com envolvidos ou especialistas relacionados com o fato noticiado ou com o tema em pauta, usando roteiro previamente elaborado e formulando outras perguntas a partir das respostas dadas e, quando for o caso, selecionar partes, transcrever e proceder a uma edição escrita do texto, adequando-o a seu contexto de publicação, à construção composicional do gênero e garantindo a relevância das informações mantidas e a continuidade temática.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP22",
    description:
      "Planejar e produzir, em colaboração com os colegas, telejornal para público infantil com algumas notícias e textos de campanhas que possam ser repassados oralmente ou em meio digital, em áudio ou vídeo, considerando a situação comunicativa, a organização específica da fala nesses gêneros e o tema/assunto/ finalidade dos textos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP17",
    description:
      "Produzir jornais radiofônicos ou televisivos e entrevistas veiculadas em rádio, TV e na internet, orientando-se por roteiro ou texto e demonstrando conhecimento dos gêneros jornal falado/televisivo e entrevista.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP18",
    description:
      "Roteirizar, produzir e editar vídeo para vlogs argumentativos sobre produtos de mídia para público infantil (filmes, desenhos animados, HQs, games etc.), com base em conhecimentos sobre os mesmos, de acordo com as convenções do gênero e considerando a situação comunicativa e o tema/ assunto/finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP12",
    description:
      "Desenvolver estratégias de planejamento, elaboração, revisão, edição, reescrita/ redesign (esses três últimos quando não for situação ao vivo) e avaliação de textos orais, áudio e/ou vídeo, considerando sua adequação aos contextos em que foram produzidos, à forma composicional e estilo de gêneros, a clareza, progressão temática e variedade linguística empregada, os elementos relacionados à fala, tais como modulação de voz, entonação, ritmo, altura e intensidade, respiração etc., os elementos cinésicos, tais como postura corporal, movimentos e gestualidade significativa, expressão facial, contato de olho com plateia etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP14",
    description:
      "Identificar outros sinais no texto além das letras, como pontos finais, de interrogação e exclamação e seus efeitos na entonação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP09",
    description:
      "Usar adequadamente ponto final, ponto de interrogação e ponto de exclamação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP07",
    description:
      "Identificar a função na leitura e usar na escrita ponto final, ponto de interrogação, ponto de exclamação e, em diálogos (discurso direto), dois-pontos e travessão.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP05",
    description:
      "Identificar a função na leitura e usar, adequadamente, na escrita ponto final, de interrogação, de exclamação, dois-pontos e travessão em diálogos (discurso direto), vírgula em enumerações e em separação de vocativo e de aposto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP04",
    description:
      "Diferenciar, na leitura de textos, vírgula, ponto e vírgula, dois-pontos e reconhecer, na leitura de textos, o efeito de sentido que decorre do uso de reticências, aspas, parênteses.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP24",
    description:
      "Tomar nota de aulas, apresentações orais, entrevistas (ao vivo, áudio, TV, vídeo), identificando e hierarquizando as informações principais, tendo em vista apoiar o estudo e a produção de sínteses e reflexões pessoais ou outros objetivos em questão.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP28",
    description:
      "Tomar nota de videoaulas, aulas digitais, apresentações multimídias, vídeos de divulgação científica, documentários e afins, identificando, em função dos objetivos, informações principais para apoio ao estudo e realizando, quando necessário, uma síntese final que destaque e reorganize os pontos ou conceitos centrais e suas relações e que, em alguns casos, seja acompanhada de reflexões pessoais, que podem conter dúvidas, questionamentos, considerações etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP19",
    description:
      "Argumentar oralmente sobre acontecimentos de interesse social, com base em conhecimentos sobre fatos divulgados em TV, rádio, mídia impressa e digital, respeitando pontos de vista diferentes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP19",
    description:
      "Recitar parlendas, quadras, quadrinhas, trava-línguas, com entonação adequada e observando as rimas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP15",
    description: "Cantar cantigas e canções, obedecendo ao ritmo e à melodia.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP19",
    description:
      "Planejar e produzir, em colaboração com os colegas e com a ajuda do professor, notícias curtas para público infantil, para compor jornal falado que possa ser repassado oralmente ou em meio digital, em áudio ou vídeo, dentre outros gêneros do campo jornalístico, considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP15",
    description:
      "Assistir, em vídeo digital, a programa de culinária infantil e, a partir dele, planejar e produzir receitas em áudio ou vídeo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP12",
    description:
      "Assistir, em vídeo digital, a programa infantil com instruções de montagem, de jogos e brincadeiras e, a partir dele, planejar e produzir tutoriais em áudio ou vídeo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP13",
    description:
      "Assistir, em vídeo digital, a postagem de vlog infantil de críticas de brinquedos e livros de literatura infantil e, a partir dele, planejar e produzir resenhas digitais em áudio ou vídeo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12LP06",
    description:
      "Planejar e produzir, em colaboração com os colegas e com a ajuda do professor, recados, avisos, convites, receitas, instruções de montagem, dentre outros gêneros do campo da vida cotidiana, que possam ser repassados oralmente por meio de ferramentas digitais, em áudio ou vídeo, considerando a situação comunicativa e o tema/assunto/finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12LP13",
    description:
      "Planejar, em colaboração com os colegas e com a ajuda do professor, slogans e peça de campanha de conscientização destinada ao público infantil que possam ser repassados oralmente por meio de ferramentas digitais, em áudio ou vídeo, considerando a situação comunicativa e o tema/assunto/finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP22",
    description:
      "Planejar e produzir, em colaboração com os colegas e com a ajuda do professor, diagramas, entrevistas, curiosidades, dentre outros gêneros do campo investigativo, digitais ou impressos, considerando a situação comunicativa e o tema/assunto/finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP22",
    description:
      "Planejar e produzir, em colaboração com os colegas e com a ajuda do professor, pequenos relatos de experimentos, entrevistas, verbetes de enciclopédia infantil, dentre outros gêneros do campo investigativo, digitais ou impressos, considerando a situação comunicativa e o tema/assunto/finalidade do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP25",
    description:
      "Planejar e produzir textos para apresentar resultados de observações e de pesquisas em fontes de informações, incluindo, quando pertinente, imagens, diagramas e gráficos ou tabelas simples, considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04LP21",
    description:
      "Planejar e produzir textos sobre temas de interesse, com base em resultados de observações e pesquisas em fontes de informações impressas ou eletrônicas, incluindo, quando pertinente, imagens e gráficos ou tabelas simples, considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05LP24",
    description:
      "Planejar e produzir texto sobre tema de interesse, organizando resultados de pesquisa em fontes de informação impressas ou digitais, incluindo imagens e gráficos ou tabelas, considerando a situação comunicativa e o tema/assunto do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP10",
    description:
      "Produzir notícias para rádios, TV ou vídeos, podcasts noticiosos e de opinião, entrevistas, comentários, vlogs, jornais radiofônicos e televisivos, dentre outros possíveis, relativos a fato e temas de interesse pessoal, local ou global e textos orais de apreciação e opinião – podcasts e vlogs noticiosos, culturais e de opinião, orientando-se por roteiro ou texto, considerando o contexto de produção e demonstrando domínio dos gêneros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP11",
    description:
      "Identificar e analisar posicionamentos defendidos e refutados na escuta de interações polêmicas em entrevistas, discussões e debates (televisivo, em sala de aula, em redes sociais etc.), entre outros, e se posicionar frente a eles.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP52",
    description:
      "Representar cenas ou textos dramáticos, considerando, na caracterização dos personagens, os aspectos linguísticos e paralinguísticos das falas (timbre e tom de voz, pausas e hesitações, entonação e expressividade, variedades e registros linguísticos), os gestos e os deslocamentos no espaço cênico, o figurino e a maquiagem e elaborando as rubricas indicadas pelo autor por meio do cenário, da trilha sonora e da exploração dos modos de interpretação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP53",
    description:
      "Ler em voz alta textos literários diversos – como contos de amor, de humor, de suspense, de terror; crônicas líricas, humorísticas, críticas; bem como leituras orais capituladas (compartilhadas ou não com o professor) de livros de maior extensão, como romances, narrativas de enigma, narrativas de aventura, literatura infantojuvenil, – contar/recontar histórias tanto da tradição oral (causos, contos de esperteza, contos de animais, contos de amor, contos de encantamento, piadas, dentre outros) quanto da tradição literária escrita, expressando a compreensão e interpretação do texto por meio de uma leitura ou fala expressiva e fluente, que respeite o ritmo, as pausas, as hesitações, a entonação indicados tanto pela pontuação quanto por outros recursos gráfico-editoriais, como negritos, itálicos, caixa-alta, ilustrações etc., gravando essa leitura ou esse conto/reconto, seja para análise posterior, seja para produção de audiobooks de textos literários diversos ou de podcasts de leituras dramáticas com ou sem efeitos especiais e ler e/ou declamar poemas diversos, tanto de forma livre quanto de forma fixa (como quadras, sonetos, liras, haicais etc.), empregando os recursos linguísticos, paralinguísticos e cinésicos necessários aos efeitos de sentido pretendidos, como o ritmo e a entonação, o emprego de pausas e prolongamentos, o tom e o timbre vocais, bem como eventuais recursos de gestualidade e pantomima que convenham ao gênero poético e à situação de compartilhamento em questão.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP13",
    description:
      "Produzir, revisar e editar textos publicitários, levando em conta o contexto de produção dado, explorando recursos multissemióticos, relacionando elementos verbais e visuais, utilizando adequadamente estratégias discursivas de persuasão e/ou convencimento e criando título ou slogan que façam o leitor motivar-se a interagir com o texto produzido e se sinta atraído pelo serviço, ideia ou produto em questão.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP01",
    description:
      "Reconhecer que textos são lidos e escritos da esquerda para a direita e de cima para baixo da página.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP34",
    description:
      "Analisar a organização de texto dramático apresentado em teatro, televisão, cinema, identificando e percebendo os sentidos decorrentes dos recursos linguísticos e semióticos que sustentam sua realização como peça teatral, novela, filme etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP47",
    description:
      "Analisar, em textos narrativos ficcionais, as diferentes formas de composição próprias de cada gênero, os recursos coesivos que constroem a passagem do tempo e articulam suas partes, a escolha lexical típica de cada gênero para a caracterização dos cenários e dos personagens e os efeitos de sentido decorrentes dos tempos verbais, dos tipos de discurso, dos verbos de enunciação e das variedades linguísticas (no discurso direto, se houver) empregados, identificando o enredo e o foco narrativo e percebendo como se estrutura a narrativa nos diferentes gêneros e os efeitos de sentido decorrentes do foco narrativo típico de cada gênero, da caracterização dos espaços físico e psicológico e dos tempos cronológico e psicológico, das diferentes vozes no texto (do narrador, de personagens em discurso direto e indireto), do uso de pontuação expressiva, palavras e expressões conotativas e processos figurativos e do uso de recursos linguístico-gramaticais próprios a cada gênero narrativo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP48",
    description:
      "Interpretar, em poemas, efeitos produzidos pelo uso de recursos expressivos sonoros (estrofação, rimas, aliterações etc), semânticos (figuras de linguagem, por exemplo), gráfico- espacial (distribuição da mancha gráfica no papel), imagens e sua relação com o texto verbal.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP29",
    description:
      "Identificar, em texto dramático, personagem, ato, cena, fala e indicações cênicas e a organização do texto: enredo, conflitos, ideias principais, pontos de vista, universos de referência.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP20",
    description:
      "Identificar, tendo em vista o contexto de produção, a forma de organização dos textos normativos e legais, a lógica de hierarquização de seus itens e subitens e suas partes: parte inicial (título – nome e data – e ementa), blocos de artigos (parte, livro, capítulo, seção, subseção), artigos (caput e parágrafos e incisos) e parte final (disposições pertinentes à sua implementação) e analisar efeitos de sentido causados pelo uso de vocabulário técnico, pelo uso do imperativo, de palavras e expressões que indicam circunstâncias, como advérbios e locuções adverbiais, de palavras que indicam generalidade, como alguns pronomes indefinidos, de forma a poder compreender o caráter imperativo, coercitivo e generalista das leis e de outras formas de regulamentação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15LP01",
    description:
      "Identificar a função social de textos que circulam em campos da vida social dos quais participa cotidianamente (a casa, a rua, a comunidade, a escola) e nas mídias impressa, de massa e digital, reconhecendo para que foram produzidos, onde circulam, quem os produziu e a quem se destinam.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP29",
    description:
      "Refletir sobre a relação entre os contextos de produção dos gêneros de divulgação científica – texto didático, artigo de divulgação científica, reportagem de divulgação científica, verbete de enciclopédia (impressa e digital), esquema, infográfico (estático e animado), relatório, relato multimidiático de campo, podcasts e vídeos variados de divulgação científica etc. – e os aspectos relativos à construção composicional e às marcas linguística características desses gêneros, de forma a ampliar suas possibilidades de compreensão (e produção) de textos pertencentes a esses gêneros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP44",
    description:
      "Inferir a presença de valores sociais, culturais e humanos e de diferentes visões de mundo, em textos literários, reconhecendo nesses textos formas de estabelecer múltiplos olhares sobre as identidades, sociedades e culturas e considerando a autoria e o contexto social e histórico de sua produção.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP45",
    description:
      "Posicionar-se criticamente em relação a textos pertencentes a gêneros como quarta-capa, programa (de teatro, dança, exposição etc.), sinopse, resenha crítica, comentário em blog/vlog cultural etc., para selecionar obras literárias e outras manifestações artísticas (cinema, teatro, exposições, espetáculos, CD´s, DVD´s etc.), diferenciando as sequências descritivas e avaliativas e reconhecendo-os como gêneros que apoiam a escolha do livro ou produção cultural e consultando-os no momento de fazer escolhas, quando for o caso.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP46",
    description:
      "Participar de práticas de compartilhamento de leitura/recepção de obras literárias/ manifestações artísticas, como rodas de leitura, clubes de leitura, eventos de contação de histórias, de leituras dramáticas, de apresentações teatrais, musicais e de filmes, cineclubes, festivais de vídeo, saraus, slams, canais de booktubers, redes sociais temáticas (de leitores, de cinéfilos, de música etc.), dentre outros, tecendo, quando possível, comentários de ordem estética e afetiva",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP17",
    description:
      "Relacionar textos e documentos legais e normativos de importância universal, nacional ou local que envolvam direitos, em especial, de crianças, adolescentes e jovens – tais como a Declaração dos Direitos Humanos, a Constituição Brasileira, o ECA -, e a regulamentação da organização escolar – por exemplo, regimento escolar -, a seus contextos de produção, reconhecendo e analisando possíveis motivações, finalidades e sua vinculação com experiências humanas e fatos históricos e sociais, como forma de ampliar a compreensão dos direitos e deveres, de fomentar os princípios democráticos e uma atuação pautada pela ética da responsabilidade (o outro tem direito a uma vida digna tanto quanto eu tenho).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LP01",
    description:
      "Reconhecer a impossibilidade de uma neutralidade absoluta no relato de fatos e identificar diferentes graus de parcialidade/ imparcialidade dados pelo recorte feito e pelos efeitos de sentido advindos de escolhas feitas pelo autor, de forma a poder desenvolver uma atitude crítica frente aos textos jornalísticos e tornar-se consciente das escolhas feitas enquanto produtor de textos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LP02",
    description:
      "Estabelecer relação entre os diferentes gêneros jornalísticos, compreendendo a centralidade da notícia.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LP01",
    description:
      "Distinguir diferentes propostas editoriais – sensacionalismo, jornalismo investigativo etc. –, de forma a identificar os recursos utilizados para impactar/chocar o leitor que podem comprometer uma análise crítica da notícia e do fato noticiado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LP02",
    description:
      "Comparar notícias e reportagens sobre um mesmo fato divulgadas em diferentes mídias, analisando as especificidades das mídias, os processos de (re)elaboração dos textos e a convergência das mídias em notícias ou reportagens multissemióticas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LP01",
    description:
      "Identificar e comparar as várias editorias de jornais impressos e digitais e de sites noticiosos, de forma a refletir sobre os tipos de fato que são noticiados e comentados, as escolhas sobre o que noticiar e o que não noticiar e o destaque/enfoque dado e a fidedignidade da informação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LP01",
    description:
      "Analisar o fenômeno da disseminação de notícias falsas nas redes sociais e desenvolver estratégias para reconhecê-las, a partir da verificação/avaliação do veículo, fonte, data e local da publicação, autoria, URL, da análise da formatação, da comparação de diferentes fontes, da consulta a sites de curadoria que atestam a fidedignidade do relato dos fatos e denunciam boatos etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP01",
    description:
      "Analisar a estrutura e funcionamento dos hiperlinks em textos noticiosos publicados na Web e vislumbrar possibilidades de uma escrita hipertextual.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP01",
    description:
      "Analisar os interesses que movem o campo jornalístico, os efeitos das novas tecnologias no campo e as condições que fazem da informação uma mercadoria, de forma a poder desenvolver uma atitude crítica frente aos textos jornalísticos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP02",
    description:
      "Analisar diferentes práticas (curtir, compartilhar, comentar, curar etc.) e textos pertencentes a diferentes gêneros da cultura digital (meme, gif, comentário, charge digital etc.) envolvidos no trato com a informação e opinião, de forma a possibilitar uma presença mais crítica e ética nas redes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP54",
    description:
      "Analisar os efeitos de sentido decorrentes da interação entre os elementos linguísticos e os recursos paralinguísticos e cinésicos, como as variações no ritmo, as modulações no tom de voz, as pausas, as manipulações do estrato sonoro da linguagem, obtidos por meio da estrofação, das rimas e de figuras de linguagem como as aliterações, as assonâncias, as onomatopeias, dentre outras, a postura corporal e a gestualidade, na declamação de poemas, apresentações musicais e teatrais, tanto em gêneros em prosa quanto nos gêneros poéticos, os efeitos de sentido decorrentes do emprego de figuras de linguagem, tais como comparação, metáfora, personificação, metonímia, hipérbole, eufemismo, ironia, paradoxo e antítese e os efeitos de sentido decorrentes do emprego de palavras e expressões denotativas e conotativas (adjetivos, locuções adjetivas, orações subordinadas adjetivas etc.), que funcionam como modificadores, percebendo sua função na caracterização dos espaços, tempos, personagens e ações próprios de cada gênero narrativo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP26",
    description:
      "Tomar nota em discussões, debates, palestras, apresentação de propostas, reuniões, como forma de documentar o evento e apoiar a própria fala (que pode se dar no momento do evento ou posteriormente, quando, por exemplo, for necessária a retomada dos assuntos tratados em outros contextos públicos, como diante dos representados).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP06",
    description:
      "Produzir e publicar notícias, fotodenúncias, fotorreportagens, reportagens, reportagens multimidiáticas, infográficos, podcasts noticiosos, entrevistas, cartas de leitor, comentários, artigos de opinião de interesse local ou global, textos de apresentação e apreciação de produção cultural – resenhas e outros próprios das formas de expressão das culturas juvenis, tais como vlogs e podcasts culturais, gameplay, detonado etc.– e cartazes, anúncios, propagandas, spots, jingles de campanhas sociais, dentre outros em várias mídias, vivenciando de forma significativa o papel de repórter, de comentador, de analista, de crítico, de editor ou articulista, de booktuber, de vlogger (vlogueiro) etc., como forma de compreender as condições de produção que envolvem a circulação desses textos e poder participar e vislumbrar possibilidades de participação nas práticas de linguagem do campo jornalístico e do campo midiático de forma ética e responsável, levando-se em consideração o contexto da Web 2.0, que amplia a possibilidade de circulação desses textos e “funde” os papéis de leitor e autor, de consumidor e produtor.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP17",
    description:
      "Analisar, a partir do contexto de produção, a forma de organização das cartas de solicitação e de reclamação (datação, forma de início, apresentação contextualizada do pedido ou da reclamação, em geral, acompanhada de explicações, argumentos e/ou relatos do problema, fórmula de finalização mais ou menos cordata, dependendo do tipo de carta e subscrição) e algumas das marcas linguísticas relacionadas à argumentação, explicação ou relato de fatos, como forma de possibilitar a escrita fundamentada de cartas como essas ou de postagens em canais próprios de reclamações e solicitações em situações que envolvam questões relativas à escola, à comunidade ou a algum dos seus membros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP19",
    description:
      "Analisar, a partir do contexto de produção, a forma de organização das cartas abertas, abaixo-assinados e petições on-line (identificação dos signatários, explicitação da reivindicação feita, acompanhada ou não de uma breve apresentação da problemática e/ou de justificativas que visam sustentar a reivindicação) e a proposição, discussão e aprovação de propostas políticas ou de soluções para problemas de interesse público, apresentadas ou lidas nos canais digitais de participação, identificando suas marcas linguísticas, como forma de possibilitar a escrita ou subscrição consciente de abaixo-assinados e textos dessa natureza e poder se posicionar de forma crítica e fundamentada frente às propostas",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LP02",
    description:
      "Justificar diferenças ou semelhanças no tratamento dado a uma mesma informação veiculada em textos diferentes, consultando sites e serviços de checadores de fatos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LP02",
    description:
      "Analisar e comentar a cobertura da imprensa sobre fatos de relevância social, comparando diferentes enfoques por meio do uso de ferramentas de curadoria.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP03",
    description:
      "Comparar informações sobre um mesmo fato divulgadas em diferentes veículos e mídias, analisando e avaliando a confiabilidade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP27",
    description:
      "Analisar, entre os textos literários e entre estes e outras manifestações artísticas (como cinema, teatro, música, artes visuais e midiáticas), referências explícitas ou implícitas a outros textos, quanto aos temas, personagens e recursos literários e semióticos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP30",
    description:
      "Comparar, com a ajuda do professor, conteúdos, dados e informações de diferentes fontes, levando em conta seus contextos de produção e referências, identificando coincidências, complementaridades e contradições, de forma a poder identificar erros/imprecisões conceituais, compreender e posicionar-se criticamente sobre os conteúdos e informações em questão.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP50",
    description:
      "Elaborar texto teatral, a partir da adaptação de romances, contos, mitos, narrativas de enigma e de aventura, novelas, biografias romanceadas, crônicas, dentre outros, indicando as rubricas para caracterização do cenário, do espaço, do tempo; explicitando a caracterização física e psicológica dos personagens e dos seus modos de ação; reconfigurando a inserção do discurso direto e dos tipos de narrador; explicitando as marcas de variação linguística (dialetos, registros e jargões) e retextualizando o tratamento da temática.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP32",
    description:
      "Analisar os efeitos de sentido decorrentes do uso de mecanismos de intertextualidade (referências, alusões, retomadas) entre os textos literários, entre esses textos literários e outras manifestações artísticas (cinema, teatro, artes visuais e midiáticas, música), quanto aos temas, personagens, estilos, autores etc., e entre o texto original e paródias, paráfrases, pastiches, trailer honesto, vídeos-minuto, vidding, dentre outros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP36",
    description:
      "Parodiar poemas conhecidos da literatura e criar textos em versos (como poemas concretos, ciberpoemas, haicais, liras, microrroteiros, lambe-lambes e outros tipos de poemas), explorando o uso de recursos sonoros e semânticos (como figuras de linguagem e jogos de palavras) e visuais (como relações entre imagem e texto verbal e distribuição da mancha gráfica), de forma a propiciar diferentes efeitos de sentido.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15LP13",
    description:
      "Identificar finalidades da interação oral em diferentes contextos comunicativos (solicitar informações, apresentar opiniões, informar, relatar experiências etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15LP06",
    description:
      "Reler e revisar o texto produzido com a ajuda do professor e a colaboração dos colegas, para corrigi-lo e aprimorá-lo, fazendo cortes, acréscimos, reformulações, correções de ortografia e pontuação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP08",
    description:
      "Revisar/editar o texto produzido – notícia, reportagem, resenha, artigo de opinião, dentre outros –, tendo em vista sua adequação ao contexto de produção, a mídia em questão, características do gênero, aspectos relativos à textualidade, a relação entre as diferentes semioses, a formatação e uso adequado das ferramentas de edição (de texto, foto, áudio e vídeo, dependendo do caso) e adequação à norma culta.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP12",
    description:
      "Reconhecer a separação das palavras, na escrita, por espaços em branco.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP08",
    description:
      "Segmentar corretamente as palavras ao escrever frases e textos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03LP05",
    description:
      "Identificar o número de sílabas de palavras, classificando-as em monossílabas, dissílabas, trissílabas e polissílabas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LP14",
    description:
      "Utilizar, ao produzir texto, recursos de coesão sequencial (articuladores) e referencial (léxica e pronominal), construções passivas e impessoais, discurso direto e indireto e outros recursos expressivos adequados ao gênero textual.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LP12",
    description:
      "Utilizar, ao produzir texto, recursos de coesão referencial (nome e pronomes), recursos semânticos de sinonímia, antonímia e homonímia e mecanismos de representação de diferentes vozes (discurso direto e indireto).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LP12",
    description:
      "Reconhecer recursos de coesão referencial: substituições lexicais (de substantivos por sinônimos) ou pronominais (uso de pronomes anafóricos – pessoais, possessivos, demonstrativos).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP37",
    description:
      "Analisar, em diferentes textos, os efeitos de sentido decorrentes do uso de recursos linguístico-discursivos de prescrição, causalidade, sequências descritivas e expositivas e ordenação de eventos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01LP15",
    description:
      "Agrupar palavras pelo critério de aproximação de significado (sinonímia) e separar palavras pelo critério de oposição de significado (antonímia).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02LP10",
    description:
      "Identificar sinônimos de palavras de texto lido, determinando a diferença de sentido entre eles, e formar antônimos de palavras encontradas em texto lido pelo acréscimo do prefixo de negação in-/im-.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LP10",
    description:
      "Identificar sintagmas nominais e verbais como constituintes imediatos da oração.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP24",
    description:
      "Identificar funções do texto dramático (escrito para ser encenado) e sua organização por meio de diálogos entre personagens e marcadores das falas das personagens e de cena.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP26",
    description:
      "Reconhecer a estrutura de hipertexto em textos de divulgação científica e proceder à remissão a conceitos e relações por meio de notas de rodapés ou boxes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP07",
    description:
      "Produzir textos em diferentes gêneros, considerando sua adequação ao contexto produção e circulação – os enunciadores envolvidos, os objetivos, o gênero, o suporte, a circulação -, ao modo (escrito ou oral; imagem estática ou em movimento etc.), à variedade linguística e/ou semiótica apropriada a esse contexto, à construção da textualidade relacionada às propriedades textuais e do gênero), utilizando estratégias de planejamento, elaboração, revisão, edição, reescrita/redesign e avaliação de textos, para, com a ajuda do professor e a colaboração dos colegas, corrigir e aprimorar as produções realizadas, fazendo cortes, acréscimos, reformulações, correções de concordância, ortografia, pontuação em textos e editando imagens, arquivos sonoros, fazendo cortes, acréscimos, ajustes, acrescentando/ alterando efeitos, ordenamentos etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP30",
    description:
      "Analisar a estrutura de hipertexto e hiperlinks em textos de divulgação científica que circulam na Web e proceder à remissão a conceitos e relações por meio de links.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LP03",
    description:
      "Produzir artigos de opinião, tendo em vista o contexto de produção dado, a defesa de um ponto de vista, utilizando argumentos e contra-argumentos e articuladores de coesão que marquem relações de oposição, contraste, exemplificação, ênfase.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LP03",
    description:
      "Produzir artigos de opinião, tendo em vista o contexto de produção dado, assumindo posição diante de tema polêmico, argumentando de acordo com a estrutura própria desse tipo de texto e utilizando diferentes tipos de argumentos – de autoridade, comprovação, exemplificação princípio etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP12",
    description:
      "Produzir resenhas críticas, vlogs, vídeos, podcasts variados e produções e gêneros próprios das culturas juvenis (algumas possibilidades: fanzines, fanclipes, e-zines, gameplay, detonado etc.), que apresentem/descrevam e/ou avaliem produções culturais (livro, filme, série, game, canção, disco, videoclipe etc.) ou evento (show, sarau, slam etc.), tendo em vista o contexto de produção dado, as características do gênero, os recursos das mídias envolvidas e a textualização adequada dos textos e/ou produções.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP25",
    description:
      "Reconhecer e utilizar os critérios de organização tópica (do geral para o específico, do específico para o geral etc.), as marcas linguísticas dessa organização (marcadores de ordenação e enumeração, de explicação, definição e exemplificação, por exemplo) e os mecanismos de paráfrase, de maneira a organizar mais adequadamente a coesão e a progressão temática de seus textos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89LP29",
    description:
      "Utilizar e perceber mecanismos de progressão temática, tais como retomadas anafóricas (“que, cujo, onde”, pronomes do caso reto e oblíquos, pronomes demonstrativos, nomes correferentes etc.), catáforas (remetendo para adiante ao invés de retomar o já dito), uso de organizadores textuais, de coesivos etc., e analisar os mecanismos de reformulação e paráfrase utilizados nos textos de divulgação do conhecimento.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP22",
    description:
      "Produzir, revisar e editar textos reivindicatórios ou propositivos sobre problemas que afetam a vida escolar ou da comunidade, justificando pontos de vista, reivindicações e detalhando propostas (justificativa, objetivos, ações previstas etc.), levando em conta seu contexto de produção e as características dos gêneros em questão.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP23",
    description:
      "Contribuir com a escrita de textos normativos, quando houver esse tipo de demanda na escola – regimentos e estatutos de organizações da sociedade civil do âmbito da atuação das crianças e jovens (grêmio livre, clubes de leitura, associações culturais etc.) – e de regras e regulamentos nos vários âmbitos da escola – campeonatos, festivais, regras de convivência etc., levando em conta o contexto de produção e as características dos gêneros em questão.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67LP10",
    description:
      "Produzir notícia impressa tendo em vista características do gênero – título ou manchete com verbo no tempo presente, linha fina (opcional), lide, progressão dada pela ordem decrescente de importância dos fatos, uso de 3ª pessoa, de palavras que indicam precisão –, e o estabelecimento adequado de coesão e produzir notícia para TV, rádio e internet, tendo em vista, além das características do gênero, os recursos de mídias disponíveis e o manejo de recursos de captação e edição de áudio e imagem.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP41",
    description:
      "Usar adequadamente ferramentas de apoio a apresentações orais, escolhendo e usando tipos e tamanhos de fontes que permitam boa visualização, topicalizando e/ou organizando o conteúdo em itens, inserindo de forma adequada imagens, gráficos, tabelas, formas e elementos gráficos, dimensionando a quantidade de texto (e imagem) por slide, usando progressivamente e de forma harmônica recursos mais sofisticados como efeitos de transição, slides mestres, layouts personalizados etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15LP08",
    description:
      "Utilizar software, inclusive programas de edição de texto, para editar e publicar os textos produzidos, explorando os recursos multissemióticos disponíveis.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LP12",
    description:
      "Identificar estrangeirismos, caracterizando-os segundo a conservação, ou não, de sua forma gráfica de origem, avaliando a pertinência, ou não, de seu uso.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35LP11",
    description:
      "Ouvir gravações, canções, textos falados em diferentes variedades linguísticas, identificando características regionais, urbanas e rurais da fala e respeitando as diversas variedades linguísticas como características do uso da língua por diferentes grupos regionais ou diferentes culturas locais, rejeitando preconceitos linguísticos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP55",
    description:
      "Reconhecer as variedades da língua falada, o conceito de norma-padrão e o de preconceito linguístico.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69LP56",
    description:
      "Fazer uso consciente e reflexivo de regras e normas da norma-padrão em situações de fala e escrita nas quais ela deve ser usada.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR01",
    description:
      "Identificar e apreciar formas distintas das artes visuais tradicionais e contemporâneas, cultivando a percepção, o imaginário, a capacidade de simbolizar e o repertório imagético.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR02",
    description:
      "Explorar e reconhecer elementos constitutivos das artes visuais (ponto, linha, forma, cor, espaço, movimento etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR03",
    description:
      "Reconhecer e analisar a influência de distintas matrizes estéticas e culturais das artes visuais nas manifestações artísticas das culturas locais, regionais e nacionais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR04",
    description:
      "Experimentar diferentes formas de expressão artística (desenho, pintura, colagem, quadrinhos, dobradura, escultura, modelagem, instalação, vídeo, fotografia etc.), fazendo uso sustentável de materiais, instrumentos, recursos e técnicas convencionais e não convencionais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR05",
    description:
      "Experimentar a criação em artes visuais de modo individual, coletivo e colaborativo, explorando diferentes espaços da escola e da comunidade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR06",
    description:
      "Dialogar sobre a sua criação e as dos colegas, para alcançar sentidos plurais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR07",
    description:
      "Reconhecer algumas categorias do sistema das artes visuais (museus, galerias, instituições, artistas, artesãos, curadores etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR08",
    description:
      "Experimentar e apreciar formas distintas de manifestações da dança presentes em diferentes contextos, cultivando a percepção, o imaginário, a capacidade de simbolizar e o repertório corporal.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR09",
    description:
      "Estabelecer relações entre as partes do corpo e destas com o todo corporal na construção do movimento dançado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR10",
    description:
      "Experimentar diferentes formas de orientação no espaço (deslocamentos, planos, direções, caminhos etc.) e ritmos de movimento (lento, moderado e rápido) na construção do movimento dançado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR11",
    description:
      "Criar e improvisar movimentos dançados de modo individual, coletivo e colaborativo, considerando os aspectos estruturais, dinâmicos e expressivos dos elementos constitutivos do movimento, com base nos códigos de dança.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR12",
    description:
      "Discutir, com respeito e sem preconceito, as experiências pessoais e coletivas em dança vivenciadas na escola, como fonte para a construção de vocabulários e repertórios próprios.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR13",
    description:
      "Identificar e apreciar criticamente diversas formas e gêneros de expressão musical, reconhecendo e analisando os usos e as funções da música em diversos contextos de circulação, em especial, aqueles da vida cotidiana.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR14",
    description:
      "Perceber e explorar os elementos constitutivos da música (altura, intensidade, timbre, melodia, ritmo etc.), por meio de jogos, brincadeiras, canções e práticas diversas de composição/criação, execução e apreciação musical.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR15",
    description:
      "Explorar fontes sonoras diversas, como as existentes no próprio corpo (palmas, voz, percussão corporal), na natureza e em objetos cotidianos, reconhecendo os elementos constitutivos da música e as características de instrumentos musicais variados.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR16",
    description:
      "Explorar diferentes formas de registro musical não convencional (representação gráfica de sons, partituras criativas etc.), bem como procedimentos e técnicas de registro em áudio e audiovisual, e reconhecer a notação musical convencional.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR17",
    description:
      "Experimentar improvisações, composições e sonorização de histórias, entre outros, utilizando vozes, sons corporais e/ou instrumentos musicais convencionais ou não convencionais, de modo individual, coletivo e colaborativo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR18",
    description:
      "Reconhecer e apreciar formas distintas de manifestações do teatro presentes em diferentes contextos, aprendendo a ver e a ouvir histórias dramatizadas e cultivando a percepção, o imaginário, a capacidade de simbolizar e o repertório ficcional.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR19",
    description:
      "Descobrir teatralidades na vida cotidiana, identificando elementos teatrais (variadas entonações de voz, diferentes fisicalidades, diversidade de personagens e narrativas etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR20",
    description:
      "Experimentar o trabalho colaborativo, coletivo e autoral em improvisações teatrais e processos narrativos criativos em teatro, explorando desde a teatralidade dos gestos e das ações do cotidiano até elementos de diferentes matrizes estéticas e culturais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR21",
    description:
      "Exercitar a imitação e o faz de conta, ressignificando objetos e fatos e experimentando-se no lugar do outro, ao compor e encenar acontecimentos cênicos, por meio de músicas, imagens, textos ou outros pontos de partida, de forma intencional e reflexiva.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR22",
    description:
      "Experimentar possibilidades criativas de movimento e de voz na criação de um personagem teatral, discutindo estereótipos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR23",
    description:
      "Reconhecer e experimentar, em projetos temáticos, as relações processuais entre diversas linguagens artísticas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR24",
    description:
      "Caracterizar e experimentar brinquedos, brincadeiras, jogos, danças, canções e histórias de diferentes matrizes estéticas e culturais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR25",
    description:
      "Conhecer e valorizar o patrimônio cultural, material e imaterial, de culturas diversas, em especial a brasileira, incluindo-se suas matrizes indígenas, africanas e europeias, de diferentes épocas, favorecendo a construção de vocabulário e repertório relativos às diferentes linguagens artísticas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF15AR26",
    description:
      "Explorar diferentes tecnologias e recursos digitais (multimeios, animações, jogos eletrônicos, gravações em áudio e vídeo, fotografia, softwares etc.) nos processos de criação artística.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR01",
    description:
      "Pesquisar, apreciar e analisar formas distintas das artes visuais tradicionais e contemporâneas, em obras de artistas brasileiros e estrangeiros de diferentes épocas e em diferentes matrizes estéticas e culturais, de modo a ampliar a experiência com diferentes contextos e práticas artístico-visuais e cultivar a percepção, o imaginário, a capacidade de simbolizar e o repertório imagético.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR02",
    description:
      "Pesquisar e analisar diferentes estilos visuais, contextualizando-os no tempo e no espaço.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR03",
    description:
      "Analisar situações nas quais as linguagens das artes visuais se integram às linguagens audiovisuais (cinema, animações, vídeos etc.), gráficas (capas de livros, ilustrações de textos diversos etc.), cenográficas, coreográficas, musicais etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR04",
    description:
      "Analisar os elementos constitutivos das artes visuais (ponto, linha, forma, direção, cor, tom, escala, dimensão, espaço, movimento etc.) na apreciação de diferentes produções artísticas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR05",
    description:
      "Experimentar e analisar diferentes formas de expressão artística (desenho, pintura, colagem, quadrinhos, dobradura, escultura, modelagem, instalação, vídeo, fotografia, performance etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR06",
    description:
      "Desenvolver processos de criação em artes visuais, com base em temas ou interesses artísticos, de modo individual, coletivo e colaborativo, fazendo uso de materiais, instrumentos e recursos convencionais, alternativos e digitais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR07",
    description:
      "Dialogar com princípios conceituais, proposições temáticas, repertórios imagéticos e processos de criação nas suas produções visuais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR08",
    description:
      "Diferenciar as categorias de artista, artesão, produtor cultural, curador, designer, entre outras, estabelecendo relações entre os profissionais do sistema das artes visuais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR09",
    description:
      "Pesquisar e analisar diferentes formas de expressão, representação e encenação da dança, reconhecendo e apreciando composições de dança de artistas e grupos brasileiros e estrangeiros de diferentes épocas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR10",
    description:
      "Explorar elementos constitutivos do movimento cotidiano e do movimento dançado, abordando, criticamente, o desenvolvimento das formas da dança em sua história tradicional e contemporânea.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR11",
    description:
      "Experimentar e analisar os fatores de movimento (tempo, peso, fluência e espaço) como elementos que, combinados, geram as ações corporais e o movimento dançado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR12",
    description:
      "Investigar e experimentar procedimentos de improvisação e criação do movimento como fonte para a construção de vocabulários e repertórios próprios.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR13",
    description:
      "Investigar brincadeiras, jogos, danças coletivas e outras práticas de dança de diferentes matrizes estéticas e culturais como referência para a criação e a composição de danças autorais, individualmente e em grupo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR14",
    description:
      "Analisar e experimentar diferentes elementos (figurino, iluminação, cenário, trilha sonora etc.) e espaços (convencionais e não convencionais) para composição cênica e apresentação coreográfica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR15",
    description:
      "Discutir as experiências pessoais e coletivas em dança vivenciadas na escola e em outros contextos, problematizando estereótipos e preconceitos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR16",
    description:
      "Analisar criticamente, por meio da apreciação musical, usos e funções da música em seus contextos de produção e circulação, relacionando as práticas musicais às diferentes dimensões da vida social, cultural, política, histórica, econômica, estética e ética",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR17",
    description:
      "Explorar e analisar, criticamente, diferentes meios e equipamentos culturais de circulação da música e do conhecimento musical.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR18",
    description:
      "Reconhecer e apreciar o papel de músicos e grupos de música brasileiros e estrangeiros que contribuíram para o desenvolvimento de formas e gêneros musicais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR19",
    description:
      "Identificar e analisar diferentes estilos musicais, contextualizando-os no tempo e no espaço, de modo a aprimorar a capacidade de apreciação da estética musical.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR20",
    description:
      "Explorar e analisar elementos constitutivos da música (altura, intensidade, timbre, melodia, ritmo etc.), por meio de recursos tecnológicos (games e plataformas digitais), jogos, canções e práticas diversas de composição/criação, execução e apreciação musicais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR21",
    description:
      "Explorar e analisar fontes e materiais sonoros em práticas de composição/criação, execução e apreciação musical, reconhecendo timbres e características de instrumentos musicais diversos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR22",
    description:
      "Explorar e identificar diferentes formas de registro musical (notação musical tradicional, partituras criativas e procedimentos da música contemporânea), bem como procedimentos e técnicas de registro em áudio e audiovisual.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR23",
    description:
      "Explorar e criar improvisações, composições, arranjos, jingles, trilhas sonoras, entre outros, utilizando vozes, sons corporais e/ou instrumentos acústicos ou eletrônicos, convencionais ou não convencionais, expressando ideias musicais de maneira individual, coletiva e colaborativa.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR24",
    description:
      "Reconhecer e apreciar artistas e grupos de teatro brasileiros e estrangeiros de diferentes épocas, investigando os modos de criação, produção, divulgação, circulação e organização da atuação profissional em teatro.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR25",
    description:
      "Identificar e analisar diferentes estilos cênicos, contextualizando-os no tempo e no espaço de modo a aprimorar a capacidade de apreciação da estética teatral.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR26",
    description:
      "Explorar diferentes elementos envolvidos na composição dos acontecimentos cênicos (figurinos, adereços, cenário, iluminação e sonoplastia) e reconhecer seus vocabulários.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR27",
    description:
      "Pesquisar e criar formas de dramaturgias e espaços cênicos para o acontecimento teatral, em diálogo com o teatro contemporâneo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR28",
    description:
      "Investigar e experimentar diferentes funções teatrais e discutir os limites e desafios do trabalho artístico coletivo e colaborativo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR29",
    description:
      "Experimentar a gestualidade e as construções corporais e vocais de maneira imaginativa na improvisação teatral e no jogo cênico.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR30",
    description:
      "Compor improvisações e acontecimentos cênicos com base em textos dramáticos ou outros estímulos (música, imagens, objetos etc.), caracterizando personagens (com figurinos e adereços), cenário, iluminação e sonoplastia e considerando a relação com o espectador.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR31",
    description:
      "Relacionar as práticas artísticas às diferentes dimensões da vida social, cultural, política, histórica, econômica, estética e ética.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR32",
    description:
      "Analisar e explorar, em projetos temáticos, as relações processuais entre diversas linguagens artísticas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR33",
    description:
      "Analisar aspectos históricos, sociais e políticos da produção artística, problematizando as narrativas eurocêntricas e as diversas categorizações da arte (arte, artesanato, folclore, design etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR34",
    description:
      "Analisar e valorizar o patrimônio cultural, material e imaterial, de culturas diversas, em especial a brasileira, incluindo suas matrizes indígenas, africanas e europeias, de diferentes épocas, e favorecendo a construção de vocabulário e repertório relativos às diferentes linguagens artísticas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF69AR35",
    description:
      "Identificar e manipular diferentes tecnologias e recursos digitais para acessar, apreciar, produzir, registrar e compartilhar práticas e repertórios artísticos, de modo reflexivo, ético e responsável.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12EF01",
    description:
      "Experimentar, fruir e recriar diferentes brincadeiras e jogos da cultura popular presentes no contexto comunitário e regional, reconhecendo e respeitando as diferenças individuais de desempenho dos colegas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12EF02",
    description:
      "Explicar, por meio de múltiplas linguagens (corporal, visual, oral e escrita), as brincadeiras e os jogos populares do contexto comunitário e regional, reconhecendo e valorizando a importância desses jogos e brincadeiras para suas culturas de origem.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12EF03",
    description:
      "Planejar e utilizar estratégias para resolver desafios de brincadeiras e jogos populares do contexto comunitário e regional, com base no reconhecimento das características dessas práticas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12EF04",
    description:
      "Colaborar na proposição e na produção de alternativas para a prática, em outros momentos e espaços, de brincadeiras e jogos e demais práticas corporais tematizadas na escola, produzindo textos (orais, escritos, audiovisuais) para divulgá-las na escola e na comunidade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12EF05",
    description:
      "Experimentar e fruir, prezando pelo trabalho coletivo e pelo protagonismo, a prática de esportes de marca e de precisão, identificando os elementos comuns a esses esportes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12EF06",
    description:
      "Discutir a importância da observação das normas e das regras dos esportes de marca e de precisão para assegurar a integridade própria e as dos demais participantes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12EF07",
    description:
      "Experimentar, fruir e identificar diferentes elementos básicos da ginástica (equilíbrios, saltos, giros, rotações, acrobacias, com e sem materiais) e da ginástica geral, de forma individual e em pequenos grupos, adotando procedimentos de segurança.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12EF08",
    description:
      "Planejar e utilizar estratégias para a execução de diferentes elementos básicos da ginástica e da ginástica geral.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12EF09",
    description:
      "Participar da ginástica geral, identificando as potencialidades e os limites do corpo, e respeitando as diferenças individuais e de desempenho corporal.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12EF10",
    description:
      "Descrever, por meio de múltiplas linguagens (corporal, oral, escrita e audiovisual), as características dos elementos básicos da ginástica e da ginástica geral, identificando a presença desses elementos em distintas práticas corporais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12EF11",
    description:
      "Experimentar e fruir diferentes danças do contexto comunitário e regional (rodas cantadas, brincadeiras rítmicas e expressivas), e recriá-las, respeitando as diferenças individuais e de desempenho corporal.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF12EF12",
    description:
      "Identificar os elementos constitutivos (ritmo, espaço, gestos) das danças do contexto comunitário e regional, valorizando e respeitando as manifestações de diferentes culturas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35EF01",
    description:
      "Experimentar e fruir brincadeiras e jogos populares do Brasil e do mundo, incluindo aqueles de matriz indígena e africana, e recriá-los, valorizando a importância desse patrimônio histórico cultural.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35EF02",
    description:
      "Planejar e utilizar estratégias para possibilitar a participação segura de todos os alunos em brincadeiras e jogos populares do Brasil e de matriz indígena e africana.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35EF03",
    description:
      "Descrever, por meio de múltiplas linguagens (corporal, oral, escrita, audiovisual), as brincadeiras e os jogos populares do Brasil e de matriz indígena e africana, explicando suas características e a importância desse patrimônio histórico cultural na preservação das diferentes culturas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35EF04",
    description:
      "Recriar, individual e coletivamente, e experimentar, na escola e fora dela, brincadeiras e jogos populares do Brasil e do mundo, incluindo aqueles de matriz indígena e africana, e demais práticas corporais tematizadas na escola, adequando-as aos espaços públicos disponíveis.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35EF05",
    description:
      "Experimentar e fruir diversos tipos de esportes de campo e taco, rede/parede e invasão, identificando seus elementos comuns e criando estratégias individuais e coletivas básicas para sua execução, prezando pelo trabalho coletivo e pelo protagonismo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35EF06",
    description:
      "Diferenciar os conceitos de jogo e esporte, identificando as características que os constituem na contemporaneidade e suas manifestações (profissional e comunitária/lazer).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35EF07",
    description:
      "Experimentar e fruir, de forma coletiva, combinações de diferentes elementos da ginástica geral (equilíbrios, saltos, giros, rotações, acrobacias, com e sem materiais), propondo coreografias com diferentes temas do cotidiano.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35EF08",
    description:
      "Planejar e utilizar estratégias para resolver desafios na execução de elementos básicos de apresentações coletivas de ginástica geral, reconhecendo as potencialidades e os limites do corpo e adotando procedimentos de segurança.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35EF09",
    description:
      "Experimentar, recriar e fruir danças populares do Brasil e do mundo e danças de matriz indígena e africana, valorizando e respeitando os diferentes sentidos e significados dessas danças em suas culturas de origem.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35EF10",
    description:
      "Comparar e identificar os elementos constitutivos comuns e diferentes (ritmo, espaço, gestos) em danças populares do Brasil e do mundo e danças de matriz indígena e africana.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35EF11",
    description:
      "Formular e utilizar estratégias para a execução de elementos constitutivos das danças populares do Brasil e do mundo, e das danças de matriz indígena e africana.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35EF12",
    description:
      "Identificar situações de injustiça e preconceito geradas e/ou presentes no contexto das danças e demais práticas corporais e discutir alternativas para superá-las.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35EF13",
    description:
      "Experimentar, fruir e recriar diferentes lutas presentes no contexto comunitário e regional e lutas de matriz indígena e africana.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35EF14",
    description:
      "Planejar e utilizar estratégias básicas das lutas do contexto comunitário e regional e lutas de matriz indígena e africana experimentadas, respeitando o colega como oponente e as normas de segurança.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF35EF15",
    description:
      "Identificar as características das lutas do contexto comunitário e regional e lutas de matriz indígena e africana, reconhecendo as diferenças entre lutas e brigas e entre lutas e as demais práticas corporais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF01",
    description:
      "Experimentar e fruir, na escola e fora dela, jogos eletrônicos diversos, valorizando e respeitando os sentidos e significados atribuídos a eles por diferentes grupos sociais e etários.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF02",
    description:
      "Identificar as transformações nas características dos jogos eletrônicos em função dos avanços das tecnologias e nas respectivas exigências corporais colocadas por esses diferentes tipos de jogos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF03",
    description:
      "Experimentar e fruir esportes de marca, precisão, invasão e técnico-combinatórios, valorizando o trabalho coletivo e o protagonismo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF04",
    description:
      "Praticar um ou mais esportes de marca, precisão, invasão e técnico-combinatórios oferecidos pela escola, usando habilidades técnico-táticas básicas e respeitando regras.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF05",
    description:
      "Planejar e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de marca, precisão, invasão e técnico-combinatórios como nas modalidades esportivas escolhidas para praticar de forma específica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF06",
    description:
      "Analisar as transformações na organização e na prática dos esportes em suas diferentes manifestações (profissional e comunitário/lazer).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF07",
    description:
      "Propor e produzir alternativas para experimentação dos esportes não disponíveis e/ou acessíveis na comunidade e das demais práticas corporais tematizadas na escola.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF08",
    description:
      "Experimentar e fruir exercícios físicos que solicitem diferentes capacidades físicas, identificando seus tipos (força, velocidade, resistência, flexibilidade) e as sensações corporais provocadas pela sua prática.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF09",
    description:
      "Construir, coletivamente, procedimentos e normas de convívio que viabilizem a participação de todos na prática de exercícios físicos, com o objetivo de promover a saúde.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF10",
    description:
      "Diferenciar exercício físico de atividade física e propor alternativas para a prática de exercícios físicos dentro e fora do ambiente escolar.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF11",
    description:
      "Experimentar, fruir e recriar danças urbanas, identificando seus elementos constitutivos (ritmo, espaço, gestos).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF12",
    description:
      "Planejar e utilizar estratégias para aprender elementos constitutivos das danças urbanas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF13",
    description:
      "Diferenciar as danças urbanas das demais manifestações da dança, valorizando e respeitando os sentidos e significados atribuídos a eles por diferentes grupos sociais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF14",
    description:
      "Experimentar, fruir e recriar diferentes lutas do Brasil, valorizando a própria segurança e integridade física, bem como as dos demais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF15",
    description:
      "Planejar e utilizar estratégias básicas das lutas do Brasil, respeitando o colega como oponente.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF16",
    description:
      "Identificar as características (códigos, rituais, elementos técnico-táticos, indumentária, materiais, instalações, instituições) das lutas do Brasil.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF17",
    description:
      "Problematizar preconceitos e estereótipos relacionados ao universo das lutas e demais práticas corporais, propondo alternativas para superá-los, com base na solidariedade, na justiça, na equidade e no respeito.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF18",
    description:
      "Experimentar e fruir diferentes práticas corporais de aventura urbanas, valorizando a própria segurança e integridade física, bem como as dos demais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF19",
    description:
      "Identificar os riscos durante a realização de práticas corporais de aventura urbanas e planejar estratégias para sua superação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF20",
    description:
      "Executar práticas corporais de aventura urbanas, respeitando o patrimônio público e utilizando alternativas para a prática segura em diversos espaços.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF67EF21",
    description:
      "Identificar a origem das práticas corporais de aventura e as possibilidades de recriá-las, reconhecendo as características (instrumentos, equipamentos de segurança, indumentária, organização) e seus tipos de práticas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF01",
    description:
      "Experimentar diferentes papéis (jogador, árbitro e técnico) e fruir os esportes de rede/parede, campo e taco, invasão e combate, valorizando o trabalho coletivo e o protagonismo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF02",
    description:
      "Praticar um ou mais esportes de rede/parede, campo e taco, invasão e combate oferecidos pela escola, usando habilidades técnico-táticas básicas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF03",
    description:
      "Formular e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de campo e taco, rede/parede, invasão e combate como nas modalidades esportivas escolhidas para praticar de forma específica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF04",
    description:
      "Identificar os elementos técnicos ou técnico-táticos individuais, combinações táticas, sistemas de jogo e regras das modalidades esportivas praticadas, bem como diferenciar as modalidades esportivas com base nos critérios da lógica interna das categorias de esporte: rede/parede, campo e taco, invasão e combate.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF05",
    description:
      "Identificar as transformações históricas do fenômeno esportivo e discutir alguns de seus problemas (doping, corrupção, violência etc.) e a forma como as mídias os apresentam.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF06",
    description:
      "Verificar locais disponíveis na comunidade para a prática de esportes e das demais práticas corporais tematizadas na escola, propondo e produzindo alternativas para utilizá-los no tempo livre.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF07",
    description:
      "Experimentar e fruir um ou mais programas de exercícios físicos, identificando as exigências corporais desses diferentes programas e reconhecendo a importância de uma prática individualizada, adequada às características e necessidades de cada sujeito.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF08",
    description:
      "Discutir as transformações históricas dos padrões de desempenho, saúde e beleza, considerando a forma como são apresentados nos diferentes meios (científico, midiático etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF09",
    description:
      "Problematizar a prática excessiva de exercícios físicos e o uso de medicamentos para a ampliação do rendimento ou potencialização das transformações corporais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF10",
    description:
      "Experimentar e fruir um ou mais tipos de ginástica de conscientização corporal, identificando as exigências corporais dos mesmos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF11",
    description:
      "Identificar as diferenças e semelhanças entre a ginástica de conscientização corporal e as de condicionamento físico e discutir como a prática de cada uma dessas manifestações pode contribuir para a melhoria das condições de vida, saúde, bem-estar e cuidado consigo mesmo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF12",
    description:
      "Experimentar, fruir e recriar danças de salão, valorizando a diversidade cultural e respeitando a tradição dessas culturas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF13",
    description:
      "Planejar e utilizar estratégias para se apropriar dos elementos constitutivos (ritmo, espaço, gestos) das danças de salão.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF14",
    description:
      "Discutir estereótipos e preconceitos relativos às danças de salão e demais práticas corporais e propor alternativas para sua superação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF15",
    description:
      "Analisar as características (ritmos, gestos, coreografias e músicas) das danças de salão, bem como suas transformações históricas e os grupos de origem.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF16",
    description:
      "Experimentar e fruir a execução dos movimentos pertencentes às lutas do mundo, adotando procedimentos de segurança e respeitando o oponente.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF17",
    description:
      "Planejar e utilizar estratégias básicas das lutas experimentadas, reconhecendo as suas características técnico-táticas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF18",
    description:
      "Discutir as transformações históricas, o processo de esportivização e a midiatização de uma ou mais lutas, valorizando e respeitando as culturas de origem.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF19",
    description:
      "Experimentar e fruir diferentes práticas corporais de aventura na natureza, valorizando a própria segurança e integridade física, bem como as dos demais, respeitando o patrimônio natural e minimizando os impactos de degradação ambiental.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF20",
    description:
      "Identificar riscos, formular estratégias e observar normas de segurança para superar os desafios na realização de práticas corporais de aventura na natureza.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF89EF21",
    description:
      "Identificar as características (equipamentos de segurança, instrumentos, indumentária, organização) das práticas corporais de aventura na natureza, bem como suas transformações históricas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI01",
    description:
      "Interagir em situações de intercâmbio oral, demonstrando iniciativa para utilizar a língua inglesa.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI02",
    description:
      "Coletar informações do grupo, perguntando e respondendo sobre a família, os amigos, a escola e a comunidade..",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI03",
    description:
      "Solicitar esclarecimentos em língua inglesa sobre o que não entendeu e o significado de palavras ou expressões desconhecidas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI04",
    description:
      "Reconhecer, com o apoio de palavras cognatas e pistas do contexto discursivo, o assunto e as informações principais em textos orais sobre temas familiares.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI05",
    description:
      "Aplicar os conhecimentos da língua inglesa para falar de si e de outras pessoas, explicitando informações pessoais e características relacionadas a gostos, preferências e rotinas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI06",
    description:
      "Planejar apresentação sobre a família, a comunidade e a escola, compartilhando-a oralmente com o grupo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI07",
    description:
      "Formular hipóteses sobre a finalidade de um texto em língua inglesa, com base em sua estrutura, organização textual e pistas gráficas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI08",
    description:
      "Identificar o assunto de um texto, reconhecendo sua organização textual e palavras cognatas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI09",
    description: "Localizar informações específicas em texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI10",
    description:
      "Conhecer a organização de um dicionário bilíngue (impresso e/ou on-line) para construir repertório lexical.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI11",
    description:
      "Explorar ambientes virtuais e/ou aplicativos para construir repertório lexical na língua inglesa.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI12",
    description:
      "Interessar-se pelo texto lido, compartilhando suas ideias sobre o que o texto informa/comunica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI13",
    description:
      "Listar ideias para a produção de textos, levando em conta o tema e o assunto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI14",
    description:
      "Organizar ideias, selecionando-as em função da estrutura e do objetivo do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI15",
    description:
      "Produzir textos escritos em língua inglesa (histórias em quadrinhos, cartazes, chats, blogues, agendas, fotolegendas, entre outros), sobre si mesmo, sua família, seus amigos, gostos, preferências e rotinas, sua comunidade e seu contexto escolar.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI16",
    description:
      "Construir repertório relativo às expressões usadas para o convívio social e o uso da língua inglesa em sala de aula.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI17",
    description:
      "Construir repertório lexical relativo a temas familiares (escola, família, rotina diária, atividades de lazer, esportes, entre outros).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI18",
    description:
      "Reconhecer semelhanças e diferenças na pronúncia de palavras da língua inglesa e da língua materna e/ou outras línguas conhecidas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI19",
    description:
      "Utilizar o presente do indicativo para identificar pessoas (verbo to be) e descrever rotinas diárias.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI20",
    description:
      "Utilizar o presente contínuo para descrever ações em progresso.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI21",
    description:
      "Reconhecer o uso do imperativo em enunciados de atividades, comandos e instruções.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI22",
    description: "Descrever relações por meio do uso de apóstrofo (’) + s.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI23",
    description: "Empregar, de forma inteligível, os adjetivos possessivos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI24",
    description:
      "Investigar o alcance da língua inglesa no mundo: como língua materna e/ou oficial (primeira ou segunda língua).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI25",
    description:
      "Identificar a presença da língua inglesa na sociedade brasileira/comunidade (palavras, expressões, suportes e esferas de circulação e consumo) e seu significado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06LI26",
    description:
      "Avaliar, problematizando elementos/produtos culturais de países de língua inglesa absorvidos pela sociedade brasileira/comunidade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI01",
    description:
      "Interagir em situações de intercâmbio oral para realizar as atividades em sala de aula, de forma respeitosa e colaborativa, trocando ideias e engajando-se em brincadeiras e jogos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI02",
    description: "Entrevistar os colegas para conhecer suas histórias de vida.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI03",
    description: "Mobilizar conhecimentos prévios para compreender texto oral.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI04",
    description:
      "Identificar o contexto, a finalidade, o assunto e os interlocutores em textos orais presentes no cinema, na internet, na televisão, entre outros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI05",
    description:
      "Compor, em língua inglesa, narrativas orais sobre fatos, acontecimentos e personalidades marcantes do passado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI06",
    description:
      "Antecipar o sentido global de textos em língua inglesa por inferências, com base em leitura rápida, observando títulos, primeiras e últimas frases de parágrafos e palavras-chave repetidas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI07",
    description:
      "Identificar a(s) informação(ões)-chave de partes de um texto em língua inglesa (parágrafos).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI08",
    description:
      "Relacionar as partes de um texto (parágrafos) para construir seu sentido global.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI09",
    description:
      "Selecionar, em um texto, a informação desejada como objetivo de leitura.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI10",
    description:
      "Escolher, em ambientes virtuais, textos em língua inglesa, de fontes confiáveis, para estudos/pesquisas escolares.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI11",
    description:
      "Participar de troca de opiniões e informações sobre textos, lidos na sala de aula ou em outros ambientes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI12",
    description:
      "Planejar a escrita de textos em função do contexto (público, finalidade, layout e suporte).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI13",
    description:
      "Organizar texto em unidades de sentido, dividindo-o em parágrafos ou tópicos e subtópicos, explorando as possibilidades de organização gráfica, de suporte e de formato do texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI14",
    description:
      "Produzir textos diversos sobre fatos, acontecimentos e personalidades do passado (linha do tempo/ timelines, biografias, verbetes de enciclopédias, blogues, entre outros).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI15",
    description:
      "Construir repertório lexical relativo a verbos regulares e irregulares (formas no passado), preposições de tempo (in, on, at) e conectores (and, but, because, then, so, before, after, entre outros).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI16",
    description: "Reconhecer a pronúncia de verbos regulares no passado (-ed).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI17",
    description:
      "Explorar o caráter polissêmico de palavras de acordo com o contexto de uso.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI18",
    description:
      "Utilizar o passado simples e o passado contínuo para produzir textos orais e escritos, mostrando relações de sequência e causalidade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI19",
    description:
      "Discriminar sujeito de objeto utilizando pronomes a eles relacionados.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI20",
    description:
      "Empregar, de forma inteligível, o verbo modal can para descrever habilidades (no presente e no passado).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI21",
    description:
      "Analisar o alcance da língua inglesa e os seus contextos de uso no mundo globalizado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI22",
    description:
      "Explorar modos de falar em língua inglesa, refutando preconceitos e reconhecendo a variação linguística como fenômeno natural das línguas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07LI23",
    description:
      "Reconhecer a variação linguística como manifestação de formas de pensar e expressar o mundo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LI01",
    description:
      "Fazer uso da língua inglesa para resolver mal-entendidos, emitir opiniões e esclarecer informações por meio de paráfrases ou justificativas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LI02",
    description:
      "Explorar o uso de recursos linguísticos (frases incompletas, hesitações, entre outros) e paralinguísticos (gestos, expressões faciais, entre outros) em situações de interação oral.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LI03",
    description:
      "Construir o sentido global de textos orais, relacionando suas partes, o assunto principal e informações relevantes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LI04",
    description:
      "Utilizar recursos e repertório linguísticos apropriados para informar/comunicar/falar do futuro: planos, previsões, possibilidades e probabilidades.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LI05",
    description:
      "Inferir informações e relações que não aparecem de modo explícito no texto para construção de sentidos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LI06",
    description:
      "Apreciar textos narrativos em língua inglesa (contos, romances, entre outros, em versão original ou simplificada), como forma de valorizar o patrimônio cultural produzido em língua inglesa.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LI07",
    description:
      "Explorar ambientes virtuais e/ou aplicativos para acessar e usufruir do patrimônio artístico literário em língua inglesa.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LI08",
    description:
      "Analisar, criticamente, o conteúdo de textos, comparando diferentes perspectivas apresentadas sobre um mesmo assunto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LI09",
    description:
      "Avaliar a própria produção escrita e a de colegas, com base no contexto de comunicação (finalidade e adequação ao público, conteúdo a ser comunicado, organização textual, legibilidade, estrutura de frases).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LI10",
    description:
      "Reconstruir o texto, com cortes, acréscimos, reformulações e correções, para aprimoramento, edição e publicação final.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LI11",
    description:
      "Produzir textos (comentários em fóruns, relatos pessoais, mensagens instantâneas, tweets, reportagens, histórias de ficção, blogues, entre outros), com o uso de estratégias de escrita (planejamento, produção de rascunho, revisão e edição final), apontando sonhos e projetos para o futuro (pessoal, da família, da comunidade ou do planeta).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LI12",
    description:
      "Construir repertório lexical relativo a planos, previsões e expectativas para o futuro.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LI13",
    description:
      "Reconhecer sufixos e prefixos comuns utilizados na formação de palavras em língua inglesa.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LI14",
    description:
      "Utilizar formas verbais do futuro para descrever planos e expectativas e fazer previsões.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LI15",
    description:
      "Utilizar, de modo inteligível, as formas comparativas e superlativas de adjetivos para comparar qualidades e quantidades.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LI16",
    description:
      "Utilizar, de modo inteligível, corretamente, some, any, many, much.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LI17",
    description:
      "Empregar, de modo inteligível, os pronomes relativos (who, which, that, whose) para construir períodos compostos por subordinação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LI18",
    description:
      "Construir repertório cultural por meio do contato com manifestações artístico-culturais vinculadas à língua inglesa (artes plásticas e visuais, literatura, música, cinema, dança, festividades, entre outros), valorizando a diversidade entre culturas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LI19",
    description:
      "Investigar de que forma expressões, gestos e comportamentos são interpretados em função de aspectos culturais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08LI20",
    description:
      "Examinar fatores que podem impedir o entendimento entre pessoas de culturas diferentes que falam a língua inglesa.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LI01",
    description:
      "Fazer uso da língua inglesa para expor pontos de vista, argumentos e contra-argumentos, considerando o contexto e os recursos linguísticos voltados para a eficácia da comunicação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LI02",
    description:
      "Compilar as ideias-chave de textos por meio de tomada de notas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LI03",
    description:
      "Analisar posicionamentos defendidos e refutados em textos orais sobre temas de interesse social e coletivo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LI04",
    description:
      "Expor resultados de pesquisa ou estudo com o apoio de recursos, tais como notas, gráficos, tabelas, entre outros, adequando as estratégias de construção do texto oral aos objetivos de comunicação e ao contexto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LI05",
    description:
      "Identificar recursos de persuasão (escolha e jogo de palavras, uso de cores e imagens, tamanho de letras), utilizados nos textos publicitários e de propaganda, como elementos de convencimento.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LI06",
    description:
      "Distinguir fatos de opiniões em textos argumentativos da esfera jornalística.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LI07",
    description:
      "Identificar argumentos principais e as evidências/exemplos que os sustentam.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LI08",
    description:
      "Explorar ambientes virtuais de informação e socialização, analisando a qualidade e a validade das informações veiculadas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LI09",
    description:
      "Compartilhar, com os colegas, a leitura dos textos escritos pelo grupo, valorizando os diferentes pontos de vista defendidos, com ética e respeito.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LI10",
    description:
      "Propor potenciais argumentos para expor e defender ponto de vista em texto escrito, refletindo sobre o tema proposto e pesquisando dados, evidências e exemplos para sustentar os argumentos, organizando-os em sequência lógica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LI11",
    description:
      "Utilizar recursos verbais e não verbais para construção da persuasão em textos da esfera publicitária, de forma adequada ao contexto de circulação (produção e compreensão).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LI12",
    description:
      "Produzir textos (infográficos, fóruns de discussão on-line, fotorreportagens, campanhas publicitárias, memes, entre outros) sobre temas de interesse coletivo local ou global, que revelem posicionamento crítico.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LI13",
    description:
      "Reconhecer, nos novos gêneros digitais (blogues, mensagens instantâneas, tweets, entre outros), novas formas de escrita (abreviação de palavras, palavras com combinação de letras e números, pictogramas, símbolos gráficos, entre outros) na constituição das mensagens.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LI14",
    description:
      "Utilizar conectores indicadores de adição, condição, oposição, contraste, conclusão e síntese como auxiliares na construção da argumentação e intencionalidade discursiva.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LI15",
    description:
      "Empregar, de modo inteligível, as formas verbais em orações condicionais dos tipos 1 e 2 (If-clauses).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LI16",
    description:
      "Empregar, de modo inteligível, os verbos should, must, have to, may e might para indicar recomendação, necessidade ou obrigação e probabilidade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LI17",
    description:
      "Debater sobre a expansão da língua inglesa pelo mundo, em função do processo de colonização nas Américas, África, Ásia e Oceania.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LI18",
    description:
      "Analisar a importância da língua inglesa para o desenvolvimento das ciências (produção, divulgação e discussão de novos conhecimentos), da economia e da política no cenário mundial.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09LI19",
    description:
      "Discutir a comunicação intercultural por meio da língua inglesa como mecanismo de valorização pessoal e de construção de identidades no mundo globalizado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA01",
    description:
      "Utilizar números naturais como indicador de quantidade ou de ordem em diferentes situações cotidianas e reconhecer situações em que os números não indicam contagem nem ordem, mas sim código de identificação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA02",
    description:
      "Contar de maneira exata ou aproximada, utilizando diferentes estratégias como o pareamento e outros agrupamentos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA03",
    description:
      "Estimar e comparar quantidades de objetos de dois conjuntos (em torno de 20 elementos), por estimativa e/ou por correspondência (um a um, dois a dois) para indicar “tem mais”, “tem menos” ou “tem a mesma quantidade”.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA04",
    description:
      "Contar a quantidade de objetos de coleções até 100 unidades e apresentar o resultado por registros verbais e simbólicos, em situações de seu interesse, como jogos, brincadeiras, materiais da sala de aula, entre outros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA05",
    description:
      "Comparar números naturais de até duas ordens em situações cotidianas, com e sem suporte da reta numérica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA06",
    description:
      "Construir fatos básicos da adição e utilizá-los em procedimentos de cálculo para resolver problemas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA07",
    description:
      "Compor e decompor número de até duas ordens, por meio de diferentes adições, com o suporte de material manipulável, contribuindo para a compreensão de características do sistema de numeração decimal e o desenvolvimento de estratégias de cálculo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA08",
    description:
      "Resolver e elaborar problemas de adição e de subtração, envolvendo números de até dois algarismos, com os significados de juntar, acrescentar, separar e retirar, com o suporte de imagens e/ou material manipulável, utilizando estratégias e formas de registro pessoais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA09",
    description:
      "Organizar e ordenar objetos familiares ou representações por figuras, por meio de atributos, tais como cor, forma e medida.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA10",
    description:
      "Descrever, após o reconhecimento e a explicitação de um padrão (ou regularidade), os elementos ausentes em sequências recursivas de números naturais, objetos ou figuras.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA11",
    description:
      "Descrever a localização de pessoas e de objetos no espaço em relação à sua própria posição, utilizando termos como à direita, à esquerda, em frente, atrás.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA12",
    description:
      "Descrever a localização de pessoas e de objetos no espaço segundo um dado ponto de referência, compreendendo que, para a utilização de termos que se referem à posição, como direita, esquerda, em cima, em baixo, é necessário explicitar-se o referencial.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA13",
    description:
      "Relacionar figuras geométricas espaciais (cones, cilindros, esferas e blocos retangulares) a objetos familiares do mundo físico.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA14",
    description:
      "Identificar e nomear figuras planas (círculo, quadrado, retângulo e triângulo) em desenhos apresentados em diferentes disposições ou em contornos de faces de sólidos geométricos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA15",
    description:
      "Comparar comprimentos, capacidades ou massas, utilizando termos como mais alto, mais baixo, mais comprido, mais curto, mais grosso, mais fino, mais largo, mais pesado, mais leve, cabe mais, cabe menos, entre outros, para ordenar objetos de uso cotidiano.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA16",
    description:
      "Relatar em linguagem verbal ou não verbal sequência de acontecimentos relativos a um dia, utilizando, quando possível, os horários dos eventos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA17",
    description:
      "Reconhecer e relacionar períodos do dia, dias da semana e meses do ano, utilizando calendário, quando necessário.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA18",
    description:
      "Produzir a escrita de uma data, apresentando o dia, o mês e o ano, e indicar o dia da semana de uma data, consultando calendários.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA19",
    description:
      "Reconhecer e relacionar valores de moedas e cédulas do sistema monetário brasileiro para resolver situações simples do cotidiano do estudante.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA20",
    description:
      "Classificar eventos envolvendo o acaso, tais como “acontecerá com certeza”, “talvez aconteça” e “é impossível acontecer”, em situações do cotidiano.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA21",
    description:
      "Ler dados expressos em tabelas e em gráficos de colunas simples.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01MA22",
    description:
      "Realizar pesquisa, envolvendo até duas variáveis categóricas de seu interesse e universo de até 30 elementos, e organizar dados por meio de representações pessoais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA01",
    description:
      "Comparar e ordenar números naturais (até a ordem de centenas) pela compreensão de características do sistema de numeração decimal (valor posicional e função do zero).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA02",
    description:
      "Fazer estimativas por meio de estratégias diversas a respeito da quantidade de objetos de coleções e registrar o resultado da contagem desses objetos (até 1000 unidades).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA03",
    description:
      "Comparar quantidades de objetos de dois conjuntos, por estimativa e/ou por correspondência (um a um, dois a dois, entre outros), para indicar “tem mais”, “tem menos” ou “tem a mesma quantidade”, indicando, quando for o caso, quantos a mais e quantos a menos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA04",
    description:
      "Compor e decompor números naturais de até três ordens, com suporte de material manipulável, por meio de diferentes adições.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA05",
    description:
      "Construir fatos básicos da adição e subtração e utilizá-los no cálculo mental ou escrito.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA06",
    description:
      "Resolver e elaborar problemas de adição e de subtração, envolvendo números de até três ordens, com os significados de juntar, acrescentar, separar, retirar, utilizando estratégias pessoais ou convencionais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA07",
    description:
      "Resolver e elaborar problemas de multiplicação (por 2, 3, 4 e 5) com a ideia de adição de parcelas iguais por meio de estratégias e formas de registro pessoais, utilizando ou não suporte de imagens e/ou material manipulável.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA08",
    description:
      "Resolver e elaborar problemas envolvendo dobro, metade, triplo e terça parte, com o suporte de imagens ou material manipulável, utilizando estratégias pessoais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA09",
    description:
      "Construir sequências de números naturais em ordem crescente ou decrescente a partir de um número qualquer, utilizando uma regularidade estabelecida.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA10",
    description:
      "Descrever um padrão (ou regularidade) de sequências repetitivas e de sequências recursivas, por meio de palavras, símbolos ou desenhos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA11",
    description:
      "Descrever os elementos ausentes em sequências repetitivas e em sequências recursivas de números naturais, objetos ou figuras.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA12",
    description:
      "Identificar e registrar, em linguagem verbal ou não verbal, a localização e os deslocamentos de pessoas e de objetos no espaço, considerando mais de um ponto de referência, e indicar as mudanças de direção e de sentido.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA13",
    description:
      "Esboçar roteiros a ser seguidos ou plantas de ambientes familiares, assinalando entradas, saídas e alguns pontos de referência.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA14",
    description:
      "Reconhecer, nomear e comparar figuras geométricas espaciais (cubo, bloco retangular, pirâmide, cone, cilindro e esfera), relacionando-as com objetos do mundo físico.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA15",
    description:
      "Reconhecer, comparar e nomear figuras planas (círculo, quadrado, retângulo e triângulo), por meio de características comuns, em desenhos apresentados em diferentes disposições ou em sólidos geométricos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA16",
    description:
      "Estimar, medir e comparar comprimentos de lados de salas (incluindo contorno) e de polígonos, utilizando unidades de medida não padronizadas e padronizadas (metro, centímetro e milímetro) e instrumentos adequados.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA17",
    description:
      "Estimar, medir e comparar capacidade e massa, utilizando estratégias pessoais e unidades de medida não padronizadas ou padronizadas (litro, mililitro, grama e quilograma).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA18",
    description:
      "Indicar a duração de intervalos de tempo entre duas datas, como dias da semana e meses do ano, utilizando calendário, para planejamentos e organização de agenda.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA19",
    description:
      "Medir a duração de um intervalo de tempo por meio de relógio digital e registrar o horário do início e do fim do intervalo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA20",
    description:
      "Estabelecer a equivalência de valores entre moedas e cédulas do sistema monetário brasileiro para resolver situações cotidianas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA21",
    description:
      "Classificar resultados de eventos cotidianos aleatórios como “pouco prováveis”, “muito prováveis”, “improváveis” e “impossíveis”.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA22",
    description:
      "Comparar informações de pesquisas apresentadas por meio de tabelas de dupla entrada e em gráficos de colunas simples ou barras, para melhor compreender aspectos da realidade próxima.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02MA23",
    description:
      "Realizar pesquisa em universo de até 30 elementos, escolhendo até três variáveis categóricas de seu interesse, organizando os dados coletados em listas, tabelas e gráficos de colunas simples.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA01",
    description:
      "Ler, escrever e comparar números naturais de até a ordem de unidade de milhar, estabelecendo relações entre os registros numéricos e em língua materna.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA02",
    description:
      "Identificar características do sistema de numeração decimal, utilizando a composição e a decomposição de número natural de até quatro ordens.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA03",
    description:
      "Construir e utilizar fatos básicos da adição e da multiplicação para o cálculo mental ou escrito.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA04",
    description:
      "Estabelecer a relação entre números naturais e pontos da reta numérica para utilizá-la na ordenação dos números naturais e também na construção de fatos da adição e da subtração, relacionando-os com deslocamentos para a direita ou para a esquerda.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA05",
    description:
      "Utilizar diferentes procedimentos de cálculo mental e escrito para resolver problemas significativos envolvendo adição e subtração com números naturais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA06",
    description:
      "Resolver e elaborar problemas de adição e subtração com os significados de juntar, acrescentar, separar, retirar, comparar e completar quantidades, utilizando diferentes estratégias de cálculo exato ou aproximado, incluindo cálculo mental.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA07",
    description:
      "Resolver e elaborar problemas de multiplicação (por 2, 3, 4, 5 e 10) com os significados de adição de parcelas iguais e elementos apresentados em disposição retangular, utilizando diferentes estratégias de cálculo e registros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA08",
    description:
      "Resolver e elaborar problemas de divisão de um número natural por outro (até 10), com resto zero e com resto diferente de zero, com os significados de repartição equitativa e de medida, por meio de estratégias e registros pessoais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA09",
    description:
      "Associar o quociente de uma divisão com resto zero de um número natural por 2, 3, 4, 5 e 10 às ideias de metade, terça, quarta, quinta e décima partes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA10",
    description:
      "Identificar regularidades em sequências ordenadas de números naturais, resultantes da realização de adições ou subtrações sucessivas, por um mesmo número, descrever uma regra de formação da sequência e determinar elementos faltantes ou seguintes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA11",
    description:
      "Compreender a ideia de igualdade para escrever diferentes sentenças de adições ou de subtrações de dois números naturais que resultem na mesma soma ou diferença.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA12",
    description:
      "Descrever e representar, por meio de esboços de trajetos ou utilizando croquis e maquetes, a movimentação de pessoas ou de objetos no espaço, incluindo mudanças de direção e sentido, com base em diferentes pontos de referência.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA13",
    description:
      "Associar figuras geométricas espaciais (cubo, bloco retangular, pirâmide, cone, cilindro e esfera) a objetos do mundo físico e nomear essas figuras.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA14",
    description:
      "Descrever características de algumas figuras geométricas espaciais (prismas retos, pirâmides, cilindros, cones), relacionando-as com suas planificações.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA15",
    description:
      "Classificar e comparar figuras planas (triângulo, quadrado, retângulo, trapézio e paralelogramo) em relação a seus lados (quantidade, posições relativas e comprimento) e vértices.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA16",
    description:
      "Reconhecer figuras congruentes, usando sobreposição e desenhos em malhas quadriculadas ou triangulares, incluindo o uso de tecnologias digitais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA17",
    description:
      "Reconhecer que o resultado de uma medida depende da unidade de medida utilizada.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA18",
    description:
      "Escolher a unidade de medida e o instrumento mais apropriado para medições de comprimento, tempo e capacidade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA19",
    description:
      "Estimar, medir e comparar comprimentos, utilizando unidades de medida não padronizadas e padronizadas mais usuais (metro, centímetro e milímetro) e diversos instrumentos de medida.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA20",
    description:
      "Estimar e medir capacidade e massa, utilizando unidades de medida não padronizadas e padronizadas mais usuais (litro, mililitro, quilograma, grama e miligrama), reconhecendo-as em leitura de rótulos e embalagens, entre outros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA21",
    description:
      "Comparar, visualmente ou por superposição, áreas de faces de objetos, de figuras planas ou de desenhos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA22",
    description:
      "Ler e registrar medidas e intervalos de tempo, utilizando relógios (analógico e digital) para informar os horários de início e término de realização de uma atividade e sua duração.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA23",
    description:
      "Ler horas em relógios digitais e em relógios analógicos e reconhecer a relação entre hora e minutos e entre minuto e segundos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA24",
    description:
      "Resolver e elaborar problemas que envolvam a comparação e a equivalência de valores monetários do sistema brasileiro em situações de compra, venda e troca.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA25",
    description:
      "Identificar, em eventos familiares aleatórios, todos os resultados possíveis, estimando os que têm maiores ou menores chances de ocorrência.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA26",
    description:
      "Resolver problemas cujos dados estão apresentados em tabelas de dupla entrada, gráficos de barras ou de colunas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA27",
    description:
      "Ler, interpretar e comparar dados apresentados em tabelas de dupla entrada, gráficos de barras ou de colunas, envolvendo resultados de pesquisas significativas, utilizando termos como maior e menor frequência, apropriando-se desse tipo de linguagem para compreender aspectos da realidade sociocultural significativos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03MA28",
    description:
      "Realizar pesquisa envolvendo variáveis categóricas em um universo de até 50 elementos, organizar os dados coletados utilizando listas, tabelas simples ou de dupla entrada e representá-los em gráficos de colunas simples, com e sem uso de tecnologias digitais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA01",
    description:
      "Ler, escrever e ordenar números naturais até a ordem de dezenas de milhar.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA02",
    description:
      "Mostrar, por decomposição e composição, que todo número natural pode ser escrito por meio de adições e multiplicações por potências de dez, para compreender o sistema de numeração decimal e desenvolver estratégias de cálculo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA03",
    description:
      "Resolver e elaborar problemas com números naturais envolvendo adição e subtração, utilizando estratégias diversas, como cálculo, cálculo mental e algoritmos, além de fazer estimativas do resultado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA04",
    description:
      "Utilizar as relações entre adição e subtração, bem como entre multiplicação e divisão, para ampliar as estratégias de cálculo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA05",
    description:
      "Utilizar as propriedades das operações para desenvolver estratégias de cálculo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA06",
    description:
      "Resolver e elaborar problemas envolvendo diferentes significados da multiplicação (adição de parcelas iguais, organização retangular e proporcionalidade), utilizando estratégias diversas, como cálculo por estimativa, cálculo mental e algoritmos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA07",
    description:
      "Resolver e elaborar problemas de divisão cujo divisor tenha no máximo dois algarismos, envolvendo os significados de repartição equitativa e de medida, utilizando estratégias diversas, como cálculo por estimativa, cálculo mental e algoritmos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA08",
    description:
      "Resolver, com o suporte de imagem e/ou material manipulável, problemas simples de contagem, como a determinação do número de agrupamentos possíveis ao se combinar cada elemento de uma coleção com todos os elementos de outra, utilizando estratégias e formas de registro pessoais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA09",
    description:
      "Reconhecer as frações unitárias mais usuais (1/2, 1/3, 1/4, 1/5, 1/10 e 1/100) como unidades de medida menores do que uma unidade, utilizando a reta numérica como recurso.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA10",
    description:
      "Reconhecer que as regras do sistema de numeração decimal podem ser estendidas para a representação decimal de um número racional e relacionar décimos e centésimos com a representação do sistema monetário brasileiro.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA11",
    description:
      "Identificar regularidades em sequências numéricas compostas por múltiplos de um número natural.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA12",
    description:
      "Reconhecer, por meio de investigações, que há grupos de números naturais para os quais as divisões por um determinado número resultam em restos iguais, identificando regularidades.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA13",
    description:
      "Reconhecer, por meio de investigações, utilizando a calculadora quando necessário, as relações inversas entre as operações de adição e de subtração e de multiplicação e de divisão, para aplicá-las na resolução de problemas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA14",
    description:
      "Reconhecer e mostrar, por meio de exemplos, que a relação de igualdade existente entre dois termos permanece quando se adiciona ou se subtrai um mesmo número a cada um desses termos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA15",
    description:
      "Determinar o número desconhecido que torna verdadeira uma igualdade que envolve as operações fundamentais com números naturais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA16",
    description:
      "Descrever deslocamentos e localização de pessoas e de objetos no espaço, por meio de malhas quadriculadas e representações como desenhos, mapas, planta baixa e croquis, empregando termos como direita e esquerda, mudanças de direção e sentido, intersecção, transversais, paralelas e perpendiculares.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA17",
    description:
      "Associar prismas e pirâmides a suas planificações e analisar, nomear e comparar seus atributos, estabelecendo relações entre as representações planas e espaciais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA18",
    description:
      "Reconhecer ângulos retos e não retos em figuras poligonais com o uso de dobraduras, esquadros ou softwares de geometria.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA19",
    description:
      "Reconhecer simetria de reflexão em figuras e em pares de figuras geométricas planas e utilizá-la na construção de figuras congruentes, com o uso de malhas quadriculadas e de softwares de geometria.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA20",
    description:
      "Medir e estimar comprimentos (incluindo perímetros), massas e capacidades, utilizando unidades de medida padronizadas mais usuais, valorizando e respeitando a cultura local.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA21",
    description:
      "Medir, comparar e estimar área de figuras planas desenhadas em malha quadriculada, pela contagem dos quadradinhos ou de metades de quadradinho, reconhecendo que duas figuras com formatos diferentes podem ter a mesma medida de área.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA22",
    description:
      "Ler e registrar medidas e intervalos de tempo em horas, minutos e segundos em situações relacionadas ao seu cotidiano, como informar os horários de início e término de realização de uma tarefa e sua duração.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA23",
    description:
      "Reconhecer temperatura como grandeza e o grau Celsius como unidade de medida a ela associada e utilizá-lo em comparações de temperaturas em diferentes regiões do Brasil ou no exterior ou, ainda, em discussões que envolvam problemas relacionados ao aquecimento global.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA24",
    description:
      "Registrar as temperaturas máxima e mínima diárias, em locais do seu cotidiano, e elaborar gráficos de colunas com as variações diárias da temperatura, utilizando, inclusive, planilhas eletrônicas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA25",
    description:
      "Resolver e elaborar problemas que envolvam situações de compra e venda e formas de pagamento, utilizando termos como troco e desconto, enfatizando o consumo ético, consciente e responsável.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA26",
    description:
      "Identificar, entre eventos aleatórios cotidianos, aqueles que têm maior chance de ocorrência, reconhecendo características de resultados mais prováveis, sem utilizar frações.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA27",
    description:
      "Analisar dados apresentados em tabelas simples ou de dupla entrada e em gráficos de colunas ou pictóricos, com base em informações das diferentes áreas do conhecimento, e produzir texto com a síntese de sua análise.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04MA28",
    description:
      "Realizar pesquisa envolvendo variáveis categóricas e numéricas e organizar dados coletados por meio de tabelas e gráficos de colunas simples ou agrupadas, com e sem uso de tecnologias digitais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA01",
    description:
      "Ler, escrever e ordenar números naturais até a ordem das centenas de milhar com compreensão das principais características do sistema de numeração decimal.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA02",
    description:
      "Ler, escrever e ordenar números racionais na forma decimal com compreensão das principais características do sistema de numeração decimal, utilizando, como recursos, a composição e decomposição e a reta numérica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA03",
    description:
      "Identificar e representar frações (menores e maiores que a unidade), associando-as ao resultado de uma divisão ou à ideia de parte de um todo, utilizando a reta numérica como recurso.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA04",
    description: "Identificar frações equivalentes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA05",
    description:
      "Comparar e ordenar números racionais positivos (representações fracionária e decimal), relacionando-os a pontos na reta numérica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA06",
    description:
      "Associar as representações 10%, 25%, 50%, 75% e 100% respectivamente à décima parte, quarta parte, metade, três quartos e um inteiro, para calcular porcentagens, utilizando estratégias pessoais, cálculo mental e calculadora, em contextos de educação financeira, entre outros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA07",
    description:
      "Resolver e elaborar problemas de adição e subtração com números naturais e com números racionais, cuja representação decimal seja finita, utilizando estratégias diversas, como cálculo por estimativa, cálculo mental e algoritmos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA08",
    description:
      "Resolver e elaborar problemas de multiplicação e divisão com números naturais e com números racionais cuja representação decimal é finita (com multiplicador natural e divisor natural e diferente de zero), utilizando estratégias diversas, como cálculo por estimativa, cálculo mental e algoritmos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA09",
    description:
      "Resolver e elaborar problemas simples de contagem envolvendo o princípio multiplicativo, como a determinação do número de agrupamentos possíveis ao se combinar cada elemento de uma coleção com todos os elementos de outra coleção, por meio de diagramas de árvore ou por tabelas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA10",
    description:
      "Concluir, por meio de investigações, que a relação de igualdade existente entre dois membros permanece ao adicionar, subtrair, multiplicar ou dividir cada um desses membros por um mesmo número, para construir a noção de equivalência.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA11",
    description:
      "Resolver e elaborar problemas cuja conversão em sentença matemática seja uma igualdade com uma operação em que um dos termos é desconhecido.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA12",
    description:
      "Resolver problemas que envolvam variação de proporcionalidade direta entre duas grandezas, para associar a quantidade de um produto ao valor a pagar, alterar as quantidades de ingredientes de receitas, ampliar ou reduzir escala em mapas, entre outros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA13",
    description:
      "Resolver problemas envolvendo a partilha de uma quantidade em duas partes desiguais, tais como dividir uma quantidade em duas partes, de modo que uma seja o dobro da outra, com compreensão da ideia de razão entre as partes e delas com o todo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA14",
    description:
      "Utilizar e compreender diferentes representações para a localização de objetos no plano, como mapas, células em planilhas eletrônicas e coordenadas geográficas, a fim de desenvolver as primeiras noções de coordenadas cartesianas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA15",
    description:
      "Interpretar, descrever e representar a localização ou movimentação de objetos no plano cartesiano (1º quadrante), utilizando coordenadas cartesianas, indicando mudanças de direção e de sentido e giros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA16",
    description:
      "Associar figuras espaciais a suas planificações (prismas, pirâmides, cilindros e cones) e analisar, nomear e comparar seus atributos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA17",
    description:
      "Reconhecer, nomear e comparar polígonos, considerando lados, vértices e ângulos, e desenhá-los, utilizando material de desenho ou tecnologias digitais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA18",
    description:
      "Reconhecer a congruência dos ângulos e a proporcionalidade entre os lados correspondentes de figuras poligonais em situações de ampliação e de redução em malhas quadriculadas e usando tecnologias digitais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA19",
    description:
      "Resolver e elaborar problemas envolvendo medidas das grandezas comprimento, área, massa, tempo, temperatura e capacidade, recorrendo a transformações entre as unidades mais usuais em contextos socioculturais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA20",
    description:
      "Concluir, por meio de investigações, que figuras de perímetros iguais podem ter áreas diferentes e que, também, figuras que têm a mesma área podem ter perímetros diferentes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA21",
    description:
      "Reconhecer volume como grandeza associada a sólidos geométricos e medir volumes por meio de empilhamento de cubos, utilizando, preferencialmente, objetos concretos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA22",
    description:
      "Apresentar todos os possíveis resultados de um experimento aleatório, estimando se esses resultados são igualmente prováveis ou não.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA23",
    description:
      "Determinar a probabilidade de ocorrência de um resultado em eventos aleatórios, quando todos os resultados possíveis têm a mesma chance de ocorrer (equiprováveis).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA24",
    description:
      "Interpretar dados estatísticos apresentados em textos, tabelas e gráficos (colunas ou linhas), referentes a outras áreas do conhecimento ou a outros contextos, como saúde e trânsito, e produzir textos com o objetivo de sintetizar conclusões.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05MA25",
    description:
      "Realizar pesquisa envolvendo variáveis categóricas e numéricas, organizar dados coletados por meio de tabelas, gráficos de colunas, pictóricos e de linhas, com e sem uso de tecnologias digitais, e apresentar texto escrito sobre a finalidade da pesquisa e a síntese dos resultados.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA01",
    description:
      "Comparar, ordenar, ler e escrever números naturais e números racionais cuja representação decimal é finita, fazendo uso da reta numérica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA02",
    description:
      "Reconhecer o sistema de numeração decimal, como o que prevaleceu no mundo ocidental, e destacar semelhanças e diferenças com outros sistemas, de modo a sistematizar suas principais características (base, valor posicional e função do zero), utilizando, inclusive, a composição e decomposição de números naturais e números racionais em sua representação decimal.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA03",
    description:
      "Resolver e elaborar problemas que envolvam cálculos (mentais ou escritos, exatos ou aproximados) com números naturais, por meio de estratégias variadas, com compreensão dos processos neles envolvidos com e sem uso de calculadora.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA04",
    description:
      "Construir algoritmo em linguagem natural e representá-lo por fluxograma que indique a resolução de um problema simples (por exemplo, se um número natural qualquer é par).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA05",
    description:
      "Classificar números naturais em primos e compostos, estabelecer relações entre números, expressas pelos termos “é múltiplo de”, “é divisor de”, “é fator de”, e estabelecer, por meio de investigações, critérios de divisibilidade por 2, 3, 4, 5, 6, 8, 9, 10, 100 e 1000.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA06",
    description:
      "Resolver e elaborar problemas que envolvam as ideias de múltiplo e de divisor.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA07",
    description:
      "Compreender, comparar e ordenar frações associadas às ideias de partes de inteiros e resultado de divisão, identificando frações equivalentes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA08",
    description:
      "Reconhecer que os números racionais positivos podem ser expressos nas formas fracionária e decimal, estabelecer relações entre essas representações, passando de uma representação para outra, e relacioná-los a pontos na reta numérica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA09",
    description:
      "Resolver e elaborar problemas que envolvam o cálculo da fração de uma quantidade e cujo resultado seja um número natural, com e sem uso de calculadora.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA10",
    description:
      "Resolver e elaborar problemas que envolvam adição ou subtração com números racionais positivos na representação fracionária.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA11",
    description:
      "Resolver e elaborar problemas com números racionais positivos na representação decimal, envolvendo as quatro operações fundamentais e a potenciação, por meio de estratégias diversas, utilizando estimativas e arredondamentos para verificar a razoabilidade de respostas, com e sem uso de calculadora.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA12",
    description:
      "Fazer estimativas de quantidades e aproximar números para múltiplos da potência de 10 mais próxima.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA13",
    description:
      "Resolver e elaborar problemas que envolvam porcentagens, com base na ideia de proporcionalidade, sem fazer uso da “regra de três”, utilizando estratégias pessoais, cálculo mental e calculadora, em contextos de educação financeira, entre outros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA14",
    description:
      "Reconhecer que a relação de igualdade matemática não se altera ao adicionar, subtrair, multiplicar ou dividir os seus dois membros por um mesmo número e utilizar essa noção para determinar valores desconhecidos na resolução de problemas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA15",
    description:
      "Resolver e elaborar problemas que envolvam a partilha de uma quantidade em duas partes desiguais, envolvendo relações aditivas e multiplicativas, bem como a razão entre as partes e entre uma das partes e o todo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA16",
    description:
      "Associar pares ordenados de números a pontos do plano cartesiano do 1º quadrante, em situações como a localização dos vértices de um polígono.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA17",
    description:
      "Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides, em função do seu polígono da base, para resolver problemas e desenvolver a percepção espacial.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA18",
    description:
      "Reconhecer, nomear e comparar polígonos, considerando lados, vértices e ângulos, e classificá-los em regulares e não regulares, tanto em suas representações no plano como em faces de poliedros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA19",
    description:
      "Identificar características dos triângulos e classificá-los em relação às medidas dos lados e dos ângulos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA20",
    description:
      "Identificar características dos quadriláteros, classificá-los em relação a lados e a ângulos e reconhecer a inclusão e a intersecção de classes entre eles.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA21",
    description:
      "Construir figuras planas semelhantes em situações de ampliação e de redução, com o uso de malhas quadriculadas, plano cartesiano ou tecnologias digitais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA22",
    description:
      "Utilizar instrumentos, como réguas e esquadros, ou softwares para representações de retas paralelas e perpendiculares e construção de quadriláteros, entre outros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA23",
    description:
      "Construir algoritmo para resolver situações passo a passo (como na construção de dobraduras ou na indicação de deslocamento de um objeto no plano segundo pontos de referência e distâncias fornecidas etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA24",
    description:
      "Resolver e elaborar problemas que envolvam as grandezas comprimento, massa, tempo, temperatura, área (triângulos e retângulos), capacidade e volume (sólidos formados por blocos retangulares), sem uso de fórmulas, inseridos, sempre que possível, em contextos oriundos de situações reais e/ou relacionadas às outras áreas do conhecimento.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA25",
    description:
      "Reconhecer a abertura do ângulo como grandeza associada às figuras geométricas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA26",
    description:
      "Resolver problemas que envolvam a noção de ângulo em diferentes contextos e em situações reais, como ângulo de visão.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA27",
    description:
      "Determinar medidas da abertura de ângulos, por meio de transferidor e/ou tecnologias digitais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA28",
    description:
      "Interpretar, descrever e desenhar plantas baixas simples de residências e vistas aéreas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA29",
    description:
      "Analisar e descrever mudanças que ocorrem no perímetro e na área de um quadrado ao se ampliarem ou reduzirem, igualmente, as medidas de seus lados, para compreender que o perímetro é proporcional à medida do lado, o que não ocorre com a área.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA30",
    description:
      "Calcular a probabilidade de um evento aleatório, expressando-a por número racional (forma fracionária, decimal e percentual) e comparar esse número com a probabilidade obtida por meio de experimentos sucessivos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA31",
    description:
      "Identificar as variáveis e suas frequências e os elementos constitutivos (título, eixos, legendas, fontes e datas) em diferentes tipos de gráfico.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA32",
    description:
      "Interpretar e resolver situações que envolvam dados de pesquisas sobre contextos ambientais, sustentabilidade, trânsito, consumo responsável, entre outros, apresentadas pela mídia em tabelas e em diferentes tipos de gráficos e redigir textos escritos com o objetivo de sintetizar conclusões.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA33",
    description:
      "Planejar e coletar dados de pesquisa referente a práticas sociais escolhidas pelos alunos e fazer uso de planilhas eletrônicas para registro, representação e interpretação das informações, em tabelas, vários tipos de gráficos e texto.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06MA34",
    description:
      "Interpretar e desenvolver fluxogramas simples, identificando as relações entre os objetos representados (por exemplo, posição de cidades considerando as estradas que as unem, hierarquia dos funcionários de uma empresa etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA01",
    description:
      "Resolver e elaborar problemas com números naturais, envolvendo as noções de divisor e de múltiplo, podendo incluir máximo divisor comum ou mínimo múltiplo comum, por meio de estratégias diversas, sem a aplicação de algoritmos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA02",
    description:
      "Resolver e elaborar problemas que envolvam porcentagens, como os que lidam com acréscimos e decréscimos simples, utilizando estratégias pessoais, cálculo mental e calculadora, no contexto de educação financeira, entre outros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA03",
    description:
      "Comparar e ordenar números inteiros em diferentes contextos, incluindo o histórico, associá-los a pontos da reta numérica e utilizá-los em situações que envolvam adição e subtração.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA04",
    description:
      "Resolver e elaborar problemas que envolvam operações com números inteiros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA05",
    description: "Resolver um mesmo problema utilizando diferentes algoritmos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA06",
    description:
      "Reconhecer que as resoluções de um grupo de problemas que têm a mesma estrutura podem ser obtidas utilizando os mesmos procedimentos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA07",
    description:
      "Representar por meio de um fluxograma os passos utilizados para resolver um grupo de problemas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA08",
    description:
      "Comparar e ordenar frações associadas às ideias de partes de inteiros, resultado da divisão, razão e operador.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA09",
    description:
      "Utilizar, na resolução de problemas, a associação entre razão e fração, como a fração 2/3 para expressar a razão de duas partes de uma grandeza para três partes da mesma ou três partes de outra grandeza.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA10",
    description:
      "Comparar e ordenar números racionais em diferentes contextos e associá-los a pontos da reta numérica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA11",
    description:
      "Compreender e utilizar a multiplicação e a divisão de números racionais, a relação entre elas e suas propriedades operatórias.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA12",
    description:
      "Resolver e elaborar problemas que envolvam as operações com números racionais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA13",
    description:
      "Compreender a ideia de variável, representada por letra ou símbolo, para expressar relação entre duas grandezas, diferenciando-a da ideia de incógnita.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA14",
    description:
      "Classificar sequências em recursivas e não recursivas, reconhecendo que o conceito de recursão está presente não apenas na matemática, mas também nas artes e na literatura.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA15",
    description:
      "Utilizar a simbologia algébrica para expressar regularidades encontradas em sequências numéricas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA16",
    description:
      "Reconhecer se duas expressões algébricas obtidas para descrever a regularidade de uma mesma sequência numérica são ou não equivalentes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA17",
    description:
      "Resolver e elaborar problemas que envolvam variação de proporcionalidade direta e de proporcionalidade inversa entre duas grandezas, utilizando sentença algébrica para expressar a relação entre elas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA18",
    description:
      "Resolver e elaborar problemas que possam ser representados por equações polinomiais de 1º grau, redutíveis à forma ax + b = c, fazendo uso das propriedades da igualdade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA19",
    description:
      "Realizar transformações de polígonos representados no plano cartesiano, decorrentes da multiplicação das coordenadas de seus vértices por um número inteiro.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA20",
    description:
      "Reconhecer e representar, no plano cartesiano, o simétrico de figuras em relação aos eixos e à origem.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA21",
    description:
      "Reconhecer e construir figuras obtidas por simetrias de translação, rotação e reflexão, usando instrumentos de desenho ou softwares de geometria dinâmica e vincular esse estudo a representações planas de obras de arte, elementos arquitetônicos, entre outros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA22",
    description:
      "Construir circunferências, utilizando compasso, reconhecê-las como lugar geométrico e utilizá-las para fazer composições artísticas e resolver problemas que envolvam objetos equidistantes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA23",
    description:
      "Verificar relações entre os ângulos formados por retas paralelas cortadas por uma transversal, com e sem uso de softwares de geometria dinâmica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA24",
    description:
      "Construir triângulos, usando régua e compasso, reconhecer a condição de existência do triângulo quanto à medida dos lados e verificar que a soma das medidas dos ângulos internos de um triângulo é 180°.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA25",
    description:
      "Reconhecer a rigidez geométrica dos triângulos e suas aplicações, como na construção de estruturas arquitetônicas (telhados, estruturas metálicas e outras) ou nas artes plásticas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA26",
    description:
      "Descrever, por escrito e por meio de um fluxograma, um algoritmo para a construção de um triângulo qualquer, conhecidas as medidas dos três lados.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA27",
    description:
      "Calcular medidas de ângulos internos de polígonos regulares, sem o uso de fórmulas, e estabelecer relações entre ângulos internos e externos de polígonos, preferencialmente vinculadas à construção de mosaicos e de ladrilhamentos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA28",
    description:
      "Descrever, por escrito e por meio de um fluxograma, um algoritmo para a construção de um polígono regular (como quadrado e triângulo equilátero), conhecida a medida de seu lado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA29",
    description:
      "Resolver e elaborar problemas que envolvam medidas de grandezas inseridos em contextos oriundos de situações cotidianas ou de outras áreas do conhecimento, reconhecendo que toda medida empírica é aproximada.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA30",
    description:
      "Resolver e elaborar problemas de cálculo de medida do volume de blocos retangulares, envolvendo as unidades usuais (metro cúbico, decímetro cúbico e centímetro cúbico).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA31",
    description:
      "Estabelecer expressões de cálculo de área de triângulos e de quadriláteros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA32",
    description:
      "Resolver e elaborar problemas de cálculo de medida de área de figuras planas que podem ser decompostas por quadrados, retângulos e/ou triângulos, utilizando a equivalência entre áreas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA33",
    description:
      "Estabelecer o número π como a razão entre a medida de uma circunferência e seu diâmetro, para compreender e resolver problemas, inclusive os de natureza histórica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA34",
    description:
      "Planejar e realizar experimentos aleatórios ou simulações que envolvem cálculo de probabilidades ou estimativas por meio de frequência de ocorrências.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA35",
    description:
      "Compreender, em contextos significativos, o significado de média estatística como indicador da tendência de uma pesquisa, calcular seu valor e relacioná-lo, intuitivamente, com a amplitude do conjunto de dados.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA36",
    description:
      "Planejar e realizar pesquisa envolvendo tema da realidade social, identificando a necessidade de ser censitária ou de usar amostra, e interpretar os dados para comunicá-los por meio de relatório escrito, tabelas e gráficos, com o apoio de planilhas eletrônicas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07MA37",
    description:
      "Interpretar e analisar dados apresentados em gráfico de setores divulgados pela mídia e compreender quando é possível ou conveniente sua utilização.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA01",
    description:
      "Efetuar cálculos com potências de expoentes inteiros e aplicar esse conhecimento na representação de números em notação científica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA02",
    description:
      "Resolver e elaborar problemas usando a relação entre potenciação e radiciação, para representar uma raiz como potência de expoente fracionário.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA03",
    description:
      "Resolver e elaborar problemas de contagem cuja resolução envolva a aplicação do princípio multiplicativo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA04",
    description:
      "Resolver e elaborar problemas, envolvendo cálculo de porcentagens, incluindo o uso de tecnologias digitais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA05",
    description:
      "Reconhecer e utilizar procedimentos para a obtenção de uma fração geratriz para uma dízima periódica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA06",
    description:
      "Resolver e elaborar problemas que envolvam cálculo do valor numérico de expressões algébricas, utilizando as propriedades das operações.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA07",
    description:
      "Associar uma equação linear de 1º grau com duas incógnitas a uma reta no plano cartesiano.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA08",
    description:
      "Resolver e elaborar problemas relacionados ao seu contexto próximo, que possam ser representados por sistemas de equações de 1º grau com duas incógnitas e interpretá-los, utilizando, inclusive, o plano cartesiano como recurso.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA09",
    description:
      "Resolver e elaborar, com e sem uso de tecnologias, problemas que possam ser representados por equações polinomiais de 2º grau do tipo ax2 = b.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA10",
    description:
      "Identificar a regularidade de uma sequência numérica ou figural não recursiva e construir um algoritmo por meio de um fluxograma que permita indicar os números ou as figuras seguintes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA11",
    description:
      "Identificar a regularidade de uma sequência numérica recursiva e construir um algoritmo por meio de um fluxograma que permita indicar os números seguintes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA12",
    description:
      "Identificar a natureza da variação de duas grandezas, diretamente, inversamente proporcionais ou não proporcionais, expressando a relação existente por meio de sentença algébrica e representá-la no plano cartesiano.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA13",
    description:
      "Resolver e elaborar problemas que envolvam grandezas diretamente ou inversamente proporcionais, por meio de estratégias variadas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA14",
    description:
      "Demonstrar propriedades de quadriláteros por meio da identificação da congruência de triângulos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA15",
    description:
      "Construir, utilizando instrumentos de desenho ou softwares de geometria dinâmica, mediatriz, bissetriz, ângulos de 90°, 60°, 45° e 30° e polígonos regulares.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA16",
    description:
      "Descrever, por escrito e por meio de um fluxograma, um algoritmo para a construção de um hexágono regular de qualquer área, a partir da medida do ângulo central e da utilização de esquadros e compasso.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA17",
    description:
      "Aplicar os conceitos de mediatriz e bissetriz como lugares geométricos na resolução de problemas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA18",
    description:
      "Reconhecer e construir figuras obtidas por composições de transformações geométricas (translação, reflexão e rotação), com o uso de instrumentos de desenho ou de softwares de geometria dinâmica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA19",
    description:
      "Resolver e elaborar problemas que envolvam medidas de área de figuras geométricas, utilizando expressões de cálculo de área (quadriláteros, triângulos e círculos), em situações como determinar medida de terrenos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA20",
    description:
      "Reconhecer a relação entre um litro e um decímetro cúbico e a relação entre litro e metro cúbico, para resolver problemas de cálculo de capacidade de recipientes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA21",
    description:
      "Resolver e elaborar problemas que envolvam o cálculo do volume de recipiente cujo formato é o de um bloco retangular.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA22",
    description:
      "Calcular a probabilidade de eventos, com base na construção do espaço amostral, utilizando o princípio multiplicativo, e reconhecer que a soma das probabilidades de todos os elementos do espaço amostral é igual a 1.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA23",
    description:
      "Avaliar a adequação de diferentes tipos de gráficos para representar um conjunto de dados de uma pesquisa.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA24",
    description:
      "Classificar as frequências de uma variável contínua de uma pesquisa em classes, de modo que resumam os dados de maneira adequada para a tomada de decisões.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA25",
    description:
      "Obter os valores de medidas de tendência central de uma pesquisa estatística (média, moda e mediana) com a compreensão de seus significados e relacioná-los com a dispersão de dados, indicada pela amplitude.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA26",
    description:
      "Selecionar razões, de diferentes naturezas (física, ética ou econômica), que justificam a realização de pesquisas amostrais e não censitárias, e reconhecer que a seleção da amostra pode ser feita de diferentes maneiras (amostra casual simples, sistemática e estratificada).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08MA27",
    description:
      "Planejar e executar pesquisa amostral, selecionando uma técnica de amostragem adequada, e escrever relatório que contenha os gráficos apropriados para representar os conjuntos de dados, destacando aspectos como as medidas de tendência central, a amplitude e as conclusões.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA01",
    description:
      "Reconhecer que, uma vez fixada uma unidade de comprimento, existem segmentos de reta cujo comprimento não é expresso por número racional (como as medidas de diagonais de um polígono e alturas de um triângulo, quando se toma a medida de cada lado como unidade).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA02",
    description:
      "Reconhecer um número irracional como um número real cuja representação decimal é infinita e não periódica, e estimar a localização de alguns deles na reta numérica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA03",
    description:
      "Efetuar cálculos com números reais, inclusive potências com expoentes fracionários.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA04",
    description:
      "Resolver e elaborar problemas com números reais, inclusive em notação científica, envolvendo diferentes operações.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA05",
    description:
      "Resolver e elaborar problemas que envolvam porcentagens, com a ideia de aplicação de percentuais sucessivos e a determinação das taxas percentuais, preferencialmente com o uso de tecnologias digitais, no contexto da educação financeira.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA06",
    description:
      "Compreender as funções como relações de dependência unívoca entre duas variáveis e suas representações numérica, algébrica e gráfica e utilizar esse conceito para analisar situações que envolvam relações funcionais entre duas variáveis.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA07",
    description:
      "Resolver problemas que envolvam a razão entre duas grandezas de espécies diferentes, como velocidade e densidade demográfica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA08",
    description:
      "Resolver e elaborar problemas que envolvam relações de proporcionalidade direta e inversa entre duas ou mais grandezas, inclusive escalas, divisão em partes proporcionais e taxa de variação, em contextos socioculturais, ambientais e de outras áreas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA09",
    description:
      "Compreender os processos de fatoração de expressões algébricas, com base em suas relações com os produtos notáveis, para resolver e elaborar problemas que possam ser representados por equações polinomiais do 2º grau.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA10",
    description:
      "Demonstrar relações simples entre os ângulos formados por retas paralelas cortadas por uma transversal.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA11",
    description:
      "Resolver problemas por meio do estabelecimento de relações entre arcos, ângulos centrais e ângulos inscritos na circunferência, fazendo uso, inclusive, de softwares de geometria dinâmica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA12",
    description:
      "Reconhecer as condições necessárias e suficientes para que dois triângulos sejam semelhantes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA13",
    description:
      "Demonstrar relações métricas do triângulo retângulo, entre elas o teorema de Pitágoras, utilizando, inclusive, a semelhança de triângulos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA14",
    description:
      "Resolver e elaborar problemas de aplicação do teorema de Pitágoras ou das relações de proporcionalidade envolvendo retas paralelas cortadas por secantes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA15",
    description:
      "Descrever, por escrito e por meio de um fluxograma, um algoritmo para a construção de um polígono regular cuja medida do lado é conhecida, utilizando régua e compasso, como também softwares.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA16",
    description:
      "Determinar o ponto médio de um segmento de reta e a distância entre dois pontos quaisquer, dadas as coordenadas desses pontos no plano cartesiano, sem o uso de fórmulas, e utilizar esse conhecimento para calcular, por exemplo, medidas de perímetros e áreas de figuras planas construídas no plano.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA17",
    description:
      "Reconhecer vistas ortogonais de figuras espaciais e aplicar esse conhecimento para desenhar objetos em perspectiva.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA18",
    description:
      "Reconhecer e empregar unidades usadas para expressar medidas muito grandes ou muito pequenas, tais como distância entre planetas e sistemas solares, tamanho de vírus ou de células, capacidade de armazenamento de computadores, entre outros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA19",
    description:
      "Resolver e elaborar problemas que envolvam medidas de volumes de prismas e de cilindros retos, inclusive com uso de expressões de cálculo, em situações cotidianas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA20",
    description:
      "Reconhecer, em experimentos aleatórios, eventos independentes e dependentes e calcular a probabilidade de sua ocorrência, nos dois casos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA21",
    description:
      "Analisar e identificar, em gráficos divulgados pela mídia, os elementos que podem induzir, às vezes propositadamente, erros de leitura, como escalas inapropriadas, legendas não explicitadas corretamente, omissão de informações importantes (fontes e datas), entre outros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA22",
    description:
      "Escolher e construir o gráfico mais adequado (colunas, setores, linhas), com ou sem uso de planilhas eletrônicas, para apresentar um determinado conjunto de dados, destacando aspectos como as medidas de tendência central.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09MA23",
    description:
      "Planejar e executar pesquisa amostral envolvendo tema da realidade social e comunicar os resultados por meio de relatório contendo avaliação de medidas de tendência central e da amplitude, tabelas e gráficos adequados, construídos com o apoio de planilhas eletrônicas.  ",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01CI01",
    description:
      "Comparar características de diferentes materiais presentes em objetos de uso cotidiano, discutindo sua origem, os modos como são descartados e como podem ser usados de forma mais consciente.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01CI02",
    description:
      "Localizar, nomear e representar graficamente (por meio de desenhos) partes do corpo humano e explicar suas funções.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01CI03",
    description:
      "Discutir as razões pelas quais os hábitos de higiene do corpo (lavar as mãos antes de comer, escovar os dentes, limpar os olhos, o nariz e as orelhas etc.) são necessários para a manutenção da saúde.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01CI04",
    description:
      "Comparar características físicas entre os colegas, reconhecendo a diversidade e a importância da valorização, do acolhimento e do respeito às diferenças.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01CI05",
    description:
      "Identificar e nomear diferentes escalas de tempo: os períodos diários (manhã, tarde, noite) e a sucessão de dias, semanas, meses e anos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01CI06",
    description:
      "Selecionar exemplos de como a sucessão de dias e noites orienta o ritmo de atividades diárias de seres humanos e de outros seres vivos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02CI01",
    description:
      "Identificar de que materiais (metais, madeira, vidro etc.) são feitos os objetos que fazem parte da vida cotidiana, como esses objetos são utilizados e com quais materiais eram produzidos no passado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02CI02",
    description:
      "Propor o uso de diferentes materiais para a construção de objetos de uso cotidiano, tendo em vista algumas propriedades desses materiais (flexibilidade, dureza, transparência etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02CI03",
    description:
      "Discutir os cuidados necessários à prevenção de acidentes domésticos (objetos cortantes e inflamáveis, eletricidade, produtos de limpeza, medicamentos etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02CI04",
    description:
      "Descrever características de plantas e animais (tamanho, forma, cor, fase da vida, local onde se desenvolvem etc.) que fazem parte de seu cotidiano e relacioná-las ao ambiente em que eles vivem.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02CI05",
    description:
      "Investigar a importância da água e da luz para a manutenção da vida de plantas em geral.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02CI06",
    description:
      "Identificar as principais partes de uma planta (raiz, caule, folhas, flores e frutos) e a função desempenhada por cada uma delas, e analisar as relações entre as plantas, o ambiente e os demais seres vivos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02CI07",
    description:
      "Descrever as posições do Sol em diversos horários do dia e associá-las ao tamanho da sombra projetada.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02CI08",
    description:
      "Comparar o efeito da radiação solar (aquecimento e reflexão) em diferentes tipos de superfície (água, areia, solo, superfícies escura, clara e metálica etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03CI01",
    description:
      "Produzir diferentes sons a partir da vibração de variados objetos e identificar variáveis que influem nesse fenômeno.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03CI02",
    description:
      "Experimentar e relatar o que ocorre com a passagem da luz através de objetos transparentes (copos, janelas de vidro, lentes, prismas, água etc.), no contato com superfícies polidas (espelhos) e na intersecção com objetos opacos (paredes, pratos, pessoas e outros objetos de uso cotidiano).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03CI03",
    description:
      "Discutir hábitos necessários para a manutenção da saúde auditiva e visual considerando as condições do ambiente em termos de som e luz.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03CI04",
    description:
      "Identificar características sobre o modo de vida (o que comem, como se reproduzem, como se deslocam etc.) dos animais mais comuns no ambiente próximo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03CI05",
    description:
      "Descrever e comunicar as alterações que ocorrem desde o nascimento em animais de diferentes meios terrestres ou aquáticos, inclusive o homem.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03CI06",
    description:
      "Comparar alguns animais e organizar grupos com base em características externas comuns (presença de penas, pelos, escamas, bico, garras, antenas, patas etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03CI07",
    description:
      "Identificar características da Terra (como seu formato esférico, a presença de água, solo etc.), com base na observação, manipulação e comparação de diferentes formas de representação do planeta (mapas, globos, fotografias etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03CI08",
    description:
      "Observar, identificar e registrar os períodos diários (dia e/ou noite) em que o Sol, demais estrelas, Lua e planetas estão visíveis no céu.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03CI09",
    description:
      "Comparar diferentes amostras de solo do entorno da escola com base em características como cor, textura, cheiro, tamanho das partículas, permeabilidade etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03CI10",
    description:
      "Identificar os diferentes usos do solo (plantação e extração de materiais, dentre outras possibilidades), reconhecendo a importância do solo para a agricultura e para a vida.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04CI01",
    description:
      "Identificar misturas na vida diária, com base em suas propriedades físicas observáveis, reconhecendo sua composição.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04CI02",
    description:
      "Testar e relatar transformações nos materiais do dia a dia quando expostos a diferentes condições (aquecimento, resfriamento, luz e umidade).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04CI03",
    description:
      "Concluir que algumas mudanças causadas por aquecimento ou resfriamento são reversíveis (como as mudanças de estado físico da água) e outras não (como o cozimento do ovo, a queima do papel etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04CI04",
    description:
      "Analisar e construir cadeias alimentares simples, reconhecendo a posição ocupada pelos seres vivos nessas cadeias e o papel do Sol como fonte primária de energia na produção de alimentos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04CI05",
    description:
      "Descrever e destacar semelhanças e diferenças entre o ciclo da matéria e o fluxo de energia entre os componentes vivos e não vivos de um ecossistema.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04CI06",
    description:
      "Relacionar a participação de fungos e bactérias no processo de decomposição, reconhecendo a importância ambiental desse processo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04CI07",
    description:
      "Verificar a participação de microrganismos na produção de alimentos, combustíveis, medicamentos, entre outros.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04CI08",
    description:
      "Propor, a partir do conhecimento das formas de transmissão de alguns microrganismos (vírus, bactérias e protozoários), atitudes e medidas adequadas para prevenção de doenças a eles associadas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04CI09",
    description:
      "Identificar os pontos cardeais, com base no registro de diferentes posições relativas do Sol e da sombra de uma vara (gnômon).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04CI10",
    description:
      "Comparar as indicações dos pontos cardeais resultantes da observação das sombras de uma vara (gnômon) com aquelas obtidas por meio de uma bússola.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04CI11",
    description:
      "Associar os movimentos cíclicos da Lua e da Terra a períodos de tempo regulares e ao uso desse conhecimento para a construção de calendários em diferentes culturas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05CI01",
    description:
      "Explorar fenômenos da vida cotidiana que evidenciem propriedades físicas dos materiais – como densidade, condutibilidade térmica e elétrica, respostas a forças magnéticas, solubilidade, respostas a forças mecânicas (dureza, elasticidade etc.), entre outras.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05CI02",
    description:
      "Aplicar os conhecimentos sobre as mudanças de estado físico da água para explicar o ciclo hidrológico e analisar suas implicações na agricultura, no clima, na geração de energia elétrica, no provimento de água potável e no equilíbrio dos ecossistemas regionais (ou locais).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05CI03",
    description:
      "Selecionar argumentos que justifiquem a importância da cobertura vegetal para a manutenção do ciclo da água, a conservação dos solos, dos cursos de água e da qualidade do ar atmosférico.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05CI04",
    description:
      "Identificar os principais usos da água e de outros materiais nas atividades cotidianas para discutir e propor formas sustentáveis de utilização desses recursos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05CI05",
    description:
      "Construir propostas coletivas para um consumo mais consciente e criar soluções tecnológicas para o descarte adequado e a reutilização ou reciclagem de materiais consumidos na escola e/ou na vida cotidiana.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05CI06",
    description:
      "Selecionar argumentos que justifiquem por que os sistemas digestório e respiratório são considerados corresponsáveis pelo processo de nutrição do organismo, com base na identificação das funções desses sistemas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05CI07",
    description:
      "Justificar a relação entre o funcionamento do sistema circulatório, a distribuição dos nutrientes pelo organismo e a eliminação dos resíduos produzidos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05CI08",
    description:
      "Organizar um cardápio equilibrado com base nas características dos grupos alimentares (nutrientes e calorias) e nas necessidades individuais (atividades realizadas, idade, sexo etc.) para a manutenção da saúde do organismo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05CI09",
    description:
      "Discutir a ocorrência de distúrbios nutricionais (como obesidade, subnutrição etc.) entre crianças e jovens a partir da análise de seus hábitos (tipos e quantidade de alimento ingerido, prática de atividade física etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05CI10",
    description:
      "Identificar algumas constelações no céu, com o apoio de recursos (como mapas celestes e aplicativos digitais, entre outros), e os períodos do ano em que elas são visíveis no início da noite.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05CI11",
    description:
      "Associar o movimento diário do Sol e das demais estrelas no céu ao movimento de rotação da Terra.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05CI12",
    description:
      "Concluir sobre a periodicidade das fases da Lua, com base na observação e no registro das formas aparentes da Lua no céu ao longo de, pelo menos, dois meses.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05CI13",
    description:
      "Projetar e construir dispositivos para observação à distância (luneta, periscópio etc.), para observação ampliada de objetos (lupas, microscópios) ou para registro de imagens (máquinas fotográficas) e discutir usos sociais desses dispositivos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06CI01",
    description:
      "Classificar como homogênea ou heterogênea a mistura de dois ou mais materiais (água e sal, água e óleo, água e areia etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06CI02",
    description:
      "Identificar evidências de transformações químicas a partir do resultado de misturas de materiais que originam produtos diferentes dos que foram misturados (mistura de ingredientes para fazer um bolo, mistura de vinagre com bicarbonato de sódio etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06CI03",
    description:
      "Selecionar métodos mais adequados para a separação de diferentes sistemas heterogêneos a partir da identificação de processos de separação de materiais (como a produção de sal de cozinha, a destilação de petróleo, entre outros).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06CI04",
    description:
      "Associar a produção de medicamentos e outros materiais sintéticos ao desenvolvimento científico e tecnológico, reconhecendo benefícios e avaliando impactos socioambientais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06CI05",
    description:
      "Explicar a organização básica das células e seu papel como unidade estrutural e funcional dos seres vivos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06CI06",
    description:
      "Concluir, com base na análise de ilustrações e/ou modelos (físicos ou digitais), que os organismos são um complexo arranjo de sistemas com diferentes níveis de organização.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06CI07",
    description:
      "Justificar o papel do sistema nervoso na coordenação das ações motoras e sensoriais do corpo, com base na análise de suas estruturas básicas e respectivas funções.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06CI08",
    description:
      "Explicar a importância da visão (captação e interpretação das imagens) na interação do organismo com o meio e, com base no funcionamento do olho humano, selecionar lentes adequadas para a correção de diferentes defeitos da visão.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06CI09",
    description:
      "Deduzir que a estrutura, a sustentação e a movimentação dos animais resultam da interação entre os sistemas muscular, ósseo e nervoso.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06CI10",
    description:
      "Explicar como o funcionamento do sistema nervoso pode ser afetado por substâncias psicoativas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06CI11",
    description:
      "Identificar as diferentes camadas que estruturam o planeta Terra (da estrutura interna à atmosfera) e suas principais características.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06CI12",
    description:
      "Identificar diferentes tipos de rocha, relacionando a formação de fósseis a rochas sedimentares em diferentes períodos geológicos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06CI13",
    description:
      "Selecionar argumentos e evidências que demonstrem a esfericidade da Terra.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06CI14",
    description:
      "Inferir que as mudanças na sombra de uma vara (gnômon) ao longo do dia em diferentes períodos do ano são uma evidência dos movimentos relativos entre a Terra e o Sol, que podem ser explicados por meio dos movimentos de rotação e translação da Terra e da inclinação de seu eixo de rotação em relação ao plano de sua órbita em torno do Sol.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07CI01",
    description:
      "Discutir a aplicação, ao longo da história, das máquinas simples e propor soluções e invenções para a realização de tarefas mecânicas cotidianas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07CI02",
    description:
      "Diferenciar temperatura, calor e sensação térmica nas diferentes situações de equilíbrio termodinâmico cotidianas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07CI03",
    description:
      "Utilizar o conhecimento das formas de propagação do calor para justificar a utilização de determinados materiais (condutores e isolantes) na vida cotidiana, explicar o princípio de funcionamento de alguns equipamentos (garrafa térmica, coletor solar etc.) e/ou construir soluções tecnológicas a partir desse conhecimento.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07CI04",
    description:
      "Avaliar o papel do equilíbrio termodinâmico para a manutenção da vida na Terra, para o funcionamento de máquinas térmicas e em outras situações cotidianas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07CI05",
    description:
      "Discutir o uso de diferentes tipos de combustível e máquinas térmicas ao longo do tempo, para avaliar avanços, questões econômicas e problemas socioambientais causados pela produção e uso desses materiais e máquinas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07CI06",
    description:
      "Discutir e avaliar mudanças econômicas, culturais e sociais, tanto na vida cotidiana quanto no mundo do trabalho, decorrentes do desenvolvimento de novos materiais e tecnologias (como automação e informatização).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07CI07",
    description:
      "Caracterizar os principais ecossistemas brasileiros quanto à paisagem, à quantidade de água, ao tipo de solo, à disponibilidade de luz solar, à temperatura etc., correlacionando essas características à flora e fauna específicas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07CI08",
    description:
      "Avaliar como os impactos provocados por catástrofes naturais ou mudanças nos componentes físicos, biológicos ou sociais de um ecossistema afetam suas populações, podendo ameaçar ou provocar a extinção de espécies, alteração de hábitos, migração etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07CI09",
    description:
      "Interpretar as condições de saúde da comunidade, cidade ou estado, com base na análise e comparação de indicadores de saúde (como taxa de mortalidade infantil, cobertura de saneamento básico e incidência de doenças de veiculação hídrica, atmosférica entre outras) e dos resultados de políticas públicas destinadas à saúde.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07CI10",
    description:
      "Argumentar sobre a importância da vacinação para a saúde pública, com base em informações sobre a maneira como a vacina atua no organismo e o papel histórico da vacinação para a manutenção da saúde individual e coletiva e para a erradicação de doenças.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07CI11",
    description:
      "Analisar historicamente o uso da tecnologia, incluindo a digital, nas diferentes dimensões da vida humana, considerando indicadores ambientais e de qualidade de vida.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07CI12",
    description:
      "Demonstrar que o ar é uma mistura de gases, identificando sua composição, e discutir fenômenos naturais ou antrópicos que podem alterar essa composição.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07CI13",
    description:
      "Descrever o mecanismo natural do efeito estufa, seu papel fundamental para o desenvolvimento da vida na Terra, discutir as ações humanas responsáveis pelo seu aumento artificial (queima dos combustíveis fósseis, desmatamento, queimadas etc.) e selecionar e implementar propostas para a reversão ou controle desse quadro.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07CI14",
    description:
      "Justificar a importância da camada de ozônio para a vida na Terra, identificando os fatores que aumentam ou diminuem sua presença na atmosfera, e discutir propostas individuais e coletivas para sua preservação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07CI15",
    description:
      "Interpretar fenômenos naturais (como vulcões, terremotos e tsunamis) e justificar a rara ocorrência desses fenômenos no Brasil, com base no modelo das placas tectônicas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07CI16",
    description:
      "Justificar o formato das costas brasileira e africana com base na teoria da deriva dos continentes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08CI01",
    description:
      "Identificar e classificar diferentes fontes (renováveis e não renováveis) e tipos de energia utilizados em residências, comunidades ou cidades.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08CI02",
    description:
      "Construir circuitos elétricos com pilha/bateria, fios e lâmpada ou outros dispositivos e compará-los a circuitos elétricos residenciais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08CI03",
    description:
      "Classificar equipamentos elétricos residenciais (chuveiro, ferro, lâmpadas, TV, rádio, geladeira etc.) de acordo com o tipo de transformação de energia (da energia elétrica para a térmica, luminosa, sonora e mecânica, por exemplo).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08CI04",
    description:
      "Calcular o consumo de eletrodomésticos a partir dos dados de potência (descritos no próprio equipamento) e tempo médio de uso para avaliar o impacto de cada equipamento no consumo doméstico mensal.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08CI05",
    description:
      "Propor ações coletivas para otimizar o uso de energia elétrica em sua escola e/ou comunidade, com base na seleção de equipamentos segundo critérios de sustentabilidade (consumo de energia e eficiência energética) e hábitos de consumo responsável.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08CI06",
    description:
      "Discutir e avaliar usinas de geração de energia elétrica (termelétricas, hidrelétricas, eólicas etc.), suas semelhanças e diferenças, seus impactos socioambientais, e como essa energia chega e é usada em sua cidade, comunidade, casa ou escola.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08CI07",
    description:
      "Comparar diferentes processos reprodutivos em plantas e animais em relação aos mecanismos adaptativos e evolutivos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08CI08",
    description:
      "Analisar e explicar as transformações que ocorrem na puberdade considerando a atuação dos hormônios sexuais e do sistema nervoso.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08CI09",
    description:
      "Comparar o modo de ação e a eficácia dos diversos métodos contraceptivos e justificar a necessidade de compartilhar a responsabilidade na escolha e na utilização do método mais adequado à prevenção da gravidez precoce e indesejada e de Doenças Sexualmente Transmissíveis (DST).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08CI10",
    description:
      "Identificar os principais sintomas, modos de transmissão e tratamento de algumas DST (com ênfase na AIDS), e discutir estratégias e métodos de prevenção.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08CI11",
    description:
      "Selecionar argumentos que evidenciem as múltiplas dimensões da sexualidade humana (biológica, sociocultural, afetiva e ética).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08CI12",
    description:
      "Justificar, por meio da construção de modelos e da observação da Lua no céu, a ocorrência das fases da Lua e dos eclipses, com base nas posições relativas entre Sol, Terra e Lua.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08CI13",
    description:
      "Representar os movimentos de rotação e translação da Terra e analisar o papel da inclinação do eixo de rotação da Terra em relação à sua órbita na ocorrência das estações do ano, com a utilização de modelos tridimensionais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08CI14",
    description:
      "Relacionar climas regionais aos padrões de circulação atmosférica e oceânica e ao aquecimento desigual causado pela forma e pelos movimentos da Terra.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08CI15",
    description:
      "Identificar as principais variáveis envolvidas na previsão do tempo e simular situações nas quais elas possam ser medidas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08CI16",
    description:
      "Discutir iniciativas que contribuam para restabelecer o equilíbrio ambiental a partir da identificação de alterações climáticas regionais e globais provocadas pela intervenção humana.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09CI01",
    description:
      "Investigar as mudanças de estado físico da matéria e explicar essas transformações com base no modelo de constituição submicroscópica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09CI02",
    description:
      "Comparar quantidades de reagentes e produtos envolvidos em transformações químicas, estabelecendo a proporção entre as suas massas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09CI03",
    description:
      "Identificar modelos que descrevem a estrutura da matéria (constituição do átomo e composição de moléculas simples) e reconhecer sua evolução histórica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09CI04",
    description:
      "Planejar e executar experimentos que evidenciem que todas as cores de luz podem ser formadas pela composição das três cores primárias da luz e que a cor de um objeto está relacionada também à cor da luz que o ilumina.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09CI05",
    description:
      "Investigar os principais mecanismos envolvidos na transmissão e recepção de imagem e som que revolucionaram os sistemas de comunicação humana.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09CI06",
    description:
      "Classificar as radiações eletromagnéticas por suas frequências, fontes e aplicações, discutindo e avaliando as implicações de seu uso em controle remoto, telefone celular, raio X, forno de micro-ondas, fotocélulas etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09CI07",
    description:
      "Discutir o papel do avanço tecnológico na aplicação das radiações na medicina diagnóstica (raio X, ultrassom, ressonância nuclear magnética) e no tratamento de doenças (radioterapia, cirurgia ótica a laser, infravermelho, ultravioleta etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09CI08",
    description:
      "Associar os gametas à transmissão das características hereditárias, estabelecendo relações entre ancestrais e descendentes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09CI09",
    description:
      "Discutir as ideias de Mendel sobre hereditariedade (fatores hereditários, segregação, gametas, fecundação), considerando-as para resolver problemas envolvendo a transmissão de características hereditárias em diferentes organismos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09CI10",
    description:
      "Comparar as ideias evolucionistas de Lamarck e Darwin apresentadas em textos científicos e históricos, identificando semelhanças e diferenças entre essas ideias e sua importância para explicar a diversidade biológica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09CI11",
    description:
      "Discutir a evolução e a diversidade das espécies com base na atuação da seleção natural sobre as variantes de uma mesma espécie, resultantes de processo reprodutivo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09CI12",
    description:
      "Justificar a importância das unidades de conservação para a preservação da biodiversidade e do patrimônio nacional, considerando os diferentes tipos de unidades (parques, reservas e florestas nacionais), as populações humanas e as atividades a eles relacionados.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09CI13",
    description:
      "Propor iniciativas individuais e coletivas para a solução de problemas ambientais da cidade ou da comunidade, com base na análise de ações de consumo consciente e de sustentabilidade bem-sucedidas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09CI14",
    description:
      "Descrever a composição e a estrutura do Sistema Solar (Sol, planetas rochosos, planetas gigantes gasosos e corpos menores), assim como a localização do Sistema Solar na nossa Galáxia (a Via Láctea) e dela no Universo (apenas uma galáxia dentre bilhões).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09CI15",
    description:
      "Relacionar diferentes leituras do céu e explicações sobre a origem da Terra, do Sol ou do Sistema Solar às necessidades de distintas culturas (agricultura, caça, mito, orientação espacial e temporal etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09CI16",
    description:
      "Selecionar argumentos sobre a viabilidade da sobrevivência humana fora da Terra, com base nas condições necessárias à vida, nas características dos planetas e nas distâncias e nos tempos envolvidos em viagens interplanetárias e interestelares.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09CI17",
    description:
      "Analisar o ciclo evolutivo do Sol (nascimento, vida e morte) baseado no conhecimento das etapas de evolução de estrelas de diferentes dimensões e os efeitos desse processo no nosso planeta.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01GE01",
    description:
      "Descrever características observadas de seus lugares de vivência (moradia, escola etc.) e identificar semelhanças e diferenças entre esses lugares.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01GE02",
    description:
      "Identificar semelhanças e diferenças entre jogos e brincadeiras de diferentes épocas e lugares.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01GE03",
    description:
      "Identificar e relatar semelhanças e diferenças de usos do espaço público (praças, parques) para o lazer e diferentes manifestações.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01GE04",
    description:
      "Discutir e elaborar, coletivamente, regras de convívio em diferentes espaços (sala de aula, escola etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01GE05",
    description:
      "Observar e descrever ritmos naturais (dia e noite, variação de temperatura e umidade etc.) em diferentes escalas espaciais e temporais, comparando a sua realidade com outras.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01GE06",
    description:
      "Descrever e comparar diferentes tipos de moradia ou objetos de uso cotidiano (brinquedos, roupas, mobiliários), considerando técnicas e materiais utilizados em sua produção.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01GE07",
    description:
      "Descrever atividades de trabalho relacionadas com o dia a dia da sua comunidade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01GE08",
    description:
      "Criar mapas mentais e desenhos com base em itinerários, contos literários, histórias inventadas e brincadeiras.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01GE09",
    description:
      "Elaborar e utilizar mapas simples para localizar elementos do local de vivência, considerando referenciais espaciais (frente e atrás, esquerda e direita, em cima e embaixo, dentro e fora) e tendo o corpo como referência.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01GE10",
    description:
      "Descrever características de seus lugares de vivência relacionadas aos ritmos da natureza (chuva, vento, calor etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01GE11",
    description:
      "Associar mudanças de vestuário e hábitos alimentares em sua comunidade ao longo do ano, decorrentes da variação de temperatura e umidade no ambiente.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02GE01",
    description:
      "Descrever a história das migrações no bairro ou comunidade em que vive.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02GE02",
    description:
      "Comparar costumes e tradições de diferentes populações inseridas no bairro ou comunidade em que vive, reconhecendo a importância do respeito às diferenças.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02GE03",
    description:
      "Comparar diferentes meios de transporte e de comunicação, indicando o seu papel na conexão entre lugares, e discutir os riscos para a vida e para o ambiente e seu uso responsável.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02GE04",
    description:
      "Reconhecer semelhanças e diferenças nos hábitos, nas relações com a natureza e no modo de viver de pessoas em diferentes lugares.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02GE05",
    description:
      "Analisar mudanças e permanências, comparando imagens de um mesmo lugar em diferentes tempos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02GE06",
    description:
      "Relacionar o dia e a noite a diferentes tipos de atividades sociais (horário escolar, comercial, sono etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02GE07",
    description:
      "Descrever as atividades extrativas (minerais, agropecuárias e industriais) de diferentes lugares, identificando os impactos ambientais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02GE08",
    description:
      "Identificar e elaborar diferentes formas de representação (desenhos, mapas mentais, maquetes) para representar componentes da paisagem dos lugares de vivência.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02GE09",
    description:
      "Identificar objetos e lugares de vivência (escola e moradia) em imagens aéreas e mapas (visão vertical) e fotografias (visão oblíqua).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02GE10",
    description:
      "Aplicar princípios de localização e posição de objetos (referenciais espaciais, como frente e atrás, esquerda e direita, em cima e embaixo, dentro e fora) por meio de representações espaciais da sala de aula e da escola.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02GE11",
    description:
      "Reconhecer a importância do solo e da água para a vida, identificando seus diferentes usos (plantação e extração de materiais, entre outras possibilidades) e os impactos desses usos no cotidiano da cidade e do campo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03GE01",
    description:
      "Identificar e comparar aspectos culturais dos grupos sociais de seus lugares de vivência, seja na cidade, seja no campo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03GE02",
    description:
      "Identificar, em seus lugares de vivência, marcas de contribuição cultural e econômica de grupos de diferentes origens.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03GE03",
    description:
      "Reconhecer os diferentes modos de vida de povos e comunidades tradicionais em distintos lugares.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03GE04",
    description:
      "Explicar como os processos naturais e históricos atuam na produção e na mudança das paisagens naturais e antrópicas nos seus lugares de vivência, comparando-os a outros lugares.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03GE05",
    description:
      "Identificar alimentos, minerais e outros produtos cultivados e extraídos da natureza, comparando as atividades de trabalho em diferentes lugares.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03GE06",
    description:
      "Identificar e interpretar imagens bidimensionais e tridimensionais em diferentes tipos de representação cartográfica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03GE07",
    description:
      "Reconhecer e elaborar legendas com símbolos de diversos tipos de representações em diferentes escalas cartográficas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03GE08",
    description:
      "Relacionar a produção de lixo doméstico ou da escola aos problemas causados pelo consumo excessivo e construir propostas para o consumo consciente, considerando a ampliação de hábitos de redução, reúso e reciclagem/ descarte de materiais consumidos em casa, na escola e/ou no entorno.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03GE09",
    description:
      "Investigar os usos dos recursos naturais, com destaque para os usos da água em atividades cotidianas (alimentação, higiene, cultivo de plantas etc.), e discutir os problemas ambientais provocados por esses usos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03GE10",
    description:
      "Identificar os cuidados necessários para utilização da água na agricultura e na geração de energia de modo a garantir a manutenção do provimento de água potável.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03GE11",
    description:
      "Comparar impactos das atividades econômicas urbanas e rurais sobre o ambiente físico natural, assim como os riscos provenientes do uso de ferramentas e máquinas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04GE01",
    description:
      "Selecionar, em seus lugares de vivência e em suas histórias familiares e/ou da comunidade, elementos de distintas culturas (indígenas, afro-brasileiras, de outras regiões do país, latino-americanas, europeias, asiáticas etc.), valorizando o que é próprio em cada uma delas e sua contribuição para a formação da cultura local, regional e brasileira.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04GE02",
    description:
      "Descrever processos migratórios e suas contribuições para a formação da sociedade brasileira.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04GE03",
    description:
      "Distinguir funções e papéis dos órgãos do poder público municipal e canais de participação social na gestão do Município, incluindo a Câmara de Vereadores e Conselhos Municipais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04GE04",
    description:
      "Reconhecer especificidades e analisar a interdependência do campo e da cidade, considerando fluxos econômicos, de informações, de ideias e de pessoas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04GE05",
    description:
      "Distinguir unidades político-administrativas oficiais nacionais (Distrito, Município, Unidade da Federação e grande região), suas fronteiras e sua hierarquia, localizando seus lugares de vivência.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04GE06",
    description:
      "Identificar e descrever territórios étnico-culturais existentes no Brasil, tais como terras indígenas e de comunidades remanescentes de quilombos, reconhecendo a legitimidade da demarcação desses territórios.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04GE07",
    description:
      "Comparar as características do trabalho no campo e na cidade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04GE08",
    description:
      "Descrever e discutir o processo de produção (transformação de matérias-primas), circulação e consumo de diferentes produtos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04GE09",
    description:
      "Utilizar as direções cardeais na localização de componentes físicos e humanos nas paisagens rurais e urbanas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04GE10",
    description:
      "Comparar tipos variados de mapas, identificando suas características, elaboradores, finalidades, diferenças e semelhanças.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04GE11",
    description:
      "Identificar as características das paisagens naturais e antrópicas (relevo, cobertura vegetal, rios etc.) no ambiente em que vive, bem como a ação humana na conservação ou degradação dessas áreas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05GE01",
    description:
      "Descrever e analisar dinâmicas populacionais na Unidade da Federação em que vive, estabelecendo relações entre migrações e condições de infraestrutura.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05GE02",
    description:
      "Identificar diferenças étnico-raciais e étnico-culturais e desigualdades sociais entre grupos em diferentes territórios.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05GE03",
    description:
      "Identificar as formas e funções das cidades e analisar as mudanças sociais, econômicas e ambientais provocadas pelo seu crescimento.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05GE04",
    description:
      "Reconhecer as características da cidade e analisar as interações entre a cidade e o campo e entre cidades na rede urbana.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05GE05",
    description:
      "Identificar e comparar as mudanças dos tipos de trabalho e desenvolvimento tecnológico na agropecuária, na indústria, no comércio e nos serviços.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05GE06",
    description:
      "Identificar e comparar transformações dos meios de transporte e de comunicação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05GE07",
    description:
      "Identificar os diferentes tipos de energia utilizados na produção industrial, agrícola e extrativa e no cotidiano das populações.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05GE08",
    description:
      "Analisar transformações de paisagens nas cidades, comparando sequência de fotografias, fotografias aéreas e imagens de satélite de épocas diferentes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05GE09",
    description:
      "Estabelecer conexões e hierarquias entre diferentes cidades, utilizando mapas temáticos e representações gráficas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05GE10",
    description:
      "Reconhecer e comparar atributos da qualidade ambiental e algumas formas de poluição dos cursos de água e dos oceanos (esgotos, efluentes industriais, marés negras etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05GE11",
    description:
      "Identificar e descrever problemas ambientais que ocorrem no entorno da escola e da residência (lixões, indústrias poluentes, destruição do patrimônio histórico etc.), propondo soluções (inclusive tecnológicas) para esses problemas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05GE12",
    description:
      "Identificar órgãos do poder público e canais de participação social responsáveis por buscar soluções para a melhoria da qualidade de vida (em áreas como meio ambiente, mobilidade, moradia e direito à cidade) e discutir as propostas implementadas por esses órgãos que afetam a comunidade em que vive.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06GE01",
    description:
      "Comparar modificações das paisagens nos lugares de vivência e os usos desses lugares em diferentes tempos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06GE02",
    description:
      "Analisar modificações de paisagens por diferentes tipos de sociedade, com destaque para os povos originários.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06GE03",
    description:
      "Descrever os movimentos do planeta e sua relação com a circulação geral da atmosfera, o tempo atmosférico e os padrões climáticos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06GE04",
    description:
      "Descrever o ciclo da água, comparando o escoamento superficial no ambiente urbano e rural, reconhecendo os principais componentes da morfologia das bacias e das redes hidrográficas e a sua localização no modelado da superfície terrestre e da cobertura vegetal.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06GE05",
    description:
      "Relacionar padrões climáticos, tipos de solo, relevo e formações vegetais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06GE06",
    description:
      "Identificar as características das paisagens transformadas pelo trabalho humano a partir do desenvolvimento da agropecuária e do processo de industrialização.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06GE07",
    description:
      "Explicar as mudanças na interação humana com a natureza a partir do surgimento das cidades.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06GE08",
    description:
      "Medir distâncias na superfície pelas escalas gráficas e numéricas dos mapas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06GE09",
    description:
      "Elaborar modelos tridimensionais, blocos-diagramas e perfis topográficos e de vegetação, visando à representação de elementos e estruturas da superfície terrestre.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06GE10",
    description:
      "Explicar as diferentes formas de uso do solo (rotação de terras, terraceamento, aterros etc.) e de apropriação dos recursos hídricos (sistema de irrigação, tratamento e redes de distribuição), bem como suas vantagens e desvantagens em diferentes épocas e lugares.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06GE11",
    description:
      "Analisar distintas interações das sociedades com a natureza, com base na distribuição dos componentes físico-naturais, incluindo as transformações da biodiversidade local e do mundo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06GE12",
    description:
      "Identificar o consumo dos recursos hídricos e o uso das principais bacias hidrográficas no Brasil e no mundo, enfatizando as transformações nos ambientes urbanos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06GE13",
    description:
      "Analisar consequências, vantagens e desvantagens das práticas humanas na dinâmica climática (ilha de calor etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07GE01",
    description:
      "Avaliar, por meio de exemplos extraídos dos meios de comunicação, ideias e estereótipos acerca das paisagens e da formação territorial do Brasil.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07GE02",
    description:
      "Analisar a influência dos fluxos econômicos e populacionais na formação socioeconômica e territorial do Brasil, compreendendo os conflitos e as tensões históricas e contemporâneas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07GE03",
    description:
      "Selecionar argumentos que reconheçam as territorialidades dos povos indígenas originários, das comunidades remanescentes de quilombos, de povos das florestas e do cerrado, de ribeirinhos e caiçaras, entre outros grupos sociais do campo e da cidade, como direitos legais dessas comunidades.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07GE04",
    description:
      "Analisar a distribuição territorial da população brasileira, considerando a diversidade étnico-cultural (indígena, africana, europeia e asiática), assim como aspectos de renda, sexo e idade nas regiões brasileiras.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07GE05",
    description:
      "Analisar fatos e situações representativas das alterações ocorridas entre o período mercantilista e o advento do capitalismo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07GE06",
    description:
      "Discutir em que medida a produção, a circulação e o consumo de mercadorias provocam impactos ambientais, assim como influem na distribuição de riquezas, em diferentes lugares.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07GE07",
    description:
      "Analisar a influência e o papel das redes de transporte e comunicação na configuração do território brasileiro.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07GE08",
    description:
      "Estabelecer relações entre os processos de industrialização e inovação tecnológica com as transformações socioeconômicas do território brasileiro.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07GE09",
    description:
      "Interpretar e elaborar mapas temáticos e históricos, inclusive utilizando tecnologias digitais, com informações demográficas e econômicas do Brasil (cartogramas), identificando padrões espaciais, regionalizações e analogias espaciais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07GE10",
    description:
      "Elaborar e interpretar gráficos de barras, gráficos de setores e histogramas, com base em dados socioeconômicos das regiões brasileiras.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07GE11",
    description:
      "Caracterizar dinâmicas dos componentes físico-naturais no território nacional, bem como sua distribuição e biodiversidade (Florestas Tropicais, Cerrados, Caatingas, Campos Sulinos e Matas de Araucária).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07GE12",
    description:
      "Comparar unidades de conservação existentes no Município de residência e em outras localidades brasileiras, com base na organização do Sistema Nacional de Unidades de Conservação (SNUC).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE01",
    description:
      "Descrever as rotas de dispersão da população humana pelo planeta e os principais fluxos migratórios em diferentes períodos da história, discutindo os fatores históricos e condicionantes físico-naturais associados à distribuição da população humana pelos continentes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE02",
    description:
      "Relacionar fatos e situações representativas da história das famílias do Município em que se localiza a escola, considerando a diversidade e os fluxos migratórios da população mundial.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE03",
    description:
      "Analisar aspectos representativos da dinâmica demográfica, considerando características da população (perfil etário, crescimento vegetativo e mobilidade espacial).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE04",
    description:
      "Compreender os fluxos de migração na América Latina (movimentos voluntários e forçados, assim como fatores e áreas de expulsão e atração) e as principais políticas migratórias da região.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE05",
    description:
      "Aplicar os conceitos de Estado, nação, território, governo e país para o entendimento de conflitos e tensões na contemporaneidade, com destaque para as situações geopolíticas na América e na África e suas múltiplas regionalizações a partir do pós-guerra.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE06",
    description:
      "Analisar a atuação das organizações mundiais nos processos de integração cultural e econômica nos contextos americano e africano, reconhecendo, em seus lugares de vivência, marcas desses processos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE07",
    description:
      "Analisar os impactos geoeconômicos, geoestratégicos e geopolíticos da ascensão dos Estados Unidos da América no cenário internacional em sua posição de liderança global e na relação com a China e o Brasil.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE08",
    description:
      "Analisar a situação do Brasil e de outros países da América Latina e da África, assim como da potência estadunidense na ordem mundial do pós-guerra.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE09",
    description:
      "Analisar os padrões econômicos mundiais de produção, distribuição e intercâmbio dos produtos agrícolas e industrializados, tendo como referência os Estados Unidos da América e os países denominados de Brics (Brasil, Rússia, Índia, China e África do Sul).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE10",
    description:
      "Distinguir e analisar conflitos e ações dos movimentos sociais brasileiros, no campo e na cidade, comparando com outros movimentos sociais existentes nos países latino-americanos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE11",
    description:
      "Analisar áreas de conflito e tensões nas regiões de fronteira do continente latino-americano e o papel de organismos internacionais e regionais de cooperação nesses cenários.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE12",
    description:
      "Compreender os objetivos e analisar a importância dos organismos de integração do território americano (Mercosul, OEA, OEI, Nafta, Unasul, Alba, Comunidade Andina, Aladi, entre outros).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE13",
    description:
      "Analisar a influência do desenvolvimento científico e tecnológico na caracterização dos tipos de trabalho e na economia dos espaços urbanos e rurais da América e da África.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE14",
    description:
      "Analisar os processos de desconcentração, descentralização e recentralização das atividades econômicas a partir do capital estadunidense e chinês em diferentes regiões no mundo, com destaque para o Brasil.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE15",
    description:
      "Analisar a importância dos principais recursos hídricos da America Latina (Aquífero Guarani, Bacias do rio da Prata, do Amazonas e do Orinoco, sistemas de nuvens na Amazônia e nos Andes, entre outros) e discutir os desafios relacionados à gestão e comercialização da água.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE16",
    description:
      "Analisar as principais problemáticas comuns às grandes cidades latino-americanas, particularmente aquelas relacionadas à distribuição, estrutura e dinâmica da população e às condições de vida e trabalho.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE17",
    description:
      "Analisar a segregação socioespacial em ambientes urbanos da América Latina, com atenção especial ao estudo de favelas, alagados e zona de riscos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE18",
    description:
      "Elaborar mapas ou outras formas de representação cartográfica para analisar as redes e as dinâmicas urbanas e rurais, ordenamento territorial, contextos culturais, modo de vida e usos e ocupação de solos da África e América.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE19",
    description:
      "Interpretar cartogramas, mapas esquemáticos (croquis) e anamorfoses geográficas com informações geográficas acerca da África e América.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE20",
    description:
      "Analisar características de países e grupos de países da América e da África no que se refere aos aspectos populacionais, urbanos, políticos e econômicos, e discutir as desigualdades sociais e econômicas e as pressões sobre a natureza e suas riquezas (sua apropriação e valoração na produção e circulação), o que resulta na espoliação desses povos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE21",
    description:
      "Analisar o papel ambiental e territorial da Antártica no contexto geopolítico, sua relevância para os países da América do Sul e seu valor como área destinada à pesquisa e à compreensão do ambiente global.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE22",
    description:
      "Identificar os principais recursos naturais dos países da América Latina, analisando seu uso para a produção de matéria-prima e energia e sua relevância para a cooperação entre os países do Mercosul.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE23",
    description:
      "Identificar paisagens da América Latina e associá-las, por meio da cartografia, aos diferentes povos da região, com base em aspectos da geomorfologia, da biogeografia e da climatologia.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08GE24",
    description:
      "Analisar as principais características produtivas dos países latino-americanos (como exploração mineral na Venezuela; agricultura de alta especialização e exploração mineira no Chile; circuito da carne nos pampas argentinos e no Brasil; circuito da cana-de-açúcar em Cuba; polígono industrial do sudeste brasileiro e plantações de soja no centro-oeste; maquiladoras mexicanas, entre outros).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09GE01",
    description:
      "Analisar criticamente de que forma a hegemonia europeia foi exercida em várias regiões do planeta, notadamente em situações de conflito, intervenções militares e/ou influência cultural em diferentes tempos e lugares.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09GE02",
    description:
      "Analisar a atuação das corporações internacionais e das organizações econômicas mundiais na vida da população em relação ao consumo, à cultura e à mobilidade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09GE03",
    description:
      "Identificar diferentes manifestações culturais de minorias étnicas como forma de compreender a multiplicidade cultural na escala mundial, defendendo o princípio do respeito às diferenças.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09GE04",
    description:
      "Relacionar diferenças de paisagens aos modos de viver de diferentes povos na Europa, Ásia e Oceania, valorizando identidades e interculturalidades regionais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09GE05",
    description:
      "Analisar fatos e situações para compreender a integração mundial (econômica, política e cultural), comparando as diferentes interpretações: globalização e mundialização.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09GE06",
    description:
      "Associar o critério de divisão do mundo em Ocidente e Oriente com o Sistema Colonial implantado pelas potências europeias.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09GE07",
    description:
      "Analisar os componentes físico-naturais da Eurásia e os determinantes histórico-geográficos de sua divisão em Europa e Ásia.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09GE08",
    description:
      "Analisar transformações territoriais, considerando o movimento de fronteiras, tensões, conflitos e múltiplas regionalidades na Europa, na Ásia e na Oceania.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09GE09",
    description:
      "Analisar características de países e grupos de países europeus, asiáticos e da Oceania em seus aspectos populacionais, urbanos, políticos e econômicos, e discutir suas desigualdades sociais e econômicas e pressões sobre seus ambientes físico-naturais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09GE10",
    description:
      "Analisar os impactos do processo de industrialização na produção e circulação de produtos e culturas na Europa, na Ásia e na Oceania.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09GE11",
    description:
      "Relacionar as mudanças técnicas e científicas decorrentes do processo de industrialização com as transformações no trabalho em diferentes regiões do mundo e suas consequências no Brasil.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09GE12",
    description:
      "Relacionar o processo de urbanização às transformações da produção agropecuária, à expansão do desemprego estrutural e ao papel crescente do capital financeiro em diferentes países, com destaque para o Brasil.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09GE13",
    description:
      "Analisar a importância da produção agropecuária na sociedade urbano-industrial ante o problema da desigualdade mundial de acesso aos recursos alimentares e à matéria-prima.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09GE14",
    description:
      "Elaborar e interpretar gráficos de barras e de setores, mapas temáticos e esquemáticos (croquis) e anamorfoses geográficas para analisar, sintetizar e apresentar dados e informações sobre diversidade, diferenças e desigualdades sociopolíticas e geopolíticas mundiais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09GE15",
    description:
      "Comparar e classificar diferentes regiões do mundo com base em informações populacionais, econômicas e socioambientais representadas em mapas temáticos e com diferentes projeções cartográficas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09GE16",
    description:
      "Identificar e comparar diferentes domínios morfoclimáticos da Europa, da Ásia e da Oceania.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09GE17",
    description:
      "Explicar as características físico-naturais e a forma de ocupação e usos da terra em diferentes regiões da Europa, da Ásia e da Oceania.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09GE18",
    description:
      "Identificar e analisar as cadeias industriais e de inovação e as consequências dos usos de recursos naturais e das diferentes fontes de energia (tais como termoelétrica, hidrelétrica, eólica e nuclear) em diferentes países.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01HI01",
    description:
      "Identificar aspectos do seu crescimento por meio do registro das lembranças particulares ou de lembranças dos membros de sua família e/ou de sua comunidade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01HI02",
    description:
      "Identificar a relação entre as suas histórias e as histórias de sua família e de sua comunidade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01HI03",
    description:
      "Descrever e distinguir os seus papéis e responsabilidades relacionados à família, à escola e à comunidade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01HI04",
    description:
      "Identificar as diferenças entre os variados ambientes em que vive (doméstico, escolar e da comunidade), reconhecendo as especificidades dos hábitos e das regras que os regem.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01HI05",
    description:
      "Identificar semelhanças e diferenças entre jogos e brincadeiras atuais e de outras épocas e lugares.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01HI06",
    description:
      "Conhecer as histórias da família e da escola e identificar o papel desempenhado por diferentes sujeitos em diferentes espaços.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01HI07",
    description:
      "Identificar mudanças e permanências nas formas de organização familiar.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01HI08",
    description:
      "Reconhecer o significado das comemorações e festas escolares, diferenciando-as das datas festivas comemoradas no âmbito familiar ou da comunidade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02HI01",
    description:
      "Reconhecer espaços de sociabilidade e identificar os motivos que aproximam e separam as pessoas em diferentes grupos sociais ou de parentesco.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02HI02",
    description:
      "Identificar e descrever práticas e papéis sociais que as pessoas exercem em diferentes comunidades.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02HI03",
    description:
      "Selecionar situações cotidianas que remetam à percepção de mudança, pertencimento e memória.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02HI04",
    description:
      "Selecionar e compreender o significado de objetos e documentos pessoais como fontes de memórias e histórias nos âmbitos pessoal, familiar, escolar e comunitário.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02HI05",
    description:
      "Selecionar objetos e documentos pessoais e de grupos próximos ao seu convívio e compreender sua função, seu uso e seu significado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02HI06",
    description:
      "Identificar e organizar, temporalmente, fatos da vida cotidiana, usando noções relacionadas ao tempo (antes, durante, ao mesmo tempo e depois).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02HI07",
    description:
      "Identificar e utilizar diferentes marcadores do tempo presentes na comunidade, como relógio e calendário.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02HI08",
    description:
      "Compilar histórias da família e/ou da comunidade registradas em diferentes fontes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02HI09",
    description:
      "Identificar objetos e documentos pessoais que remetam à própria experiência no âmbito da família e/ou da comunidade, discutindo as razões pelas quais alguns objetos são preservados e outros são descartados.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02HI10",
    description:
      "Identificar diferentes formas de trabalho existentes na comunidade em que vive, seus significados, suas especificidades e importância.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02HI11",
    description:
      "Identificar impactos no ambiente causados pelas diferentes formas de trabalho existentes na comunidade em que vive.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03HI01",
    description:
      "Identificar os grupos populacionais que formam a cidade, o município e a região, as relações estabelecidas entre eles e os eventos que marcam a formação da cidade, como fenômenos migratórios (vida rural/vida urbana), desmatamentos, estabelecimento de grandes empresas etc.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03HI02",
    description:
      "Selecionar, por meio da consulta de fontes de diferentes naturezas, e registrar acontecimentos ocorridos ao longo do tempo na cidade ou região em que vive.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03HI03",
    description:
      "Identificar e comparar pontos de vista em relação a eventos significativos do local em que vive, aspectos relacionados a condições sociais e à presença de diferentes grupos sociais e culturais, com especial destaque para as culturas africanas, indígenas e de migrantes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03HI04",
    description:
      "Identificar os patrimônios históricos e culturais de sua cidade ou região e discutir as razões culturais, sociais e políticas para que assim sejam considerados.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03HI05",
    description:
      "Identificar os marcos históricos do lugar em que vive e compreender seus significados.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03HI06",
    description:
      "Identificar os registros de memória na cidade (nomes de ruas, monumentos, edifícios etc.), discutindo os critérios que explicam a escolha desses nomes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03HI07",
    description:
      "Identificar semelhanças e diferenças existentes entre comunidades de sua cidade ou região, e descrever o papel dos diferentes grupos sociais que as formam.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03HI08",
    description:
      "Identificar modos de vida na cidade e no campo no presente, comparando-os com os do passado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03HI09",
    description:
      "Mapear os espaços públicos no lugar em que vive (ruas, praças, escolas, hospitais, prédios da Prefeitura e da Câmara de Vereadores etc.) e identificar suas funções.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03HI10",
    description:
      "Identificar as diferenças entre o espaço doméstico, os espaços públicos e as áreas de conservação ambiental, compreendendo a importância dessa distinção.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03HI11",
    description:
      "Identificar diferenças entre formas de trabalho realizadas na cidade e no campo, considerando também o uso da tecnologia nesses diferentes contextos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03HI12",
    description:
      "Comparar as relações de trabalho e lazer do presente com as de outros tempos e espaços, analisando mudanças e permanências.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04HI01",
    description:
      "Reconhecer a história como resultado da ação do ser humano no tempo e no espaço, com base na identificação de mudanças e permanências ao longo do tempo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04HI02",
    description:
      "Identificar mudanças e permanências ao longo do tempo, discutindo os sentidos dos grandes marcos da história da humanidade (nomadismo, desenvolvimento da agricultura e do pastoreio, criação da indústria etc.).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04HI03",
    description:
      "Identificar as transformações ocorridas na cidade ao longo do tempo e discutir suas interferências nos modos de vida de seus habitantes, tomando como ponto de partida o presente.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04HI04",
    description:
      "Identificar as relações entre os indivíduos e a natureza e discutir o significado do nomadismo e da fixação das primeiras comunidades humanas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04HI05",
    description:
      "Relacionar os processos de ocupação do campo a intervenções na natureza, avaliando os resultados dessas intervenções.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04HI06",
    description:
      "Identificar as transformações ocorridas nos processos de deslocamento das pessoas e mercadorias, analisando as formas de adaptação ou marginalização.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04HI07",
    description:
      "Identificar e descrever a importância dos caminhos terrestres, fluviais e marítimos para a dinâmica da vida comercial.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04HI08",
    description:
      "Identificar as transformações ocorridas nos meios de comunicação (cultura oral, imprensa, rádio, televisão, cinema, internet e demais tecnologias digitais de informação e comunicação) e discutir seus significados para os diferentes grupos ou estratos sociais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04HI09",
    description:
      "Identificar as motivações dos processos migratórios em diferentes tempos e espaços e avaliar o papel desempenhado pela migração nas regiões de destino.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04HI10",
    description:
      "Analisar diferentes fluxos populacionais e suas contribuições para a formação da sociedade brasileira.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04HI11",
    description:
      "Analisar, na sociedade em que vive, a existência ou não de mudanças associadas à migração (interna e internacional).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05HI01",
    description:
      "Identificar os processos de formação das culturas e dos povos, relacionando-os com o espaço geográfico ocupado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05HI02",
    description:
      "Identificar os mecanismos de organização do poder político com vistas à compreensão da ideia de Estado e/ou de outras formas de ordenação social.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05HI03",
    description:
      "Analisar o papel das culturas e das religiões na composição identitária dos povos antigos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05HI04",
    description:
      "Associar a noção de cidadania com os princípios de respeito à diversidade, à pluralidade e aos direitos humanos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05HI05",
    description:
      "Associar o conceito de cidadania à conquista de direitos dos povos e das sociedades, compreendendo-o como conquista histórica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05HI06",
    description:
      "Comparar o uso de diferentes linguagens e tecnologias no processo de comunicação e avaliar os significados sociais, políticos e culturais atribuídos a elas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05HI07",
    description:
      "Identificar os processos de produção, hierarquização e difusão dos marcos de memória e discutir a presença e/ou a ausência de diferentes grupos que compõem a sociedade na nomeação desses marcos de memória.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05HI08",
    description:
      "Identificar formas de marcação da passagem do tempo em distintas sociedades, incluindo os povos indígenas originários e os povos africanos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05HI09",
    description:
      "Comparar pontos de vista sobre temas que impactam a vida cotidiana no tempo presente, por meio do acesso a diferentes fontes, incluindo orais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05HI10",
    description:
      "Inventariar os patrimônios materiais e imateriais da humanidade e analisar mudanças e permanências desses patrimônios ao longo do tempo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06HI01",
    description:
      "Identificar diferentes formas de compreensão da noção de tempo e de periodização dos processos históricos (continuidades e rupturas).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06HI02",
    description:
      "Identificar a gênese da produção do saber histórico e analisar o significado das fontes que originaram determinadas formas de registro em sociedades e épocas distintas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06HI03",
    description:
      "Identificar as hipóteses científicas sobre o surgimento da espécie humana e sua historicidade e analisar os significados dos mitos de fundação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06HI04",
    description: "Conhecer as teorias sobre a origem do homem americano.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06HI05",
    description:
      "Descrever modificações da natureza e da paisagem realizadas por diferentes tipos de sociedade, com destaque para os povos indígenas originários e povos africanos, e discutir a natureza e a lógica das transformações ocorridas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06HI06",
    description:
      "Identificar geograficamente as rotas de povoamento no território americano.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06HI07",
    description:
      "Identificar aspectos e formas de registro das sociedades antigas na África, no Oriente Médio e nas Américas, distinguindo alguns significados presentes na cultura material e na tradição oral dessas sociedades.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06HI08",
    description:
      "Identificar os espaços territoriais ocupados e os aportes culturais, científicos, sociais e econômicos dos astecas, maias e incas e dos povos indígenas de diversas regiões brasileiras.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06HI09",
    description:
      "Discutir o conceito de Antiguidade Clássica, seu alcance e limite na tradição ocidental, assim como os impactos sobre outras sociedades e culturas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06HI10",
    description:
      "Explicar a formação da Grécia Antiga, com ênfase na formação da pólis e nas transformações políticas, sociais e culturais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06HI11",
    description:
      "Caracterizar o processo de formação da Roma Antiga e suas configurações sociais e políticas nos períodos monárquico e republicano.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06HI12",
    description:
      "Associar o conceito de cidadania a dinâmicas de inclusão e exclusão na Grécia e Roma antigas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06HI13",
    description:
      "Conceituar “império” no mundo antigo, com vistas à análise das diferentes formas de equilíbrio e desequilíbrio entre as partes envolvidas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06HI14",
    description:
      "Identificar e analisar diferentes formas de contato, adaptação ou exclusão entre populações em diferentes tempos e espaços.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06HI15",
    description:
      "Descrever as dinâmicas de circulação de pessoas, produtos e culturas no Mediterrâneo e seu significado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06HI16",
    description:
      "Caracterizar e comparar as dinâmicas de abastecimento e as formas de organização do trabalho e da vida social em diferentes sociedades e períodos, com destaque para as relações entre senhores e servos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06HI17",
    description:
      "Diferenciar escravidão, servidão e trabalho livre no mundo antigo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06HI18",
    description:
      "Analisar o papel da religião cristã na cultura e nos modos de organização social no período medieval.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06HI19",
    description:
      "Descrever e analisar os diferentes papéis sociais das mulheres no mundo antigo e nas sociedades medievais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07HI01",
    description:
      "Explicar o significado de “modernidade” e suas lógicas de inclusão e exclusão, com base em uma concepção europeia.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07HI02",
    description:
      "Identificar conexões e interações entre as sociedades do Novo Mundo, da Europa, da África e da Ásia no contexto das navegações e indicar a complexidade e as interações que ocorrem nos Oceanos Atlântico, Índico e Pacífico.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07HI03",
    description:
      "Identificar aspectos e processos específicos das sociedades africanas e americanas antes da chegada dos europeus, com destaque para as formas de organização social e o desenvolvimento de saberes e técnicas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07HI04",
    description:
      "Identificar as principais características dos Humanismos e dos Renascimentos e analisar seus significados.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07HI05",
    description:
      "Identificar e relacionar as vinculações entre as reformas religiosas e os processos culturais e sociais do período moderno na Europa e na América.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07HI06",
    description:
      "Comparar as navegações no Atlântico e no Pacífico entre os séculos XIV e XVI.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07HI07",
    description:
      "Descrever os processos de formação e consolidação das monarquias e suas principais características com vistas à compreensão das razões da centralização política.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07HI08",
    description:
      "Descrever as formas de organização das sociedades americanas no tempo da conquista com vistas à compreensão dos mecanismos de alianças, confrontos e resistências.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07HI09",
    description:
      "Analisar os diferentes impactos da conquista europeia da América para as populações ameríndias e identificar as formas de resistência.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07HI10",
    description:
      "Analisar, com base em documentos históricos, diferentes interpretações sobre as dinâmicas das sociedades americanas no período colonial.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07HI11",
    description:
      "Analisar a formação histórico-geográfica do território da América portuguesa por meio de mapas históricos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07HI12",
    description:
      "Identificar a distribuição territorial da população brasileira em diferentes épocas, considerando a diversidade étnico-racial e étnico-cultural (indígena, africana, europeia e asiática).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07HI13",
    description:
      "Caracterizar a ação dos europeus e suas lógicas mercantis visando ao domínio no mundo atlântico.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07HI14",
    description:
      "Descrever as dinâmicas comerciais das sociedades americanas e africanas e analisar suas interações com outras sociedades do Ocidente e do Oriente.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07HI15",
    description:
      "Discutir o conceito de escravidão moderna e suas distinções em relação ao escravismo antigo e à servidão medieval.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07HI16",
    description:
      "Analisar os mecanismos e as dinâmicas de comércio de escravizados em suas diferentes fases, identificando os agentes responsáveis pelo tráfico e as regiões e zonas africanas de procedência dos escravizados.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07HI17",
    description:
      "Discutir as razões da passagem do mercantilismo para o capitalismo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI01",
    description:
      "Identificar os principais aspectos conceituais do iluminismo e do liberalismo e discutir a relação entre eles e a organização do mundo contemporâneo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI02",
    description:
      "Identificar as particularidades político-sociais da Inglaterra do século XVII e analisar os desdobramentos posteriores à Revolução Gloriosa.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI03",
    description:
      "Analisar os impactos da Revolução Industrial na produção e circulação de povos, produtos e culturas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI04",
    description:
      "Identificar e relacionar os processos da Revolução Francesa e seus desdobramentos na Europa e no mundo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI05",
    description:
      "Explicar os movimentos e as rebeliões da América portuguesa, articulando as temáticas locais e suas interfaces com processos ocorridos na Europa e nas Américas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI06",
    description:
      "Aplicar os conceitos de Estado, nação, território, governo e país para o entendimento de conflitos e tensões.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI07",
    description:
      "Identificar e contextualizar as especificidades dos diversos processos de independência nas Américas, seus aspectos populacionais e suas conformações territoriais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI08",
    description:
      "Conhecer o ideário dos líderes dos movimentos independentistas e seu papel nas revoluções que levaram à independência das colônias hispano-americanas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI09",
    description:
      "Conhecer as características e os principais pensadores do Pan-americanismo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI10",
    description:
      "Identificar a Revolução de São Domingo como evento singular e desdobramento da Revolução Francesa e avaliar suas implicações.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI11",
    description:
      "Identificar e explicar os protagonismos e a atuação de diferentes grupos sociais e étnicos nas lutas de independência no Brasil, na América espanhola e no Haiti.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI12",
    description:
      "Caracterizar a organização política e social no Brasil desde a chegada da Corte portuguesa, em 1808, até 1822 e seus desdobramentos para a história política brasileira.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI13",
    description:
      "Analisar o processo de independência em diferentes países latino-americanos e comparar as formas de governo neles adotadas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI14",
    description:
      "Discutir a noção da tutela dos grupos indígenas e a participação dos negros na sociedade brasileira do final do período colonial, identificando permanências na forma de preconceitos, estereótipos e violências sobre as populações indígenas e negras no Brasil e nas Américas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI15",
    description:
      "Identificar e analisar o equilíbrio das forças e os sujeitos envolvidos nas disputas políticas durante o Primeiro e o Segundo Reinado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI16",
    description:
      "Identificar, comparar e analisar a diversidade política, social e regional nas rebeliões e nos movimentos contestatórios ao poder centralizado.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI17",
    description:
      "Relacionar as transformações territoriais, em razão de questões de fronteiras, com as tensões e conflitos durante o Império.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI18",
    description:
      "Identificar as questões internas e externas sobre a atuação do Brasil na Guerra do Paraguai e discutir diferentes versões sobre o conflito.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI19",
    description:
      "Formular questionamentos sobre o legado da escravidão nas Américas, com base na seleção e consulta de fontes de diferentes naturezas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI20",
    description:
      "Identificar e relacionar aspectos das estruturas sociais da atualidade com os legados da escravidão no Brasil e discutir a importância de ações afirmativas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI21",
    description:
      "Identificar e analisar as políticas oficiais com relação ao indígena durante o Império.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI22",
    description:
      "Discutir o papel das culturas letradas, não letradas e das artes na produção das identidades no Brasil do século XIX.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI23",
    description:
      "Estabelecer relações causais entre as ideologias raciais e o determinismo no contexto do imperialismo europeu e seus impactos na África e na Ásia.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI24",
    description:
      "Reconhecer os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI25",
    description:
      "Caracterizar e contextualizar aspectos das relações entre os Estados Unidos da América e a América Latina no século XIX.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI26",
    description:
      "Identificar e contextualizar o protagonismo das populações locais na resistência ao imperialismo na África e Ásia.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08HI27",
    description:
      "Identificar as tensões e os significados dos discursos civilizatórios, avaliando seus impactos negativos para os povos indígenas originários e as populações negras nas Américas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI01",
    description:
      "Descrever e contextualizar os principais aspectos sociais, culturais, econômicos e políticos da emergência da República no Brasil.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI02",
    description:
      "Caracterizar e compreender os ciclos da história republicana, identificando particularidades da história local e regional até 1954.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI03",
    description:
      "Identificar os mecanismos de inserção dos negros na sociedade brasileira pós-abolição e avaliar os seus resultados.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI04",
    description:
      "Discutir a importância da participação da população negra na formação econômica, política e social do Brasil.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI05",
    description:
      "Identificar os processos de urbanização e modernização da sociedade brasileira e avaliar suas contradições e impactos na região em que vive.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI06",
    description:
      "Identificar e discutir o papel do trabalhismo como força política, social e cultural no Brasil, em diferentes escalas (nacional, regional, cidade, comunidade).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI07",
    description:
      "Identificar e explicar, em meio a lógicas de inclusão e exclusão, as pautas dos povos indígenas, no contexto republicano (até 1964), e das populações afrodescendentes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI08",
    description:
      "Identificar as transformações ocorridas no debate sobre as questões da diversidade no Brasil durante o século XX e compreender o significado das mudanças de abordagem em relação ao tema.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI09",
    description:
      "Relacionar as conquistas de direitos políticos, sociais e civis à atuação de movimentos sociais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI10",
    description:
      "Identificar e relacionar as dinâmicas do capitalismo e suas crises, os grandes conflitos mundiais e os conflitos vivenciados na Europa.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI11",
    description:
      "Identificar as especificidades e os desdobramentos mundiais da Revolução Russa e seu significado histórico.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI12",
    description:
      "Analisar a crise capitalista de 1929 e seus desdobramentos em relação à economia global.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI13",
    description:
      "Descrever e contextualizar os processos da emergência do fascismo e do nazismo, a consolidação dos estados totalitários e as práticas de extermínio (como o holocausto).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI14",
    description:
      "Caracterizar e discutir as dinâmicas do colonialismo no continente africano e asiático e as lógicas de resistência das populações locais diante das questões internacionais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI15",
    description:
      "Discutir as motivações que levaram à criação da Organização das Nações Unidas (ONU) no contexto do pós-guerra e os propósitos dessa organização.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI16",
    description:
      "Relacionar a Carta dos Direitos Humanos ao processo de afirmação dos direitos fundamentais e de defesa da dignidade humana, valorizando as instituições voltadas para a defesa desses direitos e para a identificação dos agentes responsáveis por sua violação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI17",
    description:
      "Identificar e analisar processos sociais, econômicos, culturais e políticos do Brasil a partir de 1946.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI18",
    description:
      "Descrever e analisar as relações entre as transformações urbanas e seus impactos na cultura brasileira entre 1946 e 1964 e na produção das desigualdades regionais e sociais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI19",
    description:
      "Identificar e compreender o processo que resultou na ditadura civil-militar no Brasil e discutir a emergência de questões relacionadas à memória e à justiça sobre os casos de violação dos direitos humanos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI20",
    description:
      "Discutir os processos de resistência e as propostas de reorganização da sociedade brasileira durante a ditadura civil-militar.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI21",
    description:
      "Identificar e relacionar as demandas indígenas e quilombolas como forma de contestação ao modelo desenvolvimentista da ditadura.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI22",
    description:
      "Discutir o papel da mobilização da sociedade brasileira do final do período ditatorial até a Constituição de 1988.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI23",
    description:
      "Identificar direitos civis, políticos e sociais expressos na Constituição de 1988 e relacioná-los à noção de cidadania e ao pacto da sociedade brasileira de combate a diversas formas de preconceito, como o racismo.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI24",
    description:
      "Analisar as transformações políticas, econômicas, sociais e culturais de 1989 aos dias atuais, identificando questões prioritárias para a promoção da cidadania e dos valores democráticos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI25",
    description:
      "Relacionar as transformações da sociedade brasileira aos protagonismos da sociedade civil após 1989.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI26",
    description:
      "Discutir e analisar as causas da violência contra populações marginalizadas (negros, indígenas, mulheres, homossexuais, camponeses, pobres etc.) com vistas à tomada de consciência e à construção de uma cultura de paz, empatia e respeito às pessoas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI27",
    description:
      "Relacionar aspectos das mudanças econômicas, culturais e sociais ocorridas no Brasil a partir da década de 1990 ao papel do País no cenário internacional na era da globalização.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI28",
    description:
      "Identificar e analisar aspectos da Guerra Fria, seus principais conflitos e as tensões geopolíticas no interior dos blocos liderados por soviéticos e estadunidenses.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI29",
    description:
      "Descrever e analisar as experiências ditatoriais na América Latina, seus procedimentos e vínculos com o poder, em nível nacional e internacional, e a atuação de movimentos de contestação às ditaduras.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI30",
    description:
      "Comparar as características dos regimes ditatoriais latino-americanos, com especial atenção para a censura política, a opressão e o uso da força, bem como para as reformas econômicas e sociais e seus impactos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI31",
    description:
      "Descrever e avaliar os processos de descolonização na África e na Ásia.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI32",
    description:
      "Analisar mudanças e permanências associadas ao processo de globalização, considerando os argumentos dos movimentos críticos às políticas globais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI33",
    description:
      "Analisar as transformações nas relações políticas locais e globais geradas pelo desenvolvimento das tecnologias digitais de informação e comunicação.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI34",
    description:
      "Discutir as motivações da adoção de diferentes políticas econômicas na América Latina, assim como seus impactos sociais nos países da região.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI35",
    description:
      "Analisar os aspectos relacionados ao fenômeno do terrorismo na contemporaneidade, incluindo os movimentos migratórios e os choques entre diferentes grupos e culturas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09HI36",
    description:
      "Identificar e discutir as diversidades identitárias e seus significados históricos no início do século XXI, combatendo qualquer forma de preconceito e violência.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01ER01",
    description:
      "Identificar e acolher as semelhanças e diferenças entre o eu, o outro e o nós.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01ER02",
    description:
      "Reconhecer que o seu nome e o das demais pessoas os identificam e os diferenciam.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01ER03",
    description:
      "Reconhecer e respeitar as características físicas e subjetivas de cada um.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01ER04",
    description: "Valorizar a diversidade de formas de vida.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01ER05",
    description:
      "Identificar e acolher sentimentos, lembranças, memórias e saberes de cada um.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF01ER06",
    description:
      "Identificar as diferentes formas pelas quais as pessoas manifestam sentimentos, ideias, memórias, gostos e crenças em diferentes espaços.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02ER01",
    description: "Reconhecer os diferentes espaços de convivência.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02ER02",
    description:
      "Identificar costumes, crenças e formas diversas de viver em variados ambientes de convivência.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02ER03",
    description:
      "Identificar as diferentes formas de registro das memórias pessoais, familiares e escolares (fotos, músicas, narrativas, álbuns...).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02ER04",
    description:
      "Identificar os símbolos presentes nos variados espaços de convivência.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02ER05",
    description:
      "Identificar, distinguir e respeitar símbolos religiosos de distintas manifestações, tradições e instituições religiosas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02ER06",
    description:
      "Exemplificar alimentos considerados sagrados por diferentes culturas, tradições e expressões religiosas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF02ER07",
    description:
      "Identificar significados atribuídos a alimentos em diferentes manifestações e tradições religiosas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03ER01",
    description:
      "Identificar e respeitar os diferentes espaços e territórios religiosos de diferentes tradições e movimentos religiosos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03ER02",
    description:
      "Caracterizar os espaços e territórios religiosos como locais de realização das práticas celebrativas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03ER03",
    description:
      "Identificar e respeitar práticas celebrativas (cerimônias, orações, festividades, peregrinações, entre outras) de diferentes tradições religiosas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03ER04",
    description:
      "Caracterizar as práticas celebrativas como parte integrante do conjunto das manifestações religiosas de diferentes culturas e sociedades.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03ER05",
    description:
      "Reconhecer as indumentárias (roupas, acessórios, símbolos, pinturas corporais) utilizadas em diferentes manifestações e tradições religiosas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF03ER06",
    description:
      "Caracterizar as indumentárias como elementos integrantes das identidades religiosas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04ER01",
    description:
      "Identificar ritos presentes no cotidiano pessoal, familiar, escolar e comunitário.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04ER02",
    description:
      "Identificar ritos e suas funções em diferentes manifestações e tradições religiosas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04ER03",
    description:
      "Caracterizar ritos de iniciação e de passagem em diversos grupos religiosos (nascimento, casamento e morte).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04ER04",
    description:
      "Identificar as diversas formas de expressão da espiritualidade (orações, cultos, gestos, cantos, dança, meditação) nas diferentes tradições religiosas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04ER05",
    description:
      "Identificar representações religiosas em diferentes expressões artísticas (pinturas, arquitetura, esculturas, ícones, símbolos, imagens), reconhecendo-as como parte da identidade de diferentes culturas e tradições religiosas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04ER06",
    description:
      "Identificar nomes, significados e representações de divindades nos contextos familiar e comunitário.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF04ER07",
    description:
      "Reconhecer e respeitar as ideias de divindades de diferentes manifestações e tradições religiosas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05ER01",
    description:
      "Identificar e respeitar acontecimentos sagrados de diferentes culturas e tradições religiosas como recurso para preservar a memória.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05ER02",
    description:
      "Identificar mitos de criação em diferentes culturas e tradições religiosas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05ER03",
    description:
      "Reconhecer funções e mensagens religiosas contidas nos mitos de criação (concepções de mundo, natureza, ser humano, divindades, vida e morte).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05ER04",
    description:
      "Reconhecer a importância da tradição oral para preservar memórias e acontecimentos religiosos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05ER05",
    description:
      "Identificar elementos da tradição oral nas culturas e religiosidades indígenas, afro-brasileiras, ciganas, entre outras.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05ER06",
    description:
      "Identificar o papel dos sábios e anciãos na comunicação e preservação da tradição oral.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF05ER07",
    description:
      "Reconhecer, em textos orais, ensinamentos relacionados a modos de ser e viver.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06ER01",
    description:
      "Reconhecer o papel da tradição escrita na preservação de memórias, acontecimentos e ensinamentos religiosos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06ER02",
    description:
      "Reconhecer e valorizar a diversidade de textos religiosos escritos (textos do Budismo, Cristianismo, Espiritismo, Hinduísmo, Islamismo, Judaísmo, entre outros).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06ER03",
    description:
      "Reconhecer, em textos escritos, ensinamentos relacionados a modos de ser e viver.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06ER04",
    description:
      "Reconhecer que os textos escritos são utilizados pelas tradições religiosas de maneiras diversas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06ER05",
    description:
      "Discutir como o estudo e a interpretação dos textos religiosos influenciam os adeptos a vivenciarem os ensinamentos das tradições religiosas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06ER06",
    description:
      "Reconhecer a importância dos mitos, ritos, símbolos e textos na estruturação das diferentes crenças, tradições e movimentos religiosos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF06ER07",
    description:
      "Exemplificar a relação entre mito, rito e símbolo nas práticas celebrativas de diferentes tradições religiosas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07ER01",
    description:
      "Reconhecer e respeitar as práticas de comunicação com as divindades em distintas manifestações e tradições religiosas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07ER02",
    description:
      "Identificar práticas de espiritualidade utilizadas pelas pessoas em determinadas situações (acidentes, doenças, fenômenos climáticos).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07ER03",
    description:
      "Reconhecer os papéis atribuídos às lideranças de diferentes tradições religiosas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07ER04",
    description:
      "Exemplificar líderes religiosos que se destacaram por suas contribuições à sociedade.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07ER05",
    description:
      "Discutir estratégias que promovam a convivência ética e respeitosa entre as religiões.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07ER06",
    description:
      "Identificar princípios éticos em diferentes tradições religiosas e filosofias de vida, discutindo como podem influenciar condutas pessoais e práticas sociais.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07ER07",
    description:
      "Identificar e discutir o papel das lideranças religiosas e seculares na defesa e promoção dos direitos humanos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF07ER08",
    description:
      "Reconhecer o direito à liberdade de consciência, crença ou convicção, questionando concepções e práticas sociais que a violam.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08ER01",
    description:
      "Discutir como as crenças e convicções podem influenciar escolhas e atitudes pessoais e coletivas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08ER02",
    description:
      "Analisar filosofias de vida, manifestações e tradições religiosas destacando seus princípios éticos.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08ER03",
    description:
      "Analisar doutrinas das diferentes tradições religiosas e suas concepções de mundo, vida e morte.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08ER04",
    description:
      "Discutir como filosofias de vida, tradições e instituições religiosas podem influenciar diferentes campos da esfera pública (política, saúde, educação, economia).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08ER05",
    description:
      "Debater sobre as possibilidades e os limites da interferência das tradições religiosas na esfera pública.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08ER06",
    description:
      "Analisar práticas, projetos e políticas públicas que contribuem para a promoção da liberdade de pensamento, crenças e convicções.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF08ER07",
    description:
      "Analisar as formas de uso das mídias e tecnologias pelas diferentes denominações religiosas.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09ER01",
    description:
      "Analisar princípios e orientações para o cuidado da vida e nas diversas tradições religiosas e filosofias de vida.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09ER02",
    description:
      "Discutir as diferentes expressões de valorização e de desrespeito à vida, por meio da análise de matérias nas diferentes mídias.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09ER03",
    description:
      "Identificar sentidos do viver e do morrer em diferentes tradições religiosas, através do estudo de mitos fundantes.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09ER04",
    description:
      "Identificar concepções de vida e morte em diferentes tradições religiosas e filosofias de vida, por meio da análise de diferentes ritos fúnebres.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09ER05",
    description:
      "Analisar as diferentes ideias de imortalidade elaboradas pelas tradições religiosas (ancestralidade, reencarnação, transmigração e ressurreição).",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09ER06",
    description:
      "Reconhecer a coexistência como uma atitude ética de respeito à vida e à dignidade humana.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09ER07",
    description:
      "Identificar princípios éticos (familiares, religiosos e culturais) que possam alicerçar a construção de projetos de vida.",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "EF09ER08",
    description:
      "Construir projetos de vida assentados em princípios e valores éticos.",
    created: new Date(Date()).toISOString(),
  },
];

/* const objectsArray: Array<fieldsDto> = [
  {
    id: "LP001",
    description: "Adesão às práticas de leitura",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP002",
    description:
      "Análise de textos legais/normativos, propositivos e reivindicatórios",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP003",
    description: "Apreciação e réplica",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP004",
    description: "Apreciação e réplica / Relação entre gêneros e mídias",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP005",
    description: "Apreciação estética/Estilo",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP006",
    description:
      "Argumentação: movimentos argumentativos, tipos de argumento e força argumentativa",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP007",
    description: "Aspectos não linguísticos (paralinguísticos) no ato da fala",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP008",
    description: "Características da conversação espontânea",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP009",
    description: "Coesão",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP010",
    description: "Compreensão",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP011",
    description: "Compreensão de textos orais",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP012",
    description: "Compreensão em leitura",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP013",
    description: "Conhecimento das diversas grafias do alfabeto/ Acentuação",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP014",
    description: "Conhecimento do alfabeto do português do Brasil",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP015",
    description:
      "Conhecimento do alfabeto do português do Brasil/Ordem alfabética/Polissemia",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP016",
    description:
      "Consideração das condições de produção de textos de divulgação científica / Estratégias de escrita",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP017",
    description:
      "Consideração das condições de produção / Estratégias de produção: planejamento, textualização e revisão/edição",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP018",
    description: "Construção composicional",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP019",
    description:
      "Construção composicional  / Elementos paralinguísticos e cinésicos Apresentações orais",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP020",
    description:
      "Construção composicional e estilo Gêneros de divulgação científica",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP021",
    description: "Construção da textualidade",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP022",
    description: "Construção da textualidade Relação entre textos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP023",
    description: "Construção do sistema alfabético",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP024",
    description: "Construção do sistema alfabético e da ortografia",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP025",
    description: "Construção do sistema alfabético / Convenções da escrita",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP026",
    description:
      "Construção do sistema alfabético / Estabelecimento de relações anafóricas na referenciação e construção da coesão",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP027",
    description: "Contagem de histórias",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP028",
    description:
      "Contexto de produção, circulação e recepção de textos e práticas relacionadas à defesa de direitos e à participação social",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP029",
    description: "Conversação espontânea",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP030",
    description: "Correspondência fonema-grafema",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP031",
    description: "Curadoria de informação",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP032",
    description: "Declamação",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP033",
    description: "Decodificação/Fluência de leitura",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP034",
    description: "Discurso direto e indireto",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP035",
    description: "Discussão oral",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP036",
    description: "Edição de textos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP037",
    description: "Efeito de sentido",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP038",
    description: "Efeitos de sentido",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP039",
    description: "Efeitos de sentido Exploração da multissemiose",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP040",
    description: "Elementos notacionais da escrita",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP041",
    description: "Elementos notacionais da escrita/morfossintaxe",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP042",
    description: "Escrita autônoma",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP043",
    description: "Escrita autônoma e compartilhada",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP044",
    description: "Escrita colaborativa",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP045",
    description: "Escrita compartilhada",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP046",
    description: "Escuta atenta",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP047",
    description: "Escuta de textos orais",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP048",
    description:
      "Escuta / Apreender o sentido geral dos textos Apreciação e réplica Produção/Proposta",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP049",
    description: "Estilo",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP050",
    description: "Estratégia de leitura",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP051",
    description: "Estratégia de leitura Distinção de fato e opinião",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP052",
    description:
      "Estratégia de leitura: apreender os sentidos globais do texto",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP053",
    description:
      "Estratégia de leitura: apreender os sentidos globais do texto / Apreciação e réplica",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP054",
    description:
      "Estratégia de leitura: identificação de teses e argumentos / Apreciação e réplica",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP055",
    description:
      "Estratégia de produção: planejamento de textos argumentativos e apreciativos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP056",
    description: "Estratégia de produção: planejamento de textos informativos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP057",
    description:
      "Estratégia de produção: planejamento de textos reivindicatórios ou propositivos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP058",
    description: "Estratégia de produção: textualização de textos informativos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP059",
    description: "Estratégias de escrita: textualização, revisão e edição",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP060",
    description: "Estratégias de leitura Apreciação e réplica",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP061",
    description: "Estratégias de produção",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP062",
    description:
      "Estratégias de produção: planejamento de textos argumentativos e apreciativos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP063",
    description: "Estratégias de produção: planejamento de textos informativos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP064",
    description:
      "Estratégias de produção: planejamento e participação em debates regrados",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP065",
    description:
      "Estratégias de produção: planejamento e produção de apresentações orais",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP066",
    description:
      "Estratégias de produção: planejamento, realização e edição de entrevistas orais",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP067",
    description:
      "Estratégias de produção: planejamento, textualização, revisão e edição de textos publicitários",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP068",
    description:
      "Estratégias e procedimentos de leitura em textos legais e normativos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP069",
    description:
      "Estratégias e procedimentos de leitura em textos reivindicatórios ou propositivos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP070",
    description:
      "Estratégias e procedimentos de leitura Relação do verbal com outras semioses / Procedimentos e gêneros de apoio à compreensão",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP071",
    description:
      "Estratégias, procedimentos de leitura em textos reivindicatórios ou propositivos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP072",
    description: "Figuras de linguagem",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP073",
    description: "Fono-ortografia",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP074",
    description: "Forma de composição de gêneros orais",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP075",
    description: "Forma de composição de textos dramáticos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP076",
    description: "Forma de composição de textos poéticos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP077",
    description: "Forma de composição de textos poéticos visuais",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP078",
    description: "Forma de composição do texto",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP079",
    description: "Forma de composição dos textos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP080",
    description:
      "Forma de composição dos textos  / Adequação do texto às normas de escrita",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP081",
    description: "Forma de composição dos textos  / Coesão e articuladores",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP082",
    description:
      "Forma de composição dos textos / Adequação do texto às normas de escrita",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP083",
    description: "Forma de composição dos textos / Coesão e articuladores",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP084",
    description:
      "Forma de composição dos textos/Adequação do texto às normas de escrita",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP085",
    description: "Formação de leitor",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP086",
    description: "Formação do leitor literário",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP087",
    description: "Formação do leitor literário/ Leitura multissemiótica",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP088",
    description: "Formação do leitor literário/Leitura multissemiótica",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP089",
    description: "Formas de composição de narrativas",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP090",
    description: "Formas de composição de textos poéticos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP091",
    description: "Formas de composição de textos poéticos visuais",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP092",
    description: "Imagens analíticas em textos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP093",
    description: "Leitura colaborativa e autônoma",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP094",
    description: "Leitura de imagens em narrativas visuais",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP095",
    description: "Léxico/morfologia",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP096",
    description: "Marcas linguísticas Intertextualidade",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP097",
    description: "Modalização",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP098",
    description: "Morfologia",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP099",
    description: "Morfologia/Morfossintaxe",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP100",
    description: "Morfossintaxe",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP101",
    description: "Movimentos argumentativos e força dos argumentos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP102",
    description: "Oralidade pública/Intercâmbio conversacional em sala de aula",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP103",
    description:
      "Participação em discussões orais de temas controversos de interesse da turma e/ou de relevância social",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP104",
    description: "Performances orais",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP105",
    description: "Pesquisa",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP106",
    description: "Planejamento de texto",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP107",
    description: "Planejamento de texto oral Exposição oral",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP108",
    description: "Planejamento de texto oral / Exposição oral",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP109",
    description: "Planejamento de texto/Progressão temática e paragrafação",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP110",
    description:
      "Planejamento de textos de peças publicitárias de campanhas sociais",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP111",
    description: "Planejamento e produção de entrevistas orais",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP112",
    description: "Planejamento e produção de texto",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP113",
    description: "Planejamento e produção de textos jornalísticos orais",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP114",
    description: "Pontuação",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP115",
    description: "Procedimentos de apoio à compreensão Tomada de nota",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP116",
    description: "Produção de texto",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP117",
    description: "Produção de texto oral",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP118",
    description: "Produção de textos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP119",
    description: "Produção de textos jornalísticos orais",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP120",
    description: "Produção de textos orais",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP121",
    description: "Produção de textos orais Oralização",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP122",
    description: "Produção e edição de textos publicitários",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP123",
    description: "Protocolos de leitura",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP124",
    description:
      "Reconstrução da textualidade e compreensão dos efeitos de sentidos provocados pelos usos de recursos linguísticos e multissemióticos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP125",
    description:
      "Reconstrução da textualidade / Efeitos de sentidos provocados pelos usos de recursos linguísticos e multissemióticos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP126",
    description:
      "Reconstrução das condições de produção e circulação e adequação do texto à construção composicional e ao estilo de gênero (Lei, código, estatuto, código, regimento etc.)",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP127",
    description: "Reconstrução das condições de produção e recepção de textos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP128",
    description:
      "Reconstrução das condições de produção e recepção dos textos e adequação do texto à construção composicional e ao estilo de gênero",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP129",
    description:
      "Reconstrução das condições de produção, circulação e recepção / Apreciação e réplica",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP130",
    description:
      "Reconstrução do contexto de produção, circulação e recepção de textos legais e normativos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP131",
    description:
      "Reconstrução do contexto de produção, circulação e recepção de textos / Caracterização do campo jornalístico e relação entre os gêneros em circulação, mídias e práticas da cultura digital",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP132",
    description:
      "Recursos linguísticos e semióticos que operam nos textos pertencentes aos gêneros literários",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP133",
    description: "Registro",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP134",
    description:
      "Relação do texto com o contexto de produção e experimentação de papéis sociais",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP135",
    description:
      "Relação entre contexto de produção e características composicionais e estilísticas dos gêneros (carta de solicitação, carta de reclamação, petição on-line, carta aberta, abaixo-assinado, proposta etc.) / Apreciação e réplica",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP136",
    description:
      "Relação entre contexto de produção e características composicionais e estilísticas dos gêneros / Apreciação e réplica",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP137",
    description: "Relação entre textos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP138",
    description: "Relato oral/Registro formal e informal",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP139",
    description: "Revisão de textos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP140",
    description: "Revisão/edição de texto informativo e opinativo",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP141",
    description:
      "Segmentação de palavras/Classificação de palavras por número de sílabas",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP142",
    description: "Semântica",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP143",
    description: "Semântica Coesão",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP144",
    description: "Sequências textuais",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP145",
    description: "Sinonímia e antonímia/Morfologia/Pontuação",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP146",
    description: "Sintaxe",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP147",
    description: "Textos dramáticos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP148",
    description: "Textualização",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP149",
    description: "Textualização de textos argumentativos e apreciativos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP150",
    description: "Textualização Progressão temática",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP151",
    description: "Textualização, revisão e edição",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP152",
    description:
      "Textualização, tendo em vista suas condições de produção, as características do gênero em questão, o estabelecimento de coesão, adequação à norma-padrão e o uso adequado de ferramentas de edição",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP153",
    description:
      "Usar adequadamente ferramentas de apoio a apresentações orais",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP154",
    description: "Utilização de tecnologia digital",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP155",
    description: "Variação linguística  ",
    created: new Date(Date()).toISOString(),
  },
]; */

const unitsArray: Array<fieldsDto> = [
  {
    id: "LP01",
    description: "Escrita (compartilhada e autônoma)",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP02",
    description: "Análise linguística/semiótica (Alfabetização)",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP03",
    description: "Leitura/escuta (compartilhada e autônoma)",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP04",
    description: "Oralidade",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP05",
    description: "Análise linguística/semiótica (Ortografização)",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP06",
    description: "Produção de textos (escrita compartilhada e autônoma)",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP07",
    description: "Leitura",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP08",
    description: "Análise linguística/semiótica",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP09",
    description: "Produção de textos",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "LP10",
    description:
      "Oralidade(Considerar todas as habilidades dos eixos leitura e produção que se referem a textos ou produções orais, em áudio ou vídeo)",
    created: new Date(Date()).toISOString(),
  },
];

const fieldsArray: Array<fieldsDto> = [
  {
    id: "01",
    description: "Todos os campos de atuação",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "02",
    description: "Campo da vida cotidiana",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "03",
    description: "Campo da vida pública",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "04",
    description: "Campo das práticas de estudo e pesquisa",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "05",
    description: "Campo artístico-literário",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "06",
    description: "Campo jornalístico/midiático",
    created: new Date(Date()).toISOString(),
  },
  {
    id: "07",
    description: "Campo de atuação na vida pública",
    created: new Date(Date()).toISOString(),
  },
];

interface competencesdto {
  id: string;
  name: string;
  created?: string;
}

const competencesArray: Array<competencesdto> = [
  {
    id: "LP",
    name: "Língua Portuguesa",
  },
  {
    id: "AR",
    name: "Arte",
  },
  {
    id: "EF",
    name: "Educação Física",
  },
  {
    id: "LI",
    name: "Língua Inglesa",
  },
  {
    id: "MA",
    name: "Matemática",
  },
  {
    id: "CI",
    name: "Ciências",
  },
  {
    id: "GE",
    name: "Geografia",
  },
  {
    id: "HI",
    name: "História",
  },
  {
    id: "ER",
    name: "Ensino Religioso",
  },
];

interface groupYearDto {
  id: string;
  description: string;
}

const groupYearArray: Array<groupYearDto> = [
  {
    id: "01",
    description: "1º",
  },
  {
    id: "12",
    description: "1º, 2º",
  },
  {
    id: "15",
    description: "1º, 2º, 3º, 4º, 5º",
  },
  {
    id: "02",
    description: "2º",
  },
  {
    id: "03",
    description: "3º",
  },
  {
    id: "35",
    description: "3º, 4º, 5º",
  },
  {
    id: "04",
    description: "4º",
  },
  {
    id: "5",
    description: "5º",
  },
  {
    id: "06",
    description: "6º",
  },
  {
    id: "67",
    description: "6º, 7º",
  },
  {
    id: "69",
    description: "6º, 7º, 8º, 9º",
  },
  {
    id: "07",
    description: "7º",
  },
  {
    id: "08",
    description: "8º",
  },
  {
    id: "89",
    description: "8º, 9º",
  },
  {
    id: "09",
    description: "9º",
  },
];
interface portuguesDto {
  id: string;
  competences: string;
  group_years: string;
  field: string;
  unit: string;
  object: string;
  skill: string;
  comment?: string;
  resume?: string;
}

const portuguesSeed: Array<portuguesDto> = [
  {
    id: "EF01LP01",
    competences: "LP",
    group_years: "01",
    field: "01",
    unit: "LP03",
    object: "Protocolos de leitura",
    skill: "EF01LP01",
    comment:
      "O momento de leitura em voz alta de materiais impressos e digitais, feita pelo professor, terá o papel de modelizar procedimentos de leitura, entre eles, o que se refere a esta habilidade. Esta habilidade também é parte do processo de aquisição do sistema de escrita, porque o procedimento de apontar o que está sendo lido oferece pistas sobre a relação entre fala e escrita.",
    resume:
      "Para contextualizar o desenvolvimento dessa habilidade, o currículo pode orientar que a prática de leitura se desenvolva em situações significativas, em que o ato de refletir sobre as características do sistema de escrita (por exemplo, saber a direção em que se lê) aconteça de modo a trazer para os estudantes o papel da leitura na vida. Nesse processo, podem ajudar projetos e/ou sequências didáticas que proponham, por exemplo, a oralização de textos (como preparar-se para apresentar ou gravar uma leitura — cantiga, poema etc. —  para pais ou colegas). Os objetivos poderão orientar atividade de leitura feita pelo professor e acompanhada pelo aluno em material impresso ou projetada por aparelhos eletrônicos.",
  },
  {
    id: "EF01LP02",
    competences: "LP",
    group_years: "01",
    field: "01",
    unit: "LP01",
    object: "Correspondência fonema-grafema",
    skill: "EF01LP02",
    comment:
      "A escrita espontânea deve acontecer a partir de textos (listas, trechos de parlendas etc.) desde o início do 1º ano, de modo permanente. Escrevendo e analisando suas produções, pensando como grafar determinadas palavras, tendo escritas convencionais como referência, os estudantes vão, progressivamente, utilizando as letras que representam os fonemas. É possível chegar à compreensão da base alfabética até o final do 2º ano.",
    resume:
      "Na elaboração do currículo, pode-se contextualizar esta habilidade com temas de interesse dos alunos. É possível prever, nas salas de alfabetização, em projetos e/ou sequências didáticas, o funcionamento da biblioteca de classe, o estudo sobre um povo indígena do Brasil, a elaboração de uma receita culinária, a produção de orientações para uma brincadeira. Ainda, esta habilidade pode ser aprofundada nos currículos com a previsão da escrita situada em textos cuja unidade mínima seja a palavra, como títulos e legendas com uma ou mais palavras, modo de preparo de receitas culinárias, estrofe de uma cantiga, por exemplo, de acordo com as possibilidades e necessidades dos estudantes. As habilidades propostas no currículo podem contemplar situações de análise em grupos, em duplas e individualmente.",
  },
  {
    id: "EF01LP03",
    competences: "LP",
    group_years: "01",
    field: "01",
    unit: "LP01",
    object: "Construção do sistema alfabético/ Convenções da escrita",
    skill: "EF01LP03",
    comment:
      "A observação e análise de escritas acontece tanto para reconhecer partes iguais de duas palavras (na lista de nomes: MARIANA e MARIA) quanto para identificar semelhanças gráficas em partes de textos que se relacionam do ponto de vista sonoro, como as rimas de um poema. Os textos de referência para atividades como estas devem ser conhecidos pelos estudantes. O procedimento de comparação é recurso a ser utilizado na produção de novas escritas.",
    resume:
      "Na elaboração do currículo, cada região poderá pensar em propor habilidades que favoreçam a prática de leitura e escrita de modo permanente nas salas de alfabetização, valorizando a análise de referenciais estáveis de escrita, como o nome próprio e os textos da tradição oral, que possibilitam um avanço na compreensão das relações grafema-fonema. É importante indicar a progressão de habilidades que envolvam análise de unidades menores que a palavra, considerando que os alunos terão melhores condições de realizá-la após a compreensão da base alfabética. Para que essa análise seja possível, é preciso criar condições para a realização de comparação entre escritas: um procedimento a ser aprendido para potencializar a reflexão sobre o sistema de escrita.",
  },
  {
    id: "EF01LP04",
    competences: "LP",
    group_years: "01",
    field: "01",
    unit: "LP02",
    object: "Conhecimento do alfabeto do português do Brasil",
    skill: "EF01LP04",
    comment:
      "Trata-se de habilidade que se efetiva pelo contato com o material impresso e/ou digital, tanto pela prática de leitura do professor acompanhada pelo estudante quanto pelo exercício de ler, ainda que sem saber, em interação com os colegas ou, ainda, nas atividades de escrita. A progressão da identificação das letras (princípio acrofônico) acontece gradualmente, com reorganizações constantes até a produção de escritas ortográficas. O princípio acrofônico é compreendido em atividades de escrita, quando a escolha da letra e a sua nomeação o evidenciam.",
    resume:
      "Na elaboração do currículo, pode-se contextualizar esta habilidade com a indicação de textos da tradição oral regionais que, ao serem utilizados em atividades de leitura e escrita, contribuem para a compreensão da relação existente entre fala e escrita. As habilidades propostas no currículo podem sinalizar relações progressivas que vão desde um registro gráfico não convencional (ainda que relacionado à fala) para uma representação convencional que contemple a escrita de todos os fonemas.O princípio acrofônico é um indicador de possibilidades de som da letra, não oferecendo referências para todos os fonemas, pois a escrita brasileira é também ortográfica. O uso de apenas essa ideia pode trazer dificuldades para o estudante; assim, não convém que um currículo dissocie esta e outras habilidades que tratam das relações entre letras e fonemas da prática de ler e escrever textos — ainda que sejam aqueles em que a organização estrutural facilite a memorização —, visto que é por meio dessas práticas que a compreensão do princípio acrofônico acontece.",
  },
  {
    id: "EF01LP05",
    competences: "LP",
    group_years: "01",
    field: "01",
    unit: "LP02",
    object: "Construção do sistema alfabético",
    skill: "EF01LP05",
    comment:
      "A associação de uma marca gráfica (seja letra ou não) a cada emissão sonora de uma palavra (sílaba oral) já representa indícios do processo de fonetização que, neste momento, não compreende a reanálise da sílaba em unidades menores nem, portanto, o estabelecimento de relação entre fonema-letra/grafema. Aos poucos, por meio da reflexão reiterada sobre a escrita, será possível que isso aconteça, chegando-se ao uso das letras convencionais.",
    resume:
      "Na elaboração do currículo, recomenda-se propor habilidades que contemplem, no 1º e 2º ano, a análise de palavras e suas partes a partir do trabalho com textos da tradição oral e listas, progredindo para uma análise cada vez mais ajustada de partes menores da palavra, no que se refere: à quantidade (quantas letras e sons a compõem); à qualidade (quais letras correspondem a quais sons); à ordem das letras na escrita de cada palavra. Podem ser criados espaços de reflexão a respeito da correspondência fonema-grafema (do princípio alfabético à construção da ortografia), por meio da comparação reflexiva entre palavras — habilidade (EF01LP03) — de modo progressivamente autônomo, a partir de textos genuínos do repertório local que atendam interesses temáticos dos estudantes.",
  },
  {
    id: "EF01LP06",
    competences: "LP",
    group_years: "01",
    field: "01",
    unit: "LP02",
    object: "Construção do sistema alfabético e da ortografia",
    skill: "EF01LP06",
    comment:
      "Essa habilidade compreende a identificação das emissões vocais que compõem a palavra falada — as sílabas —, o que acontece, no processo de compreensão do sistema, tão logo o estudante compreende a relação entre a fala e a escrita, sendo conhecimento fonológico precoce no processo de alfabetização. Em situações de leitura e escrita, essa habilidade funciona como procedimento de controle do registro e ajuste do falado ao escrito.",
    resume:
      "Na elaboração do currículo, é possível que as habilidades propostas orientem a segmentação oral das palavras em sílabas em situações significativas com o uso de cantigas, parlendas do repertório local e nacional, de modo a contribuir para a constituição proficiente desta habilidade. Após a compreensão do sistema de escrita, essa habilidade será uma ferramenta para a compreensão de outros aspectos da linguagem verbal (tonicidade e acentuação).",
  },
  {
    id: "EF01LP07",
    competences: "LP",
    group_years: "01",
    field: "01",
    unit: "LP02",
    object: "Construção do sistema alfabético e da ortografia",
    skill: "EF01LP07",
    comment:
      "Trata-se de habilidade desenvolvida progressivamente, pelo uso da linguagem em situações de leitura e escrita de textos diversos, especialmente as parlendas, os poemas e as cantigas. À medida em que os estudantes avançam na compreensão do sistema de escrita, vão realizando análises fonológicas cada vez mais ajustadas, tanto na palavra quanto na sílaba, até chegar ao fonema.",
    resume:
      "Na elaboração do currículo, as habilidades propostas podem prever análises fonológicas a partir de textos conhecidos, até chegar-se a orientar análises de palavras e partes delas, culminando com a análise da relação fonema-grafema, em situações de reflexão sobre a grafia correta, o que só deverá ocorrer após a compreensão do sistema de escrita pelos estudantes. Além disso, essas habilidades são conhecimento fundamental para realizar procedimentos de translineação.",
  },
  {
    id: "EF01LP08",
    competences: "LP",
    group_years: "01",
    field: "01",
    unit: "LP02",
    object: "Construção do sistema alfabético e da ortografia",
    skill: "EF01LP08",
    comment:
      "Trata-se de habilidade desenvolvida, progressivamente, pelo uso da linguagem em situações de leitura e escrita de textos diversos. À medida que os estudantes avançam na compreensão do sistema de escrita, vão realizando análises fonológicas cada vez mais ajustadas, tanto na palavra quanto na sílaba, até chegar ao fonema.",
    resume:
      "Na elaboração do currículo, as habilidades propostas podem prever análises fonológicas a partir de textos conhecidos, até chegar a orientar análises de palavras e partes delas, culminando com a análise da relação fonema-grafema, em situações de reflexão sobre a grafia correta. Neste último caso, isso só deverá ocorrer após a compreensão do sistema de escrita pelos estudantes, não sendo conveniente que um currículo oriente o trabalho com esta habilidade de modo separado da leitura e escrita de textos. Além disso, esta habilidade é conhecimento fundamental para realizar procedimentos de translineação.",
  },
  {
    id: "EF01LP09",
    competences: "LP",
    group_years: "01",
    field: "01",
    unit: "LP02",
    object: "Construção do sistema alfabético e da ortografia",
    skill: "EF01LP09",
    comment:
      "Esta habilidade remete à análise fonológica que deve ser orientada no processo de alfabetização. A progressão evolui da análise de palavras presentes em textos conhecidos para refletir sobre as características do sistema de escrita, para a análise de palavras que compõem, por exemplo, um acervo selecionado para discutir determinada regularidade ortográfica, de modo que a reflexão acontece no âmbito dos estudos sobre a convenção da escrita.",
    resume:
      "Na elaboração do currículo, as habilidades propostas podem prever análises fonológicas de palavras e partes delas, a partir de textos conhecidos (lista de nomes da sala, de objetos, textos como: parlendas, cantigas), culminando com a análise da relação fonema-grafema, em situações de reflexão sobre a grafia correta, que deve ocorrer apenas após a compreensão da base alfabética. Esse procedimento é importante para a compreensão da base alfabética do sistema de escrita, assim como das questões ortográficas.",
  },
  {
    id: "EF01LP10",
    competences: "LP",
    group_years: "01",
    field: "01",
    unit: "LP02",
    object: "Conhecimento do alfabeto do português do Brasil",
    skill: "EF01LP10",
    comment:
      "Trata-se de habilidade que se efetiva pelo contato com o material impresso e/ou digital, tanto pela prática de leitura do professor acompanhada pelo estudante quanto pelo exercício de ler, ainda que sem saber, em interação com os colegas ou, ainda, nas atividades de escrita. A progressão da identificação das letras acontece, gradualmente, com reorganizações constantes até a produção de escritas ortográficas.",
    resume:
      "Na elaboração do currículo, pode-se contextualizar esta habilidade com a indicação de textos da tradição oral regionais que, ao serem utilizados em atividades de leitura e escrita, contribuem para a compreensão da relação existente entre fala e escrita. As habilidades propostas podem sinalizar relações progressivas que vão desde um registro gráfico não convencional (ainda que relacionado à fala) para uma representação convencional que contemple a escrita de todos os fonemas. O princípio acrofônico é um indicador de possibilidades de som da letra, não oferecendo referências para todos os fonemas, pois a escrita brasileira é também ortográfica. O uso de apenas essa ideia pode trazer dificuldades para o estudante; assim, não convém que um currículo dissocie esta e outras habilidades que tratam das relações entre letras e fonemas da prática de ler e escrever textos — ainda que sejam aqueles em que a organização estrutural facilite a memorização —, visto que é por meio dessas práticas que a compreensão do princípio acrofônico acontece.",
  },
  {
    id: "EF01LP11",
    competences: "LP",
    group_years: "01",
    field: "01",
    unit: "LP02",
    object: "Conhecimento das diversas grafias do alfabeto/ Acentuação",
    skill: "EF01LP11",
    comment:
      "O trabalho formal com essa habilidade acontece após o momento em que os estudantes compreendem as regras de geração do sistema de escrita. Contudo, no contato com os textos impressos e digitais há uma aproximação a essas habilidades.",
    resume:
      "Na elaboração do currículo, a orientação a ser dada para o desenvolvimento da habilidade refere-se, sobretudo, à disponibilização de diversos materiais impressos e digitais que, certamente, apresentarão tipos de letra diferentes, tematizando esse aspecto das atividades de ensino. Recomenda-se que, inicialmente, a prática em alfabetização seja orientada com o uso de letra maiúscula de imprensa tanto em atividades de leitura quanto de escrita. Posteriormente, os materiais como livros, revistas, jornais impressos e digitais permitem o acesso a outros tipos de letra, favorecendo a análise e reconhecimento de situações de uso dos diferentes tipos, além da letra cursiva, de uso mais frequente no contexto escolar.",
  },
  {
    id: "EF01LP12",
    competences: "LP",
    group_years: "01",
    field: "01",
    unit: "LP02",
    object:
      "Segmentação de palavras/Classificação de palavras por número de sílabas",
    skill: "EF01LP12",
    comment:
      "Para segmentar o texto em palavras, o aprendiz deverá articular as referências de palavras que constituiu a partir da fala — baseadas na prosódia — com as referências obtidas a partir dos textos escritos — conjunto de letras delimitado por espaços em branco ou sinais de pontuação. É nessa articulação que se constituem os critérios de segmentação pelo estudante.",
    resume:
      'A construção da habilidade de segmentar o texto em palavras acontece pela prática da leitura e escrita (ler e segmentar textos conhecidos escritos de modo aglutinado, contar as palavras e comparar os resultados com os colegas). Na elaboração do currículo, pode-se enfatizar processos que levem o aprendiz a, progressivamente, superar ideias como: a) artigos definidos, preposições, conjunções, pronomes átonos não devem ser representados por escrito;  b) pronunciar "vemcácomigo" ou "afoto" junto não torna esses segmentos palavras; c) na escrita se enxerga agrupamentos de letras — as palavras — separados por espaços em branco ou sinais de pontuação, o que não acontece na fala. A complexificação do trabalho com esta habilidade deve prever a superação dessas ideias, de modo que o aluno compreenda, progressivamente, que escrita e fala possuem critérios diferentes para segmentar as palavras.',
  },
  {
    id: "EF01LP13",
    competences: "LP",
    group_years: "01",
    field: "01",
    unit: "LP02",
    object: "Construção do sistema alfabético",
    skill: "EF01LP13",
    comment:
      "Esta habilidade remete à análise fonológica que deve ser orientada no processo de alfabetização. A progressão evolui da análise de palavras presentes em textos conhecidos para refletir sobre as características do sistema de escrita, para a análise de palavras que compõem, por exemplo, um acervo selecionado para discutir determinada regularidade ortográfica, de modo que a reflexão acontece no âmbito dos estudos sobre a convenção da escrita.",
    resume:
      "Na elaboração do currículo, as habilidades propostas podem prever análises fonológicas de palavras e partes delas, a partir de textos conhecidos — no caso da reflexão sobre as características do sistema alfabético —, culminando com a análise da relação fonema-grafema, em situações de reflexão sobre a grafia correta, desde que os estudantes já tenham compreendido o sistema alfabético. Esse procedimento é importante para a compreensão da base alfabética do sistema de escrita, assim como das questões ortográficas, não sendo indicado que aconteça de modo desarticulado do trabalho com a prática de leitura e de escrita.",
  },
  {
    id: "EF01LP14",
    competences: "LP",
    group_years: "01",
    field: "01",
    unit: "LP02",
    object: "Pontuação",
    skill: "EF01LP14",
    comment:
      "Apesar de esta habilidade não se referir aos sinais gráficos de acentuação, é possível inclui-los junto com os sinais de pontuação, como outras marcas gráficas que um texto/palavra apresenta e que o aluno deve reconhecer. Trata-se do início de ampliação organizada do olhar do aluno para além do sistema alfabético de escrita.",
    resume:
      "Na elaboração do currículo, deve-se considerar que, na escola, o estudo da pontuação acontece de duas maneiras: na leitura, ao analisar os efeitos de sentido produzidos pelo uso feito no texto; e na escrita, de modo epilinguístico, no uso da linguagem, ao discutir possibilidades de pontuar, analisar os efeitos de sentido produzidos pelas diversas possibilidades que se colocam (ponto final, de interrogação, de exclamação) e selecionar as mais adequadas às intenções de significação. As situações de revisão processual coletiva do texto potencializam a reflexão sobre aspectos textuais como esse. A progressão está prevista pela ampliação gradativa dos sinais a serem utilizados, mas também deve-se considerar o nível de autonomia do estudante.",
  },
  {
    id: "EF01LP15",
    competences: "LP",
    group_years: "01",
    field: "01",
    unit: "LP02",
    object: "Sinonímia e antonímia/Morfologia/Pontuação",
    skill: "EF01LP15",
    comment:
      "Esta habilidade prevê reconhecer relações de sinonímia e antonímia por comparação de palavras a partir de uma determinada relação. É importante que a relação seja apresentada em textos, para que o sentido das palavras seja apreendido na acepção adequada.",
    resume:
      "Na elaboração do currículo, é preciso que o movimento metodológico a ser empregado nesse estudo corresponda à análise comparativa e à reflexão com base em inventários. Assim, a proposta é estudar dois grupos de palavras: um que contenha uma lista de palavras com seus sinônimos e outro que contenha a mesma lista de palavras com seus antônimos. A tarefa é identificar o critério de agrupamento de cada uma das listas. Depois disso, dada uma lista de palavras, pode-se elaborar um grupo que contenha os sinônimos destas, a partir de um rol dado; depois, elaborar outro grupo que contenha os seus antônimos, a partir de outro rol. No currículo escolar, a progressão pode organizar-se a partir da complexidade lexical e do nível de autonomia requerido do aluno.",
  },
  {
    id: "EF01LP16",
    competences: "LP",
    group_years: "01",
    field: "02",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF01LP16",
    comment:
      "Trata-se de uma habilidade complexa, que precisa considerar tanto o trabalho com as habilidades de leitura quanto as características de cada um dos gêneros do campo da vida cotidiana (organização interna; marcas linguísticas; conteúdo temático) e dos textos específicos a serem lidos.  Atentar para o fato de que o trabalho previsto é em colaboração, e não de modo autônomo.",
    resume:
      "Na elaboração do currículo, pode-se considerar, na definição das habilidades, as características dos textos selecionados e dos gêneros previstos. As parlendas, por exemplo, são textos da tradição oral. Organizam-se em versos rimados, ritmados e, por vezes, repetitivos, nem sempre com significado lógico. Podem ter várias finalidades: ensinar (a contar, por exemplo); arreliar o adversário; escolher participantes de jogos; adivinhar; ninar; brincar (pular corda, por exemplo); finalizar ou começar histórias, entre outras. Podem ser acompanhadas por movimentos corporais. Nas atividades de estudo, convém focalizar as características que forem importantes para a compreensão do texto, articular essas características à finalidade do texto, prever um trabalho dialógico e reflexivo, assim como a comparação entre textos por semelhanças e diferenças.",
  },
  {
    id: "EF01LP17",
    competences: "LP",
    group_years: "01",
    field: "02",
    unit: "LP01",
    object: "Escrita autônoma e compartilhada",
    skill: "EF01LP17",
    comment:
      "Trata-se de uma habilidade que articula a produção textual com o gênero em foco e três vetores do processo de escrita (situação/tema ou assunto/finalidade). Envolve ao menos duas operações distintas: planejar e produzir, que podem ser trabalhadas separadamente, e significam organizar as ideias para depois colocá-las no papel. Os gêneros a serem trabalhados englobam aqueles relativos ao campo da vida cotidiana.",
    resume:
      "Na elaboração do currículo, podem-se indicar situações de produção, nos dois primeiros anos, tendo o professor como escriba; e, considerando-se a complexidade da tarefa, propor habilidades que envolvam tanto produzir uma parte (inicial/final) de um texto conhecido quanto um texto completo. Portanto, considerando-se o ano, a ajuda do professor pode se dar de duas formas: como escriba do texto ditado pela turma e/ou intervindo no processo de planejamento e produção, coletivamente e em duplas. Assim, as habilidades podem contemplar a produção pelo ditado ao professor e pela parceria com colegas, de acordo com a complexidade do gênero. Para a introdução de gêneros mais complexos do campo de atuação da vida cotidiana, podem ser propostas, nos anos finais, habilidades que prevejam o trabalho em colaboração.",
  },
  {
    id: "EF01LP18",
    competences: "LP",
    group_years: "01",
    field: "02",
    unit: "LP01",
    object: "Escrita autônoma e compartilhada",
    skill: "EF01LP18",
    comment:
      "O registro realizado coletivamente pelo professor, quando o texto é ditado pelos estudantes, permite observar tanto características do sistema de escrita quanto da textualidade (em especial no caso dos textos que não se sabe de cor). Quando situado em um projeto de escrita, também o contexto de produção e as implicações para o texto são tematizados. O trabalho coletivo e em grupo modeliza procedimentos de escrita e otimiza a circulação de informações.",
    resume:
      "Na elaboração do currículo, pode-se contextualizar, aprofundar e complementar esta habilidade considerando que: no registro colaborativo de textos que se sabe de cor, é pertinente que o conteúdo focal sejam as características do sistema de escrita (variedade de letras e palavras, relação do falado com o escrito), uma vez que não há decisões a tomar sobre o que será escrito. Alguns aspectos textuais podem ser tratados, como a organização em versos: escrita de cada um em uma linha, o que implica saber onde começam e terminam. Já no registro coletivo de textos que não se sabe de cor (reescrita/ditado ao professor), o foco pode estar nos aspectos textuais (sequência dos fatos, relação entre eles, articulação dos trechos, realização de concordância nominal e verbal etc.), pois os estudantes, embora possam conhecer o conteúdo, têm que elaborar um texto que não está previamente definido, situação que é fundamental para o desenvolvimento do aluno como produtor de textos, mesmo antes de saber grafá-los.",
  },
  {
    id: "EF01LP19",
    competences: "LP",
    group_years: "01",
    field: "02",
    unit: "LP04",
    object: "Produção de texto oral",
    skill: "EF01LP19",
    comment:
      "Trata-se de habilidade que envolve a leitura e a compreensão do texto a ser recitado, para que o estudante, conhecendo os sentidos do texto, possa ler/recitar/declamar com maior fluência, entonação adequada e utilização de recursos paratextuais. A habilidade favorece, ainda, a reflexão sobre o sistema de escrita, pois a busca pelas rimas propicia o ajuste entre aspectos sonoros e escritos.",
    resume:
      "Na elaboração do currículo, é possível articular a habilidade ao eixo de reflexão sobre o sistema de escrita. Para tanto, pode-se prever que, antes de recitar, seja feita leitura, em colaboração com os colegas ou o professor, garantindo-se que os estudantes acompanhem com os textos em mãos. Além disso, é possível estudar recitações gravadas, analisando as diferentes performances, de modo a constituir um repertório de recursos e condições que permitam um desempenho de melhor qualidade. Há, aqui, oportunidade de trabalho interdisciplinar com a habilidade (EF15AR17), da Arte, no que se refere a recitar textos ritmados com a entonação adequada.",
  },
  {
    id: "EF01LP20",
    competences: "LP",
    group_years: "01",
    field: "02",
    unit: "LP02",
    object: "Forma de composição do texto",
    skill: "EF01LP20",
    comment:
      "Esta habilidade refere-se a reconhecer, na leitura, recursos linguísticos e discursivos que constituem os gêneros previstos, de modo que seja possível empregá-los adequadamente nos textos a serem produzidos.",
    resume:
      "Na elaboração do currículo, é importante considerar que, no 1º ano, esta habilidade deve ser desenvolvida na forma de uma intensa frequentação dos estudantes a textos organizados em tais gêneros. Projetos de coletâneas de jogos e/ou brincadeiras (de roda, de corda, de correr etc.) — com as respectivas instruções — impressos ou digitais, em vídeo ou áudio, podem viabilizar esse trabalho. Na organização do currículo, a progressão pode dar-se a partir da diversificação de textos, da extensão e complexidade deles, assim como o nível de autonomia requerido do aluno.",
  },
  {
    id: "EF01LP21",
    competences: "LP",
    group_years: "01",
    field: "03",
    unit: "LP01",
    object: "Escrita compartilhada",
    skill: "EF01LP21",
    comment:
      "Trata-se de uma habilidade que articula a produção textual com os gêneros do campo da atuação cidadã em jogo e dois vetores do processo de escrita (situação/tema ou assunto). A habilidade prevê a colaboração dos colegas e professores na produção do texto, que envolve organizar as ideias e utilizar a consciência do que significa viver em comunidade para depois escrevê-las em formato de lista.",
    resume:
      "Na elaboração do currículo, pode-se orientar a análise de leis, como o Estatuto da Criança e do Adolescente, entre outras, de modo a constituir repertório temático. É possível propor habilidades que prevejam: a) o planejamento coletivo da situação comunicativa e do texto; b) a análise da forma composicional dos gêneros do campo da atuação cidadã e dos portadores que as integram, para identificar suas características; c) o estudo dos elementos típicos de tais textos para decidir sobre a pertinência de sua utilização, considerando as intenções de significação;  d) a textualização e revisão processual e final. A progressão horizontal pode tomar como referência o grau de complexidade dos textos a serem abordados. Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF12EF04), da Educação Física; (EF01HI04), da História; e (EF01GE04), da Geografia, associadas à identificação, discussão e produção de textos sobre regras de convivência e sua importância.",
  },
  {
    id: "EF01LP22",
    competences: "LP",
    group_years: "01",
    field: "04",
    unit: "LP01",
    object: "Produção de textos",
    skill: "EF01LP22",
    comment:
      "Trata-se de uma habilidade que articula a produção textual com os gêneros do campo investigativo e três vetores do processo de escrita (situação/tema ou assunto/finalidade). E envolve ao menos duas operações distintas: planejar e produzir, que podem ser tratadas em separado, e significam organizar as ideias para depois colocá-las no papel. A ajuda do professor refere-se à atuação como escriba do texto, podendo orientar o trabalho das duplas.",
    resume:
      "Na elaboração do currículo, pode-se pensar em propor habilidades que envolvam o uso de procedimentos de consulta a ambientes digitais em colaboração. É possível, ainda, propor atividades que: a) envolvam análise de textos dos gêneros em questão para extrair as suas características; b) orientem a revisão coletiva durante a produção;  c) desmembrem a habilidade, separando os gêneros e especificando algumas de suas características. Pode-se, por exemplo, propor a produção de conteúdo de diagramas estabelecidos previamente. No caso da entrevista, a aproximação ao gênero poderá ser articulada, regionalmente, a estudos das culturas locais, por meio de entrevistas aos parentes e amigos mais velhos dos alunos.",
  },
  {
    id: "EF01LP23",
    competences: "LP",
    group_years: "01",
    field: "04",
    unit: "LP04",
    object: "Planejamento de texto oral Exposição oral",
    skill: "EF01LP23",
    comment:
      "O foco desta habilidade é a produção de áudios ou vídeos de gêneros investigativos a serem veiculados em mídias digitais. E envolve duas operações complexas sucessivas — planejar e produzir textos desses gêneros — articuladas com três vetores da produção textual: a situação comunicativa; o tema ou assunto; a finalidade da produção. Observar que o trabalho é em colaboração e com a ajuda do professor, tanto para a pesquisa e estudos realizados quanto para a produção do texto oral.",
    resume:
      "A habilidade pode prever tanto a oralização de textos escritos produzidos quanto a produção diretamente oral, por meio de gravações em áudio e/ou em vídeo dos textos previstos, utilizando-se esquemas de apoio escritos. É possível desmembrá-la, prevendo: a) a pesquisa do conteúdo temático; b) o estudo das principais características de textos orais no gênero selecionado para produção;  c) o planejamento e a elaboração do texto a ser produzido. Na elaboração do currículo, pode-se prever um trabalho com a habilidade organizado em sequências ou em projetos didáticos com temática que envolva, por exemplo, entrevistar as famílias para resgate da história do local em que vivem; participar em rádios comunitárias para divulgar campanhas realizadas pelos estudantes; entre outras possibilidades.",
  },
  {
    id: "EF01LP24",
    competences: "LP",
    group_years: "01",
    field: "04",
    unit: "LP02",
    object:
      "Forma de composição dos textos/Adequação do texto às normas de escrita",
    skill: "EF01LP24",
    comment:
      "Esta habilidade refere-se a reconhecer, no processo de leitura, recursos linguísticos e discursivos que constituem os gêneros previstos, de modo que seja possível empregá-los adequadamente nos textos a serem produzidos.",
    resume:
      "Na elaboração do currículo, deve-se considerar que o desenvolvimento desta habilidade pode acontecer por meio da frequentação dos estudantes a textos organizados nos gêneros previstos, o que pode ser sugerido na elaboração dos currículos. A atividade de leitura colaborativa e a de revisão processual e final possibilitam estudar os recursos e analisar a adequação dos textos produzidos. Projetos que prevejam a elaboração de blogs, vlogs, canais digitais ou jornais — digitais ou impressos — nos quais sejam apresentadas entrevistas e/ou curiosidades viabilizam o trabalho, pois incluem a leitura de estudo e a produção dos textos. Na organização do currículo, a progressão pode dar-se pela diversificação do tema abordado, pela complexidade dos textos e pelo nível de autonomia do aluno, que pode se efetivar pela organização de habilidades em que as tarefas sejam realizadas em colaboração e, progressivamente, com autonomia.",
  },
  {
    id: "EF01LP25",
    competences: "LP",
    group_years: "01",
    field: "05",
    unit: "LP01",
    object: "Escrita autônoma e compartilhada",
    skill: "EF01LP25",
    comment:
      "Esta habilidade diz respeito a produzir recontagens de histórias, ou seja, a partir das informações previamente adquiridas, elaborar narrativas. Ela prevê que o professor seja o responsável pelo registro das histórias dos alunos. O desenvolvimento dessa pode ser iniciada antes de o aluno saber escrever.",
    resume:
      "Na elaboração do currículo, é preciso levar em conta que a atividade de recontagem de histórias prevê a elaboração de um texto cujo conteúdo já é conhecido pelo aluno, sendo, mesmo assim, importante prever habilidades que indiquem o planejamento da situação comunicativa e do texto parte a parte, tarefa que poderá ser coletiva. Dessa forma, o currículo pode focalizar, nessa atividade, a capacidade de textualização, ou seja, de redigir o enunciado, considerando a sua organização interna: sequência temporal de ações, relações de causalidade estabelecidas entre os fatos, emprego de articuladores adequados entre os trechos do enunciado, utilização do registro literário, manutenção do tempo verbal, estabelecimento de coerência e coesão entre os trechos do texto, entre outros aspectos. A progressão horizontal pode apoiar-se na extensão e/ou na complexidade das histórias programadas e no foco nesse ou naquele aspecto da composição (personagens/enredo/tempo/espaço).",
  },
  {
    id: "EF01LP26",
    competences: "LP",
    group_years: "01",
    field: "05",
    unit: "LP02",
    object: "Formas de composição de narrativas",
    skill: "EF01LP26",
    comment:
      "Esta habilidade refere-se a reconhecer — na leitura ou escuta — elementos básicos constitutivos dos textos narrativos do campo artístico-literário. Seu desenvolvimento permite ao aluno aprofundar a compreensão de narrativas e desenvolver capacidades de análise e crítica.",
    resume:
      "Na elaboração do currículo, convém que o desenvolvimento dessa habilidade venha associado à frequentação dos estudantes a textos organizados nos gêneros previstos. Enquanto eles não compreenderem a base alfabética do sistema de escrita, é importante que os currículos prevejam atividades de leitura colaborativa de estudo, capazes de propiciar a análise dos recursos indicados, assim como a roda de leitura. O texto exposto para que os estudantes possam ver onde o professor está lendo e acompanhar as suas indicações é recurso de grande relevância. A progressão horizontal pode se dar pela complexidade dos textos escutados e pelo nível de autonomia que se pretende levar o aluno a conquistar em cada etapa. Há, aqui, oportunidade para o trabalho interdisciplinar com as habilidades (EF15AR18), da Arte; e (EF01HI06), da História, associadas à identificação de elementos narrativos em textos lidos, escutados e, também, encenados.",
  },
  {
    id: "EF12LP01",
    competences: "LP",
    group_years: "12",
    field: "01",
    unit: "LP03",
    object: "Decodificação/Fluência de leitura",
    skill: "EF12LP01",
    comment:
      "A habilidade pode orientar a leitura de duas maneiras: a) quando se trata de alunos que estão em processo de construção do sistema, por meio da leitura colaborativa de textos conhecidos de memória, realizando ajuste do texto falado ao seu registro gráfico; b) quando se trata dos alunos que já compreenderam o sistema (o que pode ocorrer até o final do 2º ano), com precisão na decodificação.",
    resume:
      "Na elaboração do currículo, a indicação de habilidades de leitura de textos da tradição oral, como cantigas regionais e nacionais, poemas, letra de músicas, entre outros textos cuja organização estrutural facilite a memorização, é importante para a construção dessa habilidade. Em documentos de orientações didáticas, é possível prever a explicitação das modalidades de trabalho com a leitura (leitura em voz alta pelo professor, leitura autônoma, leitura colaborativa, entre outras) que podem contribuir para a organização do ensino de leitura, que deve acontecer com a construção das habilidades de compreensão do sistema de escrita.",
  },
  {
    id: "EF12LP02",
    competences: "LP",
    group_years: "12",
    field: "01",
    unit: "LP03",
    object: "Formação de leitor",
    skill: "EF12LP02",
    comment:
      "No trabalho com leitura, é preciso ensinar procedimentos e comportamentos leitores: ambos implicam a mobilização das diversas habilidades de leitura.A leitura compartilhada é uma atividade que potencializa esse trabalho: explicita como agem os leitores proficientes na leitura.Ao selecionar temas pertinentes para o ensino, convém considerar os que são do interesse dos alunos e os que são relevantes para a compreensão da realidade vivida.",
    resume:
      "Na elaboração do currículo, é possível prever a leitura colaborativa, que é, inclusive no que diz respeito à seleção de textos, a atividade na qual se estuda um texto por meio de questões problematizadoras feitas pelo professor após uma leitura inicial do texto (ou sem realizá-la, de acordo com o objetivo). A progressão do trabalho com leitura se dá a partir do nível de complexidade dos textos e do nível de autonomia do aluno (trabalho coletivo, grupos, duplas, autônomo).",
  },
  {
    id: "EF12LP03",
    competences: "LP",
    group_years: "12",
    field: "01",
    unit: "LP01",
    object:
      "Construção do sistema alfabético/ Estabelecimento de relações anafóricas na referenciação e construção da coesão",
    skill: "EF12LP03",
    comment:
      "Esta habilidade consiste em observar e reproduzir pequenos textos, e é útil como recurso para chamar a atenção do aluno para aspectos como pontuação, acentuação, presença de letra maiúscula, paragrafação e distribuição gráfica de suas partes, entre outros.",
    resume:
      "Na elaboração do currículo, é possível prever que o desenvolvimento desta habilidade supõe: a) a mobilização da atenção do aluno para com todas as características gráficas do texto: pontuação (medial e final), paragrafação, acentuação, presença de letras maiúsculas, distribuição gráfica de suas partes, translineação; b) a constante mediação do professor em todas as etapas das atividades propostas. Convém que, no currículo, seja sublinhada a necessidade de os textos selecionados serem curtos ou trechos significativos de um texto mais longo. A progressão horizontal pode dar-se pela extensão e complexidade dos textos e pelo nível de autonomia do aluno.",
  },
  {
    id: "EF12LP04",
    competences: "LP",
    group_years: "12",
    field: "02",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF12LP04",
    comment:
      "Trata-se de uma habilidade complexa, que precisa considerar tanto o desenvolvimento de habilidades de leitura quanto as características de cada um dos gêneros do campo da vida cotidiana (organização interna; marcas linguísticas; conteúdo temático) e dos textos específicos a serem lidos.No que se refere à progressão da aprendizagem, atentar para o fato de que a formulação da habilidade já implica um critério: o grau de autonomia do aluno (leitura em colaboração; leitura autônoma).",
    resume:
      "Na elaboração do currículo, pode-se considerar, na previsão de atividades, as características dos textos selecionados para leitura e dos gêneros previstos. Uma receita, por exemplo, organiza-se pela presença de: título, quantidades dos ingredientes, modo de fazer. Pode conter ainda: rendimento, grau de dificuldade e tempo de trabalho. Adequa-se ao portador e espaço de circulação: se for para crianças, as quantidades podem vir indicadas por imagens (xícara, colher etc.) e a linguagem será menos complexa, em especial no 'modo de fazer'. Nas atividades de estudo, convém focalizar as características que forem importantes para a compreensão do texto, articular essas características à finalidade do texto, prever um trabalho dialógico e reflexivo, assim como a comparação entre textos por semelhanças e diferenças. Além do grau de autonomia do aluno, a progressão da aprendizagem pode apoiar-se no grau de complexidade dos textos e dos temas.",
  },
  {
    id: "EF12LP05",
    competences: "LP",
    group_years: "12",
    field: "02",
    unit: "LP01",
    object: "Escrita compartilhada",
    skill: "EF12LP05",
    comment:
      "Esta é uma habilidade diretamente relacionada à construção da textualidade. Articula a produção do texto com o gênero do campo artístico-literário e dois vetores do processo de escrita (situação/finalidade), comportando ao menos duas etapas — planejamento e escrita, que significam organizar as ideias para depois colocá-las no papel — passíveis de tratamento em etapas sucessivas. Poderá ser desmembrada em habilidades que prevejam: a) planejar e recontar histórias; b) planejar e produzir escrita das histórias recontadas, por ditado ao professor e/ou colegas; c) planejar e escrever textos versificados conhecidos de memória (coletivamente, em duplas ou de modo autônomo), como letras de canção, quadrinhas e cordel. Todas as habilidades podem indicar a revisão processual do texto.",
    resume:
      "Na elaboração do currículo, é possível articular esta habilidade a outras que prevejam conteúdos relacionados à participação em situações comunicativas, como saraus, rodas de leitura de poemas e oralização de quadrinhas/cordel, em dia da família na escola, prevendo a observação e o planejamento da situação comunicativa com os alunos. É preciso ressaltar que a atividade de recontagem de histórias prevê a elaboração de um texto cujo conteúdo é conhecido. Dessa forma, é focalizada nessa atividade a capacidade de textualização, ou seja, de redigir o enunciado. Já a atividade de escrita de textos conhecidos de memória envolve apenas o registro gráfico do texto que, nesse caso, é tão conhecido quanto o conteúdo temático. A progressão pode apoiar-se no grau de complexidade dos gêneros mencionados e/ou da autonomia a ser desenvolvida pelo aluno em diferentes etapas de cada um dos dois primeiros anos.",
  },
  {
    id: "EF12LP06",
    competences: "LP",
    group_years: "12",
    field: "02",
    unit: "LP04",
    object: "Produção de texto oral",
    skill: "EF12LP06",
    comment:
      "Trata-se de uma habilidade que articula escrita e oralização da escrita, considerando, ainda, o gênero do campo da vida cotidiana a ser produzido e três vetores da produção, seja escrita, seja oral (situação/tema ou assunto/finalidade).",
    resume:
      "A habilidade requer planejar e produzir textos orais e/ou para oralizar, dependendo da situação comunicativa. É comum, por exemplo, que recados sejam produzidos oralmente; já as instruções de montagem costumam ser elaboradas por escrito, podendo ser oralizadas. Como o objetivo final é a transmissão oral dos textos, na elaboração do currículo, é possível prever que o estudante tanto pode saber o conteúdo de um recado e elaborar o texto quando falar ao destinatário (pessoalmente, por meio de mensagem de voz de aplicativos de celular etc.) quanto pode necessitar ter o texto produzido por escrito para poder ler para o interlocutor (como instruções de montagem e receitas etc.). Para o desenvolvimento desta habilidade, pode-se propor que haja: a) análise da situação comunicativa e dos gêneros com a finalidade de compreender as suas características, de modo a oferecer repertório para a produção; b) planejamento, produção e revisão dos textos, com apoio do registro escrito; c) acesso e utilização de ferramentas digitais que viabilizem a produção dos textos, em áudio ou vídeo. A progressão pode apoiar-se nas duas operações diferentes que a habilidade envolve. Assim, planejamento e produção podem ser programados para momentos sucessivos. Além disso, recomenda-se prever o trabalho em colaboração, desde o coletivo até o organizado em duplas/grupos.",
  },
  {
    id: "EF12LP07",
    competences: "LP",
    group_years: "12",
    field: "02",
    unit: "LP02",
    object: "Forma de composição do texto",
    skill: "EF12LP07",
    comment:
      "Esta habilidade refere-se a reconhecer, no processo de leitura, recursos linguísticos e discursivos que constituem os gêneros previstos, de modo que seja possível reproduzi-los em atividades de escrita e reescrita, assim como de criá-los em atividades de produção de textos. Esta habilidade envolve, portanto, a oralização dos textos previstos, com o objetivo de evidenciar seus padrões rítmicos e sonoros.",
    resume:
      "Na elaboração do currículo, deve-se considerar que os textos previstos são ótimas referências para a realização de leituras de ajuste, posto que a sua organização versificada e o ritmo e melodia oferecem pistas sobre onde começam e terminam os versos, balizando o trabalho do aluno. Projetos de coletâneas de cantigas, parlendas, trava-línguas são sempre ótimas propostas que viabilizam esse trabalho. Na organização do currículo, a progressão pode dar-se a partir da diversificação de textos, da extensão e complexidade deles, assim como o nível de autonomia requerido do aluno. Há, aqui, oportunidade para o trabalho interdisciplinar com as habilidades (EF15AR14), (EF15AR15) e (EF15AR17), da Arte, associadas à experimentação com fontes sonoras e identificação de elementos constitutivos da música.",
  },
  {
    id: "EF12LP08",
    competences: "LP",
    group_years: "12",
    field: "03",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF12LP08",
    comment:
      "Trata-se de uma habilidade complexa, que precisa considerar tanto o trabalho com as habilidades de leitura quanto as características de cada um dos gêneros do campo jornalístico (organização interna; marcas linguísticas; conteúdo temático) e dos textos específicos a serem lidos. A habilidade prevê tanto a colaboração quanto a realização com autonomia, o que pode ser tomado, nos currículos locais, como critério para a progressão da aprendizagem ao longo dos dois primeiros anos.",
    resume:
      "O foco do trabalho são os textos jornalísticos. Assim, Na elaboração do currículo, recomenda-se começar o seu estudo pela especificidade dos portadores típicos (jornais e revistas — por exemplo — impressos e digitais), para que os alunos possam conhecer o local de publicação dos textos, contextualizando-os quanto à extensão, orientação de valores e características gráficas. As rodas de jornal são boas atividades para esse estudo. É preciso considerar as características dos diferentes gêneros que circulam no jornal (notícia, reportagem, carta de leitor etc), para orientar os alunos quanto a isso no processo de leitura. A leitura colaborativa, trabalhada na habilidade (EF12LP02), é atividade fundamental para a realização desse trabalho, seja com textos impressos ou digitais.",
  },
  {
    id: "EF12LP09",
    competences: "LP",
    group_years: "12",
    field: "03",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF12LP09",
    comment:
      "Trata-se de uma habilidade complexa, que precisa considerar tanto o trabalho com as habilidades de leitura quanto as características de cada um dos gêneros do campo publicitário (organização interna; marcas linguísticas; conteúdo temático) e dos textos específicos a serem lidos. A habilidade prevê apenas a realização em colaboração. Assim, pode-se considerar o movimento metodológico básico, excluindo-se a realização com autonomia. (trabalho coletivo ® grupos ® duplas).",
    resume:
      "No campo publicitário, circulam textos que buscam convencer os leitores/ouvintes a consumirem determinados produtos, serviços e ideias, como o anúncio publicitário. São multimodais, articulando imagem, texto verbal, cores e, quando radiofônicos, televisivos ou digitais, sons também. Na elaboração do currículo do trabalho com esses textos, dois aspectos são fundamentais: compreender as marcas linguísticas e recursos de outras linguagens no contexto da função dos gêneros e finalidade dos textos (como o uso do imperativo, metáforas etc) e tematizar as relações de consumo tal como estão constituídas na sociedade hoje, relacionando-as com a sustentabilidade. A leitura colaborativa, trabalhada na habilidade (EF12LP02), é atividade fundamental para a realização desse trabalho.",
  },
  {
    id: "EF12LP10",
    competences: "LP",
    group_years: "12",
    field: "03",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF12LP10",
    comment:
      "Trata-se de uma habilidade complexa, que precisa considerar tanto o trabalho com as habilidades de leitura quanto as características de cada um dos gêneros do campo da atuação cidadã (organização interna; marcas linguísticas; conteúdo temático) e dos textos específicos a serem lidos. A habilidade prevê apenas a realização em colaboração, excluindo-se a realização com autonomia.",
    resume:
      "Os gêneros que circulam no campo da atuação cidadã são diversos, com características bastantes distintas, incluindo de cartazes contendo avisos e orientações práticas de comportamento (multimodais, podendo conter diferentes linguagens) a regulamentos (como o escolar). Na elaboração do currículo, é possível prever que a leitura proficiente desses textos requer, além da mobilização das estratégias de leitura, a compreensão de suas características, na relação com a função do gênero e com a finalidade do texto, nas situações comunicativas em que circulam. A leitura colaborativa, trabalhada na habilidade (EF12LP02), é atividade fundamental para a realização desse trabalho. A progressão da aprendizagem pode se estabelecer com base nas estratégias (trabalho coletivo, grupos, duplas) e nos procedimentos a serem adotados, assim como na complexidade dos gêneros e dos textos previstos.",
  },
  {
    id: "EF12LP11",
    competences: "LP",
    group_years: "12",
    field: "03",
    unit: "LP01",
    object: "Escrita compartilhada",
    skill: "EF12LP11",
    comment:
      "Esta é uma habilidade que articula a produção textual com os gêneros do campo jornalístico em foco e dois vetores do processo de escrita (situação/tema ou assunto). Envolve ao menos duas operações distintas, que podem ser tratadas em separado: planejar e produzir, que significam organizar as ideias para depois colocá-las no papel.",
    resume:
      "Na elaboração do currículo, as habilidades podem ser ampliadas com: a) orientação para uso de procedimentos escritores, como: reler o que está escrito para continuar, consultar o planejamento para tomar decisões na escrita, revisar no processo e ao final;  b) indicação de visitas a ambientes digitais para observação dos gêneros citados, de modo a explicitar suas características e construindo registros que possam repertoriar a produção. É possível, ainda, propor habilidades que orientem a análise de textos dos gêneros para compreender a multimodalidade que os constitui. A progressão — tanto horizontal quanto vertical — pode ser pensada com base no suporte (impresso/digital), na complexidade e/ou extensão do texto de referência e no grau de autonomia que se pretenda para o aluno a cada etapa do ensino.",
  },
  {
    id: "EF12LP12",
    competences: "LP",
    group_years: "12",
    field: "03",
    unit: "LP01",
    object: "Escrita compartilhada",
    skill: "EF12LP12",
    comment:
      "Trata-se de uma habilidade que articula a produção de textos dos gêneros do campo publicitário em foco a três vetores do processo de escrita (situação/tema ou assunto/finalidade). A habilidade prevê a colaboração dos colegas e professores na produção do texto, que envolve organizar as ideias e utilizar a criatividade para depois escrevê-las.",
    resume:
      "Na elaboração do currículo, a habilidade poderá ser articulada a temas relevantes para a região, como campanhas de preservação de parques, praças, de cuidado com os animais, entre outros, de modo a criar situações comunicativas em que faça sentido a conscientização de outros interlocutores da comunidade escolar. É possível sugerir habilidades que prevejam portadores para esses textos, como folhetos e cartazes que possam ser divulgados no entorno da escola. Nesse caso, é indicado que a habilidade oriente o estudo do portador e a reflexão sobre sua adequação de acordo com a situação comunicativa. É possível, ainda, propor habilidades que: a) envolvam análise de textos dos gêneros do campo publicitário, de modo a explicitar as suas características e construindo registros que possam repertoriar a produção; b) orientem o uso de procedimentos escritores, como: reler o que está escrito para continuar, consultar o planejamento para tomar decisões no momento da escrita e revisar no processo e ao final. A progressão — tanto horizontal quanto vertical — pode ser pensada com base na complexidade e/ou extensão do texto de referência e no grau de autonomia que se pretenda para o aluno a cada etapa do ensino.",
  },
  {
    id: "EF12LP13",
    competences: "LP",
    group_years: "12",
    field: "03",
    unit: "LP04",
    object: "Produção de texto oral",
    skill: "EF12LP13",
    comment:
      "Esta habilidade incide sobre a produção de textos (orais/escritos) do gênero campanha de conscientização.  A habilidade articula as atividades escolares relativas a três vetores próprios da produção textual: situação de comunicação, tema ou assunto e finalidade. Além disso, requer duas operações: planejar e produzir os textos dos gêneros estudados.",
    resume:
      "É muito importante que, na elaboração do currículo, preveja-se o acesso e a utilização de ferramentas digitais que viabilizem a produção dos textos em áudio ou vídeo. As habilidades podem: a) envolver a análise de textos, no gênero determinado, para compreender suas características, de acordo com a situação comunicativa; b) orientar a produção/textualização, colaborativa, em mídia digital. Além disso, é preciso considerar que a habilidade prevê oralizar textos escritos na preparação de materiais gravados em vídeo (para exibição na TV, em vlogs, em canais de mídias digitais etc.), e em áudio (para exibição em rádio e canais das mídias digitais etc.). Por isso, é fundamental que sejam previstos estudos dos recursos a serem empregados nesses materiais, considerando a especificidade de cada mídia e ambiente. A progressão, tanto horizontal quanto vertical, pode pautar-se pelo grau de complexidade das peças publicitárias visadas, pela alternância no foco do ensino (o gênero e sua organização geral; as ferramentas digitais a serem mobilizadas; o planejamento; a elaboração) e pelo grau de autonomia a ser conquistada pelo aluno a cada etapa.",
  },
  {
    id: "EF12LP14",
    competences: "LP",
    group_years: "12",
    field: "03",
    unit: "LP02",
    object: "Forma de composição do texto",
    skill: "EF12LP14",
    comment:
      "Esta habilidade refere-se a reconhecer, no processo de leitura, recursos de expressão que constituem os gêneros previstos, de modo que seja possível empregá-los adequadamente nos textos a serem produzidos.",
    resume:
      "Na elaboração do currículo, deve-se considerar que o desenvolvimento desta habilidade se dá por meio da frequentação dos estudantes a textos organizados nos gêneros previstos. A atividade de leitura colaborativa de estudo e a de revisão processual e final possibilitam estudar os recursos e analisar a adequação dos textos produzidos, sendo fundamental a previsão dessas atividades na organização dos currículos. Projetos que prevejam a leitura de matérias de relevância social (local ou global) publicadas em revistas/jornais específicos, e elaboração de cartas de leitor a respeito destas, viabilizam o desenvolvimento da habilidade, pois incluem a leitura de estudo das características do gênero e a produção dos textos. Os currículos podem prever habilidades que orientem a realização de rodas de leitura de jornal que possibilitam ao aluno uma compreensão mais crítica das matérias. A progressão, tanto horizontal quanto vertical, pode apoiar-se no grau de complexidade dos gêneros e textos mencionados, assim como pelo nível de autonomia a ser conquistado pelo aluno a cada etapa.",
  },
  {
    id: "EF12LP15",
    competences: "LP",
    group_years: "12",
    field: "03",
    unit: "LP02",
    object: "Forma de composição do texto",
    skill: "EF12LP15",
    comment:
      "Esta habilidade articula-se com a (EF12LP16) e só se desenvolve adequadamente no interior de práticas de leitura e análise de textos publicitários. Seu foco é reconhecer recursos linguístico-discursivos envolvidos em slogans, garantindo ao aluno não só compreender melhor as particularidades dos textos desse campo, mas, ainda, empregar os recursos correspondentes em suas próprias produções.",
    resume:
      "Na elaboração do currículo, deve-se considerar que o desenvolvimento desta habilidade está intimamente associado ao aprendizado da (EF12LP16), pois o slogan é constitutivo do anúncio publicitário. Recomenda-se, portanto, que a articulação entre elas seja contemplada nos currículos locais e que ambas venham sempre associadas a práticas de leitura e/ou produção de textos nos gêneros em questão. A progressão, tanto horizontal quanto vertical, pode apoiar-se no grau de complexidade dos textos publicitários selecionados para estudo, assim como pelo nível de autonomia a ser conquistado pelo aluno a cada etapa.",
  },
  {
    id: "EF12LP16",
    competences: "LP",
    group_years: "12",
    field: "03",
    unit: "LP02",
    object: "Forma de composição do texto",
    skill: "EF12LP16",
    comment:
      "Estreitamente articulada à (EF12LP15), esta habilidade tem como foco que o aluno reconheça recursos gráficos próprios dos gêneros mencionados, com vistas à sua apropriação. Seu desenvolvimento só se dá no interior de práticas de leitura, análise e produção desses textos, permitindo que o aluno venha a empregá-los adequadamente em sua própria escrita.",
    resume:
      "Na elaboração do currículo, convém que o desenvolvimento desta habilidade seja associado à frequentação dos estudantes a textos organizados nos gêneros previstos. A previsão curricular de projetos de elaboração de campanhas publicitárias (impressas ou digitais) relativas a questões de relevância social pode viabilizar o desenvolvimento da habilidade, pois inclui a leitura de estudo das características do gênero e a produção dos textos. A progressão pode dar-se pela complexidade dos textos lidos (em função, por exemplo, do tema) e pelo nível de autonomia que se pretende levar o aluno a conquistar em cada etapa.",
  },
  {
    id: "EF12LP17",
    competences: "LP",
    group_years: "12",
    field: "04",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF12LP17",
    comment:
      "Trata-se de uma habilidade complexa, que precisa considerar tanto o trabalho com as habilidades de leitura quanto as características de cada um dos gêneros investigativos (organização interna; marcas linguísticas; conteúdo temático) e dos textos específicos a serem lidos. A habilidade prevê tanto a colaboração quanto a realização autônoma. Assim, é preciso considerar a gradação ao longo dos dois anos.",
    resume:
      "Enunciados de tarefas escolares precisam ser lidos e estudados no cotidiano dos trabalhos, considerando suas características, a depender da disciplina a que se referem. Curiosidades, por exemplo, são textos que apresentam aspectos inusitados de animais, lugares, culturas, países etc., e que muitas vezes organizam-se a partir de uma pergunta como 'Você sabia que...?'.Na elaboração do currículo, é importante que se contemplem referências variadas dos gêneros em foco nessa habilidade, articulando a complexidade dos textos visados às possibilidades dos alunos no nível de ensino em jogo. Nas atividades de estudo, convém focalizar as características que forem importantes para a compreensão do texto, articular essas características à finalidade do texto, prever um trabalho dialógico e reflexivo, assim como a comparação entre textos por semelhanças e diferenças.",
  },
  {
    id: "EF12LP18",
    competences: "LP",
    group_years: "12",
    field: "05",
    unit: "LP03",
    object: "Apreciação estética/Estilo",
    skill: "EF12LP18",
    comment:
      "Esta é uma habilidade complexa, que envolve: a) o desenvolvimento das habilidades de leitura como um todo; b) o caráter não utilitário (lúdico/estético) dos textos literários; c) as características dos diferentes gêneros poéticos.  A formulação da habilidade supõe tanto a formação de um repertório literário específico como a previsão curricular de estratégias didáticas que progridam da leitura colaborativa para a autônoma.",
    resume:
      "Atividades que favorecem o desenvolvimento dessa habilidade são, entre outras, a leitura colaborativa — para estudo dos textos e modelização de procedimentos e comportamentos leitores —, a roda de leitores e o diário de leitura — para socialização de impressões sobre leituras realizadas e circulação de critérios de apreciação utilizados pelos diferentes leitores, como na habilidade (EF35LP21). É importante que, na elaboração do currículo, considere-se a disponibilidade, nas escolas, de materiais impressos e/ou digitais, assim como gravações de poemas declamados e outros recursos de imagem e som. No desenvolvimento do currículo, a organização de saraus e de slams cria um espaço de socialização de poemas, selecionados de acordo com  critérios de apreciação ética, estética e afetiva constituídos pelos alunos. A complexidade dos gêneros e textos previstos, as marcas linguísticas dos poemas mencionados e o grau de autonomia do aluno proposta para o primeiro e o segundo anos podem ser bons critérios para a progressão da aprendizagem.",
  },
  {
    id: "EF12LP19",
    competences: "LP",
    group_years: "12",
    field: "05",
    unit: "LP02",
    object: "Formas de composição de textos poéticos",
    skill: "EF12LP19",
    comment:
      "Esta habilidade refere-se a — no processo de leitura de textos — identificar recursos linguísticos e discursivos que constituem os gêneros poéticos previstos. Fundamental para o desenvolvimento dessa habilidade é a oralização de tais textos, sem o que os aspectos relacionados à sonoridade e ao ritmo não podem ser observados.",
    resume:
      "Na elaboração do currículo, é importante considerar que esta habilidade relaciona-se com a (EF35LP31): ambas preveem identificar recursos típicos dos textos versificados, relacionando-os com impressões e sensações por eles provocadas, sendo que, na (EF35LP31), aprofunda-se o estudo, focalizando os efeitos de sentido provocados pelo uso de metáforas e recursos rítmicos (progressão vertical). O desenvolvimento desta habilidade demanda a programação de atividades de estudo coletivo, em especial no 1º e 2º ano, quando os estudantes ainda não se encontram alfabetizados. Convém, portanto, que a mediação do professor e o envolvimento sistemático do aluno em práticas colaborativas de leitura e escrita sejam contemplados já nesses momentos iniciais.",
  },
  {
    id: "EF15LP01",
    competences: "LP",
    group_years: "15",
    field: "01",
    unit: "LP03",
    object: "Reconstrução das condições de produção e recepção de textos",
    skill: "EF15LP01",
    comment:
      "Esta habilidade refere-se à necessidade de o aluno identificar que os textos possuem funções diretamente relacionadas aos diversos campos de atuação da vida social em que se inserem e às diferentes mídias. Trata-se, portanto, de uma habilidade mais ampla, na qual se estudam os textos para procurar características dos gêneros e para estabelecer relações entre eles, os campos de atuação e sua organização interna.",
    resume:
      "Na elaboração do currículo, é possível destacar que o desenvolvimento desta habilidade permite que o aluno reconheça que os textos se organizam em gêneros que possuem funções sociais relacionadas aos diferentes campos de atuação no qual circulam. Espera-se que o aluno reconheça que, para informar-se sobre a vacinação contra febre amarela, por exemplo, pode-se ler notícias publicadas em jornais impressos e digitais que circulam na esfera pública. Por outro lado, se quiser comentar uma matéria publicada em um jornal impresso, deve concluir que o melhor gênero é a carta de leitor. Ou seja, não é em qualquer gênero que se busca qualquer informação: para cada intenção de dizer, há um gênero que é mais adequado. A progressão horizontal e vertical da habilidade pode ser estabelecida com base nas esferas de atividades selecionadas, nos gêneros a serem estudados, nas mídias em que a produção circulará etc.",
  },
  {
    id: "EF15LP02",
    competences: "LP",
    group_years: "15",
    field: "01",
    unit: "LP03",
    object: "Estratégia de leitura",
    skill: "EF15LP02",
    comment:
      "O foco é a realização de antecipações, inferências e verificações ao longo do processo de leitura, a partir tanto da recuperação do contexto de produção e de recepção do texto a ser lido quanto do universo temático em jogo. É possível articular essas informações com pistas fornecidas pelo próprio texto, para realizar previsões sobre o conteúdo. Durante a leitura do texto, essa articulação permite inferir dados implícitos e verificar antecipações e inferências realizadas.",
    resume:
      "Os vetores desta habilidade são: a) a antecipação de informações sobre o conteúdo do texto (posições, tratamento temático, visão do interlocutor, valores etc.); b) a realização de inferências, seja a partir de dados do texto, das informações trazidas pelo professor sobre o contexto de produção ou do conhecimento prévio do aluno; c) a verificação tanto das antecipações realizadas quanto das inferências. O uso dessas informações é importante durante todo o processo de leitura, pois permite uma melhor compreensão e maior fluência. Na elaboração do currículo, a progressão pode se dar com base nos gêneros abordados, no foco do trabalho didático (mobilização de conhecimentos prévios; recuperação do contexto de produção; antecipações; produção de inferências; verificação) e no grau de autonomia do aluno na etapa de ensino em jogo.",
  },
  {
    id: "EF15LP03",
    competences: "LP",
    group_years: "15",
    field: "01",
    unit: "LP03",
    object: "Estratégia de leitura",
    skill: "EF15LP03",
    comment:
      "As informações explícitas em um texto são aquelas que estão, literalmente, expressas no texto, seja ele oral ou escrito. Localizá-las, portanto, no caso do texto escrito, requer do aluno que leia o enunciado e a identifique. Muitos consideram essa habilidade como a menos complexa. É preciso considerar, no entanto, que localizar informações não ocorre no vazio, mas a partir do texto. Assim, é tarefa que pode ser tão complexa quanto o próprio texto.",
    resume:
      "Na elaboração do currículo, é necessário considerar pode-se prever que a compreensão de um texto requer a mobilização simultânea de várias habilidades e a utilização de diversos procedimentos, de acordo com o grau de autonomia do aluno e a finalidade e o tipo de leitura a ser realizada. Assim, não convém que um currículo dissocie a localização de informação de outras igualmente relevantes, como a identificação da ideia central do texto. A progressão dessa habilidade pode considerar diferentes critérios: o gênero e/ou o tipo de texto em jogo; o objetivo proposto; o tipo de leitura (colaborativa ou autônoma); o procedimento a ser desenvolvido; etc.",
  },
  {
    id: "EF15LP04",
    competences: "LP",
    group_years: "15",
    field: "01",
    unit: "LP03",
    object: "Estratégia de leitura",
    skill: "EF15LP04",
    comment:
      "Os textos das diferentes esferas de atividade costumam apresentar diferentes recursos gráfico-visuais: boxes de complementação, linkagem ou de remissão; infográficos; negrito, itálico, letra capitular; uso de notas de rodapé; hiperlinks; som e movimento; cores, imagens; entre outros. A compreensão adequada do texto depende da identificação dos efeitos de sentido produzidos pelo uso de tais recursos, o que implica articulá-los ao texto verbal.",
    resume:
      "Ao trabalhar com textos multissemióticos, é preciso considerar que os sentidos dependem da articulação entre texto verbal e recursos gráfico-editoriais. Ler o texto sem considerar essa relação é ignorar que posicionamentos político-ideológicos, religiosos, valores éticos e estéticos também podem se apresentar nos recursos gráfico-visuais. Dessa forma, é preciso prever, na elaboração do currículo, situações de aprendizagem nas quais aconteçam a explicitação reflexiva e colaborativa da maneira como o leitor proficiente realiza essa operação. Há recursos que estão mais presentes em textos de determinado campo de atuação, como boxes nos textos de pesquisa e estudo; infográficos em reportagens e notícias; notas de rodapé em textos acadêmicos etc.A progressão curricular pode ser estabelecida com base na quantidade e no tipo de recurso gráfico-visual mobilizado pelo texto; na complexidade do texto e/ou do gênero; no grau de autonomia do aluno em leitura a cada etapa do ensino.",
  },
  {
    id: "EF15LP05",
    competences: "LP",
    group_years: "15",
    field: "01",
    unit: "LP06",
    object: "Planejamento de texto",
    skill: "EF15LP05",
    comment:
      "O foco da habilidade é o planejamento, entendido como etapa inicial do processo de produção do texto. Planejar diz respeito, então, a organizar ideias da pré-escrita levando em conta diversos fatores, como o objetivo do texto final, o público leitor etc. Trata-se de uma habilidade fundamental para que o aluno reconheça e considere os diferentes vetores da escrita. A habilidade pode ser desmembrada, nesse caso, envolvendo os dois tipos de planejamento e prevendo progressão (com e sem ajuda): a) planejar o conteúdo do texto de acordo com o gênero: criação do conteúdo temático (gêneros como: contos em geral, crônicas etc.) ou de pesquisa desse conteúdo (textos nos gêneros: notícia, verbetes, artigos em geral etc.); b) planejar o texto parte a parte, na ordem demandada pelo gênero trabalhado.",
    resume:
      "É possível prever, na elaboração do currículo, uma progressão do ensino com base nos gêneros a serem abordados na prática de produção de textos, ao longo dos anos, de modo a contemplar demandas locais, nacionais e universais de forma espiral: um mesmo gênero pode aparecer mais de uma vez em textos e/ou se podem demandar tarefas cada vez mais complexas (produzir o final de um conto de aventura lido, produzir um livro com contos de aventura etc.). Além disso, podem-se propor atividades que contemplem o ato de planejar com autonomia progressiva. Ainda, é possível pensar em agrupamentos didáticos, como, por exemplo, habilidades que envolvam gêneros literários e requerem a criação de conteúdo temático e habilidades que envolvam gêneros de outras ordens, como argumentar e expor, contemplando-se a ação de planejar de modo progressivo ao longo dos anos.",
  },
  {
    id: "EF15LP06",
    competences: "LP",
    group_years: "15",
    field: "01",
    unit: "LP06",
    object: "Revisão de textos",
    skill: "EF15LP06",
    comment:
      "O foco da habilidade está nas etapas finais do processo de produção escrita, necessárias ao aprimoramento do texto. Reler e revisar diz respeito a observar a própria produção com atenção a detalhes de edição e aprimoramento do texto. Pode-se desmembrar a habilidade para contemplar a revisão processual e final, com e sem colaboração. É indicado hierarquizar a revisão de aspectos ligados à coerência (informações livres de contradições, completude de ideias etc.) e ao uso de elementos coesivos, como pontuação e organizadores textuais (presença de marcadores de tempo e outros que indiquem a progressão do texto), assim como dos aspectos ortográficos.",
    resume:
      "Na elaboração do currículo, pode-se ampliar a habilidade de revisão de textos produzidos, articulando-a, por exemplo, ao uso de ferramentas digitais, além de prever a familiarização dos alunos com as ferramentas em questão. A progressão do ensino pode apoiar-se na complexidade dos gêneros e dos textos, assim como no grau de autonomia do aluno a cada etapa da aprendizagem pretendida.",
  },
  {
    id: "EF15LP07",
    competences: "LP",
    group_years: "15",
    field: "01",
    unit: "LP06",
    object: "Edição de textos",
    skill: "EF15LP07",
    comment:
      "O foco da habilidade incide sobre os cuidados com a circulação/publicação do texto em suportes impressos ou digitais. Editar, nesse caso, consiste em dar os toques finais à versão final de um texto produzido no que diz respeito à sua estruturação e também nos elementos que o rodeiam, seja em suporte manual ou digital. A habilidade pode ser antecipada por outras, que prevejam a edição do texto em parceria.",
    resume:
      "Na elaboração do currículo, a progressão pode ser pensada com base em critérios como o suporte em jogo, os recursos e as ferramentas de edição a serem utilizados, o grau de autonomia do aluno na realização da tarefa etc. Quando for o caso, podem ser previstas habilidades específicas, que envolvam conhecimentos procedimentais necessários ao uso de ferramentas digitais. Há, ainda, a possibilidade de complementação da habilidade, envolvendo a análise do projeto gráfico em materiais impressos e o design em materiais digitais.",
  },
  {
    id: "EF15LP08",
    competences: "LP",
    group_years: "15",
    field: "01",
    unit: "LP06",
    object: "Utilização de tecnologia digital",
    skill: "EF15LP08",
    comment:
      "O foco desta habilidade é o conhecimento e o domínio de ferramentas digitais na edição e publicação de textos. Assim, está estreitamente associada à habilidade (EF15LP07), na medida em que pressupõe a atividade de edição de texto (o que significa realizar a observação atenta de sua produção, fazendo as revisões e ajustes necessários) e de publicação do texto (ou seja, deixar a produção disponível para o acesso do leitor). Esta habilidade envolve a previsão de habilidades específicas para uso do software e para o gênero produzido/editado, considerando cada ano, assim como a utilização do software com ou sem ajuda do professor.",
    resume:
      "Na elaboração do currículo, é possível prever habilidades específicas, envolvendo conhecimentos procedimentais necessários ao uso do software, que podem ser articulados à habilidade em projetos de elaboração de textos encontrados em: folhetos com orientações sobre questões/problemas locais; guias, pesquisas sobre povos indígenas/africanos; entre outros. Há, aqui, oportunidade de trabalho interdisciplinar com a habilidade (EF15AR26), da Arte, no que se refere à utilização de diferentes tecnologias e recursos digitais nos processos de criação. A habilidade pode, ainda, ser articulada a outras que proponham a contextualização da prática de produção de textos.",
  },
  {
    id: "EF15LP09",
    competences: "LP",
    group_years: "15",
    field: "01",
    unit: "LP04",
    object: "Oralidade pública/Intercâmbio conversacional em sala de aula",
    skill: "EF15LP09",
    comment:
      "O desenvolvimento da habilidade requer a indicação dos discursos que devem ser aprendidos, de modo que as especificidades dos textos orais que circulam nessas situações tornem-se objeto de ensino. Considerar que expor oralmente o resultado de pesquisa realizada requer saberes diferenciados daqueles em que a proposta é opinar para tomar decisão coletiva, ou mesmo debater sobre aspectos controversos de um tema.",
    resume:
      "Na elaboração do currículo, pode-se indicar a análise das situações comunicativas e dos gêneros que nelas circulam, podendo organizar habilidades que prevejam a articulação entre o planejamento e: a) a produção de textos orais: expor os resultados de uma pesquisa para uma audiência, participar de debates sobre questões controversas, apresentar indicações literárias em uma roda, realizar/participar de entrevistas, entre outras; b) a oralização de textos escritos: apresentar poemas em saraus, ler textos produzidos para programas de rádio;c) o desenvolvimento da proficiência em gêneros orais mais produtivos e culturalmente relevantes na região. A progressão ao longo dos cinco anos iniciais pode apoiar-se no grau de complexidade do gênero oral estudado, no foco em habilidade de planejamento ou produção e no grau de autonomia a ser conquistado pelo aluno a cada etapa.",
  },
  {
    id: "EF15LP10",
    competences: "LP",
    group_years: "15",
    field: "01",
    unit: "LP04",
    object: "Escuta atenta",
    skill: "EF15LP10",
    comment:
      "Esta é uma habilidade muito relevante como suporte para a progressão nos estudos. E, ao contrário do que muitos supõem, pode e deve ser ensinada. A escuta atenta poderá ser desenvolvida em situações comunicativas (seminários, mesas-redondas, entre outras) que envolvam gêneros como: exposição oral, discussão argumentativa e/ou debate, entrevista oral etc.",
    resume:
      "Na elaboração do currículo, é possível articular esta habilidade à organização de sequências didáticas para ensino de textos orais que envolvam procedimentos e comportamentos próprios desse tipo de situação comunicativa, como tomar notas e escutar atentamente, com solicitação formal de pedido de turno. As habilidades podem orientar um conjunto de ações que envolvam o estudo e a análise: a) da situação comunicativa; b) do gênero envolvido e suas marcas linguísticas; c) da audiência na escuta. A progressão no desenvolvimento desta habilidade pode pautar-se pelo grau de complexidade do gênero em foco (conversa para tirar dúvida, debate, aula expositiva, seminário etc.); pelo foco no planejamento ou na atuação; pelo aspecto da atenção a ser trabalhado (os gestos e expressões faciais, a entonação, as noções, conceitos e seus termos, as definições, as teses, os argumentos etc.); pelo grau de autonomia a ser conquistado pelo aluno a cada etapa.",
  },
  {
    id: "EF15LP11",
    competences: "LP",
    group_years: "15",
    field: "01",
    unit: "LP04",
    object: "Características da conversação espontânea",
    skill: "EF15LP11",
    comment:
      "Fundamental para o convívio cotidiano, fora e dentro da escola, esta habilidade refere-se a saber organizar a sua fala no gênero indicado, considerando as características do contexto no qual está sendo produzida: a) que se organiza em tantos turnos quantos forem os interlocutores; b) que a efetividade da compreensão mútua depende da escuta efetiva do outro, como balizador da organização da próxima fala; c) que as escolhas dos recursos textuais e paratextuais precisam ser adequadas às intenções de significação e ao contexto da situação de comunicação.",
    resume:
      "Na elaboração do currículo, pode-se prever estudar diferentes tipos de conversação, em diferentes situações comunicativas. Gravações em áudio e/ou vídeo dessas conversas permitem a análise dos mais variados fatores que podem interferir na fluidez e na eficácia dos eventos registrados. Do ponto de vista da progressão, recomenda-se o trabalho em colaboração realizado coletivamente, progredindo para o trabalho em grupos/duplas, até o autônomo, a depender da complexidade do gênero, do tema e do texto.",
  },
  {
    id: "EF15LP12",
    competences: "LP",
    group_years: "15",
    field: "01",
    unit: "LP04",
    object: "Aspectos não linguísticos (paralinguísticos) no ato da fala",
    skill: "EF15LP12",
    comment:
      "A habilidade envolve o reconhecimento e a análise das expressões corporais associadas à fala, com o objetivo de determinar seu papel na construção dos sentidos dos textos orais.",
    resume:
      "Na elaboração do currículo, pode-se prever o estudo de diversas situações de comunicação oral no que se refere aos recursos paralinguísticos, de modo a: a) analisar os efeitos de sentido produzidos por eles;b) reconhecer a adequação (ou não) das escolhas do locutor;c) constituir um repertório de recursos possíveis de serem utilizados; d) selecionar os recursos mais adequados às intenções de significação do discurso a ser produzido. A habilidade poderá também ser prevista de modo articulado à análise de textos orais, em uma determinada situação comunicativa, de modo a aproximar os estudantes das características desses textos e da diversidade de recursos paralinguísticos que compõem a sua multimodalidade. É interessante, do ponto de vista da progressão, prever uma trajetória que vá do trabalho coletivo em colaboração até aproximar-se do autônomo. Há, aqui, oportunidade de trabalho interdisciplinar com a habilidade (EF15AR19), da Arte, no que se refere à identificação de elementos teatrais na vida cotidiana.",
  },
  {
    id: "EF15LP13",
    competences: "LP",
    group_years: "15",
    field: "01",
    unit: "LP04",
    object: "Relato oral/Registro formal e informal",
    skill: "EF15LP13",
    comment:
      "Fundamental para o desenvolvimento da proficiência oral, esta habilidade efetiva-se em situações como: solicitar informações em espaços públicos, seminários, mesas-redondas, rodas de conversas etc. E envolve  gêneros como: exposição oral, discussão argumentativa e/ou debate, entrevista oral etc.",
    resume:
      "Na elaboração do currículo, pode-se organizar habilidades que envolvam as finalidades indicadas, articuladas aos seus respectivos gêneros, além de expor ideias sobre temas estudados e argumentar a respeito de aspectos controversos de temas em geral. A solicitação de informações pode referir-se a espaços como: biblioteca ou secretaria da escola, sobre passeios previstos no calendário escolar, como visitas a exposições de arte e distintos museus. Trata-se de uma situação comunicativa na qual o aluno precisa estar preparado, saber o tipo de informação a ser solicitada em cada ocasião e o modo de fazê-lo naquele espaço. A habilidade pode orientar ações que envolvam: a) o estudo da situação comunicativa; b) o planejamento e a análise do gênero envolvido e suas marcas linguísticas;  c) o papel da audiência no contexto específico. A progressão no desenvolvimento desta habilidade pode pautar-se pelo foco na análise ou na prática de escuta do gênero previsto; pelo grau de complexidade do gênero e/ou do texto oral envolvido; pela situação comunicativa em jogo; pelo grau de autonomia a ser conquistado pelo aluno a cada etapa.",
  },
  {
    id: "EF15LP14",
    competences: "LP",
    group_years: "15",
    field: "02",
    unit: "LP03",
    object: "Leitura de imagens em narrativas visuais",
    skill: "EF15LP14",
    comment:
      "Trata-se de uma habilidade complexa, que precisa considerar tanto o trabalho com as habilidades de leitura quanto as características dos gêneros quadrinho e tirinha (organização interna; marcas linguísticas; conteúdo temático) dos textos a serem lidos. Quanto ao nível de autonomia, considera-se que é uma habilidade prevista para os 5 anos iniciais; assim, o ideal é prever leituras e análise em colaboração e, gradativamente, alcançar a autonomia.",
    resume:
      "Na elaboração do currículo, pode-se considerar as características dos gêneros mencionados e dos textos a serem sugeridos. É importante tomar como objeto de estudo as características das tirinhas e das histórias em quadrinhos. Ambos os gêneros supõem ficcionalização; organização interna que articula recursos verbais aos gráfico-visuais; eixo temporal; linguagem coloquial; entre outros aspectos. A tirinha contém crítica aos valores sociais; provoca efeitos de humor; organiza-se em tira de poucos quadrinhos; é publicada em jornais e revistas. A HQ é mais extensa; trata-se de histórias com trama mais complexa e de diferentes tipos; é publicada em revistas e livros. Convém que o trabalho proposto pelos currículos locais seja dialógico e reflexivo, utilizando análise e comparação por diferenças e semelhanças. Critérios para a progressão podem ser: a complexidade do gênero em foco, a extensão e a complexidade dos textos e/ou dos recursos e o grau de autonomia do aluno a cada etapa do ensino.  Há, aqui, oportunidade de trabalho interdisciplinar com a habilidade (EF15AR04), da Arte, no que se refere a conhecer quadrinhos e tirinhas como uma expressão artística.",
  },
  {
    id: "EF15LP15",
    competences: "LP",
    group_years: "15",
    field: "05",
    unit: "LP03",
    object: "Formação do leitor literário",
    skill: "EF15LP15",
    comment:
      "A habilidade incide sobre a distinção entre textos literários e não literários, o que envolve a compreensão da natureza e dos objetivos das diferentes práticas de leitura, assim como dos pactos de leitura que se estabelecem. No que se refere ao nível de autonomia, atentar para o fato de que a formulação da habilidade prevê a progressão de sua aprendizagem ao longo dos anos iniciais.",
    resume:
      "Para o desenvolvimento dessa habilidade, é fundamental que, na elaboração do currículo, sejam propostos critérios para a seleção de textos, livros e sites que: possuam qualidade estética; não subestimem a capacidade do leitor; abordem adequadamente os temas, do ponto de vista dos alunos; sejam representativos de diferentes culturas, inclusive as menos prestigiadas. É ainda necessário prever o desenvolvimento de projetos de leitura por autores, por gênero e por região, valorizando a cultura de diferentes grupos sociais.",
  },
  {
    id: "EF15LP16",
    competences: "LP",
    group_years: "15",
    field: "05",
    unit: "LP03",
    object: "Leitura colaborativa e autônoma",
    skill: "EF15LP16",
    comment:
      "Trata-se de uma habilidade complexa, que envolve tanto o trabalho com as habilidades de leitura como um todo quanto as características dos gêneros e dos textos literários narrativos de maior extensão. No que se refere ao nível de autonomia, atentar para o fato de que a formulação da habilidade prevê a progressão de sua aprendizagem ao longo dos anos iniciais.",
    resume:
      "Na elaboração do currículo, pode-se prever uma progressão vertical que articule leitura com produção coletiva e autônoma de um gênero no ano, e uma progressão horizontal que garanta uma variedade de gêneros, ao longo dos anos, considerando a complexidade dos textos e gêneros.  É possível pensar, também, a progressão em um mesmo gênero, a partir da escolha de textos mais complexos: a habilidade poderá ser a mesma em dois anos seguidos, por exemplo, e a progressão se dará pela complexidade do texto.",
  },
  {
    id: "EF15LP17",
    competences: "LP",
    group_years: "15",
    field: "05",
    unit: "LP03",
    object: "Apreciação estética/Estilo",
    skill: "EF15LP17",
    comment:
      "Estreitamente associada à habilidade (EF12LP18), esta é uma habilidade complexa. Envolve: a) o desenvolvimento das habilidades de leitura como um todo; b) o caráter não utilitário (lúdico/estético) dos textos literários; c) as características dos poemas visuais e concretos.   A formulação da habilidade supõe tanto a formação de um repertório literário específico como a previsão curricular de estratégias didáticas que progridam do trabalho em colaboração para a conquista da autonomia.",
    resume:
      "Atividades que podem favorecer o desenvolvimento dessa habilidade são, entre outras, a leitura colaborativa — para estudo dos textos e modelização de procedimentos e comportamentos leitores —, a roda de leitores e o diário de leitura — para socialização de impressões sobre leituras realizadas e circulação de critérios de apreciação utilizados pelos diferentes leitores, como na habilidade (EF35LP21). É importante que, na elaboração do currículo, considere-se a disponibilidade de materiais digitais nas escolas, com recursos como som, movimento e imagem. No desenvolvimento do currículo, a organização de saraus e de slams cria um espaço de socialização de poemas, selecionados de acordo com os critérios de apreciação ética, estética e afetiva constituídos pelos alunos. A complexidade dos gêneros e textos previstos, as marcas linguísticas dos poemas mencionados e o grau de autonomia do aluno proposta para cada ano podem ser bons critérios para a progressão da aprendizagem.",
  },
  {
    id: "EF15LP18",
    competences: "LP",
    group_years: "15",
    field: "05",
    unit: "LP03",
    object: "Formação do leitor literário/Leitura multissemiótica",
    skill: "EF15LP18",
    comment:
      "Esta é uma habilidade complexa, que envolve o desenvolvimento das habilidades de leitura como um todo e as características de gêneros e textos diversos, incluindo recursos gráficos ou ilustrações. É especialmente importante na leitura de textos literários.  A formulação da habilidade supõe a previsão curricular de estratégias didáticas que progridam do trabalho em colaboração para a conquista da autonomia.",
    resume:
      "Na elaboração do currículo, é possível propor atividades de leitura colaborativa coletiva, destinadas a modelizar procedimentos de articulação entre texto verbal e visual, analisando, inclusive, o projeto gráfico-editorial como um todo. Propostas de apreciações estéticas e afetivas colaboram para a percepção, pelo aluno, das diferentes perspectivas pelas quais uma obra pode ser vista. A progressão pode basear-se em critérios como a complexidade do gênero e dos textos previstos, o tipo de ilustração e/ou recurso gráfico a ser abordado, a maior ou menor relevância da ilustração para a compreensão do texto ou o grau de autonomia do aluno a cada etapa do ensino.",
  },
  {
    id: "EF15LP19",
    competences: "LP",
    group_years: "15",
    field: "05",
    unit: "LP04",
    object: "Contagem de histórias",
    skill: "EF15LP19",
    comment:
      "A habilidade envolve a leitura compreensiva e o estudo da obra a ser recontada, visando a apropriação de recursos como a entonação expressiva e a prosódia, que ajustam os discursos orais ao contexto.",
    resume:
      "Nos anos iniciais, a atividade de reconto também possibilita a aprendizagem de conteúdos como: a) características típicas do registro literário; b) organização dos fatos em ordem temporal, linear ou não, reconhecendo que a escolha por uma ou outra acarreta diferenças no texto para garantir a coerência e a coesão; c) estabelecimento de relações de causalidade entre os fatos — quando houver — utilizando os articuladores adequados. Assim, na elaboração do currículo, pode-se prever o reconto coletivo, capaz de propiciar seja o resgate de aspectos relevantes do texto original eventualmente omitidos ou mal realizados, seja a discussão de soluções possíveis.  Sempre que possível, a recontagem deve acontecer a partir de textos originais e integrais, escritos em registro literário. Além disso, convém que os currículos definam situações comunicativas específicas para a contação de histórias, como rodas com familiares e /ou colegas, saraus etc.  A progressão no ensino da habilidade pode apoiar-se no grau de complexidade dos textos e/ou gêneros literários propostos, nos diferentes tipos de imagem a serem usados e no foco no planejamento ou na execução das atividades. Pode, ainda, considerar o grau de autonomia que se pretende levar o aluno a atingir a cada etapa.",
  },
  {
    id: "EF02LP01",
    competences: "LP",
    group_years: "02",
    field: "01",
    unit: "LP01",
    object: "Construção do sistema alfabético/ Convenções da escrita",
    skill: "EF02LP01",
    comment:
      "A habilidade envolve diferentes conhecimentos gramaticais. Em relação ao uso da letra maiúscula em substantivos próprios, a análise da ocorrência nos nomes da turma e nos textos lidos pelo professor e acompanhado pelo grupo, e/ou lidos autonomamente, pode ser orientada. Já o uso da pontuação pode ser facilitado pelo ensino organizado em sequências didáticas que envolvam a análise das ocorrências e o uso da pontuação primeiro em situação de produção de texto e, em um segundo momento, de revisão textual.",
    resume:
      "Na elaboração do currículo, as orientações em relação à ortografia podem indicar a realização do ditado diagnóstico, seguido de levantamento das necessidades de aprendizagem, para seleção de objetivos da escola/professor e trabalho com erros mais frequentes da turma. Os conhecimentos sobre a convenção ortográfica, ao longo dos anos, podem prever o uso do dicionário, além de orientar o ensino de procedimentos como: rever a escrita para conferir a ortografia; recorrer a fontes confiáveis; anotar as regularidades descobertas. Os conhecimentos sobre ortografia são diferentes daqueles relacionados à construção da base alfabética. Assim, convém que os objetivos estabeleçam, em ortografia, uma progressão que se inicie apenas após a compreensão da base alfabética. No caso da pontuação, é indicado que os currículos organizem habilidades específicas, considerando que ela faz parte do ato de textualizar/escrever, não se resumindo ao estudo dos sinais de pontuação. A compreensão do sistema de pontuação acontece pela análise da ocorrência em textos e pela reflexão sobre os sentidos provocados sobre os textos em diferentes situações de escrita.",
  },
  {
    id: "EF02LP02",
    competences: "LP",
    group_years: "02",
    field: "01",
    unit: "LP02",
    object: "Construção do sistema alfabético e da ortografia",
    skill: "EF02LP02",
    comment:
      "Atividades para analisar partes de palavras e montar outras podem acontecer com textos conhecidos pelos estudantes, como os nomes da classe, situação em que a segmentação é favorecida pelo aspecto da contextualização e compreensão do princípio do sistema alfabético de que, ao mudar determinada parte de um nome, muda-se o nome (MARIO/MARI/ARI/IAM, RIAM).",
    resume:
      "Na elaboração do currículo, as habilidades propostas podem orientar o trabalho com esta habilidade, ao longo dos anos , contemplando, no 1º ano, tanto a análise de partes de palavras a partir de textos conhecidos do repertório local quanto a reflexão sobre a convenção da escrita, respeitando-se a condição de os estudantes já terem compreendido o sistema de escrita.",
  },
  {
    id: "EF02LP03",
    competences: "LP",
    group_years: "02",
    field: "01",
    unit: "LP02",
    object: "Construção do sistema alfabético e da ortografia",
    skill: "EF02LP03",
    comment:
      "No que envolve as regulares diretas, o desenvolvimento da habilidade acontece pela prática da leitura e escrita de modo permanente. No caso das regulares contextuais, é pertinente a construção de regras de observação das semelhanças e diferenças; portanto, a habilidade pressupõe outras distintas, que envolvem procedimento de análise e registro das descobertas.",
    resume:
      "Na elaboração do currículo, as orientações em relação à ortografia podem indicar a realização do ditado diagnóstico, seguido de levantamento das necessidades de aprendizagem, para seleção de habilidades e trabalho com erros mais frequentes da turma. Os conhecimentos sobre a convenção ortográfica, ao longo dos anos, podem prever o uso do dicionário, além de orientar o ensino de procedimentos como: rever o que escreveu para conferir a ortografia; recorrer a fontes confiáveis; anotar as regularidades descobertas. Os conhecimentos sobre ortografia são diferentes daqueles relacionados à construção da base alfabética devendo, portanto, ser tematizados apenas após a construção desta última.",
  },
  {
    id: "EF02LP04",
    competences: "LP",
    group_years: "02",
    field: "01",
    unit: "LP02",
    object: "Construção do sistema alfabético e da ortografia",
    skill: "EF02LP04",
    comment:
      "Esta habilidade faz parte da compreensão do sistema de escrita e envolve a compreensão da ordem das letras na palavra e na sílaba, o que não costuma ser evidente para os estudantes. Recomenda-se que se priorize a análise e comparação entre escritas estáveis e as do aluno e, além disso, a análise de escritas diferentes de uma mesma palavra, realizadas em momentos distintos pelo aluno.",
    resume:
      "Na elaboração do currículo, pode-se aprofundar esta habilidade enfatizando procedimentos de análise comparativa da escrita, que potencializam as possibilidades de compreensão e avanço do estudante. É preferível que os textos a serem oferecidos aos estudantes para leitura — assim como os solicitados para produção — sejam genuínos; dessa forma, as palavras que os constituem não serão selecionadas por grau de complexidade de sua composição, colocando ao aluno a tarefa de lidar com todos os níveis de complexidade ao mesmo tempo.",
  },
  {
    id: "EF02LP05",
    competences: "LP",
    group_years: "02",
    field: "01",
    unit: "LP02",
    object: "Construção do sistema alfabético e da ortografia",
    skill: "EF02LP05",
    comment:
      "Essa habilidade envolve conhecimento das ocorrências de nasalização em grande parte das palavras da língua portuguesa. A análise, comparação e estabelecimento de diferenças são recomendadas neste caso, além das atividades de leitura e escrita.",
    resume:
      "Na elaboração do currículo, as orientações em relação à ortografia podem indicar a realização do ditado diagnóstico, seguido de levantamento das necessidades de aprendizagem, para seleção de habilidades e trabalho com erros mais frequentes da turma. Os conhecimentos sobre a convenção ortográfica, ao longo dos anos, podem prever o uso do dicionário, além de orientar o ensino de procedimentos como: rever o que escreveu para conferir a ortografia; recorrer a fontes confiáveis; anotar as regularidades descobertas. Os conhecimentos sobre ortografia são diferentes daqueles relacionados à construção da base alfabética, devendo, portanto, ser tematizados apenas após a construção desta última.",
  },
  {
    id: "EF02LP06",
    competences: "LP",
    group_years: "02",
    field: "01",
    unit: "LP02",
    object: "Conhecimento do alfabeto do português do Brasil",
    skill: "EF02LP06",
    comment:
      "Parei Trata-se de habilidade que se efetiva pelo contato com o material impresso e/ou digital, tanto pela prática de leitura do professor acompanhada pelo estudante, quanto pelo exercício de ler, ainda que sem saber, em interação com os colegas ou, ainda, nas atividades de escrita. A progressão da identificação das letras acontece, gradualmente, com reorganizações constantes até a produção de escritas ortográficas. O princípio acrofônico é compreendido em atividades de escrita, quando a escolha da letra e a sua nomeação o evidenciam.",
    resume:
      "Na elaboração do currículo, pode-se contextualizar esta habilidade com a indicação de textos da tradição oral regionais que, ao serem utilizados em atividades de leitura e escrita, contribuem para a compreensão da relação existente entre fala e escrita. As habilidades propostas podem sinalizar relações progressivas que vão desde um registro gráfico não convencional (ainda que relacionado à fala) para uma representação convencional que contemple a escrita de todos os fonemas. O princípio acrofônico é um indicador de possibilidades de som da letra, não oferecendo referências para todos os fonemas, pois a escrita brasileira é também ortográfica. O uso de apenas essa ideia pode trazer dificuldades para o estudante,  assim, não convém que um currículo dissocie esta e outras habilidades que tratam das relaçõe entre letras e fonemas da prática de ler e escrever textos — ainda que sejam aqueles em que a organização estrutural facilite a memorização —, visto que é por meio dessas práticas que a compreensão do princípio acrofônico acontece.",
  },
  {
    id: "EF02LP07",
    competences: "LP",
    group_years: "02",
    field: "01",
    unit: "LP02",
    object: "Conhecimento das diversas grafias do alfabeto/ Acentuação",
    skill: "EF02LP07",
    comment:
      "Esta habilidade implica no reconhecimento das diferentes formas de registro gráfico das letras. Trata-se de habilidade a ser desenvolvida tão logo a compreensão do sistema de escrita tenha acontecido, e não antes disso. Na leitura, o reconhecimento da letra de imprensa maiúscula e minúscula é fundamental; mas, na escrita, a solicitação deve envolver apenas o uso de maiúscula. Na letra cursiva, a escrita deve envolver as duas modalidades.",
    resume:
      "Esta habilidade requer que o estudante, após a compreensão do sistema de escrita, adquira proficiência na grafia de textos com os dois tipos de letra: imprensa e cursiva. Na elaboração do currículo, é importante considerar que o uso da letra cursiva requer maior cuidado, pois implica emendar as letras, além de precisão no movimento a ser feito. A progressão, a ser prevista pelas redes, pode acontecer no 2º ano, visando-se, inicialmente, a agilidade no registro e, depois, a precisão no desenho das letras.",
  },
  {
    id: "EF02LP08",
    competences: "LP",
    group_years: "02",
    field: "01",
    unit: "LP02",
    object:
      "Segmentação de palavras/Classificação de palavras por número de sílabas",
    skill: "EF02LP08",
    comment:
      "Para segmentar o texto em palavras, o aluno deverá articular as referências de palavras que constituiu a partir da fala — baseadas na prosódia — com as obtidas a partir dos textos escritos — conjunto de letras delimitado por espaços em branco e/ou sinais de pontuação. É nessa articulação que se constituem os critérios a serem mobilizados pelo estudante nas práticas de leitura e escrita.",
    resume:
      'Na elaboração do currículo, a construção da habilidade de segmentar o texto em palavras acontece em situações de prática de leitura e escrita. Os currículos podem enfatizar processos que levem o aprendiz a refletir e superar, progressivamente, ideias como: a) artigos definidos, preposições, conjunções, pronomes átonos não devem ser representados por escrito; b) pronunciar "vemcácomigo" ou "afoto" junto não torna esses segmentos palavras; c) na escrita, se enxerga agrupamentos de letras — as palavras — separados por espaços em branco ou sinais de pontuação, o que não acontece na fala. A progressão horizontal do trabalho com esta habilidade deve avançar de modo que o aluno compreenda que escrita e fala possuem critérios diferentes para segmentar as palavras.',
  },
  {
    id: "EF02LP09",
    competences: "LP",
    group_years: "02",
    field: "01",
    unit: "LP02",
    object: "Pontuação",
    skill: "EF02LP09",
    comment:
      "Esta habilidade inclui os seguintes aspectos: identificar os sinais gráficos que chamamos de sinais de pontuação; reconhecer — na leitura — sua função; usar, na produção escrita, esses sinais, para garantir legibilidade e provocar os efeitos de sentido desejados. Considerar, ainda, que este é um momento propício à organização inicial desse saber: pela análise dos efeitos de sentido provocados na leitura de textos, especialmente os conhecidos.",
    resume:
      "Na elaboração do currículo, deve-se considerar que, na escola, o estudo da pontuação acontece de duas maneiras: a) na leitura: analisar os efeitos de sentido produzidos pelo uso feito no texto; b) na escrita: de modo epilinguístico, no uso da linguagem, discutir possibilidades de pontuar, analisar os efeitos de sentido produzidos pelas diversas possibilidades que se colocam (ponto final, de interrogação, de exclamação) e selecionar a mais adequada às intenções de significação. As situações de revisão processual coletiva do texto potencializam a reflexão sobre aspectos textuais como esses. Orienta-se que a progressão curricular seja prevista pela ampliação gradativa dos sinais a serem utilizados, de modo coerente com os efeitos de sentido propostos. Convém, ainda, que os currículos considerem o nível de autonomia do estudante, a ser construído ao longo dos anos.",
  },
  {
    id: "EF02LP10",
    competences: "LP",
    group_years: "02",
    field: "01",
    unit: "LP02",
    object: "Sinonímia e antonímia/Morfologia/Pontuação",
    skill: "EF02LP10",
    comment:
      "Esta habilidade avança em relação à (EF01LP15), pois, por um lado, propõe analisar a diferença entre os sinônimos no que se refere ao contexto de uso; por outro, solicita formar o antônimo por prefixação definida. Essa tarefa supõe desconstruir a ideia de que os sentidos entre sinônimos são sempre idênticos. Além disso, apresenta ao aluno uma das possibilidades de formação do antônimo, a partir do acréscimo de um prefixo dado.",
    resume:
      "Na elaboração do currículo, deve-se considerar que a progressão vertical já está definida, posto que esta habilidade avança em relação à (EF01LP15). É fundamental, ainda, que os currículos associem o seu desenvolvimento às práticas de leitura de textos, conforme indicado. No que se refere à progressão horizontal, pode-se pensar no estudo de diferentes prefixos possíveis para se formar o antônimo. Do ponto de vista metodológico, é possível que os currículos orientem a continuidade da reflexão a partir de inventários (nesse caso, um inventário de antônimos constituídos por prefixos variados — in, im, des, anti, por exemplo — e também sem prefixação). No que tange aos sinônimos, o grau de complexidade lexical (palavras mais difíceis) também pode definir a progressão. Além disso, é preciso considerar o nível de autonomia requerido do estudante para realizar a tarefa, que deve ser progressivamente alcançada.",
  },
  {
    id: "EF02LP11",
    competences: "LP",
    group_years: "02",
    field: "01",
    unit: "LP02",
    object: "Morfologia",
    skill: "EF02LP11",
    comment:
      "Esta habilidade implica em compreender os conceitos de aumentativo e diminutivo e do modo como são constituídos lexicalmente na sua forma regular: com as terminações -ão/-zão; -inho/-zinho.",
    resume:
      "Na elaboração do currículo, a progressão no que se refere a esta habilidade deve prever diminutivos e aumentativos não regulares (com outras terminações). Além disso, é importante analisar os usos do diminutivo e aumentativo nos textos, que podem acarretar sentidos depreciativos, pejorativos e afetivos. Na progressão, é preciso considerar, ainda, o nível de autonomia do estudante ao realizar o estudo, sendo possível propor habilidades que orientem o trabalho em colaboração, inicialmente, e, na sequência, o desempenho autônomo na oralidade e na escrita.",
  },
  {
    id: "EF02LP12",
    competences: "LP",
    group_years: "02",
    field: "02",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF02LP12",
    comment:
      "Trata-se de uma habilidade complexa, que precisa considerar tanto o trabalho com as habilidades de leitura quanto as características de cada um dos gêneros do campo da vida cotidiana (organização interna; marcas linguísticas; conteúdo temático) e dos textos específicos a serem lidos. Atentar para o fato de que o trabalho previsto é com certa autonomia, o que supõe a possibilidade de trabalho em colaboração.",
    resume:
      "Cantigas e canções são gêneros que estão ligados às materialidades: letra e melodia. Na cantiga, a letra é escrita em versos e estrofes e sempre há rimas, o que nem sempre vale para as canções. Há vários tipos de cantigas: de ninar, de roda, de natal, a cada um correspondendo finalidades específicas. A estrutura rítmica das cantigas e canções permite que se estabeleçam relações entre o que se canta e o que está escrito, o que cria condições para uma leitura de ajuste, possibilitando a reflexão sobre o sistema de escrita. Na elaboração do currículo, convém focalizar as características que forem importantes para a compreensão do texto, articular essas características à finalidade do texto, prever um trabalho dialógico e reflexivo, assim como a comparação entre textos por semelhanças e diferenças. Podem ser indicadas habilidades que envolvam a leitura em colaboração e autônoma.",
  },
  {
    id: "EF02LP13",
    competences: "LP",
    group_years: "02",
    field: "02",
    unit: "LP01",
    object: "Escrita autônoma e compartilhada",
    skill: "EF02LP13",
    comment:
      "Trata-se de uma habilidade que articula a produção textual com os gêneros do campo da vida cotidiana e três vetores da produção do processo de escrita (situação/tema ou assunto/finalidade). Envolve ao menos duas operações distintas: planejar e produzir, que podem ser abordadas em separado, e significam organizar as ideias para depois colocá-las no papel.",
    resume:
      "Na elaboração do currículo, a habilidade pode ser ampliada com outras que contemplem a aprendizagem de procedimentos de consulta a ambientes digitais em colaboração e/ou com a ajuda do professor. É possível propor habilidades que: a) envolvam análise de textos dos gêneros do campo da vida cotidiana, extraindo as suas características e construindo registros que possam repertoriar a produção; b) orientem o uso de procedimentos escritores, como reler o que está escrito para continuar escrevendo, consultar o planejamento para tomar decisões e revisar no processo e ao final.A progressão horizontal pode acontecer a partir de dois critérios: o nível de autonomia do aluno para realizar as atividades propostas ou a complexidade do texto a ser elaborado.",
  },
  {
    id: "EF02LP14",
    competences: "LP",
    group_years: "02",
    field: "02",
    unit: "LP01",
    object: "Escrita autônoma e compartilhada",
    skill: "EF02LP14",
    comment:
      "Trata-se de uma habilidade que articula a produção textual com o gênero de relatos de observação de processos e dois vetores do processo de escrita (situação/tema ou assunto). Envolve ao menos duas operações distintas: planejar e produzir, que podem ser tratadas em momentos sucessivos, e significam organizar as ideias para depois colocá-las no papel.",
    resume:
      "Na elaboração do currículo, é possível prever, por exemplo, projetos de elaboração de livros contendo diferentes relatos pessoais temáticos, diários das atividades desenvolvidas na classe, relatos de passeios realizados pela escola, entre outras possibilidades. É possível propor habilidades que: a) envolvam análise de textos dos gêneros de relato, explicitando as suas características e construindo registros que possam repertoriar a produção; b) orientem o uso de procedimentos escritores, como: reler o que está escrito para continuar, consultar o planejamento para tomar decisões no momento da escrita e revisar no processo e ao final. A progressão horizontal pode acontecer a partir de dois critérios: o nível de autonomia do aluno para realizar as atividades propostas ou a complexidade do texto a ser elaborado.",
  },
  {
    id: "EF02LP15",
    competences: "LP",
    group_years: "02",
    field: "02",
    unit: "LP04",
    object: "Produção de texto oral",
    skill: "EF02LP15",
    comment:
      "Trata-se de habilidade que envolve a oralização de textos. Deve ser antecedida pela leitura compreensiva, de modo que, tendo entendido o texto, o estudante possa cantar obedecendo ao ritmo e à melodia. A habilidade favorece, ainda, o desenvolvimento da fluência leitora, fundamental neste ano do ciclo.",
    resume:
      "Na elaboração do currículo, as habilidades podem prever a cantoria acompanhando a letra da canção. Pode-se articular a habilidade ao eixo de reflexão sobre o sistema de escrita. Para tanto, pode-se prever que, antes de cantar, seja feita leitura das letras das canções, em colaboração com os colegas ou o professor, garantindo que os estudantes acompanhem com os textos em mãos. Há, aqui, oportunidade de trabalho interdisciplinar com a habilidade (EF15AR14), da Arte, no que se refere à identificação e exploração de elementos constitutivos da música (ritmo e melodia) por meio de cantigas e canções.",
  },
  {
    id: "EF02LP16",
    competences: "LP",
    group_years: "02",
    field: "02",
    unit: "LP02",
    object: "Forma de composição do texto",
    skill: "EF02LP16",
    comment:
      "Esta habilidade refere-se a reconhecer, na leitura, recursos linguísticos e discursivos que constituem os gêneros previstos, de modo que seja possível empregá-los adequadamente nos textos  a serem produzidos.",
    resume:
      "Na elaboração do currículo, deve-se considerar que, na escola, o desenvolvimento dessa habilidade pode se dar por meio da intensa frequentação dos estudantes a textos organizados nos gêneros previstos. Projetos de troca de cartas em classes de escolas diferentes, de sessões de degustação de pratos da região, acompanhados de um livro de receitas ou de um vlog que as apresenta podem ser boas propostas para viabilizar esse trabalho. Na organização do currículo, a progressão pode se dar a partir da diversificação de textos, da extensão e complexidade deles, assim como do nível de autonomia requerido do aluno.",
  },
  {
    id: "EF02LP17",
    competences: "LP",
    group_years: "02",
    field: "02",
    unit: "LP02",
    object: "Forma de composição do texto",
    skill: "EF02LP17",
    comment:
      "Esta habilidade refere-se a reconhecer, na leitura, recursos linguísticos e discursivos que constituem os gêneros previstos, de modo que seja possível empregá-los adequadamente nos textos  a serem produzidos.",
    resume:
      "Na elaboração do currículo, deve-se considerar que, no 2º ano, a atividade de leitura colaborativa cria bons espaços para o estudo das marcas temporais do texto. Já a de revisão coletiva, processual e final possibilita a análise da adequação delas em textos produzidos. Projetos para elaborar as memórias do grupo podem ser ótimas oportunidades para a produção desses textos; sites como o do Museu da Pessoa oferecem boas referências. Na organização do currículo, a progressão pode dar-se pela diversificação temática dos textos, da extensão e complexidade deles, assim como do nível de autonomia do aluno. É possível propor habilidades que orientem o trabalho com a leitura colaborativa em um bimestre, progredindo para leitura mais autônoma em outro.",
  },
  {
    id: "EF02LP18",
    competences: "LP",
    group_years: "02",
    field: "03",
    unit: "LP01",
    object: "Escrita compartilhada",
    skill: "EF02LP18",
    comment:
      "Trata-se de uma habilidade que articula a produção textual com os gêneros de divulgação de eventos nos formatos em questão e dois vetores do processo de escrita (situação/tema ou assunto). A habilidade envolve duas operações distintas, que podem ser trabalhadas em separado: planejar e produzir, que significam organizar as ideias para depois colocá-las no papel.",
    resume:
      "Na elaboração do currículo, as habilidades locais poderão orientar: a) o uso de procedimentos escritores, como: reler o que está escrito para continuar, consultar o planejamento para tomar decisões no momento da escrita, revisar no processo e ao final; b) a pesquisa dos temas que sejam relevantes para a região e permitam o uso da linguagem persuasiva. É possível, ainda, propor habilidades que: a) prevejam o planejamento coletivo da situação comunicativa e do texto; b) envolvam análise dos portadores e gêneros que os integram para explicitar suas características e elaborar registros; c) analisem os elementos presentes nos textos (imagens, textos, tipo de letra, tamanho, cor etc.). A progressão horizontal pode tomar como referência a complexidade relativa dos textos a serem abordados e o grau de autonomia do aluno.",
  },
  {
    id: "EF02LP19",
    competences: "LP",
    group_years: "02",
    field: "03",
    unit: "LP04",
    object: "Produção de texto oral",
    skill: "EF02LP19",
    comment:
      "O foco da habilidade é a produção de gêneros jornalísticos, como a notícia, visando-se a transmissão oral direta ou em ambientes digitais. A habilidade articula a produção prevista a dois vetores (situação comunicativa; tema ou assunto) e requer duas operações sequenciadas: planejar e produzir texto para ser oralizado.",
    resume:
      "É fundamental que, na elaboração do currículo, preveja-se o acesso e a utilização de ferramentas digitais que viabilizem a produção dos textos em áudio ou vídeo. Pode-se propor: a) análise da situação comunicativa e dos gêneros indicados, na modalidade oral, com a finalidade de compreender suas características, para repertoriar a produção; b) planejamento, produção e revisão dos textos, com apoio do registro escrito;  c) previsão da oralização do texto produzido. Como se trata de oralização de textos escritos, convém que os currículos prevejam a realização de adaptações para compor o jornal falado, como, por exemplo: prever uma abertura que contenha uma saudação ao público e contextualize o assunto; anunciar a atividade seguinte; entre outras especificidades da situação. A progressão horizontal pode apoiar-se no grau de complexidade dos gêneros jornalísticos previstos, no foco do ensino (a organização geral do texto; as ferramentas digitais a serem mobilizadas; o planejamento; a elaboração) e no grau de autonomia a ser conquistada pelo aluno a cada etapa.",
  },
  {
    id: "EF02LP20",
    competences: "LP",
    group_years: "02",
    field: "04",
    unit: "LP03",
    object: "Imagens analíticas em textos",
    skill: "EF02LP20",
    comment:
      "Trata-se de reconhecer que os textos utilizados para apresentar informações coletadas em atividades de pesquisa possuem funções relacionadas ao campo de atuação ao qual pertencem. Assim, é necessário caracterizar o campo de atuação dos textos referidos e sua respectiva função, analisar o tipo de informações que os textos apresentam e identificar a função específica de cada gênero. O grau de autonomia esperada no desenvolvimento desta habilidade deve ser articulado com o repertório suposto para o aluno no nível de ensino em foco.",
    resume:
      "A pesquisa, estudo ou investigação é um conjunto de atividades planejadas para obter informações sobre determinada realidade, documentando-as e oferecendo recursos para a compreensão e resolução de problemas. Ela pode apresentar novas perspectivas sobre a realidade investigada ou confirmar perspectivas já consolidadas. Na elaboração do currículo, é possível ao aluno deduzir, sabendo qual é a função desse campo de atuação — por meio da análise das características dos textos indicados —, que papel tais gêneros possuem no estudo e desenvolvimento da pesquisa. As questões a serem respondidas pelos estudantes, então, seriam: qual a contribuição que uma enquete/entrevista/relato de pesquisa pode oferecer à pesquisa? Sendo assim, qual a sua função?",
  },
  {
    id: "EF02LP21",
    competences: "LP",
    group_years: "02",
    field: "04",
    unit: "LP03",
    object: "Pesquisa",
    skill: "EF02LP21",
    comment:
      "Trata-se de estudar textos informativos de ambientes digitais, como revistas, jornais, sites especializados e orientados para crianças e blogs confiáveis. O objetivo é a exploração de recursos, como hiperlinks para outros textos e para vídeos, o modo de organização das informações e as possibilidades e limites dos recursos próprios da ferramenta e do site específico.",
    resume:
      "Na elaboração do currículo, a rede pode organizar a progressão horizontal a partir do grau de autonomia, da complexidade dos textos e dos ambientes. Por exemplo: inicia-se o trabalho com o manuseio da ferramenta com o texto já aberto em trabalho colaborativo, no coletivo. Aos poucos, passa-se do coletivo para duplas e para o trabalho autônomo. Depois, pode-se iniciar o trabalho a partir do acesso ao ambiente e, no final, considerar textos e ambientes mais complexos. O mesmo movimento pode ser utilizado na progressão entre os anos (vertical), norteando-se pelo repertório dos alunos.",
  },
  {
    id: "EF02LP22",
    competences: "LP",
    group_years: "02",
    field: "04",
    unit: "LP01",
    object: "Produção de textos",
    skill: "EF02LP22",
    comment:
      "Trata-se de uma habilidade que articula a produção textual com os gêneros do campo investigativo em foco e dois vetores do processo de escrita (tema ou assunto/finalidade). Envolve ao menos duas operações distintas, que podem ser tratadas em separado: planejar e produzir, que significam organizar as ideias para depois colocá-las no papel.",
    resume:
      "Na elaboração do currículo, pode-se desmembrar a habilidade propondo atividades que indiquem a ação de planejar de modo coletivo a textualização em colaboração com os colegas. Podem ser propostas, ainda, habilidades que orientem procedimentos de consulta a ambientes digitais em colaboração. É possível propor também habilidades que: a) envolvam análise de textos dos gêneros do campo investigativo, de modo a explicitar as suas características; b) orientem o uso de procedimentos escritores, como: reler o que está escrito para continuar, consultar o planejamento para tomar decisões e revisar no processo e ao final.",
  },
  {
    id: "EF02LP23",
    competences: "LP",
    group_years: "02",
    field: "04",
    unit: "LP01",
    object: "Escrita autônoma",
    skill: "EF02LP23",
    comment:
      "Trata-se de uma habilidade que articula a produção textual com o gênero de registro de observação de resultados de pesquisa. Envolve ao menos duas operações distintas — planejar e produzir —,  que podem ser tratadas em separado, e significam organizar as ideias para depois colocá-las no papel.",
    resume:
      "Na elaboração do currículo, a habilidade permite uma progressão ao longo do ano, prevendo o planejamento e a produção coletiva, pelo ditado ao professor e em parceria com os colegas e a ajuda do professor. É possível propor habilidades que: a) indiquem situações de pesquisa e tomada de notas coletivas antes da produção de registros autônomos, propondo também, dessa forma, uma progressão no ano; b) orientem o uso de procedimentos escritores, como: reler o que está escrito para continuar, consultar o planejamento para tomar decisões no momento da escrita e revisar no processo e ao final.",
  },
  {
    id: "EF02LP24",
    competences: "LP",
    group_years: "02",
    field: "04",
    unit: "LP04",
    object: "Planejamento de texto oral Exposição oral",
    skill: "EF02LP24",
    comment:
      "O foco desta habilidade é a (re)produção oral, para mídias digitais, de textos de gêneros investigativos. E envolve duas operações complexas sucessivas — planejar e produzir textos desses gêneros — articuladas com três vetores da produção textual: a situação comunicativa; o tema ou assunto; a finalidade da produção. A habilidade requer a análise de textos orais do gênero previsto, além de duas operações de produção de textos: planejar e produzir.",
    resume:
      "Na elaboração do currículo, podem ser propostos procedimentos de estudo e pesquisa sobre temas relacionados a serem tratados de modo interdisciplinar, como: destacar informações relevantes; realizar leitura inspecional na busca de materiais; etc. As habilidades podem: a) envolver a análise de textos, no gênero determinado, para extrair suas características, de acordo com a situação comunicativa; a) prever o planejamento do texto a ser produzido, oralmente, considerando a situação em que irá circular (tipo de mídia); c) orientar a produção/textualização. É preciso considerar que a habilidade inclui tanto elaborar textos orais quanto oralizar textos escritos. É possível, por exemplo, preparar um relato oral de uma viagem de estudo do meio, organizando previamente um esquema orientador, e selecionando recursos a serem empregados na apresentação (esquemas, imagens, gráficos). Da mesma forma, é possível escrever um relato e lê-lo em voz alta na gravação de um vídeo, selecionando recursos da mídia utilizada (som, imagem, movimento etc.).",
  },
  {
    id: "EF02LP25",
    competences: "LP",
    group_years: "02",
    field: "04",
    unit: "LP02",
    object:
      "Forma de composição dos textos/Adequação do texto às normas de escrita",
    skill: "EF02LP25",
    comment:
      "Esta habilidade refere-se a reconhecer, no processo de leitura, recursos linguísticos e discursivos que constituem os gêneros previstos, de modo que seja possível empregá-los adequadamente nos textos a serem produzidos.",
    resume:
      "Na elaboração do currículo, deve-se considerar que o desenvolvimento desta habilidade pode acontecer por meio da frequentação dos estudantes a textos organizados nos gêneros previstos. A atividade de leitura colaborativa e a de revisão processual e final possibilitam estudar os recursos e analisar a adequação dos textos produzidos. Projetos que prevejam a elaboração de dossiês dos experimentos realizados em determinada disciplina viabilizam o trabalho, pois incluem a leitura de estudo e a produção dos textos. A progressão pode dar-se pela complexidade dos textos e pelo nível de autonomia do aluno, que, nos currículos, se efetiva pela organização de habilidades em que as tarefas sejam realizadas em colaboração e, progressivamente, com autonomia.",
  },
  {
    id: "EF02LP26",
    competences: "LP",
    group_years: "02",
    field: "05",
    unit: "LP03",
    object: "Formação do leitor literário",
    skill: "EF02LP26",
    comment:
      "Esta é uma habilidade complexa, que envolve: a) o desenvolvimento das habilidades de leitura como um todo; b) o caráter não utilitário (lúdico/estético) dos textos literários; c) as características de gêneros literários diversos, inclusive dramáticos e poéticos. Está estreitamente relacionada à habilidade (EF35LP21), podendo-se dizer que se trata da mesma habilidade considerada em um grau menor de autonomia por conta do nível de ensino em jogo.  A formulação da habilidade supõe a previsão curricular de estratégias didáticas que progridam do trabalho em colaboração para a conquista da autonomia.",
    resume:
      "Na elaboração do currículo, o trabalho com essa habilidade supõe a constituição de critérios de apreciação estética e afetiva de materiais de leitura. Para tanto, é preciso garantir: oferta de material de leitura de qualidade estética, ética, temática e linguística; espaços nos quais diferentes leitores possam trocar informações sobre materiais lidos (físicos ou digitais). A progressão da aprendizagem pode apoiar-se no grau de complexidade dos gêneros e textos previstos (assim como dos seus respectivos temas), nos autores selecionados e no grau de autonomia que se pretende atingir a cada etapa do ensino.",
  },
  {
    id: "EF02LP27",
    competences: "LP",
    group_years: "02",
    field: "05",
    unit: "LP01",
    object: "Escrita autônoma e compartilhada",
    skill: "EF02LP27",
    comment:
      "Esta habilidade diz respeito a escrever textos baseados em narrativas literárias lidas pelo professor, ou seja, a partir das informações previamente adquiridas. Ela está estreitamente relacionada à habilidade (EF01LP25), estabelecendo com ela uma relação de progressão: o que aprendeu a produzir coletivamente e com a intervenção do professor como escriba no ano anterior, o aluno começa a empreender individualmente e com alguma autonomia.",
    resume:
      "Na elaboração do currículo, é preciso levar em conta que a atividade de recontagem de histórias prevê a elaboração de um texto cujo conteúdo já é conhecido pelo aluno, sendo, mesmo assim, importante prever habilidades que indiquem o planejamento da situação comunicativa e do texto parte a parte, tarefa que poderá ser coletiva. Dessa forma, o currículo pode focalizar, nessa atividade, a capacidade de textualização, ou seja, de redigir o enunciado, considerando a sua organização interna: sequência temporal de ações, relações de causalidade estabelecidas entre os fatos, emprego de articuladores adequados entre os trechos do enunciado, utilização do registro literário, manutenção do tempo verbal, estabelecimento de coerência e coesão entre os trechos do texto, entre outros aspectos. A progressão horizontal da habilidade pode tomar como referência a extensão e/ou complexidade dos textos narrativos focalizados, assim como o grau de autonomia a ser conquistada pelo aluno a cada etapa. As atividades podem, ainda, prever uma progressão da habilidade ao longo do ano, indicando a produção em duplas ou autônoma.",
  },
  {
    id: "EF02LP28",
    competences: "LP",
    group_years: "02",
    field: "05",
    unit: "LP02",
    object: "Formas de composição de narrativas",
    skill: "EF02LP28",
    comment:
      "Esta habilidade articula-se com a (EF01LP26), referindo-se a aspectos semelhantes aos nela definidos. Além disso, implica em identificar trechos de textos lidos que possam caracterizar elementos das narrativas ficcionais literárias. Seu desenvolvimento permite ao aluno aprofundar a compreensão de narrativas e desenvolver capacidades de análise e crítica.",
    resume:
      "Na elaboração do currículo, deve-se considerar que esta habilidade articula-se à (EF01LP26), representando uma progressão vertical. O trabalho a ser desenvolvido é o mesmo que o previsto para a habilidade (EF01LP26), considerando-se que, no 2º ano, é possível que os alunos já tenham compreendido a base alfabética do sistema de escrita e, dessa maneira, possam ler os textos junto com o professor, no momento do estudo, até utilizando recursos de ressaltar trechos relevantes. A progressão horizontal pode se dar pela complexidade dos textos escutados e pelo nível de autonomia que se pretende levar o aluno a conquistar em cada etapa.",
  },
  {
    id: "EF02LP29",
    competences: "LP",
    group_years: "02",
    field: "05",
    unit: "LP02",
    object: "Formas de composição de textos poéticos visuais",
    skill: "EF02LP29",
    comment:
      "O foco desta habilidade é perceber — no processo de leitura e estudo de poemas visuais — as figuras que o poema compõe no espaço que ocupa, verificando se o formato e/ou a disposição das letras provocam efeitos de sentido peculiares.",
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade demanda a previsão de práticas de leitura e de estudo de poemas visuais, para que as suas características fundamentais sejam identificadas: a presença de ilustração realizada por meio das letras e palavras; a criação de efeitos visuais incomuns (direção de escrita; linearização original; efeitos rotativos, inversões, por exemplo); a ocupação figurativa do espaço disponível. As atividades colaborativas são mais adequadas para o desenvolvimento da habilidade, em especial as coletivas, com mediação do professor. Como pode haver alunos ainda não alfabetizados no início do 2º ano, é fundamental a exposição do texto aos alunos, com indicações explícitas da leitura que está sendo feita. A progressão horizontal pode apoiar-se no grau de complexidade dos gêneros e textos propostos, no tipo de recurso a ser estudado e no nível de autonomia do estudante a ser conquistado a cada etapa.",
  },
  {
    id: "EF03LP01",
    competences: "LP",
    group_years: "03",
    field: "01",
    unit: "LP05",
    object: "Construção do sistema alfabético e da ortografia",
    skill: "EF03LP01",
    comment:
      "Esta habilidade trata dos casos em que o contexto interno da palavra é que determina que letra usar em sua grafia nos casos citados pela habilidade. Levar o aluno a construir regras é a estratégia indicada, e pode ocorrer pela análise comparativa das ocorrências em listas de palavras, favorecendo a antecipação do contexto em que é correto usar uma ou outra letra (ex: M/P/B), o que o contribui para a compreensão da regra.",
    resume:
      "Na elaboração do currículo, a escolha de qual regularidade trabalhar depende do diagnóstico a ser realizado com os estudantes. Os currículos podem orientar a realização de ditado inicial para verificar e organizar as intervenções necessárias com os diferentes tipos de ocorrências regulares contextuais (aquelas em que o contexto define a letra a ser utilizada), ampliando-se a habilidade para ocorrências irregulares: som do S (auxílio, cidade); do Z; do LH (família e toalha etc.). Nesse caso, a habilidade se articulará com outras que tratam da ortografia, como a (EF03LP03) e (EF35LP13). É possível, ainda, propor habilidades que orientem a análise de grupos de palavras do tipo das previstas na habilidade, para levantamento de semelhanças e diferenças, seguido do registro das conclusões. Ainda que não se chegue a formalizar as regras, esses registros poderão ser consultados até que a grafia correta esteja automatizada. Deve-se observar que a construção da ortografia só se inicia após a aquisição da base alfabética.",
  },
  {
    id: "EF03LP02",
    competences: "LP",
    group_years: "03",
    field: "01",
    unit: "LP05",
    object: "Construção do sistema alfabético e da ortografia",
    skill: "EF03LP02",
    comment:
      "Para desenvolver esta habilidade, que diz respeito a reconhecer, compreender e registrar palavras com diferentes esquemas silábicos, é indicado que não haja controle das escritas espontâneas dos alunos desde o 1º ano. Durante o processo de produção, escrevendo o que desejam, eles entram em contato com dúvidas ortográficas, o que é positivo para a aprendizagem.",
    resume:
      "Na elaboração do currículo, pode-se observar que a construção da ortografia inicia-se apenas após a aquisição da base alfabética. Esta habilidade pode ser articulada às demais que tratam da ortografia, respeitando a orientação de realizar ditado inicial para verificar e organizar as intervenções com os diferentes tipos de ocorrências que se fizerem necessárias. A habilidade poderá prever, no primeiro semestre, a escrita convencional de palavras de uso frequente e, no segundo, sem essa observação, o que permite uma progressão na aprendizagem.",
  },
  {
    id: "EF03LP03",
    competences: "LP",
    group_years: "03",
    field: "01",
    unit: "LP05",
    object: "Construção do sistema alfabético e da ortografia",
    skill: "EF03LP03",
    comment:
      "Para a efetivação da habilidade, que consiste em compreender e registrar a grafia de diferentes palavras, é preciso analisar listas de palavras com ocorrências que possam gerar dúvidas, seja por grafia semelhantes (nh/lh), seja por sons semelhantes (ch/x).",
    resume:
      "Na elaboração do currículo, pode-se orientar a análise comparativa de ocorrências, para favorecer a observação de semelhanças e diferenças. Exemplo: comparar as diferentes formas de marcar a nasalização. Os casos previstos pela habilidade podem aparecer em ano anterior, observando-se a restrição de que a construção da ortografia só se inicia após a aquisição da base alfabética, com habilidades que prevejam a colaboração.",
  },
  {
    id: "EF03LP04",
    competences: "LP",
    group_years: "03",
    field: "01",
    unit: "LP05",
    object: "Conhecimento das diversas grafias do alfabeto/ Acentuação",
    skill: "EF03LP04",
    comment:
      "Esta habilidade requer do aluno: identificar as sílabas das palavras; reconhecer qual sílaba é tônica; identificar quais têm vogais abertas e quais têm vogais fechadas; reconhecer sinais gráficos como o acento agudo e o circunflexo; relacionar o primeiro com vogais abertas e o segundo, com as fechadas. Depois disso, requer que os alunos identifiquem as regularidades da acentuação apontadas na habilidade.",
    resume:
      "É importante, na elaboração do currículo, considerar que o desenvolvimento desta habilidade deve acontecer depois que o estudante construir uma certa proficiência na escrita. Todo esse trabalho pode ser realizado sem o uso da metalinguagem (utilizar terminologia da gramática para se referir às questões abordadas, por exemplo, substantivo, adjetivo, concordância verbal etc.). No entanto, é preciso ressaltar que o uso torna a linguagem mais econômica, podendo facilitar a reflexão. No processo de ensino, o recurso à metalinguagem é posterior à compreensão do fato discutido, e orienta-se que: a) a progressão da acentuação inicie-se com as pautas de memorização, nas quais palavras são afixadas em cartazes que o aluno possa consultar ao escrever; b) ao longo dos anos, as regularidades sejam discutidas por meio de um movimento dialógico de análise e reflexão, seguido de emprego na produção textual.",
  },
  {
    id: "EF03LP05",
    competences: "LP",
    group_years: "03",
    field: "01",
    unit: "LP05",
    object:
      "Segmentação de palavras/Classificação de palavras por número de sílabas",
    skill: "EF03LP05",
    comment:
      "Esta habilidade requer ao aluno reconhecer e dividir as sílabas das palavras, classificando-as conforme orientação.",
    resume:
      "Na elaboração do currículo, convém que se programe o desenvolvimento desta habilidade para uma etapa posterior à da construção de uma certa proficiência na escrita. É preciso ressaltar que o uso da metalinguagem torna a linguagem mais econômica, podendo facilitar a reflexão. No processo de ensino, o recurso à metalinguagem é posterior à compreensão do fato discutido. Trata-se de habilidade a ser proposta na progressão do trabalho com acentuação.",
  },
  {
    id: "EF03LP06",
    competences: "LP",
    group_years: "03",
    field: "01",
    unit: "LP05",
    object: "Construção do sistema alfabético",
    skill: "EF03LP06",
    comment:
      "Esta habilidade requer a análise de grupos de palavras, com reconhecimento e separação das sílabas existentes, para identificar aquela que é pronunciada com maior intensidade. O objetivo visado é o de proceder a uma classificação das palavras que é fundamental para a compreensão de algumas das regras da acentuação gráfica.",
    resume:
      "Na elaboração do currículo, convém que o trabalho com essa habilidade: a) venha previsto para etapas em que o estudante já apresente uma certa proficiência na escrita; b) seja antecedido pelos estudos de separação das palavras em sílabas. Todo esse trabalho pode ser realizado sem o uso da metalinguagem. No entanto, é preciso ressaltar que o seu uso torna a linguagem mais econômica, podendo facilitar a reflexão. Considere-se que a previsão de recurso à metalinguagem é mais adequada e produtiva se for posterior à compreensão do fato discutido.",
  },
  {
    id: "EF03LP07",
    competences: "LP",
    group_years: "03",
    field: "01",
    unit: "LP05",
    object: "Pontuação",
    skill: "EF03LP07",
    comment:
      "Esta habilidade prevê a ampliação do estudo dos recursos de pontuação em relação à habilidade (EF02LP09), incluindo a pontuação de discurso direto — dois pontos e travessão. Da mesma forma, o estudo prevê: identificar os sinais gráficos que estão sendo incluídos; reconhecer — na leitura — a sua função; usá-los no texto para apresentar expressividade, legibilidade e provocar os efeitos de sentido desejados.",
    resume:
      "Na elaboração do currículo, convém que o estudo da pontuação aconteça de duas maneiras (como na habilidade EF02LP09): na leitura, ao analisar os efeitos de sentido produzidos pelo uso no texto; e na escrita, ao discutir possibilidades e analisar os efeitos de sentido produzidos (nesse caso, elaborar discurso direto ou indireto) e selecionar a mais adequada às intenções de significação. A pontuação de discurso direto inclui o emprego de verbos dicendi — que indicam quem está falando e de que modo: por exemplo, disse o rapaz; respondeu prontamente; entre outros — em diversos locais do enunciado (antes, no interior ou depois da fala). A progressão pode se dar pela ampliação dos recursos, mas os aspectos citados precisam ser considerados, assim como o nível de autonomia do estudante a cada etapa do processo.",
  },
  {
    id: "EF03LP08",
    competences: "LP",
    group_years: "03",
    field: "01",
    unit: "LP05",
    object: "Morfologia",
    skill: "EF03LP08",
    comment:
      "A habilidade prevê aprender as classes gramaticais das palavras indicadas (substantivos e verbos) e identificar as funções sintáticas que elas podem assumir nos enunciados. É interessante prever um trabalho reflexivo de observação, análise, comparação e derivação de regularidades no trabalho com as classes de palavras; e usar os saberes gramaticais como ferramentas de constituição da legibilidade.",
    resume:
      "Na elaboração do currículo, o trabalho com esta habilidade deve prever não os áridos exercícios de análise sintática, mas a utilização instrumental desse saber para tomar decisões sobre a legibilidade do texto produzido, especialmente durante a revisão processual coletiva. Nesse momento, é possível antecipar problemas de compreensão que o interlocutor possa vir a ter e ajustar o texto, garantindo escolhas adequadas às intenções de significação. Na progressão curricular, pode-se considerar organizações sintáticas progressivamente mais complexas, garantindo sempre o trabalho em colaboração (coletivo e em duplas).",
  },
  {
    id: "EF03LP09",
    competences: "LP",
    group_years: "03",
    field: "01",
    unit: "LP05",
    object: "Morfossintaxe",
    skill: "EF03LP09",
    comment:
      "A habilidade prevê reconhecer o adjetivo como a classe de palavra que atribui características aos substantivos. É interessante prever um trabalho reflexivo, com base em inventários, de observação, análise, comparação e levantamento de regularidades que caracterizem essa classe de palavras; usar os saberes gramaticais como ferramentas de constituição da legibilidade do texto.",
    resume:
      "Na elaboração do currículo, deve-se considerar que a progressão curricular vertical já está definida na BNCC, já que esta habilidade avança em relação ao estudo das classes gramaticais. Pode-se também pensar na ampliação de recursos possíveis para a qualificação de processos, de personagens e de locais em que as ações de histórias acontecem nos textos, tanto ao longo dos anos quanto no interior de um mesmo ano. Na progressão, pode-se considerar, ainda, o nível de autonomia do estudante.",
  },
  {
    id: "EF03LP10",
    competences: "LP",
    group_years: "03",
    field: "01",
    unit: "LP05",
    object: "Morfologia",
    skill: "EF03LP10",
    comment:
      "Trata-se de reconhecer — ainda que de modo não sistematizado — que há palavras que derivam de outras e que têm o seu sentido modificado pelo acréscimo de afixos ou no início ou no final delas. Esses afixos possuem sentidos regulares, sendo possível identificar o significado de uma palavra derivada se a primitiva e o afixo forem conhecidos.",
    resume:
      "Na elaboração do currículo, é interessante a reflexão a partir de inventários, prevendo: a) observação, análise e comparação, com levantamento de regularidades de forma e de sentido no uso dos afixos; b) o uso desse saber para resolver problemas de compreensão vocabular.A progressão curricular vertical já está definida na BNCC, se considerarmos que a habilidade (EF05LP08) avança em relação a esta. No que se refere à progressão horizontal, pode-se pensar na ampliação de afixos possíveis (e os seus respectivos sentidos) para o processo de derivação. Na progressão, pode-se, ainda, considerar o grau de complexidade lexical  (palavras mais difíceis) e o nível de autonomia do estudante.",
  },
  {
    id: "EF03LP11",
    competences: "LP",
    group_years: "03",
    field: "02",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF03LP11",
    comment:
      "Trata-se de uma habilidade complexa, que precisa considerar tanto o trabalho com as habilidades de leitura quanto as características de cada um dos gêneros (organização interna; marcas linguísticas; conteúdo temático) e dos textos injuntivos instrucionais a serem lidos. Atentar para o fato de que o trabalho previsto é com autonomia.",
    resume:
      "Na elaboração do currículo, pode-se considerar, na proposição das habilidades, as características dos textos selecionados para leitura e dos gêneros previstos. As instruções de montagem, por exemplo, organizam-se pela presença de: apresentação e nomeação de todas as peças; esquema gráfico de montagem; instruções, propriamente. Podem conter também uma relação de cuidados relacionados ao uso, a depender da especificidade do produto. Caracterizam-se pela presença do imperativo ou infinitivo nas instruções. Nas atividades de estudo, convém focalizar as características que forem importantes para a compreensão do texto, articular essas características à finalidade do texto, prever um trabalho dialógico e reflexivo, assim como a comparação entre textos por semelhanças e diferenças.",
  },
  {
    id: "EF03LP12",
    competences: "LP",
    group_years: "03",
    field: "02",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF03LP12",
    comment:
      "Trata-se de uma habilidade complexa, que precisa considerar tanto o trabalho com as habilidades de leitura quanto as características dos gêneros carta pessoal e diário (organização interna; marcas linguísticas; conteúdo temático) e dos textos específicos a serem lidos. Atentar para o fato de que o trabalho previsto é com autonomia.",
    resume:
      "Diários pessoais são muito bem recebidos pelas crianças. Embora relatos curtos em 1ª pessoa sejam o registro mais comum nesse gênero, também são admitidos poemas, crônicas etc. que atendam à finalidade de expressar e relatar sentimentos, opiniões e acontecimentos da vida pessoal. O elemento fixo do texto é a data em cada registro. A linguagem costuma ser informal, mas também pode tender para o literário. O diário — assim como as cartas — pode ser real ou fictício, quer dizer, ser o relato de um personagem de uma história determinada. Isso coloca a possibilidade de que, na elaboração do currículo, sejam previstas atividades com ou a partir de obras literárias lidas. O desenvolvimento da habilidade favorece o trabalho com projetos de leitura envolvendo os gêneros citados.",
  },
  {
    id: "EF03LP13",
    competences: "LP",
    group_years: "03",
    field: "02",
    unit: "LP06",
    object: "Escrita colaborativa",
    skill: "EF03LP13",
    comment:
      "Trata-se de uma habilidade que articula a produção textual com o gênero de cartas pessoais e diário e dois vetores do processo de escrita (situação/tema ou assunto). Envolve ao menos duas operações distintas, passíveis de abordagem em separado: planejar e produzir, que significam organizar as ideias para depois colocá-las no papel.",
    resume:
      "Na elaboração do currículo, a habilidade pode ser ampliada com a referência à produção em parceria e de modo autônomo, garantindo, assim, uma progressão no ano. É possível propor habilidades que: a) envolvam análise de textos dos gêneros de carta pessoal e diário, de modo a explicitar as suas características, construindo registros que possam repertoriar a produção; b) orientem o uso de procedimentos escritores, como: reler o que está escrito para continuar, consultar o planejamento para tomar decisões no momento da escrita e revisar no processo e ao final. É possível especificar o desenvolvimento de habilidades relativas às cartas pessoais ficcionais, a partir de obras literárias de relevância (como O Gato Malhado e a Andorinha Sinhá, de Jorge Amado).",
  },
  {
    id: "EF03LP14",
    competences: "LP",
    group_years: "03",
    field: "02",
    unit: "LP01",
    object: "Escrita colaborativa",
    skill: "EF03LP14",
    comment:
      "Trata-se de uma habilidade que articula a produção textual com o gênero injuntivo instrucional e dois vetores do processo de escrita (situação/tema ou assunto). Envolve ao menos duas operações distintas, que podem ser tratadas em separado: planejar e produzir, que significam organizar as ideias para depois colocá-las no papel. A habilidade ainda prevê que, na produção, levem-se em conta aspectos gráfico-visuais que possam ajudar na compreensão do texto.",
    resume:
      "Na elaboração do currículo, o desenvolvimento da habilidade deve prever a contextualização em projetos temáticos, como, por exemplo, exposição de origamis preferidos da classe (apresentados com as devidas instruções escritas em espaço reservado para que o visitante possa arriscar-se a produzi-los), mural de dobraduras e as devidas instruções, espaço do brinquedo, no qual visitantes são instigados e orientados a montar brinquedos antigos, a partir de um modelo e de instruções escritas, com assessoria dos alunos. É possível propor habilidades que: a) envolvam análise de textos do gênero injuntivo instrucional, de modo a explicitar as suas características, construindo registros que possam repertoriar a produção; b) orientem o uso de procedimentos escritores, como: reler o que está escrito para continuar, consultar o planejamento para tomar decisões no momento da escrita e revisar ao longo do processo e ao final. A progressão horizontal pode acontecer a partir de dois critérios: o nível de autonomia do aluno para realizar as atividades propostas ou a complexidade do texto a ser elaborado.",
  },
  {
    id: "EF03LP15",
    competences: "LP",
    group_years: "03",
    field: "02",
    unit: "LP04",
    object: "Produção de texto oral",
    skill: "EF03LP15",
    comment:
      "A habilidade envolve a recepção atenta e a análise de receitas transmitidas em mídia digital, além de duas outras operações complexas e articuladas entre si: planejar e produzir textos do mesmo gênero.",
    resume:
      "A habilidade poderá envolver tanto a escrita quanto a oralização de uma receita conhecida, conforme orientação. Nesse caso, as habilidades podem ser ampliadas. A oralização não envolve produção de conteúdo, mas a leitura expressiva de textos já produzidos. Na elaboração do currículo, pode-se prever, ainda, um bloco de habilidades que envolvam procedimentos de utilização das ferramentas digitais a serem utilizadas na produção de textos orais em ambientes digitais. Além disso, pode-se propor: a) análise de textos, no gênero receita, para extrair as suas características, de acordo com a situação  comunicativa; b) planejamento do texto a ser produzido, considerando a situação em que irá circular;  c) orientação da produção/textualização deste. A progressão horizontal pode apoiar-se na extensão e complexidade das receitas, assim como nas operações sucessivas que a habilidade envolve.",
  },
  {
    id: "EF03LP16",
    competences: "LP",
    group_years: "03",
    field: "02",
    unit: "LP05",
    object: "Forma de composição do texto",
    skill:
      '(EF03LP16) Identificar e reproduzir, em textos injuntivos instrucionais (receitas, instruções de montagem, digitais ou impressos), a formatação própria desses textos (verbos imperativos, indicação de passos a ser seguidos) e a diagramação específica dos textos desses gêneros (lista de ingredientes ou materiais e instruções de execução – "modo de fazer").',
    comment:
      "Esta habilidade refere-se a reconhecer, no processo de leitura, recursos linguísticos e discursivos que constituem os gêneros previstos, de modo que seja possível empregá-los adequadamente nos textos a serem produzidos.",
    resume:
      "Na elaboração do currículo, deve-se considerar que a progressão vertical desta habilidade já está garantida, considerando-se a habilidade (EF02LP16). Se, no 2º ano, o trabalho poderia se dar apenas por frequentação, no 3º ano, o aprofundamento pode ser realizado por sequências didáticas. A atividade de leitura colaborativa possibilita estudar os recursos previstos, enquanto a de revisão processual e final possibilita analisar a adequação dos textos produzidos. Um projeto a ser realizado, por exemplo, é a criação de vlog, com apresentação de receitas da região, o que pode ser previsto no currículo local. Além disso, na organização do currículo, a progressão horizontal pode dar-se pela diversificação temática dos textos, da extensão e complexidade deles, assim como do nível de autonomia do aluno. Há, aqui, oportunidade para o trabalho interdisciplinar com as habilidades (EF03MA02), (EF03MA08) e (EF03MA09), da Matemática, para a leitura, compreensão e utilização de números decimais e divisão em receitas.",
  },
  {
    id: "EF03LP17",
    competences: "LP",
    group_years: "03",
    field: "02",
    unit: "LP05",
    object: "Forma de composição do texto",
    skill: "EF03LP17",
    comment:
      "Esta habilidade refere-se a reconhecer, no processo de leitura, recursos linguísticos e discursivos que constituem os gêneros previstos, de modo que seja possível empregá-los adequadamente nos textos  a serem produzidos.",
    resume:
      "Na elaboração do currículo, deve-se considerar que esta habilidade já representa um aprofundamento em relação à (EF02LP16). No 2º ano, o trabalho acontece por frequentação; no 3º, o aprofundamento pode ser realizado por sequências didáticas, o que pode ser explicitado nas habilidades. A atividade de leitura colaborativa possibilita estudar os recursos previstos, enquanto a de revisão processual e final possibilita analisar a adequação dos textos produzidos. Uma proposta de trabalho interessante pode ser escrever para pessoas de diferentes estados para saber como é a vida delas. É possível, ainda, produzir um blog ou enviar e-mails. A progressão horizontal pode dar-se pela leitura de cartas pessoais ficcionais, assim como pelo nível de autonomia do aluno, que, no currículo, se efetiva pela organização de habilidades em que as tarefas sejam realizadas em colaboração e, progressivamente, com autonomia.",
  },
  {
    id: "EF03LP18",
    competences: "LP",
    group_years: "03",
    field: "03",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF03LP18",
    comment:
      "O foco dessa habilidade é a compreensão de textos de diferentes gêneros do campo jornalístico (com destaque para as cartas à redação e para as notícias). As convenções de cada gênero, a situação comunicativa e o tema/assunto do texto constituem-se como vetores da compreensão visada. Seu desenvolvimento requer a participação direta e sistemática do aluno em práticas de leitura e produção de textos do campo jornalístico/midiático, nas quais possa observar os vetores mencionados em ação, assim como refletir a respeito de seu papel na (re)construção dos sentidos do texto.",
    resume:
      "Recomenda-se que o tratamento dessa habilidade, nos currículos locais, associe o seu desenvolvimento a práticas de leitura e produção próprias do campo jornalístico. Convém, portanto, que os currículos orientem as escolas a respeito de como garantir ao aluno amplo acesso à mídia impressa e digital. A progressão horizontal pode combinar diferentes critérios: a) o gênero visado; b) o vetor a ser considerado; c) o grau de complexidade dos gêneros e textos selecionados; d) o nível de complexidade que se pretende levar o aluno a conquistar.",
  },
  {
    id: "EF03LP19",
    competences: "LP",
    group_years: "03",
    field: "03",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF03LP19",
    comment:
      "Trata-se de uma habilidade complexa, que precisa considerar tanto o trabalho com as habilidades de leitura quanto as características de cada um dos gêneros (organização interna; marcas linguísticas; conteúdo temático) e dos textos publicitários e de propaganda a serem lidos. No que se refere ao nível de autonomia, os currículos locais podem prever se, ao final do ano, os alunos deverão alcançar o trabalho autônomo ou não. Em caso positivo, é importante indicar os procedimentos a serem adotados.",
    resume:
      "O trabalho com esta habilidade supõe: a identificação do interlocutor privilegiado, a localização dos recursos persuasivos apresentados no texto, o reconhecimento dos efeitos de sentido provocados nos textos por tais recursos, a análise da adequação dos recursos empregados, considerando-se o interlocutor pretendido, a função do gênero e a finalidade do texto.  Na elaboração do currículo, é possível organizar a progressão considerando a complexidade dos textos e o grau de autonomia do aluno ao realizar a tarefa. A leitura colaborativa, trabalhada na habilidade (EF12LP02), é atividade fundamental para a realização desse trabalho.",
  },
  {
    id: "EF03LP20",
    competences: "LP",
    group_years: "03",
    field: "03",
    unit: "LP06",
    object: "Escrita colaborativa",
    skill: "EF03LP20",
    comment:
      "Trata-se de uma habilidade que articula a produção textual com os gêneros de cartas em questão e dois vetores do processo de escrita (situação/tema ou assunto). Pode ser articulada à análise das matérias a serem comentadas nas cartas. A habilidade prevê a produção de textos do campo político-cidadão, que envolvem organizar as ideias e utilizar a consciência cidadã para depois escrevê-las.",
    resume:
      "Na elaboração do currículo, pode-se prever atividades que ampliem a habilidade, orientando o estudo das características dos espaços dos leitores em mídias impressas e digitais, bem como as regras de uso desses ambientes. É possível propor habilidades que prevejam a análise de participações de leitores nesses ambientes, para refletir sobre: a) a diferença entre argumentar e divulgar discurso de ódio; b) o respeito à diversidade de opinião sobre temas atuais. É possível, ainda, propor habilidades que: a) envolvam análise de textos dos gêneros em questão, de modo a explicitar suas características e elaborar registros; b) orientem o uso de procedimentos escritores, como: reler o que está escrito para continuar, consultar o planejamento para tomar decisões no momento da escrita e revisar no processo e ao final.",
  },
  {
    id: "EF03LP21",
    competences: "LP",
    group_years: "03",
    field: "03",
    unit: "LP06",
    object: "Escrita colaborativa",
    skill: "EF03LP21",
    comment:
      "Trata-se de uma habilidade que articula a produção de gêneros publicitários ao uso de recursos de persuasão apropriados e diz respeito a organizar as ideias e utilizar a criatividade para depois escrevê-las. A habilidade pode ser desmembrada para incluir a análise dos gêneros, o estudo dos recursos de persuasão e outros aspectos relacionados à característica multimodal dos textos desses gêneros.",
    resume:
      "Na elaboração do currículo, convém prever o trabalho contextualizado em projetos interdisciplinares que abordem temáticas relevantes para a comunidade local, como a conservação do patrimônio público, a preservação de recursos naturais, a conscientização sobre a necessidade de consumo sustentável, o repúdio ao preconceito, a valorização da cultura local, entre outros. Poderão ser propostas atividades em que a produção aconteça em colaboração e de modo mais autônomo, prevendo, desse modo, uma progressão vertical no ano.",
  },
  {
    id: "EF03LP22",
    competences: "LP",
    group_years: "03",
    field: "03",
    unit: "LP04",
    object: "Planejamento e produção de texto",
    skill: "EF03LP22",
    comment:
      "O foco da habilidade está na oralização de textos destinados a telejornais infantis. A produção visada está articulada a quatro vetores: a situação comunicativa, o plano geral do texto próprio do gênero visado, o tema e a finalidade. Além disso, as atividades previstas compreendem duas operações sequenciais complexas: o planejamento e a execução.  A habilidade requer, ainda, a análise da mídia e dos textos/gêneros que nela circulam.",
    resume:
      "É muito importante que, na elaboração do currículo, preveja-se o acesso e a utilização de ferramentas digitais que viabilizem a produção dos textos em áudio ou vídeo. As habilidades podem prever: a) a seleção e estudo dos textos a serem produzidos para compreender suas características, de acordo com o contexto; b) o planejamento/pesquisa do conteúdo temático e, considerando a situação em que irá circular, o tipo de mídia; c) a orientação do trabalho em colaboração. Além disso, é importante considerar que a habilidade pode referir-se tanto à produção oral quanto à oralização de textos escritos a serem gravados em vídeo. Essa situação coloca as seguintes condições básicas para a adequação do texto:  a) produzir a escrita do texto a ser lido; e/ou b) organizar esquema do texto a ser produzido oralmente, o que requer muito ensaio coletivo, com análise crítica; c) estudar os recursos a serem empregados nesse material, considerando a especificidade da mídia e ambiente no qual será veiculado o material. A progressão horizontal pode apoiar-se no grau de complexidade dos gêneros jornalísticos envolvidos, no foco do ensino (a organização geral do texto; as ferramentas e recursos a serem mobilizados; o planejamento; a elaboração) e no grau de autonomia a ser conquistada pelo aluno a cada etapa. Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF15AR26), da Arte; e (EF35EF03), da Educação Física, no que se refere à comunicação de informações por múltiplas linguagens.",
  },
  {
    id: "EF03LP23",
    competences: "LP",
    group_years: "03",
    field: "03",
    unit: "LP05",
    object: "Forma de composição dos textos",
    skill: "EF03LP23",
    comment:
      "Esta habilidade articula-se às (EF35LP16) e (EF12LP14), que também envolvem gêneros do jornalismo impresso ou digital. Visa identificar e analisar, no processo de leitura, o papel dos adjetivos na (re)construção de sentidos de cartas do leitor ou de reclamação, de modo que seja possível empregá-los adequadamente nos textos a serem produzidos.",
    resume:
      "Na elaboração do currículo, recomenda-se que o desenvolvimento desta habilidade venha associado a diferentes práticas de leitura e escrita de cartas dirigidas a mídias impressas ou digitais. Essas práticas permitem a contextualização da habilidade, fornecendo ao aluno experiências e materiais variados para a observação e a reflexão. A progressão horizontal pode se dar pela complexidade dos textos lidos e pelo nível de autonomia que se pretende levar o aluno a conquistar em cada etapa.",
  },
  {
    id: "EF03LP24",
    competences: "LP",
    group_years: "03",
    field: "04",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF03LP24",
    comment:
      "Trata-se de uma habilidade complexa, que precisa considerar tanto o trabalho com as habilidades de leitura quanto as características de cada um dos gêneros (organização interna; marcas linguísticas; conteúdo temático) e dos textos de relatos e pesquisas a serem lidos. Atentar para o fato de que o trabalho previsto é com autonomia.",
    resume:
      "Relatos de experimentos e de pesquisas são textos úteis no trabalho com temas que remetam diretamente a questões sociais, como relações estabelecidas entre crianças e o celular; o impacto das redes sociais na vida da criança; a presença da violência no cotidiano da cidade; entre outros. Na elaboração do currículo, as habilidades podem orientar a pesquisa desses textos na internet para montar um dossiê e elaborar uma carta de reclamação, ou de leitor, organizado em um projeto de leitura e escrita.  Convém focalizar as características que forem importantes para a compreensão do texto, articular essas características à finalidade do texto, prever um trabalho dialógico e reflexivo, assim como a comparação entre textos por semelhanças e diferenças. Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF03MA26), (EF03MA27), (EF03MA28), da Matemática (EF03CI06), (EF03CI09), da Ciência; (EF03HI03), da História; e (EF03GE01), da Geografia, associadas a coleta, leitura, comparação e interpretação de dados de pesquisas.",
  },
  {
    id: "EF03LP25",
    competences: "LP",
    group_years: "03",
    field: "04",
    unit: "LP06",
    object: "Produção de textos",
    skill: "EF03LP25",
    comment:
      "Esta é uma habilidade que articula a produção textual com o gênero de apresentação de resultados de observações e pesquisas e dois vetores do processo de escrita (situação/tema ou assunto). Envolve ao menos duas operações distintas, que podem ser tratadas em separado: planejar e produzir, que significam organizar as ideias para depois colocá-las no papel.",
    resume:
      "Na elaboração do currículo, podem-se organizar habilidades que prevejam trabalho em parceria entre as turmas, articulando-o com o estudo dos gêneros envolvidos na apresentação, como a exposição oral. As pesquisas podem assumir caráter interdisciplinar, com temas como: povos originários do Brasil, imigrantes, entre outros. Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF03MA26), (EF03MA27), (EF03MA28), da Matemática; (EF03CI06), (EF03CI09), de Ciências; (EF03HI03), da História; e (EF03GE01), da Geografia, associadas à coleta, leitura, comparação e interpretação de dados, com apoio de recursos multissemióticos, incluindo gráficos e tabelas. É possível, ainda, propor habilidades que: a) definam o gênero a ser produzido nos resultados de observações e pesquisas apresentados e proponham análise de textos para explicitar suas características, construindo registros que possam repertoriar a produção; b) orientem o uso de procedimentos escritores, como: reler o que está escrito para continuar, consultar o planejamento para tomar decisões na escrita e revisar no processo e ao final.",
  },
  {
    id: "EF03LP26",
    competences: "LP",
    group_years: "03",
    field: "04",
    unit: "LP05",
    object:
      "Forma de composição dos textos\nAdequação do texto às normas de escrita",
    skill: "EF03LP26",
    comment:
      "Esta habilidade refere-se a reconhecer, no processo de leitura, recursos linguísticos e discursivos que constituem os gêneros previstos, de modo que seja possível empregá-los adequadamente nos textos a serem produzidos.",
    resume:
      "Na elaboração do currículo, deve-se considerar que o desenvolvimento desta habilidade pode acontecer por meio da frequentação dos estudantes a textos organizados nos gêneros previstos. A atividade de leitura colaborativa e a de revisão processual e final possibilitam estudar os recursos e analisar a adequação dos textos produzidos, sendo fundamental que os currículos prevejam habilidades que indiquem o trabalho com essas atividades. Projetos que prevejam a elaboração de pesquisas sobre questões sociais relevantes a serem divulgadas em seminários viabilizam o trabalho. A progressão curricular pode dar-se pela complexidade dos textos e pelo nível de autonomia do aluno, o que se traduz em um trabalho inicialmente colaborativo e, progressivamente, mais autônomo. Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF03MA26), (EF03MA27) e (EF03MA28), da Matemática; (EF03CI06) e (EF03CI09), da Ciência; (EF03GE01), da Geografia; e (EF03HI03), da História, associadas a coleta, leitura, comparação e interpretação de dados, com apoio de recursos multissemióticos (listas, tabelas, ilustrações, gráficos).",
  },
  {
    id: "EF03LP27",
    competences: "LP",
    group_years: "03",
    field: "05",
    unit: "LP04",
    object: "Performances orais",
    skill: "EF03LP27",
    comment:
      "Trata-se de habilidade que envolve a leitura e compreensão do texto a ser recitado, para que o aluno, conhecendo os efeitos de sentido em jogo, possa ler/recitar/cantar com maior fluência, ritmo e entonação adequada.",
    resume:
      "Na elaboração do currículo, pode-se orientar, para além dos gêneros mencionados, estudos de textos poéticos da cultura local ou nacional, assim como aqueles referentes às culturas periféricas, especialmente os mais relevantes para as culturas locais.  Podem ser previstas também habilidades que indiquem o trabalho em colaboração, de modo a favorecer o desenvolvimento da fluência e observação do ritmo entre os estudantes. Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF15AR14) e (EF15AR17), da Arte, associadas a improvisação, composição e sonorização de histórias e exploração dos elementos constitutivos da música.",
  },
  {
    id: "EF35LP01",
    competences: "LP",
    group_years: "35",
    field: "01",
    unit: "LP03",
    object: "Decodificação/Fluência de leitura",
    skill: "EF35LP01",
    comment:
      "Ler fluentemente requer do aluno um conjunto de habilidades que vão das relativas à aquisição do sistema de escrita às de compreensão, apreciação e réplica do leitor aos textos. Não se trata de oralizar o texto rapidamente e sem erro na articulação dos sons, mas de ler um texto em voz alta sem embaraço e com compreensão. A leitura se dá na relação entre texto e leitor; assim, o texto precisa ser adequado às possibilidades e interesses do leitor.",
    resume:
      "As atividades que mais potencializam o desenvolvimento da fluência leitora são aquelas em que o leitor estuda textos que lerá em voz alta, em colaboração com outro leitor mais proficiente. A leitura precisa ser contextualizada em uma situação comunicativa genuína, como uma leitura dramática (situação em que atores fazem a leitura de um texto teatral para uma audiência, interpretando os personagens). Na elaboração do currículo, podem-se prever atividades em que os alunos: estudam o texto no coletivo, com mediação do professor, em especial os personagens; depois da divisão dos papéis, em duplas, estudam em voz alta, ajustando interpretações; fazem um ensaio da apresentação, com avaliação das performances para novos ajustes; performam a leitura dramática para a audiência.A progressão curricular pode jogar com a complexidade dos textos, o foco do trabalho (substituições lexicais ou pronominais; diferentes tipos de substituição em cada um dos casos), os procedimentos didáticos programados e o grau de autonomia do aluno.",
  },
  {
    id: "EF35LP02",
    competences: "LP",
    group_years: "35",
    field: "01",
    unit: "LP03",
    object: "Formação de leitor",
    skill: "EF35LP02",
    comment:
      "A habilidade trata de comportamentos leitores fundamentais, que implicam tanto saber frequentar espaços nos quais circulem materiais de leitura — impressos e/ou digitais — quanto estabelecer critérios de apreciação estética desses materiais, para possibilitar a socialização das opiniões com terceiros. Para o desenvolvimento desta habilidade, são fundamentais a frequentação de espaços destinados à leitura e a participação em atividades como a roda de leitores.",
    resume:
      "Na elaboração do currículo, quatro aspectos podem ser considerados: a seleção de materiais de leitura; o uso de espaços nos quais esses materiais circulam; a apreciação e o compartilhamento da leitura. O primeiro aspecto implica em utilizar critérios pessoais de apreciação (estética, tema etc.). O segundo, envolve frequentar salas de leitura e bibliotecas físicas e digitais, sabendo solicitar ou encontrar materiais de leitura. O terceiro e o quarto envolvem utilizar os critérios de apreciação pessoal para divulgar sua opinião a respeito de materiais lidos, em espaços escolares, como uma roda de leitores, ou digitais, como sites de comentários sobre livros lidos. A progressão do ensino-aprendizagem pode apoiar-se no grau de complexidade dos procedimentos de seleção, dos materiais de leitura visados e do tipo de justificativa pretendida, assim como no grau de autonomia do aluno.",
  },
  {
    id: "EF35LP03",
    competences: "LP",
    group_years: "35",
    field: "01",
    unit: "LP03",
    object: "Compreensão",
    skill: "EF35LP03",
    comment:
      "Trata-se de uma habilidade complexa, de redução do conteúdo do texto. Por meio dela, o aluno articula as informações dos diferentes trechos, identifica as partes mais relevantes com base em pistas fornecidas pelo próprio texto e, por meio desse processo de sumarização, identifica a ideia central.Para realizar essa tarefa, é necessário mobilizar outras habilidades, como as de localização, inferenciação e construção de informações.",
    resume:
      "Na elaboração do currículo, é necessário considerar que esta é uma habilidade que envolve várias outras: localização de informação, inferenciação, articulação de trechos do texto, (re)construção de informações. No entanto, é preciso considerar ainda que o desenvolvimento de cada uma dessas habilidades pode ser mais difícil em um gênero e/ou tipo de texto do que em outros, dependendo da complexidade em questão. Localizar informações pode envolver, entre outros aspectos, a articulação de trechos diferentes de um mesmo texto. Assim, a progressão curricular da habilidade (EF35LP03) pode apoiar-se tanto no desenvolvimento conexo de outras quanto na complexidade do gênero ou tipo de texto a ser estudado.",
  },
  {
    id: "EF35LP04",
    competences: "LP",
    group_years: "35",
    field: "01",
    unit: "LP03",
    object: "Estratégia de leitura",
    skill: "EF35LP04",
    comment:
      "Os sentidos dos textos são compostos também por informações subentendidas e/ou pressupostas, que, mesmo não estando explícitas, significam. Portanto, pode-se afirmar que é impossível compreender os textos sem realizar inferências.Realizar uma inferência é estabelecer, no processo de leitura, uma ligação entre uma ideia expressa no texto e outra que o leitor pode ativar com base em conhecimentos prévios ou no contexto.",
    resume:
      "Na elaboração do currículo, considere-se que, para  estabelecer inferências é necessário explicitar as pistas textuais e/ou as informações prévias, articulando-as entre si. Além disso, é a leitura colaborativa que pode  potencializar o trabalho com as estratégias de leitura (antecipação, inferenciação, verificação, localização, construção de informações pela articulação de trechos dos textos, generalização).A leitura colaborativa  (conferir EF12LP02) permite a criação de um espaço de circulação de informações no qual pistas textuais e conhecimentos prévios podem ser articulados coletivamente pelos alunos, o que possibilita a apropriação desses procedimentos e a ampliação da competência leitora.A progressão curricular pode considerar a complexidade dos diferentes tipos de textos, dos gêneros e do grau de autonomia do aluno a cada etapa do ensino.",
  },
  {
    id: "EF35LP05",
    competences: "LP",
    group_years: "35",
    field: "01",
    unit: "LP03",
    object: "Estratégia de leitura",
    skill: "EF35LP05",
    comment:
      "Esta é uma habilidade diretamente relacionada ao desenvolvimento da competência lexical, ou seja, do domínio do aluno sobre os sentidos, a forma, as funções e os usos das palavras. É uma habilidade fundamental tanto para a oralidade quanto para a escrita, seja do ponto de vista da compreensão, seja em termos de produção.",
    resume:
      "Na elaboração do currículo, é necessário considerar que o desenvolvimento desta habilidade é conexo ao das demais habilidades responsáveis pela compreensão leitora, especialmente as inferenciais, ou seja, aquelas que consistem em (re)construir sentidos com base em pistas do texto. Fatores a serem considerados na progressão curricular: a complexidade dos textos (inclusive em termos de gênero e tipo de texto), o grau de autonomia do aluno na etapa de ensino em questão; os procedimentos didáticos previstos: leitura individual ou coletiva, entre pares ou com a mediação do professor; o recurso sistemático ou eventual a dicionários na verificação de hipóteses.",
  },
  {
    id: "EF35LP06",
    competences: "LP",
    group_years: "35",
    field: "01",
    unit: "LP03",
    object: "Estratégia de leitura",
    skill: "EF35LP06",
    comment:
      "Esta habilidade consiste em utilizar os conhecimentos gramaticais e textuais já internalizados para, em situações epilinguísticas (de uso), constituir os sentidos do texto escrito, consolidá-los e/ou resolver problemas de compreensão. Os recursos citados garantem a coesão (e a coerência) do texto, contribuindo para estabelecer a continuidade dos enunciados por meio da recuperação do referente.",
    resume:
      "Todo falante de uma língua possui conhecimentos gramaticais internalizados no processo de aquisição da linguagem. Sem eles, não conseguiria comunicar-se oralmente. Na elaboração do currículo, pode-se prever que esses saberes possibilitam a análise e o estudo dos textos, em especial quando se trata das atividades epilinguísticas: aquelas nas quais se analisa o uso dos recursos textuais, e não a sua sistematização em categorias. Esta irá acontecendo gradativamente ao longo do Ensino Fundamental, depois da compreensão do sistema de escrita e da constituição de uma proficiência básica em leitura e escrita.Os recursos citados são os que possibilitam a coesão textual. Ex.: Hoje Ana lembrou-se de seu avô. Ela não o vê há quase três anos (ELA retoma ANA; O recupera AVÔ; SEU retoma ANA.).A progressão curricular pode jogar com a complexidade dos textos, o foco do trabalho (substituições lexicais ou pronominais; os diferentes tipos de substituição em cada um dos casos), os procedimentos didáticos programados e o grau de autonomia do aluno.",
  },
  {
    id: "EF35LP07",
    competences: "LP",
    group_years: "35",
    field: "01",
    unit: "LP06",
    object: "Construção do sistema alfabético/ Convenções da escrita",
    skill: "EF35LP07",
    comment:
      "Trata-se de uma habilidade complexa, que envolve todo um conjunto de habilidades de análise linguística (ortográfica, morfossintática, sintática e semântica) e de conhecimentos específicos a elas associados, para serem adequadamente colocadas em produções textuais dos alunos. A habilidade poderá ser antecedida por outras, que envolvam a análise dos recursos citados em textos lidos de modo independente (por exemplo, ao analisar a presença de pontuação e os efeitos de sentido decorrentes do seu uso). O trabalho pode ser previsto tanto em colaboração quanto com autonomia, progressivamente, a partir do momento em que os alunos compreendam as regras do sistema de escrita.",
    resume:
      "Na elaboração do currículo, recomenda-se a previsão, para os dois primeiros anos, de desenvolver habilidades de análise e aprendizagem dos conhecimentos linguísticos aqui implicados. No caso da ortografia, os currículos locais poderão propor habilidades que envolvam a análise, reflexão e utilização das regularidades diretas e contextuais nos anos iniciais, após a aquisição da base alfabética; e as regularidades morfológico-gramaticais nos anos finais. Paralelamente, podem ser propostas habilidades que envolvam familiarização com as ocorrências ortográficas irregulares ao longo do Ensino Fundamental.",
  },
  {
    id: "EF35LP08",
    competences: "LP",
    group_years: "35",
    field: "01",
    unit: "LP06",
    object:
      "Construção do sistema alfabético/ Estabelecimento de relações anafóricas na referenciação e construção da coesão",
    skill: "EF35LP08",
    comment:
      "Esta é uma habilidade fundamental para a construção do texto, especialmente no que diz respeito à coesão e à coerência. Seu foco é usar o recurso da referenciação em situação de produção de textos. Assim, é possível propor habilidades que antecedam a autonomia no uso dos recursos de produção textual e envolvam, por exemplo, analisar a presença de referenciação em textos lidos, observando os efeitos de sentido produzidos. É possível desmembrar a habilidade propondo habilidades específicas para o uso da referenciação e dos organizadores textuais (tempo, causa etc.).",
    resume:
      "Na elaboração do currículo, pode-se tratar esta habilidade visando contextualizar as atividades de revisão processual e final, quando se analisa a pertinência da utilização de recursos coesivos em função das intenções de significação, procurando tanto evitar problemas de compreensão pelo leitor quanto garantir a coerência do texto.",
  },
  {
    id: "EF35LP09",
    competences: "LP",
    group_years: "35",
    field: "01",
    unit: "LP06",
    object: "Planejamento de texto/Progressão temática e paragrafação",
    skill: "EF35LP09",
    comment:
      "Esta é uma habilidade fundamental para a construção do texto, especialmente no que diz respeito à articulação entre suas partes. Envolve conhecer as características do gênero para organizar o texto em unidades de sentido de modo coeso e coerente, ou seja, dividir o texto em parágrafos, respeitando as normas da pontuação, o encadeamento das ideias e a hierarquia das informações presentes, de acordo com as características do gênero e a finalidade comunicativa.",
    resume:
      "Na elaboração do currículo, pode-se propor uma progressão desta habilidade tanto vertical quanto horizontal, indicando habilidades que prevejam a ação de organizar os textos em unidades de sentido de modo coletivo. Isso pode ser feito inicialmente com a ajuda do professor e em grupos, até chegar ao trabalho autônomo.",
  },
  {
    id: "EF35LP10",
    competences: "LP",
    group_years: "35",
    field: "01",
    unit: "LP04",
    object: "Forma de composição de gêneros orais",
    skill: "EF35LP10",
    comment:
      "Necessária à compreensão da lógica e da dinâmica dos intercâmbios orais, esta habilidade efetiva-se em situações como seminários, mesas-redondas, rodas de conversa, programas de TV etc., que envolvam gêneros como: exposição oral, discussão argumentativa e/ou debate, entrevista oral etc.",
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade deve considerar resgatar e/ou articular as atividades propostas com as habilidades orais desenvolvidas nos dois anos anteriores, especialmente as que se estendem por todos os anos iniciais.  A habilidade pode prever: a) o estudo da situação comunicativa (como assistir a entrevistas); b) o planejamento e análise do gênero e suas marcas linguísticas (identificar o recurso de considerar a resposta e reelaborar a próxima pergunta, por exemplo). Além disso, embora a habilidade não preveja, recomenda-se o trabalho em colaboração realizado coletivamente, progredindo para situações em que a autonomia é cada vez mais requerida. A complexidade dos gêneros e/ou dos textos, assim como das situações comunicativas em foco, também pode funcionar como critério para a progressão da aprendizagem.",
  },
  {
    id: "EF35LP11",
    competences: "LP",
    group_years: "35",
    field: "01",
    unit: "LP04",
    object: "Variação linguística",
    skill: "EF35LP11",
    comment:
      "Esta é uma habilidade fundamental para a construção da ética necessária ao convívio republicano, na medida em que estimula a curiosidade, o reconhecimento e o respeito relativos à variação linguística local e nacional. Pressupõe a eleição de gêneros que circulem em variadas situações de comunicação. Pode haver impregnação com a escrita, como ouvir canções com legendas, participar de saraus lendo e oralizando textos etc. Tais situações devem contemplar produções locais e de diferentes regiões do país, favorecendo o convívio respeitoso com a diversidade linguística, de modo a legitimar os diferentes falares do Brasil, sem sobrepor uma variedade à outra.",
    resume:
      "Na elaboração do currículo, pode-se resgatar práticas de letramento/produtos culturais locais para legitimá-los, e explorar a gramática das variedades linguísticas usadas em comparação (e não oposição) com outros produtos culturais não locais para que os alunos possam compreender as diferenças e as similaridades como constitutivas das identidades de seus falantes. Pode-se prever, ainda, refletir sobre as situações comunicativas em que os textos circulam, de modo a identificar as mais apropriadas para o uso de determinada variedade linguística. Os tipos de variação, o foco sobre esse ou aquele aspecto da variedade, no simples convívio ou na análise às semelhanças e diferenças entre variedades, por exemplo, podem ser bons critérios para a progressão curricular. Há, aqui, oportunidade para o trabalho interdisciplinar com as habilidades (EF03GE01), da Geografia; (EF03HI07) e (EF03HI08), da História, no que se refere à identificação de características regionais, urbanas e rurais da fala, respeitando as diversas variedades linguísticas.",
  },
  {
    id: "EF35LP12",
    competences: "LP",
    group_years: "35",
    field: "01",
    unit: "LP05",
    object: "Construção do sistema alfabético e da ortografia",
    skill: "EF35LP12",
    comment:
      "A habilidade implica no uso do dicionário para resolver problemas de ortografia, o que pode ou não envolver a identificação da acepção correspondente ao uso que gerou a busca. Utilizar o dicionário requer a familiarização com procedimentos de busca.",
    resume:
      "Na elaboração do currículo, pode-se considerar as orientações apresentadas na habilidade (EF04LP03), tanto no que se refere aos aspectos conceituais quanto ao nível de autonomia do estudante para realizá-la. Considera-se, ainda, que se trata de resolver problemas de ortografia e não de elucidar uma acepção da palavra. Sendo assim, poderá ou não ser necessário que o aluno considere esse aspecto na consulta ao verbete, visto que o foco da busca será a conferência da grafia correta da palavra. A habilidade pode prever procedimentos como: a) recorrer à ordem alfabética, reiteradamente, para ajustar o caminho de busca da palavra almejada; b) levantar hipóteses sobre a grafia da palavra antes da busca pela grafia correta.",
  },
  {
    id: "EF35LP13",
    competences: "LP",
    group_years: "35",
    field: "01",
    unit: "LP05",
    object: "Construção do sistema alfabético e da ortografia",
    skill: "EF35LP13",
    comment:
      "A habilidade diz respeito a reconhecer e lembrar dos registros corretos das grafias de algumas das ocorrências irregulares presentes na língua. O tratamento pela memorização permite aos estudantes reter imagens visuais das palavras.",
    resume:
      "Na elaboração do currículo, pode-se orientar a realização de ditado inicial para verificar e organizar as intervenções com os diferentes tipos de ocorrências irregulares que se fizerem necessários, podendo ampliar a habilidade para enfocar: som do S (auxílio, cidade); do Z; do L e H (família e toalha etc.). É possível propor habilidades que orientem as ações necessárias à memorização, como participar de atividade de leitura de listas de palavras para destacar o H inicial, ter uma frequência de leitura articulada à tarefa de destacar/buscar palavras com determinada letra; fazer exercícios de pesquisa e registro para consulta posterior até chegar à memorização; participar de jogos que favoreçam a memorização; etc. Deve-se observar que a construção da ortografia inicia-se após a aquisição da base alfabética.",
  },
  {
    id: "EF35LP14",
    competences: "LP",
    group_years: "35",
    field: "01",
    unit: "LP05",
    object: "Morfologia",
    skill: "EF35LP14",
    comment:
      "A habilidade prevê aprender as classes gramaticais das palavras indicadas (pronomes pessoais, possessivos e demonstrativos) e identificar os papéis que desempenham na constituição da coesão do texto. É essencial prever um trabalho reflexivo de observação, análise, comparação e derivação de regularidades no trabalho com as classes de palavras; e usar os saberes gramaticais como ferramentas de constituição da legibilidade.",
    resume:
      "Na elaboração do currículo, o trabalho com esta habilidade deve prever a utilização instrumental desse saber para tomar decisões sobre a legibilidade do texto produzido, especialmente durante a revisão processual coletiva. Nesse momento, é possível antecipar problemas de compreensão que o interlocutor possa vir a ter e ajustar o texto, garantindo escolhas adequadas às intenções de significação. Na progressão curricular, pode-se considerar a variedade de recursos anafóricos possíveis de serem utilizados, progressivamente mais complexos, garantindo sempre o trabalho em colaboração (coletivo e em duplas) em situações de leitura (identificação), produção e revisão de texto.",
  },
  {
    id: "EF35LP15",
    competences: "LP",
    group_years: "35",
    field: "03",
    unit: "LP06",
    object: "Escrita colaborativa",
    skill: "EF35LP15",
    comment:
      "Esta habilidade consiste em expressar pontos de vista sobre temas controversos da vivência do aluno (como o bullying, o uso da tecnologia na sala de aula etc.) e argumentar para legitimar essas opiniões. A habilidade articula a produção de textos opinativos a dois vetores do processo de escrita (situação/tema ou assunto) e ao uso adequado do registro formal e dos recursos de argumentação. Convém considerar que a análise de diferentes pontos de vista sobre temas/questões polêmicas precede a emissão de opinião.",
    resume:
      "Na elaboração do currículo, pode-se prever a participação dos alunos em interações verbais que requeiram a argumentação, como debates, seminários, mesas-redondas, assembleias, entre outras. Para tanto, é preciso que os alunos: a) informem-se sobre as questões temáticas em foco, estudando-as e identificando posições apresentadas a respeito delas; b) discutam essas posições em rodas de discussão organizadas em classe, de modo a irem constituindo sua posição pessoal a respeito; c) conheçam as situações comunicativas e gêneros envolvidos na atividade que será realizada, de modo a poderem preparar-se para dela participar; d) identifiquem procedimentos que precisam ser adotados para terem uma participação mais efetiva na discussão. Além disso, as atividades específicas a serem propostas podem: a) definir o gênero da produção escrita (comentário/carta de leitor no jornal escolar, carta aberta à comunidade etc.), prever a análise do gênero e orientar sua produção; b) propor estudo de textos com temas polêmicos para identificar variados posicionamentos e marcadores argumentativos que possam repertoriar as produções. A progressão curricular pode apoiar-se no foco a ser dado a cada etapa do trabalho (pesquisa sobre tema polêmico/produção de textos opinativos), na complexidade do gênero visado (comentário/carta do leitor etc.) e no grau de autonomia do aluno a cada etapa.",
  },
  {
    id: "EF35LP16",
    competences: "LP",
    group_years: "35",
    field: "03",
    unit: "LP05",
    object: "Forma de composição dos textos",
    skill: "EF35LP16",
    comment:
      "Relacionada à (EF03LP23), esta habilidade tem como foco reconhecer, no processo de leitura, recursos linguísticos e discursivos que constituem alguns gêneros jornalísticos, de modo que seja possível empregá-los adequadamente nos textos a serem produzidos.",
    resume:
      "Na elaboração do currículo, deve-se considerar que o desenvolvimento desta habilidade só se dá de forma adequada em práticas de leitura e escrita de textos organizados nos gêneros previstos. A atividade de leitura colaborativa de estudo e a de revisão processual e final da escrita possibilitam estudar os recursos e analisar a adequação dos textos produzidos. Projetos que prevejam a elaboração de cartas de reclamação (de serviços, de produtos etc.) para serem publicadas em revistas e jornais impressos ou em sites específicos viabilizam o desenvolvimento da habilidade. A progressão pode dar-se pela complexidade dos textos lidos e pelo nível de autonomia que se pretende levar o aluno a conquistar em cada etapa.",
  },
  {
    id: "EF35LP17",
    competences: "LP",
    group_years: "35",
    field: "04",
    unit: "LP03",
    object: "Pesquisa",
    skill: "EF35LP17",
    comment:
      "Esta habilidade focaliza o trabalho de busca e seleção de textos sobre fenômenos sociais e naturais digitais e impressos. Isso supõe a discussão de procedimentos e de critérios de seleção dos textos nos diferentes ambientes, sempre com auxílio do professor, considerando tanto a especificidade de salas de leitura, bibliotecas escolares, públicas e pessoais, quanto ambientes digitais.",
    resume:
      "Na elaboração do currículo, no que diz respeito à progressão, pode-se considerar o grau de autonomia dos alunos e a complexidade dos procedimentos envolvidos, assim como a finalidade da busca e da seleção. É importante considerar, ainda, se nos ambientes físicos é possível procurar diretamente nas prateleiras ou é necessário recorrer ao encarregado, bibliotecário ou computador: os procedimentos a serem previstos serão específicos em cada caso. Indicar assunto, foco e autores e material de leitura possível. Nos ambientes digitais, convém não só considerar as características do ambiente e da ferramenta de busca para definir procedimentos, como, ainda, estabelecer critérios de confiabilidade dos sites. Podem ser propostas habilidades considerando a interação com os diferentes ambientes. Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF03MA18), da Matemática; (EF03HI02) e (EF03HI03), da História, associadas à realização de pesquisas.",
  },
  {
    id: "EF35LP18",
    competences: "LP",
    group_years: "35",
    field: "04",
    unit: "LP04",
    object: "Escuta de textos orais",
    skill: "EF35LP18",
    comment:
      "A habilidade tem como foco a escuta atenta e responsiva de apresentações orais em contexto escolar. A escuta — que tem como finalidade primeira a compreensão do texto oral — dá suporte tanto à formulação de perguntas para esclarecimentos, por exemplo, quanto à construção de respostas/explicações, considerando o uso progressivo de justificativas para a emissão de opinião.",
    resume:
      "Na elaboração do currículo, a habilidade de escuta de textos orais pode prever: a) procedimentos de registro de informações consideradas importantes e de dúvidas a serem apresentadas ao final da exposição; b) elaboração de questões a serem feitas ao locutor, ao final da exposição, para esclarecimentos, posicionamentos em relação à fala etc.;  c) trabalho em colaboração inicial até chegar, progressivamente, ao autônomo. Tal habilidade é fundamental para a formação do estudante; os currículos podem procurar desenvolvê-la na discussão de temas sociais relevantes para a comunidade local.",
  },
  {
    id: "EF35LP19",
    competences: "LP",
    group_years: "35",
    field: "04",
    unit: "LP04",
    object: "Compreensão de textos orais",
    skill: "EF35LP19",
    comment:
      "Trata-se de habilidade que envolve a escuta atenta e responsiva de apresentações orais em contexto escolar.",
    resume:
      "Na elaboração do currículo, pode-se prever o trabalho com esta habilidade em situações comunicativas de discussão de questões interdisciplinares e interculturais que impliquem o estudo de temas sociais relevantes para a comunidade local. É possível orientar para que a recuperação do conteúdo ouvido aconteça por meio de esquemas ou tabelas, prevendo, portanto, habilidades que envolvam diferentes situações formais de escuta e induzam ao ensino das formas de registro que possibilitem a recuperação da fala. A progressão pode ser pensada com base em critérios como os diferentes tipos de situações formais, a complexidade e/ou a extensão dos textos orais e o grau de autonomia a ser conquistado pelo aluno a cada etapa desse ensino.",
  },
  {
    id: "EF35LP20",
    competences: "LP",
    group_years: "35",
    field: "04",
    unit: "LP04",
    object: "Planejamento de texto oral\nExposição oral",
    skill: "EF35LP20",
    comment:
      "A habilidade tem como foco a exposição oral de pesquisas em contexto escolar. E requer o estudo de textos desse gênero, de modo a permitir ao aluno reconhecer a articulação entre a fala e o uso de roteiro escrito e recursos multissemióticos próprios ou compatíveis com o gênero previsto.",
    resume:
      "Na elaboração do currículo, a habilidade pode ser desenvolvida no interior de projetos e/ou sequências que articulem a especificidade dos textos no gênero exposição oral ao trabalho interdisciplinar, prevendo, por exemplo, temas como alimentação saudável; brinquedos/brincadeiras de ontem e de hoje; povos do Brasil; entre outros. É possível prever atividades destinadas a familiarizar o aluno com habilidades que envolvam o acesso aos recursos multissemióticos presentes nos textos e a pesquisa de conteúdo temático. A progressão, tanto horizontal quanto vertical, pode pautar-se pelo grau de complexidade dos trabalhos e/ou pesquisas, na alternância do foco do ensino (o gênero e sua organização geral; os recursos a serem mobilizados; a produção do roteiro; etc.) e o grau de autonomia a ser conquistada pelo aluno a cada etapa.  Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF03MA26), (EF03MA27), (EF03MA28), da Matemática; (EF03CI06), (EF03CI09), de Ciências; (EF03HI03), da História; e (EF03GE01), da Geografia, associadas à coleta, leitura, comparação e interpretação de dados, com apoio de recursos multissemióticos (listas, tabelas, ilustrações, gráficos).",
  },
  {
    id: "EF35LP21",
    competences: "LP",
    group_years: "35",
    field: "05",
    unit: "LP03",
    object: "Formação do leitor literário",
    skill: "EF35LP21",
    comment:
      "Trata-se de uma habilidade complexa. Para o seu desenvolvimento, é importante considerar:  a) o trabalho com as habilidades de leitura como um todo; b) o caráter não utilitário (lúdico/estético) dos textos literários;  c) as características de gêneros literários diversos, inclusive dramáticos e poéticos. A formulação da habilidade pressupõe o planejamento curricular de níveis menores de autonomia nos dois primeiros anos e de estratégias didáticas capazes de conduzir à autonomia nos três últimos.",
    resume:
      "Na elaboração do currículo, o trabalho com essa habilidade supõe a constituição de critérios de apreciação estética e afetiva de materiais de leitura. Para tanto, é preciso garantir: oferta de material de leitura de qualidade estética, ética, temática e linguística; espaços nos quais diferentes leitores possam trocar informações sobre materiais lidos (físicos ou digitais). Três atividades potencializam esse trabalho: a roda de leitores (na qual os alunos comentam livros de escolha pessoal lidos); o diário pessoal de leitura (na qual os alunos registram as impressões que vão tendo sobre o que leem e que socializam com os colegas); a leitura programada (na qual livros de maior extensão são lidos e estudados coletivamente, com mediação do professor). A progressão da aprendizagem pode apoiar-se no grau de complexidade dos gêneros e textos previstos (assim como dos seus respectivos temas), nos autores selecionados e no grau de autonomia que se pretende atingir a cada etapa do ensino.",
  },
  {
    id: "EF35LP22",
    competences: "LP",
    group_years: "35",
    field: "05",
    unit: "LP03",
    object: "Formação do leitor literário/ Leitura multissemiótica",
    skill: "EF35LP22",
    comment:
      "O foco dessa habilidade é a apreensão, pelo aluno leitor, dos efeitos de sentido produzidos em textos narrativos por: a) verbos introdutórios da fala de terceiros (verbos de enunciação ou dicendi) em casos de discurso citado (discurso direto; indireto; indireto livre); b) uso de variedades linguísticas na representação dessas falas no discurso direto. O desenvolvimento dessa habilidade é fundamental para a compreensão do caráter e da dinâmica de personagens numa trama, assim como da organização  textual da narrativa. Mas pressupõe um trabalho prévio tanto com o discurso citado quanto com variação linguística.",
    resume:
      "No desenvolvimento dessa habilidade, os diálogos precisam ser reconhecidos não apenas pelas marcas gráficas que os apresentam (dois pontos-travessão; dois pontos-aspas, por exemplo), ou pela presença dos verbos dicendi (introdutórios das falas de terceiros), mas também — e sobretudo — a partir da significação do texto. Na elaboração do currículo, pode-se, por exemplo, propor projetos que organizem uma exposição de diálogos famosos (de personagens de livros lidos); ou a produção de vídeos, em duplas, contendo um diálogo selecionado pelos alunos. A complexidade dos gêneros e textos previstos pelos currículos, as marcas linguísticas dos diálogos e o grau de autonomia do aluno proposta para cada ano podem ser bons critérios para a progressão da aprendizagem.",
  },
  {
    id: "EF35LP23",
    competences: "LP",
    group_years: "35",
    field: "05",
    unit: "LP03",
    object: "Apreciação estética/Estilo",
    skill: "EF35LP23",
  },
  {
    id: "EF35LP24",
    competences: "LP",
    group_years: "35",
    field: "05",
    unit: "LP03",
    object: "Textos dramáticos",
    skill: "EF35LP24",
    comment:
      "Esta é uma habilidade complexa, que envolve: a) o desenvolvimento das habilidades de leitura como um todo; b) o caráter não utilitário (lúdico/estético) dos textos literários; c) as características dos diferentes gêneros dramáticos.   A formulação da habilidade supõe tanto a formação de um repertório literário específico como a previsão curricular de estratégias didáticas que progridam da leitura colaborativa para a autônoma, ao longo dos três últimos anos.",
    resume:
      "Atividades que favorecem o desenvolvimento dessa habilidade são, entre outras, a leitura colaborativa — para estudo dos textos e modelização de procedimentos e comportamentos leitores —, e a roda de leitores, como na habilidade (EF35LP21). Na elaboração do currículo, a organização de leituras dramáticas de textos teatrais (leituras feitas por um grupo de pessoas que assumem os diferentes papéis da peça teatral, representando-os) cria um espaço de socialização dos textos, além de possibilitar o desenvolvimento da fluência leitora, como na habilidade (EF35LP01). A complexidade dos gêneros e textos previstos, as marcas linguísticas dos textos dramáticos e o grau de autonomia do aluno proposta para os três anos em jogo podem ser bons critérios para a progressão da aprendizagem.",
  },
  {
    id: "EF35LP25",
    competences: "LP",
    group_years: "35",
    field: "05",
    unit: "LP06",
    object: "Escrita autônoma e compartilhada",
    skill: "EF35LP25",
    comment:
      "Esta habilidade é mais complexa, pois envolve produzir narrativas de conteúdo temático, o que pode ser planejado de forma coletiva ou mais autônoma, garantindo progressão vertical no ano. Ela prevê que o aluno se utilize de recursos de descrição e narração para criar esses textos. A habilidade se relaciona à (EF15LP05) e (EF02LP27).",
    resume:
      "Na elaboração do currículo, é importante considerar que a criação de narrativas ficcionais difere da recontagem por solicitar a criação de conteúdo temático, sendo, portanto, mais complexa. É possível prever o estudo de narrativas representativas da cultura local, nacional e universal (culturas africana e latino-americana, por exemplo), além de ampliar a habilidade com a criação parcial (produzir parte desconhecida de um conto lido) e/ou colaboração no planejamento. Pode-se, ainda, analisar as características dos gêneros, a partir do estudo dos recursos presentes nos textos e prever a progressão horizontal e vertical (ampliando a complexidade do gênero ou texto proposto nos diferentes anos), começando com produção coletiva, seguida de trabalho em duplas/grupos para chegar à produção autônoma.",
  },
  {
    id: "EF35LP26",
    competences: "LP",
    group_years: "35",
    field: "05",
    unit: "LP06",
    object: "Escrita autônoma e compartilhada",
    skill: "EF35LP26",
    comment:
      "O foco dessa habilidade é a apreensão, por meio da leitura compreensiva, da organização discursiva e textual de gêneros narrativos, especialmente no que diz respeito aos aspectos mencionados. Trata-se, portanto, de uma habilidade complexa, que: a) articula a produção de gêneros narrativos a sua leitura e análise prévias; b) toma o estudo e/ou análise desses gêneros como pré-requisito para a escrita de textos narrativos.",
    resume:
      "Nos currículos locais, convém que o desenvolvimento dessa habilidade venha sempre associado a práticas articuladas e sequenciadas de leitura/análise e produção de gêneros narrativos, com ênfase sobre sua organização discursiva e textual. A progressão — tanto horizontal quanto vertical — pode combinar critérios como: a) o foco nesse ou naquele elemento organizacional da narrativa (enredo/ personagem/discurso reportado etc.); b) a complexidade dos gêneros e/ou textos programados para estudo; c) o grau de autonomia que se pretenda levar o aluno a atingir em cada etapa do ensino.",
  },
  {
    id: "EF35LP27",
    competences: "LP",
    group_years: "35",
    field: "05",
    unit: "LP06",
    object: "Escrita autônoma",
    skill: "EF35LP27",
    comment:
      "O foco dessa habilidade é a apreensão, por meio da leitura compreensiva, de recursos expressivos – inclusive visuais e sonoros –  próprios de gêneros poéticos. Trata-se, portanto, de uma habilidade complexa, que: a) articula a produção de gêneros poéticos a sua leitura e análise prévias; b) toma o estudo e/ou análise desses gêneros como pré-requisito para a escrita de textos narrativos.",
    resume:
      "Nos currículos locais, convém que o desenvolvimento dessa habilidade venha sempre associado a práticas articuladas e sequenciadas de leitura/análise e produção de gêneros poéticos, com ênfase sobre seus recursos expressivos. A progressão — tanto horizontal quanto vertical — pode combinar critérios como: a) o foco nesse ou naquele recurso expressivo (rimas/jogos de palavras/sentidos figurados/recursos visuais etc.); b) a complexidade dos gêneros e/ou textos programados para estudo; c) o grau de autonomia que se pretenda levar o aluno a atingir em cada etapa do ensino.",
  },
  {
    id: "EF35LP28",
    competences: "LP",
    group_years: "35",
    field: "05",
    unit: "LP04",
    object: "Declamação",
    skill: "EF35LP28",
    comment:
      "Trata-se de habilidade que envolve leitura e compreensão dos textos selecionados, para que o estudante, conhecendo os efeitos de sentido em jogo, possa ler/recitar/cantar com fluência, ritmo e entonação adequados. Sugere-se que a atividade esteja inserida em projeto/sequência de estudo de textos nos gêneros citados para apresentação em sarau, slam etc.",
    resume:
      "Na elaboração do currículo, pode-se orientar estudos de textos poéticos da cultura local, nacional, tradicionais e aqueles referentes às culturas periféricas, especialmente os mais representativos e vivos nas culturas locais. Podem ser propostas também habilidades que prevejam a colaboração, de modo a favorecer a ampliação da fluência dos estudantes. A progressão curricular pode ter como critério a complexidade dos textos e gêneros poéticos, o aspecto da declamação a ser focalizado (entonação; postura; fluência etc.), o planejamento ou a execução da atividade.",
  },
  {
    id: "EF35LP29",
    competences: "LP",
    group_years: "35",
    field: "05",
    unit: "LP05",
    object: "Formas de composição de narrativas",
    skill: "EF35LP29",
    comment:
      "Esta habilidade articula-se com a (EF01LP26) e com a (EF35LP28), na medida em que também visa narrativas literárias. Seu foco, no entanto, está no reconhecimento global da organização da narrativa e, em particular, do ponto de vista em que os textos lidos/escutados foram narrados, assim como na identificação da pessoa do discurso que os sustenta.",
    resume:
      "Na elaboração do currículo, convém que o desenvolvimento desta habilidade venha associado à frequentação dos estudantes a textos organizados nos gêneros previstos. O trabalho a ser desenvolvido é o mesmo que o previsto para a (EF01LP26), observando-se que, do 3º ao 5º ano, os alunos já estarão alfabetizados, sendo capazes de ler por si mesmos. No que se refere à identificação de pontos de vista, são muito produtivas as leituras de obras que apresentam textos clássicos narrados do ponto de vista de outro personagem da história base. Esta habilidade representa uma progressão vertical em relação à (EF01P26). A progressão horizontal pode dar-se pela complexidade dos textos e pelo nível de autonomia a ser conquistado pelo estudante a cada etapa (em colaboração: coletiva e em duplas, até o trabalho autônomo).",
  },
  {
    id: "EF35LP30",
    competences: "LP",
    group_years: "35",
    field: "05",
    unit: "LP05",
    object: "Discurso direto e indireto",
    skill: "EF35LP30",
    comment:
      "Esta habilidade refere-se a reconhecer as diferenças e semelhanças entre discurso direto e indireto, focalizando não apenas a pontuação, mas o uso dos verbos dicendi em cada caso; e implica compreender que a presença, na fala de personagens, de variedades linguísticas diferentes daquela em que o texto é narrado produz efeitos de sentido relevantes.",
    resume:
      "Na elaboração do currículo, deve-se considerar que o foco da habilidade é a separação gráfica que, no discurso direto, se estabelece entre o discurso do narrador e o do personagem, o que não ocorre no discurso indireto. Por outro lado, a fala de um personagem pode vir organizada em uma variedade linguística diferente do texto do narrador: trata-se de recurso de caracterização de personagem, ou de suas intenções. O importante é analisar a coerência desse fato no interior do texto. Nesse sentido, recomenda-se que os currículos locais associem o desenvolvimento desta habilidade a práticas de leitura e escrita de textos em que o discurso citado tenha um papel relevante. Esta habilidade representa uma progressão vertical em relação à (EF04LP05) e (EF03LP07). A progressão entre o terceiro e o quinto ano, em termos tanto horizontais quanto verticais, pode dar-se pelo grau de complexidade dos gêneros e/ou dos textos, assim como pelo nível de autonomia a ser atingido pelo estudante a cada etapa.",
  },
  {
    id: "EF35LP31",
    competences: "LP",
    group_years: "35",
    field: "05",
    unit: "LP05",
    object: "Forma de composição de textos poéticos",
    skill: "EF35LP31",
    comment:
      "Esta é uma habilidade diretamente relacionada à (EF12LP19). Trata-se de — no processo de leitura e estudo de textos poéticos — reconhecer recursos linguísticos e discursivos que constituem os gêneros mencionados. Seu desenvolvimento demanda o recurso a práticas de oralização dos textos mencionados, sem o que os aspectos relacionados à sonoridade e ao ritmo não podem ser observados.",
    resume:
      "Na elaboração do currículo, é importante que o desenvolvimento desta habilidade venha associado a atividades colaborativas de leitura, oralização e análise. Convém, portanto, que a mediação do professor e o envolvimento sistemático do aluno em práticas de leitura e escrita sejam contemplados nos dois primeiros anos. A progressão pode apoiar-se no grau de complexidade dos gêneros e/ou textos poéticos programados para o estudo e pelo nível de autonomia a ser atingido pelo estudante a cada etapa do trabalho.",
  },
  {
    id: "EF04LP01",
    competences: "LP",
    group_years: "04",
    field: "01",
    unit: "LP05",
    object: "Construção do sistema alfabético e da ortografia",
    skill: "EF04LP01",
    comment:
      "Esta habilidade consiste em entender e registrar corretamente os tipos de palavras previstas. As regulares diretas são (P, B, F, V, T, D) aquelas cujos sons são parecidos. As contextuais são aquelas em que o contexto interno da palavra é que determina que letra usar (R/RR, M/N, NH).",
    resume:
      "Na elaboração do currículo, é possível prever uma progressão horizontal que contemple, no primeiro semestre, a análise das ocorrências regulares contextuais em colaboração e, no segundo, a grafia correta e autônoma. Nesse caso, a habilidade pode ser articulada com outras que tratam da construção de regularidades, como a (EF03LP01), sempre prevendo a realização de ditado inicial para identificar as necessidades de aprendizagem dos estudantes. O trabalho de análise dos casos previstos pode ser proposto logo que os alunos compreendem o sistema de escrita, garantindo uma progressão com habilidades que prevejam a construção da autonomia da escrita convencional. As habilidades podem, ainda, propor a construção de regras pela análise comparativa das ocorrências.",
  },
  {
    id: "EF04LP02",
    competences: "LP",
    group_years: "04",
    field: "01",
    unit: "LP05",
    object: "Construção do sistema alfabético e da ortografia",
    skill: "EF04LP02",
    comment:
      "Relacionada à aprendizagem da ortografia, essa atividade pressupõe que o aluno já saiba escrever alfabeticamente. Seu foco é o domínio de convenções e normas relacionadas à grafia de vogais como /e/ e /o/ que, na língua oral, são reduzidas a /i/ e /u/ em final de sílabas VV e CVV. Seu desenvolvimento requer a participação direta e sistemática do aluno em práticas significativas de leitura e/ou escrita em que a grafia de palavras também seja objeto de observação e reflexão.",
    resume:
      "Recomenda-se que o desenvolvimento dessa habilidade, nos currículos locais, a) esteja sempre articulado ao das demais habilidades de apreensão e domínio da ortografia; b) venha associado a práticas de leitura e escrita; c) envolva observação, reflexão e apropriação. A progressão horizontal pode apoiar-se nos itens programados para estudo, assim como no grau de autonomia que se pretenda levar o aluno a atingir.",
  },
  {
    id: "EF04LP03",
    competences: "LP",
    group_years: "04",
    field: "01",
    unit: "LP05",
    object:
      "Conhecimento do alfabeto do português do Brasil/Ordem alfabética/Polissemia",
    skill: "EF04LP03",
    comment:
      "Localizar palavras em um dicionário é uma habilidade estreitamente associada a práticas de leitura e produção de textos. Trata-se de uma habilidade instrumental, que visa responder a problemas tanto de compreensão quanto relativos à repetição inadequada de palavras no texto produzido, garantindo a coesão e a coerência. É, ainda, fundamental para o prosseguimento dos estudos, considerando a necessidade de leitura de textos de todos os demais componentes curriculares. Seu desenvolvimento demanda o convívio cotidiano com dicionários e atividades de análise, estudo e uso desse instrumento.",
    resume:
      "É fundamental garantir, na elaboração do currículo, o domínio desta habilidade. Aspectos a serem considerados na progressão do trabalho: familiarização com o gênero verbete (impresso e/ou digital), reconhecendo suas partes e o tipo de informações que apresentam, e com o portador e sua organização interna: ordem alfabética progressiva (letra inicial; inicial e 2ª letra etc.); forma de apresentação das palavras (verbos no infinitivo, substantivos e adjetivos no masculino singular etc.); apresentação das várias acepções possíveis da palavra. Esses aspectos podem constituir a progressão vertical e horizontal do trabalho associados ao nível de autonomia do estudante. É importante que os currículos orientem, ainda, sobre a importância de buscar o significado do vocábulo também pelo contexto, pela releitura do trecho em que ele foi encontrado, especialmente no caso dos textos da esfera literária, de modo a garantir a familiarização com esse procedimento antes da busca no dicionário.",
  },
  {
    id: "EF04LP04",
    competences: "LP",
    group_years: "04",
    field: "01",
    unit: "LP05",
    object: "Conhecimento das diversas grafias do alfabeto/ Acentuação",
    skill: "EF04LP04",
    comment:
      "Esta habilidade requer do aluno: identificar as sílabas das palavras; reconhecer qual sílaba é tônica; identificar quais têm vogais abertas e quais têm vogais fechadas; reconhecer sinais gráficos como o acento agudo e o circunflexo; relacionar o primeiro com vogais abertas e o segundo, com as fechadas. Depois disso, requer que os alunos identifiquem as regularidades da acentuação apontadas na habilidade.",
    resume:
      "Na elaboração do currículo, convém que se programe o desenvolvimento desta habilidade para uma etapa posterior à da construção de uma certa proficiência na escrita. Todo esse trabalho pode ser realizado sem o uso da metalinguagem (utilizar terminologia da gramática para se referir às questões abordadas, por exemplo, substantivo, adjetivo, concordância verbal etc.). No entanto, é preciso ressaltar que o seu uso torna a linguagem mais econômica, podendo facilitar a reflexão, e que o recurso à metalinguagem é posterior à compreensão do fato discutido. A progressão da acentuação inicia-se com as pautas de memorização, nas quais palavras são afixadas em cartazes que o aluno pode consultar ao escrever. Depois, ao longo dos anos, propor que as regularidades sejam discutidas por meio de um movimento dialógico de análise e reflexão, seguido de emprego na produção textual. As pautas permanecem para o caso das irregularidades.",
  },
  {
    id: "EF04LP05",
    competences: "LP",
    group_years: "04",
    field: "01",
    unit: "LP05",
    object: "Pontuação",
    skill: "EF04LP05",
    comment:
      "Em relação à habilidade (EF03LP07), esta prevê a ampliação do estudo dos recursos de pontuação, incluindo o uso de vírgula em enumerações e em separação de vocativo e aposto. Da mesma forma, o estudo prevê: identificar os novos sinais gráficos; reconhecer — na leitura — a sua função; usá-los no texto para garantir legibilidade e para provocar os efeitos de sentido desejados.",
    resume:
      "Na elaboração do currículo, deve-se considerar que, na escola, o estudo da pontuação acontece de duas maneiras (como na habilidade EF02LP09): na leitura, ao analisar os efeitos de sentido produzidos pelo uso no texto; e na escrita, ao discutir possibilidades e analisar os efeitos de sentido correspondentes (nesse caso, empregar a vírgula em enumerações — ou usar preposição e/ou ponto e vírgula —, para separar vocativo e aposto, que também pode ser delimitado por travessões ou indicado por dois pontos) e selecionar a que mais se adequar às intenções de significação. A progressão vertical está prevista pela ampliação gradativa dos sinais a serem utilizados de modo convencional, mas também deve-se considerar a complexificação dos textos e o nível de autonomia do estudante.",
  },
  {
    id: "EF04LP06",
    competences: "LP",
    group_years: "04",
    field: "01",
    unit: "LP05",
    object: "Morfologia/Morfossintaxe",
    skill: "EF04LP06",
    comment:
      "Intimamente relacionada à (EF05LP06), esta habilidade envolve trabalhar com substantivos e pronomes pessoais ligados ao verbo, assim como identificar a necessidade de estabelecer a concordância verbal entre eles na constituição da coesão e da coerência do texto. É interessante prever um trabalho reflexivo de observação, análise, comparação e derivação de regularidades no trabalho com as classes de palavras e suas funções no enunciado; e usar os saberes gramaticais como ferramentas de constituição da legibilidade.",
    resume:
      "Na elaboração do currículo, deve-se considerar que o trabalho com esta habilidade deve prever a utilização instrumental desse saber para tomar decisões sobre a legibilidade do texto produzido, especialmente durante a revisão processual coletiva. Nesse momento, é possível antecipar problemas de compreensão que o interlocutor possa vir a ter e ajustar o texto, garantindo escolhas adequadas às intenções de significação. Na organização curricular, pode-se considerar a especificidade da concordância verbal (número e pessoa), garantindo sempre o trabalho em colaboração (coletivo e em duplas).",
  },
  {
    id: "EF04LP07",
    competences: "LP",
    group_years: "04",
    field: "01",
    unit: "LP05",
    object: "Morfossintaxe",
    skill: "EF04LP07",
    comment:
      "A habilidade prevê reconhecer a necessidade de estabelecer a concordância nominal na constituição da coesão e da coerência do texto. É interessante prever um trabalho reflexivo de observação, análise, comparação e levantamento de regularidades que caracterizem as classes de palavras; e usar os saberes gramaticais como ferramentas de constituição da legibilidade do texto.",
    resume:
      "Na elaboração do currículo, o trabalho com esta habilidade deve prever a utilização instrumental desse saber para tomar decisões sobre a legibilidade do texto produzido, especialmente durante a revisão processual coletiva e final. Nesse momento, é possível antecipar problemas de compreensão que o interlocutor possa vir a ter e ajustar o texto, garantindo escolhas adequadas às intenções de significação. Na organização curricular, pode-se considerar a especificidade da concordância nominal (gênero e número), garantindo sempre o trabalho em colaboração (coletivo e em duplas).",
  },
  {
    id: "EF04LP08",
    competences: "LP",
    group_years: "04",
    field: "01",
    unit: "LP05",
    object: "Morfologia",
    skill: "EF04LP08",
    comment:
      "Corresponde às regularidades morfológicas abordadas na habilidade EF05LP01.",
    resume:
      "Na elaboração do currículo, pode-se articular esta habilidade com outras, que prevejam o conhecimento morfológico gramatical em uma progressão que poderá acontecer no ano e entre os anos do Ensino Fundamental. É indicado que sejam realizados ditados diagnósticos de modo a identificar as possíveis ocorrências que ainda não são grafadas convencionalmente pelos estudantes, de modo a planejar intervenções adequadas. Nesse caso, a habilidade se conecta com todas as demais que tratam do ensino de ortografia.",
  },
  {
    id: "EF04LP09",
    competences: "LP",
    group_years: "04",
    field: "02",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF04LP09",
    comment:
      "Trata-se de uma habilidade complexa, que precisa considerar tanto o trabalho com as habilidades de leitura quanto as características de cada um dos gêneros do campo da vida cotidiana (organização interna; marcas linguísticas; conteúdo temático) e dos textos específicos a serem lidos. Atentar para o fato de que o trabalho previsto é com autonomia.",
    resume:
      "Parei Na elaboração do currículo, convém focalizar as características/elementos que forem importantes para a compreensão do texto, articular a existência dessas características à finalidade do texto, prever um trabalho dialógico e reflexivo no estudo dos textos, assim como a comparação entre textos do mesmo gênero e de gêneros diferentes, estabelecendo semelhanças e diferenças.  Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF04MA10) e (EF04MA25), da Matemática, no que se refere à leitura de valores monetários e reflexões sobre consumo consciente.",
  },
  {
    id: "EF04LP10",
    competences: "LP",
    group_years: "04",
    field: "02",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF04LP10",
    comment:
      "Trata-se de uma habilidade complexa, que precisa considerar tanto o trabalho com as habilidades de leitura quanto as características de cada um dos gêneros do campo cotidiano (organização interna; marcas linguísticas; conteúdo temático) e dos textos específicos a serem lidos. Atentar para o fato de que o trabalho previsto é com autonomia.",
    resume:
      "As cartas de reclamação circulam em situações de comunicação em que um cidadão procura manifestar insatisfação ou resolver algum problema que pode relacionar-se a um serviço ou a um produto adquirido, por exemplo. Trata-se de um gênero que possibilita o exercício da cidadania, daí a importância do seu ensino. Podem ser enviadas diretamente ao responsável pelo problema ou serem publicadas em jornais e revistas em seções específicas. A linguagem é sempre mais formal e polida. Organizam-se a partir dos seguintes elementos: local e data; destinatário; cumprimento; apresentação do problema; despedida; remetente. Na elaboração do currículo, convém articular essas características à finalidade do texto, assim como prever um trabalho dialógico e reflexivo.",
  },
  {
    id: "EF04LP11",
    competences: "LP",
    group_years: "04",
    field: "02",
    unit: "LP06",
    object: "Escrita colaborativa",
    skill: "EF04LP11",
    comment:
      "Trata-se de uma habilidade que articula a produção textual com o gênero de cartas pessoais e de reclamação e três vetores do processo de escrita (situação/tema ou assunto/finalidade). Envolve ao menos duas operações distintas, que podem ser tratadas em separado: planejar e produzir, que significam organizar as ideias para depois colocá-las no papel.",
    resume:
      "Na elaboração do currículo, esta habilidade pode ser ampliada com atividades que prevejam a utilização de procedimentos de busca e consulta a ambientes/espaços impressos e digitais de publicação das cartas de reclamação, tanto em colaboração quanto de modo autônomo, para o exercício pleno da cidadania. É possível, portanto, propor habilidades que: a) envolvam análise de textos dos gêneros em questão, para explicitar as suas características; b) orientem o uso de procedimentos escritores, como: reler o que está escrito para continuar, consultar o planejamento para tomar decisões e revisar no processo e ao final; c) ampliem para análise dos ambientes de publicação das cartas. Deve-se, ainda, observar que a habilidade fala em dois gêneros: carta pessoal e carta de reclamação, e não carta pessoal de reclamação, como parece.",
  },
  {
    id: "EF04LP12",
    competences: "LP",
    group_years: "04",
    field: "02",
    unit: "LP04",
    object: "Produção de texto oral",
    skill: "EF04LP12",
    comment:
      "A habilidade envolve a recepção atenta e a compreensão de textos instrucionais veiculados em mídia digital, além de duas outras operações complexas: planejar e produzir tutoriais.",
    resume:
      "É importante que, na elaboração do currículo, preveja-se o acesso e a utilização de ferramentas digitais que viabilizem a produção dos textos em áudio ou vídeo. É possível propor habilidades que: a) envolvam análise de textos, dos gêneros previstos para extrair as suas características, de acordo com a situação comunicativa; b) prevejam o planejamento do texto a ser produzido, considerando a situação em que irá circular;  c) orientem a produção/textualização deste. A progressão horizontal pode apoiar-se na extensão e complexidade das instruções previstas, assim como nas operações sucessivas que a habilidade envolve. Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF15AR24), da Arte; e (EF35EF01) da Educação Física, voltadas à experimentação e compreensão de jogos e brincadeiras.",
  },
  {
    id: "EF04LP13",
    competences: "LP",
    group_years: "04",
    field: "02",
    unit: "LP05",
    object: "Forma de composição do texto",
    skill: "EF04LP13",
    comment:
      "Esta habilidade refere-se a reconhecer, no processo de leitura, recursos linguísticos e discursivos que constituem os gêneros previstos, de modo que seja possível empregá-los adequadamente nos textos  a serem produzidos.",
    resume:
      "Na elaboração do currículo, deve-se considerar que esta habilidade já representa um aprofundamento em relação à habilidade (EF01LP20). No 1º ano, o trabalho acontece por frequentação; no 4º, o aprofundamento pode ser realizado por sequências didáticas. A atividade de leitura colaborativa possibilita estudar os recursos previstos, enquanto a de revisão processual e final possibilita analisar a adequação dos textos produzidos. Um projeto interessante pode ser elaborar um blog, vlog ou revista temática de jogos: indígenas, da década de 50, de diferentes regiões do país, da América Latina etc. A progressão horizontal pode dar-se pela complexidade dos jogos (e dos textos), assim como pelo nível de autonomia do aluno que, no currículo, se efetiva pela organização de habilidades em que as tarefas sejam realizadas em colaboração e, progressivamente, com autonomia.  Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF15AR24), da Arte; e (EF35EF01) da Educação Física, voltadas à experimentação e compreensão de jogos e brincadeiras.",
  },
  {
    id: "EF04LP14",
    competences: "LP",
    group_years: "04",
    field: "03",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF04LP14",
    comment:
      "Trata-se de uma habilidade complexa, que precisa considerar tanto o trabalho com as habilidades de leitura quanto as características da notícia (organização interna; marcas linguísticas; conteúdo temático). No que se refere ao nível de autonomia, os currículos locais podem prever se, ao final do ano, os alunos deverão alcançar o trabalho autônomo ou não. Em caso positivo, é importante indicar os procedimentos a serem adotados.",
    resume:
      "Trata-se de uma habilidade de leitura que requer a mobilização de  outras competências, como a construção de informações, a inferenciação e a ativação de repertório prévio. Na elaboração do currículo, pode-se buscar organizar a progressão considerando a complexidade dos textos e o grau de autonomia do aluno ao realizar a tarefa. A leitura colaborativa, trabalhada na habilidade (EF12LP02), é atividade fundamental para a realização desse trabalho.",
  },
  {
    id: "EF04LP15",
    competences: "LP",
    group_years: "04",
    field: "03",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF04LP15",
    comment:
      "Trata-se de uma habilidade complexa, que precisa considerar tanto o trabalho com outras habilidades de leitura quanto as características dos textos mencionados (organização interna; marcas linguísticas; conteúdo temático). No que se refere ao nível de autonomia, os currículos locais podem prever se, ao final do ano, os alunos deverão alcançar o trabalho autônomo ou não. Em caso positivo, é importante indicar os procedimentos a serem adotados.",
    resume:
      "Esta habilidade de leitura requer a mobilização de outras competências, como a localização e a redução de informações, a articulação de informações de diferentes partes do texto, a inferenciação e a ativação de repertório prévio. Além disso, requer também a identificação de valores éticos e/ou políticos no texto e de elaboração de apreciações relativas a esses e a outros valores. Na elaboração do currículo, pode-se buscar organizar a progressão considerando a complexidade dos textos e o grau de autonomia do aluno ao realizar a tarefa. A leitura colaborativa, trabalhada na habilidade (EF12LP02), é atividade fundamental para o desenvolvimento dessa habilidade.",
  },
  {
    id: "EF04LP16",
    competences: "LP",
    group_years: "04",
    field: "03",
    unit: "LP06",
    object: "Escrita colaborativa",
    skill: "EF04LP16",
    comment:
      "Esta habilidade articula a produção de notícias a dois vetores do processo de escrita (situação/tema ou assunto) e ao tratamento da matéria de acordo com as convenções do gênero. Ela prevê a produção de textos do gênero notícia, o que envolve organizar as ideias e utilizar informações coletadas por pesquisa para depois escrever fatos do entorno do aluno (como coisas relevantes socialmente que aconteceram na escola ou na comunidade).",
    resume:
      "Na elaboração do currículo, pode-se prever o trabalho contextualizado a partir de temáticas relevantes para a comunidade local e para o interesse dos alunos, como eventos da comunidade, ações comunitárias em desenvolvimento, propostas do governo local e da escola, realização de campeonatos esportivos, notícias a respeito de funcionamento de bibliotecas e espaços culturais, funcionamento de espaços públicos, problemas que a cidade/comunidade vivencia, entre outros. A habilidade requer a análise de textos no gênero em questão para explicitar suas principais características e repertoriar a produção. Assim, a habilidade pode ser desmembrada, prevendo-se o estudo do gênero e da situação comunicativa em que a produção irá circular. Recomenda-se uma progressão horizontal que se inicie com o trabalho colaborativo coletivo e avance para as atividades em grupo/duplas e autônomas.",
  },
  {
    id: "EF04LP17",
    competences: "LP",
    group_years: "04",
    field: "03",
    unit: "LP04",
    object: "Planejamento e produção de texto",
    skill: "EF04LP17",
    comment:
      "A habilidade focaliza a produção de materiais jornalísticos (orais e/ou escritos) para diferentes mídias. A produção visada está articulada às características dos gêneros previstos. A habilidade requer a análise da mídia e dos textos/gêneros que nele circulam. Embora vise diretamente a produção, implica o planejamento necessário das atividades.",
    resume:
      "Na elaboração do currículo, é preciso considerar que a habilidade prevê tanto a produção oral quanto a oralização de textos escritos. Essa situação coloca as seguintes condições básicas para a adequação do texto: a) produzir a escrita do texto a ser lido; e/ou b) organizar esquema do texto a ser produzido oralmente, o que requer muito ensaio coletivo, com análise crítica; c) estudar os recursos a serem empregados nesse material, considerando a especificidade da mídia e ambiente no qual será veiculado o material. Além disso, as habilidades podem  prever:a) a seleção e estudo dos textos a serem produzidos para compreender suas características, de acordo com a situação comunicativa; b) o planejamento/pesquisa do conteúdo temático e considerando a situação em que irá circular o tipo de mídia. Do ponto de vista da progressão, é possível propor habilidades que orientem a produção/revisão colaborativa e que estejam inseridas em projetos de produção de jornais editados para circular em blogs e rádios comunitárias da escola. Há, aqui, oportunidade de trabalho interdisciplinar com a habilidade (EF15AR19), da Arte, no que se refere à identificação de elementos teatrais na vida cotidiana, no caso, nos gêneros jornal falado/televisivo e entrevista.",
  },
  {
    id: "EF04LP18",
    competences: "LP",
    group_years: "04",
    field: "03",
    unit: "LP05",
    object: "Forma de composição dos textos",
    skill: "EF04LP18",
    comment:
      "Esta habilidade relaciona-se com a (EF05LP21), na medida em que prevê o estudo de aspectos relativos a comunicações orais (algumas entrevistas, vídeos de vloggers) ou oralizadas (fala de âncora ou locutor de notícias, por exemplo). Seu desenvolvimento possibilita a compreensão mais crítica e aprofundada dos textos ouvidos pelo aluno e põe em jogo a relação entre entonação, gesticulação, olhares, tom de voz, expressões faciais, meneios de cabeça, de um lado, e, de outro, os efeitos de sentido assim produzidos, evidenciando valores éticos, estéticos e políticos veiculados na fala.",
    resume:
      "Na elaboração do currículo, recomenda-se que o desenvolvimento desta habilidade venha associado a diferentes práticas de escuta atenta e crítica de entrevistas e jornais radiofônicos e/ou televisivos, para que os alunos possam perceber e se familiarizar com os padrões denotacionais e a expressão corporal próprios de âncoras e entrevistadores nesses meios. Convém prever, ainda, que as atividades sejam realizadas com base em gravações de discursos autênticos (registrados nessas situações), tornando possível assistir, analisar, reassistir e tirar dúvidas relativas ao estudo. A progressão horizontal pode se dar pela complexidade dos textos lidos (em função, por exemplo, do tema) e pelo nível de autonomia que se pretende levar o aluno a conquistar em cada etapa.",
  },
  {
    id: "EF04LP19",
    competences: "LP",
    group_years: "04",
    field: "04",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF04LP19",
    comment:
      "Trata-se de uma habilidade complexa, que precisa considerar tanto o trabalho com as habilidades de leitura quanto as características de cada um dos gêneros (organização interna; marcas linguísticas; conteúdo temático) e dos textos expositivos de divulgação científica para crianças a serem lidos. O grau de autonomia esperada no desenvolvimento desta habilidade deve ser articulado com o repertório suposto para o aluno no nível de ensino em foco.",
    resume:
      "Textos expositivos de divulgação científica são fundamentais na vida escolar: é por meio deles que o conhecimento produzido em diversas áreas é registrado e divulgado. Por isso, a leitura destes vai sempre ser solicitada nas diversas disciplinas, e o prosseguimento dos estudos pode depender da proficiência constituída pelo aluno. A leitura colaborativa, proposta na habilidade (EF12LP02), é atividade fundamental para a realização desse tipo de leitura, que é a de estudo. Na elaboração do currículo, convém focalizar as características que forem importantes para a compreensão do texto, articular essas características à finalidade do texto, prever um trabalho dialógico e reflexivo, assim como a comparação entre textos por semelhanças e diferenças.",
  },
  {
    id: "EF04LP20",
    competences: "LP",
    group_years: "04",
    field: "04",
    unit: "LP03",
    object: "Imagens analíticas em textos",
    skill: "EF04LP20",
    comment:
      "Esta habilidade refere-se à necessidade de o aluno reconhecer que os textos podem ser compostos por diferentes recursos semióticos, os quais também compõem os sentidos do texto, caracterizando-o como multissemiótico.  O grau de autonomia esperada no desenvolvimento desta habilidade deve ser articulado com o repertório suposto para o aluno no nível de ensino em foco.",
    resume:
      "Nos textos de divulgação científica, acadêmicos, de pesquisa e também nos de imprensa (reportagens, artigos de divulgação científica, artigos acadêmicos, relatórios de pesquisa etc.), é comum a presença de infográficos que sintetizem dados, esquemas visuais que simulem uma situação descrita, tabelas que apresentem dados coletados e gráficos que os agrupem, oferecendo uma visão geral e comparada de respostas a uma enquete, por exemplo. Na elaboração do currículo, é preciso, então, prever que os alunos compreendam que esses recursos podem conter dados não apresentados no texto verbal que sejam importantes para uma melhor compreensão da questão discutida no texto. É importante tematizar a presença desses dados por meio de perguntas que os coloquem em jogo. Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF03MA26), (EF03MA27), (EF03MA28), da Matemática (EF03CI06), (EF03CI09), da Ciência; (EF03HI03), da História; e (EF03GE01), da Geografia, associadas a coleta, leitura, comparação e interpretação de dados de pesquisas, com apoio de recursos multissemióticos.",
  },
  {
    id: "EF04LP21",
    competences: "LP",
    group_years: "04",
    field: "04",
    unit: "LP06",
    object: "Produção de textos",
    skill: "EF04LP21",
    comment:
      "Trata-se de uma habilidade que articula a produção textual com o tema do interesse do aluno, que seja baseado em fontes de informação e pesquisa confiáveis, e dois vetores do processo de escrita (situação/tema ou assunto). Envolve ao menos duas operações distintas, que podem ser tratadas em separado: planejar e produzir, que significam organizar as ideias para depois colocá-las no papel.",
    resume:
      "Na elaboração do currículo, é possível organizar as habilidades em temáticas significativas para o país ou região, como ambiente e sustentabilidade (tratamento do lixo, água etc.), aspectos relacionados à saúde etc., articulados de modo interdisciplinar em projetos que prevejam situações comunicativas orais em interação com alunos de outros períodos do Ensino Fundamental. Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF04MA27) e (EF04MA28), da Matemática, no que se refere à utilização de gráficos e tabelas para a realização de pesquisas e análise de dados. É possível, ainda, propor habilidades que: a) envolvam análise de textos com temáticas de interesse baseados em outras fontes para explicitar suas características, construindo registros que possam repertoriar a produção; b) orientem procedimentos escritores, como: reler o que está escrito para continuar escrevendo, consultar o planejamento para tomar decisões e revisar no processo e ao final.",
  },
  {
    id: "EF04LP22",
    competences: "LP",
    group_years: "04",
    field: "04",
    unit: "LP06",
    object: "Escrita autônoma",
    skill: "EF04LP22",
    comment:
      "Esta habilidade articula a produção textual com o gênero verbete de enciclopédia e três vetores do processo de escrita (situação/tema ou assunto/finalidade). Envolve ao menos duas operações distintas, que podem ser tratadas em separado: planejar e produzir, que significam organizar as ideias para depois colocá-las no papel.",
    resume:
      "Na elaboração do currículo, podem-se prever: a) a consulta a enciclopédias eletrônicas e impressas a partir da pesquisas em biblioteca escolar ou ambientes digitais, com análise de verbetes, de modo a explicitar as suas características e construindo registros que possam repertoriar a produção; b) a pesquisa do conteúdo temático em fontes impressas e digitais, com tomada coletiva de notas ou em grupos; c) o estudo de ambientes digitais que recebem verbetes de enciclopédia para publicação. É possível, ainda, propor habilidades que orientem o uso de procedimentos escritores, como: reler o que está escrito para continuar, consultar o planejamento para tomar decisões no momento da escrita e revisar no processo e ao final. A progressão horizontal pode apoiar-se no grau de complexidade dos verbetes de enciclopédias disponíveis na sala de leitura e/ou biblioteca da escola.",
  },
  {
    id: "EF04LP23",
    competences: "LP",
    group_years: "04",
    field: "04",
    unit: "LP05",
    object: "Forma de composição dos textos\nCoesão e articuladores",
    skill: "EF04LP23",
    comment:
      "Esta habilidade refere-se a reconhecer, no processo de leitura, recursos linguísticos e discursivos que constituem os gêneros previstos, de modo que seja possível empregá-los adequadamente nos textos  a serem produzidos.",
    resume:
      "Na elaboração do currículo, deve-se considerar que o desenvolvimento desta habilidade pode acontecer por meio da intensa frequentação dos estudantes a textos organizados nos gêneros previstos. A atividade de leitura colaborativa e a de revisão processual e final possibilitam estudar os recursos e analisar a adequação dos textos produzidos. Elaborar verbetes para enciclopédias digitais ou produzir um dossiê impresso sobre um tema estudado pela classe, que contenha verbetes a respeito dos conteúdos relativos a esse tema, são possibilidades de concretizar o trabalho, que podem ser sugeridas nas habilidades a serem propostas pelas redes. Na organização do currículo, a progressão pode dar-se pela diversificação do tema, pela complexidade dos textos, assim como pelo nível de autonomia do aluno, que pode se efetivar pela organização de habilidades em que as tarefas sejam realizadas em colaboração e, progressivamente, de modo autônomo.",
  },
  {
    id: "EF04LP24",
    competences: "LP",
    group_years: "04",
    field: "04",
    unit: "LP05",
    object:
      "Forma de composição dos textos\nAdequação do texto às normas de escrita",
    skill: "EF04LP24",
    comment:
      "Esta habilidade articula-se com a (EF03LP26) e refere-se — no processo de leitura de estudo — a reconhecer recursos discursivos definidos nos gêneros previstos, de modo que seja possível empregá-los adequadamente nos textos a serem produzidos.",
    resume:
      "Na elaboração do currículo, deve-se considerar que esta habilidade representa uma progressão em relação à (EF03LP26). O seu desenvolvimento pode se dar por meio da frequentação dos estudantes a textos organizados nos gêneros previstos, com aprofundamento leve. É importante que os currículos orientem a analisar a adequação do recurso às intenções de significação e à coerência do texto. A progressão pode dar-se pela complexidade do recurso a ser identificado e pelo nível de autonomia do aluno, sendo este um aspecto a ser previsto nos currículos: tarefas em colaboração que avancem para aquelas realizadas com mais autonomia.",
  },
  {
    id: "EF04LP25",
    competences: "LP",
    group_years: "04",
    field: "04",
    unit: "LP06",
    object: "Escrita autônoma",
    skill: "EF04LP25",
    comment:
      "O foco dessa habilidade está na oralização de textos dramatúrgicos de acordo com as indicações autorais constantes das rubricas. Pressupõe a leitura compreensiva e o estudo prévios do texto a ser representado, com ênfase sobre as relações que se podem estabelecer entre a escrita e a fala. Seu desenvolvimento demanda a participação do aluno em práticas de leitura e análise de textos dramáticos.",
    resume:
      "Nos currículos locais, convém que o desenvolvimento dessa habilidade venha sempre associado a práticas articuladas e sequenciadas de leitura/análise de textos dramáticos, com ênfase sobre as relações entre fala e escrita que se estabelecem nesses casos. A progressão horizontal pode combinar critérios como: a) a complexidade dos gêneros e/ou textos programados para estudo; b) o grau de autonomia que se pretenda levar o aluno a atingir em cada etapa do ensino.",
  },
  {
    id: "EF04LP26",
    competences: "LP",
    group_years: "04",
    field: "05",
    unit: "LP05",
    object: "Forma de composição de textos poéticos visuais",
    skill: "EF04LP26",
    comment:
      "Estreitamente relacionada à (EF02LP29), esta habilidade consiste no processo de leitura e estudo de textos, em: a) identificar a relação existente entre o poema concreto e o espaço no qual se insere, seja ele a página de um livro, de um site ou a tela de um projetor; b) analisar os efeitos de sentido produzidos pelo modo de ocupação desse espaço. O foco é a distribuição, o tipo e o tamanho das letras no espaço, assim como a diagramação.",
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade demanda a previsão de práticas de leitura e estudo de poemas concretos, para que as suas características fundamentais sejam identificadas: o tipo de ocupação do espaço no qual se insere, seja ele a página de um livro, a tela de um computador ou de um projetor. Incluem-se nessa ocupação a disposição, o tipo e tamanho das letras, a direção da escrita, o tipo de linha presumido e a diagramação. Convém esclarecer, ainda, que, nos poemas concretos, não há, necessariamente, figurativização nas representações. Assim, o texto verbal não precisa ser grafado de modo a representar figuras. As atividades colaborativas são mais adequadas para o desenvolvimento da habilidade, em especial as coletivas, com mediação do professor. A progressão horizontal pode apoiar-se no grau de complexidade dos gêneros e textos propostos, no tipo de recurso gráfico a ser estudado e no nível de autonomia do estudante a ser conquistado a cada etapa.",
  },
  {
    id: "EF04LP27",
    competences: "LP",
    group_years: "04",
    field: "05",
    unit: "LP05",
    object: "Forma de composição de textos dramáticos",
    skill: "EF04LP27",
    comment:
      "Trata-se de habilidade que envolve a leitura e compreensão do texto a ser recitado, para que o aluno, conhecendo os efeitos de sentido em jogo, possa ler/recitar/cantar com maior fluência, ritmo e entonação adequada.",
    resume:
      "Na elaboração do currículo, pode-se orientar, para além dos gêneros mencionados, estudos de textos poéticos da cultura local ou nacional, assim como aqueles referentes às culturas periféricas, especialmente os mais relevantes para as culturas locais.  Podem ser previstas também habilidades que indiquem o trabalho em colaboração, de modo a favorecer o desenvolvimento da fluência e observação do ritmo entre os estudantes. Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF15AR14) e (EF15AR17), da Arte, associadas a improvisação, composição e sonorização de histórias e exploração dos elementos constitutivos da música.",
  },
  {
    id: "EF05LP01",
    competences: "LP",
    group_years: "05",
    field: "01",
    unit: "LP05",
    object: "Construção do sistema alfabético e da ortografia",
    skill: "EF05LP01",
    comment:
      "A habilidade diz respeito a compreender e registrar corretamente os casos das palavras previstas. As contextuais são aquelas em que o contexto interno da palavra é que determina que letra usar, sendo necessária a análise de ocorrências para a construção da regra. As morfológicas são aquelas em que o conhecimento de determinado aspecto gramatical contribui para saber como grafar a palavra. Ex.: adjetivos como: manhoso/guloso e outros são grafados com S, entre outras. As palavras de uso frequente com correspondências irregulares devem ser memorizadas, conforme habilidade (EF35LP13).",
    resume:
      "Na elaboração do currículo, pode-se articular essa habilidade com outras, que prevejam o conhecimento morfológico gramatical, em uma progressão que poderá acontecer neste ano e entre anos do Ensino Fundamental. É indicado orientar a realização de ditados iniciais de modo a identificar as possíveis ocorrências que ainda não são grafadas convencionalmente pelos estudantes, de modo a planejar intervenções adequadas. Nesse caso, a habilidade se conecta com todas as demais que tratam do ensino de ortografia.",
  },
  {
    id: "EF05LP02",
    competences: "LP",
    group_years: "05",
    field: "01",
    unit: "LP05",
    object:
      "Conhecimento do alfabeto do português do Brasil/Ordem alfabética/Polissemia",
    skill: "EF05LP02",
    comment:
      "A habilidade implica em saber que uma palavra pode ter vários significados, em função de vários aspectos relacionados com o contexto de uso: gíria, tempo, registro linguístico —  literário, usual, acadêmico, científico etc. Sendo assim, é fundamental considerar essas variáveis, seja na leitura de um texto (reconhecendo o sentido correspondente ao contexto), seja na elaboração de um texto (empregando-a de acordo com as intenções de significação).",
    resume:
      "Na elaboração do currículo, ao organizar sua progressão, é preciso considerar que a habilidade envolve dois aspectos: a) reconhecer que uma palavra pode ter vários sentidos, dependendo do contexto; b) comparar um uso comum com o da esfera acadêmico-científica. A intenção é, portanto, desenvolver a proficiência leitora acadêmico-científica. Sugere-se que a progressão deva acontecer em função dos conteúdos trabalhados nas diferentes áreas, em cada ano, prevendo tanto a complexificação a partir do texto selecionado, ou seja, prever trabalho com textos mais complexos a cada ano, quanto o grau de autonomia do aluno para realizar a tarefa, isto é, propor habilidades em que o trabalho aconteça em parceria, progredindo para o trabalho autônomo, tanto de modo vertical (entre os anos) quanto de modo horizontal (ao longo de um determinado ano).",
  },
  {
    id: "EF05LP03",
    competences: "LP",
    group_years: "05",
    field: "01",
    unit: "LP05",
    object: "Conhecimento das diversas grafias do alfabeto/ Acentuação",
    skill: "EF05LP03",
    comment:
      "Esta habilidade requer do aluno: identificar as sílabas das palavras; reconhecer qual sílaba é tônica; identificar quais têm vogais abertas e quais têm vogais fechadas; reconhecer sinais gráficos como o acento agudo e o circunflexo; relacionar o primeiro com vogais abertas e o segundo, com as fechadas. Depois disso, requer que os alunos identifiquem as regularidades da acentuação apontadas na habilidade.",
    resume:
      "Na elaboração do currículo, convém que se programe o desenvolvimento desta habilidade para uma etapa posterior à da construção de uma certa proficiência na escrita. Todo esse trabalho pode ser realizado sem o uso da metalinguagem. No entanto, é preciso ressaltar que o seu uso torna a linguagem mais econômica, podendo facilitar a reflexão, e que o recurso à metalinguagem é mais efetivo e produtivo se for posterior à compreensão do fato discutido. A progressão da acentuação inicia-se com as pautas de memorização, nas quais palavras são afixadas em cartazes que o aluno pode consultar ao escrever. Depois, ao longo dos anos, as regularidades serão  discutidas por meio de um movimento dialógico de análise e reflexão, seguido de emprego na produção textual.",
  },
  {
    id: "EF05LP04",
    competences: "LP",
    group_years: "05",
    field: "01",
    unit: "LP05",
    object: "Pontuação",
    skill: "EF05LP04",
    comment:
      "Esta habilidade prevê a ampliação do estudo dos recursos de pontuação previstos na habilidade (EF04LP05), contemplando o estudo de novos usos da vírgula, dos dois pontos, ponto e vírgula, reticências, aspas e parênteses. Da mesma forma, prevê: identificar os novos sinais gráficos; reconhecer, na leitura, a sua função; usá-los no texto para garantir legibilidade e para provocar os efeitos de sentido desejados.",
    resume:
      "Na elaboração do currículo, deve-se considerar que, na escola, o estudo da pontuação acontece de duas maneiras (como na habilidade EF02LP09): na leitura, ao analisar os efeitos de sentido produzidos pelo uso no texto; e na escrita, ao discutir possibilidades, analisar os efeitos de sentido correspondentes (nesse caso, comparando os efeitos de sentido de cada um dos novos recursos, ou seja, identificar as funções das reticências e das aspas) e selecionar a que mais se adequar às intenções de significação. As aspas podem ser utilizadas para assinalar discurso direto — ou para indicar pensamento de personagem, por exemplo —, o que representa uma ampliação na reflexão do 3º ano. A progressão vertical está prevista pela ampliação gradativa dos sinais a serem utilizados, mas também deve-se considerar a complexificação dos textos e o nível de autonomia do estudante, que poderá ser considerado nos currículos locais com a previsão do trabalho em colaboração no primeiro semestre e mais autônomo no segundo.",
  },
  {
    id: "EF05LP05",
    competences: "LP",
    group_years: "05",
    field: "01",
    unit: "LP05",
    object: "Morfologia",
    skill: "EF05LP05",
    comment:
      "No trabalho com esta habilidade, é interessante prever um trabalho reflexivo de observação, análise, comparação e derivação de regularidades no trabalho com os tempos verbais e usar tais saberes como ferramentas de constituição da legibilidade do texto. Além disso, é possível propor que, na produção escrita, o estudante utilize esse saber para garantir a manutenção do tempo verbal predominante, o que confere coesão e coerência ao texto. Esses saberes devem servir de ferramenta para tomar decisões sobre a legibilidade do texto produzido, especialmente durante a revisão processual coletiva.",
    resume:
      "Na elaboração do currículo, o trabalho com esta habilidade deve considerar a especificidade da expressão do presente em português brasileiro, que prevê o uso regular da forma composta  [verbo no presente + gerúndio] — como em “estou fazendo”, por exemplo — em vez da conjugação simples no presente do indicativo — faço —, que mais parece se referir a uma ação costumeira do que à ação que está acontecendo no presente.",
  },
  {
    id: "EF05LP06",
    competences: "LP",
    group_years: "05",
    field: "01",
    unit: "LP05",
    object: "Morfologia",
    skill: "EF05LP06",
    comment:
      "Esta habilidade está estreitamente relacionada à (EF04LP06) e envolve trabalhar com verbos e pronomes pessoais sujeito, assim como identificar a necessidade de estabelecer a concordância verbal na constituição da coesão e da coerência do texto. É interessante prever um trabalho reflexivo de observação, análise, comparação e derivação de regularidades no trabalho com as classes de palavras e suas funções no enunciado; e usar os saberes gramaticais como ferramentas de constituição da legibilidade.",
    resume:
      "Na elaboração do currículo, o trabalho com esta habilidade deve prever a utilização instrumental desse saber para tomar decisões sobre a legibilidade do texto produzido, especialmente durante a revisão processual coletiva. Nesse momento, é possível antecipar problemas de compreensão que o interlocutor possa vir a ter e ajustar o texto, garantindo escolhas adequadas às intenções de significação. Na organização curricular, pode-se considerar a especificidade da concordância verbal (número e pessoa), garantindo sempre o trabalho em colaboração (coletivo e em duplas).",
  },
  {
    id: "EF05LP07",
    competences: "LP",
    group_years: "05",
    field: "01",
    unit: "LP05",
    object: "Morfologia",
    skill: "EF05LP07",
    comment:
      "A habilidade prevê trabalhar com a compreensão das relações que as conjunções estabelecem entre segmentos do texto e analisar que o seu uso inadequado pode produzir sentidos não desejados. É essencial prever um trabalho reflexivo de observação, análise, comparação e derivação de regularidades de uso dessa classe de palavras; e usar tais saberes como ferramentas de constituição da legibilidade do texto.",
    resume:
      "Na elaboração do currículo, deve-se prever a análise da articulação entre trechos de enunciados, e avaliar os sentidos produzidos pelas conjunções empregadas e sua adequação às intenções de significação pretendidas. Por meio de atividades de uso da linguagem no texto, especialmente nos momentos de revisão processual e final, deve-se instrumentalizar o estudante para resolver problemas de compreensão que o interlocutor possa vir a ter. Na progressão curricular, pode-se considerar a variedade de recursos possíveis, progressivamente mais complexos, garantindo sempre o trabalho em colaboração.",
  },
  {
    id: "EF05LP08",
    competences: "LP",
    group_years: "05",
    field: "01",
    unit: "LP05",
    object: "Morfologia",
    skill: "EF05LP08",
    comment:
      "Trata-se de reconhecer — com maior sistematização em relação à habilidade (EF03LP10) — que há palavras que derivam de outras e que têm o seu sentido modificado pelo acréscimo de afixos ou no início ou no final delas. Esses afixos possuem sentidos regulares, sendo possível identificar o significado de uma palavra derivada se a primitiva e o afixo forem conhecidos. Além disso, há, ainda, as palavras compostas por justaposição e aglutinação. É interessante a reflexão a partir de inventários, prevendo-se o uso desse saber para resolver problemas de compreensão vocabular.",
    resume:
      "Na elaboração do currículo, deve-se considerar que a progressão curricular vertical já está definida na BNCC se considerarmos que esta habilidade acrescenta o processo de composição de palavras à (EF03LP10). No que se refere à progressão horizontal, pode-se pensar tanto na ampliação de afixos possíveis (e os seus respectivos sentidos) para o processo de derivação quanto nos diferentes processos de composição (justaposição e aglutinação). Na progressão, pode-se considerar o grau de complexidade lexical  (palavras mais difíceis) e o nível de autonomia do estudante.",
  },
  {
    id: "EF05LP09",
    competences: "LP",
    group_years: "05",
    field: "02",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF05LP09",
    comment:
      "Trata-se de uma habilidade que precisa considerar tanto o trabalho com as habilidades de leitura quanto as características de cada um dos gêneros do campo da vida cotidiana (organização interna; marcas linguísticas; conteúdo temático) e dos textos instrucionais de regras de jogo a serem lidos. Atentar para o fato de que o trabalho previsto é com autonomia.",
    resume:
      "Na elaboração do currículo, convém considerar as características dos textos selecionados para leitura e dos gêneros previstos. As instruções de jogos, por exemplo, organizam-se pela presença de: título, jogadores, material para jogar, objetivo, regras. Pode-se indicar, ainda, o grau de dificuldade. O texto adequa-se ao portador e ao espaço de circulação, alterando a linguagem, apresentando imagens, por exemplo. Se for um jogo digital, haverá referências específicas desse espaço. Nas atividades de estudo, convém focalizar as características que forem importantes para a compreensão do texto, articular essas características à finalidade do texto, rever um trabalho dialógico e reflexivo, assim como a comparação entre textos por semelhanças e diferenças.",
  },
  {
    id: "EF05LP10",
    competences: "LP",
    group_years: "05",
    field: "02",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF05LP10",
    comment:
      "Trata-se de uma habilidade complexa, que precisa considerar tanto o trabalho com as habilidades de leitura quanto as características de cada um dos gêneros do campo da vida cotidiana (organização interna; marcas linguísticas; conteúdo temático) e dos textos específicos a serem lidos. Atentar para o fato de que o trabalho previsto é com autonomia.",
    resume:
      "Na elaboração do currículo, convém considerar as características dos textos selecionados para leitura e dos gêneros previstos. Os cartuns, por exemplo, são textos humorísticos que articulam linguagem verbal e gráfico-visual, apresentando críticas ao comportamento humano e aos valores, referindo-se a situações genéricas e pessoas comuns. São textos em que a compreensão depende da articulação entre linguagem verbal e gráfico-visual. Assim como para as anedotas, a inferenciação é habilidade indispensável para a construção do sentido em cartuns. Os currículos podem prever projetos de leitura em que se organizem exposições de cartuns de autores específicos ou de temas relevantes em um determinado momento da vida social.",
  },
  {
    id: "EF05LP11",
    competences: "LP",
    group_years: "05",
    field: "02",
    unit: "LP06",
    object: "Escrita colaborativa",
    skill: "EF05LP11",
    comment:
      "O foco dessa habilidade é o registro escrito de textos de gêneros orais lúdicos e/ou humorísticos da vida cotidiana. Trata-se de uma habilidade complexa, que: a) articula a produção desses gêneros a sua prévia escuta atenta; b) toma o estudo desses gêneros como pré-requisito para o registro escrito de piadas e cartuns, entre outros. Seu desenvolvimento requer a participação direta e sistemática do aluno em práticas orais e escritas nas quais esses gêneros: a) estejam envolvidos; b) sejam discutidos e analisados do ponto de vista dos objetivos em jogo nos textos, das situações a que estejam associados e das convenções discursivas e textuais que os configuram.",
    resume:
      "Nos currículos locais, convém que o desenvolvimento dessa habilidade venha sempre associado a práticas articuladas e sequenciadas de leitura/análise e produção de gêneros lúdicos e/ou humorísticos da vida cotidiana, com ênfase sobre a discussão de suas convenções de gênero, finalidades e situação de comunicação. Recomenda-se que a progressão horizontal se apoie numa combinação de critérios: a) o foco nesse ou naquele  gênero; b) a complexidade dos gêneros e/ou textos programados para estudo; c) o grau de autonomia que se pretenda levar o aluno a atingir em cada etapa do ensino.",
  },
  {
    id: "EF05LP12",
    competences: "LP",
    group_years: "05",
    field: "02",
    unit: "LP01",
    object: "Escrita colaborativa",
    skill: "EF05LP12",
    comment:
      "Trata-se de uma habilidade que articula a produção textual com o gênero de textos instrucionais de regras de jogo e dois vetores do processo de escrita (situação/finalidade). Envolve ao menos duas operações distintas, que podem ser tratadas em separado: planejar e produzir, que significam organizar as ideias para depois colocá-las no papel.",
    resume:
      "Na elaboração do currículo, o desenvolvimento da habilidade deve prever a contextualização em projetos temáticos, como, por exemplo, estudo de jogos de diferentes culturas (indígenas, latino-americanas, africanas etc.), elaboração de um DVD com diversos jogos de tabuleiro da década de 1960, produção de um livro com jogos inventados pela classe, tarde de jogos na escola, contendo espaços com jogos da infância da comunidade escolar, entre outros. É possível propor habilidades que: a) envolvam análise de textos dos gêneros do campo da vida cotidiana em questão, de modo a explicitar suas características, construindo registros que possam repertoriar a produção; b) orientem o uso de procedimentos escritores, como: reler o que está escrito para continuar, consultar o planejamento para tomar decisões no momento da escrita e revisar no processo e ao final.",
  },
  {
    id: "EF05LP13",
    competences: "LP",
    group_years: "05",
    field: "02",
    unit: "LP04",
    object: "Produção de texto oral",
    skill: "EF05LP13",
    comment:
      "A habilidade envolve recepção atenta e compreensão de comentários críticos orais veiculados em vlogs infantis. Além disso, compreende duas outras operações complexas: planejar e produzir resenhas digitais.",
    resume:
      "É importante que, na elaboração do currículo, preveja-se o acesso e a utilização de ferramentas digitais que viabilizem a produção dos textos em áudio ou vídeo. Para o desenvolvimento desta habilidade, pode-se propor: a) a análise de vlogs, identificando os gêneros que nele circulem; b) a seleção do gênero mais indicado para a apresentação de críticas do tipo de produto a ser comentado; c) critérios de análise dos produtos focalizados;  d) estudo de recursos da mídia utilizada, assim como dos paratextuais que compõem a performance do locutor. As atividades a serem desenvolvidas, além das indicações já apresentadas, podem: a) envolver análise de textos do gênero resenha, para compreender as suas características, de acordo com a situação  comunicativa; b) prever o planejamento do texto a ser produzido, considerando a situação em que irá circular;  c) orientar a produção/textualização deste. A progressão horizontal pode apoiar-se na extensão e complexidade das resenhas previstas, assim como nas operações sucessivas que a habilidade envolve.",
  },
  {
    id: "EF05LP14",
    competences: "LP",
    group_years: "05",
    field: "02",
    unit: "LP05",
    object: "Forma de composição do texto",
    skill: "EF05LP14",
    comment:
      "Esta habilidade refere-se a reconhecer, no processo de leitura, recursos linguísticos e discursivos que constituem os gêneros previstos, de modo que seja possível empregá-los adequadamente nos textos  a serem produzidos.",
    resume:
      "Na elaboração do currículo, deve-se considerar que o desenvolvimento desta habilidade pode se dar por meio da intensa frequentação dos estudantes a textos organizados nos gêneros previstos. A atividade de leitura colaborativa e a de revisão processual e final possibilitam estudar os recursos e analisar a adequação dos textos produzidos. A participação de sites — ou blogs — em que são apresentadas resenhas de livros para os demais frequentadores, assim como a elaboração de um blog ou jornal de resenhas de livros e/ou brinquedos, viabilizam o trabalho. Na organização do currículo, a progressão pode dar-se pela diversificação do objeto cultural resenhado, pela complexidade dos textos e pelo nível de autonomia do aluno, que pode se efetivar pela organização de habilidades em que as tarefas sejam realizadas em colaboração e, progressivamente, com autonomia.",
  },
  {
    id: "EF05LP15",
    competences: "LP",
    group_years: "05",
    field: "03",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF05LP15",
    comment:
      "Trata-se de uma habilidade complexa, que precisa considerar tanto o trabalho com outras habilidades de leitura e de oralidade (como a escuta atenta e crítica) quanto as características dos textos mencionados (organização interna; marcas linguísticas; conteúdo temático), inclusive quando forem multissemióticos. A habilidade prevê apenas desempenhos autônomos, o que confere maior importância, nos currículos locais, ao planejamento da progressão da aprendizagem no ensino da leitura.",
    resume:
      "O foco do trabalho são os textos do campo político-cidadão e jornalístico. Na elaboração do currículo, convém que se preveja o estudo da especificidade dos portadores (jornais e revistas impressos e digitais, blogs e vlogs), para que os alunos possam conhecer o local de publicação dos textos, contextualizando-os quanto à extensão, orientação de valores e características gráficas e também quanto aos recursos digitais disponíveis (como postagem imediata de comentários a respeito das matérias publicadas). A leitura proficiente desses textos requer a compreensão de suas características (recursos multimodais, marcas linguísticas) na relação com a função do gênero e a finalidade do texto, e com a situação comunicativa em que circulam.",
  },
  {
    id: "EF05LP16",
    competences: "LP",
    group_years: "05",
    field: "03",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF05LP16",
    comment:
      "A habilidade envolve a análise de textos de diferentes mídias, considerando-se as especificações dos gêneros em que são organizados, bem como as finalidades e intencionalidades das mídias utilizadas. No que se refere ao nível de autonomia, convém que os currículos considerem o repertório inicial dos alunos para decidir se, ao final do quinto ano, alcançarão o trabalho autônomo ou não.",
    resume:
      "Essa habilidade supõe que, diante de textos que abordem o mesmo assunto, sejam encontradas informações distintas. Para discutir qual informação é mais confiável, é preciso definir critérios que podem abranger diferentes aspectos, como: indicação completa de fonte da matéria; autoria reconhecida em sua área de atuação; credibilidade do veículo (qual jornal, qual blog, qual revista); endereço idôneo do site; disponibilização de recursos  de comunicação com leitores; entre outros. Na elaboração do currículo, a progressão horizontal pode se dar pelo grau de autonomia do aluno na realização da tarefa e pela complexidade dos textos.",
  },
  {
    id: "EF05LP17",
    competences: "LP",
    group_years: "05",
    field: "03",
    unit: "LP06",
    object: "Escrita colaborativa",
    skill: "EF05LP17",
    comment:
      "Esta habilidade articula a produção de roteiros de reportagem às convenções do gênero e a dois vetores do processo de escrita (situação/tema ou assunto). Ela prevê a produção de textos para reportagem digital, o que envolve organizar as ideias e utilizar as informações coletadas por pesquisa para depois escrevê-las.",
    resume:
      "Na elaboração do currículo, é possível prever a abordagem de temáticas relevantes socialmente e do interesse dos alunos, como eventos esportivos, espaços de lazer disponíveis para crianças na região, ações possíveis de serem realizadas pela população visando o desenvolvimento sustentável na cidade, o papel da tecnologia digital no município, a disponibilização de equipamentos públicos e o seu uso pelos cidadãos, a condição do transporte público local, entre outras. A habilidade requer a análise de textos no gênero indicado para explicitar suas principais características e repertoriar a produção. Assim, a habilidade pode ser desmembrada em: a) estudo do gênero e da situação comunicativa em que a produção irá circular; b) análise de ambientes digitais, como sites, blogs, páginas de jornais online, para repertoriar a produção; c) produção do roteiro. Recomenda-se uma progressão horizontal que se inicie com o trabalho colaborativo coletivo e avance para as atividades em grupo/duplas e autônomas.",
  },
  {
    id: "EF05LP18",
    competences: "LP",
    group_years: "05",
    field: "03",
    unit: "LP04",
    object: "Planejamento e produção de texto",
    skill: "EF05LP18",
    comment:
      "Esta é uma habilidade complexa, que envolve três etapas distintas de produções orais argumentativas para vlogs. Ainda, articula esse trabalho com os gêneros visados e três vetores da produção: a situação comunicativa, o tema e a finalidade.",
    resume:
      "É muito importante que, na elaboração do currículo, preveja-se o acesso e a utilização de ferramentas digitais que viabilizem a produção dos textos em áudio ou vídeo. O tratamento dessa habilidade pode prever: a) análise de vlogs, identificando os gêneros que nele circulem; b) seleção do gênero mais indicado para a apresentação de críticas do tipo de produto a ser comentado; c) critérios de análise dos produtos focalizados;  d) estudo de recursos da mídia utilizada, assim como os paratextuais que compõem a performance do locutor. As atividades a serem desenvolvidas, além das indicações já apresentadas, podem: a) envolver análise de textos do gênero resenha, para compreender as suas características, de acordo com a situação comunicativa; b) supor a pesquisa do conteúdo temático; c) prever o planejamento do texto a ser produzido, considerando a situação em que irá circular; c) orientar a produção/textualização deste; d) orientar a revisão colaborativa. A progressão horizontal pode tomar como critério as diferentes etapas e operações envolvidas no desenvolvimento da habilidade, além do foco nos diversos aspectos em jogo nas atividades.  Do ponto de vista da progressão, é possível propor habilidades que orientem a produção/revisão colaborativa e que estejam inseridas em projetos de produção de jornais editados para circular em blogs e rádios comunitárias da escola.",
  },
  {
    id: "EF05LP19",
    competences: "LP",
    group_years: "05",
    field: "03",
    unit: "LP04",
    object: "Produção de texto",
    skill: "EF05LP19",
    comment:
      "Muito relevante para a participação no espaço público e o exercício da cidadania, esta habilidade tem como foco a argumentação oral na discussão de questões controversas.",
    resume:
      "Na elaboração do currículo, pode-se formular habilidades que contemplem questões controversas sobre temas de interesse da região e/ou de temas recorrentes da realidade brasileira, como: demarcação de terras indígenas, uso sustentável de recursos naturais, entre outros. Pode-se, ainda, propor diferentes situações e gêneros em que a habilidade deva ser desenvolvida, assim como atividades de planejamento e de produção. A habilidade requer pesquisa de conteúdo temático e definição de situações comunicativas que envolvam o gênero a ser utilizado para argumentar (debate, discussão em roda etc.), de modo a proporem-se situações de ensino-aprendizagem desses textos e gêneros.",
  },
  {
    id: "EF05LP20",
    competences: "LP",
    group_years: "05",
    field: "03",
    unit: "LP05",
    object: "Forma de composição dos textos",
    skill: "EF05LP20",
    comment:
      "O desenvolvimento desta habilidade está intimamente associado à recepção atenta e crítica a discursos sobre produtos de mídia para o público infantil. Compreende refletir e analisar os textos midiáticos referidos, com o objetivo de reconhecer a força dos argumentos e seu poder de persuasão na apresentação de tais produtos. Coloca-se como condição para o desenvolvimento dessa habilidade o conhecimento do produto pelo estudante.",
    resume:
      "Na elaboração do currículo, convém que o desenvolvimento desta habilidade venha associado à frequentação dos estudantes a textos organizados nos gêneros previstos. A atividade de leitura colaborativa de estudo viabiliza a análise dos recursos indicados, assim como a roda de discussão. É importante analisar também o movimento argumentativo presente nos textos. A progressão horizontal pode se dar pela complexidade dos textos lidos e pelo nível de autonomia que se pretende levar o aluno a conquistar em cada etapa.",
  },
  {
    id: "EF05LP21",
    competences: "LP",
    group_years: "05",
    field: "03",
    unit: "LP05",
    object: "Forma de composição dos textos",
    skill: "EF05LP21",
    comment:
      "Esta habilidade relaciona-se com a (EF04LP18), na medida em que prevê o estudo de aspectos relativos a comunicações orais (algumas entrevistas, vídeos de vloggers) ou oralizadas (fala de âncora ou locutor de notícias, por exemplo). Seu desenvolvimento permite ao aluno perceber e avaliar o papel persuasivo do padrão entonacional, da expressão corporal e da variedade linguística selecionada no discurso argumentativo de vloggers.",
    resume:
      "Na elaboração do currículo, deve-se considerar que o desenvolvimento desta habilidade envolve a previsão de práticas de escuta atenta, no interior das quais os alunos poderão observar, refletir e analisar os aspectos mencionados da produção oral, relacionando-os a seus efeitos de sentido. As falas de âncoras realizam-se de maneiras diferentes, dependendo do veículo: em alguns, os profissionais manifestam-se espontaneamente, reagindo a notícias apresentadas, entrevistas feitas; mas, em outros, limitam-se à leitura das notícias pelo teleprompter. No primeiro caso, teremos um misto de linguagem oral com oralização de texto lido; no segundo, apenas oralização de texto escrito. Em relação à (EF04LP18), esta habilidade representa um avanço na progressão vertical, já que os gêneros previstos são diferentes. A progressão horizontal pode se dar pela complexidade dos textos lidos (em função, por exemplo, do tema) e pelo nível de autonomia que se pretende levar o aluno a conquistar em cada etapa.",
  },
  {
    id: "EF05LP22",
    competences: "LP",
    group_years: "05",
    field: "04",
    unit: "LP03",
    object: "Compreensão em leitura",
    skill: "EF05LP22",
    comment:
      "Trata-se de uma habilidade complexa, que precisa considerar tanto o trabalho com as habilidades de leitura quanto as características de cada um dos gêneros (organização interna; marcas linguísticas; conteúdo temático) e dos verbetes específicos a serem lidos. O grau de autonomia esperada no desenvolvimento desta habilidade deve ser articulado com o repertório suposto para o aluno no nível de ensino em foco.",
    resume:
      "Verbetes de dicionário são ferramentas indispensáveis na vida escolar; por isso, é imprescindível que o aluno os conheça e seja proficiente na sua leitura. É composto por duas partes: cabeça (ou entrada) — palavra da qual se busca o significado — e corpo — informações lexicais e linguísticas sobre a cabeça. Na elaboração do currículo, deve-se considerar que, além de conhecer essa estrutura, o aluno precisa saber que, no dicionário: as entradas são organizadas por ordem alfabética; os verbos são apresentados no infinitivo; o singular e o masculino são a forma padrão de apresentação de substantivos e adjetivos. É preciso saber também o contexto da palavra para poder selecionar as acepções adequadas. Esse aprendizado deve acontecer no uso, em situações genuínas.",
  },
  {
    id: "EF05LP23",
    competences: "LP",
    group_years: "05",
    field: "04",
    unit: "LP03",
    object: "Imagens analíticas em textos",
    skill: "EF05LP23",
    comment:
      "Trata-se de ler e interpretar dados de gráficos e tabelas, compreendendo as diferenças e semelhanças de apresentação correspondentes a cada um. A habilidade supõe a leitura e interpretação dos dados de cada um dos gêneros mencionados, para, depois, realizar a comparação entre ambos. O grau de autonomia esperada no desenvolvimento desta habilidade deve ser articulado com o repertório suposto para o aluno no nível de ensino em foco.",
    resume:
      "Na elaboração do currículo, é preciso garantir que os alunos saibam realizar a interpretação dos dados de gráficos, tabelas e outros recursos que compõem, sobretudo, os textos do campo de estudo e pesquisa. É importante orientá-los para ler, por exemplo, o título dos gráficos (pois indicam o que representam os dados), as legendas (pois esclarecem quais são os dados apresentados), os eixos (para verificar qual será a articulação) e comparar as sínteses que as colunas/fatias representam. Feita a leitura de um dos recursos, a ideia é que façam a do segundo e, depois, que realizem a articulação dos dados de cada recurso, sem esquecer que o foco é a compreensão do problema abordado. A leitura colaborativa é uma atividade que potencializa esse trabalho. Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF03MA26), (EF03MA27), (EF03MA28), da Matemática (EF03CI06), (EF03CI09), da Ciência; (EF03HI03), da História; e (EF03GE01), da Geografia, associadas a coleta, leitura, comparação e interpretação de dados de pesquisas, com apoio de recursos multissemióticos.",
  },
  {
    id: "EF05LP24",
    competences: "LP",
    group_years: "05",
    field: "04",
    unit: "LP06",
    object: "Produção de textos",
    skill: "EF05LP24",
    comment:
      "Esta é uma habilidade que articula a produção textual com o tema de interesse do aluno ao organizar resultados de pesquisa e dois vetores do processo de produção escrita (situação/tema ou assunto). Envolve ao menos duas operações distintas, que podem ser tratadas em separado: planejar e produzir, que significam organizar as ideias para depois colocá-las no papel.",
    resume:
      "Na elaboração do currículo, podem-se organizar as habilidades em temáticas relevantes para o país ou região, como meio-ambiente e sustentabilidade (tratamento do lixo, água etc.), aspectos relacionados à saúde etc., articulados de modo interdisciplinar em projetos que prevejam situações comunicativas orais com outros alunos de períodos mais avançados do Ensino Fundamental. As habilidades podem ser articuladas com a prática de linguagem oral, prevendo exposição oral para outras turmas. Há possibilidade de desmembrar a habilidade, prevendo outras que orientem procedimentos de busca de informações em ambientes digitais e uso de programas que permitam a construção de tabelas e gráficos. Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF05MA24) e (EF05MA25), da Matemática, no que se refere à utilização e interpretação de gráficos e tabelas em textos. É possível definir o gênero a ser estudado (verbete de curiosidade, texto expositivo) e propor habilidades que: a) envolvam análise de textos dos gêneros em questão para explicitar as suas características; b) orientem o uso de procedimentos escritores, como: reler o que está escrito para continuar, consultar o planejamento para tomar decisões e revisar no processo e ao final.",
  },
  {
    id: "EF05LP25",
    competences: "LP",
    group_years: "05",
    field: "05",
    unit: "LP04",
    object: "Performances orais",
    skill: "EF05LP25",
    comment:
      "Trata-se de uma habilidade que articula a produção textual com o gênero verbete de dicionário e três vetores do processo de escrita (situação/tema ou assunto/finalidade). Envolve ao menos duas operações distintas, que podem ser tratadas em separado: planejar e produzir, que significam organizar as ideias para depois colocá-las no papel.",
    resume:
      "Na elaboração do currículo, pode-se prever: a) o uso de procedimentos de consulta a portadores do gênero impressos e eletrônicos, com análise de textos de verbetes de dicionário para explicitar suas características, construindo registros que possam repertoriar a produção; b) pesquisas do conteúdo temático para os verbetes em fontes impressas e digitais com tomada de notas coletiva ou em grupos para uso posterior na produção; c) o estudo de ambientes digitais que recebem verbetes; d) temáticas significativas para a produção dos verbetes. É possível, ainda, propor habilidades que orientem o uso de procedimentos escritores, como: reler o que está escrito para continuar, consultar o planejamento para tomar decisões no momento da escrita e revisar no processo e ao final. A progressão horizontal pode apoiar-se no grau de complexidade dos verbetes e/ou dos dicionários distribuídos pelo PNLD para as escolas públicas desse nível de ensino (Dicionários de Tipo 1 e de Tipo 2).",
  },
  {
    id: "EF05LP26",
    competences: "LP",
    group_years: "05",
    field: "04",
    unit: "LP05",
    object:
      "Forma de composição dos textos \nAdequação do texto às normas de escrita",
    skill: "EF05LP26",
    comment:
      "Esta habilidade refere-se a utilizar conhecimentos linguísticos e gramaticais, gerais e específicos, de gêneros que envolvem o uso tanto da norma quanto de citações padronizadas, como relatórios de experimentos, de observação e pesquisa, entrevistas etc. Seu desenvolvimento envolve o engajamento do aluno em práticas de leitura e/ou produção dos gêneros e textos mencionados; e demanda a aprendizagem prévia dos conhecimentos linguísticos relacionados.",
    resume:
      "Na elaboração do currículo, convém considerar que esta habilidade implica:a) utilizar conhecimentos linguísticos e gramaticais como ferramentas para garantir a coesão e a coerência; b) aprender e utilizar as convenções relativas à escrita de citações. O desenvolvimento da habilidade supõe a frequentação dos estudantes a textos organizados nos gêneros previstos. A atividade de leitura colaborativa de estudo de textos dos gêneros em jogo, assim como a revisão processual e final, possibilitam estudar os recursos e analisar a adequação dos textos produzidos. Orienta-se que os currículos prevejam habilidades que contemplem as referidas atividades.",
  },
  {
    id: "EF05LP27",
    competences: "LP",
    group_years: "05",
    field: "04",
    unit: "LP05",
    object: "Forma de composição dos textos \nCoesão e articuladores",
    skill: "EF05LP27",
    comment:
      "Esta habilidade refere-se a reconhecer, no processo de leitura, recursos linguísticos e discursivos que constituem os gêneros previstos na habilidade (EF04LP23), de modo que seja possível empregá-los adequadamente nos textos a serem produzidos.",
    resume:
      "Na elaboração do currículo, deve-se considerar que esta habilidade explicita os tipos de articuladores referidos pelas habilidades (EF05LP07) e (EF35LP14). Em consequência, elas podem vir articuladas nos currículos locais. Trata-se de utilizar, na produção dos textos, os recursos previstos. Para tanto, é necessário estudá-los, o que pode ser feito por meio das leituras colaborativas de estudo de texto. Na revisão coletiva processual e final, analisa-se a adequação do uso dos recursos, de modo a garantir a coerência e legibilidade do texto. Na progressão, pode-se considerar o nível de autonomia do estudante, que, no currículo, se efetiva pela organização de habilidades em que as tarefas sejam realizadas em colaboração e, progressivamente, com autonomia.",
  },
  {
    id: "EF05LP28",
    competences: "LP",
    group_years: "05",
    field: "05",
    unit: "LP05",
    object: "Forma de composição de textos poéticos visuais",
    skill: "EF05LP28",
    comment:
      "Esta habilidade refere-se a — no processo de leitura e estudo de textos — identificar de que modo o espaço é ocupado por ciberpoemas e minicontos disponibilizados nas mídias digitais infantis, quais recursos multissemióticos os constituem e que efeitos de sentido foram por eles provocados.",
    resume:
      "Na elaboração do currículo, deve-se considerar que o desenvolvimento desta habilidade supõe a leitura e estudo de ciberpoemas e minicontos digitais, para que as suas características fundamentais sejam identificadas: o modo de ocupação do espaço — que pode não ser estático; a presença de recursos de áudio e movimento; o emprego de recursos de interação entre leitor e texto para definição — ou não — dos rumos do poema; etc. A constituição da proficiência do aluno na leitura de tais textos dependerá tanto da análise dos efeitos de sentido produzidos pela utilização dos recursos multissemióticos quanto do estudo da adequação destes para a legibilidade do texto e para a manutenção da sua coerência. As atividades colaborativas são mais adequadas para o desenvolvimento da habilidade, em especial as que são realizadas coletivamente, com a mediação do professor. A progressão horizontal pode dar-se pela complexidade dos textos e pelo nível de autonomia a ser atingido pelo aluno a cada etapa.",
  },
  {
    id: "EF06LP01",
    competences: "LP",
    group_years: "06",
    field: "06",
    unit: "LP07",
    object:
      "Reconstrução do contexto de produção, circulação e recepção de textos\nCaracterização do campo jornalístico e relação entre os gêneros em circulação, mídias e práticas da cultura digital",
    skill: "EF06LP01",
    comment:
      'O desenvolvimento desta habilidade promove uma visão crítica de gêneros jornalísticos como a notícia e a reportagem, considerados mais objetivos. Por meio da análise de escolhas de palavras entre pares de alternativas como "manifestantes"/"baderneiros", "moleque"/"garoto", "parece"/"é", pode-se evidenciar a visão do jornalista sobre o fato relatado. Também cabe analisar imagens e recursos de outras linguagens que integram esses textos.',
    resume:
      "Na elaboração do currículo, para desenvolver esta habilidade, convém garantir formas de acesso a textos jornalísticos de diferentes jornais e revistas, impressos ou digitais. A comparação de notícias que se referem a um mesmo fato ou assunto, relatadas de formas diferentes, pode ser uma primeira forma de realizar essa reflexão sobre parcialidade/imparcialidade em textos dessa esfera. Atividades mais complexas podem se seguir ao longo do ano.Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF69AR15), (EF69AR33), da Arte; e (EF67EF17), da Educação Física, no que se refere à compreensão crítica de diferentes pontos de vista sobre temas controversos e de relevância social.",
  },
  {
    id: "EF06LP02",
    competences: "LP",
    group_years: "06",
    field: "06",
    unit: "LP07",
    object:
      "Reconstrução do contexto de produção, circulação e recepção de textos\nCaracterização do campo jornalístico e relação entre os gêneros em circulação, mídias e práticas da cultura digital",
    skill: "EF06LP02",
    comment:
      "Esta habilidade refere-se ao fato de gêneros, como a crônica, a charge, a reportagem, o editorial, o artigo de opinião, a carta de leitor, entre outros, serem produções que dialogam (mantêm relação de intertextualidade) com o que foi noticiado: o aprofundamento sobre um fato ou assunto, uma opinião ou crítica são feitos em torno de algo que é/foi notícia. Supõe-se habilidades voltadas a reconhecer as características de cada um desses gêneros de textos.",
    resume:
      "Na elaboração do currículo, deve-se levar em consideração que o contato direto e frequente com os portadores (impressos ou digitais) e, em especial, a leitura de matérias correlacionadas, possibilita ao aluno perceber essas relações entre os gêneros. Prever um trabalho articulado e contínuo, envolvendo todas as áreas e a biblioteca, sala de leitura ou equivalente, favorece a inserção na prática de leitura de textos jornalísticos e possibilita ao aluno perceber essas relações, ao ser orientado a, por exemplo, acompanhar a seção de cartas de leitor de uma edição que faz remissão a uma notícia publicada em data anterior.",
  },
  {
    id: "EF06LP03",
    competences: "LP",
    group_years: "06",
    field: "01",
    unit: "LP08",
    object: "Léxico/morfologia",
    skill: "EF06LP03",
    comment:
      'Esta é uma habilidade bastante relevante para a compreensão das relações semânticas que podem se estabelecer entre as palavras da língua. Seu foco está no reconhecimento do sentido singular que cada palavra de uma série sinonímica pode aportar (como nas palavras "país", "pátria", "nação", "terra natal" etc.), em relação às demais da mesma série. Trata-se, portanto, de compreender a sinonímia como uma relação de proximidade de sentido, e não de equivalência.',
    resume:
      "Na elaboração do currículo, recomenda-se que esse estudo venha sempre associado à análise comparativa e à reflexão, com base em inventários que apresentem palavras em textos, para que cada uma delas possa ser compreendida na acepção adequada. Práticas de leitura e/ou produção de textos são, portanto, essenciais para a contextualização desse ensino. No que se refere à progressão, pode-se pensar: (a) no grau de complexidade lexical a ser contemplado (palavras mais fáceis/mais difíceis); (b) no grau de complexidade dos gêneros e textos envolvidos; (c) no nível de autonomia requerido do aluno para realizar a tarefa.",
  },
  {
    id: "EF06LP04",
    competences: "LP",
    group_years: "06",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF06LP04",
    comment:
      "Esta habilidade pressupõe a construção prévia ou conexa de conhecimentos morfossintáticos relacionados a três classes de palavras (substantivos; adjetivos; verbos) e a modos verbais e categorias gramaticais a elas relacionadas. Convém lembrar, ainda, que as concordâncias verbal e nominal, assim como a manutenção e a correlação dos tempos verbais implicadas nesta habilidade colaboram para a coesão e a coerência. A habilidade é importante sobretudo na escrita, para efetivar intenções de significação. Demanda a análise dos tópicos mencionados em textos de todos os campos de atuação, pressupondo práticas de leitura e/ou produção nas quais a (re)construção dos sentidos do texto esteja relacionada aos efeitos coesivos produzidos pelas funções e flexões de substantivos, adjetivos e verbos.",
    resume:
      'Na elaboração do currículo, convém considerar que o desenvolvimento desta habilidade demanda propostas em que o aluno possa: a) reconhecer o funcionamento das flexões e sua relevância para as concordâncias verbal e nominal;  b) entender a função dos tempos e modos verbais na organização dos textos; c) manter e articulá-los para não perder o "fio da meada"; d) reconhecer os efeitos de sentido que o emprego de um ou outro tempo/modo verbal pode provocar; e) conhecer as funções de cada classe de palavra na construção de diferentes tipos de texto, na qualificação das ações, na organização temporal dos textos de diferentes gêneros em diferentes condições de produção e circulação. A progressão pode associar-se aos gêneros previstos e às três classes de palavras envolvidas na habilidade. Um terceiro critério é o nível de autonomia que se pretende levar o aluno a atingir em cada proposta.',
  },
  {
    id: "EF06LP05",
    competences: "LP",
    group_years: "06",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF06LP05",
    comment:
      "A habilidade refere-se ao estudo dos modos verbais — indicativo, subjuntivo e imperativo — de forma que o aluno consiga identificar os sentidos essenciais de cada um. Abrange a análise do emprego deles em textos de todos os campos de atuação, pressupondo práticas de leitura e/ou produção nas quais a (re)construção dos sentidos esteja relacionada aos efeitos produzidos pelos modos verbais.",
    resume:
      "Na elaboração do currículo, o desenvolvimento da habilidade pode organizar-se com base em dois pontos articulados: 1) resolver, na produção ou na leitura, algum problema de compreensão/redação, considerando o sentido provocado pelo uso inadequado ou incoerente do modo de algum verbo; 2) sistematizar o conhecimento, depois de devidamente compreendida a etapa anterior (1). Em ambos os casos, sugere-se que as atividades sejam organizadas a partir de estudo comparativo (realizado a partir de inventários) de verbos empregados em textos lidos, buscando a especificidade do sentido de cada modo, ou seja, o traço de significado que os caracteriza como pertencentes ao mesmo modo, por meio da comparação para estabelecer diferenças e semelhanças.  Do ponto de vista da progressão horizontal, sugere-se, inicialmente, um trabalho colaborativo (coletivo e em grupos/duplas), que progrida para o autônomo. Um segundo critério é a complexidade dos gêneros e textos previstos para o estudo em cada momento.",
  },
  {
    id: "EF06LP06",
    competences: "LP",
    group_years: "06",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF06LP06",
    comment:
      "Esta habilidade tem como foco as concordâncias nominal e verbal, na produção de textos orais ou escritos de qualquer campo de atuação ou gênero em que a norma-padrão é requerida. Requer discussões sobre variação linguística e práticas orais, de leitura e/ou produção de textos, especialmente em situações públicas e formais. Pressupõe, ainda, o domínio e/ou estudo conexo das regras dos dois tipos de concordância mencionados, de classes de palavras (nome e verbo) e de categorias gramaticais a ela relacionadas. (Estreitamente relacionada à EF69LP56, EF06LP11, EF07LP10 e EF08LP04).",
    resume:
      "Na elaboração do currículo, para um exercício reflexivo voltado para o uso da língua, convém que o estudo dos tópicos gramaticais referidos na descrição desta habilidade seja realizado em contextos de uso, e não em atividades isoladas. Por essa razão, sugere-se que o estudo das concordâncias nominal e verbal venha sempre: (a) programado para situações de comunicação em que a norma-padrão é requerida; (b) associado ao planejamento da fala em situações formais, à produção e à revisão de textos ou à análise, com vistas a compreender os efeitos de sentido produzidos por este ou aquele uso. Recomenda-se, ainda, articular esta habilidade com as de análise de gravações de palestras, debates etc., no caso das produções orais. A progressão horizontal pode adotar como critério os tópicos a serem abordados a cada momento (concordância nominal/concordância verbal), o grau de complexidade dos gêneros e textos previstos e o grau de autonomia que se pretende levar o aluno a atingir em cada ano e/ou etapa.",
  },
  {
    id: "EF06LP07",
    competences: "LP",
    group_years: "06",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF06LP07",
    comment:
      "O foco desta habilidade (diretamente relacionada à apreensão da organização sintática do texto) está na identificação e classificação de períodos compostos por  coordenação assindética (sem conectivos). Requer a observação da organização sintática do texto e reflexões a respeito, identificando períodos compostos por coordenação assindética, apreendendo o princípio de sua organização interna e percebendo seu papel na (re)construção dos sentidos do texto. Envolve, ainda, um conhecimento prévio de classes de palavras e funções e categorias gramaticais associadas a cada uma delas.",
    resume:
      "Na elaboração do currículo, para reflexão e análise linguística/semiótica, é necessário que o estudo dos tópicos gramaticais envolvidos seja realizado em contextos de uso, e não em atividades isoladas. Por essa razão, sugere-se que esses conteúdos sejam propostos sempre vinculados à leitura, à produção e à revisão, com vistas à compreensão de seu papel na (re)construção do texto e na produção de efeitos de sentido determinados. Recomenda-se: (a) que o foco do trabalho seja a resolução de problemas de compreensão e manutenção da legibilidade do texto, considerando-se as intenções de significação; (b) que a compreensão de cada aspecto anteceda a sistematização; (c) que a metalinguagem seja empregada de modo que o aluno compreenda o que se diz. Ao longo do ano, a progressão pode apoiar-se na complexidade dos gêneros e textos programados para o desenvolvimento da habilidade.",
  },
  {
    id: "EF06LP08",
    competences: "LP",
    group_years: "06",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF06LP08",
    comment:
      "O foco desta habilidade está na percepção da oração e do período como unidades básicas da organização sintática do texto, assim como no reconhecimento da função do verbo como núcleo oracional. Requer a observação da organização sintática do texto e reflexões a respeito, identificando orações e períodos e percebendo seu papel na (re)construção dos sentidos do texto. Envolve, ainda, um conhecimento prévio de classes de palavras e funções e categorias gramaticais associadas a cada uma delas.",
    resume:
      "Na elaboração do currículo, para promover reflexão e análise linguística/semiótica, é necessário que o estudo dos tópicos gramaticais envolvidos seja realizado em contextos de uso, e não em atividades isoladas. Por essa razão, sugere-se que esses conteúdos sejam propostos sempre vinculados à leitura, à produção e à revisão, com vistas à compreensão de seu papel na (re)construção do texto e na produção de efeitos de sentido determinados. Recomenda-se: (a) que o foco seja a resolução de problemas de compreensão e manutenção da legibilidade do texto, considerando-se as intenções de significação; (b) que a compreensão de cada aspecto anteceda a sistematização; (c) que a metalinguagem seja empregada de modo que o aluno compreenda o que se diz. (Convém que o desenvolvimento desta habilidade anteceda, no currículo, o programado para EF06LP09 e para todas as demais habilidades que envolvam a sintaxe do período). Ao longo do ano, a progressão pode apoiar-se seja no foco da identificação (oração/período), seja na complexidade dos gêneros e textos programados para o desenvolvimento da habilidade.",
  },
  {
    id: "EF06LP09",
    competences: "LP",
    group_years: "06",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF06LP09",
    comment:
      "O foco desta habilidade está na percepção dos períodos simples e dos períodos compostos como unidades da organização sintática do texto. Requer observação da organização do texto e reflexões a respeito, identificando períodos simples e compostos e percebendo seu papel na (re)construção dos sentidos do texto. Envolve, ainda, um conhecimento prévio de classes de palavras e funções e categorias gramaticais associadas a cada uma delas.",
    resume:
      "Na elaboração do currículo, para reflexão e análise linguística/semiótica, é necessário que o estudo dos tópicos gramaticais envolvidos seja realizado em contextos de uso, e não em atividades isoladas. Por essa razão, sugere-se que esses conteúdos sejam propostos sempre vinculados à leitura, à produção e à revisão, com vistas à compreensão de seu papel na (re)construção do texto e na produção de efeitos de sentido determinados. Recomenda-se: (a) que o foco seja a resolução de problemas de compreensão e manutenção da legibilidade do texto, considerando-se as intenções de significação; (b) que a compreensão de cada aspecto anteceda a sistematização; (c) que a metalinguagem seja empregada de modo que o aluno compreenda o que se diz. (Convém que o desenvolvimento desta habilidade, nos currículos, venha programado para depois do trabalho previsto para EF06LP08 e para antes de qualquer habilidade de análise de períodos). Ao longo do ano, a progressão pode apoiar-se seja no foco da identificação dos tipos de períodos (simples/compostos), seja na complexidade dos gêneros e textos envolvidos nas práticas de leitura/produção programadas para o desenvolvimento da habilidade.",
  },
  {
    id: "EF06LP10",
    competences: "LP",
    group_years: "06",
    field: "01",
    unit: "LP08",
    object: "Sintaxe",
    skill: "EF06LP10",
    comment:
      "Considerando a oração como uma unidade básica da organização sintática do texto, esta habilidade se refere à identificação dos constituintes imediatos (sujeito/predicado) que a estruturam. Trata-se, portanto, de uma habilidade fundamental para o desenvolvimento de todas as demais habilidades de análise com foco na sintaxe da oração e do período. Requer a observação da organização sintática do texto e reflexões a respeito do papel dela na construção do texto e na produção de efeitos de sentido. Envolve, ainda, um trabalho prévio com classes de palavras e com as funções e categorias gramaticais associadas a cada uma delas.",
    resume:
      'Na elaboração do currículo, recomenda-se que o desenvolvimento desta habilidade não se constitua como um fim em si mesmo, mas que contribua para uma compreensão global, por parte do aluno, do papel da sintaxe no funcionamento da língua. Isso significa propor atividades que associem essas análises à leitura e à produção de textos, com foco nos efeitos de sentido que as estruturas sintáticas estudadas podem produzir.Atividades lúdicas, em que os alunos possam explorar livremente diferentes alternativas de estruturação de um "mesmo" enunciado, identificando os efeitos de sentido assim produzidos, podem contribuir significativamente para a percepção e compreensão da natureza e do funcionamento dos mecanismos sintáticos em jogo. A progressão horizontal pode basear-se no grau de complexidade dos gêneros e textos programados para estudo.',
  },
  {
    id: "EF06LP11",
    competences: "LP",
    group_years: "06",
    field: "01",
    unit: "LP08",
    object: "Elementos notacionais da escrita/morfossintaxe",
    skill: "EF06LP11",
    comment:
      "Esta habilidade se refere à mobilização de conhecimentos linguísticos e gramaticais específicos na produção de textos de qualquer campo de atuação ou gênero, como utilização adequada dos tempos verbais, concordância, ortografia, pontuação etc. Pressupõe discussões sobre variação linguística e práticas de leitura e/ou produção de textos, especialmente em situações públicas e formais. Requer, ainda, domínio e/ou estudo conexo de tópicos de análise linguística como os mencionados. (Estreitamente relacionada à EF69LP56).",
    resume:
      'Na elaboração do currículo, convém que o desenvolvimento da habilidade venha sempre associado a práticas de leitura e/ou produção de textos dos mais diversos gêneros e campos de atuação. Recomenda-se, ainda, que as atividades propostas explicitem os conhecimentos a serem construídos nesse período e evitem a perspectiva do "erro gramatical", em favor de uma abordagem baseada na adequação do uso. A progressão vertical e horizontal pode adotar como critério os tópicos a serem abordados a cada momento, o grau de complexidade dos gêneros e textos previstos e o grau de autonomia do aluno pressuposto na execução da tarefa.',
  },
  {
    id: "EF06LP12",
    competences: "LP",
    group_years: "06",
    field: "01",
    unit: "LP08",
    object: "Semântica Coesão",
    skill: "EF06LP12",
    comment:
      "Trata-se de uma habilidade essencial para o desenvolvimento da competência em escrita, mas também se aplica à análise da coesão textual em atividades de leitura. Seu foco é o emprego de recursos de coesão (referencial) e semânticos na produção, escrita ou oral. Envolve o uso de recursos da língua que: (1) evitam a repetição indesejada de palavras; (2) ajudam o leitor a resgatar, durante a leitura, o objeto/fato/assunto de que o texto trata; (3) ajudam a compreender a ordem de acontecimento das ações; (4) ajudam a identificar as diferentes vozes do texto e a produzir efeitos de sentido, como o da impessoalidade. Ela demanda a análise da situação de comunicação, das características do gênero e das intenções e/ou objetivos a serem perseguidos.",
    resume:
      "Na elaboração do currículo, convém que o desenvolvimento da habilidade seja programado em associação com práticas de oralidade, leitura ou escrita de textos dos gêneros previstos para estudo. Será nessas condições que o aluno poderá refletir sobre a adequação do(s) recurso(s) que pretenda empregar.  Em caso de produções escritas, recomenda-se que os currículos prevejam atividades de produção e revisão em que o foco seja o uso desses elementos coesivos na construção do texto de um determinado gênero. Em caso de textos orais, podem ser analisadas, coletivamente, apresentações previamente gravadas. A progressão, vertical ou horizontal, pode apoiar-se no tipo de recurso coesivo a ser abordado, no grau de complexidade dos gêneros ou textos a serem considerados e no nível de autonomia que se pretende levar o aluno a conquistar.",
  },
  {
    id: "EF67LP01",
    competences: "LP",
    group_years: "67",
    field: "06",
    unit: "LP07",
    object:
      "Reconstrução do contexto de produção, circulação e recepção de textos\nCaracterização do campo jornalístico e relação entre os gêneros em circulação, mídias e práticas da cultura digital",
    skill: "EF67LP01",
    comment:
      "A habilidade consiste em aprender que, no ambiente virtual, um texto pode apresentar, seja no corpo do texto, seja na página em que figura,  links que levam a outros conteúdos. Uma notícia, por exemplo, pode remeter a outras notícias e a reportagens anteriores, inserindo-se em uma série de textos jornalísticos sobre um mesmo fato; ou um link pode levar o leitor a outros textos de destaque do dia. Assim, matérias noticiosas se inserem em diferentes redes de relações. A análise sugerida pode ser associada a pequenos exercícios voltados à produção de hipertextos, em que será necessário que o aluno defina, em um texto produzido por ele, palavras-chave que levarão a outros links, observando a relevância e a relação dos textos que decidir linkar ao seu, a fim de vislumbrar essa possibilidade de escrita, como prevê a habilidade.",
    resume:
      "Na elaboração do currículo, é recomendável que a análise da escrita hipertextual seja acompanhada de um trabalho com procedimentos e estratégias próprios da leitura em ambiente digital, visando a uma formação de um leitor capaz de não perder o foco da leitura, quando definido previamente, em meio a tantas possibilidades. Por exemplo: tomar decisão sobre que link acessar ou não, considerando o objetivo de leitura. É importante estudar como viabilizar o acesso dos alunos à internet: por meio de parcerias, oferecer rede wi-fi para conexão de aparelhos móveis pessoais ou aparelhos móveis da escola conectados à internet ou, ainda, buscar espaços públicos ou privados que ofereçam rede wi-fi gratuita para serem espaços eleitos para aulas fora do ambiente escolar.",
  },
  {
    id: "EF67LP02",
    competences: "LP",
    group_years: "67",
    field: "06",
    unit: "LP07",
    object: "Apreciação e réplica",
    skill: "EF67LP02",
    comment:
      "Esta habilidade favorece uma participação mais qualificada do adolescente nos espaços jornalísticos/midiáticos citados. Supõe investir em habilidades voltadas à análise de textos de gêneros próprios desse campo — dos mais informativos aos mais argumentativos —, na curadoria de textos fidedignos. Pode ser articulada com a produção de textos orais e escritos, visto que faz referência ao posicionamento do leitor frente ao que lê/escuta.",
    resume:
      "Na elaboração do currículo, ao propor esta habilidade, sugerindo que os leitores publiquem notícias e outros gêneros de interesse do público que frequenta esses espaços, pode-se propor atividades que conduzam à tomada de decisão quanto a não compartilhar textos duvidosos e/ou denunciar o tratamento ético e desrespeitoso que determinado veículo ou jornalista/autor tenha dado ao tema/assunto/fato.",
  },
  {
    id: "EF67LP03",
    competences: "LP",
    group_years: "67",
    field: "06",
    unit: "LP07",
    object: "Relação entre textos",
    skill: "EF67LP03",
    comment:
      "Trata-se de uma habilidade complexa que consiste em:1. analisar os efeitos de sentido produzidos pelos recursos linguísticos usados;2. apurar informações, desenvolvendo procedimentos de curadoria;3. e posicionar-se em relação aos enfoques dados aos fatos/assuntos veiculados, produzindo textos escritos ou orais.Pode ser articulada ao trabalho com a habilidade que sugere a comparação das propostas editoriais dos jornais (EF07LP01).",
    resume:
      "Para viabilizar as práticas de leitura necessárias ao desenvolvimento desta habilidade convém que os currículos locais prevejam formas de acesso a textos jornalísticos de diferentes jornais e revistas, impressos ou digitais. A comparação de notícias que se referem a um mesmo fato ou assunto, relatado de formas diferentes, pode ser uma primeira forma de realizar essa reflexão sobre parcialidade/imparcialidade em textos dessa esfera. A progressão, tanto vertical quanto horizontal, pode apoiar-se: a) no tipo de veículo ou mídia abordado; b) nos procedimentos de curadoria a serem explorados; c) no grau de complexidade dos gêneros e textos previstos; d) no nível de autonomia que se pretende levar o aluno a atingir em cada etapa.",
  },
  {
    id: "EF67LP04",
    competences: "LP",
    group_years: "67",
    field: "06",
    unit: "LP07",
    object: "Estratégia de leitura Distinção de fato e opinião",
    skill: "EF67LP04",
    comment:
      'Diferenciar fato de opinião supõe habilidades de análise de marcas de subjetividade que o autor escolhe deixar no texto, como "pistas" que possibilitam identificar o que é apreciação e o que é fato. Por exemplo, o uso de adjetivos (inadmissível, louvável), advérbios (obviamente) e modos e tempos verbais, verbos modais (poder/dever etc.) podem ser "pistas" do exercício de modalização do autor.',
    resume:
      "Na elaboração do currículo, prever habilidades que associem este trabalho à discussão de temas e fatos do universo de interesse dos alunos pode mobilizá-los para o exercício implicado na habilidade. Antes de lidarem com textos de circulação social, por exemplo, pode-se apresentar um fato e promover uma discussão em que os alunos se posicionem sobre ele e, em seguida, refletir sobre em que os textos que construíram para opinar são diferentes do fato em si.",
  },
  {
    id: "EF67LP05",
    competences: "LP",
    group_years: "67",
    field: "06",
    unit: "LP07",
    object:
      "Estratégia de leitura: identificação de teses e argumentos\nApreciação e réplica",
    skill: "EF67LP05",
    comment:
      "Esta habilidade diz respeito tanto às situações de leitura quanto às de produção de textos, na medida em que identificar e avaliar teses, opiniões e posicionamentos sobre o que se lê/ouve são essenciais ao posicionamento crítico que se expressa em textos orais e escritos sobre o que foi lido/escutado. Nos 6º e 7º anos, há a expectativa de que os alunos possam reconhecer, analisar e se posicionar em relação aos textos argumentativos de terceiros.",
    resume:
      "Na elaboração do currículo, é possível prever uma progressão tanto na seleção dos gêneros argumentativos propostos como na complexidade dos textos dos variados gêneros. Independentemente do tipo de progressão que se decida propor, é importante que os alunos tenham acesso a exemplares dos gêneros que tratem de questões controversas ou de objetos culturais (no caso da resenha crítica e do comentário, especialmente) com os quais tenham familiaridade e possam mobilizar conhecimentos prévios para apoiá-los, tanto na avaliação de posições e argumentos nos textos de terceiros quanto na manifestação de discordância, visto que não é possível avaliar nem posicionar-se a respeito do que não se conhece.",
  },
  {
    id: "EF67LP06",
    competences: "LP",
    group_years: "67",
    field: "06",
    unit: "LP07",
    object: "Efeitos de sentido",
    skill: "EF67LP06",
    comment:
      "Esta habilidade implica em reconhecer os efeitos de sentido provocados por recursos léxicos empregados em textos do campo jornalístico/midiático. Para isso, deve-se analisar a coerência desses efeitos tanto em relação às intenções presumidas do texto quanto à finalidade do gênero e características dos espaços de circulação do texto.",
    resume:
      'Na elaboração do currículo, sugere-se que o desenvolvimento da habilidade aconteça, sobretudo, na leitura e no estudo comparativo de textos, avaliando-se os efeitos de sentido decorrentes das diferentes escolhas. Por exemplo, se tomarmos duas manchetes como "Edifício é invadido na periferia de São Paulo" e "População ocupa prédio abandonado", é possível analisar os valores ideológicos que orientaram as escolhas lexicais e sintáticas em cada uma delas e, dessa maneira, compreender a posição implícita do veículo no qual cada uma foi publicada. Esse exercício possibilita a realização de uma leitura crítica. A progressão da habilidade pode se dar pela complexidade dos textos.',
  },
  {
    id: "EF67LP07",
    competences: "LP",
    group_years: "67",
    field: "06",
    unit: "LP07",
    object: "Efeitos de sentido",
    skill: "EF67LP07",
    comment:
      "Esta habilidade envolve a observação e o reconhecimento do modo como os recursos linguísticos ou de outras linguagens são usados para construir os discursos persuasivos em textos argumentativos.",
    resume:
      "Na elaboração do currículo, é importante considerar que identificar o uso de recursos persuasivos implica a capacidade de distinguir os traços característicos do discurso persuasivo. Por exemplo, reconhecer a força que um argumento de autoridade usado para sustentar uma opinião pode trazer ao texto. A progressão do desenvolvimento desta habilidade pode ser marcada pelo grau de complexidade da seleção dos textos argumentativos e pela variedade dos gêneros propostos, dentre eles, comentários, crônicas, artigos de opinião, charges, propagandas etc.",
  },
  {
    id: "EF67LP08",
    competences: "LP",
    group_years: "67",
    field: "06",
    unit: "LP07",
    object: "Efeitos de sentido Exploração da multissemiose",
    skill: "EF67LP08",
    comment:
      'Esta habilidade refere-se à abordagem dos gêneros jornalísticos e publicitários citados, considerando o diálogo entre as linguagens que compõem cada um desses gêneros de textos. Estudar a relação entre o texto verbal que compõe uma notícia e a(s) foto(s) selecionada(s) para compor essa notícia pode levar à percepção das escolhas feitas nessa composição e dos efeitos de sentido que isso produz: por exemplo, se a notícia se refere a um acontecimento envolvendo uma personalidade e é acompanhada de uma foto dessa personalidade, o modo como a imagem é "captada" pode fazer com que ela pareça  vítima, dissimulada ou culpada de algo — imagem que pode reiterar ou se contrapor ao que é noticiado.',
    resume:
      "Na elaboração do currículo, como a descrição da habilidade faz referência a diferentes gêneros, dentre eles, alguns nos quais predomina a imagem em detrimento do texto verbal, como em fotorreportagens, foto-denúncias, memes e muitos anúncios publicitários, será necessário propor um estudo mais aprofundado dos recursos próprios da fotografia, como os citados. Uma articulação com Arte, por exemplo, pode promover um desenvolvimento produtivo para ambos. Também será possível definir uma progressão na proposição dos gêneros a serem trabalhados em cada ano. Por exemplo, pode-se começar abordando a fotografia em notícias, reportagens e anúncios publicitários para, em seguida, propor abordar os gêneros em que a imagem predomina e é potencialmente o que produz significados.",
  },
  {
    id: "EF67LP09",
    competences: "LP",
    group_years: "67",
    field: "06",
    unit: "LP09",
    object: "Estratégias de produção: planejamento de textos informativos",
    skill: "EF67LP09",
    comment:
      "Esta habilidade trata do processo implicado na prática de produzir notícias. Refere-se a procedimentos e ações necessários para planejar um texto, considerando as condições de produção e circulação, decisões quanto ao fato/assunto e seu recorte e os objetivos, além do uso de procedimentos e estratégias de curadoria de informação.",
    resume:
      "Na elaboração do currículo, sugere-se considerar que a habilidade (conexa à EF67LP10) se  articule às de revisão de textos e às de análise linguística e semiótica, sendo estas últimas fundamentais para avaliar a adequação dos recursos que se pretende utilizar em relação aos efeitos de sentido intencionados, o que constitui uma marca do gênero notícia. Uma progressão suposta, que pode ser explorada, é em relação às mídias selecionadas: produzir uma notícia impressa e uma notícia para rádio ou TV implica domínio de recursos de linguagens diferenciados e mais ou menos complexos. Planejar para uma ou outra mídia, em um ou outro gênero, também implica o uso de gêneros secundários, ou seja, aqueles mais elaborados, diferenciados: planejar, por exemplo, uma notícia para TV envolve a produção de um roteiro específico, que sinalize as entradas e articulações entre texto verbal e não verbal (efeitos sonoros, perspectiva da câmera, cortes de imagens etc.). Além disso, considerando-se que a habilidade envolve dois anos do ciclo, pode-se pensar em propor habilidades que orientem o planejamento em colaboração (alunos e professor), progredindo para a autonomia no ato de planejar a notícia.",
  },
  {
    id: "EF67LP10",
    competences: "LP",
    group_years: "67",
    field: "06",
    unit: "LP09",
    object:
      "Textualização, tendo em vista suas condições de produção, as características do gênero em questão, o estabelecimento de coesão,\nadequação à norma-padrão e o uso adequado de ferramentas de edição",
    skill: "EF67LP10",
    comment:
      "A habilidade trata do processo implicado na prática de produzir notícias e está articulada à (EF69LP06), no que se refere à necessidade de planejar o texto a ser produzido. Para a elaboração do texto, conforme orienta esta habilidade, é preciso considerar o modo como se organiza a notícia e os recursos das diferentes linguagens que podem ser usadas (a verbal, a imagética – imagens estáticas e em movimento presentes em fotos, vídeos, infográficos etc. que compõem o gênero), tendo em vista a textualização (construção do texto).",
    resume:
      "Na elaboração do currículo, sugere-se considerar que a habilidade (conexa à EF67LP09) se  articula, ainda, às de revisão de textos e às de análise linguística e semiótica, sendo essas últimas fundamentais para avaliar a adequação dos recursos usados em relação aos efeitos de sentidos intencionados, o que constitui uma marca do gênero notícia. Uma progressão suposta, que pode ser explorada na organização dos currículos, é  em relação às mídias selecionadas: produzir uma notícia impressa e uma notícia para rádio ou TV implica domínio de recursos de linguagens diferenciados e mais ou menos complexos. A produção para uma ou outra mídia, em um ou outro gênero, também implica o uso de gêneros secundários, ou seja, aqueles mais elaborados, diferenciados: produzir uma notícia para TV envolve a criação de um roteiro específico, que sinalize as entradas e articulações entre texto verbal e não verbal (efeitos sonoros, perspectiva da câmera, cortes de imagens etc.). Além disso, considerando-se que a habilidade envolve dois anos do ciclo, pode-se pensar em propor habilidades que orientem o planejamento em colaboração (alunos e professor), progredindo para a autonomia no ato de produzir a noticia.",
  },
  {
    id: "EF67LP11",
    competences: "LP",
    group_years: "67",
    field: "06",
    unit: "LP09",
    object:
      "Estratégias de produção: planejamento de textos argumentativos e apreciativos",
    skill: "EF67LP11",
    comment:
      "A habilidade contempla uma das operações do processo de produção de textos – o planejamento, que deve ser realizado considerando o contexto de produção (interlocutores, intencionalidades etc.). Planejar, nesses gêneros, envolve: seleção de fato/assunto/objeto cultural a ser tratado, curadoria de informação, elaboração de esquema do texto a ser produzido parte a parte. Diferentemente dos textos noticiosos, aqui, trata-se de planejar textos que exigem posicionamento crítico; a preparação de argumentos; a escolha do movimento argumentativo e outras habilidades próprias de gêneros argumentativos. Vale enfatizar a importância de se considerar como objeto de apreciação produtos representativos das culturas juvenis. Recomenda-se que o tratamento ético em relação à informação e o posicionamento crítico em relação a ela devem ser foco de discussão nesse caso.",
    resume:
      'Na elaboração do currículo, deve-se considerar que a seleção de gêneros de natureza opinativa/argumentativa para esses anos se caracteriza por gêneros constituídos por múltiplas linguagens e mais voltados às práticas do universo cultural juvenil e de entretenimento. Nesses gêneros, a elaboração dos argumentos é orientada por apreciações estéticas sobre os produtos culturais, sempre pautadas por valores éticos e envolvendo habilidades de análise dos recursos linguísticos e semióticos próprios desses gêneros. É possível uma progressão horizontal (vários gêneros "visitados") e/ou vertical (alguns gêneros  que se repetirão) na escolha dos gêneros para os dois anos, orientada por critérios locais. Recomenda-se investir nos gêneros multimodais (vlogs, e-zines, por exemplo). Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF67EF01) e (EF67EF02), da Educação Física, no que se refere a experimentação, observação, produção e crítica especificamente no caso dos jogos eletrônicos.',
  },
  {
    id: "EF67LP12",
    competences: "LP",
    group_years: "67",
    field: "06",
    unit: "LP09",
    object: "Textualização de textos argumentativos e apreciativos",
    skill: "EF67LP12",
    comment:
      "A habilidade envolve os procedimentos de produção de textos – definir contexto de produção, planejar, produzir e revisar –, com a diferença de que se tratam de gêneros argumentativos do campo jornalístico-midiático, que exigem posicionamento crítico, a preparação de argumentos, a escolha do movimento argumentativo e outras habilidades próprias de gêneros argumentativos. Vale enfatizar a importância de se considerar como objeto de apreciação produtos representativos das culturas juvenis. Recomenda-se que o tratamento ético em relação à informação e o posicionamento crítico em relação a ela devem ser foco de discussão nesse caso.",
    resume:
      'Na elaboração do currículo, é interessante considerar que a seleção de gêneros de natureza opinativa/argumentativa para esses anos se caracteriza por gêneros constituídos por múltiplas linguagens e mais voltados às práticas do universo cultural juvenil e de entretenimento. Nesses gêneros, a elaboração dos argumentos é orientada por apreciações estéticas sobre os produtos culturais, sempre pautadas por valores éticos  e envolvendo habilidades de análise dos recursos linguísticos e semióticos próprios desses gêneros. É possível buscar uma progressão horizontal (vários gêneros "visitados") e/ou vertical (alguns gêneros que se repetirão) na escolha dos gêneros para os dois anos, orientada por critérios locais. Recomenda-se investir nos gêneros multimodais (vlogs, e-zines, por exemplo). Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF67EF01) e (EF67EF02), da Educação Física, no que se refere a experimentação, observação, produção e crítica especificamente no caso dos jogos eletrônicos.',
  },
  {
    id: "EF67LP13",
    competences: "LP",
    group_years: "67",
    field: "06",
    unit: "LP09",
    object: "Produção e edição de textos publicitários",
    skill: "EF67LP13",
    comment:
      "Esta habilidade refere-se à produção de textos como um processo que envolve etapas diferentes e mobiliza variadas habilidades, como (1) as relativas à curadoria de informação e à produção de roteiros e enquetes para pesquisa, considerando o contexto de produção definido, e a esquematização (o esboço) do texto, parte a parte. ; (2) as habilidades voltadas à aplicação dos recursos linguísticos e semióticos, na elaboração e revisão dos gêneros publicitários.",
    resume:
      "Na elaboração do currículo, recomenda-se discutir a relação entre as esferas publicitária e jornalística, conforme sinalizado nas orientações relativas à leitura. Sugere-se uma progressão ao longo dos 4 anos finais, considerando os gêneros arrolados e a maior ou menor familiaridade dos/as alunos/as com um ou outro. Além do trabalho articulado com profissionais que usam aplicativos de edição de textos, da disponibilização desses aplicativos para os/as alunos/as e do investimento no trabalho colaborativo, recomenda-se articular as propostas com a exploração dos documentos reguladores (campo da vida pública) da propaganda e publicidade, com vistas ao desenvolvimento de uma postura ética em relação à esfera publicitária. Do ponto de vista didático, é indicado que os currículos contemplem um estudo das principais características dos gêneros selecionados.",
  },
  {
    id: "EF67LP14",
    competences: "LP",
    group_years: "67",
    field: "06",
    unit: "LP04",
    object: "Planejamento e produção de entrevistas orais",
    skill: "EF67LP14",
    comment:
      'Esta habilidade trata do processo implicado na produção de entrevistas: planejar (seleção de fato/assunto, escolha do gênero, curadoria de informação etc.), produzir (elaboração do texto, recorrendo aos recursos das diferentes linguagens e aos aplicativos necessários, em caso de textos em áudio e vídeo) e, implicitamente, revisar (avaliar a adequação do texto, considerando o contexto em que circulará, e realizar ajustes necessários, com ou sem aplicativos). A habilidade também refere-se a entrevistas que são coletadas em áudio e depois transcritas e retextualizadas como entrevista escrita, o que supõe, no processo de retextualização ("transformação" de um texto oral em um texto escrito), uma revisão voltada para eliminação de elementos próprios das situações de fala, como a repetição de certas palavras (como né, aí), a oscilação e reformulação etc.',
    resume:
      'Na elaboração do currículo, é possível propor uma progressão que contemple, em um ano, o trabalho com a entrevista feita oralmente para ser transcrita e retextualizada e, em outro, o trabalho com entrevistas que deverão ser finalizadas em áudio e em vídeo, envolvendo o uso de aplicativos de captação e edição de imagem e som. Também podem ser previstas entrevistas que aconteçam ao vivo — o que supõe um preparo que envolve ensaios e simulações que ajudem os alunos a avaliarem a qualidade das questões propostas no roteiro — se elas possibilitam ou não ao entrevistador ir além de uma resposta "sim" ou "não". Há, aqui, oportunidade de trabalho interdisciplinar com a habilidade (EF07LI02), da Língua Inglesa, no que se refere à condução de entrevistas.',
  },
  {
    id: "EF67LP15",
    competences: "LP",
    group_years: "67",
    field: "03",
    unit: "LP07",
    object:
      "Estratégias e procedimentos de leitura em textos legais e normativos",
    skill: "EF67LP15",
    comment:
      "A habilidade consiste em distinguir o que é proibição imposta do que são direitos garantidos e compreender os contextos de aplicação da norma ou direito em textos jurídicos, normativos e reguladores elaborados para diferentes âmbitos da vida em sociedade. A esta habilidade, articulam-se as de análise das características dos gêneros da natureza indicada, que passam, por exemplo, pelo reconhecimento de como se organizam (os títulos, capítulos, artigos, parágrafos, incisos etc.), dos recursos linguísticos usados para identificar o que é proibição e o que é direito (que implica observar a linguagem jurídica e o vocabulário recorrente — por exemplo, uso de palavras como garantia, direito, obrigação ou o uso predominante do tempo presente do indicativo e, em menor frequência, do futuro do indicativo, e os efeitos de sentido provocados por esses usos).",
    resume:
      "Na elaboração do currículo, é possível estabelecer progressão entre os anos previstos com base na seleção dos textos que serão propostos para leitura. Por exemplo, esta habilidade pode ser articulada ao trabalho com os gêneros da esfera publicitária, de modo que a seleção das regulamentações do mercado publicitário e do Código de Defesa do Consumidor seja destinada para os anos correspondentes. Do mesmo modo, as habilidades relativas ao trabalho com carta de reclamação e de solicitação podem ser integradas à abordagem desta habilidade. Vale a pena destacar a relevância de textos como o ECA e a Constituição, que podem ser previstos para exploração de recortes diferentes nos dois anos.",
  },
  {
    id: "EF67LP16",
    competences: "LP",
    group_years: "67",
    field: "03",
    unit: "LP07",
    object:
      "Contexto de produção, circulação e recepção de textos e práticas relacionadas à defesa de direitos e à participação social",
    skill: "EF67LP16",
    comment:
      "Esta habilidade consiste em conhecer as características dos espaços de circulação de gêneros que impliquem a solicitação e/ou reclamação de direitos, a participação na vida da comunidade, do estado ou país — e textos que possibilitem essas ações —, o que permite aos alunos que organizem o seu discurso (oral ou escrito) utilizando recursos adequados aos interlocutores, com vistas a atingir seus objetivos. É habilidade fundamental para o exercício da cidadania.",
    resume:
      "Na elaboração do currículo, é recomendável que se criem condições para o conhecimento dos espaços referidos, assim como dos textos dos gêneros que neles circulam. Nesse estudo, é de grande relevância o levantamento das características e procedimentos convencionados para a apresentação das solicitações e/ou reclamações. A progressão pode se dar tanto pelo modo de tratamento do conteúdo — por frequentação ou para aprofundamento — quanto pela complexidade dos textos.",
  },
  {
    id: "EF67LP17",
    competences: "LP",
    group_years: "67",
    field: "03",
    unit: "LP07",
    object:
      "Relação entre contexto de produção e características composicionais e estilísticas dos gêneros (carta de solicitação, carta de reclamação, petição on-line, carta aberta, abaixo-assinado, proposta etc.)\nApreciação e réplica",
    skill: "EF67LP17",
    comment:
      'Esta é uma habilidade que vincula a leitura analítica de cartas de solicitação e de reclamação à produção posterior de textos dos mesmos gêneros. Seu foco é a análise tanto da forma de organização dessas cartas quanto de seus mecanismos argumentativos. E está diretamente relacionada à capacidade de (re)construção dos sentidos do texto e de sua coesão e coerência, em aspectos como a ordem de apresentação das informações e ideias e a sua "costura". O que envolve o estudo de diferentes tipos de organizadores textuais, com ênfase nos argumentativos.',
    resume:
      "Para viabilizar a análise das solicitações e reclamações mencionadas, convém que os currículos prevejam:a) o levantamento e a discussão de questões polêmicas locais;b) o debate a seu respeito;c) a eleição de critérios, no decorrer dos debates, para analisar-se a pertinência de reclamações e solicitações.Pode-se definir a abordagem dos dois gêneros nos dois primeiros anos; ou prever um gênero para cada ano. A progressão pode pautar-se, ainda, pelas operações envolvidas na habilidade (identificar/analisar); pelos procedimentos de pesquisa e debate necessários à análise; pelo grau de complexidade dos gêneros e textos a serem lidos; pelo foco na leitura/análise ou na produção de texto; pelo nível de autonomia que o aluno deverá atingir a cada etapa.",
  },
  {
    id: "EF67LP18",
    competences: "LP",
    group_years: "67",
    field: "03",
    unit: "LP07",
    object:
      "Estratégias, procedimentos de leitura em textos reivindicatórios ou propositivos",
    skill: "EF67LP18",
    comment:
      "Trata-se de uma habilidade complexa que envolve duas operações distintas: identificar e analisar, em textos reivindicatórios, a pertinência de reclamações ou pedidos. Supõe, portanto, a capacidade de:a) diferenciar “partes” essenciais do conteúdo desses textos: o objeto da reclamação ou do pedido, de um lado, e o/s argumento/s que os valida/m, de outro;b) reconhecer a pertinência da reclamação ou do pedido, considerando-se o contexto de produção: quem e para quem se reclama/solicita, quais os interesses em jogo etc.",
    resume:
      "O desenvolvimento dessa habilidade, nos currículos, demanda a definição de gêneros argumentativos capazes de veicular a) solicitação e b) reclamação, como as cartas mencionadas na habilidade EF67LP17. Para viabilizar a análise dessas solicitações e reclamações, convém que os currículos prevejam:a) o levantamento e a discussão de questões polêmicas locais;b) o debate a seu respeito;c) a eleição de critérios, no decorrer dos debates, para analisar-se a pertinência de reclamações e solicitações.Pode-se definir a abordagem dos dois gêneros nos dois primeiros anos; ou prever um gênero para cada ano.A progressão pode pautar-se, ainda, pelas operações envolvidas na habilidade (identificar/analisar); pelos procedimentos de pesquisa e debate necessários à análise; pelo grau de complexidade dos gêneros e textos a serem lidos; pelo nível de autonomia que o aluno deverá atingir a cada etapa.",
  },
  {
    id: "EF67LP19",
    competences: "LP",
    group_years: "67",
    field: "03",
    unit: "LP09",
    object:
      "Estratégia de produção: planejamento de textos reivindicatórios ou propositivos",
    skill: "EF67LP19",
    comment:
      "A habilidade refere-se à investigação de problemas que levarão à produção de gêneros reivindicatórios ou propositivos. Entre esta habilidade, prevista para o 6º e o 7º ano, e a habilidade (EF89LP21), prevista para os dois últimos anos, e que também faz referência ao levantamento de questões ou problemas, há uma progressão suposta, (1) nos procedimentos envolvidos na investigação e na ampliação de alcance do público; (2) na geração de dados e na função deles para a produção de gêneros mais ou menos complexos. Supõe a leitura analítica de textos normativos e legais.",
    resume:
      "Na elaboração do currículo, é possível propor uma progressão para os dois anos indicados, em relação ao gênero a ser selecionado. Há articulação entre habilidades desse campo e do campo de práticas de estudo e pesquisa, quando as práticas deste último campo mobilizam habilidades que envolvem tomada de notas, sínteses de leituras, elaboração de entrevistas, enquetes etc. Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF69AR15), (EF69AR33), da Arte; e (EF67EF17), da Educação Física, no que se refere à compreensão crítica de diferentes pontos de vista sobre temas controversos e de relevância social.",
  },
  {
    id: "EF67LP20",
    competences: "LP",
    group_years: "67",
    field: "04",
    unit: "LP07",
    object: "Curadoria de informação",
    skill: "EF67LP20",
    comment:
      "A habilidade refere-se à curadoria de informação no campo das práticas de estudo e pesquisa. Supõe o desenvolvimento das diferentes dimensões do pensamento científico, crítico e criativo. Por exemplo, para realizar uma pesquisa científica, é necessário pensar no objeto a ser investigado, no recorte temático (com elaboração de questões e hipóteses) que orientará a busca e seleção de informações que podem solucionar um problema proposto etc.",
    resume:
      "Na elaboração do currículo, é importante considerar que esta habilidade se articula com habilidades definidas para o campo da vida pública no que se refere ao cuidado com a curadoria de informação. Aqui também, procedimentos como grifar, fazer anotações, bem como produções de textos que apoiem a compreensão como resumos, esquemas etc., serão importantes no processo de compreensão dos textos selecionados durante a pesquisa. Embora não especificado na habilidade, convém que cuidados com a verificação da fidedignidade das fontes também estejam no foco do trabalho proposto.Há, ainda, oportunidade para o trabalho interdisciplinar com a habilidade (EF06MA33), da Matemática, associada ao planeamento e coleta de dados para realização de pesquisas.",
  },
  {
    id: "EF67LP21",
    competences: "LP",
    group_years: "67",
    field: "04",
    unit: "LP09",
    object: "Estratégias de escrita: textualização, revisão e edição",
    skill: "EF67LP21",
    comment:
      "Esta habilidade se refere à apropriação de diferentes modos de divulgar pesquisas realizadas. Supõe o estudo das especificidades dos gêneros e da adequação de um ou outro ao contexto de produção, com destaque para a natureza dos resultados, as intencionalidades e o público provável. Envolve as operações de planejamento, produção e revisão do texto no gênero escolhido (apresentação, painel, artigo etc) para divulgar os resultados.",
    resume:
      "Na elaboração do currículo, uma vez a proposição de pesquisa envolvendo as diferentes áreas pode acontecer no interior de projetos integradores, a divulgação de resultados pode culminar em feiras de ciências ou em eventos de fechamento do ano, possibilitando formas de divulgação que envolvam toda a comunidade escolar. Esses eventos podem ser planejados entre várias escolas de uma mesma cidade ou de regiões diferentes no interior de um determinado estado. Por exemplo, pode-se prever a criação de site ou blog em que se concentre a produções dos dois anos, que podem variar no gênero, visto que esses espaços suportam várias mídias. Do ponto de vista didático, é indicado que os currículos contemplem um estudo das principais características dos gêneros selecionados.",
  },
  {
    id: "EF67LP22",
    competences: "LP",
    group_years: "67",
    field: "04",
    unit: "LP09",
    object: "Estratégias de escrita: textualização, revisão e edição",
    skill: "EF67LP22",
    comment:
      "Esta habilidade supõe (1) capacidades de leitura para estudo (uso de grifos, produção de marginálias, notas, esquemas) e mobilização de capacidades de leitura como inferências e generalizações, (2) planejamento, produção e revisão de um gênero de apoio à compreensão de textos lidos/conceitos. Na textualização (elaboração do texto), promove o aprendizado de modos de incorporar ao texto as vozes de outros.",
    resume:
      "Na elaboração do currículo, vale considerar que os gêneros sugeridos na descrição da habilidade são conhecidos por gêneros de apoio à compreensão de textos. Comumente, são meios para se chegar a uma outra produção (a principal) ou para o estudo de apropriação de conceitos que serão aplicados em outros contextos. Recomenda-se que o trabalho com habilidades que favorecem o desenvolvimento desta habilidade e dos gêneros nela implicados seja realizado em todos os componentes e áreas do currículo. Promover momentos de planejamento integrado envolvendo profissionais de todas as áreas para se prepararem para práticas em comum potencializará o aprendizado pelos/as alunos/as.",
  },
  {
    id: "EF67LP23",
    competences: "LP",
    group_years: "67",
    field: "04",
    unit: "LP04",
    object: "Conversação espontânea",
    skill: "EF67LP23",
    comment:
      "Esta habilidade supõe a participação nas diferentes situações orais propostas na BNCC e se articula com todos os campos de atuação. Visa a uma participação, nas interações, de um lado mais respeitosas e éticas, de outro, mais qualificadas (a esse respeito, ver EF89LP27).",
    resume:
      "Na elaboração do currículo, vale considerar que a participação mais qualificada como audiência (parte do público a que se dirige um apresentador ou debatedor) implica a capacidade de identificar as informações mais relevantes, fazer inferências sobre o que é dito e relacioná-las a outras informações para, a partir disso, elaborar perguntas sobre possíveis dúvidas ou se posicionar e argumentar em relação ao que foi dito. As anotações resultantes da tomada de notas podem servir de apoio, nessas situações. É importante garantir que essa participação qualificada seja solicitada frequentemente e que sejam propostos momentos de avaliação da turma sobre essas participações, no sentido de aprimorá-las.",
  },
  {
    id: "EF67LP24",
    competences: "LP",
    group_years: "67",
    field: "04",
    unit: "LP04",
    object: "Procedimentos de apoio à compreensão Tomada de nota",
    skill: "EF67LP24",
    comment:
      "Nesta habilidade, a tomada de notas tem como finalidade principal o registro pessoal visando a reflexões pessoais sobre o registrado. Supõe a capacidade de identificar informações relevantes e sintetizá-las em notas de modo coerente, garantindo a possibilidade de retomada das ideias pelo(a) seu(sua) autor(a).",
    resume:
      "Na elaboração do currículo, pode ser proposta uma progressão quanto à situação em que a tomada de notas é solicitada: a partir de materiais gravados, até ser proposto para ser realizada durante as interações (reuniões, aulas, apresentações orais, seminários etc.). A progressão também pode ser pensada em termos de modos de organização dessa tomada de notas: uso de setas, itens, abreviaturas, pequenos esquemas etc., que podem ser compartilhados entre os colegas, em momentos a serem planejados pelo professor.",
  },
  {
    id: "EF67LP25",
    competences: "LP",
    group_years: "67",
    field: "04",
    unit: "LP08",
    object: "Textualização Progressão temática",
    skill: "EF67LP25",
    comment:
      "Esta habilidade refere-se tanto ao reconhecimento de critérios utilizados na organização interna dos textos (dividir o texto em tópicos que permitam a compreensão do tema/assunto; utilizar uma ordem e uma hierarquia ao apresentá-los no texto; estabelecer as relações adequadas entre as informações), quanto à identificação das marcas linguísticas empregadas para tanto: em primeiro/segundo lugar; isto é, ou seja, por exemplo; para finalizar/concluindo etc. Além disso, refere-se à compreensão dos mecanismos de paráfrase (dizer o mesmo que foi dito anteriormente, de outra forma, em uma explicação, por exemplo), identificando as marcas linguísticas utilizadas para apresentá-la (dito de outra forma/em outras palavras). Esses aspectos contribuem para que o texto seja coeso e coerente. Esta habilidade refere-se, ainda, ao emprego dos aspectos indicados na elaboração dos textos próprios.",
    resume:
      "Na elaboração do currículo, convém considerar que esta habilidade envolve tanto leitura, quanto produção de textos. Na leitura — em especial na leitura colaborativa —, o estudo do texto possibilita o reconhecimento dos critérios empregados na organização dos tópicos, assim como a identificação das marcas linguísticas utilizadas para tanto. A produção dos textos próprios oferece a oportunidade de emprego dos aspectos estudados. A progressão pode ter como critério a complexidade dos textos organizados nos gêneros propostos; o grau de aprofundamento do tratamento a ser dado aos aspectos selecionados para cada ano; e o nível de autonomia do aluno ao realizar o trabalho (em colaboração — coletivo, em grupos e/ou duplas — e de modo autônomo).",
  },
  {
    id: "EF67LP26",
    competences: "LP",
    group_years: "67",
    field: "04",
    unit: "LP08",
    object: "Textualização",
    skill: "EF67LP26",
    comment:
      "Estreitamente associada à leitura, esta habilidade envolve o reconhecimento da estrutura do hipertexto em gêneros de divulgação científica veiculados em ambientes digitais, assim como a capacidade de acessar e articular textos periféricos, como notas de rodapé e boxes, com o texto principal. Consiste em compreender que notas de rodapé e boxes mantém relações de complementaridade e/ou contraponto com o texto principal, compondo com ele um todo solidário. Supõe, ainda, que a análise empreendida na leitura de hipertextos em ambiente digital pode favorecer a produção destes.",
    resume:
      "Na elaboração do currículo, pode-se considerar que o desenvolvimento desta habilidade demanda propor práticas permanentes e regulares de leitura de textos de divulgação científica em ambientes digitais. É recomendável uma atividade interdisciplinar, com vistas a contemplar todas as áreas de conhecimento, de modo que, de um lado, o professor de Língua Portuguesa possa colaborar com os demais, no sentido de orientar, por exemplo, o ensino de procedimentos de leitura e de produção desses textos, e, de outro, os demais professores possam colaborar com o de Língua Portuguesa, orientando-o quanto aos recursos das linguagens específicas (cartografia, gráficos/infográficos, simulações, por exemplo) usados na construção de sentidos dos textos. É condição para isso a programação de estudos e planejamentos coletivos. O acesso à Internet e/ou a computadores também é relevante. A progressão, seja vertical, seja horizontal, pode tomar como referência: (a) a ênfase na leitura de estudo prévia ou na observação e análise de sua organização; (b) o grau de complexidade, tanto dos gêneros e textos a serem trabalhados quanto dos temas abordados e das estruturas de hipertexto correspondentes; (c) o nível de autonomia a ser conquistado pelo aluno a cada etapa.",
  },
  {
    id: "EF67LP27",
    competences: "LP",
    group_years: "67",
    field: "05",
    unit: "LP07",
    object: "Relação entre textos",
    skill: "EF67LP27",
    comment:
      "Esta habilidade refere-se ao estudo comparado de obras literárias entre si e delas com outras manifestações de arte: a análise das relações interdiscursivas e intertextuais (os diálogos) entre esses diferentes textos. Muitas obras literárias clássicas, por exemplo, sofrem adaptações para produções em outras linguagens, como Dom Casmurro, de Machado de Assis, que inspirou HQs, canções e minisséries contemporâneas, por exemplo, ou canções que inspiraram a produção de contos (como as canções de Chico Buarque que inspiraram um livro de contos). Essa habilidade de identificar e analisar os diálogos estabelecidos entre os vários produtos culturais favorece a ampliação de repertório, que contribui para que os alunos estabeleçam mais relações entre os textos e, portanto, construam mais sentidos sobre o que leem.",
    resume:
      'Na elaboração do currículo, a progressão pode ser formulada com base nos gêneros propostos, definindo, por exemplo, que serão trabalhadas as relações de intertextualidade entre textos de mesmo gênero (o diálogo entre dois romances ou poemas), para, em seguida, propor um estudo comparado entre um romance literário e um filme, uma peça ou novela, cujo roteiro foi criado a partir do romance. Esses estudos comparados podem ser associados a habilidades que coloquem em foco a percepção de que diferentes linguagens "combinadas" produzem diferentes sentidos, mesmo partindo de uma mesma história ou ideia. Supõe, portanto, o estudo dos recursos dessas diferentes linguagens usados na construção dos sentidos.Há, aqui, oportunidade para o trabalho interdisciplinar com as habilidades (EF69AR30) e (EF69AR32), da Arte, no que se refere à exploração, análise e criação de diálogos entre textos literários e outras manifestações, de diferentes linguagens artísticas.',
  },
  {
    id: "EF67LP28",
    competences: "LP",
    group_years: "67",
    field: "05",
    unit: "LP07",
    object: "Estratégias de leitura Apreciação e réplica",
    skill: "EF67LP28",
    comment:
      "A habilidade refere-se a procedimentos e estratégias que podem ser usados para compreender e apreciar diferentes gêneros literários, considerando as suas marcas específicas. Esse tipo de leitura favorece a fruição literária — que significa ler sem qualquer compromisso com avaliações ou apresentações formais sobre o lido. Entretanto, cabe lembrar que, para fruir melhor o texto, é essencial ter vivenciado experiências prazerosas de leitura e conversa sobre textos desses gêneros, em que  o caráter criativo dos discursos literários tenham sido evidenciados.",
    resume:
      "Na elaboração do currículo, uma forma de se colaborar para a motivação do aluno para leituras autônomas é:(1) acolher as mais variadas produções culturais, oferecendo um amplo e variado acervo de livros;(2) prever projetos que envolvam o cultivo da leitura de livre escolha;(3) rodas de conversa sobre obras lidas;(4) outros eventos culturais, como saraus, mostras de cinema, teatro, música etc.Ações dessa natureza favorecem a inserção dos alunos em práticas variadas, ampliando seu repertório cultural e consciência multicultural. Para um trabalho dessa dimensão, é necessária a articulação dos professores da área — o que possibilitará explorar as diferentes linguagens —, bem como a pessoa responsável pela sala de leitura e/ou biblioteca. Esta habilidade articula-se com a habilidade de mostrar interesse e envolvimento com a leitura de textos literários — no sentido de que envolver-se nas mais variadas práticas de leitura literária favorece o desenvolvimento da autonomia dos alunos.",
  },
  {
    id: "EF67LP29",
    competences: "LP",
    group_years: "67",
    field: "05",
    unit: "LP07",
    object:
      "Reconstrução da textualidade\nEfeitos de sentidos provocados pelos usos de recursos linguísticos e multissemióticos",
    skill: "EF67LP29",
    comment:
      'Esta habilidade supõe distinguir os elementos constitutivos do gênero texto dramático, seja em relação à sua forma e aos recursos usados nessa forma de se estruturar (as rubricas, a marcação das personagens, a divisão em cenas e atos etc.), seja em relação ao seu conteúdo (à história que quer "mostrar": quem são essas personagens, que ideias e visões de mundo defendem, como se relacionam, que conflitos são gerados nessa relação etc.).',
    resume:
      'Na elaboração do currículo, é importante considerar que o texto dramático é concebido para ser encenado no palco. As outras formas de realização são, em geral, tratadas como "roteiro" (de filme/cinema, de novela). Um estudo do texto dramático que se aproxime dessas últimas práticas, mais acessíveis aos alunos, pode ser mais significativo. Prever o trabalho com leituras dramáticas também pode ser uma forma mais motivadora de aproximar o leitor dos textos dramáticos. Além disso, essa possibilidade favorece o desenvolvimento da fluência leitora, uma vez que, para ler dramaticamente, o leitor deverá ensaiar a leitura para estudar a melhor forma de dizer a fala da personagem que lhe corresponde de modo que se possa atribuir a ela o sentido esperado, considerando as informações sobre a personagem e a cena (dadas pelas rubricas e pelas atuação das personagens na cena), o que ajuda a atribuir mais sentido ao texto dramático.Há, aqui, especial oportunidade de trabalho interdisciplinar com a habilidade (EF69AR30), da Arte, no que se refere à composição de improvisações e acontecimentos cênicos com base em textos dramáticos.',
  },
  {
    id: "EF67LP30",
    competences: "LP",
    group_years: "67",
    field: "05",
    unit: "LP09",
    object: "Construção da textualidade Relação entre textos",
    skill: "EF67LP30",
    comment:
      "Esta habilidade visa à experimentação do fazer literário pelo/a aluno nos gêneros literários narrativos. A produção, aqui, também deve ser entendida como processo que envolve as operações de planejamento, produção e revisão dos textos, por meio da criação de oficinas literárias, em parceria com profissionais da biblioteca/sala de leitura e com professores/as de Arte.",
    resume:
      'Na elaboração do currículo, é interessante considerar que esta habilidade supõe a análise dos recursos usados na produção de sentido dos textos oferecidos à leitura nos gêneros referidos. Sugere-se, então, uma progressão na proposição dos "subgêneros" narrativos. Recomenda-se que as produções experimentadas sejam efetivamente colocadas em circulação e alcancem os leitores previstos. É sugerido propor antecipadamente (1) a publicação de coletâneas para compor a biblioteca e/ou para distribuir para amigos e familiares; (2) a divulgação das produções em blogs literários criados para esse fim, e/ou páginas de Facebook; (3) a realização de concursos, desafios, saraus, clubes de leitura etc.',
  },
  {
    id: "EF67LP31",
    competences: "LP",
    group_years: "67",
    field: "05",
    unit: "LP09",
    object: "Construção da textualidade Relação entre textos",
    skill: "EF67LP31",
    comment:
      "Esta habilidade visa à experimentação do fazer literário pelo/a aluno nos gêneros literários líricos. A produção aqui também deve ser entendida como processo que envolve as operações de planejamento, produção e revisão dos textos, por meio da criação de oficinas literárias, em parceria com profissionais da biblioteca/sala de leitura e com professores/as de Arte.",
    resume:
      'Na elaboração do currículo, é interessante considerar que esta habilidade supõe a análise dos recursos usados na produção de sentido dos textos oferecidos à leitura nos gêneros referidos. Sugere-se, então, uma progressão na proposição dos "subgêneros" líricos. Recomenda-se que as produções experimentadas sejam efetivamente colocadas em circulação e alcancem os leitores previstos. É sugerido propor antecipadamente (1) a publicação de coletâneas para compor a biblioteca e/ou para distribuir para amigos e familiares; (2) a divulgação das produções em blogs literários criados para esse fim, e/ou páginas de Facebook; (3) a realização de concursos, desafios, saraus, clubes de leitura etc.',
  },
  {
    id: "EF67LP32",
    competences: "LP",
    group_years: "67",
    field: "01",
    unit: "LP08",
    object: "Fono-ortografia",
    skill: "EF67LP32",
    comment:
      "Esta é uma habilidade diretamente relacionada a contextos de produção e revisão de textos escritos. Seu foco é a obediência às convenções ortográficas do português, o que demanda o envolvimento sistemático em práticas de produção nas quais esse tipo de conhecimento seja requisitado e o domínio e/ou o estudo concomitante dessas convenções.",
    resume:
      "Na elaboração do currículo, sugere-se que o desenvolvimento desta habilidade venha sempre associado a práticas de produção e/ou revisão de textos, especialmente em situações públicas e formais em que a ortografia é requisito necessário. A progressão curricular pode se basear: (a) nos tópicos de ortografia a serem previstos para os dois anos em jogo, iniciando-se com as regularidades e prosseguindo com as irregularidades; (b) no grau de complexidade dos gêneros e textos programados para as práticas de produção e/ou revisão envolvidas nesse estudo; (c) no nível de autonomia que se pretende levar o aluno a conquistar a cada etapa.",
  },
  {
    id: "EF67LP33",
    competences: "LP",
    group_years: "67",
    field: "01",
    unit: "LP08",
    object: "Elementos notacionais da escrita",
    skill: "EF67LP33",
    comment:
      "Esta habilidade se refere ao emprego de regras e normas de pontuação em textos de qualquer gênero ou campo de atuação. Demanda o envolvimento frequente e sistemático em práticas públicas e formais de leitura e/ou produção de textos escritos em que a pontuação correta deve ser observada: e-mail de trabalho, entrevistas, notícias, artigo de divulgação científica, reportagem multimidiática etc.",
    resume:
      "Na elaboração do currículo, convém que o desenvolvimento da habilidade venha sempre associado a práticas de leitura e/ou produção de textos dos mais diversos gêneros e campos de atuação. A progressão vertical e horizontal pode adotar como critério os tópicos a serem abordados a cada momento, o grau de complexidade dos gêneros e textos previstos e o grau de autonomia do aluno pressuposto na execução da tarefa.",
  },
  {
    id: "EF67LP34",
    competences: "LP",
    group_years: "67",
    field: "01",
    unit: "LP08",
    object: "Léxico/morfologia",
    skill: "EF67LP34",
    comment:
      "Esta é uma habilidade  bastante relevante para a compreensão das relações semânticas que podem se estabelecer entre as palavras da língua. Trata-se de compreender a antonímia como um processo de estabelecimento de oposição de sentidos entre palavras; seu foco está no reconhecimento da função de certos prefixos nesse processo. (Relaciona-se com a habilidade EF06LP03 e todas as demais que envolvem processos de formação de palavras, especialmente os derivativos).",
    resume:
      "Na elaboração do currículo, recomenda-se que esse estudo venha sempre associado à análise comparativa e à reflexão, com base em inventários que apresentem palavras em textos, para que cada uma delas possa ser compreendida na acepção adequada. Práticas de leitura e/ou produção de textos são, portanto, essenciais para a contextualização desse ensino. A progressão pode apoiar-se: (a) nos tipos de prefixos a serem estudados; (b) no grau de complexidade dos gêneros e textos envolvidos; (c) no nível de autonomia requerido do aluno para realizar a tarefa.",
  },
  {
    id: "EF67LP35",
    competences: "LP",
    group_years: "67",
    field: "01",
    unit: "LP08",
    object: "Léxico/morfologia",
    skill: "EF67LP35",
    comment:
      "Esta é uma habilidade fundamental para a compreensão dos diferentes processos morfológicos e semânticos de formação das palavras. O foco está na distinção entre mecanismos de derivação e de composição, necessária a qualquer estudo e/ou análise do léxico. Pressupõe conhecimentos prévios relativos a classes de palavras e às categorias gramaticais a que elas se associam.",
    resume:
      'Na elaboração do currículo, convém que o desenvolvimento desta habilidade venha sempre associado a práticas de leitura, produção ou oralidade, de forma que o aluno possa observar esses processos em ação e refletir sobre como são produtivos e criativos. Portanto, a apropriação desses mecanismos pelo aluno é o seu foco, e não memorização da terminologia gramatical correspondente. Jogos de "mistura" de palavras para refletir sobre a significação resultante podem ser atividades muito produtivas e significativas para os/as alunos. Exemplo: formação de grupos que experimentem criar palavras usando os vários processos e, depois, desafiam os demais a dizer as palavras ou os afixos usados e o novo significado (Por exemplo, o que é "infoxicação"?). Propostas de produção de textos criativos, como os literários e os publicitários, também podem propiciar situações adequadas para esse estudo. A progressão curricular pode apoiar-se no tipo de mecanismo a ser estudado (derivação/composição), assim como no grau de complexidade dos gêneros e textos mobilizados.',
  },
  {
    id: "EF67LP36",
    competences: "LP",
    group_years: "67",
    field: "01",
    unit: "LP08",
    object: "Coesão",
    skill: "EF67LP36",
    comment:
      "Trata-se de uma habilidade essencial para o desenvolvimento da competência em escrita, mas também se aplica à análise da coesão textual em atividades de leitura. Seu foco é a adequação expressiva, no emprego de recursos de coesão (referencial e sequencial), ao gênero textual produzido. Envolve o uso de recursos da língua que: (1) evitam a repetição indesejada de palavras; (2) ajudam o leitor a resgatar, durante a leitura, o objeto/fato/assunto de que o texto trata; (3) ajudam a compreender a ordem de acontecimento das ações. A habilidade também demanda a análise da situação de comunicação, das características do gênero e das intenções e/ou objetivos a serem perseguidos.",
    resume:
      "Na elaboração do currículo, convém que o desenvolvimento desta habilidade seja programado em associação com práticas de oralidade, leitura ou escrita de textos dos gêneros previstos para estudo. Será nessas condições que o aluno poderá refletir sobre a adequação expressiva do(s) recurso(s) que pretenda empregar.  Em caso de produções escritas, recomenda-se que os currículos prevejam atividades de produção e revisão em que o foco seja o uso desses elementos coesivos na construção do texto de um determinado gênero. Em caso de textos orais, podem ser analisadas, coletivamente, apresentações previamente gravadas. A progressão, vertical ou horizontal, pode apoiar-se no tipo de recurso coesivo a ser abordado, no grau de complexidade dos gêneros ou textos a serem considerados e no nível de autonomia que se pretende levar o aluno a conquistar.",
  },
  {
    id: "EF67LP37",
    competences: "LP",
    group_years: "67",
    field: "01",
    unit: "LP08",
    object: "Sequências textuais",
    skill: "EF67LP37",
    comment:
      "A habilidade refere-se ao estudo necessário à resolução de problemas de compreensão, seja na leitura, seja na produção/revisão de textos próprios, derivados da presença e/ou emprego dos recursos linguístico-discursivos mencionados referentes ao estabelecimento da progressão temática. Abrange a análise do emprego dos recursos em textos de todos os campos de atuação, pressupondo práticas de leitura e/ou produção nas quais a (re)construção dos sentidos do texto esteja relacionada aos efeitos produzidos pelo uso de recursos de prescrição, causalidade, sequências descritivas e expositivas e ordenação de eventos.",
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade pode organizar-se com base em dois pontos articulados: 1) resolver um problema de compreensão/redação decorrente da presença e/ou emprego dos recursos linguístico-discursivos mencionados; 2) sistematizar o conhecimento discutido em 1). Todos os recursos mencionados na formulação da habilidade referem-se ao estabelecimento da progressão temática, ou seja, da criação do fio condutor do texto. Sugere-se que a atividade proposta focalize tanto os efeitos de sentido produzidos na leitura, quanto a adequação do uso. Recomenda-se, ainda, que a metalinguagem só seja empregada depois de compreendido o aspecto em foco. Do ponto de vista da progressão, sugere-se, inicialmente, um trabalho colaborativo (coletivo e em grupos/duplas), que progrida para o autônomo. Um segundo critério é a complexidade dos gêneros e textos previstos para o estudo.",
  },
  {
    id: "EF67LP38",
    competences: "LP",
    group_years: "67",
    field: "01",
    unit: "LP08",
    object: "Figuras de linguagem",
    skill: "EF67LP38",
    comment:
      "O foco desta habilidade está na compreensão e análise de figuras de linguagem, como as mencionadas, em gêneros e textos de qualquer campo de atuação. Trata-se, portanto, de uma habilidade relevante não só para a compreensão, mas, ainda, para a interpretação de textos, na medida em que evidencia mecanismos de (re)construção do texto e de seus sentidos.",
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade pode ser contextualizado em projetos de produção de textos do campo literário; na elaboração de artigos de divulgação de conhecimento; em projetos de estudo das figuras de linguagem em textos literários ou de divulgação de conhecimento. Recomenda-se: a) que os aspectos referidos sejam estudados levando em consideração os efeitos de sentido que produzem e a relação que estabelecem entre os trechos do enunciado; b) que a terminologia gramatical e a sistematização só sejam abordadas depois que os aspectos em foco tiverem sido compreendidos. A progressão pode se dar com base na complexidade do gênero/texto ou do grau de autonomia do aluno. Sugere-se, inicialmente, atividades colaborativas (coletivas e em grupos/duplas), que progridam para o autônomo.",
  },
  {
    id: "EF69LP01",
    competences: "LP",
    group_years: "69",
    field: "06",
    unit: "LP07",
    object: "Apreciação e réplica\nRelação entre gêneros e mídias",
    skill: "EF69LP01",
    comment:
      "Esta habilidade supõe discutir aspectos éticos envolvidos no modo de as pessoas se posicionarem e argumentarem sobre os assuntos ou fatos, com vistas à formação de um sujeito protagonista e ético frente a situações de conflito, em todas as situações de leitura — e também de produção de textos — que implicam posicionamentos e argumentos sobre fatos e assuntos diversos, mais ou menos polêmicos.",
    resume:
      "Na elaboração do currículo, é importante incluir projetos que abordem fatos e assuntos polêmicos específicos do estado e/ou município do aluno, bem como a possibilidade de os estudantes terem participação efetiva nas discussões dessas questões. Considerar as possibilidades de interação dos alunos com jornais e revistas locais, impressos ou digitais, por exemplo, e planejar a sua participação ativa nesses meios contribuirá para o desenvolvimento desta habilidade. Também favorece esse desenvolvimento discutir a diferença entre liberdade de expressão e discursos de ódio (que podem ser evidenciados em situações de bullying, por exemplo).Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF69AR15), (EF69AR33), da Arte; e (EF67EF17), da Educação Física, no que se refere à compreensão crítica de diferentes pontos de vista sobre temas controversos e de relevância social.",
  },
  {
    id: "EF69LP02",
    competences: "LP",
    group_years: "69",
    field: "06",
    unit: "LP07",
    object: "Apreciação e réplica\nRelação entre gêneros e mídias",
    skill: "EF69LP02",
    comment:
      "Esta habilidade supõe identificar os elementos da linguagem verbal e de outras linguagens e o modo como eles se articulam em diferentes peças publicitárias para produzir os sentidos desejados, considerando o produto em questão e o contexto de produção: quem são os interlocutores e quais as suas intencionalidades. Identificar e conhecer o potencial de significação dos recursos das diferentes linguagens e mídias implica o estudo dos recursos próprios dessas linguagens e mídias.",
    resume:
      "Na elaboração do currículo, é importante que a seleção parta de — mas não se restrinja a — peças publicitárias mais significativas para os alunos, que os tenham como público-alvo, de modo que compreendam seu caráter apelativo e percebam as estratégias e os argumentos usados para chamar a atenção. Por se tratar de uma habilidade prevista para ser desenvolvida ao longo dos quatro anos, a progressão pode ser definida tanto em relação à complexidade da seleção dos textos, no que se refere aos públicos e aos recursos mobilizados, quanto em relação aos gêneros a serem trabalhados. Cabe enfatizar a relevância de um trabalho com o discurso publicitário que favoreça a reflexão sobre a relação propaganda e consumo na adolescência, propaganda e ética, propaganda e padrões de beleza, entre outras relações possíveis, que favorecem o diálogo com disciplinas no interior da área de linguagens (como Arte e Educação Física) e da área de Ciências.",
  },
  {
    id: "EF69LP03",
    competences: "LP",
    group_years: "69",
    field: "06",
    unit: "LP07",
    object: "Estratégia de leitura: apreender os sentidos globais do texto",
    skill: "EF69LP03",
    comment:
      "O foco está no modo como se constrói o conteúdo de textos nesses gêneros, sempre relacionado às suas finalidades. Esta habilidade mobiliza outras, como identificar marcas de impessoalidade (mais esperada na notícia) e de subjetividade (que é aceitável nas reportagens e esperada nas entrevistas), diferenciar opinião de argumentos (que podem estar presentes em quaisquer dos gêneros citados na descrição da habilidade) e inferir informações acessando conhecimentos prévios sobre o tema/fato/assunto e relacionando com o conteúdo do texto para reconhecer o humor, a crítica e a ironia.",
    resume:
      "Na elaboração do currículo, pode-se considerar que a progressão horizontal e vertical no trabalho com textos desses gêneros pode partir da leitura de textos com caráter mais informativo (como a notícia) para textos que implicam, em maior ou menor medida, o posicionamento crítico de quem escreve ou cria; bem como prever uma seleção de textos de diferentes graus de complexidade nos variados gêneros. O trabalho com os recursos linguísticos e semióticos é essencial para a identificação dos aspectos citados na habilidade, de modo a garantir que os alunos compreendam a relação de sentido entre imagem e texto verbal. Pode-se prever modalidades didáticas que garantam a regularidade dessa prática de leitura, como as rodas de jornais ou rodas de conversa e as leituras compartilhadas desses variados gêneros, cuidando para também dar acesso a jornais e revistas locais, o que favorecerá o desenvolvimento desta habilidade, uma vez que contribuem para que os alunos comparem as compreensões sobre os textos lidos e negociem sentidos.",
  },
  {
    id: "EF69LP04",
    competences: "LP",
    group_years: "69",
    field: "06",
    unit: "LP07",
    object: "Efeitos de sentido",
    skill: "EF69LP04",
    comment:
      'Esta habilidade contribui para a percepção da finalidade e do "poder" do discurso publicitário: estimular o consumo, podendo induzir ao consumismo, com consequências ambientais e sociais indesejáveis, como o valor do ter em detrimento do ser, que pode resultar em discriminações. Analisar como os recursos das várias linguagens atuam na construção do discurso persuasivo favorece o pensamento crítico em relação ao consumismo e suas consequências.',
    resume:
      'Na elaboração do currículo, é importante articular o estudo desses variados gêneros publicitários às discussões contemporâneas sobre propaganda e consumo, como a influência da propaganda no comportamento de adolescentes e jovens e a ética na propaganda. É comum que os alunos não reconheçam o teor da propaganda de cartazes de supermercado, por exemplo, que anunciam promoções do tipo "Compre 2, leve 3", entre outras. Discussões de situações cotidianas exemplares como essas são essenciais para que os alunos reflitam sobre o quanto elas influenciam o consumidor a consumir mais.',
  },
  {
    id: "EF69LP05",
    competences: "LP",
    group_years: "69",
    field: "06",
    unit: "LP07",
    object: "Efeitos de sentido",
    skill: "EF69LP05",
    comment:
      'Esta habilidade supõe o estudo dos recursos das diferentes linguagens envolvidas na constituição desses gêneros de textos multissemióticos e a compreensão dos efeitos de sentido que a "combinação" desses recursos produz. Envolve ativar conhecimentos prévios sobre o contexto de produção do texto (por exemplo, sobre o fato a que uma charge se refere) e relacioná-los às ideias expressas no texto para compreender as intencionalidades e construir sentido sobre o que se lê. Para justificar a inferência feita, será necessário explicar e demonstrar as relações estabelecidas.',
    resume:
      "Na elaboração do currículo, deve-se considerar que o desenvolvimento desta habilidade supõe o conhecimento prévio dos textos jornalísticos que motivaram a produção dos gêneros citados. Entender a crítica ou o humor de uma charge ou um meme, por exemplo, implica no conhecimento do fato ou assunto criticado ou humorizado. Ou seja, é preciso reconhecer o diálogo (intertextualidade e interdiscursividade) entre os textos. É importante prever ações e parcerias que possibilitem aos alunos acesso regular a jornais e revistas em diferentes mídias. A progressão no desenvolvimento desta habilidade pode se estabelecer a partir da oposição entre apenas inferir e também justificar o efeito de humor. Outro parâmetro para a progressão pode ser a complexidade e/ou a adequação (à faixa etária) do gênero em jogo. Há, aqui, oportunidade para o trabalho interdisciplinar com a habilidade (EF69AR03), da Arte, no que se refere à identificação, inferência e justificativa de situações em que diferentes linguagens são integradas, como textos multissemióticos e artes visuais, por exemplo.",
  },
  {
    id: "EF69LP06",
    competences: "LP",
    group_years: "69",
    field: "06",
    unit: "LP09",
    object:
      "Relação do texto com o contexto de produção e experimentação de papéis sociais",
    skill: "EF69LP06",
    comment:
      "O desenvolvimento da habilidade  implica a vivência de diferentes papéis sociais, como produtor de textos de variados gêneros do campo jornalístico/midiático. Analisar e considerar o contexto em que o texto será produzido e circulará é essencial para garantir a adequação da produção à situação. No que se refere à produção de quaisquer dos gêneros citados, o tratamento ético da informação e/ou a posição ética em relação a ela devem estar previstos.",
    resume:
      "Na elaboração do currículo, deve-se considerar que esta é uma habilidade que prevê a produção e publicação de textos em gêneros os mais diversos de seu campo. Dada a seleção de gêneros sugerida, espera-se, nos currículos, a definição de uma progressão, que poderá ser tanto horizontal (distribuição dos gêneros ao longo dos quatro anos) quanto vertical (uma seleção revisada algumas vezes ao longo dos quatro anos, com vistas ao aprofundamento no trabalho da produção). Para essa seleção, será necessário considerar os gêneros previstos pela BNCC e, ainda, discutir que outros gêneros, dentre a lista de possibilidades, poderiam ser mais significativos para o/a aluno/a (porque já fazem parte de suas práticas e caberia ampliar e aprimorar seu domínio) e também para a sua formação, considerando, especialmente, a relevância do trabalho com os gêneros multimidiáticos, no contexto da web 2.0. Do ponto de vista didático, é indicado que os currículos contemplem um estudo das principais características dos gêneros selecionados e orientem a realização das diferentes operações de produção de textos, quais sejam: a) contextualização: definição da situação comunicativa em que o texto será produzido (quem serão os leitores, onde circulará, com que finalidade, em qual gênero); b) planejamento: que envolve a elaboração do conteúdo temático (o que será dito) e a organização do texto parte a parte; c) elaboração do texto: o processo da construção do texto (textualização); d) revisão processual (durante a produção) e final. Essas operações podem, inicialmente, ser realizadas em situações coletivas e em grupos, com mais apoio do professor e, de modo gradual, envolver graus crescentes de autonomia do/a aluno para realizá-la. Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF67EF01) e (EF67EF02), da Educação Física, no que se refere a experimentação, observação, produção e crítica especificamente no caso dos jogos eletrônicos.",
  },
  {
    id: "EF69LP07",
    competences: "LP",
    group_years: "69",
    field: "06",
    unit: "LP09",
    object: "Textualização",
    skill: "EF69LP07",
    comment:
      "Esta habilidade refere-se à produção de textos de gêneros variados do campo jornalístico-midiático, levando sempre em conta o contexto de produção (interlocutores, intencionalidades etc.) e as especificidades do gênero escolhido para a produção. Implica apropriar-se dos procedimentos da escrita, envolvendo as operações de contextualização, planejamento, elaboração do texto (textualização) e revisão processual e final.",
    resume:
      "Na elaboração do currículo, é interessante considerar que, para o desenvolvimento desta habilidade, é necessário articulá-la a operações de contextualização, planejamento, elaboração do texto (o processo de textualização) e revisão, processual e final. Essas operações podem, inicialmente, ser realizadas em situações coletivas e em grupos, com mais apoio do professor e, de modo gradual, envolver graus crescentes de autonomia do/a aluno para realizá-la. É possível definir uma progressão horizontal com base nos gêneros propostos para cada ano, sempre cuidando de contemplar a diversidade de linguagens e mídias em que os gêneros sugeridos se constituem (impresso, rádio, tv. etc.).",
  },
  {
    id: "EF69LP08",
    competences: "LP",
    group_years: "69",
    field: "06",
    unit: "LP09",
    object: "Revisão/edição de texto informativo e opinativo",
    skill: "EF69LP08",
    comment:
      "Esta habilidade consiste na revisão e/ou edição de textos diversos, que deve se orientar sempre por critérios de adequação da produção ao contexto (interlocutores, intencionalidade, gênero, espaços/mídias em que circulará etc.), levando em conta, também, o uso das ferramentas de edição variadas em recursos e complexidade, em caso de gêneros multissemióticos (como as produções em vídeo, por exemplo).",
    resume:
      "Na elaboração do currículo, recomenda-se que seja proposto: (1) trabalho articulado com profissionais responsáveis pelas salas de informática, com conhecimento de aplicativos e ferramentas de edição; (2) a necessidade de se recorrer a ferramentas gratuitas de edição de imagens, áudios e textos impressos. É recomendável propor, ainda, o trabalho colaborativo nos processos de revisão/edição entre os/as alunos/as e entre alunos e professores. Em muitos casos, os adolescentes têm maior familiaridade com o uso de tecnologias digitais, o que pode colocar o professor no lugar de quem tem mais a aprender do que a ensinar. Recomenda-se que a equipe de gestão pedagógica preveja reflexões a esse respeito, junto à equipe docente.",
  },
  {
    id: "EF69LP09",
    competences: "LP",
    group_years: "69",
    field: "06",
    unit: "LP09",
    object:
      "Planejamento de textos de peças publicitárias de campanhas sociais",
    skill: "EF69LP09",
    comment:
      "Esta habilidade refere-se à produção de textos como um processo que envolve etapas diferentes: definir contexto de produção, planejar, produzir e revisar. Destina-se ao procedimento de planejar o texto, que implica a curadoria de informação e a produção de roteiros e enquetes para pesquisa, considerando o contexto de produção definido, e a esquematização (o esboço) do texto, parte a parte, levando em conta as especificidades do gênero da campanha publicitária.",
    resume:
      "Na elaboração do currículo, recomenda-se discutir a relação entre as esferas publicitária e jornalística, conforme sinalizado nas orientações relativas à leitura. Sugere-se uma progressão ao longo dos 4 anos finais, considerando os gêneros arrolados e a maior ou menor familiaridade dos/as alunos/as da região com um ou outro. Além do trabalho articulado com profissionais que usam aplicativos de edição de textos, da disponibilização desses aplicativos para os/as alunos/as e do investimento no trabalho colaborativo, recomenda-se articular as propostas com a exploração dos documentos reguladores (campo da vida pública) da propaganda e publicidade, com vistas ao desenvolvimento de uma postura ética em relação à esfera publicitária. Do ponto de vista didático, é indicado que os currículos contemplem um estudo das principais características dos gêneros selecionados.",
  },
  {
    id: "EF69LP10",
    competences: "LP",
    group_years: "69",
    field: "06",
    unit: "LP10",
    object: "Produção de textos jornalísticos orais",
    skill: "EF69LP10",
    comment:
      "Esta habilidade supõe o trabalho com as etapas de produção de notícias: planejamento, produção e revisão processual e final (em casos em que os textos são gravados previamente). Para o planejamento, será necessário considerar a mídia em que o gênero se realizará (uma notícia para TV, rádio ou ambiente digital), para que o roteiro seja feito considerando os recursos próprios da mídia em jogo.",
    resume:
      "Na elaboração do currículo, é interessante considerar que esta habilidade demanda seleção e progressão dos gêneros listados, do ponto de vista das mídias, das habilidades mobilizadas e do gênero em questão (dos mais informativos aos mais opinativos). Em oralidade, a produção de entrevistas (6º a 9º) e reportagem multimídia (8º e 9º) já estão previstas. Os demais gêneros da lista poderão ser distribuídos ao longo dos quatro anos: para 6º e 7º anos, gêneros que se realizam em áudio, que implicam uso de aplicativos menos complexos; para 8º e 9º anos, gêneros que envolvem o uso de aplicativos de vídeos. Também é possível selecionar gêneros que façam uso das várias mídias e abordar gradativamente os recursos dessas mídias. Por exemplo, para 6º e 7º anos, entrevistas em áudio e comentários em vídeo; para 8º e 9º anos, entrevistas e mesas de debate em áudio e em vídeo. Inicialmente, sugere-se que questões locais sejam prioridade sobre as globais.",
  },
  {
    id: "EF69LP11",
    competences: "LP",
    group_years: "69",
    field: "06",
    unit: "LP10",
    object: "Produção de textos jornalísticos orais",
    skill: "EF69LP11",
    comment:
      "Esta habilidade supõe a escuta e a produção de textos orais, sempre considerando o contexto. Essas operações cognitivas mobilizam habilidades de análise e de uso de recursos linguísticos e semióticos, como o reconhecimento da posição assumida pelo outro, o movimento argumentativo usado (se negocia com ou refuta outros; se apenas defende sua própria posição), a entonação dada ao que se fala, que sinaliza a apreciação sobre o que se fala etc.",
    resume:
      'Na elaboração do currículo, o exercício de identificar e analisar pode começar com materiais previamente gravados (debates, entrevistas etc.). Em seguida, pode-se prever participações face a face ou a distância, mediadas pela tecnologia, em situações variadas, como discussões, participação em debates, palestras e reuniões. Nesses casos, a habilidade de identificar e analisar é "solicitada" enquanto o outro fala, tendo em vista uma resposta imediata. Articular essa habilidade com as que envolvem tomada de notas — começando com material gravado, que pode ser revisto indefinidamente, para depois fazê-lo no ato da interação — favorecerá uma resposta mais qualificada de quem escuta. tentar para a seleção e progressão dos gêneros listados para a produção de textos orais. Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF69AR15), (69AR33), da Arte; e (EF67EF17), da Educação Física, no que se refere à compreensão crítica de diferentes pontos de vista sobre temas controversos e de relevância social.',
  },
  {
    id: "EF69LP12",
    competences: "LP",
    group_years: "69",
    field: "06",
    unit: "LP10",
    object: "Planejamento e produção de textos jornalísticos orais",
    skill: "EF69LP12",
    comment:
      "Esta habilidade consiste em trabalhar, em todas as propostas de produção de textos orais, as etapas da produção, começando pelo planejamento, a partir da análise do contexto de produção (o que se quer dizer, para quem, com que finalidade e como dizer). Considerando os gêneros que podem ser gravados e assistidos/ouvidos posteriormente, é preciso prever o ensino/aprendizagem de uso de aplicativos de captação e edição de áudio e imagem.",
    resume:
      "Na elaboração do currículo, é importante diferenciar situações em que apenas oralizamos um texto escrito, como em geral acontece nos noticiários de TV ou rádio, das situações em que se planeja o texto e se produz materiais de apoio à fala mas, efetivamente, o texto só se realiza na interação (como acontece em um debate). Cada situação determina suas estratégias de planejamento, elaboração, revisão, edição, reescrita/redesign e avaliação dos textos. Por exemplo: se a proposta é a produção de um programa noticioso em vídeo, será necessário, depois de definido o fato/assunto: (1) usar câmeras de captação de vídeo e áudio e de aplicativos de edição do material gravado; (2) após pesquisa e seleção de informações, produzir roteiros com indicações do texto a ser lido pelo âncora/jornalista, das entradas de entrevistas ou outras imagens gravadas. Já na produção de um programa noticioso para rádio, haverá variação dos recursos para captação, do grau de detalhamento da notícia (que, para rádio, em geral, é menor), da presença ou não de efeitos sonoros de fundo etc. Atentar para seleção e progressão dos gêneros listados para a produção de textos orais.",
  },
  {
    id: "EF69LP13",
    competences: "LP",
    group_years: "69",
    field: "06",
    unit: "LP04",
    object:
      "Participação em discussões orais de temas controversos de interesse da turma e/ou de relevância social",
    skill: "EF69LP13",
    comment:
      "Esta habilidade refere-se à participação dos alunos em discussões de temas controversos que sejam de seu interesse e/ou tenham relevância social. Articula-se com habilidades do campo da vida pública e também das práticas de estudo e pesquisa, visto que conduz os alunos a se inteirar de problemas e temas de seu entorno imediato e mediato, investigá-los para compreendê-los e tomar uma posição em discussões a respeito.",
    resume:
      "Na elaboração do currículo, sugere-se que esta habilidade seja vinculada a projetos interdisciplinares, como os de intervenção social, que também mobilizam habilidades do campo da vida pública (no estudo da questão problema/tema, caso ela envolva o conhecimento de normas e leis, por exemplo) e de práticas de estudo e pesquisa (como a realização de enquetes para coletar dados a serem tratados e usados na formulação de argumentos para apoiar uma posição assumida). Pode, também, ser mobilizada em um debate deliberativo sobre alguma questão do convívio escolar e associada às habilidades próprias de situações orais como essa, que implicam tomada de notas, uso de recursos de entonação, ritmo, expressão facial e corporal etc. Nos currículos locais, para motivar o engajamento do adolescente, pode ser prevista uma progressão que, inicialmente, mobilize os alunos para problemas do seu entorno imediato — turma, escola, comunidade, bairro, cidade — passando para problemas da natureza mais ampla, mas que, ainda assim, guardem relação com questões locais. Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF69AR15), (69AR33), da Arte; e (EF67EF17), da Educação Física, no que se refere à compreensão crítica de diferentes pontos de vista sobre temas controversos e de relevância social.",
  },
  {
    id: "EF69LP14",
    competences: "LP",
    group_years: "69",
    field: "06",
    unit: "LP04",
    object:
      "Participação em discussões orais de temas controversos de interesse da turma e/ou de relevância social",
    skill: "EF69LP14",
    comment:
      "Esta habilidade refere-se à participação dos alunos em discussões de temas controversos que sejam de seu interesse e/ou tenham relevância social. Articula-se com habilidades do campo da vida pública e também das práticas de estudo e pesquisa, visto que conduz os alunos a se inteirar de problemas e temas de seu entorno imediato e mediato, investigá-los para compreendê-los e tomar uma posição em discussões a respeito. Como envolve a busca de informação em fontes variadas, também se conecta às habilidades de curadoria da informação, que implica saber diferenciar sites e/ou fontes confiáveis de não confiáveis, por exemplo.",
    resume:
      "Na elaboração do currículo, sugere-se que esta habilidade seja vinculada a projetos interdisciplinares, como os de intervenção social, que também mobilizam habilidades do campo da vida pública (no estudo da questão problema/tema, caso ela envolva o conhecimento de normas e leis, por exemplo) e de práticas de estudo e pesquisa (como a realização de enquetes para coletar dados a serem tratados e usados na formulação de argumentos para apoiar uma posição assumida). Pode também ser mobilizada em um debate deliberativo sobre alguma questão do convívio escolar e associada às habilidades próprias de situações orais como essa, que implicam tomada de notas, uso de recursos de entonação, ritmo, expressão facial e corporal etc. Nos currículos locais, para motivar o engajamento do adolescente pode ser prevista uma progressão que, inicialmente, mobilize os alunos para problemas do seu entorno imediato — turma, escola, comunidade, bairro, cidade — passando para problemas da natureza mais ampla, mas que, ainda assim, guardem relação com questões locais. Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF69AR15), (EF69AR33), da Arte; e (EF67EF17), da Educação Física, no que se refere à compreensão crítica de diferentes pontos de vista sobre temas controversos e de relevância social.",
  },
  {
    id: "EF69LP15",
    competences: "LP",
    group_years: "69",
    field: "06",
    unit: "LP04",
    object:
      "Participação em discussões orais de temas controversos de interesse da turma e/ou de relevância social",
    skill: "EF69LP15",
    comment:
      "Esta habilidade refere-se à participação dos alunos em discussões de temas controversos que sejam de seu interesse e/ou tenham relevância social. Essa habilidade se articula com habilidades do campo da vida pública e também das práticas de estudo e pesquisa, visto que conduz os alunos a se inteirar de problemas e temas de seu entorno imediato e mediato, investigá-los para compreendê-los e tomar uma posição em discussões a respeito. Também é conexa a habilidades de identificação e análise dos movimentos argumentativos que se pode adotar em uma situação de argumentação (sustentar, refutar, negociar), dos tipos de argumentação (exemplificação, autoridade etc.) e dos recursos linguísticos usados na apresentação e articulação desses argumentos, bem como de modos de participação respeitosa e ética, em situações de debate.",
    resume:
      "Na elaboração do currículo, sugere-se que esta habilidade seja vinculada a projetos interdisciplinares, como os de intervenção social, que também mobilizam habilidades do campo da vida pública (no estudo da questão problema/tema, caso ela envolva o conhecimento de normas e leis, por exemplo) e de práticas de estudo e pesquisa (como a realização de enquetes para coletar dados a serem tratados e usados na formulação de argumentos para apoiar uma posição assumida). Pode também ser mobilizada em um debate deliberativo sobre alguma questão do convívio escolar e associada às habilidades próprias de situações orais como essa, que implicam tomada de notas, uso de recursos de entonação, ritmo, expressão facial e corporal etc. Nos currículos locais, para motivar o engajamento do adolescente pode ser prevista uma progressão que, inicialmente, mobilize os alunos para problemas do seu entorno imediato — turma, escola, comunidade, bairro, cidade — passando para problemas da natureza mais ampla, mas que, ainda assim, guardem relação com questões locais. Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF69AR15), (EF69AR33), da Arte; e (EF67EF17), da Educação Física, no que se refere à compreensão crítica de diferentes pontos de vista sobre temas controversos e de relevância social.",
  },
  {
    id: "EF69LP16",
    competences: "LP",
    group_years: "69",
    field: "06",
    unit: "LP08",
    object: "Construção composicional",
    skill: "EF69LP16",
    comment:
      "O foco desta habilidade está no estudo da forma de composição dos gêneros jornalísticos narrativos e argumentativos, assim como de entrevistas. Implica relacionar as formas de composição do gênero mencionadas na habilidade às especificidades do campo de atuação em que circulam, assim como aos temas e finalidades dos gêneros e às peculiaridades da mídia em que são publicadas.",
    resume:
      "Na elaboração do currículo, recomenda-se propor, ao longo dos anos, um estudo baseado na comparação entre textos do mesmo gênero e de gêneros distintos. No primeiro caso, a intenção é propiciar a compreensão do que é típico do gênero em estudo. No segundo,  pretende-se o estabelecimento de semelhanças, o que permite tanto a reiteração das características identificadas no momento anterior, quanto o reconhecimento de características específicas, o que remete às possibilidades linguístico-textuais e ao estilo do autor. O desenvolvimento da habilidade requer práticas de leitura, produção e análise de textos, nas quais seja possível relacionar as formas de composição do gênero mencionadas às especificidades do campo de atuação em que circulam,  aos temas e finalidades dos gêneros e às peculiaridades da mídia em que são publicadas. A progressão pode se dar tanto pelo modo de tratamento do conteúdo (por frequentação ou para aprofundamento) quanto pela complexidade dos textos previstos para as práticas de leitura e produção. Sugere-se um trabalho colaborativo (coletivo mediado pelo professor, e em grupo/duplas), que progrida para o autônomo.",
  },
  {
    id: "EF69LP17",
    competences: "LP",
    group_years: "69",
    field: "06",
    unit: "LP08",
    object: "Estilo",
    skill: "EF69LP17",
    comment:
      "Esta é uma habilidade bastante complexa, cujo foco são as características, o funcionamento e os recursos — linguísticos e semióticos — próprios de gêneros jornalísticos narrativos e argumentativos. Envolve, ainda, duas operações distintas e sucessivas: perceber e analisar os efeitos de sentido produzidos pelos recursos linguísticos e semióticos mencionados, assim como pelas estratégias persuasivas em jogo, de modo que se possa identificar intencionalidades variadas presentes em textos desses gêneros.",
    resume:
      "Na elaboração do currículo, convém que o desenvolvimento da atividade venha sempre associado a práticas de leitura e/ou produção de textos dos gêneros jornalísticos e publicitários previstos. É possível desmembrar a habilidade, ainda, nas duas operações implicadas (perceber/analisar), assim como nos gêneros (jornalísticos/publicitários) e/ou nos recursos linguísticos e semióticos neles envolvidos. O desenvolvimento desta habilidade só pode se fazer, de forma adequada, no interior de atividades de leitura e/ou produção de textos desses gêneros, planejadas de forma a garantir que todos os vetores referidos estejam não só contemplados, mas articulados entre si. Esses mesmos fatores podem pautar a progressão curricular, combinados com outros, como o grau de complexidade dos gêneros e textos programados e o grau de autonomia que se pretende levar o aluno a atingir em cada etapa. A sistematização e o ensino da terminologia técnica só são recomendados se ocorrerem depois da compreensão do aspecto estudado.",
  },
  {
    id: "EF69LP18",
    competences: "LP",
    group_years: "69",
    field: "06",
    unit: "LP08",
    object: "Estilo",
    skill: "EF69LP18",
    comment:
      'A habilidade envolve o uso de recursos textuais que estabeleçam relações adequadas entre as partes do texto, de modo a conferir-lhe legibilidade e tratamento adequado do conteúdo (discussão da questão polêmica, posicionamento assumido e razões apresentadas para tanto). Esta habilidade é necessária para estabelecer-se a progressão e a unidade temática — o "fio da meada" — do texto, assim como sua coesão e coerência.',
    resume:
      'Na elaboração do currículo, é importante prever situações de revisão processual e final do texto, para avaliar: (a) se as expressões utilizadas para ligar trechos do texto garantem o estabelecimento das relações necessárias para a compreensão adequada do que se quer dizer; (b) se a progressão das ideias garante que não se perca o "fio da meada" do conteúdo temático. A progressão pode se dar pela complexidade do texto e do gênero, pelo grau de autonomia do aluno ao realizar a atividade e, especialmente por se tratar de habilidade que abrange do 6º ao 9º ano, pelo tratamento dado ao conteúdo, que pode ser por frequentação ou para aprofundamento.',
  },
  {
    id: "EF69LP19",
    competences: "LP",
    group_years: "69",
    field: "06",
    unit: "LP08",
    object: "Efeito de sentido",
    skill: "EF69LP19",
    comment:
      "Trata-se de habilidade que consiste em analisar os recursos típicos da fala do ponto de vista dos efeitos de sentido que, em uma dada situação comunicativa, podem provocar sobre a argumentação pretendida. Requer a observação dos recursos linguísticos em jogo e dos efeitos de sentido que produzem em diferentes situações de comunicação.",
    resume:
      "Na elaboração do currículo, é interessante considerar que o estudo do discurso oral implica a criação de condições que o possibilitem, como: gravações em vídeo para serem analisadas; discussão coletiva a respeito das impressões de cada aluno a respeito dos efeitos de sentido produzidos pelos elementos empregados na fala; participação em situações comunicativas orais diversas, com o intuito de estudar a performance do enunciador. A progressão pode se dar: (a) pela complexidade do texto e do gênero; (b) pelo grau de autonomia do aluno ao realizar as atividades; (c) pelo tratamento dado ao conteúdo, que pode ser por frequentação ou para aprofundamento.",
  },
  {
    id: "EF69LP20",
    competences: "LP",
    group_years: "69",
    field: "03",
    unit: "LP07",
    object:
      "Reconstrução das condições de produção e circulação e adequação do texto à construção composicional e ao estilo de gênero\n(Lei, código, estatuto, código, regimento etc.)",
    skill: "EF69LP20",
    comment:
      "Esta habilidade refere-se ao reconhecimento das especificidades dos textos normativos e legais, marcados por um conteúdo de caráter coercitivo ou normativo: como se organizam? que recursos linguísticos são comuns nesses gêneros de textos? Além da presença de verbos no imperativo, advérbios ou locuções, pode ser observado o uso de verbos e substantivos que trazem uma carga semântica com esse caráter, como dever/poder/ser, obrigação/direito/garantia etc.",
    resume:
      "Na elaboração do currículo, é necessário considerar que, para desenvolver esta habilidade, é importante reconhecer as especificidades da esfera jurídica em que os textos mencionados são produzidos e circulam. Seria pertinente prever, ao longo de todo o segundo segmento, um estudo sistemático e progressivo sobre o campo da vida pública: Quem são os atores envolvidos? Quais os interesses dessa esfera? Que gêneros do discurso são produzidos nessa esfera? Quais suas finalidades de contratos, leis, regulamentos, estatutos, autorização de funcionamento, medida provisória, editais, dentre outros gêneros? De modo geral, são gêneros que normatizam e regulamentam direitos e deveres do cidadão nos mais variados papéis sociais e saber ler esses textos é fundamental para a vida pública.",
  },
  {
    id: "EF69LP21",
    competences: "LP",
    group_years: "69",
    field: "03",
    unit: "LP07",
    object: "Apreciação e réplica",
    skill: "EF69LP21",
    comment:
      "Esta habilidade supõe um trabalho de reconhecimento dessas práticas no entorno, na região e/ou em localidades remotas, bem como de análise das suas especificidades por meio do estudo dos recursos das diferentes linguagens em que se constituem os gêneros envolvidos, o que dará subsídios ao aluno para formar opiniões sobre seus conteúdos. Por exemplo: o grafitar, como uma prática de letramento, se caracteriza pelo quê? Que recursos utiliza e como pode usá-los para fazer a crítica?",
    resume:
      "Na elaboração do currículo, é necessário considerar que o desenvolvimento dessa habilidade pode favorecer a participação dos jovens em movimentos de bairros, centros culturais comunitários etc., que promovem práticas culturais locais que se constituem como formas de resistência e de defesa de direitos de diferentes naturezas. Exemplos dessas manifestações são os saraus, as rodas de rap ou as batalhas de slam que acontecem nas periferias, cujo objetivo é promover o direito à cultura, em que se leem poemas, crônicas e se cantam raps de autoria, com conteúdos críticos em relação a algum aspecto da realidade. É recomendável que a escola acolha, problematize e legitime essas práticas e favoreça o empoderamento dos jovens para uma atuação cada vez mais qualificada.",
  },
  {
    id: "EF69LP22",
    competences: "LP",
    group_years: "69",
    field: "03",
    unit: "LP09",
    object: "Textualização, revisão e edição",
    skill: "EF69LP22",
    comment:
      "Relacionada às habilidades (EF67LP19) e (EF89LP21), esta habilidade se refere à realização de uma investigação das necessidades da escola e/ou da comunidade para levantamento de questões, prioridades e problemas relevantes que levarão à produção colaborativa de textos reivindicatórios. Essa investigação fornecerá elementos para planejar ações e dará contexto para as produções de textos. As habilidades relativas à produção de textos argumentativos também são mobilizadas.",
    resume:
      "Na elaboração do currículo, pode-se considerar que a prática de reivindicar direitos ou propor soluções para problemas favorece o engajamento dos/as alunos/as em questões de interesse público, em especial do seu entorno imediato. A implantação de projetos de intervenção pode favorecer essa prática e possibilita o desenvolvimento dessa habilidade em contextos significativos para os/as alunos/as. Projetos que integrem as diferentes áreas mobilizam uma gama de conhecimentos e habilidades, potencializando aprendizagens. Como já sinalizado em outros momentos, garantir tempos e espaços para o planejamento integrado é uma forma de viabilizar a elaboração de projetos dessa natureza. Do ponto de vista didático, é indicado que os currículos contemplem um estudo das principais características dos gêneros selecionados.",
  },
  {
    id: "EF69LP23",
    competences: "LP",
    group_years: "69",
    field: "03",
    unit: "LP09",
    object: "Textualização, revisão e edição",
    skill: "EF69LP23",
    comment:
      "Esta habilidade supõe a escrita colaborativa de textos normativos diretamente relacionados às práticas escolares, com seus atores previstos. Escritas dessa natureza implicam uma atuação protagonista dos/as alunos/as na apropriação do espaço escolar em diferentes dimensões e favorecem uma participação que envolve direitos e responsabilidades.",
    resume:
      "Na elaboração do currículo, recomenda-se incorporar práticas como assembleias de alunos com caráter deliberativo e formação de grupos de trabalho para organização de eventos, como os citados na descrição das habilidades. Essas práticas também favorecem vivências de leitura e de produção de textos variados, como atas de reunião, estatutos e regulamentos.Do ponto de vista didático, é indicado que os currículos contemplem um estudo das principais características dos gêneros selecionados. Há, ainda, oportunidade de trabalho interdisciplinar com a habilidade (EF67EF09), da Educação Física, no que se refere à compreensão e contribuição com textos normativos e regramentos de convívio que viabilizem a participação de todos na prática de exercícios físicos.",
  },
  {
    id: "EF69LP24",
    competences: "LP",
    group_years: "69",
    field: "03",
    unit: "LP04",
    object: "Discussão oral",
    skill: "EF69LP24",
    comment:
      "Esta habilidade supõe a participação em situações (como discussões coletivas e em grupos, debates) em que esteja em foco analisar casos sob a ótica da legalidade e do direito. É pressuposto dessas situações o conhecimento e a compreensão de textos legais e normativos que servirão tanto para analisar o caso quanto para elaborar argumentos sólidos que apoiem a sua análise.",
    resume:
      "Na elaboração do currículo, recomenda-se que todas as situações de interação oral nesse campo (vida pública) sejam vinculadas a projetos interdisciplinares, para garantir a abordagem de maior número de documentos normativos e reguladores. Diante da lista aberta desses documentos, é possível propor projetos diferenciados para cada ano. Por exemplo, em uma discussão sobre meio ambiente e consumismo, pode-se propor a análise de uma propaganda, associando-a à leitura do Código Nacional do Consumidores, ao ECA e ao Código Brasileiro de Auto-regulamentação Publicitária. Propor exercícios de retextualização desses textos, como a reescrita de um artigo de lei em linguagem informal, pode colaborar para a  interpretação deles. É recomendável que o ECA seja um documento revisitado ao longo dos quatro anos, dada a sua relevância. Há, ainda, oportunidade de trabalho interdisciplinar com a habilidade (EF67EF09), da Educação Física, no que se refere à compreensão e contribuição com textos normativos e regramentos de convívio que viabilizam a participação de todos na prática de exercícios físicos.",
  },
  {
    id: "EF69LP25",
    competences: "LP",
    group_years: "69",
    field: "03",
    unit: "LP04",
    object: "Discussão oral",
    skill: "EF69LP25",
    comment:
      "Esta habilidade supõe a participação em diferentes situações orais, em que se  espera o posicionamento crítico em relação à questão em foco. O uso de recursos linguísticos e semióticos (outras linguagens), como de palavras que explicitam a posição assumida (se de oposição ou negociação, por exemplo) e o uso de entonação que deixe em evidência a apreciação do falante em relação ao que é dito são algumas das competências mobilizadas.",
    resume:
      "Na elaboração do currículo, é interessante considerar que, em participações face a face ou a distância, mediadas pela tecnologia, em situações variadas, como discussões, participação em debates, palestras e reuniões, enquanto o outro fala, quem está na escuta analisa o que é dito e planeja uma resposta imediata. Articular essa habilidade com as que sugerem o procedimento de tomada de notas, começando por fazê-lo com material gravado, que pode ser revisto indefinidamente, para depois fazê-lo no ato da interação, favorecerá uma resposta mais qualificada de quem escuta.",
  },
  {
    id: "EF69LP26",
    competences: "LP",
    group_years: "69",
    field: "03",
    unit: "LP04",
    object: "Registro",
    skill: "EF69LP26",
    comment:
      "Esta habilidade supõe o trabalho com a tomada de notas para diferentes fins: (1) para alimentar outras produções escritas com a finalidade de documentar processos e resultados de reuniões, tais como atas e notas de reunião; (2) para registro pessoal, visando a reflexão sobre o registrado; (3) como apoio à fala durante a participação em situações orais como discussões, debates, seminários.",
    resume:
      "Na elaboração do currículo, é válido levar em consideração que a tomada de notas como registro é considerada um gênero de apoio à compreensão do ouvido, assistido. Como procedimento, está vinculada a diferentes situações, em qualquer campo de atuação. É comum em práticas como debates, palestras, reuniões, aulas e suas variantes em outras mídias. Supõe a capacidade de identificar informações relevantes e sintetizá-las em notas, de modo coerente, garantindo a possibilidade de retomada das ideias pelo(a) seu(sua) autor(a). Pode ser proposta uma progressão que indique tanto a variação dos objetivos da tomada de notas, quanto a situação em que ela é solicitada — se a partir de materiais gravados ou se durante as interações (reuniões, aula etc.).",
  },
  {
    id: "EF69LP27",
    competences: "LP",
    group_years: "69",
    field: "03",
    unit: "LP08",
    object:
      "Análise de textos legais/normativos, propositivos e reivindicatórios",
    skill: "EF69LP27",
    comment:
      "Trata-se de habilidade de leitura para estudo das especificidades dos textos normativos jurídicos e reivindicatórios, visando à produção de textos dessa natureza, essenciais para a vida pública, especialmente em situações de defesa ou de debates sobre direitos do cidadão. Supõe-se o estudo desses gêneros no que diz respeito ao conteúdo — como pode se organizar e ser construído com os recursos linguísticos adequados, tendo em vista os objetivos pretendidos.",
    resume:
      "Na elaboração do currículo, é recomendável que o desenvolvimento de leitura e produção de textos dessa natureza tenha como contexto inicial as produções e questões locais. Já que esta habilidade é proposta para todos os anos, é possível, por exemplo, prever uma progressão para que a cada ano se abordem programas políticos de uma esfera diferente. Também para os textos reivindicatórios, é possível selecionar um gênero para cada ano, procurando articulá-los aos textos normativos jurídicos  trabalhados. Por exemplo, a petição pode estar associada a um trabalho com propostas e programas políticos de partidos que estão no poder: depois de analisar um programa político, pode-se chegar à constatação de que é necessário organizar uma petição pública para exercer pressão junto aos governantes quanto a alguma ação prometida e não cumprida, de acordo com o programa político. Cabe enfatizar, ainda, que a natureza dos textos reivindicatórios mobilizará habilidades propostas no campo jornalístico/midiático, visto que esses textos supõem o uso da argumentação.",
  },
  {
    id: "EF69LP28",
    competences: "LP",
    group_years: "69",
    field: "03",
    unit: "LP08",
    object: "Modalização",
    skill: "EF69LP28",
    comment:
      'Esta habilidade amplia a (EF89LP16). Além de identificar recursos empregados em textos dos gêneros citados que representam valores e posições, abrange modalidades deônticas, como "É proibido pisar na grama", "Saia, agora!", "Se quiser, pode usar o meu carro".  Envolve reconhecer os recursos linguísticos empregados nesses casos, compreender os efeitos de sentido produzidos por eles e analisar a coerência desses efeitos tanto com as intenções de significação pretendidas, quanto com a especificidade do gênero, considerando o campo de atuação, finalidade e espaço de circulação.',
    resume:
      "Na elaboração do currículo, tal como apontado para a habilidade (EF89LP16), sugere-se que o desenvolvimento se dê tanto por meio da leitura de estudo, quanto das atividades de revisão. A progressão pode se dar: (a) pela complexidade do texto e do gênero; (b) pelo tipo de tratamento didático — por frequentação (aos gêneros/textos) ou para aprofundamento; (c) pelo grau de autonomia do aluno (em colaboração — coletiva, em grupos, em duplas — e de modo autônomo); (d) e, especialmente por se tratar de habilidade que abrange do 6º ao 9º ano, pelo tratamento dado ao conteúdo — mais ou menos complexo, mais ou menos aprofundado, mais ou menos implicado à realidade cotidiana do aluno. Há, aqui, oportunidade de trabalho interdisciplinar com a habilidade (EF67EF09), da Educação Física, no que se refere a compreensão e contribuição com textos normativos e regramentos de convívio que viabilizem a participação de todos na prática de exercícios físicos.",
  },
  {
    id: "EF69LP29",
    competences: "LP",
    group_years: "69",
    field: "04",
    unit: "LP07",
    object:
      "Reconstrução das condições de produção e recepção dos textos e adequação do texto à construção composicional e ao estilo de gênero",
    skill: "EF69LP29",
    comment:
      "Esta habilidade promove o desenvolvimento de capacidades de leitura relativas à compreensão e apreciação dos textos, considerando o contexto de produção de textos de divulgação científica: interlocutores envolvidos, intencionalidades relativas ao gênero selecionado e apreciações implícitas e explícitas sobre o tema tratado, observáveis pela análise dos recursos das linguagens utilizadas. Esta habilidade favorece habilidades de produção de textos dessa esfera.",
    resume:
      "Na elaboração do currículo, para desenvolver esta habilidade, é altamente recomendável envolver diferentes áreas de conhecimento, uma vez que cada uma delas possui terminologia e recursos linguísticos próprios. Ler um infográfico de uma reportagem sobre uma descoberta arqueológica, por exemplo, é diferente de ler um texto do mesmo gênero sobre a variação do IDH ou do custo de vida de uma determinada localidade ao longo de um período específico. O fato de a natureza dos conhecimentos ser diversa, no exercício de uma inferência, por exemplo, leva o aluno a analisar (na leitura) ou mobilizar (na produção) recursos de linguagens comumente usados nas diferentes áreas de conhecimentos.",
  },
  {
    id: "EF69LP30",
    competences: "LP",
    group_years: "69",
    field: "04",
    unit: "LP07",
    object: "Relação entre textos",
    skill: "EF69LP30",
    comment:
      "A habilidade implica mobilizar/desenvolver estratégias e ferramentas de curadoria: busca e seleção de fontes confiáveis, uso de recursos de apoio à compreensão — como tomada de notas, produção de esquemas etc. —, bem como análise das informações e generalizações, visando à formulação de apreciações éticas e estéticas expressas em textos de gêneros diversos (comentários, reportagens de divulgação, resenhas críticas etc.).",
    resume:
      "Na elaboração do currículo, é importante considerar que, no campo das práticas de estudo e pesquisa, comparar informações entre diferentes fontes é essencial para o desenvolvimento das diversas dimensões do pensamento científico. O trabalho com projetos integrados interdisciplinares poderá potencializar o desenvolvimento dessas dimensões. É possível propor a progressão no grau de ajuda dada pelo professor (com vistas à construção da autonomia do aluno) e na complexidade do que comparar (quantidade e tipos de fontes, tipos de gêneros a comparar — dos predominantemente verbais aos multimidiáticos), que procedimentos, estratégias e ferramentas usar, considerando os gêneros selecionados para o ano, e em que gêneros os alunos tecerão suas apreciações a cada ano.",
  },
  {
    id: "EF69LP31",
    competences: "LP",
    group_years: "69",
    field: "04",
    unit: "LP07",
    object: "Apreciação e réplica",
    skill: "EF69LP31",
    comment:
      "A observação das pistas linguísticas referidas na habilidade pode favorecer a percepção das informações, ideias e/ou argumentos que o autor considera mais relevantes, bem como a identificação de ideias centrais e periféricas, orientando na produção de resumos, esquemas, gráficos etc.",
    resume:
      "Na elaboração do currículo, é necessário considerar que, embora esta habilidade figure no campo das práticas de estudo e pesquisa, na BNCC, também é requerida na leitura de textos de outros campos, em especial os dissertativo-argumentativos. Nesse sentido, pode-se propor o seu desenvolvimento do sexto ao nono ano. A articulação com a leitura de gêneros e textos de graus crescentes de complexidade pode ser um bom critério para a progressão curricular.",
  },
  {
    id: "EF69LP32",
    competences: "LP",
    group_years: "69",
    field: "04",
    unit: "LP07",
    object:
      "Estratégias e procedimentos de leitura Relação do verbal com outras semioses\nProcedimentos e gêneros de apoio à compreensão",
    skill: "EF69LP32",
    comment:
      "A habilidade implica mobilizar/desenvolver estratégias e ferramentas de curadoria: busca e seleção de fontes confiáveis, uso de recursos de apoio à compreensão — como tomada de notas, produção de esquemas etc. —, bem como análise das informações e generalizações, visando à formulação de apreciações éticas e estéticas expressas em textos de gêneros diversos (comentários, reportagens de divulgação, resenhas críticas etc.).",
    resume:
      "Na elaboração do currículo, é importante levar em conta que, no campo das práticas de estudo e pesquisa, comparar informações entre diferentes fontes é essencial para o desenvolvimento das diversas dimensões do pensamento científico. O trabalho com projetos integrados interdisciplinares poderá potencializar o desenvolvimento dessas dimensões. É possível prever a progressão no grau de ajuda dada pelo professor (com vistas à construção da autonomia do aluno) e na complexidade do que comparar (quantidade e tipos de fontes, tipos de gêneros a comparar — dos predominantemente verbais aos multimidiáticos), que procedimentos, estratégias e ferramentas usar, considerando os gêneros selecionados para o ano, e em que gêneros os alunos tecerão suas apreciações a cada ano.Há, aqui, oportunidade para o trabalho interdisciplinar com a habilidade (EF06LI09), no que se refere a identificar informações precisas em textos.",
  },
  {
    id: "EF69LP33",
    competences: "LP",
    group_years: "69",
    field: "04",
    unit: "LP07",
    object:
      "Estratégias e procedimentos de leitura Relação do verbal com outras semioses\nProcedimentos e gêneros de apoio à compreensão",
    skill: "EF69LP33",
    comment:
      'Esta habilidade supõe relacionar as partes verbais (texto verbal), não-verbais (imagens) e híbridas (imagens e textos verbais de um infográfico, por exemplo) que compõem um texto de divulgação, identificando a relação de sentidos que estabelecem entre as partes. Um gráfico, por exemplo, pode complementar uma informação dada pelo texto escrito, ou um esquema ou uma ilustração podem exemplificar a informação verbal. Também supõe o uso dessas linguagens não-verbais como formas de "retextualizar" o dito verbalmente. Ou seja, sugere um trabalho em que o aluno "transforme" em gráfico, por exemplo, um texto verbal e vice-versa, o que possibilita se apropriar de diferentes formas de dizer o que pretende recorrendo a diferentes linguagens.',
    resume:
      "Na elaboração do currículo, é recomendável propor uma progressão para estudo das formas de retextualizar, definindo, por exemplo a retextualização de tabelas e gráficos simples, para depois passar para gráficos e infográficos mais complexos. Pode-se iniciar com exercícios pequenos de retextualização de tabelas e depois de infográficos simples que compõem reportagens de divulgação para textos escritos, de modo a integrá-los na reportagem apenas na linguagem verbal e vice-versa. Esse exercício pode ir se complexificando ao longo dos anos, tanto em relação à quantidade de informação concentrada em um infográfico quanto na complexidade dos textos selecionados para a leitura. Como se trata de lidar com textos de divulgação científica, um desenvolvimento articulado com as diferentes áreas de conhecimento pode potencializar as aprendizagens do aluno.",
  },
  {
    id: "EF69LP34",
    competences: "LP",
    group_years: "69",
    field: "04",
    unit: "LP07",
    object:
      "Estratégias e procedimentos de leitura Relação do verbal com outras semioses\nProcedimentos e gêneros de apoio à compreensão",
    skill: "EF69LP34",
    comment:
      'Esta habilidade refere-se ao uso de estratégias e procedimentos envolvidos na leitura para estudo (grifar, anotar nas margens etc.) que se desdobram na produção de diferentes tipos de textos, conhecidos na área como "gêneros de apoio à compreensão" (resumos, quadros, esquemas, resenhas, paráfrases etc.). As operações envolvidas na produção de um resumo a partir de uma artigo científico, por exemplo, são resultado de um exercício de retextualização.',
    resume:
      "Na elaboração do currículo, é recomendável propor uma progressão tanto para o ensino e a aprendizagem de procedimentos de leitura para estudo e das formas de retextualizar o que se lê (com a produção dos gêneros de apoio à compreensão) quanto para a complexidade dos textos selecionados para a leitura.",
  },
  {
    id: "EF69LP35",
    competences: "LP",
    group_years: "69",
    field: "04",
    unit: "LP09",
    object:
      "Consideração das condições de produção de textos de divulgação científica \nEstratégias de escrita",
    skill: "EF69LP35",
    comment:
      "Esta habilidade se refere ao planejamento da produção de textos como um processo que envolve etapas diferentes: definir contexto de produção, planejar, produzir e revisar. Mobiliza variadas habilidades, como (1) as relativas à curadoria de informação e produção de roteiros e enquetes para pesquisa, considerando o contexto de produção definido, na fase de planejamento; e (2) as habilidades voltadas à aplicação dos recursos linguísticos e semióticos, na elaboração e revisão dos gêneros, considerando as especificidades dos textos de divulgação científica. Propõe projetos interdisciplinares.",
    resume:
      "Na elaboração do currículo, a progressão de gêneros poderá ser horizontal ou vertical, observando o grau de complexidade que pode estar relacionado (1) ao nível de aprofundamento da pesquisa, com busca de mais ou menos fontes para um tratamento do objeto de uma ou de diferentes perspectivas e uso de mais gêneros de apoio (entrevistas, roteiros etc.); (2) à quantidade de linguagens usadas na produção de sentidos. Por exemplo, na hipótese de uma progressão na vertical, pode-se eleger a reportagem de divulgação científica como um gênero a ser trabalhado no 8º e 9º anos, optando por uma produção impressa e/ou televisiva no 8º ano e uma produção para o ambiente virtual, com hiperlinks e infográficos com algum grau de interatividade, no 9º.",
  },
  {
    id: "EF69LP36",
    competences: "LP",
    group_years: "69",
    field: "04",
    unit: "LP09",
    object: "Estratégias de escrita: textualização, revisão e edição",
    skill: "EF69LP36",
    comment:
      "Esta habilidade se refere à produção de textos como um processo que envolve etapas diferentes: definir contexto de produção, planejar, produzir e revisar. Mobiliza variadas habilidades, como (1) as relativas à curadoria de informação e produção de roteiros e enquetes para pesquisa, considerando o contexto de produção definido, na fase de planejamento; e (2) as habilidades voltadas à aplicação dos recursos linguísticos e semióticos, na elaboração e revisão dos gêneros, considerando as especificidades dos textos de divulgação científica. Propõe projetos interdisciplinares.",
    resume:
      "Na elaboração do currículo, a progressão de gêneros poderá ser horizontal ou vertical, observando o grau de complexidade que pode estar relacionado (1) ao nível de aprofundamento da pesquisa, com busca de mais ou menos fontes para um tratamento do objeto de uma ou de diferentes perspectivas e uso de mais gêneros de apoio (entrevistas, roteiros etc.); (2) à quantidade de linguagens usadas na produção de sentidos. Por exemplo, na hipótese de uma progressão na vertical, pode-se eleger a reportagem de divulgação científica como um gênero a ser trabalhado no 8º e 9º anos, optando por uma produção impressa e/ou televisiva, no 8º ano, e uma produção para o ambiente virtual, com hiperlinks e infográficos com algum grau de interatividade, no 9º. Do ponto de vista didático, é indicado que os currículos contemplem um estudo das principais características dos gêneros selecionados.",
  },
  {
    id: "EF69LP37",
    competences: "LP",
    group_years: "69",
    field: "04",
    unit: "LP09",
    object: "Estratégias de produção",
    skill: "EF69LP37",
    comment:
      "Esta habilidade se refere à produção de textos como um processo que envolve etapas diferentes: definir contexto de produção, planejar, produzir e revisar. Mobiliza variadas habilidades, como (1) as relativas à curadoria de informação e produção de roteiros e enquetes para pesquisa, considerando o contexto de produção definido, na fase de planejamento; e (2) as habilidades voltadas à aplicação dos recursos linguísticos e semióticos, na elaboração e revisão dos gêneros. Propõe projetos interdisciplinares.",
    resume:
      "Na elaboração do currículo, a progressão de gêneros poderá ser horizontal ou vertical, observando o grau de complexidade que pode estar relacionado (1) ao nível de aprofundamento da pesquisa, com busca de mais ou menos fontes para um tratamento do objeto de uma ou de diferentes perspectivas e uso de mais gêneros de apoio (entrevistas, roteiros etc.); (2) à quantidade de linguagens usadas na produção de sentidos. Por exemplo, na hipótese de uma progressão na vertical, pode-se eleger a reportagem de divulgação científica como um gênero a ser trabalhado no 8º e 9º anos, optando por uma produção impressa e/ou televisiva, no 8º ano, e uma produção para o ambiente virtual, com hiperlinks e infográficos com algum grau de interatividade, no 9º. Do ponto de vista didático, é indicado que os currículos contemplem um estudo das principais características dos gêneros selecionados.",
  },
  {
    id: "EF69LP38",
    competences: "LP",
    group_years: "69",
    field: "04",
    unit: "LP04",
    object:
      "Estratégias de produção: planejamento e produção de apresentações orais",
    skill: "EF69LP38",
    comment:
      "Esta habilidade refere-se especificamente às etapas de planejamento, elaboração/preparação e realização de apresentações orais resultantes de pesquisas realizadas. Dá ênfase ao preparo do falante, em relação aos materiais que poderão funcionar como um apoio à audiência e/ou ao falante/apresentador, ajudando-o no encadeamento das ideias durante a realização da apresentação. Aprendizagens para o uso de aplicativos de apresentação devem ser previstas.",
    resume:
      "Na elaboração do currículo, é interessante lembrar que é parte do preparo de uma apresentação oral um ensaio com apoio do material preparado, de modo que o apresentador tenha ideia do tempo que gastará e dos recursos linguísticos e semióticos que usará em sua fala (como vai iniciar, como introduzirá cada dado, como finalizará, qual o ritmo e as entonações adequadas para prender a atenção da audiência, como se movimentará etc.). Na progressão, podem ser propostas apresentações iniciais breves, com apoio de texto a ser consultado/lido, até chegar às apresentações mais longas e elaboradas, com material de apoio à audiência mais sofisticado (com infográficos, vídeos etc.), com fala apoiada apenas no material oferecido à audiência, sem leitura da exposição, e, ainda, com previsão de participação da audiência/do público.",
  },
  {
    id: "EF69LP39",
    competences: "LP",
    group_years: "69",
    field: "04",
    unit: "LP04",
    object: "Estratégias de produção",
    skill: "EF69LP39",
    comment:
      "No contexto desta habilidade, diferentemente do que se verifica no campo jornalístico/midiático, a entrevista é mais um meio do que um fim. Nesse campo, em geral, o objetivo é usá-la como um instrumento para coletar dados no interior de uma pesquisa. Esse tipo de entrevista também envolve as etapas de planejamento (seleção de fato/assunto, escolha do gênero, curadoria de informação, elaboração de perguntas etc.) e de realização da entrevista.",
    resume:
      "Na elaboração do currículo, a progressão para o trabalho com as entrevistas, nos quatro anos, pode partir da definição de habilidades diferentes, começando por entrevistas com um profissional, para conhecer melhor o seu campo de atuação, numa apresentação para os colegas sobre a profissão do entrevistado, até chegar a entrevistas para coletar dados de um determinado grupo social, por meio da elaboração de enquetes (cujos resultados serão organizados em tabelas ou gráficos) ou roteiros mais elaborados que poderão fazer parte de artigos de divulgação, seminários etc. Vale ressaltar a importância de propor exercícios que simulem situações de entrevista em que os alunos sejam solicitados a propor novas perguntas a partir das respostas dadas, o que pode significar um material final mais rico. Há, aqui, oportunidade de trabalho interdisciplinar com a habilidade (EF07LI02), da Língua Inglesa, no que se refere à condução de entrevistas.",
  },
  {
    id: "EF69LP40",
    competences: "LP",
    group_years: "69",
    field: "04",
    unit: "LP08",
    object:
      "Construção composicional \nElementos paralinguísticos e cinésicos Apresentações orais",
    skill: "EF69LP40",
    comment:
      "O foco desta habilidade é a capacidade de analisar a construção composicional de gêneros de apresentação oral formal, com vistas à utilização desse conhecimento em apresentações próprias no campo da divulgação de conhecimento. Isso implica observação, reflexão e análise da organização geral de seminários, palestras ou conferências, tanto do ponto de vista linguístico quanto paralinguístico.",
    resume:
      "Na elaboração do currículo, convém que o desenvolvimento desta habilidade, ao longo dos quatro anos em jogo, venha sempre associado ao uso de gravações de eventos como os mencionados. Recomenda-se que as atividades propostas: (a) articulem o estudo dos diferentes aspectos da construção composicional desses gêneros com sua adequação às intenções de significação em foco e à necessidade de compreensão do interlocutor; (b) prevejam e orientem as estratégias e técnicas de escuta atenta e de tomada de notas, necessárias à compreensão desses gêneros e à interação entre apresentador e ouvintes; (c) recomendem o uso da metalinguagem correspondente apenas depois de realizadas as atividades de compreensão, observação e análise. A progressão, tanto vertical quanto horizontal, pode tomar como critérios: (a) os diferentes elementos da construção composicional a serem estudados a cada momento; (b) a sequenciação entre escuta atenta, de um lado, e a análise de algum aspecto da construção composicional; (c) o grau de complexidade do gênero ou texto a ser analisado; (d) o nível de autonomia a ser conquistado pelo aluno a cada etapa.",
  },
  {
    id: "EF69LP41",
    competences: "LP",
    group_years: "69",
    field: "04",
    unit: "LP08",
    object: "Usar adequadamente ferramentas de apoio a apresentações orais",
    skill: "EF69LP41",
    comment:
      "Diretamente relacionada ao letramento digital e articulando oralidade e escrita, esta habilidade refere-se, fundamentalmente, ao emprego de aplicativos, como Powerpoint e Prezi, como suporte de apresentações orais (com textos condensados e em tópicos, imagens, gráficos, tabelas etc.) de estudos realizados nos diferentes componentes, por meio de práticas de apresentação oral que demandem o uso desses recursos.",
    resume:
      "Na elaboração do currículo, convém programar, para todos os anos, atividades de apresentação oral que envolvam o uso das ferramentas em foco. É importante que as ferramentas sejam utilizadas como recurso orientador da apresentação e não como simples reprodução da fala do apresentador. Recomenda-se que a seleção dos recursos de cada ferramenta seja orientada por sua adequação à especificidade da questão discutida, às intenções de significação do produtor e às possibilidades de compreensão do interlocutor. Sugere-se, ainda, que sejam consideradas outras ferramentas, como retroprojetor, cartazes e flipchart, por exemplo, não apenas para o caso de não haver recursos disponíveis para as ferramentas digitais, mas também porque podem ser adequadas ao trabalho: o registro de uma apresentação de grupos, após uma discussão coletiva, por exemplo, pode ser agilizado por meio de cartazes, páginas do flipchart ou transparências para um retroprojetor. Do ponto de vista da progressão, sugere-se, inicialmente, um trabalho colaborativo (coletivo e em grupos/duplas), que progrida para o autônomo. Outros critérios: (a) o tipo de ferramenta utilizada e/ou os recursos previstos; (b) o grau de sofisticação dos recursos mobilizados; (c) o grau de complexidade e/ou formalidade das apresentações orais; (d) o nível de autonomia a ser atingido pelo aluno a cada etapa.",
  },
  {
    id: "EF69LP42",
    competences: "LP",
    group_years: "69",
    field: "04",
    unit: "LP08",
    object:
      "Construção composicional e estilo Gêneros de divulgação científica",
    skill: "EF69LP42",
    comment:
      "O foco desta habilidade é o estudo de recursos textuais e discursivos utilizados na elaboração de textos de divulgação de conhecimentos, bem como a sua aplicação em produções próprias. Sua formulação enfatiza a necessidade de articulação entre os recursos verbais e não verbais, na construção efetiva dos sentidos. Demanda observação dos recursos em foco para que se possa refletir a respeito deles.",
    resume:
      "Na elaboração do currículo, pode-se considerar que esta habilidade abrange o estudo de recursos relativos: (a) à organização interna do texto verbal; (b) aos recursos paratextuais, como imagens, boxes, infográficos etc. É importante que o tratamento a ser dado a esses recursos seja de correlação, de complementaridade, focalizando-se que o sentido do texto é derivado da articulação entre eles, sem o que a compreensão do conteúdo temático pode resultar parcial, superficial ou até inadequada. Convém, ainda, que os currículos programem as atividades de leitura e produção de textos necessárias às análises visadas pela habilidade e que orientem o emprego da metalinguagem (terminologia gramatical), para que o seu emprego só se dê depois da compreensão do aspecto estudado. A progressão — tanto vertical quanto horizontal — pode tomar como critérios: (a) os aspectos da construção composicional a serem estudados a cada momento; (b) o foco na compreensão prévia ou na análise do texto do ponto de vista dos aspectos visados; (c) o grau de complexidade do gênero ou texto a ser analisado; (d) o nível de autonomia a ser conquistado pelo aluno a cada etapa.",
  },
  {
    id: "EF69LP43",
    competences: "LP",
    group_years: "69",
    field: "04",
    unit: "LP08",
    object: "Marcas linguísticas Intertextualidade",
    skill: "EF69LP43",
    comment:
      "Esta habilidade articula leitura e produção de textos, visando modos de introduzir vozes em textos científicos produzidos pelos alunos. Envolve, ainda, duas operações distintas: identificar e utilizar. A identificação e o uso desses modos de citar terceiros têm a finalidade de evidenciar como o autor de textos científicos dialoga com as vozes que traz para seu texto (discordando ou concordando) e como as apresenta  em seu texto (em discurso direto ou indireto, por exemplo).",
    resume:
      "Na elaboração do currículo, convém considerar que esta habilidade está vinculada ao uso de tecnologia digital, visto que contempla também a preocupação com o aprendizado de elementos de normatização do texto científico (como incluir e formatar uma citação no texto, organização de referências bibliográficas) que comumente circula em ambientes virtuais ou, mesmo quando impresso, implica uma produção digitalizada. Assim, convém propor atividade colaborativa entre professores de Língua Portuguesa e de Informática (ou componente similar), bem como que orientem a escola no que diz respeito ao acesso e ao uso de computadores e aplicativos. A progressão no desenvolvimento desta habilidade pode apoiar-se: (a) no foco a ser dado a uma ou outra das duas operações envolvidas (identificar/utilizar); (b) na ênfase sobre uma ou outra das práticas associadas (leitura/produção); (c) no procedimento e/ou no recurso envolvido em citações (pistas linguísticas/elementos de normatização); (d) no grau de complexidade dos gêneros e textos previstos para esse estudo; (e) no nível de autonomia a ser atingido pelo aluno em cada etapa.",
  },
  {
    id: "EF69LP44",
    competences: "LP",
    group_years: "69",
    field: "05",
    unit: "LP07",
    object:
      "Reconstrução das condições de produção, circulação e recepção\nApreciação e réplica",
    skill: "EF69LP44",
    comment:
      "Essa habilidade se refere ao reconhecimento dos textos literários como parte do patrimônio cultural da humanidade, representativos de culturas e valores dos diferentes grupos sociais. Envolve, ainda, resgatar as condições de produção, circulação e recepção desses textos, para, a partir disso, associá-los a uma autoria, mobilizar conhecimentos de mundo e atribuir sentidos a eles. Seu desenvolvimento demanda a participação em práticas frequentes e sistemáticas de leitura de textos literários de diferentes gêneros, épocas e contextos culturais.",
    resume:
      "Recomenda-se que os currículos locais prevejam, ao longo dos quatro anos finais do ensino fundamental, a organização sistemática de práticas de leitura de gêneros e textos literários os mais diversos, para que a experiência necessária ao desenvolvimento dessa habilidade se torne possível. Destaca-se a importância de a escola abrir-se, acolher e legitimar produtos culturais representativos de diferentes grupos sociais - das práticas de literatura mais prestigiadas historicamente (com a exploração da chamada arte dos clássicos) às práticas consideradas marginais e características de diferentes localidades.A progressão pode pautar-se pelos diferentes valores selecionados pelo currículo, pelas realidades culturais e/ou pelos autores visados, pelo grau de complexidade dos gêneros e textos a serem estudados e pelo grau de autonomia requerida do aluno a cada etapa desse ensino.",
  },
  {
    id: "EF69LP45",
    competences: "LP",
    group_years: "69",
    field: "05",
    unit: "LP07",
    object:
      "Reconstrução das condições de produção, circulação e recepção\nApreciação e réplica",
    skill: "EF69LP45",
    comment:
      "Estreitamente relacionada a EF69LP46, essa habilidade consiste em apropriar-se de comportamentos próprios de leitores autônomos que selecionam o que ler / ver / ouvir, consultando textos que descrevem ou opinam sobre obras literárias e de outras linguagens. Também supõe, de um lado, diferenciar descrição de opinião expressa sobre o produto; de outro, reconhecer e fazer uso, em textos orais ou escritos, dos recursos do discurso argumentativo. Seu desenvolvimento demanda a participação efetiva do aluno em práticas de leitura e reflexão como as mencionadas.",
    resume:
      "Para o desenvolvimento dessa habilidade, convém que os currículos locais programem, para os quatro anos finais do ensino fundamental, atividades de leitura, análise e discussão oral dos gêneros e textos citados, contextualizadas em situações de efetiva escolha -- individual ou coletiva -- de produções culturais as mais diversas (Cf. EF69LP46). São essas práticas que permitem ao aluno refletir, discutir e deliberar com base em argumentos explícitos.A progressão curricular pode basear-se em critérios como o foco a ser dado às atividades, a cada momento (leitura/análise e discussão/deliberação e escolha); a ênfase nas descrições ou nas opiniões expressas nos textos; o grau de complexidade dos gêneros e textos previstos para o estudo; o nível de autonomia a ser atingido pelo aluno a cada etapa do ensino.",
  },
  {
    id: "EF69LP46",
    competences: "LP",
    group_years: "69",
    field: "05",
    unit: "LP07",
    object:
      "Reconstrução das condições de produção, circulação e recepção\nApreciação e réplica",
    skill: "EF69LP46",
    comment:
      "Essa habilidade supõe reconhecer as especificidades da participação em cada prática, apropriando-se dos diferentes gêneros orais ou escritos nelas envolvidos. Favorece o desenvolvimento de procedimentos, comportamentos e capacidades de leitura de apreciação e réplica sobre os produtos culturais mais diversos, sendo condição, portanto, para o desenvolvimento de EF69LP45 e EF69LP49.",
    resume:
      "Tendo em vista o desenvolvimento dessa habilidade, também aqui convém que os currículos locais abram espaços para acolher e legitimar produtos culturais representativos de diferentes grupos sociais, combatendo estereótipos e preconceitos. Forma eficaz de favorecer a participação nessas práticas é prever sua inserção, nos currículos, em atividades permanentes e regulares.É possível propor uma progressão dos tipos de práticas, priorizando para cada ano um pequeno conjunto delas. Um dos critérios para essa progressão pode ser considerar a complexidade implicada em cada prática, no que se refere ao uso da tecnologia e à complexidade do gênero. Outros critérios a serem considerados são o grau de complexidade dos gêneros e textos explorados e o nível de autonomia a ser desenvolvido pelo aluno a cada momento.",
  },
  {
    id: "EF69LP47",
    competences: "LP",
    group_years: "69",
    field: "05",
    unit: "LP07",
    object:
      "Reconstrução da textualidade e compreensão dos efeitos\nde sentidos provocados pelos usos de recursos linguísticos e multissemióticos",
    skill: "EF69LP47",
  },
  {
    id: "EF69LP48",
    competences: "LP",
    group_years: "69",
    field: "05",
    unit: "LP07",
    object:
      "Reconstrução da textualidade e compreensão dos efeitos\nde sentidos provocados pelos usos de recursos linguísticos e multissemióticos",
    skill: "EF69LP48",
  },
  {
    id: "EF69LP49",
    competences: "LP",
    group_years: "69",
    field: "05",
    unit: "LP07",
    object: "Adesão às práticas de leitura",
    skill: "EF69LP49",
    comment:
      "Esta habilidade supõe o compromisso do aluno com a sua formação como leitor literário, pronto para vivenciar experiências de leitura mais desafiadoras. Implica um trabalho de mediação de leitura mais intenso, que favoreça a ativação de conhecimentos prévios pelo aluno. Pode envolver o planejamento de leituras anteriores e também ao longo da leitura desafiadora (que pode ser com apoio de textos em outras linguagens) para garantir o conhecimento prévio necessário para a compreensão do texto. Por exemplo, em caso de uma obra que envolva um discurso literário em que o tempo é tratado de forma não linear e sem sinais explícitos para indicar essa oscilação, recorrer a um trecho de um filme em que isso acontece, para depois voltar à escrita e comparar, pode ser uma estratégia motivadora para o aluno.",
    resume:
      "Na elaboração do currículo, uma forma de se colaborar para a motivação do aluno para leituras mais desafiadoras é prever projetos que articulem o trabalho em sala de aula com a sala de leitura e/ou biblioteca, em que se possa contar com leituras compartilhadas planejadas (feitas pelo professor ou mediador de leitura, preferencialmente), assim como rodas de biblioteca em que se possa apresentar obras mais complexas com sugestão de escolhas de leitura, articuladas com conversas posteriores sobre obras lidas.",
  },
  {
    id: "EF69LP50",
    competences: "LP",
    group_years: "69",
    field: "05",
    unit: "LP09",
    object: "Relação entre textos",
    skill: "EF69LP50",
    comment:
      'Esta habilidade supõe um exercício de adaptação, de retextualização e de "transformação" de um gênero em outro, guardando a originalidade do tratamento temático. Ainda que seja uma ação de retextualização, as habilidades relacionadas às operações de produção textual (planejamento, produção e revisão) também devem estar vinculadas a esta habilidade. É possível articulá-la, ainda, com habilidades de análise de adaptações dessa mesma natureza.',
    resume:
      "Na elaboração do currículo, sugere-se uma progressão na proposição de adaptações, quer dos gêneros escolhidos (iniciando com um conto ou uma crônica, por exemplo, ou selecionando cenas de romances), quer da complexidade dos enredos dos textos selecionados, quer, ainda, do grau de autonomia esperado dos/as alunos/as nas produções dessa natureza (análises de trechos de adaptações já existentes, feitas coletivamente, passando para análises em grupos, produções de adaptações de trechos de textos feitas coletivamente, seguidas de produções em duplas ou grupos e, por fim, individualmente). Uma vez que os textos teatrais se realizam efetivamente quando são encenados, recomenda-se que essas adaptações tenham como objetivo a encenação. Há, aqui, oportunidade para o trabalho interdisciplinar com a habilidade (EF69AR30), da Arte, no que se refere à composição de improvisações e acontecimentos cênicos com base em textos dramáticos e outros estímulos.",
  },
  {
    id: "EF69LP51",
    competences: "LP",
    group_years: "69",
    field: "05",
    unit: "LP09",
    object:
      "Consideração das condições de produção\nEstratégias de produção: planejamento, textualização e revisão/edição",
    skill: "EF69LP51",
    comment:
      "Esta habilidade se refere ao comprometimento dos/as alunos/as com a experimentação de produções literárias. Supõe desenvolver capacidades de compreensão das especificidades dos gêneros literários e de análise dos recursos linguísticos e semióticos usados na construção dos sentidos dos textos, que devem estar a serviço da fruição. Através de organizações variadas da turma, a colaboração pode ser estimulada: produções coletivas, em grupos, duplas ou individuais.",
    resume:
      "Na elaboração do currículo, pode-se considerar que o engajamento dos/as alunos/as no processo de produção de textos literários supõe uma motivação interna que pode ser provocada externamente pelas práticas culturais adotadas: rodas e clubes de leitura, eventos culturais, como saraus, mostra de cinema e show de esquetes, entre outros. Eventos como esses, além das parcerias necessárias entre as equipes de gestão e a equipe de profissionais (responsáveis pela biblioteca, professores de língua portuguesa, de arte, de dança etc.), envolvem a colaboração entre os/as alunos/as no processo de produção e de circulação dos textos.",
  },
  {
    id: "EF69LP52",
    competences: "LP",
    group_years: "69",
    field: "05",
    unit: "LP04",
    object: "Produção de textos orais",
    skill: "EF69LP52",
    comment:
      "Esta habilidade supõe fazer uso das informações das rubricas dos textos dramáticos para mobilizar recursos de diferentes linguagens, visando a produção dos sentidos intencionados: além da oralização dramatizada do texto verbal (com gestos, movimentos, expressões faciais), o figurino das personagens, os efeitos de luz e de som, o cenário etc., também ajudam a produzir efeitos de sentido em uma peça teatral.",
    resume:
      "A promoção de eventos culturais dentro e fora da escola, em que representações dramáticas sejam realizadas, é recomendável. Nesses eventos, a participação da comunidade assume grande relevância. Na elaboração do currículo, o desenvolvimento desta habilidade pode ser potencializado se for proposto um trabalho interdisciplinar com professores da área, em especial, professores de Arte e de Educação Física, no interior de projetos culturais. Há, aqui, especial oportunidade de trabalho interdisciplinar com a habilidade (EF69AR30), da Arte, no que se refere à composição de improvisações e acontecimentos cênicos com base em textos dramáticos e outros estímulos.",
  },
  {
    id: "EF69LP53",
    competences: "LP",
    group_years: "69",
    field: "05",
    unit: "LP04",
    object: "Produção de textos orais Oralização",
    skill: "EF69LP53",
    comment:
      "O proposto por esta habilidade é alcançar uma leitura expressiva do que se lê, o que supõe um trabalho cuidadoso de compreensão leitora. Só é possível ler com expressividade, interpretando os sentimentos de narradores, eu lírico e personagens quando compreendemos os textos lidos e tecemos apreciações a respeito. Prevê-se o uso de recursos de outras linguagens (corporal, gestual, musical etc.) na construção da interpretação dada ao texto.",
    resume:
      "Na elaboração do currículo, convém considerar que a leitura em voz alta colabora para o desenvolvimento da fluência leitora, na medida em que, para alcançar a expressividade desejada, os/as alunos terão que ler os textos muitas vezes, trabalhando, por exemplo, a entonação, o ritmo, as ênfases que devem dar a certos trechos. Esse exercício contribui para automatizar o processo de identificação de palavras. Na descrição da habilidade, também é previsto que essa prática de leitura seja significativa, que tenha um fim: a escuta em determinado contexto. Nesse sentido, a leitura em voz alta pode estar associada às práticas sugeridas anteriormente, com a realização de saraus, as oficinas de criação, a produção de audiobooks para bibliotecas, blogs e outras redes sociais etc.",
  },
  {
    id: "EF69LP54",
    competences: "LP",
    group_years: "69",
    field: "05",
    unit: "LP08",
    object:
      "Recursos linguísticos e semióticos que operam nos textos pertencentes aos gêneros literários",
    skill: "EF69LP54",
    comment:
      "O foco desta habilidade está no reconhecimento, pelo aluno, da interação que se estabelece entre os aspectos linguísticos que constituem os textos do campo artístico-literário — organizados em prosa ou em verso (poemas, contos, textos teatrais etc.) — e os recursos paralinguísticos (voz, gestos e movimentação) que podem/devem ser mobilizados na oralização deles (declamações, representações, leituras dramáticas etc.), de modo a preservar seus efeitos de sentido, por meio da prática frequente e sistemática de leitura, estudo e oralização de textos do campo literário.",
    resume:
      "Na elaboração do currículo, recomenda-se: a) orientar a organização de atividades sistemáticas de leitura compreensiva de textos do campo artístico-literário; b) programar, de forma associada ao referido em a), atividades de estudo dos recursos verbais constitutivos do texto literário (figuras de linguagem, ritmo, rimas etc.), visando a identificação dos efeitos de sentido que produzem; c) prever, para o processo de declamação de poemas ou de contação de histórias, a identificação dos recursos extraverbais e cênicos que poderiam ser necessários para a interpretação dos textos; d) orientar, no caso da leitura dramática ou representação de textos teatrais, o estudo prévio do texto e a leitura atenta das rubricas, para que a representação seja adequada ao indicado no texto, garantindo uma compreensão mais fiel às intenções de significação presumidas. A progressão vertical e horizontal pode tomar como critérios os aspectos linguísticos e paralinguísticos a serem estudados a cada momento; a sequenciação entre estudo prévio do texto/planejamento/execução da apresentação oral; o grau de complexidade do gênero ou texto a ser analisado; o nível de autonomia a ser conquistado pelo aluno a cada etapa, quer da análise, quer da prática de oralização. Há, aqui, oportunidade para o trabalho interdisciplinar com as habilidades (EF69AR30) e (EF69AR32), da Arte, no que se refere à exploração, análise e criação de diálogos entre textos literários e outras manifestações, de diferentes linguagens artísticas.",
  },
  {
    id: "EF69LP55",
    competences: "LP",
    group_years: "69",
    field: "01",
    unit: "LP08",
    object: "Variação linguística",
    skill: "EF69LP55",
    comment:
      'Reconhecer e combater o preconceito linguístico pressupõe a capacidade de perceber não só as semelhanças e diferenças entre as variedades da língua falada como, ainda, o prestígio social associado à escrita e, em particular, à norma-padrão. Esta é uma habilidade fundamental, relacionada a todas as demais que envolvem o domínio de normas urbanas de prestígio e/ou se referem a expressar-se, oralmente ou por escrito, "com correção". Seu desenvolvimento demanda convívio cotidiano com a variação linguística (no tempo, no espaço e na vida social), de forma que o aluno possa perceber as características principais de cada variedade e sua adequação ao contexto de origem. Só assim ele poderá compreender a legitimidade da diversidade linguística e ultrapassar a perspectiva cientificamente equivocada da variação como desvio ou erro, de forma a combater a discriminação pela língua.',
    resume:
      "Na elaboração do currículo, devido à importância do tema não só para a análise linguística/semiótica, mas também para o domínio crítico e consciente da língua, deve-se considerar que o desenvolvimento desta habilidade se estende pelos quatro anos finais do ensino fundamental. Convém que: (a) cada variedade seja tratada em termos de adequação aos seus contextos de uso; (b) abordem-se as normas de prestígio, inclusive a norma-padrão, como variedades sociais entre outras, explicitando-se as circunstâncias particulares em que são requeridas; (c) sejam sempre feitas associações à construção de conhecimentos específicos sobre o fenômeno da variação linguística (noções e conceitos básicos da sociolinguística). A progressão, tanto horizontal quanto vertical, pode pautar-se pelo tipo de variação linguística a ser estudada (histórica/geográfica/social/estilística), pela noção ou conceito a ser focalizado e pelo grau de complexidade dos gêneros e textos selecionados para estudo a cada momento. Há, aqui, oportunidade de trabalho interdisciplinar com as habilidades (EF07LI22) e (EF07LI23), da Língua Inglesa, no que se refere ao reconhecimento de variedades linguísticas refutando preconceitos.",
  },
  {
    id: "EF69LP56",
    competences: "LP",
    group_years: "69",
    field: "01",
    unit: "LP08",
    object: "Variação linguística",
    skill: "EF69LP56",
    comment:
      'Esta habilidade se refere ao uso da norma-padrão nas situações, gêneros e textos em que ela é requerida. Seu desenvolvimento  é indissociável tanto do estudo da variação linguística quanto da compreensão dos valores socialmente atribuídos às diferentes variedades. Ela demanda o envolvimento frequente e sistemático do aluno em práticas públicas e formais de leitura e/ou produção de textos, orais e/ou escritos, em que a "correção" deve ser observada. Exemplos de situações orais formais: palestras, seminários, apresentações orais, debates. Exemplos de situações escritas formais: entrevistas, notícias, artigo de divulgação científica, reportagem multimidiática.',
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade (uso consciente e reflexivo de regras e normas da norma-padrão) demanda um trabalho comparativo com normas e regras de outras variedades da língua, possibilitando explorar a ideia de adequação/inadequação da variedade usada ao contexto de produção do texto escrito ou falado e, ainda, combater preconceitos linguísticos. Também é importante enfatizar que as criações literárias podem ser material rico para reflexões sobre adequação do uso ao contexto, visto que, não raro, subvertem regras e normas da norma-padrão para produzir efeitos de sentido, como trazer para o texto outras variedades da língua, para manter coerência com a construção de certa personagem e/ou contexto social. A progressão do ensino pode pautar-se pelas diferentes regras ou normas selecionadas para estudo, pelo grau de complexidade dos gêneros e textos previstos e pelo nível de autonomia que se pretenda levar o aluno a conquistar a cada etapa.",
  },
  {
    id: "EF07LP01",
    competences: "LP",
    group_years: "07",
    field: "06",
    unit: "LP07",
    object:
      "Reconstrução do contexto de produção, circulação e recepção de textos\nCaracterização do campo jornalístico e relação entre os gêneros em circulação, mídias e práticas da cultura digital",
    skill: "EF07LP01",
    comment:
      "Esta habilidade implica analisar como as escolhas de palavras e outros recursos semióticos (imagens, cores, fontes de letra etc.) ajudam a produzir sentidos. Também possibilita o desenvolvimento de um olhar crítico sobre esse campo de atuação, uma vez que, por meio da análise de primeiras páginas, das escolhas do que vira manchete e do modo como são formuladas, por exemplo, é possível perceber a que tipo de jornalismo se dedica o jornal ou programa — o que contribui para a percepção de que não existe jornalismo neutro.",
    resume:
      'Na elaboração do currículo, é importante considerar que, ao diferenciar as propostas editoriais, é preciso refletir sobre a relação entre elas e o público a que se destina cada jornal ou programa. Prever comparações entre jornais televisivos mais "populares" e "policialescos" (que podem ser mais próximos do universo familiar dos alunos) e jornais transmitidos no início da manhã ou da tarde, de emissoras diferentes, possibilita explorar as diferenças de linguagem e de abordagem, relacionando-as aos públicos a que se destinam. É importante prever a investigação de jornais e programas feitos para adolescentes. Discutir o que move esses veículos a fazerem um jornalismo diferenciado para cada público leitor é fundamental para construir um olhar crítico sobre o campo.',
  },
  {
    id: "EF07LP02",
    competences: "LP",
    group_years: "07",
    field: "06",
    unit: "LP07",
    object:
      "Reconstrução do contexto de produção, circulação e recepção de textos\nCaracterização do campo jornalístico e relação entre os gêneros em circulação, mídias e práticas da cultura digital",
    skill: "EF07LP02",
    comment:
      "Comparar o modo como os diferentes jornais e mídias abordam um mesmo fato envolve analisar escolhas linguísticas e semióticas, com o objetivo de inferir-se a visão de cada um deles. Esta habilidade também implica conhecer os recursos de linguagem próprios de cada mídia, de modo que o aluno possa perceber as diferenças entre uma notícia impressa e uma radiofônica ou televisiva, por exemplo, conhecimentos que serão importantes para a produção de textos.",
    resume:
      'Na elaboração do currículo, pode-se pensar em, no caso de haver jornais, rádios e redes de TV locais, elegê-los para comparações antes de acessar outros jornais regionais e de grande circulação. Isso tornará o trabalho mais significativo para os alunos, uma vez que os textos farão referência a fatos e assuntos da localidade, mais próximos e passíveis de serem "verificados" mais facilmente, em caso de "versões contraditórias" entre os veículos. O trabalho com diferentes mídias também supõe ter recursos disponíveis na sala de aula: TV, DVD, computador ou aparelhos móveis, assinatura de jornais e revistas e acesso à internet.',
  },
  {
    id: "EF07LP03",
    competences: "LP",
    group_years: "07",
    field: "01",
    unit: "LP08",
    object: "Léxico/morfologia",
    skill: "EF07LP03",
    comment:
      "Esta é uma habilidade fundamental para a compreensão dos processos derivacionais de formação das palavras. O foco está na compreensão e no uso adequado de prefixos e de sufixos. Pressupõe conhecimentos prévios relativos a classes de palavras e às categorias gramaticais a que elas se associam. (Relaciona-se com a habilidade EF07LP35).",
    resume:
      'Na elaboração do currículo, convém que o desenvolvimento desta habilidade venha sempre associado a práticas de leitura, produção ou oralidade, de forma que o aluno possa observar esses processos em ação e refletir sobre como são produtivos e criativos. Portanto, a apropriação desses mecanismos pelo aluno é o seu foco, e não a memorização da terminologia gramatical correspondente. Jogos de invenção de palavras derivadas por prefixação e/ou sufixação, com o objetivo de refletir sobre a significação resultante, podem ser muito produtivos. Exemplo: formação de grupos que experimentem criar palavras usando os afixos estudados e depois desafiando os demais a explicitar os recursos usados e os sentidos resultantes (Por exemplo, o que significa "imexível"?). Propostas de produção de textos criativos, como os literários e os publicitários, por exemplo, também podem propiciar situações adequadas para esse estudo. A progressão curricular pode apoiar-se no tipo de mecanismo a ser estudado (prefixação/sufixação) assim como no grau de complexidade dos gêneros e textos mobilizados.',
  },
  {
    id: "EF07LP04",
    competences: "LP",
    group_years: "07",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF07LP04",
    comment:
      "O foco desta habilidade é a identificação do núcleo da oração, considerada como uma unidade básica da organização sintática do texto. Está, portanto, diretamente relacionada ao desenvolvimento de outras habilidades de análise com foco na sintaxe da oração e do período. Ela requer observar a organização sintática do texto e refletir a respeito do papel dela na construção da textualidade e na produção de efeitos de sentido. Envolve, ainda, um trabalho prévio com classes de palavras e com as funções e categorias gramaticais associadas a cada uma delas.",
    resume:
      'Na elaboração do currículo, recomenda-se que o desenvolvimento desta habilidade não se constitua como um fim em si mesmo, mas sim que contribua para uma compreensão global, por parte do aluno, do papel da sintaxe no funcionamento da língua. Isso significa propor atividades que associem essas análises à leitura e à produção de textos, com foco nos efeitos de sentido que as estruturas sintáticas estudadas podem produzir.Atividades lúdicas, em que os alunos possam explorar livremente diferentes alternativas de estruturação de um "mesmo" enunciado, identificando os efeitos de sentido assim produzidos, podem contribuir significativamente para a percepção e compreensão da natureza e do funcionamento dos mecanismos sintáticos em jogo. A progressão horizontal pode apoiar-se no grau de complexidade dos gêneros e textos programados para estudo.',
  },
  {
    id: "EF07LP05",
    competences: "LP",
    group_years: "07",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF07LP05",
    comment:
      "O foco desta habilidade é a identificação de verbos transitivos e intransitivos em orações de textos lidos ou próprios. Está, portanto, diretamente relacionada ao desenvolvimento de outras habilidades de análise com foco na sintaxe da oração e do período (especialmente EF07LP04 e EF07LP07). Requer a observação da organização sintática do texto e reflexões a respeito do papel dela na construção da textualidade e na produção de efeitos de sentido. Envolve, ainda, um trabalho prévio com classes de palavras e com as funções e categorias gramaticais associadas a cada uma delas.",
    resume:
      "Na elaboração do currículo, recomenda-se que o trabalho com esta habilidade não se constitua como um fim em si mesmo, mas que contribua para uma compreensão global, por parte do aluno, do papel da sintaxe no funcionamento da língua. Isso significa propor atividades que associem essas análises à leitura e à produção de textos, com foco nos efeitos de sentido que as estruturas sintáticas estudadas podem produzir.",
  },
  {
    id: "EF07LP06",
    competences: "LP",
    group_years: "07",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF07LP06",
    comment:
      "Esta habilidade tem foco no domínio das concordâncias nominal e verbal, nas situações públicas e formais de comunicação oral e de produção de textos em que a norma-padrão é requerida. Seu desenvolvimento demanda a participação frequente e sistemática do aluno nas situações referidas, assim como o estudo prévio ou concomitante dos dois tipos de concordância, das classes de palavras (nome e verbo) e das categorias gramaticais nelas envolvidas. (É um desdobramento de EF06LP06, à qual está, portanto, diretamente relacionada).",
    resume:
      "Na elaboração do currículo, para um exercício reflexivo voltado para o uso da língua, convém que o estudo dos conhecimentos linguísticos mencionados seja realizado em contextos de uso, e não em atividades isoladas. Por essa razão, sugere-se que o estudo das concordâncias nominal e verbal venha sempre: (a)  programado para situações de comunicação em que a norma-padrão é requerida; (b) associado ao planejamento da fala e à produção e revisão de textos, assim como à análise, com vistas a compreender os efeitos de sentido produzidos por este ou aquele uso. Recomenda-se, ainda, articular esta habilidade com as de análise de gravações de palestras, debates etc., para as produções orais. (A progressão vertical deve considerar o desenvolvimento de EF07LP06 no ano anterior). A progressão horizontal pode adotar, como critérios, (a) os tópicos a serem abordados a cada momento (concordância nominal/concordância verbal); (b) o grau de complexidade dos gêneros e textos previstos; (c) o grau de autonomia que se pretende levar o aluno a atingir em cada etapa.",
  },
  {
    id: "EF07LP07",
    competences: "LP",
    group_years: "07",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF07LP07",
    comment:
      "Esta habilidade se refere à identificação da estrutura básica da oração em textos lidos ou próprios. Está, portanto,  diretamente relacionada ao desenvolvimento de todas as demais habilidades de análise com foco na sintaxe da oração e do período. Requer a observação da organização sintática do texto e reflexões a respeito do papel dela na construção da textualidade e na produção de efeitos de sentido, a partir do reconhecimento e diferenciação de sujeito, predicado e complementos. Envolve, ainda, um conhecimento prévio de classes de palavras e das funções e categorias gramaticais associadas a cada uma delas.",
    resume:
      'Na elaboração do currículo, recomenda-se que o desenvolvimento desta habilidade não se constitua como um fim em si mesmo, mas que contribua para uma compreensão global, por parte do aluno, do papel da sintaxe no funcionamento da língua. Isso significa propor atividades que associem essas análises à leitura e à produção de textos, com foco nos efeitos de sentido que podem se associar às estruturas sintáticas em estudo. Atividades lúdicas, em que os alunos possam explorar livremente diferentes alternativas de estruturação de um "mesmo" enunciado, podem contribuir significativamente para a percepção e compreensão da natureza e do funcionamento dos mecanismos sintáticos em jogo. A progressão horizontal pode apoiar-se no constituinte oracional a ser abordado a cada etapa (sujeito/predicado/objeto direto/objeto indireto) e/ou no grau de complexidade dos gêneros e textos programados para estudo.',
  },
  {
    id: "EF07LP08",
    competences: "LP",
    group_years: "07",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF07LP08",
    comment:
      "Esta habilidade se refere à identificação do papel dos adjetivos na ampliação de sentidos do núcleo do sujeito ou dos complementos verbais. Está, portanto, diretamente relacionada ao desenvolvimento de todas as demais habilidades de análise com foco na sintaxe da oração e do período (especialmente EF07LP09). Requer a observação da organização sintática do texto e reflexões a respeito do papel dela na construção da textualidade e na produção de efeitos de sentido. Envolve, ainda, um trabalho prévio com classes de palavras e com as funções e categorias gramaticais associadas a cada uma delas.",
    resume:
      'Na elaboração do currículo, recomenda-se que o desenvolvimento desta habilidade não se constitua como um fim em si mesmo, mas que contribua para uma compreensão global, por parte do aluno, do papel da sintaxe no funcionamento da língua. Isso significa propor atividades que associem essas análises à leitura e à produção de textos, com foco nos efeitos de sentido que podem se associar às estruturas sintáticas em estudo. Atividades lúdicas, em que os alunos possam explorar livremente diferentes alternativas de estruturação de um "mesmo" enunciado, podem contribuir significativamente para a percepção e compreensão da natureza e do funcionamento dos mecanismos sintáticos em jogo. A progressão horizontal pode apoiar-se no grau de complexidade dos gêneros e textos programados para estudo.',
  },
  {
    id: "EF07LP09",
    competences: "LP",
    group_years: "07",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF07LP09",
    comment:
      "O foco desta habilidade é a identificação do papel dos advérbios e locuções adverbiais na ampliação de sentidos do núcleo do predicado oracional. Está, portanto, diretamente relacionada ao desenvolvimento de todas as demais habilidades de análise com foco na sintaxe da oração e do período (especialmente EF07LP08). Requer a observação da organização sintática do texto e reflexões a respeito do papel dela na construção da textualidade e na produção de efeitos de sentido. Envolve, ainda, um conhecimento prévio de classes de palavras e das funções e categorias gramaticais associadas a cada uma delas.",
    resume:
      'Na elaboração do currículo, recomenda-se que o desenvolvimento desta habilidade não se constitua como um fim em si mesmo, mas que contribua para uma compreensão global, por parte do aluno, do papel da sintaxe no funcionamento da língua. Isso significa propor atividades que associem essas análises à leitura e à produção de textos, com foco nos efeitos de sentido que podem se associar às estruturas sintáticas em estudo.  Atividades lúdicas, em que os alunos possam explorar livremente diferentes alternativas de estruturação de um "mesmo" enunciado, podem contribuir significativamente para a percepção e compreensão da natureza e do funcionamento dos mecanismos sintáticos em jogo. A progressão horizontal pode apoiar-se no grau de complexidade dos gêneros e textos programados para o estudo (vale considerar, ainda, a articulação desta habilidade com EF07LP08).',
  },
  {
    id: "EF07LP10",
    competences: "LP",
    group_years: "07",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF07LP10",
    comment:
      "Esta habilidade se refere à mobilização de conhecimentos linguísticos e gramaticais específicos na produção de textos de qualquer campo de atuação ou gênero. Requer discussões sobre variação linguística e práticas de leitura e/ou produção de textos, especialmente em situações públicas e formais. Pressupõe, ainda, domínio e/ou estudo conexo de tópicos de análise linguística como os mencionados. (Estreitamente relacionada a EF69LP56 e a EF06LP11).",
    resume:
      'Na elaboração do currículo, convém que o desenvolvimento da habilidade venha sempre associado a práticas de leitura e/ou produção de textos dos mais diversos gêneros e campos de atuação. Recomenda-se, ainda, que as atividades propostas definam os conhecimentos a serem abordados considerando os tópicos já previstos para anos anteriores, e que evitem a perspectiva do "erro gramatical", em favor de uma abordagem baseada na adequação do uso. A habilidade representa uma progressão vertical (em relação à EF06LP11), na medida em que é uma retomada das mesmas operações e dos mesmos conteúdos. A progressão horizontal pode adotar como critério os tópicos a serem abordados a cada momento, o grau de complexidade dos gêneros e textos previstos e o grau de autonomia do aluno pressuposto na execução da tarefa.',
  },
  {
    id: "EF07LP11",
    competences: "LP",
    group_years: "07",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF07LP11",
    comment:
      "O foco desta habilidade (diretamente relacionada à apreensão da organização sintática do texto) está na identificação e classificação de períodos compostos por coordenação aditiva ou adversativa, tanto sindéticas (com conectivos) quanto assindéticas (conectadas por vírgulas). Requer a observação da organização sintática do texto, reflexões a respeito e identificação de períodos compostos por coordenação sindética e assindética, além de apreender o princípio de sua organização interna e as relações de sentido o que implica  perceber seu papel na (re)construção dos sentidos do texto. Envolve, ainda, um conhecimento prévio de classes de palavras e funções e categorias gramaticais associadas a cada uma delas.",
    resume:
      "Na elaboração do currículo, para reflexão e análise linguística/semiótica, é necessário que o estudo dos tópicos gramaticais envolvidos seja realizado em contextos de uso, e não em atividades isoladas. Por essa razão, sugere-se que esses conteúdos sejam propostos sempre vinculados à leitura, à produção e à revisão, com vistas à compreensão de seu papel na (re)construção do texto e na produção de efeitos de sentido determinados. Recomenda-se: (a) que o foco do trabalho seja a resolução de problemas de compreensão e manutenção da legibilidade do texto, considerando-se as intenções de significação; (b) que a compreensão de cada aspecto anteceda a sistematização; (c) que a metalinguagem seja empregada de modo que o aluno compreenda o que se diz. Ao longo do ano, a progressão pode apoiar-se seja no foco da identificação da oração coordenada (aditiva/adversativa; assindética/sindética), seja na complexidade dos gêneros e textos programados para o desenvolvimento da habilidade.",
  },
  {
    id: "EF07LP12",
    competences: "LP",
    group_years: "07",
    field: "01",
    unit: "LP08",
    object: "Semântica Coesão",
    skill: "EF07LP12",
    comment:
      "Esta habilidade tem como foco o reconhecimento de dois recursos básicos de coesão referencial: as substituições lexicais e as pronominais. Trata-se de uma habilidade essencial para a (re)construção do texto e para a conquista de níveis superiores de proficiência em escrita, em qualquer campo de atuação e em qualquer gênero. Implica atividades diversificadas e sistemáticas de leitura e produção e pressupõe conhecimentos prévios sobre substantivos e pronomes, assim como sobre as categorias gramaticais a que essas classes de palavras estão associadas.",
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade pode organizar-se com base em dois pontos articulados: 1) resolver um problema de compreensão/redação decorrente da presença e/ou emprego de recursos de coesão referencial; 2) sistematizar o conhecimento discutido na etapa anterior (1). Sugere-se que as atividades sejam organizadas com base em práticas de leitura e produção, focalizando as diferentes possibilidades de referenciação no processo de coesão, considerando a legibilidade do texto, as intenções de significação e as possibilidades de compreensão do interlocutor. É importante observar, também, a substituição lexical por hiperônimos, bastante comum, e a ocorrência de elipse. Recomenda-se, ainda, que a metalinguagem só seja empregada depois de compreendido o aspecto em foco. A progressão ao longo do ano pode apoiar-se no tipo de recurso selecionado para estudo (substituição sinonímica/substituição pronominal) e no grau de complexidade dos gêneros e textos envolvidos nas práticas previstas. Sugere-se, inicialmente, um trabalho colaborativo (coletivo e em grupos/duplas), que progrida para o autônomo.",
  },
  {
    id: "EF07LP13",
    competences: "LP",
    group_years: "07",
    field: "01",
    unit: "LP08",
    object: "Coesão",
    skill: "EF07LP13",
    comment:
      "Esta habilidade tem como foco o (re)estabelecimento de relações entre partes do texto. Trata-se de uma habilidade essencial para a (re)construção do texto e para a conquista de níveis superiores de proficiência em escrita, em qualquer campo de atuação e em qualquer gênero. Seu desenvolvimento adequado só se dá no interior de atividades diversificadas e sistemáticas de leitura e produção. Pressupõe conhecimentos prévios sobre substantivos e pronomes, além de categorias gramaticais a que essas classes de palavras estão associadas (e relaciona-se com a habilidade EF07LP12).",
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade pode organizar-se com base em dois pontos articulados: 1) resolver um problema de compreensão/redação decorrente da presença e/ou emprego de recursos de substituições lexicais; 2) sistematizar o conhecimento discutido na etapa anterior (1). Sugere-se que as atividades sejam organizadas com base em práticas de leitura e produção, focalizando as diferentes possibilidades de referenciação no processo de coesão e considerando a legibilidade do texto, as intenções de significação e as possibilidades de compreensão do interlocutor. Recomenda-se que a metalinguagem só seja empregada depois de compreendido o aspecto em foco. A progressão ao longo do ano pode apoiar-se no tipo de recurso selecionado para estudo (substituição sinonímica/substituição pronominal) e no grau de complexidade dos gêneros e textos envolvidos nas práticas previstas. Sugere-se, inicialmente, um trabalho colaborativo (coletivo e em grupos/duplas), que progrida para o autônomo.",
  },
  {
    id: "EF07LP14",
    competences: "LP",
    group_years: "07",
    field: "01",
    unit: "LP08",
    object: "Modalização",
    skill: "EF07LP14",
    comment:
      "O foco desta habilidade está na identificação de estratégias argumentativas e de modalização, em textos dos mais diversos gêneros, relacionados a qualquer campo de atuação. Trata-se de uma habilidade necessária à compreensão (a) das atitudes que o locutor/escritor pode assumir em relação àquilo que diz (estratégias de modalização), como parte de seu ponto de vista particular; (b) dos recursos de que ele se vale para convencer ou persuadir o ouvinte/leitor. (É condição necessária para o desenvolvimento da habilidade EF08LP16).",
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade pode organizar-se com base em dois pontos articulados: 1) resolver problemas de compreensão decorrentes da presença de estratégias de modalização ou argumentação, também relevantes para (re)estabelecer a progressão temática; 2) sistematizar o conhecimento discutido na etapa anterior (1). Recomenda-se que sua programação curricular se faça por propostas de leitura e/ou produção de textos em que as estratégias de modalização e/ou de argumentação sejam necessárias à eficácia do texto. Convém, portanto, que a metalinguagem só seja empregada depois de compreendido o(s) texto(s) e o aspecto em foco. A progressão horizontal pode apoiar-se no tipo de estratégia visada  (modalização/argumentação) e no grau de complexidade dos gêneros e textos selecionados para o estudo. Sugere-se, inicialmente, um trabalho colaborativo (coletivo e em grupos/duplas), que progrida para o autônomo.",
  },
  {
    id: "EF08LP01",
    competences: "LP",
    group_years: "08",
    field: "06",
    unit: "LP07",
    object:
      "Reconstrução do contexto de produção, circulação e recepção de textos\nCaracterização do campo jornalístico e relação entre os gêneros em circulação, mídias e práticas da cultura digital",
    skill: "EF08LP01",
    comment:
      "Esta habilidade favorece o desenvolvimento de uma atitude crítica em relação ao campo jornalístico, uma vez que supõe reconhecer as diferentes propostas editoriais visando públicos distintos. Supõe, além de habilidades de análise de elementos linguísticos e semióticos, a compreensão da importância de buscar diferentes fontes de informação para verificação da sua confiabilidade.",
    resume:
      "Na elaboração do currículo, assim como já sinalizado em outros campos que se referem ao trabalho com textos jornalísticos em diferentes mídias, o trabalho com esta habilidade demanda o oferecimento de material diversificado aos alunos. Portanto, além dos jornais televisivos e radiofônicos (a que os alunos, em geral, têm acesso em casa), é preciso garantir acesso aos impressos e aos digitais. Ao dar foco a esta habilidade, é importante articular esse trabalho de comparação à discussão sobre fake news e modos de apurar a fidedignidade das informações. Nesse sentido, o acesso à internet e um trabalho voltado para o ensino de procedimentos de busca e seleção de sites confiáveis são necessários.",
  },
  {
    id: "EF08LP02",
    competences: "LP",
    group_years: "08",
    field: "06",
    unit: "LP07",
    object: "Relação entre textos",
    skill: "EF08LP02",
    comment:
      "Esta habilidade pode ser articulada ao trabalho com a habilidade que sugere a comparação das propostas editoriais dos jornais (EF07LP01). Ela consiste em:1. analisar os efeitos de sentido produzidos pelos recursos linguísticos usados;2. apurar informações, desenvolvendo procedimentos de curadoria;3. posicionar-se em relação aos enfoques dados aos fatos/assuntos veiculados, produzindo textos escritos ou orais.A habilidade prevê que, para que se faça essa análise, sejam utilizados sites especializados em checar fatos.",
    resume:
      'Na elaboração do currículo, é importante considerar que as sugestões apresentadas nos campos das habilidades (EF06LP01), (EF07LP01), (EF07LP02), (EF89LP03), (EF89LP01), (EF89LP02) cabem para esta habilidade também. Ao analisar as diferenças e semelhanças no tratamento dado a uma mesma informação por diferentes veículos e mídias para justificá-las, também será importante considerar a proposta editorial dos veículos que circulam a informação e a sua natureza. Há jornais e revistas, por exemplo, que tendem a ser menos rigorosos na apuração das informações que veiculam, como acontece com as revistas comumente categorizadas como "revistas de fofocas". A esses revistas, interessa criar um "aura" de mexerico e de sensacionalismo sobre o fato ou assunto tratado, em geral relacionados a personalidades públicas.',
  },
  {
    id: "EF08LP03",
    competences: "LP",
    group_years: "08",
    field: "06",
    unit: "LP09",
    object: "Textualização de textos argumentativos e apreciativos",
    skill: "EF08LP03",
    comment:
      "A habilidade envolve procedimentos de produção textual: definir contexto de produção, planejar, produzir e revisar. Tais procedimentos são apontados em (EF67LP09) e (EF67LP10), com a diferença de que, aqui, se trata de gênero argumentativo do campo jornalístico-midiático, que exige posicionamento crítico, a preparação de argumentos, a escolha do movimento argumentativo e outras habilidades próprias de gêneros argumentativos. Vale enfatizar a importância de se considerar como objeto de apreciação produtos representativos das culturas juvenis. Recomenda-se que o tratamento ético em relação à informação e o posicionamento crítico em relação a ela devem ser foco de discussão nesse caso.",
    resume:
      "Na elaboração do currículo, vale considerar que a seleção do artigo de opinião para esses dois anos finais significa uma progressão no trabalho com os gêneros argumentativos desse campo. Produzir um artigo de opinião demanda apreciações de caráter político sobre os fatos/assuntos tratados. A apreciação envolve assumir uma postura argumentativa ética. A produção de gêneros argumentativos, como o artigo de opinião, implica, ainda, mobilizar com maior intensidade habilidades que desenvolvam o pensamento crítico, visto que se propõe a dar uma resposta a uma questão polêmica que vai exigir do/a autor/a interpretar informações selecionadas, avaliar o raciocínio e explicar evidências. Do ponto de vista didático, no trabalho com os gêneros, é indicado que os currículos contemplem um estudo das suas principais características e orientem a realização das diferentes operações de produção de textos. São elas: a) contextualização: definir a situação comunicativa em que o texto será produzido (quem serão os leitores, onde circulará, com que finalidade, em qual gênero); b) planejamento: que envolve a elaboração do conteúdo temático (o que será dito) e a organização do texto parte a parte; c) elaboração do texto (o processo de textualização); d) revisão, processual (durante a produção) e final. Essas operações podem, inicialmente, ser realizadas em situações coletivas e em grupos, com mais apoio do professor e, de modo gradual, envolver graus crescentes de autonomia do/a aluno para realizá-la. Os currículos podem propor uma progressão horizontal no trabalho com o gênero, em relação à mediação do professor e à colaboração entre pares: em colaboração em um ano (coletivo e em grupos), avançando para o trabalho com autonomia no ano seguinte.",
  },
  {
    id: "EF08LP04",
    competences: "LP",
    group_years: "08",
    field: "01",
    unit: "LP08",
    object: "Fono-ortografia",
    skill: "EF08LP04",
    comment:
      "Esta habilidade se refere à mobilização de conhecimentos linguísticos e gramaticais específicos na produção de textos de qualquer campo de atuação ou gênero em que a norma-padrão é requerida. É indissociável de discussões sobre variação linguística e de análise de textos, especialmente em situações públicas e formais. Pressupõe, ainda, domínio e/ou estudo conexo de tópicos de ortografia, de classes de palavras (nome e verbo) e de categorias gramaticais a ela relacionadas. (Estreitamente relacionada a EF69LP56, EF06LP11 e EF07LP10).",
    resume:
      'Na elaboração do currículo, convém que o desenvolvimento da habilidade venha sempre associado a práticas de leitura e/ou produção de textos dos mais diversos gêneros e campos de atuação. Recomenda-se, ainda, que as atividades propostas definam os conteúdos específicos a serem abordados e evitem a perspectiva do "erro gramatical", em favor de uma abordagem baseada na adequação do uso. (A habilidade representa uma progressão vertical de EF06LP11 e EF07LP10, na medida em que é uma retomada das mesmas operações e dos mesmos conteúdos). A progressão horizontal pode adotar como critério os tópicos a serem abordados a cada momento, o grau de complexidade dos gêneros e textos previstos e o grau de autonomia do aluno pressuposto na execução da tarefa.',
  },
  {
    id: "EF08LP05",
    competences: "LP",
    group_years: "08",
    field: "01",
    unit: "LP08",
    object: "Léxico/morfologia",
    skill: "EF08LP05",
    comment:
      "Com foco nos processos de composição, esta é uma habilidade fundamental para a compreensão dos processos morfológicos e semânticos de formação das palavras, assim como de regras básicas de uso do hífen em palavras compostas. Seu desenvolvimento pressupõe conhecimentos prévios relativos às classes de palavras e às categorias gramaticais a que elas se associam. (Relaciona-se com as habilidades EF07LP03 e EF07LP35).",
    resume:
      'Na elaboração do currículo, convém que o desenvolvimento desta habilidade venha sempre associado a práticas de leitura, produção ou oralidade, de forma que o aluno possa observar esses processos em ação e refletir sobre como são produtivos e criativos. Portanto, a apropriação desses mecanismos pelo aluno é o seu foco, e não a memorização da terminologia gramatical correspondente. Jogos de invenção de palavras compostas por aglutinação e/ou justaposição, com o objetivo de refletir sobre a significação resultante, podem ser muito produtivos. Exemplo: formação de grupos que experimentem criar palavras usando os processos estudados e depois desafiando os demais a explicitar os recursos usados e os sentidos resultantes (Por exemplo, o que significa "lava-lento"?). Propostas de produção de textos criativos, como os literários e os publicitários, também podem propiciar situações adequadas para esse estudo. A progressão curricular pode apoiar-se no tipo de mecanismo a ser estudado (aglutinação/justaposição) assim como no grau de complexidade dos gêneros e textos mobilizados.',
  },
  {
    id: "EF08LP06",
    competences: "LP",
    group_years: "08",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF08LP06",
    comment:
      "Esta habilidade se refere ao reconhecimento da estrutura básica de uma oração em textos lidos ou próprios. Está, portanto, diretamente relacionada ao desenvolvimento de todas as demais habilidades de análise com foco na sintaxe da oração e do período. Requer a observação da organização sintática do texto e reflexões a respeito do papel dela na construção da textualidade e na produção de efeitos de sentido. Envolve, ainda, um conhecimento prévio de classes de palavras e das funções e categorias gramaticais associadas a cada uma delas.",
    resume:
      'Na elaboração do currículo, recomenda-se que o desenvolvimento desta habilidade não se constitua como um fim em si mesmo, mas que contribua para uma compreensão global, por parte do aluno, do papel da sintaxe no funcionamento da língua. Isso significa propor atividades que associem essas análises à leitura e à produção de textos, com foco nos efeitos de sentido que podem se associar às estruturas sintáticas em estudo. Atividades lúdicas, em que os alunos possam explorar livremente diferentes alternativas de estruturação de um "mesmo" enunciado, podem contribuir significativamente para a percepção e compreensão da natureza e do funcionamento dos mecanismos sintáticos em jogo. (Tal como está formulada, EF08LP06 é a retomada de uma habilidade prevista para o ano anterior, EF07LP06.) A habilidade se constitui em uma progressão vertical da habilidade anterior. A progressão horizontal pode apoiar-se no constituinte oracional a ser abordado a cada etapa (modificadores do sujeito/complementos e modificadores do núcleo verbal) e/ou no grau de complexidade dos gêneros e textos programados para estudo.',
  },
  {
    id: "EF08LP07",
    competences: "LP",
    group_years: "08",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF08LP07",
    comment:
      "A habilidade refere-se ao estudo da regência de verbos de uso frequente, analisando os efeitos de sentido que podem ser provocados ou pelo uso indevido de preposições, ou por inadequações na escolha delas. Abrange a análise do emprego desses complementos em textos de todos os campos de atuação, por meio de leituras de diferentes gêneros, nas quais a regência verbal possa ser observada e analisada em contextos e usos diversos.",
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade pode organizar-se com base em dois pontos articulados: 1) resolver algum problema de compreensão/redação, considerando o sentido provocado ou pelo uso inadequado ou pela ausência de alguma preposição; 2) sistematizar o conhecimento discutido na etapa anterior (1). Sugere-se — especialmente para a sistematização — que as atividades sejam organizadas a partir do estudo comparativo de enunciados nos quais um mesmo verbo é empregado com regências ou inadequadas ou com alteração de sentidos. Recomenda-se, ainda, que a metalinguagem só seja empregada depois de compreendido o aspecto em foco. Do ponto de vista da progressão horizontal, sugere-se, inicialmente, um trabalho colaborativo (coletivo e em grupos/duplas), que progrida para o autônomo. Um segundo critério é a complexidade dos gêneros e textos previstos para o estudo em cada momento.",
  },
  {
    id: "EF08LP08",
    competences: "LP",
    group_years: "08",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF08LP08",
    comment:
      "A habilidade refere-se ao estudo das vozes do verbo, com foco nos efeitos de sentido provocados pelo uso de uma ou de outra, tanto na leitura quanto em produções próprias. Abrange a análise do emprego desses verbos em gêneros e textos de todos os campos de atuação. Isso implica leituras e/ou produções nas quais a (re)construção dos sentidos do texto envolva as diferenças entre as vozes do verbo.",
    resume:
      "Na elaboração do currículo, convém que o desenvolvimento desta habilidade se organize com base em dois pontos articulados: 1) realizar uma leitura menos superficial do texto, analisando os efeitos de sentido provocados pelo uso das vozes do verbo; 2) sistematizar o conhecimento produzido no momento anterior (1). Em ambos os casos, sugere-se que as atividades sejam organizadas a partir de estudo comparativo de enunciados organizados na voz passiva e na ativa, analisando os efeitos de sentido decorrentes dessa organização sintática. Recomenda-se, ainda que o estudo da voz passiva sintética, muito presente em textos de divulgação científica e argumentativos, e que a metalinguagem só sejam empregados depois de compreendido o aspecto em foco. Do ponto de vista da progressão horizontal, sugere-se, inicialmente, um trabalho colaborativo (coletivo e em grupos/duplas), que progrida para o autônomo. Um segundo critério é a complexidade dos gêneros e textos previstos para o estudo em cada momento.",
  },
  {
    id: "EF08LP09",
    competences: "LP",
    group_years: "08",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF08LP09",
    comment:
      "A habilidade refere-se ao estudo dos modificadores, incluindo os determinantes (artigos, numerais e pronomes), na perspectiva dos sentidos que eles imprimem aos substantivos, tanto na leitura quanto em produções próprias. Abrange a análise do emprego deles em textos de todos os campos de atuação, pressupondo práticas de leitura e/ou produção nas quais a (re)construção dos sentidos do texto esteja relacionada aos efeitos produzidos pelo uso de modificadores do sujeito ou do objeto (direto ou indireto).",
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade pode organizar-se com base em dois pontos articulados: 1) resolver problemas de compreensão/redação decorrentes de sentidos associados ao substantivo por modificadores; 2) sistematizar o conhecimento discutido na etapa anterior (1). Em ambos os casos, sugere-se que as atividades sejam organizadas focalizando os sentidos que os modificadores acrescentam aos substantivos e, portanto, aos enunciados, e a relação dessa modificação com os significados pretendidos para o texto. Recomenda-se, ainda, que a metalinguagem seja empregada depois de compreendido o aspecto em foco. Do ponto de vista da progressão horizontal, sugere-se, inicialmente, um trabalho colaborativo (coletivo e em grupos/duplas), que progrida para o autônomo. Um segundo critério é a complexidade dos gêneros e textos previstos para o estudo.",
  },
  {
    id: "EF08LP10",
    competences: "LP",
    group_years: "08",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF08LP10",
    comment:
      "A habilidade refere-se ao estudo dos sentidos que os modificadores (adjuntos adverbiais, advérbios e expressões adverbiais), imprimem aos verbos, sendo importante considerá-los tanto no processo de leitura de um texto quanto nas produções próprias. Abrange a análise do emprego deles em textos de todos os campos de atuação, pressupondo práticas de leitura e/ou produção nas quais a (re)construção dos sentidos do texto esteja relacionada aos efeitos produzidos pelo uso de modificadores verbais.",
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade pode organizar-se com base em dois pontos articulados: 1) resolver um problema de compreensão/redação decorrente de sentidos apresentados ao verbo por modificadores; 2) sistematizar o conhecimento discutido na etapa anterior (1). Em ambos os casos, sugere-se que as atividades sejam organizadas focalizando os sentidos que os modificadores acrescentam aos verbos e, portanto, aos enunciados, e a relação dessa modificação com os significados pretendidos para o texto. Recomenda-se, ainda, que a metalinguagem seja empregada depois de compreendido o aspecto em foco. Do ponto de vista da progressão horizontal, sugere-se, inicialmente, um trabalho colaborativo (coletivo e em grupos/duplas), que progrida para o autônomo. Um segundo critério é a complexidade dos gêneros e textos previstos para o estudo.",
  },
  {
    id: "EF08LP11",
    competences: "LP",
    group_years: "08",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF08LP11",
    comment:
      "O foco desta habilidade (diretamente relacionada à apreensão da organização sintática do texto) está na percepção do período como agrupamento de orações, com base em dois princípios distintos: a coordenação e a subordinação. Requer a observação da organização sintática do texto e reflexões a respeito, identificando agrupamentos de orações, apreendendo o princípio de sua organização interna e percebendo seu papel na (re)construção dos sentidos do texto. Envolve, ainda, um conhecimento prévio de classes de palavras e funções e categorias gramaticais associadas a cada uma delas.",
    resume:
      "Na elaboração do currículo, para reflexão e análise linguística/semiótica, é necessário que o estudo dos tópicos gramaticais envolvidos seja realizado em contextos de uso, e não em atividades isoladas. Por essa razão, sugere-se que esses conteúdos sejam propostos sempre vinculados à leitura, à produção e à revisão, com vistas à compreensão de seu papel na (re)construção do texto e na produção de efeitos de sentido determinados. Recomenda-se: (a) que o foco do trabalho seja a resolução de problemas de compreensão e manutenção da legibilidade do texto, considerando-se as intenções de significação; (b) que a compreensão de cada aspecto anteceda a sistematização; (c) que a metalinguagem seja empregada de modo que o aluno compreenda o que se diz. Ao longo do ano, a progressão pode apoiar-se seja no foco da identificação das orações no contexto do período em que ocorrem (coordenadas/subordinadas), seja na complexidade dos gêneros e textos envolvidos nas práticas de leitura/produção programadas para o desenvolvimento da habilidade.",
  },
  {
    id: "EF08LP12",
    competences: "LP",
    group_years: "08",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF08LP12",
    comment:
      "A habilidade refere-se ao estudo da organização do enunciado em períodos compostos por subordinação, tanto no processo de leitura quanto no de produção, procurando analisar os sentidos produzidos por esse tipo de organização sintática. Abrange a análise do emprego deles em textos de todos os campos de atuação, pressupondo práticas de leitura e/ou produção nas quais a (re)construção dos sentidos do texto esteja relacionada aos efeitos produzidos pelas conjunções em processos de subordinação.",
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade pode organizar-se com base em dois pontos articulados: 1) resolver um problema de compreensão/redação decorrente da organização sintática do enunciado por período composto por subordinação; 2) sistematizar o conhecimento discutido na etapa anterior (1). Sugere-se que as atividades sejam organizadas focalizando as diferentes possibilidades de organização sintática do enunciado, considerando a legibilidade do texto, as intenções de significação e as possibilidades de compreensão do interlocutor. Recomenda-se, ainda, que a metalinguagem só seja empregada depois de compreendido o aspecto em foco. Do ponto de vista da progressão horizontal, sugere-se, inicialmente, um trabalho colaborativo (coletivo e em grupos/duplas), que progrida para o autônomo. Um segundo critério é a complexidade dos gêneros e textos previstos para o estudo.",
  },
  {
    id: "EF08LP13",
    competences: "LP",
    group_years: "08",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF08LP13",
    comment:
      "A habilidade refere-se à compreensão das relações de sentido estabelecidas entre trechos do texto pelas conjunções e articuladores textuais, seja na leitura e compreensão de um texto, seja em produções próprias. Abrange a análise do emprego desses recursos em textos de todos os campos de atuação, pressupondo práticas de leitura e/ou produção nas quais a (re)construção dos sentidos do texto esteja relacionada aos efeitos produzidos pelas conjunções e por diferentes articuladores textuais.",
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade pode organizar-se com base em dois pontos articulados: 1) resolver um problema de compreensão/redação decorrente do emprego de uma determinada conjunção ou articulador; 2) sistematizar o conhecimento discutido na etapa anterior (1). Sugere-se que as atividades sejam organizadas focalizando diferentes possibilidades de articulação dos trechos, os articuladores correspondentes, considerando tanto a legibilidade do texto, como as intenções de significação e as possibilidades de compreensão do interlocutor. Recomenda-se, ainda, que a metalinguagem só seja empregada depois de compreendido o aspecto em foco. Conferir, ainda, comentários realizados à (EF06LP05). Do ponto de vista da progressão horizontal, sugere-se, inicialmente, um trabalho colaborativo (coletivo e em grupos/duplas), que progrida para o autônomo. Um segundo critério é a complexidade dos gêneros e textos previstos para o estudo.",
  },
  {
    id: "EF08LP14",
    competences: "LP",
    group_years: "08",
    field: "01",
    unit: "LP08",
    object: "Semântica",
    skill: "EF08LP14",
    comment:
      "Trata-se de uma habilidade essencial para o desenvolvimento da competência em escrita, mas também se aplica à análise da coesão textual em atividades de leitura. Seu foco é o emprego da adequação expressiva de recursos de coesão (referencial e sequencial) na produção escrita ou oral. Envolve o uso de recursos da língua que: (1) evitam a repetição indesejada de palavras; (2) ajudam o leitor a resgatar, durante a leitura, o objeto/fato/assunto de que o texto trata; (3) ajudam a compreender a ordem de acontecimento das ações; (4) ajudam a identificar as diferentes vozes do texto e a produzir efeitos de sentido, como o da impessoalidade. Também demanda a análise da situação de comunicação, das características do gênero e das intenções e/ou objetivos a serem perseguidos.",
    resume:
      "Na elaboração do currículo, convém que o desenvolvimento desta habilidade seja programado em associação com práticas de oralidade, leitura ou escrita de textos dos gêneros previstos para estudo. Será nessas condições que o aluno poderá refletir sobre a adequação expressiva do(s) recurso(s) que pretenda empregar.  Em caso de produções escritas, recomenda-se que os currículos prevejam atividades de produção e revisão em que o foco seja o uso desses elementos coesivos na construção do texto de um determinado gênero. Em caso de textos orais, podem ser analisadas, coletivamente, apresentações previamente gravadas. A progressão, vertical ou horizontal, pode apoiar-se no tipo de recurso coesivo a ser abordado, no grau de complexidade dos gêneros ou textos a serem considerados e no nível de autonomia que se pretende levar o aluno a conquistar.",
  },
  {
    id: "EF08LP15",
    competences: "LP",
    group_years: "08",
    field: "01",
    unit: "LP08",
    object: "Coesão",
    skill: "EF08LP15",
    comment:
      "Esta habilidade tem como foco o (re)estabelecimento de relações entre partes do texto, com base na identificação do antecedente de um pronome relativo ou do referente comum a diversos termos do texto. Trata-se de uma habilidade essencial para a (re)construção do texto e para a conquista de níveis superiores de proficiência em escrita, em qualquer campo de atuação e em qualquer gênero. Implica conhecimentos prévios sobre pronomes relativos e sobre as categorias gramaticais a que essa classe de palavras está associada (pressupõe as habilidades EF07LP12 e EF07LP13).",
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade pode organizar-se com base em dois pontos articulados: 1) resolver um problema de compreensão/redação decorrente da presença e/ou emprego de pronomes relativos, seus antecedentes e/ou referentes comuns de cadeias de substituição lexical; 2) sistematizar o conhecimento discutido na etapa anterior (1). Sugere-se que as atividades sejam organizadas com base em práticas de leitura e produção, focalizando as diferentes possibilidades de referenciação no processo de coesão, considerando a legibilidade do texto, as intenções de significação e as possibilidades de compreensão do interlocutor. Recomenda-se que a metalinguagem só seja empregada depois de compreendido o aspecto em foco. A progressão ao longo do ano pode apoiar-se no tipo de recurso selecionado para estudo (substituição sinonímica/substituição pronominal) e no grau de complexidade dos gêneros e textos envolvidos nas práticas previstas. Sugere-se, inicialmente, um trabalho colaborativo (coletivo e em grupos/duplas), que progrida para o autônomo.",
  },
  {
    id: "EF08LP16",
    competences: "LP",
    group_years: "08",
    field: "01",
    unit: "LP08",
    object: "Modalização",
    skill: "EF08LP16",
    comment:
      "O foco desta habilidade está na explicação dos efeitos de sentido produzidos por estratégias argumentativas e/ou de modalização, em textos dos mais diversos gêneros, relacionados a qualquer campo de atuação. Trata-se de uma habilidade necessária à compreensão (a) das atitudes que o locutor/escritor pode assumir em relação àquilo que diz (estratégias de modalização), como parte de seu ponto de vista particular; (b) dos recursos de que ele se vale para convencer ou persuadir o ouvinte/leitor. (Relaciona-se com a habilidade EF07LP14).",
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade pode organizar-se com base em dois pontos articulados: 1) resolver problemas de compreensão decorrentes da presença de estratégias de modalização ou argumentação, também relevantes para (re)estabelecer a progressão temática; 2) sistematizar o conhecimento discutido na etapa anterior (1). Recomenda-se propostas de leitura e/ou produção de textos em que as estratégias de modalização e/ou de argumentação sejam necessárias à eficácia do texto. Convém, portanto, que a metalinguagem só seja empregada depois de compreendido(s) o(s) texto(s) e o aspecto em foco. A progressão horizontal pode apoiar-se no tipo de estratégia visada  (modalização/argumentação) e no grau de complexidade dos gêneros e textos selecionados para o estudo. Sugere-se, inicialmente, um trabalho colaborativo (coletivo e em grupos/duplas), que progrida para o autônomo.",
  },
  {
    id: "EF89LP01",
    competences: "LP",
    group_years: "89",
    field: "06",
    unit: "LP07",
    object:
      "Reconstrução do contexto de produção, circulação e recepção de textos\nCaracterização do campo jornalístico e relação entre os gêneros em circulação, mídias e práticas da cultura digital",
    skill: "EF89LP01",
    comment:
      "O desenvolvimento desta habilidade demanda abordagens do jornalismo em diferentes mídias, apontando-se para a relação entre o campo jornalístico e o publicitário, por exemplo, uma vez que a venda de anúncios é fundamental para instituições e programas jornalísticos. Essa relação entre os campos acarreta interesses que podem impactar a escolha do que será destaque ou a abordagem que será dada a um fato ou assunto.",
    resume:
      "Na elaboração do currículo, analisar os aspectos referidos na habilidade envolve a inclusão de reflexões sobre: a rapidez e a instantaneidade das informações e suas consequências (dentre elas, o risco de um tratamento superficial do fato ou assunto); a criação de canais de notícias independentes; a abertura para uma participação mais ativa dos leitores que influenciam as pautas dos jornais e se tornam produtores de conteúdo (com envio de fotos, vídeos e textos verbais); o fenômeno das fake news e a presença mais ostensiva da propaganda. Dada a importância dessas reflexões, a progressão se faz de forma predominantemente vertical, possibilitando, de um ano para outro, o seu aprofundamento.Há, aqui, oportunidade para o trabalho interdisciplinar com a habilidade (EF09LI06), da Língua Inglesa, no que se refere à distinção e análise da qualidade das informações em textos jornalísticos.",
  },
  {
    id: "EF89LP02",
    competences: "LP",
    group_years: "89",
    field: "06",
    unit: "LP07",
    object:
      "Reconstrução do contexto de produção, circulação e recepção de textos\nCaracterização do campo jornalístico e relação entre os gêneros em circulação, mídias e práticas da cultura digital",
    skill: "EF89LP02",
    comment:
      "A esta habilidade podem se associar aprendizagens que favoreçam o protagonismo discursivo potencializado pela chamada web 2.0, que ampliou os modos de participação dos sujeitos como leitores e produtores de textos. Supõe-se o desenvolvimento da habilidade de reconhecer as intencionalidades do outro (por meio da análise dos recursos usados na produção dos sentidos do que o outro disse) e de se posicionar criticamente em relação ao que lê — o que significa desenvolver habilidades para uma participação qualificada do adolescente e do jovem.",
    resume:
      'Na elaboração do currículo, é importante considerar que, para uma presença mais crítica e ética nas redes, é necessário um trabalho com as capacidades de leitura mais complexas, como as que exigem do leitor um posicionamento e uma apreciação ética sobre o que se lê. É importante favorecer discussões sobre as consequências de se compartilhar ou "curtir" informações e opiniões que expressem desrespeito ou veiculem preconceito ou ódio, investindo na preparação dos alunos para uma curadoria de textos, além da averiguação da fidedignidade das informações e da pesquisa de diferentes perspectivas sobre uma questão, de forma a construírem uma visão mais ampla e complexa sobre ela e as comentarem com mais propriedade, recusando os discursos inflamados, unilaterais e antiéticos.Há, aqui, oportunidade para o trabalho interdisciplinar com a habilidade (EF09LI13), da Língua Inglesa, no que se refere ao reconhecimento e análise de diferentes práticas e textos pertencentes a diferentes gêneros da cultura digital.',
  },
  {
    id: "EF89LP03",
    competences: "LP",
    group_years: "89",
    field: "06",
    unit: "LP07",
    object:
      "Estratégia de leitura: apreender os sentidos globais do texto\nApreciação e réplica",
    skill: "EF89LP03",
    comment:
      'Esta habilidade supõe reconhecer como opinião e argumentação se constroem com recursos das diferentes linguagens que constituem os gêneros referidos na habilidade, buscar informações para aprofundar o conhecimento sobre o assunto/fato que é objeto de crítica e selecionar argumentos relevantes, que fundamentem seu posicionamento, pautados no respeito ao outro. O desenvolvimento desta habilidade é importante também para a produção de textos, uma vez que a análise tem como fim uma "resposta do leitor".',
    resume:
      "Na elaboração do currículo, é importante convocar habilidades de leitura mais complexas, visto que é esperado do leitor se posicionar de forma fundamentada e ética em relação ao que lê. Apostar em modalidades didáticas que favoreçam a pesquisa e o aprofundamento sobre os assuntos/fatos em evidência pode contribuir muito para o desenvolvimento desta habilidade. Uma delas é a roda de leitura de textos jornalísticos, em que os alunos compartilham leituras feitas e exercitam a argumentação junto aos seus pares — o que também possibilita o exercício de respeito à palavra do outro.",
  },
  {
    id: "EF89LP04",
    competences: "LP",
    group_years: "89",
    field: "06",
    unit: "LP07",
    object:
      "Estratégia de leitura: apreender os sentidos globais do texto\nApreciação e réplica",
    skill: "EF89LP04",
    comment:
      "Esta habilidade diz respeito tanto às situações de leitura quanto às de produção de textos, na medida em que identificar e avaliar teses, opiniões, posicionamentos, argumentos e contra-argumentos sobre o que se lê/ouve são essenciais ao posicionamento crítico que se expressa em textos orais e escritos sobre o que foi lido/escutado. Nos 8º e 9º anos, espera-se que, ao se posicionarem, os alunos possam apresentar argumentos que justifiquem o posicionamento assumido com relação aos textos argumentativos analisados.",
    resume:
      "Na elaboração do currículo, é possível prever uma progressão curricular tanto na seleção dos gêneros argumentativos propostos como na complexidade dos textos dos variados gêneros. Independentemente do tipo de progressão que se decida propor, é importante que os alunos tenham acesso a exemplares dos gêneros que tratem de questões controversas ou de objetos culturais (no caso da resenha crítica e do comentário, especialmente) com os quais tenham familiaridade e possam mobilizar conhecimentos prévios para apoiá-los, tanto na avaliação de posições e argumentos nos textos de terceiros quanto na manifestação de discordância, visto que não é possível avaliar nem posicionar-se a respeito do que não se conhece.",
  },
  {
    id: "EF89LP05",
    competences: "LP",
    group_years: "89",
    field: "06",
    unit: "LP07",
    object: "Efeitos de sentido",
    skill: "EF89LP05",
    comment:
      "Esta habilidade diz respeito a perceber, em se tratando de textos jornalísticos, como os autores incorporam, em seus textos, os discursos de outros, e possibilita compreender, por exemplo, a relevância que essas vozes assumem no discurso do jornalista e como são usadas para dar ênfase ao recorte ou enfoque escolhido, sinalizando a não neutralidade de textos supostamente objetivos, como as notícias.",
    resume:
      "Na elaboração do currículo, é necessário considerar que o desenvolvimento desta habilidade possibilita ao leitor tecer apreciações sobre a abordagem dos textos jornalísticos. Diante de uma reportagem, por exemplo, perceber um predomínio de citações ou de discurso direto para trazer ao texto diferentes vozes que apresentam uma mesma ideia, versão ou um mesmo posicionamento sobre o fato ou assunto, em oposição a outras vozes discordantes a essa ideia, versão ou posicionamento que são apenas parafraseadas pelo jornalista, pode sinalizar uma tendência do autor a enfatizar as vozes dos primeiros.",
  },
  {
    id: "EF89LP06",
    competences: "LP",
    group_years: "89",
    field: "06",
    unit: "LP07",
    object: "Efeitos de sentido",
    skill: "EF89LP06",
    comment:
      "Esta habilidade envolve as seguintes operações mentais: observar, reconhecer e compreender o modo como os recursos linguísticos ou de outras linguagens são usados na construção de discursos persuasivos em textos argumentativos. Implica uma progressão em relação à habilidade (EF67LP07).",
    resume:
      "Na elaboração do currículo, é importante considerar que analisar um argumento de autoridade usado para sustentar uma opinião, por exemplo, é ir além da identificação desse tipo de argumento no texto. Analisar implica uma avaliação (portanto, um exercício de crítica) da sua pertinência, considerando o contexto de uso, por exemplo. A progressão no desenvolvimento desta habilidade pode ser marcada pelo grau de complexidade da seleção dos textos argumentativos e pela variedade dos gêneros propostos, dentre eles, comentários, crônicas, artigos de opinião, charges, propagandas etc.",
  },
  {
    id: "EF89LP07",
    competences: "LP",
    group_years: "89",
    field: "06",
    unit: "LP07",
    object: "Efeitos de sentido Exploração da multissemiose",
    skill: "EF89LP07",
    comment:
      "A habilidade se trata de observar como os recursos das diferentes linguagens se articulam para produzir sentidos. Por exemplo, entender, em uma peça publicitária para televisão, como imagem em movimento, cenário, luzes, fundo musical e texto verbal se articulam para produzir um certo efeito de prazer ou de tensão, dependendo daquilo que se quer expressar; ou como, em uma reportagem ou notícia radiofônica, a entonação, as pausas, os efeitos sonoros etc., ajudam a produzir este ou aquele efeito.",
    resume:
      "Na elaboração do currículo, tendo em vista que esta habilidade é proposta para os dois últimos anos desse segmento de ensino, é possível prever uma progressão horizontal, elegendo as notícias e reportagens multimídias para o 8º ano e as peças publicitárias multimídias, para o 9º; ou propor uma progressão vertical, trabalhando com esses gêneros nos dois anos e elegendo textos mais complexos no último ano.",
  },
  {
    id: "EF89LP08",
    competences: "LP",
    group_years: "89",
    field: "06",
    unit: "LP09",
    object: "Estratégia de produção: planejamento de textos informativos",
    skill: "EF89LP08",
    comment:
      "Do mesmo modo que o desenvolvimento da habilidade (EF67LP09), esta habilidade trata do processo implicado na prática de produzir textos: definir/considerar as condições em que o texto será produzido; planejar (seleção de fato/assunto, escolha do gênero, curadoria de informação, elaboração de esquema do texto a ser produzido parte a parte); produzir (elaboração do texto, recorrendo aos recursos das diferentes linguagens); e, implicitamente, revisar (avaliar a adequação do texto, considerando o contexto em que vai circular, e realizar ajustes necessários, aplicando os conhecimentos construídos sobre os recursos linguísticos e semióticos). Nesta habilidade, o foco é desenvolver, principalmente, a habilidade de planejamento.",
    resume:
      "Na elaboração do currículo, é possível considerar que o planejamento e produção de uma reportagem podem ser considerados uma progressão no trabalho com a produção de textos jornalísticos, quanto: (1) aos esforços de pesquisa sobre o fato/assunto e à elaboração do texto, envolvendo, por exemplo, a consulta de maior número de fontes e a articulação de diferentes vozes; (2) ao uso de recursos de outras linguagens na produção de sentidos. Planejar para uma ou outra mídia, em um ou outro gênero, também implica o uso de outros gêneros secundários diferenciados, como a produção de roteiros e entrevistas. O texto mais longo e o tratamento mais aprofundado do tema, numa reportagem, envolvem mais  articulações entre texto verbal e não verbal (efeitos sonoros, perspectiva da câmera, cortes de imagens etc. Sugere-se, ainda, que os currículos considerem o nível de autonomia do/a aluno/a, propondo, tanto na progressão horizontal quanto na vertical, trabalhos em colaboração que avancem para aqueles mais autônomos.",
  },
  {
    id: "EF89LP09",
    competences: "LP",
    group_years: "89",
    field: "06",
    unit: "LP09",
    object: "Estratégia de produção: textualização de textos informativos",
    skill: "EF89LP09",
    comment:
      "A habilidade trata do processo implicado na prática de produzir textos: definir/considerar o contexto em que o texto será produzido e circulará, planejar (seleção de fato/assunto, escolha do gênero, curadoria de informação, elaboração de esquema do texto a ser produzido parte a parte), produzir (elaboração do texto, recorrendo aos recursos das diferentes a linguagens) e, implicitamente, revisar (avaliar a adequação do texto, considerando o contexto em que irá circular, e realizar ajustes necessários, aplicando os conhecimentos construídos sobre os recursos linguísticos e semióticos).",
    resume:
      "Na elaboração do currículo, é possível considerar que a produção de uma reportagem pode ser considerada uma progressão no trabalho com a produção de textos jornalísticos, no gênero notícia, por exemplo, quanto: (1) aos esforços de pesquisa sobre o fato/assunto e à elaboração do texto, envolvendo, por exemplo, a consulta de maior número de fontes e a articulação de diferentes vozes; (2) ao uso de recursos de outras linguagens na produção de sentidos. Planejar para uma ou outra mídia, em um ou outro gênero, também implica o uso de gêneros secundários (mais elaborados) diferenciados, como a produção de roteiros e entrevistas. O texto mais longo e o tratamento mais aprofundado do tema, numa reportagem, envolvem mais  articulações entre texto verbal e não verbal (efeitos sonoros, perspectiva da câmera, cortes de imagens etc.). Sugere-se, ainda, que os currículos considerem o nível de autonomia do/a aluno/a, propondo, tanto na progressão horizontal quanto na vertical, trabalhos em colaboração que avancem para aqueles mais autônomos. Do ponto de vista didático, é indicado que os currículos contemplem um estudo das principais características dos gêneros selecionados e orientem a realização das diferentes operações de produção de textos, quais sejam: a) contextualização: definição da situação comunicativa em que o texto será produzido (quem serão os leitores, onde circulará, com que finalidade, em qual gênero); b) planejamento: que envolve a elaboração do conteúdo temático (o que será dito) e a organização do texto parte a parte; c) elaboração do texto: o processo da construção do texto (textualização); d) revisão processual (durante a produção) e final. Essas operações podem, inicialmente, ser realizadas em situações coletivas e em grupos, com mais apoio do professor e, de modo gradual, envolver graus crescentes de autonomia do/a aluno para realizá-la.",
  },
  {
    id: "EF89LP10",
    competences: "LP",
    group_years: "89",
    field: "06",
    unit: "LP09",
    object:
      "Estratégia de produção: planejamento de textos argumentativos e apreciativos",
    skill: "EF89LP10",
    comment:
      "A habilidade contempla uma das operações do processo de produção de textos: o planejamento, que deve ser realizado considerando o contexto de produção (interlocutores, intencionalidades etc). Como se trata de gênero que, nesse campo, exigem posicionamento crítico e opinativo, o planejamento envolve a preparação de argumentos, a escolha do movimento argumentativo e outras habilidades próprias de gêneros argumentativos, além de consulta a outras fontes/gêneros para construção do repertório temático. Orienta-se que se tenha especial atenção à escolha e relevância dos temas a serem planejados e produzidos e ao estudo das marcas linguísticas do artigo de opinião.",
    resume:
      "Na elaboração do currículo, é interessante considerar que a seleção do artigo de opinião para esses dois anos finais significa uma progressão no trabalho com os gêneros argumentativos desse campo. Planejar e produzir um artigo de opinião demanda apreciações de caráter político sobre os fatos/assuntos tratados. Em qualquer dos casos, a apreciação envolve assumir uma postura argumentativa ética. O planejamento de gêneros argumentativos como o artigo de opinião implica, ainda, mobilizar com maior intensidade habilidades que devolvam o pensamento crítico, visto que se propõe a dar uma resposta a uma questão polêmica que vai exigir do/a autor/a interpretar informações selecionadas, avaliar o raciocínio e explicar evidências. Os currículos podem propor uma progressão horizontal no trabalho com o gênero, em relação à mediação do professor e à colaboração entre pares: em colaboração em um ano (coletivo e em grupos), avançando para o trabalho com autonomia no ano seguinte.",
  },
  {
    id: "EF89LP11",
    competences: "LP",
    group_years: "89",
    field: "06",
    unit: "LP09",
    object:
      "Estratégias de produção: planejamento, textualização, revisão e edição de textos publicitários",
    skill: "EF89LP11",
    comment:
      "Esta habilidade refere-se à produção de textos como um processo que envolve etapas diferentes e mobiliza variadas habilidades, como (1) as relativas à curadoria de informação e à produção de roteiros e enquetes para pesquisa, considerando o contexto de produção definido, e a esquematização (o esboço) do texto, parte a parte; (2) as habilidades voltadas à aplicação dos recursos linguísticos e semióticos, na elaboração e revisão dos gêneros publicitários e suas diferentes peças.",
    resume:
      "Na elaboração do currículo, recomenda-se discutir a relação entre as esferas publicitária e jornalística, conforme sinalizado nas orientações relativas à leitura. Sugere-se uma progressão ao longo dos 4 anos finais, considerando os gêneros arrolados e a maior ou menor familiaridade dos/as alunos/as com um ou outro. Além do trabalho articulado com profissionais que usam aplicativos de edição de textos, da disponibilização desses aplicativos para os/as alunos/as, e do investimento no trabalho colaborativo, recomenda-se articular as propostas com a exploração dos documentos reguladores (campo da vida pública) da propaganda e publicidade, com vistas ao desenvolvimento de uma postura ética em relação à esfera publicitária.  Do ponto de vista didático, é indicado que os currículos contemplem um estudo das principais características dos gêneros selecionados.",
  },
  {
    id: "EF89LP12",
    competences: "LP",
    group_years: "89",
    field: "06",
    unit: "LP04",
    object:
      "Estratégias de produção: planejamento e participação em debates regrados",
    skill: "EF89LP12",
    comment:
      "Esta habilidade consiste em promover a vivência de diferentes papéis em um debate regrado: debatedor, apresentador/mediador, espectador (com ou sem direito a perguntas), e/ou de juiz/avaliador. Supõe um trabalho coletivo (para definição de questões gerais), em grupo (para definição de responsabilidades e planejamento da atuação) e individual, embora como parte de um grupo/coletivo (na vivência do papel definido).",
    resume:
      "Na elaboração do currículo, sugere-se que esta habilidade também seja vinculada a projetos interdisciplinares. Ela dialoga com habilidades dos campos da vida pública e práticas de estudo e pesquisa. Participar de um debate é ação complexa que mobiliza habilidades de curadoria de informação (na pesquisa para aprofundar o tema escolhido e para o preparo dos argumentos), de produção de textos argumentativos (mobilizando conhecimentos sobre movimentos argumentativos e recursos linguísticos para a construção das ideias que se quer apresentar/defender), além de outras habilidades próprias de situações orais que implicam tomada de notas enquanto o outro fala, uso de recursos de entonação, ritmo e expressão facial e corporal).",
  },
  {
    id: "EF89LP13",
    competences: "LP",
    group_years: "89",
    field: "06",
    unit: "LP04",
    object:
      "Estratégias de produção: planejamento, realização e edição de entrevistas orais",
    skill: "EF89LP13",
    comment:
      "Esta habilidade trata de tomar a entrevista tanto como texto autônomo quanto como um instrumento de coleta de informações para serem incorporadas a notícias. Cabe, em qualquer das situações, contemplar todo o processo implicado na produção de entrevistas: planejar (seleção de assunto e de quem será entrevistado, curadoria de informação etc.), produzir (elaboração do texto, recorrendo aos recursos das diferentes linguagens e aos aplicativos necessários, em caso de textos em áudio e vídeo) e, implicitamente, revisar (avaliar a adequação da entrevista ao meio em que circulará, se autônoma, ou selecionar e organizar os trechos relevantes para compor a notícia ou reportagem).",
    resume:
      'Na elaboração do currículo, as entrevistas são propostas na BNCC tanto como gêneros "autônomos" — em que o texto em si é o diálogo entre entrevistador e entrevistado(s) — quanto como gêneros que se hibridizam, se misturam a notícias, reportagens e outros textos. É importante considerar esses diferentes contextos e usos da entrevista no momento do planejamento. Por exemplo, se a entrevista for um texto integral, após definidos a finalidade e o recorte da entrevista e escolhido o entrevistado, as perguntas devem garantir um diálogo produtivo entre entrevistado e entrevistador. Se a entrevista a ser feita será para compor uma reportagem midiática, dependendo do fato/assunto e do recorte, pode haver mais de um entrevistado e pode ser necessário elaborar mais de um roteiro de perguntas.',
  },
  {
    id: "EF89LP14",
    competences: "LP",
    group_years: "89",
    field: "06",
    unit: "LP08",
    object:
      "Argumentação: movimentos argumentativos, tipos de argumento e força argumentativa",
    skill: "EF89LP14",
    comment:
      'A habilidade tem como foco a análise do funcionamento próprio de textos argumentativos/propositivos. Envolve reconhecer a posição do autor sobre a questão controversa; os argumentos sustentados; a conexão entre as ideias, muitas vezes evidenciada por recursos linguísticos ("É certo que/Por outro lado" etc.); a organização dos argumentos (hierarquização ou enumeração de motivos para sustentar uma posição, por exemplo).',
    resume:
      "Na elaboração do currículo, para avaliar a força dos argumentos, é preciso garantir que as habilidades apontem para uma atividade permanente de alimentação temática e para reflexões sobre temas atuais e controversos. Como uma habilidade definida para os dois últimos anos desse segmento de ensino, é desejável que os currículos programem atividades com textos argumentativos que apresentem os três movimentos, para que os(as) alunos possam se familiarizar com as marcas dessas construções textuais, de modo a construir um bom repertório no final do 9º ano. No currículo, a progressão pode se dar pelo aspecto da argumentação programado para estudo, pela complexidade dos gêneros e textos previstos, ou, ainda, pelo grau de autonomia do(a) aluno.",
  },
  {
    id: "EF89LP15",
    competences: "LP",
    group_years: "89",
    field: "06",
    unit: "LP08",
    object: "Estilo",
    skill: "EF89LP15",
    comment:
      "O foco desta habilidade está no domínio de operadores argumentativos em produções orais. A habilidade envolve compreensão do conteúdo temático e da questão controversa em jogo no debate, assim como da posição a ser assumida. Além disso, supõe a compreensão da posição contrária à defendida, de modo que seja possível colocar-se no lugar do opositor e negociar com ele (exercício de alteridade).",
    resume:
      "Na elaboração do currículo, sugere-se propor o estudo de debates gravados, focalizando os aspectos indicados (operador argumentativo e a relação com o posicionamento dos interlocutores), assim como a participação efetiva de debates, de modo a criar-se uma situação de exercício da habilidade estudada, já que a participação supõe réplicas e tréplicas às manifestações dos diferentes debatedores. Projetos envolvendo debates de questões polêmicas de relevância social (os efeitos do uso da tecnologia no mundo; consumo consciente; comportamentos que podem garantir uma vida sustentável ao planeta; o impacto do bulling na vida das pessoas, por exemplo) podem criar um espaço bastante propício ao desenvolvimento dessa habilidade. A progressão pode apoiar-se no grau de complexidade das questões controversas em debate, no foco a ser dado a cada atividade (pesquisa sobre o tema/planejamento/execução) e no nível de autonomia a ser atingido pelo aluno em cada etapa.",
  },
  {
    id: "EF89LP16",
    competences: "LP",
    group_years: "89",
    field: "06",
    unit: "LP08",
    object: "Modalização",
    skill: "EF89LP16",
    comment:
      "Esta habilidade tem como foco a modalização em textos jornalísticos narrativos e argumentativos. Isso implica: (a) o reconhecimento dos recursos linguísticos empregados; (b) a compreensão dos efeitos de sentido produzidos por meio desses recursos, assim como de seu enquadramento ideológico; (c) a análise da coerência desses efeitos em relação às intenções pretendidas.",
    resume:
      "Na elaboração do currículo, sugere-se que o desenvolvimento da habilidade aconteça tanto por meio da leitura de estudo, quanto das atividades de revisão. A sistematização e a terminologia técnica só são recomendadas se ocorrerem depois da compreensão do aspecto estudado. Assim, seu desenvolvimento só pode se dar de forma efetiva no interior de práticas de leitura e/ou produção de textos jornalísticos como os mencionados, e supõe o estudo prévio e/ou concomitante das estruturas gramaticais indicadas. O foco é a análise dos efeitos de sentido produzidos pelos recursos empregados, considerando a sua coerência tanto com as intenções presumidas do texto, quanto com as especificidades dos gêneros. O estudo da modalização é fundamental para uma compreensão crítica dos efeitos de neutralidade produzidos pelo discurso jornalístico. No currículo local, a progressão pode se dar tanto pelo uso da metalinguagem, quanto pela complexidade dos textos.",
  },
  {
    id: "EF89LP17",
    competences: "LP",
    group_years: "89",
    field: "03",
    unit: "LP07",
    object:
      "Reconstrução do contexto de produção, circulação e recepção de textos legais e normativos",
    skill: "EF89LP17",
    comment:
      "Esta habilidade supõe conhecer as histórias de luta de diferentes setores e grupos da sociedade (representantes de minorias) que, ao longo dos anos, conseguiram normatizar os seus direitos essenciais, como o direito à vida, à alimentação, educação, saúde e moradia. É essencial para ampliar a consciência sobre os direitos humanos em vários âmbitos da vida em sociedade e sobre o compromisso de uma atuação no coletivo, em defesa do Estado de direito.",
    resume:
      "Na elaboração do currículo, deve-se considerar que esta habilidade põe em jogo outras, especialmente as que se referem a identidades individuais e de grupos, bem como à necessidade de se colocar no lugar do outro, experimentando e valorizando diferentes vivências culturais e, ao mesmo tempo, atuando em favor da desconstrução de desigualdades que ferem direitos básicos, como o direito à vida (competências gerais 1, 2, 3, 4 e 7 da BNCC).A progressão pode se estabelecer a partir de questões do universo imediato do aluno, levando as discussões para o universo mais amplo e retornando para questões locais. Todas as habilidades do campo de atuação na vida pública podem estar vinculadas a projetos interdisciplinares, uma vez que a diversidade humana é objeto de estudo de diferentes perspectivas.Há, aqui, especial oportunidade para o trabalho interdisciplinar com a habilidade (EF09HI16), da História, no que se refere a conhecer e identificar relações entre textos legais sobre direitos humanos, as normas de convivência dos locais de vivência do aluno, processos de afirmação de direitos e instituições voltadas à defesa desses direitos.",
  },
  {
    id: "EF89LP18",
    competences: "LP",
    group_years: "89",
    field: "03",
    unit: "LP07",
    object:
      "Contexto de produção, circulação e recepção de textos e práticas relacionadas à defesa de direitos e à participação social",
    skill: "EF89LP18",
    comment:
      "Esta habilidade diz respeito a conhecer as características dos espaços de circulação de gêneros que impliquem solicitação e/ou reclamação de direitos, participação na vida política da escola, comunidade, estado ou país — e textos que possibilitem essas ações —, o que permite aos alunos que organizem o seu discurso (oral ou escrito) utilizando recursos adequados aos interlocutores, com vistas a atingir seus objetivos. São habilidades fundamentais para o exercício da cidadania.",
    resume:
      "Na elaboração do currículo, é recomendável que se criem condições para o conhecimento dos espaços referidos, assim como dos textos dos gêneros que neles circulam. Nesse estudo, é de grande relevância o levantamento das características e procedimentos convencionados para a obtenção de informações sobre propostas em estudo, e a participação de debates e manifestação de opiniões. A progressão pode se dar tanto pelo modo de tratamento do conteúdo — por frequentação ou para aprofundamento — quanto pela complexidade dos textos.",
  },
  {
    id: "EF89LP19",
    competences: "LP",
    group_years: "89",
    field: "03",
    unit: "LP07",
    object:
      "Relação entre contexto de produção e características composicionais e estilísticas dos gêneros\nApreciação e réplica",
    skill: "EF89LP19",
    comment:
      "Trata-se de habilidade de leitura para estudo das especificidades dos textos normativos jurídicos e reivindicatórios, visando à produção de textos dessa natureza, essenciais para a vida pública, especialmente em situações de defesa ou de debates sobre direitos do cidadão. Supõe-se o estudo desses gêneros no que diz respeito ao conteúdo — como pode se organizar e ser construído com os recursos linguísticos adequados, tendo em vista os objetivos pretendidos.",
    resume:
      "Na elaboração do currículo, é recomendável que o desenvolvimento de leitura e produção de textos dessa natureza tenha como contexto inicial as produções e questões locais. Sugere-se a definição de uma progressão para o trabalho com os textos reivindicatórios apresentados na descrição da habilidade. Cabe enfatizar, ainda, que a natureza dos textos reivindicatórios mobilizará habilidades propostas no campo jornalístico/midiático, visto que esses textos supõem o uso da argumentação.",
  },
  {
    id: "EF89LP20",
    competences: "LP",
    group_years: "89",
    field: "03",
    unit: "LP07",
    object:
      "Estratégias e procedimentos de leitura em textos reivindicatórios ou propositivos",
    skill: "EF89LP20",
    comment:
      "Esta habilidade implica mobilizar capacidades de leitura, tais como localização de informação, inferências e generalizações, bem como apreciações valorativas fundamentadas sobre as propostas políticas e soluções de problemas que resultem em tomadas de decisão. As habilidades relativas à curadoria de informações também se articulam a esta habilidade.",
    resume:
      "Na elaboração do currículo, pode-se desenvolver esta habilidade partindo da análise de propostas políticas e solução de problemas do contexto local — para depois compará-los a outros —, o que torna a abordagem dos textos indicados mais significativa para os alunos, uma vez que possibilitará uma avaliação da eficácia das propostas e soluções para o seu entorno. Para um trabalho mais significativo, também vale a pena enfatizar a importância de articular essas leituras em contextos de projetos que envolvam as diferentes áreas.",
  },
  {
    id: "EF89LP21",
    competences: "LP",
    group_years: "89",
    field: "03",
    unit: "LP09",
    object:
      "Estratégia de produção: planejamento de textos reivindicatórios ou propositivos",
    skill: "EF89LP21",
    comment:
      "A habilidade refere-se à investigação de problemas e questões que levarão à produção de gêneros reivindicatórios ou propositivos. Esta habilidade, prevista para os dois últimos anos, sinaliza uma progressão em relação à habilidade (EF67LP19), indicada para o 6º e 7º anos, que também faz referência a levantamento de questões ou problemas. A progressão suposta está (1) nos procedimentos envolvidos na investigação e na ampliação de alcance do público; (2) na geração de dados e na função deles para a produção de gêneros mais ou menos complexos. Supõe a leitura analítica de textos normativos e legais.",
    resume:
      "Na elaboração do currículo, é possível propor uma progressão para os dois anos indicados, em relação ao gênero a ser selecionado. Há articulação entre habilidades desse campo e do campo de práticas de estudo e pesquisa, quando as práticas deste último campo mobilizam habilidades que envolvem tomada de notas, sínteses de leituras, elaboração de entrevistas, enquetes etc.",
  },
  {
    id: "EF89LP22",
    competences: "LP",
    group_years: "89",
    field: "03",
    unit: "LP04",
    object:
      "Escuta\nApreender o sentido geral dos textos Apreciação e réplica Produção/Proposta",
    skill: "EF89LP22",
  },
  {
    id: "EF89LP23",
    competences: "LP",
    group_years: "89",
    field: "03",
    unit: "LP08",
    object: "Movimentos argumentativos e força dos argumentos",
    skill: "EF89LP23",
    comment:
      'A habilidade implica reconhecer, inicialmente, a especificidade dos movimentos argumentativos, indicando: (a) que a sustentação de uma posição supõe a apresentação de argumentos que fundamentem a posição defendida; (b) que a refutação implica a desqualificação da posição oposta à defendida no texto; (c) que a negociação requer a criação de um efeito de que o argumentador reconhece o valor de algum aspecto da posição contrária, validando-os, de modo a "quebrar" um pouco a resistência do oponente, aproximando-o da sua posição. Para tanto, é preciso identificar: a posição do autor sobre a questão em pauta; os argumentos e contra-argumentos apresentados; os recursos linguísticos usados para introduzir os diferentes movimentos argumentativos ("É certo que/Por outro lado" etc.). Finalmente, avaliar a força dos argumentos empregados no texto implica conhecer o tema e realizar reflexões não superficiais sobre ele.',
    resume:
      "Na elaboração do currículo, convém considerar que esta habilidade também vem relacionada, na BNCC, ao campo jornalístico/midiático. O que a diferencia quando associada ao campo da vida pública, como aqui, é a especificidade dos gêneros reivindicatórios, como as cartas de solicitação e reclamação, as cartas abertas, o abaixo assinado. A avaliação da força dos argumentos requer um trabalho permanente de alimentação temática e reflexões da turma sobre temas atuais e controversos. A progressão pode se dar pela complexidade do texto e do gênero; pelo tipo de tratamento didático — por frequentação (aos gêneros/textos) ou para aprofundamento; pelo grau de autonomia do aluno (em colaboração coletiva — em grupos, em duplas — ou de modo autônomo); pelo tratamento dado ao conteúdo — mais ou menos complexo, mais ou menos aprofundado, mais ou menos implicado à realidade cotidiana do aluno.",
  },
  {
    id: "EF89LP24",
    competences: "LP",
    group_years: "89",
    field: "03",
    unit: "LP07",
    object: "Curadoria de informação",
    skill: "EF89LP24",
    comment:
      "Esta habilidade se refere à curadoria de informação, com vistas à ampliação e qualificação da participação dos jovens nas diferentes esferas da vida pública. Por exemplo, para saber sobre seus direitos em alguma dimensão da vida pública, o aluno terá que buscar textos legais ou que circularam na mídia (reportagens, notícias, artigos de opinião etc.), nos quais possa fundamentar uma reivindicação ou reclamação.",
    resume:
      "Na elaboração do currículo, é necessário considerar que esta habilidade se articula com habilidades definidas para o campo de práticas de estudo e pesquisa, no que se refere ao cuidado com a curadoria de informação. Nesse sentido, procedimentos como grifar, fazer anotações, bem como produções de textos que apoiem a compreensão, como resumos, esquemas etc., serão importantes no processo de compreensão desses textos. Cuidados com a verificação da fidedignidade das fontes também precisam estar no foco. Além dos aspectos procedimentais envolvidos, o aluno também terá que mobilizar todos os conhecimentos construídos sobre os usos dos recursos linguísticos e seus efeitos de sentido, para avaliar o que selecionar em sua pesquisa.",
  },
  {
    id: "EF89LP25",
    competences: "LP",
    group_years: "89",
    field: "03",
    unit: "LP09",
    object: "Estratégias de escrita: textualização, revisão e edição",
    skill: "EF89LP25",
    comment:
      "Esta habilidade refere-se à apropriação de diferentes modos de divulgar pesquisas realizadas. Supõe o estudo das especificidades dos gêneros e da adequação de um ou outro ao contexto de produção, com destaque para a natureza dos resultados, as intencionalidades e o público provável. Envolve as operações de planejamento, produção e revisão do texto no gênero escolhido para divulgar os resultados.",
    resume:
      "Na elaboração do currículo, uma vez que se recomenda a proposição de pesquisa envolvendo as diferentes áreas no interior de projetos integradores, a divulgação de resultados pode culminar em feiras de ciências ou em eventos de fechamento do ano, possibilitando a produção de diferentes formas de divulgação que envolvam toda a comunidade escolar. Em currículos locais, esses eventos podem ser planejados entre várias escolas de uma mesma cidade ou de regiões diferentes no interior de um determinado estado. Por exemplo, pode-se prever a criação de site ou blog em que se concentrem produções dos dois anos que podem variar no gênero, visto que esses espaços suportam várias mídias.",
  },
  {
    id: "EF89LP26",
    competences: "LP",
    group_years: "89",
    field: "03",
    unit: "LP09",
    object: "Estratégias de escrita: textualização, revisão e edição",
    skill: "EF89LP26",
    comment:
      "Esta habilidade se refere aos procedimentos de planejamento e à elaboração de resenhas resultantes de variadas leituras de estudo, com cuidado para o tratamento dos dados e das informações coletadas durante a curadoria da informação. Envolve aprender a usar as vozes do/a aluno/a e das fontes consultadas na construção dos sentidos que se pretende. Por exemplo, se a intenção é reforçar uma determinada ideia ou posição, predominarão no texto vozes que reforcem essa ideia ou posição.",
    resume:
      "Na elaboração do currículo, é interessante considerar que os gêneros sugeridos na descrição da habilidade são gêneros de apoio à compreensão de textos. Comumente, são meios para se chegar a uma outra produção (a principal) ou para o estudo de apropriação de conceitos que serão aplicados em outros contextos. Recomenda-se que o trabalho com habilidades que favorecem a apropriação desta habilidade e dos gêneros nela implicados seja realizado em todos os componentes e áreas do currículo. Promover momentos de planejamento integrado envolvendo profissionais de todas as áreas para se prepararem para práticas comuns nesse sentido potencializará o aprendizado pelos/as alunos/as. Do ponto de vista didático, é indicado que os currículos contemplem um estudo das principais características dos gêneros selecionados.",
  },
  {
    id: "EF89LP27",
    competences: "LP",
    group_years: "89",
    field: "03",
    unit: "LP04",
    object: "Conversação espontânea",
    skill: "EF89LP27",
    comment:
      "Esta habilidade é solicitada em situações orais diversas, em contextos mais ou menos formais, em que se espera uma participação mais ativa da audiência. Supõe uma participação qualificada, apoiada em informações ouvidas ou coletadas e analisadas. A expressão corporal, o contato visual com o interlocutor, a entonação, além do respeito ao turno do outro e da postura ética devem ser foco da aprendizagem nessas participações.",
    resume:
      "Na elaboração do currículo, é importante considerar que a participação mais qualificada como audiência (parte do público a que se dirige um apresentador ou debatedor) implica a capacidade de identificar as informações mais relevantes, fazer inferências sobre o que é dito e relacioná-las a outras informações para, a partir disso, elaborar perguntas sobre possíveis dúvidas ou se posicionar e argumentar em relação ao que foi dito. As anotações resultantes da tomada de notas podem servir de apoio nessas situações. É importante garantir que essa participação qualificada seja solicitada frequentemente e que sejam propostos momentos de avaliação da turma sobre essas participações, no sentido de aprimorá-las.",
  },
  {
    id: "EF89LP28",
    competences: "LP",
    group_years: "89",
    field: "03",
    unit: "LP04",
    object: "Procedimentos de apoio à compreensão Tomada de nota",
    skill: "EF89LP28",
    comment:
      "Esta habilidade supõe o trabalho com a tomada de notas para diferentes fins: (1) para alimentar outras produções escritas com a finalidade de documentar processos e resultados do que foi apreendido a partir do conteúdo assistido; (2) para registro pessoal, visando a reflexão sobre o registrado; (3) como apoio à fala durante a participação em situações orais como discussões, debates, seminários.",
    resume:
      "Na elaboração do currículo, é válido levar em consideração que a tomada de notas como registro é considerada um gênero de apoio à compreensão do ouvido, assistido. Como procedimento, está vinculada a diferentes situações, em qualquer campo de atuação. É comum em práticas como debate, palestras, reuniões, aulas e suas variantes em outras mídias. Supõe a capacidade de identificar informações relevantes e sintetizá-las em notas, de modo coerente, garantindo a possibilidade de retomada das ideias pelo(a) seu(sua) autor(a). Pode ser proposta uma progressão que indique tanto a variação dos objetivos da tomada de notas, quanto a situação em que ela é solicitada.",
  },
  {
    id: "EF89LP29",
    competences: "LP",
    group_years: "89",
    field: "03",
    unit: "LP08",
    object: "Textualização Progressão temática",
    skill: "EF89LP29",
    comment:
      "Esta habilidade refere-se ao campo de atuação na vida pública e, mais especificamente, aos textos de divulgação do conhecimento. Remete aos estudos de como acontece, em tais textos, a progressão do tema, considerando elementos específicos de coesão, seja referencial, seja sequencial; ou, ainda, o uso de organizadores textuais (os conectivos empregados no interior de e entre frases), por meio de leitura e produção de textos, nos quais seja possível perceber os mecanismos em questão e refletir a seu respeito.",
    resume:
      "Na elaboração do currículo, o desenvolvimento da habilidade pode ser contextualizado em projetos de produção de revistas (impressas ou digitais) de divulgação de conhecimentos, blogs e/ou vlogs e murais temáticos, relacionados a trabalhos interdisciplinares. Recomenda-se: a) que o estudo dos aspectos referidos seja programado por meio de atividades de leitura e/ou produção de textos que considerem os efeitos de sentido por eles produzidos e a relação que estabelecem entre os trechos do enunciado; c) que a sistematização dos conhecimentos e metalinguagem correspondente (terminologia gramatical) só sejam realizadas/empregadas depois que os aspectos em foco tiverem sido compreendidos. A progressão, tanto vertical quanto horizontal, pode tomar como critérios: (a) os mecanismos de progressão temática a serem estudados a cada momento; (b) a sequenciação entre leitura compreensiva prévia do texto e a análise de algum(ns) desses mecanismos; (c) o grau de complexidade do gênero ou texto a ser analisado; (d) o nível de autonomia a ser conquistado pelo aluno a cada etapa.",
  },
  {
    id: "EF89LP30",
    competences: "LP",
    group_years: "89",
    field: "03",
    unit: "LP08",
    object: "Textualização",
    skill: "EF89LP30",
    comment:
      "Esta habilidade (assim como a EF67LP26) supõe que a análise empreendida na leitura de hipertextos em ambiente digital poderá favorecer a produção deles. Consiste em compreender que os links em textos de divulgação científica, em ambiente digital, levam a outros conteúdos que mantêm uma relação direta com o assunto tratado no hipertexto de origem, seja de complementariedade, seja de aprofundamento. Requer a observação, a reflexão e a análise de hipertextos.",
    resume:
      "Na elaboração do currículo (assim como indicado para a habilidade EF67LP26), é recomendável a colaboração entre todas as áreas, com vistas a contemplar textos de divulgação científica de todas elas, de modo que, de um lado, o professor de Língua Portuguesa possa colaborar com os demais, no sentido de orientar, por exemplo, o ensino de procedimentos de leitura e de produção desses textos, e, de outro, os demais professores possam colaborar com o de Língua Portuguesa, orientando-o quanto aos recursos das linguagens específicas (cartografia, gráficos/infográficos, simulações, por exemplo) usados na construção de sentidos dos textos. É condição para isso que os currículos prevejam projetos e/ou atividades interdisciplinares, com acesso irrestrito a computadores conectados à Internet. A progressão, tanto vertical quanto horizontal, pode combinar diferentes critérios: (a) a ênfase sobre a leitura de estudo preliminar desses textos em ambientes digitais ou sobre a análise do hipertexto e seus links; (b) o grau de complexidade dos gêneros e textos selecionados para estudo; (c) o nível de autonomia a ser conquistado pelo aluno em cada momento.",
  },
  {
    id: "EF89LP31",
    competences: "LP",
    group_years: "89",
    field: "03",
    unit: "LP08",
    object: "Modalização",
    skill: "EF89LP31",
    comment:
      "Trata-se de analisar os efeitos de sentido produzidos pelos recursos empregados — a modalização epistêmica —, considerando a sua coerência tanto com as intenções presumidas do texto, quanto com a especificidade do gênero, considerando campo de atuação, finalidade e espaço de circulação. Além disso, está associada aos textos argumentativos e às habilidades que envolvem o reconhecimento dos movimentos de sustentação, refutação e argumentação (relaciona-se com a habilidade EF89LP23).",
    resume:
      "Na elaboração do currículo, tal como apontado para as habilidades (EF89LP16) e (EF69LP28), sugere-se que o desenvolvimento aconteça tanto por meio da leitura/escuta de estudo, quanto das atividades de produção e revisão de textos orais e escritos. Isso porque analisar a modalização está associado ao uso desses recursos em ações de linguagem, tanto na condição de produtor como de interlocutor dos respectivos textos. A progressão pode se dar pela complexidade do texto e/ou do gênero e pelo grau de autonomia do aluno ao realizar o trabalho (em colaboração — coletiva, em grupos, em duplas — e de modo autônomo).",
  },
  {
    id: "EF89LP32",
    competences: "LP",
    group_years: "89",
    field: "05",
    unit: "LP07",
    object: "Relação entre textos",
    skill: "EF89LP32",
    comment:
      'Assim como a habilidade (EF67LP27), esta habilidade supõe o estudo comparado das obras literárias entre si e com outras linguagens, mas significa uma progressão em relação à anterior por priorizar, para além da identificação das relações intertextuais, a análise dos efeitos de sentido produzidos por elas, implicando, inclusive, o estudo de gêneros multimidiáticos que são uma "resposta" do público em relação às produções baseadas no original, como é o caso do trailer honesto e do vidding (que são produções feitas por fãs das obras de literatura, cinema etc.)',
    resume:
      "Na elaboração do currículo, a progressão pode ser formulada com base nos gêneros propostos, partindo do estudo das relações intertextuais entre obras literárias de diferente tempos e, em seguida, de adaptações de obras para outras linguagens (do romance para o cinema) para, posteriormente, propor um estudo comparativo entre a obra original e produções parodísticas, seja de empresas, seja de fãs. A habilidade abrange, ainda, o estudo de recursos estilísticos, como a ironia e a hipérbole — construídas tanto com recursos verbais como com recursos de outras linguagens.",
  },
  {
    id: "EF89LP33",
    competences: "LP",
    group_years: "89",
    field: "05",
    unit: "LP07",
    object: "Estratégias de leitura Apreciação e réplica",
    skill: "EF89LP33",
    comment:
      "A habilidade refere-se a procedimentos e estratégias que podem ser usados para compreender e apreciar diferentes gêneros literários, considerando as suas marcas específicas. Esse tipo de leitura favorece a fruição literária — que significa ler sem qualquer compromisso com avaliações ou apresentações formais sobre o lido. Entretanto, cabe lembrar que, para fruir melhor o texto, é essencial ter vivenciado experiências prazerosas de leitura e conversa sobre textos desses gêneros, em que  o caráter criativo dos discursos literários tenham sido evidenciados.",
    resume:
      "Na elaboração do currículo, uma forma de se colaborar para a motivação do aluno para leituras autônomas é:(1) acolher as mais variadas produções culturais, oferecendo um amplo e variado acervo de livros;(2) prever projetos que envolvam o cultivo da leitura de livre escolha;(3) rodas de conversa sobre obras lidas;(4) outros eventos culturais, como saraus, mostras de cinema, teatro, música etc.Ações dessa natureza favorecem a inserção dos alunos em práticas variadas, ampliando seu repertório cultural e consciência multicultural. Para um trabalho dessa dimensão, é necessária a articulação dos professores da área — o que possibilitará explorar as diferentes linguagens —, bem como a pessoa responsável pela sala de leitura e/ou biblioteca. Esta habilidade articula-se com a habilidade de mostrar interesse e envolvimento com a leitura de textos literários — no sentido de que envolver-se nas mais variadas práticas de leitura literária favorece o desenvolvimento da autonomia dos alunos.",
  },
  {
    id: "EF89LP34",
    competences: "LP",
    group_years: "89",
    field: "05",
    unit: "LP07",
    object:
      "Reconstrução da textualidade e compreensão dos efeitos de sentidos provocados pelos usos de recursos linguísticos e multissemióticos",
    skill: "EF89LP34",
    comment:
      "Esta habilidade implica comparar a realização do texto dramático em diferentes contextos. Ou seja, analisar as as diferenças e semelhanças entre um texto dramático criado para o palco, para o cinema e para a TV ou o rádio, por exemplo; com que recursos se pode contar em cada caso e como eles ajudam a produzir os sentidos pretendidos.",
    resume:
      'Na elaboração do currículo, deve-se considerar que o texto dramático é comumente concebido para ser encenado no palco. As outras formas de realização são, em geral, tratadas como "roteiro" (de filme/cinema, de novela). Um estudo do texto dramático que se aproxime dessas últimas práticas, mais acessíveis aos alunos, pode ser mais significativo. Além disso, o estudo comparativo de textos dramáticos produzidos para as diferentes mídias implica refletir sobre as semelhanças e diferenças entre as linguagens (e seus recursos) usadas na realização desses textos. Por exemplo, atuar para o palco é diferente de atuar para a TV ou o cinema. O mesmo acontece com outros recursos e linguagens, como o som, a iluminação, o cenário, o figurino, a maquiagem etc.',
  },
  {
    id: "EF89LP35",
    competences: "LP",
    group_years: "89",
    field: "05",
    unit: "LP09",
    object: "Construção da textualidade",
    skill: "EF89LP35",
    comment:
      "Esta habilidade visa à experimentação do fazer literário pelo/a aluno nos gêneros literários em prosa. A produção aqui também deve ser entendida como processo que envolve as operações de planejamento, produção e revisão dos textos, por meio da criação de oficinas literárias, em parceria com profissionais da biblioteca/sala de leitura e com professores/as de Arte.",
    resume:
      'Na elaboração do currículo, é interessante considerar que esta habilidade supõe a análise dos recursos usados na produção de sentido dos textos oferecidos à leitura nos gêneros referidos. Sugere-se, então, uma progressão na proposição dos "subgêneros" narrativos sugeridos. Recomenda-se que as produções experimentadas sejam efetivamente colocadas em circulação e alcancem os leitores previstos. É sugerido propor antecipadamente (1) a publicação de coletâneas para compor a biblioteca e/ou para distribuir para amigos e familiares; (2) a divulgação das produções em blogs literários criados para esse fim, e/ou páginas de Facebook; (3) a realização de concursos, desafios, saraus, clubes de leitura etc.',
  },
  {
    id: "EF89LP36",
    competences: "LP",
    group_years: "89",
    field: "05",
    unit: "LP09",
    object: "Relação entre textos",
    skill: "EF89LP36",
    comment:
      "Esta habilidade visa à experimentação do fazer literário pelo/a aluno nos gêneros literários líricos. A produção aqui também deve ser entendida como processo que envolve as operações de planejamento, produção e revisão dos textos, por meio da criação de oficinas literárias, em parceria com profissionais da biblioteca/sala de leitura e com professores/as de Arte. O diferencial desta habilidade em relação à habilidade do 6º e 7º anos, que também sugere o trabalho com gêneros líricos, se dá pelo fato de que, aqui, há necessariamente um trabalho intertextual exigido, visto que sugere o trabalho com paródias de textos conhecidos.",
    resume:
      'Na elaboração do currículo, é interessante considerar que esta habilidade supõe a análise dos recursos usados na produção de sentido dos textos oferecidos à leitura nos gêneros referidos. Sugere-se, então, uma progressão na proposição dos "subgêneros" líricos sugeridos. Recomenda-se que as produções experimentadas sejam efetivamente colocadas em circulação e alcancem os leitores previstos. É sugerido propor antecipadamente (1) a publicação de coletâneas para compor a biblioteca e/ou para distribuir para amigos e familiares; (2) a divulgação das produções em blogs literários criados para esse fim, e/ou páginas de Facebook; (3) a realização de concursos, desafios, saraus, clubes de leitura etc.',
  },
  {
    id: "EF89LP37",
    competences: "LP",
    group_years: "89",
    field: "01",
    unit: "LP08",
    object: "Figuras de linguagem",
    skill: "EF89LP37",
    comment:
      "O foco desta habilidade está na compreensão e análise de figuras de linguagem como as mencionadas, em gêneros e textos de qualquer campo de atuação. Trata-se, portanto, de uma habilidade relevante não só para a compreensão, mas, ainda, para a interpretação de textos, na medida em que evidencia mecanismos de (re)construção do texto e de seus sentidos.",
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade pode ser contextualizado em projetos de produção de textos do campo literário; na elaboração de artigos de divulgação de conhecimento; em projetos de estudo das figuras de linguagem em textos literários ou de divulgação de conhecimento. Recomenda-se: a) que os aspectos referidos sejam estudados levando-se em consideração os efeitos de sentido que produzem e a relação que estabelecem entre os trechos do enunciado; b) que a terminologia gramatical e a sistematização só sejam abordadas depois que os aspectos em foco tiverem sido compreendidos. A progressão pode se dar com base na complexidade do gênero/texto ou do grau de autonomia do aluno ao realizar o trabalho. Sugere-se, inicialmente, um exercício colaborativo (coletivo e em grupos/duplas), que progrida para o autônomo.",
  },
  {
    id: "EF09LP01",
    competences: "LP",
    group_years: "09",
    field: "06",
    unit: "LP07",
    object:
      "Reconstrução do contexto de produção, circulação e recepção de textos\nCaracterização do campo jornalístico e relação entre os gêneros em circulação, mídias e práticas da cultura digital",
    skill: "EF09LP01",
    comment:
      "Esta habilidade envolve procedimentos de pesquisa, como escolher palavras ou frases-chave adequadas para um resultado mais eficaz, bem como capacidades de leitura, como levantar hipóteses, localizar informações (expressas em diferentes linguagens) e compará-las, realizar inferências e checar hipóteses a partir dessas comparações. Favorece, ainda, o pensamento crítico e o posicionamento ético em relação ao compartilhamento das notícias falsas.",
    resume:
      'Na elaboração do currículo, é importante levar em conta que as fake news têm dominado as redes sociais. Alguns dos espaços de grande circulação dessas notícias falsas, na atualidade, são o Whatsapp e o Facebook, aos quais os adolescentes têm fácil acesso. Se faz necessário propor um trabalho que parta das experiências deles nesses espaços e que os prepare para analisar e averiguar os diferentes elementos que constituem essas mensagens e que dão ou não credibilidade a elas. Prever projetos que envolvam toda a comunidade escolar para se criar uma rede de proteção contra as notícias falsas pode mobilizar os alunos para ações permanentes de "alertas", junto aos colegas e comunidade escolar. Além disso, possibilitar acesso a sites criados com essa finalidade pode inspirá-los.Há, aqui, oportunidade para o trabalho interdisciplinar com a habilidade (EF09LI06), da Língua Inglesa, no que se refere à distinção e análise da qualidade das informações.',
  },
  {
    id: "EF09LP02",
    competences: "LP",
    group_years: "09",
    field: "06",
    unit: "LP07",
    object: "Relação entre textos",
    skill: "EF09LP02",
    comment:
      "Esta habilidade pode ser articulada ao trabalho com a habilidade que sugere a comparação das propostas editoriais dos jornais (EF07LP01). Ela consiste em:1. analisar os efeitos de sentido produzidos pelos recursos linguísticos usados nos textos;2. apurar informações, desenvolvendo procedimentos de curadoria;3. posicionar-se em relação aos enfoques dados aos fatos/assuntos veiculados, produzindo textos escritos ou orais.",
    resume:
      "Na elaboração do currículo, é importante considerar que as sugestões apresentadas nos campos das habilidades (EF06LP01), (EF07LP01), (EF07LP02), (EF89LP03), (EF89LP01), (EF89LP02) cabem para esta habilidade também. Para analisar e comentar a qualidade da cobertura dos fatos pela imprensa, será necessário investir em procedimentos de curadoria que vão desde o refinamento da capacidade de selecionar palavras, expressões ou frases-chave para busca de um mesmo fato veiculado pelos diferentes veículos e mídias, até buscar informações sobre a proposta editorial e o grau de confiabilidade dos veículos pesquisados.",
  },
  {
    id: "EF09LP03",
    competences: "LP",
    group_years: "09",
    field: "06",
    unit: "LP09",
    object: "Textualização de textos argumentativos e apreciativos",
    skill: "EF09LP03",
    comment:
      "A habilidade envolve os procedimentos apontados em (EF67LP09) e (EF67LP10): definir contexto de produção, planejar, produzir e revisar. Aqui, no entanto, se trata de gênero argumentativo do campo jornalístico-midiático, que exige posicionamento crítico, a preparação de argumentos, a escolha do movimento argumentativo e outras habilidades próprias de gêneros argumentativos. Vale enfatizar a importância de se considerar como objeto de apreciação produtos representativos das culturas juvenis. Recomenda-se que o tratamento ético em relação à informação e o posicionamento crítico em relação a ela devem ser foco de discussão nesse caso.",
    resume:
      "Na elaboração do currículo, é interessante considerar que a seleção do artigo de opinião para esses dois anos finais significa uma progressão no trabalho com os gêneros argumentativos desse campo. Produzir um artigo de opinião demanda apreciações de caráter político sobre os fatos/assuntos tratados. A apreciação envolve assumir uma postura argumentativa ética. A produção de gêneros argumentativos como o artigo de opinião implica, ainda, mobilizar com maior intensidade habilidades que desenvolvam o pensamento crítico, visto que se propõe a dar uma resposta a uma questão polêmica que vai exigir do/a autor/a interpretar informações selecionadas, avaliar o raciocínio e explicar evidências. Os currículos podem propor uma progressão horizontal no trabalho com o gênero, em relação à mediação do professor e à colaboração entre pares: em colaboração em um ano (coletivo e em grupos), avançando para o trabalho com autonomia no ano seguinte. Há, aqui, oportunidade para o trabalho interdisciplinar com a habilidade (EF09LI12), da Língua Inglesa, associada à produção de textos com posicionamento crítico.",
  },
  {
    id: "EF09LP04",
    competences: "LP",
    group_years: "09",
    field: "01",
    unit: "LP08",
    object: "Fono-ortografia",
    skill: "EF09LP04",
    comment:
      'Esta habilidade se refere ao uso da norma-padrão nas situações, gêneros e textos em que ela é requerida e tem como foco específico o uso de estruturas sintáticas complexas, no nível da oração e do período. Requer o estudo da variação linguística e da compreensão dos valores socialmente atribuídos às diferentes variedades, e demanda o envolvimento frequente e sistemático em práticas públicas e formais de leitura e/ou produção de textos, orais e/ou escritos, em que a "correção" (adequação) deve ser observada. Exemplos de situações orais formais: palestras, seminários, apresentações orais, debates. Exemplos de situações escritas formais: entrevistas, notícias, artigo de divulgação científica, reportagem multimidiática. (Estreitamente relacionada a EF08LP04).',
    resume:
      'Na elaboração do currículo, convém que o desenvolvimento desta habilidade venha sempre associado a práticas de leitura e/ou produção de textos dos mais diversos gêneros e campos de atuação. Recomenda-se, ainda, que: (a) as atividades propostas definam os conhecimentos a serem abordados considerando os tópicos já previstos para anos anteriores; (b) explicitem as estruturas sintáticas complexas a serem estudadas; (c) evitem a perspectiva do "erro gramatical", em favor de uma abordagem baseada na adequação do uso. (A habilidade representa uma progressão vertical de EF06LP11, EF07LP10 e EF08LP04, na medida em que é uma retomada das mesmas operações, com acréscimo de conteúdos). A progressão horizontal pode adotar como critério os tópicos a serem abordados a cada momento, o grau de complexidade dos gêneros e textos previstos e o grau de autonomia do aluno pressuposto na execução da tarefa.',
  },
  {
    id: "EF09LP05",
    competences: "LP",
    group_years: "09",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF09LP05",
    comment:
      "O foco desta habilidade é a identificação da estrutura sintática própria de orações cujo núcleo é um verbo de ligação. Está, portanto, diretamente relacionada ao desenvolvimento de todas as demais habilidades de análise com foco na sintaxe da oração e do período (especialmente EF0LP906). Requer a observação da organização sintática do texto e reflexões a respeito do papel dela na construção da textualidade e na produção de efeitos de sentido. Envolve, ainda, um conhecimento prévio de classes de palavras e das funções e categorias gramaticais associadas a cada uma delas.",
    resume:
      'Na elaboração do currículo, recomenda-se que o desenvolvimento desta habilidade não se constitua como um fim em si mesmo, mas que contribua para uma compreensão global, por parte do aluno, do papel da sintaxe no funcionamento da língua. Isso significa propor atividades que associem essas análises à leitura e à produção de textos, com foco nos efeitos de sentido que podem se associar às estruturas sintáticas em estudo.   Atividades lúdicas, em que os alunos possam explorar livremente diferentes alternativas de estruturação de um "mesmo" enunciado, podem contribuir significativamente para a percepção e compreensão da natureza e do funcionamento dos mecanismos sintáticos em jogo. A progressão horizontal pode apoiar-se no grau de complexidade dos gêneros e textos programados para o estudo (vale considerar, ainda, a relação desta habilidade com EF09LP06.',
  },
  {
    id: "EF09LP06",
    competences: "LP",
    group_years: "09",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF09LP06",
    comment:
      "O foco desta habilidade é a identificação do papel dos verbos de ligação na produção de efeitos de sentido específicos. Está, portanto,  diretamente relacionada ao desenvolvimento de todas as demais habilidades de análise com foco na sintaxe da oração e do período (especialmente EF09LP05). Requer observação da organização sintática do texto e reflexões a respeito do papel dela na construção da textualidade e na produção de efeitos de sentido. Envolve, ainda, um conhecimento prévio de classes de palavras e funções e categorias gramaticais associadas a cada uma delas.",
    resume:
      'Na elaboração do currículo, recomenda-se que o desenvolvimento desta habilidade não se constitua como um fim em si mesmo, mas que contribua para uma compreensão global, por parte do aluno, do papel da sintaxe no funcionamento da língua. Isso significa propor atividades que associem essas análises à leitura e à produção de textos, com foco nos efeitos de sentido que podem se associar às estruturas sintáticas em estudo.  Atividades lúdicas, em que os alunos possam explorar livremente diferentes alternativas de estruturação de um "mesmo" enunciado, podem contribuir significativamente para a percepção e compreensão da natureza e do funcionamento dos mecanismos sintáticos em jogo. A progressão horizontal pode apoiar-se no grau de complexidade dos gêneros e textos programados para o estudo (vale considerar, ainda, a relação desta habilidade com EF09LP05).',
  },
  {
    id: "EF09LP07",
    competences: "LP",
    group_years: "09",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF09LP07",
    comment:
      'Esta habilidade possibilita refletir sobre diferenças entre a norma-padrão e outras variedades da língua. Um exemplo comum é a regência do verbo assistir (com o sentido de ver algo). De acordo com a norma-padrão, esse verbo é regido pela preposição "a": "Ele assistiu ao filme ontem". Entretanto, hoje, até mesmo em textos jornalísticos encontramos o uso do verbo sem essa regência: "Ele assistiu o filme ontem". A habilidade, portanto, demanda a análise comparativa de enunciados em que as regências nominal e verbal obedeçam regras de diferentes normas.',
    resume:
      "Na elaboração do currículo, convém reforçar um compromisso fundamental da escola: ser o espaço em que os/as alunos aprendem a utilizar as variedades de maior prestígio e com as quais tenham pouca familiaridade, sem, no entanto, discriminar as demais. Análises comparativas favorecem a compreensão do fenômeno da variação linguística, uma vez que colocam em discussão, nesse caso, as regras da norma-padrão sobre concordância e regência entre as palavras, em contraste com os usos efetivos da língua pelos falantes. Esse estudo possibilita, de um lado, colocar em questão as origens das regras da norma-padrão para relativizá-las; de outro lado, favorece a compreensão da língua como algo que muda no tempo e no espaço, de modo a legitimar todas as variedades e seus contextos culturais. A progressão do ensino pode pautar-se pelas diferentes regências selecionadas para estudo (nominal/verbal), pelo grau de complexidade e/ou formalidade dos gêneros e textos previstos e pelo nível de autonomia que se pretenda levar o aluno a conquistar a cada etapa.",
  },
  {
    id: "EF09LP08",
    competences: "LP",
    group_years: "09",
    field: "01",
    unit: "LP08",
    object: "Morfossintaxe",
    skill: "EF09LP08",
    comment:
      "A habilidade refere-se ao estudo das relações de sentido estabelecidas entre trechos do texto pelas conjunções e locuções conjuntivas, em períodos compostos por coordenação e/ou subordinação, seja na leitura, seja na produção de textos próprios. Abrange a análise do emprego desses recursos em textos de todos os campos de atuação, pressupondo o envolvimento do aluno em práticas de leitura e/ou produção nas quais a (re)construção dos sentidos do texto esteja relacionada aos efeitos produzidos pelas conjunções em processos de subordinação.",
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade pode organizar-se com base em dois pontos articulados: 1) resolver um problema de compreensão/redação decorrente do emprego de uma determinada conjunção ou locução conjuntiva; 2) sistematizar o conhecimento discutido na etapa anterior (1). Sugere-se que a atividades sejam organizadas focalizando diferentes possibilidades de articulação dos trechos, as conjunções e locuções correspondentes, considerando tanto a legibilidade do texto, como as intenções de significação e as possibilidades de compreensão do interlocutor. Recomenda-se, ainda, que a metalinguagem só seja empregada depois de compreendido o aspecto em foco. Conferir comentários a (EF06LP05), (EF08LP13) e (EF08LP12). Do ponto de vista da progressão horizontal, sugere-se, inicialmente, um trabalho colaborativo (coletivo e em grupos/duplas), que progrida para o autônomo. Um segundo critério é a complexidade dos gêneros e textos previstos para o estudo.",
  },
  {
    id: "EF09LP09",
    competences: "LP",
    group_years: "09",
    field: "01",
    unit: "LP08",
    object: "Elementos notacionais da escrita/morfossintaxe",
    skill: "EF09LP09",
    comment:
      "A habilidade refere-se ao estudo necessário para a resolução de problemas de compreensão encontrados, seja na leitura, seja na produção/revisão de textos próprios, derivados da presença e/ou emprego de orações adjetivas restritivas e explicativas em períodos compostos. Abrange a análise do emprego desses recursos em textos de todos os campos de atuação, pressupondo práticas de leitura e/ou produção nas quais a (re)construção dos sentidos do texto esteja relacionada aos efeitos produzidos pelo contraponto entre orações adjetivas restritivas e explicativas.",
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade pode organizar-se com base em dois pontos articulados: 1) resolver um problema de compreensão/redação decorrente da presença e/ou emprego de orações adjetivas restritivas ou explicativas em períodos compostos; 2) sistematizar o conhecimento discutido na etapa anterior (1). Sugere-se que as atividades sejam organizadas focalizando as diferentes possibilidades de organização sintática do enunciado, considerando a legibilidade do texto, as intenções de significação e as possibilidades de compreensão do interlocutor. Recomenda-se, ainda, que a metalinguagem só seja empregada depois de compreendido o aspecto em foco. Do ponto de vista da progressão horizontal, sugere-se, inicialmente, um trabalho colaborativo (coletivo e em grupos/duplas), que progrida para o autônomo. Um segundo critério é a complexidade dos gêneros e textos previstos para o estudo.",
  },
  {
    id: "EF09LP10",
    competences: "LP",
    group_years: "09",
    field: "01",
    unit: "LP08",
    object: "Coesão",
    skill: "EF09LP10",
    comment:
      "A habilidade refere-se ao estudo de como acontece a colocação pronominal em diferentes variedades linguísticas (realizadas em diferentes camadas sociais e/ou em distintas regiões/estados do país), em contraposição às regras da norma-padrão. Abrange a análise do emprego dos recursos em textos de todos os campos de atuação, pressupondo práticas de leitura e/ou produção nas quais a (re)construção dos sentidos do texto esteja relacionada aos efeitos produzidos pela colocação pronominal.",
    resume:
      "Na elaboração do currículo, é importante reconhecer: a) que as variedades relacionam-se, sobretudo, à linguagem oral; b) que a utilização de uma variedade linguística não padrão em textos escritos é possível quando se pretende, por exemplo, caracterizar um personagem (textos da esfera literária); c) que as variedades coloquiais não são idênticas no país inteiro, devido a fatores regionais, sociais e temporais. Dessa maneira, a linguagem informal não é a mesma no país todo. Recomenda-se que o trabalho relacionado às variedades linguísticas seja realizado de tal maneira que o aluno consiga selecionar a variedade adequada à situação comunicativa, repudiando qualquer preconceito linguístico relativo ao uso delas. Do ponto de vista da progressão horizontal, sugere-se, inicialmente, um trabalho colaborativo (coletivo e em grupos/duplas), que progrida para o autônomo. Um segundo critério é a complexidade dos gêneros e textos previstos para o estudo.",
  },
  {
    id: "EF09LP11",
    competences: "LP",
    group_years: "09",
    field: "01",
    unit: "LP08",
    object: "Coesão",
    skill: "EF09LP11",
    comment:
      "A habilidade refere-se ao estudo necessário para a resolução de problemas de compreensão encontrados, seja na leitura de um texto, seja na produção/revisão de textos próprios, derivados da presença e/ou emprego de recursos de coesão sequencial. Abrange a análise do emprego dos recursos em textos de todos os campos de atuação, pressupondo práticas de leitura e/ou produção nas quais a (re)construção dos sentidos do texto esteja relacionada aos efeitos produzidos pelo uso de recursos de coesão sequencial, como conjunções e articuladores textuais.",
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade pode organizar-se com base em dois pontos articulados: 1) resolver um problema de compreensão/redação decorrente da presença e/ou emprego de recursos de coesão sequencial; 2) sistematizar o conhecimento discutido na etapa anterior (1). Sugere-se que as atividades sejam organizadas focalizando as diferentes possibilidades de articulação de trechos de enunciados no estabelecimento da progressão temática, considerando a legibilidade do texto, as intenções de significação e as possibilidades de compreensão do interlocutor. Recomenda-se, ainda, que a metalinguagem só seja empregada depois de compreendido o aspecto em foco. Do ponto de vista da progressão horizontal, sugere-se, inicialmente, um trabalho colaborativo (coletivo e em grupos/duplas), que progrida para o autônomo. Um segundo critério é a complexidade dos gêneros e textos previstos para o estudo.",
  },
  {
    id: "EF09LP12",
    competences: "LP",
    group_years: "09",
    field: "01",
    unit: "LP08",
    object: "Variação linguística",
    skill: "EF09LP12",
    comment:
      "Esta é uma habilidade que envolve duas operações distintas: identificar e avaliar estrangeirismos, do ponto de vista da pertinência de seu emprego na leitura e/ou produção, reconhecendo os termos e analisando sua adequação.",
    resume:
      "Na elaboração do currículo, o desenvolvimento desta habilidade pode ser contextualizado em projetos de leitura e/ou produção de textos de qualquer campo, ou, ainda, em projetos de estudo do recurso a estrangeirismos e de sua pertinência em diferentes gêneros e textos de campos diversos. É necessária a leitura crítica e/ou a produção monitorada de textos em que estrangeirismos são frequentes (informática, moda, tecnologia etc.), em qualquer campo de atuação Recomenda-se: a) que os aspectos referidos sejam estudados levando-se em consideração os efeitos de sentido que produzem; b) que a terminologia gramatical e a sistematização a respeito dos diferentes tipos de estrangeirismos só sejam abordadas depois que os aspectos em foco tiverem sido compreendidos. A progressão pode se dar com base na complexidade do gênero/texto ou no grau de autonomia do aluno. Sugere-se, inicialmente, um exercício colaborativo (coletivo e em grupos/duplas), que progrida para o autônomo.",
  },
];

async function main() {
  /*   competencesArray.map(async (competence: competencesdto) => {
    await prisma.competences.create({
      data: {
        id: competence.id,
        name: competence.name,
        created: new Date(Date()).toISOString(),
      },
    });
  });

  groupYearArray.map(async (groupYear: groupYearDto) => {
    await prisma.group_years.create({
      data: {
        id: groupYear.id,
        description: groupYear.description,
        created: new Date(Date()).toISOString(),
      },
    });
  });

  fieldsArray.map(async (field: fieldsDto) => {
    await prisma.fields.create({
      data: {
        id: field.id,
        description: field.description,
        created: new Date(Date()).toISOString(),
      },
    });
  });

  unitsArray.map(async (unit: fieldsDto) => {
    await prisma.units.create({
      data: {
        id: unit.id,
        description: unit.description,
        created: new Date(Date()).toISOString(),
      },
    });
  }); */

  skillsArray.map(async (skill: fieldsDto) => {
    await prisma.skills.upsert({
      where: { id: skill.id },
      update: {
        description: skill.description,
      },
      create: {
        id: skill.id,
        description: skill.description,
        created: new Date(Date()).toISOString(),
      },
    });
  });

  /* portuguesSeed.map(async (line: portuguesDto) => {
    await prisma.apprendiceship.upsert({
      where: { id: line.id },
      update: {},
      create: {
        id: line.id,
        competence: {
          connect: { id: line.competences },
        },
        group_year: {
          connect: { id: line.group_years },
        },
        field: {
          connect: { id: line.field },
        },
        unit: {
          connect: { id: line.unit },
        },
        object: {
          connectOrCreate: {
            where: { id: line.object },
            create: {
              description: line.object,
            },
          },
        },
        skill: {
          connect: { id: line.skill },
        },
        comment: {
          create: {
            comment: line?.comment || "",
            created: new Date(Date()).toISOString(),
          },
        },
        resume: {
          create: {
            description: line?.resume || "",
            created: new Date(Date()).toISOString(),
          },
        },
        created: new Date(Date()).toISOString(),
      },
    });
    console.log(`${line.id} finished!`);
  }); */
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
