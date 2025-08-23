import { Card } from '@/components/ui/Card';
import { Zap, Users, BarChartBig, ClipboardList } from 'lucide-react';

const benefits = [
	{
		icon: <BarChartBig className='w-6 h-6 text-white' />,
		title: 'Decisões Baseadas em Dados',
		description:
			'Acompanhe receita, taxa de vendas e check-ins em tempo real com um dashboard completo e intuitivo.',
	},
	{
		icon: <Zap className='w-6 h-6 text-white' />,
		title: 'Agilidade Total',
		description: 'Encontre e reserve o local perfeito em minutos, não em dias.',
	},
	{
		icon: <ClipboardList className='w-6 h-6 text-white' />,
		title: 'Gestão Simplificada',
		description: 'Um dashboard intuitivo para gerenciar suas reservas e pagamentos.',
	},
	// {
	// 	icon: <Users className='w-6 h-6 text-white' />,
	// 	title: 'Alcance Ampliado',
	// 	description: 'Exponha seu espaço para milhares de organizadores de eventos qualificados.',
	// },
];

export function BenefitsSection() {
	return (
		<section
			id='benefits'
			className='py-20 px-4'>
			<div className='text-center mb-12 max-w-3xl mx-auto'>
				<h2 className='text-3xl sm:text-4xl font-bold text-white'>
					Controle Total do Seu Evento, do Início ao Fim
				</h2>
				<p className='text-gray-400 mt-2 text-lg sm:text-xl'>
					Tudo que você precisa para transformar seu evento em um sucesso.
				</p>
			</div>

			<div className='max-w-9xl mx-auto flex gap-8 flex-wrap justify-center'>
				{benefits.map((benefit) => (
					<Card
						key={benefit.title}
						className='py-4 px-4 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 lg:w-[390px] sm:w-1/2 w-full'>
						<div className='w-12 h-12 bg-gradient-to-r from-[#4d7ab6] to-[#004aad] rounded-lg flex items-center justify-center mb-4 mx-auto'>
							{benefit.icon}
						</div>
						<h3 className='text-xl font-semibold mb-2 text-white'>{benefit.title}</h3>
						<p className='text-gray-400'>{benefit.description}</p>
					</Card>
				))}
			</div>
		</section>
	);
}
