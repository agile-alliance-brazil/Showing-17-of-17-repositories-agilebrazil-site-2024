/*
	Venue by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {
	window.dataProgram = {
		30: {
			'identificacao-900': '<div class="activity full-space card-program">Welcome Coffee</div>',
			'identificacao-930': '<div class="activity full-space keynote card-program">Abertura & Keynote - Andressa Chiara</div>',
			'identificacao-1100-1': `<div class="activity cliente card-program">
					<div class="local-palestra">Arena 1</div>
					<p class="title">Estratégia de Produto em Fintechs: Alinhando Agilidade com Inovação e Regulação</p>
					<p class="autor">João Victor Alves</p>
				</div>`,
			'identificacao-1100-2': `<div class="activity lideranca card-program">
					<div class="local-palestra">Arena 2</div>
					<p class="title">Navegando com KMM e STATIK:  Como conquistamos novos mercados através do serviço End-to-End de desenvolvimento de bionegócios globais</p>
					<p class="autor">Jady Fernanda Alves de Oliveira & Daniel Rocha</p>
				</div>`,
			'identificacao-1100-3': `<div class="activity futuro card-program">
					<div class="local-palestra">Arena 3</div>
					<p class="title">A fragilidade da acessibilidade nas equipes ágeis de desenvolvimento de produtos digitais: como as lideranças podem ajudar a habilitar um futuro realmente inclusivo</p> 
					<p class="autor">Diego Conceição & Jeniffer Deus</p>
				</div>`,
			'identificacao-1100-4': `<div class="activity cliente card-program">
					<div class="local-palestra">Atalia</div>
					<p class="title">PM Wheel e a criação de Avaliação Técnica: Case e ferramenta para usar HOJE</p>
					<p class="autor">Thiago Noronha</p>
				</div>`,
			'identificacao-1100-5': `<div class="activity cliente workspace card-program">
					<div class="local-palestra">Abaís</div>
					<p class="title">Desbloqueando Insights dos Nossos Clientes com F4P (Fit for Purpose)</p>
					<p class="autor">Alcides Vieira</p>
				</div>`,
			'identificacao-1100-6': `<div class="activity lideranca workspace card-program">
			<div class="local-palestra">Terra Caída</div>
					<p class="title">Desbloqueie Seu Potencial de Facilitação!</p>
					<p class="autor">Mariana Carvalho & Carolina Souza Bezerra</p>
				</div>`,
			'identificacao-1100-7': `<div class="activity futuro workspace card-program">
				<div class="local-palestra">Pirambu</div>
				<p class="title">Dê Propósito: Integrando Práticas Ágeis e Sustentáveis</p>
				<p class="autor">Marcus Godoy  & Renata Luciria Monteiro</p>
			</div>`,
			'identificacao-1200-1': `<div class="activity lideranca card-program">
					<div class="local-palestra">Arena 1</div>
					<p class="title">Architecting Agility: How Software Architecture Influences Agile Practices</p>
					<p class="autor">Joseph Yoder & Marden Neubert</p>
				</div>`,
			'identificacao-1200-2': `<div class="activity cliente card-program">
					<div class="local-palestra">Arena 2</div>
					<p class="title">Centralidade no Cliente - mais que o sopro da intenção, são necessários ventos na direção correta</p>
					<p class="autor">Mariana Zaparolli Martins</p>
				</div>`,
			'identificacao-1200-3': `<div class="activity raizes card-program">
					<div class="local-palestra">Arena 3</div>
					<p class="title">Passos Essenciais e Ferramentas para o Sucesso de Modernização de Aplicações</p>
					<p class="autor">Camilla Crispim</p>
				</div>`,
			'identificacao-1200-4': `<div class="activity metrica card-program">
					<div class="local-palestra">Atalia</div>
					<p class="title">Machine Learning no RH: Como aplicar na prática</p>
					<p class="autor">Mário Lúcio Roque de Oliveira Porto</p>
				</div>`,
			'identificacao-1430-1': `<div class="activity metrica card-program">
					<div class="local-palestra">Arena 1</div>
					<p class="title">Estimar ou Não Estimar? Eis a questão</p>
					<p class="autor">Jorge Bublitz</p>
				</div>`,
			'identificacao-1430-2': `<div class="activity cliente card-program">
					<div class="local-palestra">Arena 2</div>
					<p class="title">Customer Lead Time - Estratégias para aumentar a satisfação do cliente gerenciando eficazmente o tempo de atendimento</p>
					<p class="autor">Juliana Iwayama Velho Affonso & Ana Paula Lira</p>
				</div>`,
			'identificacao-1430-3': `<div class="activity raizes card-program">
					<div class="local-palestra">Arena 3</div>
					<p class="title">Evolução ÁGIL em mais de duas décadas: que bom, que pena e que tal?</p> 
					<p class="autor">Andre Sanches</p>
				</div>`,
			'identificacao-1430-4': `<div class="activity cliente card-program">
					<div class="local-palestra">Atalia</div>
					<p class="title">Aferição da qualidade na área Contábil: otimizando o processo de NPS com o uso de IA generativa</p>
					<p class="autor">Cristovão Moreira Freitas Junior</p>
				</div>`,
			'identificacao-1430-5': `<div class="activity raizes workspace card-program">
					<div class="local-palestra">Abaís</div>
					<p class="title">Icebreakers - Maximizando engajamento e Resultados nas suas reuniões</p>
					<p class="autor">Luiz Felipe Sanches Gonçalves & Andre Molero</p>
				</div>`,
			'identificacao-1430-6': `<div class="activity futuro workspace card-program">
					<div class="local-palestra">Terra Caída</div>
					<p class="title">Resistência à mudança – O que está por trás do nosso cérebro e como hackeá-lo</p>
					<p class="autor">Bruno Cavaleiro & Karoline Kröker Corrêa</p>
				</div>`,
			'identificacao-1430-7': `<div class="activity lideranca workspace card-program">
				<div class="local-palestra">Pirambu</div>
				<p class="title">Alçando voo ou queda livre? Decolando com Flight Levels em meio ao caos corporativo!</p>
				<p class="autor">Naty Lima</p>
			</div>`,
			'identificacao-1510-1': `<div class="activity metrica card-program">
					<div class="local-palestra">Arena 1</div>
					<p class="title">Olhando pelo retrovisor: Jornada de Implantação da Gestão por Indicadores Agéis - Sucessos e Desafios</p>
					<p class="autor">Analupe Abrantes Gitti & Rogerio Carrer</p>
				</div>`,
			'identificacao-1510-2': `<div class="activity lideranca card-program">
					<div class="local-palestra">Arena 2</div>
					<p class="title">Agilidade que transforma: O Case de sucesso e aprendizados de uma transformação real</p>
					<p class="autor">Uedson Carlos</p>
				</div>`,
			'identificacao-1510-3': `<div class="activity futuro card-program">
					<div class="local-palestra">Arena 3</div>
					<p class="title">Passado, Presente e (talvez) Futuro da Agilidade</p> 
					<p class="autor">Daniel Santos</p>
				</div>`,
			'identificacao-1510-4': `<div class="activity raizes card-program">
					<div class="local-palestra">Atalia</div>
					<p class="title">Como PBB (técnica de produtos) nos ajudou a melhorar o nosso planejamento, execução, resultado e adaptação no nosso dia a dia?</p>
					<p class="autor">Fernanda Bonelo  & Andre Francisco Cipolini</p>
				</div>`,
			'identificacao-1610-1': `<div class="activity raizes card-program">
					<div class="local-palestra">Arena 1</div>
					<p class="title">Sintonia na Prática: Arquitetura e Agilidade Impulsionando o Sucesso do Time</p>
					<p class="autor">Jesley Nonato & Amanda Rodrigues de Paula</p>
				</div>`,
			'identificacao-1610-2': `<div class="activity metrica card-program">
					<div class="local-palestra">Arena 2</div>
					<p class="title">A mágica das métricas: Como elas podem direcionar a qualidade do produto?</p>
					<p class="autor">Alan Voigt</p>
				</div>`,
			'identificacao-1610-3': `<div class="activity metrica card-program">
					<div class="local-palestra">Arena 3</div>
					<p class="title">Agile Sapiens: a jornada de evolução do papel desde seu surgimento até os dias atuais e o que esperar do futuro dos agilistas</p> 
					<p class="autor">Cintia Guberovic</p>
				</div>`,
			'identificacao-1610-4': `<div class="activity cliente card-program">
					<div class="local-palestra">Atalia</div>
					<p class="title">Produto e Vendas: amigos ou inimigos? Performance Desk, um processo para desenvolver, empacotar e vender produtos para alavancar receita no curto prazo</p>
					<p class="autor">Jair Fernandez Castro & Ana Paula dos Reis Lima</p>
				</div>`,
			'identificacao-1640': '<div class="activity full-space card-program">Coffee Break</div>',
			'identificacao-1700': '<div class="activity full-space keynote card-program">Keynote Fora da Caixa - Bianca Oliveira</div>',
			'identificacao-1800': '<div class="activity full-space card-program">Encerramento</div>',
		},
		31: {
			'identificacao-900': '<div class="activity full-space card-program">Welcome Coffee</div>',
			'identificacao-930': '<div class="activity full-space keynote card-program">Abertura & Keynote - Aanu Gopald</div>',
			'identificacao-1100-1': `<div class="activity lideranca card-program">
					<div class="local-palestra">Arena 1</div>
					<p class="title">Fatores de sucesso - métodos ágeis de larga escala</p>
					<p class="autor">Thiago Dieb</p>
				</div>`,
			'identificacao-1100-2': `<div class="activity cliente card-program">
					<div class="local-palestra">Arena 2</div>
					<p class="title">Product AI: Como a Inteligência Artificial pode ser nossa copilota para criar produtos incríveis</p>
					<p class="autor">Avelino Ferreira Gomes Filho & Rodrigo de Toledo</p>
				</div>`,
			'identificacao-1100-3': `<div class="activity raizes card-program">
					<div class="local-palestra">Arena 3</div>
					<p class="title">O que é agilidade e o que estamos vivendo?</p> 
					<p class="autor">Jessica Alves</p>
				</div>`,
			'identificacao-1100-4': `<div class="activity lideranca card-program">
					<div class="local-palestra">Atalia</div>
					<p class="title">A arte do workshop: criando espaços efetivos de colaboração</p>
					<p class="autor">Alceu Bravo</p>
				</div>`,
			'identificacao-1100-5': `<div class="activity default card-program">
					<div class="local-palestra">Abaís</div>
					<p class="title">Comunidades</p>
					<p class="autor"></p>
				</div>`,
			'identificacao-1100-6': `<div class="activity raizes workspace card-program">
			<div class="local-palestra">Terra Caída</div>
					<p class="title">Coding Dojo na prática: aprendendo a aprender e colaborar de maneira ágil</p>
					<p class="autor">Lula Rodrigues & Natali Rocha</p>
				</div>`,
			'identificacao-1100-7': `<div class="activity futuro workspace card-program">
				<div class="local-palestra">Pirambu</div>
				<p class="title">INOVAÇÃO X TENDÊNCIAS TECNOLÓGICAS COM DADOS DE PESQUISA DE MERCADO</p>
				<p class="autor">Amanda Luiza Soares Silva & Matheus Pereira Mattos Felizola</p>
			</div>`,
			'identificacao-1200-1': `<div class="activity futuro card-program">
					<div class="local-palestra">Arena 1</div>
					<p class="title">2024, uma odisseia nas IAs</p>
					<p class="autor">Vaner Teixeira</p>
				</div>`,
			'identificacao-1200-2': `<div class="activity raizes card-program">
					<div class="local-palestra">Arena 2</div>
					<p class="title">Pare de falar de Agilidade e fale de resultado</p>
					<p class="autor">Leandro Matias Cipriano & Andre Francisco Cipolini</p>
				</div>`,
			'identificacao-1200-3': `<div class="activity lideranca card-program">
					<div class="local-palestra">Arena 3</div>
					<p class="title">Cultura segue a estrutura: Aplicando um Reorg para maximizar a cultura de resultados</p>
					<p class="autor">Lucas Freitas & Melina Deraldo</p>
				</div>`,
			'identificacao-1200-4': `<div class="activity metrica card-program">
					<div class="local-palestra">Atalia</div>
					<p class="title">Desbloqueando o Potencial dos Times Ágeis no Mercado B2B: Aplicando Métricas DORA e de Fluxo para Atingir Resultados</p>
					<p class="autor">Vanessa Maria da Silva & Naiara Hipolito</p>
				</div>`,
			'identificacao-1200-5': `<div class="activity default card-program">
					<div class="local-palestra">Abaís</div>
					<p class="title">Comunidades</p>
					<p class="autor"></p>
				</div>`,
			'identificacao-1430-1': `<div class="activity metrica card-program">
					<div class="local-palestra">Arena 1</div>
					<p class="title">Gestão Ágil de Produtos e Projetos: Métricas, OKRs e Customizações no Jira</p>
					<p class="autor">Edson Antonio de Lima</p>
				</div>`,
			'identificacao-1430-2': `<div class="activity futuro card-program">
					<div class="local-palestra">Arena 2</div>
					<p class="title">IA Generativa: Impulsionando a Agilidade na Transformação Digital</p>
					<p class="autor">Valquiria Fagundes & Luciana Ferreira Trindade</p>
				</div>`,
			'identificacao-1430-3': `<div class="activity lideranca card-program">
					<div class="local-palestra">Arena 3</div>
					<p class="title">Framework de análise de barreiras e facilitadores da ascensão de líderes negros na tecnologia</p> 
					<p class="autor">Alessandra De Sá Mello Da Costa & Natasha Therezinha Rosino Geraldo</p>
				</div>`,
			'identificacao-1430-4': `<div class="activity raizes card-program">
					<div class="local-palestra">Atalia</div>
					<p class="title">Oxe, o básico ainda funciona! Transparência, Colaboração, Comunicação e Resultados!</p>
					<p class="autor">Silvia Muniz & Alison Laurentino</p>
				</div>`,
			'identificacao-1430-5': `<div class="activity default workspace card-program">
					<div class="local-palestra">Abaís</div>
					<p class="title">Pitch</p>
					<p class="autor"></p>
				</div>`,
			'identificacao-1430-6': `<div class="activity metrica workspace card-program">
					<div class="local-palestra">Terra Caída</div>
					<p class="title">OKRs de Sucesso: Viagem ao futuro com Estruturas Libertadoras e aprenda uma técnica simples e eficaz para criar OKRs</p>
					<p class="autor">Alan da Silva Mendes & Fernando Oliveira</p>
				</div>`,
			'identificacao-1430-7': `<div class="activity lideranca workspace card-program">
				<div class="local-palestra">Pirambu</div>
				<p class="title">Desenvolvendo Soft Skills e Facilitação com jogos lúdicos</p>
				<p class="autor">Carol Campos</p>
			</div>`,
			'identificacao-1510-1': `<div class="activity lideranca card-program">
					<div class="local-palestra">Arena 1</div>
					<p class="title">Criando empatia e engajamento em equipes virtuais de alto contexto que nunca se encontraram presencialmente</p>
					<p class="autor">José Fernandes de Castro Junior</p>
				</div>`,
			'identificacao-1510-2': `<div class="activity futuro card-program">
					<div class="local-palestra">Arena 2</div>
					<p class="title">Product Ops é o novo modelo spotify</p>
					<p class="autor">Erica Briones Graciano</p>
				</div>`,
			'identificacao-1510-3': `<div class="activity raizes card-program">
					<div class="local-palestra">Arena 3</div>
					<p class="title">Vai ficar pronto quando? Adaptando a abordagem de estimativa para times novos e experientes</p> 
					<p class="autor">Vívian Barreto & Fabio Massa</p>
				</div>`,
			'identificacao-1510-4': `<div class="activity raizes card-program">
					<div class="local-palestra">Atalia</div>
					<p class="title">A ética no desenvolvimento de software: Preparando a próxima geração de pessoas desenvolvedoras</p>
					<p class="autor">Mariana Marcilio & Natali Rocha</p>
				</div>`,
			'identificacao-1510-5': `<div class="activity default workspace card-program">
					<div class="local-palestra">Abaís</div>
					<p class="title">Pitch</p>
					<p class="autor"></p>
				</div>`,
			'identificacao-1610-1': `<div class="activity metrica card-program">
					<div class="local-palestra">Arena 1</div>
					<p class="title">Operation Review: Uma Jornada de Melhoria Contínua Através de Dados e Fatos</p>
					<p class="autor">Paulo Henrique Abreu & André Mello</p>
				</div>`,
			'identificacao-1610-2': `<div class="activity raizes card-program">
					<div class="local-palestra">Arena 2</div>
					<p class="title">Evolução Ágil: Estratégias para Integração de Kanban e Scrum na Busca da Melhoria Contínua</p>
					<p class="autor">Camila Ribeiro Bouth</p>
				</div>`,
			'identificacao-1610-3': `<div class="activity lideranca card-program">
					<div class="local-palestra">Arena 3</div>
					<p class="title">Governança Ágil para IA Ética: Políticas e Práticas para Futuros Sustentáveis</p> 
					<p class="autor">Vinicius carvalho</p>
				</div>`,
			'identificacao-1610-4': `<div class="activity futuro card-program">
					<div class="local-palestra">Atalia</div>
					<p class="title">Agilidade com 'Accountability'</p>
					<p class="autor">Henrique Gonçalves & Paulo Cassin</p>
				</div>`,
			'identificacao-1610-5': `<div class="activity default workspace card-program">
					<div class="local-palestra">Abaís</div>
					<p class="title">Pitch</p>
					<p class="autor"></p>
				</div>`,
			'identificacao-1640': '<div class="activity full-space card-program">Coffee Break</div>',
			'identificacao-1700-1': `<div class="activity lideranca card-program">
					<div class="local-palestra">Arena 1</div>
					<p class="title">Agilidade como Cultura Organizacional:  Gerando valor para a estratégia através da agilidade</p>
					<p class="autor">Thaysa Maria de Farias Moura & Isabella Menezes Santos Rezende</p>
				</div>`,
			'identificacao-1700-2': `<div class="activity lideranca card-program">
					<div class="local-palestra">Arena 2</div>
					<p class="title">Liderança Consciente: Criando Culturas de Alta Performance</p>
					<p class="autor">Bruno Tarsis</p>
				</div>`,
			'identificacao-1700-3': `<div class="activity lideranca card-program">
					<div class="local-palestra">Arena 3</div>
					<p class="title">Agilidade Neurodiversa: Desbloqueando Potencial para Resultados Extraordinários</p> 
					<p class="autor">Richard Nestor Lartiga Mena</p>
				</div>`,
			'identificacao-1700-4': `<div class="activity metrica card-program">
					<div class="local-palestra">Atalia</div>
					<p class="title">Agilidade Prática com Dados</p>
					<p class="autor">Luan Rodrigues</p>
				</div>`,
			'identificacao-1700-5': `<div class="activity default workspace card-program">
					<div class="local-palestra">Abaís</div>
					<p class="title">Pitch</p>
					<p class="autor"></p>
				</div>`,
			'identificacao-1700-6': `<div class="activity default workspace card-program">
					<div class="local-palestra">Abaís</div>
					<p class="title">Em definição</p>
					<p class="autor"></p>
				</div>`,
			'identificacao-1700-7': `<div class="activity default workspace card-program">
					<div class="local-palestra">Abaís</div>
					<p class="title">Em definição</p>
					<p class="autor"></p>
				</div>`,
			'identificacao-1740': '<div class="activity full-space card-program">Encerramento</div>',
		},
		1: {	
			'identificacao-900': '<div class="activity full-space card-program">Welcome Coffee</div>',
			'identificacao-930': '<div class="activity full-space keynote card-program">Abertura & Keynote - Hanna Back Pyo</div>',
			'identificacao-1100-1': `<div class="activity cliente card-program">
					<div class="local-palestra">Arena 1</div>
					<p class="title">A Jornada Digital da Compartilhe Saúde: Transformando a Saúde no Interior do Espírito Santo</p>
					<p class="autor">Gabriela Ricardo dos Reis & Erasmo Xavier de Brito</p>
				</div>`,
			'identificacao-1100-2': `<div class="activity lideranca card-program">
					<div class="local-palestra">Arena 2</div>
					<p class="title">Design Organizacional para Empresas Ágeis</p>
					<p class="autor">Yoris Linhares & Ana Grossi</p>
				</div>`,
			'identificacao-1100-3': `<div class="activity futuro card-program">
					<div class="local-palestra">Arena 3</div>
					<p class="title">Igualdade de Gênero no Local de Trabalho: Estratégias Ágeis para Reduzir o Gap de Gênero</p> 
					<p class="autor">Graziela Simone Tonin</p>
				</div>`,
			'identificacao-1100-4': `<div class="activity cliente card-program">
					<div class="local-palestra">Atalia</div>
					<p class="title">Conectando a estratégia com a tática através do Dynamic Flow</p>
					<p class="autor">Raphael Donaire Albino & Celso Martins</p>
				</div>`,
			'identificacao-1100-5': `<div class="activity default workspace card-program">
					<div class="local-palestra">Abaís</div>
					<p class="title">Comunidades</p>
					<p class="autor"></p>
				</div>`,
			'identificacao-1100-6': `<div class="activity metrica workspace card-program">
			<div class="local-palestra">Terra Caída</div>
					<p class="title">Aprenda a identificar métricas mais relevantes para a seu time ou organização e construa seu próprio framework</p>
					<p class="autor">Alan da Silva Mendes</p>
				</div>`,
			'identificacao-1100-7': `<div class="activity lideranca workspace card-program">
				<div class="local-palestra">Pirambu</div>
				<p class="title">Kanban Portfolio Challenge</p>
				<p class="autor">Leandro Sanches</p>
			</div>`,
			'identificacao-1200-1': `<div class="activity lideranca card-program">
					<div class="local-palestra">Arena 1</div>
					<p class="title">Transformando  “Maus habitus” culturais em Resultados ágeis</p>
					<p class="autor">Susane Raphaella Da Silva</p>
				</div>`,
			'identificacao-1200-2': `<div class="activity futuro card-program">
					<div class="local-palestra">Arena 2</div>
					<p class="title">Conectando Gestão Esportiva, Agilidade e Inovação em um projeto de basquete</p>
					<p class="autor">Dayane Knupp & Derek Leite</p>
				</div>`,
			'identificacao-1200-3': `<div class="activity raizes card-program">
					<div class="local-palestra">Arena 3</div>
					<p class="title">Por que meu time demora tanto para entregar valor?</p>
					<p class="autor">Jiba Waghetti</p>
				</div>`,
			'identificacao-1200-4': `<div class="activity futuro card-program">
					<div class="local-palestra">Atalia</div>
					<p class="title">Ágil Além do Código: Implementando Metodologia Ágil em uma Área Inesperada!</p>
					<p class="autor">Heloise Alves Morales</p>
				</div>`,
			'identificacao-1200-5': `<div class="activity default workspace card-program">
					<div class="local-palestra">Abaís</div>
					<p class="title">Comunidades</p>
					<p class="autor"></p>
				</div>`,
			'identificacao-1430-1': `<div class="activity raizes card-program">
					<div class="local-palestra">Arena 1</div>
					<p class="title">Vikings em 700 d.C., 8 fatos que provam que agilidade é para qualquer área do conhecimento</p>
					<p class="autor">Aurineide Cavalcante  & Samuel Moro Bergamo Cavalcante</p>
				</div>`,
			'identificacao-1430-2': `<div class="activity metrica card-program">
					<div class="local-palestra">Arena 2</div>
					<p class="title">Avaliação e gestão de performance para times ágeis</p>
					<p class="autor">Flavio Fonseca Alves</p>
				</div>`,
			'identificacao-1430-3': `<div class="activity lideranca card-program">
					<div class="local-palestra">Arena 3</div>
					<p class="title">Evolução ÁGIL em mais de duas décadas: que bom, que pena e que tal?</p> 
					<p class="autor">Karoline Kröker Corrêa</p>
				</div>`,
			'identificacao-1430-4': `<div class="activity cliente card-program">
					<div class="local-palestra">Atalia</div>
					<p class="title">Como venci os desafios da liderança em um ambiente de trabalho remoto com mindset ágil e management 3.0</p>
					<p class="autor">Paula Jordão</p>
				</div>`,
			'identificacao-1430-5': `<div class="activity default workspace card-program">
					<div class="local-palestra">Abaís</div>
					<p class="title">Extreme Open Space</p>
					<p class="autor"></p>
				</div>`,
			'identificacao-1430-6': `<div class="activity metrica workspace card-program">
					<div class="local-palestra">Terra Caída</div>
					<p class="title">Scrum melhor com Kanban</p>
					<p class="autor">Luiz V. Lopes</p>
				</div>`,
			'identificacao-1430-7': `<div class="activity lideranca workspace card-program">
				<div class="local-palestra">Pirambu</div>
				<p class="title">Semana de 4 dias de trabalho: realidade ou ficção? Como tornamos isso possível com o Escritório de Gerenciamento de Times (TMO)</p>
				<p class="autor">Alercio Bressano Doria Mendonca</p>
			</div>`,
			'identificacao-1510-1': `<div class="activity cliente card-program">
					<div class="local-palestra">Arena 1</div>
					<p class="title">Como transformei uma necessidade pessoal em um negócio?</p>
					<p class="autor">Elton Carvalho</p>
				</div>`,
			'identificacao-1510-2': `<div class="activity metrica card-program">
					<div class="local-palestra">Arena 2</div>
					<p class="title">Potencializando a Visualização, Análise de Dados e Inteligência de Negócios com IA Generativa</p>
					<p class="autor">Maria Vitória Silva Magalhães & Ranieri de Messias Santos</p>
				</div>`,
			'identificacao-1510-3': `<div class="activity lideranca card-program">
					<div class="local-palestra">Arena 3</div>
					<p class="title">Um relato do uso da gamificação para engajar as pessoas em ambientes organizacionais tradicionais: Seus ônus e bonus</p> 
					<p class="autor">Marcia Soares Marques</p>
				</div>`,
			'identificacao-1510-4': `<div class="activity futuro card-program">
					<div class="local-palestra">Atalia</div>
					<p class="title">Agilidade Sustentável: Rumo a Resultados Duradouros</p>
					<p class="autor">Gabrielle Bocardi Justo & Richard Nestor Lartiga Mena</p>
				</div>`,
			'identificacao-1550-1': `<div class="activity raizes card-program">
					<div class="local-palestra">Arena 1</div>
					<p class="title">Maximizando a Agilidade da Equipe de Desenvolvimento: Práticas Eficientes com GitHub Projects</p>
					<p class="autor">Erika Alves</p>
				</div>`,
			'identificacao-1550-2': `<div class="activity futuro card-program">
					<div class="local-palestra">Arena 2</div>
					<p class="title">O Papel da Inteligência Artificial na Evolução da Agilidade</p>
					<p class="autor">Italo Oliveira</p>
				</div>`,
			'identificacao-1550-3': `<div class="activity lideranca card-program">
					<div class="local-palestra">Arena 3</div>
					<p class="title">Agilidade em diferentes contextos: Transformando Redes de Educação</p> 
					<p class="autor">Naomy Oliveira</p>
				</div>`,
			'identificacao-1550-4': `<div class="activity metrica card-program">
					<div class="local-palestra">Atalia</div>
					<p class="title">Gestão de Fluxo de Data Analytics</p>
					<p class="autor">Vitor Puggina & Rafael Mendes Alves</p>
				</div>`,
				'identificacao-1630-1': `<div class="activity futuro card-program">
						<div class="local-palestra">Arena 1</div>
						<p class="title">Transformação Ágil: Reinventando a Forma de Trabalhar na Petrobras</p>
						<p class="autor">Raquel Rodrigues Silva</p>
					</div>`,
				'identificacao-1630-2': `<div class="activity lideranca card-program">
						<div class="local-palestra">Arena 2</div>
						<p class="title">Implantando Gestão de Portfólio conectado a processos de ciclo orçamentário - Aplicação em áreas de infraestrutura da Globo</p>
						<p class="autor">Amanda Cristina Soares Gomes & Daniel Vicentin Gonçalves</p>
					</div>`,
				'identificacao-1630-3': `<div class="activity lideranca card-program">
						<div class="local-palestra">Arena 3</div>
						<p class="title">Mindfulness na daily: promovendo conexão da equipe</p> 
						<p class="autor">Renata Luciria Monteiro</p>
					</div>`,
				'identificacao-1630-4': `<div class="activity metrica card-program">
						<div class="local-palestra">Atalia</div>
						<p class="title">Além das Métricas: Medindo o que realmente importa ou apenas quando é conveniente?</p>
						<p class="autor">Greice Pecorari & Thayna Mesquita de Sousa</p>
					</div>`,
			'identificacao-1700': '<div class="activity full-space card-program">Coffee Break</div>',
			'identificacao-1720': '<div class="activity full-space keynote card-program">Keynote - Ceci Fernandes</div>',
			'identificacao-1810': '<div class="activity full-space card-program">Encerramento</div>',
		}
	};

	window.initProgram = 0;

	window.program = function (day){
		window.initProgram = 1;	
		$("#program-30").css('background-color', '#063676');
		$("#program-31").css('background-color', '#063676');
		$("#program-1").css('background-color', '#063676');

		$("#estrutura-30").css('display', 'none');
		$("#estrutura-31").css('display', 'none');
		$("#estrutura-1").css('display', 'none');

		$("#estrutura-"+day).css('display', 'block');
		$("#program-"+day).css('background-color', '#147332');
		for (var index in dataProgram[day]) {
			var program = dataProgram[day][index];
			$(".response-version-screen #"+index).html(program);
			$(".full-screen #"+index).html(program);
		};
	}
	
	/*
	separar paineis de produto
	e de opén
	*/

	if ($("#program-30").length > 0 && window.initProgram == 0) {
		window.program(30);
	}
/*
	
	$.ajax({
		type: 'GET',
		url: "https://agileminas.com.br/chamada_agile_brazil.php",
		crossDomain:true,
		success: function(result){
			console.log('Successo', result);
			window.program = JSON.parse(result);
			var programacao = ' <ul class="workshops">';

			  window.program.data.forEach( function (item) {
				item.sessions.forEach( function (session) {
					programacao = programacao + `<li class="session" id="session`+session.id_session+`">
						<div class="row classifications">
						<p class="track"><strong>Trilha:</strong>`+session.title_schedule+`</p>
						<p class="level"><strong>Nível:</strong> `+session.venue+`</p>
						<p class="type"><strong>Tipo:</strong> `+session.venue+`</p>
						</div>
						<h3>`+session.title+`</h3>
						<p>
						`;
					var speakers = [];
					session.speakers.forEach(function (speaker) {
						speakers.push(speaker.name);
					});
					programacao = programacao + speakers.join(' & ') + `</p>
						<details>
						<summary>Saiba mais</summary>
						`+session.description+`
					
						<hr>
						<strong>Pré-requisitos: </strong> `+session.tags+`
						</details>
					</li>`
				});
			  });
			programacao += '</ul>';
			$("#program-intregration").html(programacao);
		},
		error: function(result){
			console.log('Error', result);
			$("#program-intregration").html('Programação indisponivel no momento');
		}
	});
*/

})(jQuery);
