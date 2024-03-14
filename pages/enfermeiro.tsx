import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@components/Header'
import FooterInline from '@components/FooterInline'
import { WhatsappChat } from '@components/Icons'

const Enfermeiro: React.FC = () => {
	const { t } = useTranslation('enfermeiro')

	return (
		<>
			<Header
				title={t('title')}
				keywords={t('keywords')}
				description={t('description')}
				path={t('path')}
				hreflang={t('hreflang')}
				author={t('author')}
			/>
			<div className="relative bg-white overflow-hidden">
				<div className="max-w-7xl mx-auto">
					<div className="relative pt-8 pb-8 bg-white sm:pb-16 md:pb-20 lg:px-32 lg:w-full lg:pb-28 xl:pb-32">
						<main className="mx-auto px-4 sm:px-6 ">
							<div className="fixed right-1 p-2 bottom-1 mr-2 mb-20 lg:mr-10 sm:mb-20 bg-whats-app border-4 border-whats-app rounded-full text-white z-10">
								<WhatsappChat />
							</div>
							<div className="text-justify space-y-2">
								<h1 className="mb-6 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl after:absolute after:w-24 after:h-1 after:ml-0 after:bg-blue-600">
									<span className="block">{t('h1')}</span>
								</h1>
								<h2>
									Guia Completo para Enfermeiros que Desejam Trabalhar
									na Alemanha: Oportunidades e Informações Essenciais
								</h2>
								<h3>
									Descubra todas as informações necessárias para
									enfermeiros interessados em trabalhar na Alemanha.
									Este guia abrangente aborda requisitos, salários,
									configurações de trabalho e benefícios, fornecendo
									dicas valiosas para iniciar uma carreira como
									enfermeiro na Alemanha. Entre em contato conosco para
									receber orientações personalizadas e dar o primeiro
									passo rumo a uma carreira gratificante.
								</h3>
								<p>
									Se você é um enfermeiro com o desejo de trabalhar na
									Alemanha, este guia foi criado para fornecer
									informações essenciais que irão ajudá-lo a dar os
									primeiros passos rumo a essa emocionante jornada
									profissional.
								</p>
								<p>
									Salário de Enfermeiro na Alemanha: Descubra detalhes
									precisos sobre o salário médio de enfermeiros
									registrados na Alemanha em 2023. <br />
									<a
										href="/blog/quanto-ganha-um-enfermeiro-na-alemanha"
										className="text-blue-600"
									>
										➡️ Sálario de um enfermeiro na Alemanha
									</a>
									<br /> Informe-se sobre como a experiência e
									qualificações avançadas podem influenciar seus ganhos
									e progressão na carreira, garantindo uma visão clara
									do que esperar financeiramente ao ingressar no mercado
									de trabalho alemão.
								</p>
								<p>
									Requisitos para Trabalhar como Enfermeiro na Alemanha:
									Conheça os requisitos para exercer a profissão de
									enfermeiro na Alemanha. Compreenda as etapas
									necessárias para a validação de diplomas e a obtenção
									do reconhecimento de suas qualificações. Nós
									fornecemos orientações detalhadas sobre o processo de
									registro como enfermeiro no país, garantindo que você
									esteja bem preparado para enfrentar os desafios
									burocráticos.
									<br />
									<a
										href="/trabalhar-na-alemanha-como-enfermeiro-enfermeiros-na-alemanha"
										className="text-blue-600"
									>
										➡️ Candidatura
									</a>{' '}
								</p>
								<p>
									Configurações de Trabalho: Explore as diversas
									configurações de trabalho disponíveis para enfermeiros
									na Alemanha. Aprofunde-se nas particularidades dos
									renomados hospitais alemães, nos ambulatórios médicos
									modernos e nos serviços ambulantes equipados com
									veículos especializados. Ao compreender as diferenças
									entre essas opções, você poderá tomar decisões
									informadas sobre a direção a seguir, alinhando-se às
									suas preferências e objetivos profissionais.
								</p>
								<p>
									Benefícios e Vantagens: Além do salário competitivo, a
									Alemanha oferece uma ampla variedade de benefícios e
									vantagens para enfermeiros. Descubra mais sobre
									licenças remuneradas, seguro saúde abrangente,
									programas de treinamento contínuo e oportunidades de
									progressão na carreira. Nós destacamos as vantagens
									exclusivas que você pode esperar ao trabalhar como
									enfermeiro na Alemanha, proporcionando uma visão
									abrangente do pacote de benefícios oferecido.
								</p>
								<p>
									Como dar o Primeiro Passo: Se você está pronto para
									iniciar sua carreira como enfermeiro na Alemanha,
									entre em contato conosco. Nossa equipe especializada
									oferece orientações personalizadas para ajudá-lo a
									navegar pelo processo de candidatura, compreender os
									requisitos específicos do seu caso e encontrar
									oportunidades de trabalho adequadas às suas
									habilidades e interesses. Estamos prontos para
									apoiá-lo em cada etapa, ajudando você a dar o primeiro
									passo em direção a uma carreira gratificante na
									enfermagem na Alemanha.
								</p>
								<p>
									Trabalhar como enfermeiro na Alemanha pode abrir
									portas para uma carreira recompensadora e proporcionar
									uma experiência cultural enriquecedora. Aproveite esta
									oportunidade e dê o primeiro passo para uma jornada
									profissional gratificante.
								</p>
								<p>
									Entre em contato conosco agora mesmo, por e-mail:{' '}
									<a
										href="mailto:contato@abconnection.de"
										rel="nofollow"
										className="text-blue-600"
									>
										contato@abconnection.de
									</a>
									, ou por Whats-App, para obter orientações
									especializadas e embarcar nessa emocionante aventura
									como enfermeiro na Alemanha.
								</p>
							</div>
						</main>
					</div>
				</div>
			</div>
			<FooterInline />
		</>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'enfermeiro',
			'navbar',
			'footer',
		])),
	},
})

export default Enfermeiro
