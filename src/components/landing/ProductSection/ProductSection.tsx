import Image from 'next/image';
import React from 'react'; // Import React to use cloneElement

// Importe suas imagens
import ImageDashboard from '../../../../public/images/ProductSection/Image-Dashboard.jpeg';
import ImageEvent from '../../../../public/images/ProductSection/Image-Gestão.jpeg';
import ImageUser from '../../../../public/images/ProductSection/Image-gestão-usuario.jpeg';

const benefits = [
	{
		image: (
			<Image
				src={ImageDashboard}
				alt='Dashboard da plataforma'
			/>
		),
		title: 'Decisões Baseadas em Dados',
		description:
			'Acompanhe receita, taxa de vendas e check-ins em tempo real com um dashboard completo e intuitivo.',
	},
	{
		image: (
			<Image
				src={ImageEvent}
				alt='Tela de gestão de eventos'
			/>
		),
		title: 'Gestão de Eventos Centralizada',
		description:
			'Gerencie todos os seus eventos, detalhes e locais a partir de um único painel de controle, sem complicações.',
	},
	{
		image: (
			<Image
				src={ImageUser}
				alt='Tela de gestão de usuários'
			/>
		),
		title: 'Controle Total dos Usuários',
		description:
			'Gerencie permissões e acessos de usuários com facilidade, garantindo segurança e eficiência na administração do seu evento.',
	},
];

export function ProductSection() {
	return (
		<div className='flex flex-col mt-10 md:mt-20 gap-20 lg:max-w-7xl mx-auto p-4 md:p-0'>
			{benefits.map((benefit, benefitIndex) => (
				<section
					className='bg-gray-800 overflow-hidden rounded-3xl z-0 after:-z-10 after:content-[""] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none pb-0 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:pr-6 sticky'
					key={benefit.title}
					style={{
						top: `calc(64px + ${benefitIndex * 40}px)`,
					}}>
					<div className='lg:grid lg:grid-cols-[minmax(0,_384px)_1fr] lg:gap-24'>
						<div className='lg:pb-16 lg:max-w-96'>
							<h3 className='font-serif text-2xl mt-2 md:text-4xl md:mt-5 text-white'>{benefit.title}</h3>
							<hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
							<p className='text-gray-400 mt-4'>{benefit.description}</p>
						</div>

						<div className='relative'>
							<div className='mt-8 -mb-16 md:-mb-24 lg:mt-0 lg:absolute lg:inset-0'>
								{React.cloneElement(benefit.image, {
									className:
										'w-full h-full object-cover rounded-xl lg:translate-x-10 transition-transform duration-500',
								})}
							</div>
						</div>
					</div>
				</section>
			))}
		</div>
	);
}
