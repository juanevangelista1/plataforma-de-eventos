import { Card } from '@/components/ui/Card';
import ImageDashboard from '../../../../public/images/ProductSection/Image-Dashboard.jpeg';
import ImageUser from '../../../../public/images/ProductSection/Image-gestão-usuario.jpeg';
import ImageEvent from '../../../../public/images/ProductSection/Image-Gestão.jpeg';
import Image from 'next/image';

const benefits = [
	{
		icon: (
			<Image
				src={ImageDashboard}
				alt='Dashboard'
				className='w-40 h-20'
			/>
		),
		title: 'Decisões Baseadas em Dados',
		description:
			'Acompanhe receita, taxa de vendas e check-ins em tempo real com um dashboard completo e intuitivo.',
	},
	{
		icon: (
			<Image
				src={ImageUser}
				alt='Dashboard'
				className='w-40 h-20'
			/>
		),
		title: 'Gestão de Eventos Centralizada',
		description:
			'Gerencie todos os seus eventos, detalhes e locais a partir de um único painel de controle, sem complicações.',
	},
	{
		icon: (
			<Image
				src={ImageEvent}
				alt='Dashboard'
				className='w-40 h-20'
			/>
		),
		title: 'Controle Total da sua Equipe',
		description:
			'Adicione membros da sua equipe, defina suas funções e controle permissões de acesso de forma simples e segura.',
	},
];

export function ProductSection() {
	return (
		<section
			id='benefits'
			className='py-20 px-4'>
			<div className='text-center mb-12 max-w-3xl mx-auto'>
				<h2 className='text-3xl sm:text-4xl font-bold text-white'>
					Controle Total do Seu Evento, do Início ao Fim
				</h2>
				<p className='text-gray-400 mt-2 text-lg'>
					Tudo que você precisa para transformar seu evento em um sucesso.
				</p>
			</div>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
				{benefits.map((benefit) => (
					<Card
						key={benefit.title}
						className='p-8 text-center md:text-left hover:shadow-2xl hover:scale-105 transition-all duration-300'>
						<div className='mb-4'>{benefit.icon}</div>
						<h3 className='text-xl font-semibold mb-2 text-white'>{benefit.title}</h3>
						<p className='text-gray-400'>{benefit.description}</p>
					</Card>
				))}
			</div>
		</section>
	);
}
