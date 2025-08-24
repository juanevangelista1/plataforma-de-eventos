// src/components/landing/PricingSection.tsx
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { pricingTiers } from '@/lib/data';
import { Check } from 'lucide-react';

export function PricingSection() {
	return (
		<section
			id='pricing'
			className='py-20 px-4'>
			<div className='text-center mb-12 max-w-3xl mx-auto'>
				<h2 className='text-3xl sm:text-4xl font-bold text-white'>
					Entre em contato agora e saiba mais
				</h2>
				<p className='text-gray-400 mt-2 text-lg'>Escolha o plano perfeito para o seu evento.</p>
			</div>
			<div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
				{pricingTiers.map((tier) => (
					<Card
						key={tier.name}
						className='flex flex-col card-neon-border z-10 p-8 hover:scale-105 transition-transform duration-300'>
						<h3 className='text-xl font-semibold text-white'>{tier.name}</h3>
						<p className='text-4xl font-bold my-4 text-white'>
							{tier.price}
							<span className='text-sm font-normal text-gray-400'> / mês</span>
						</p>
						<ul className='space-y-3 mb-6 flex-grow text-gray-300'>
							{tier.features.map((feature) => (
								<li
									key={feature}
									className='flex items-center gap-2 text-sm'>
									<Check className='w-4 h-4 text-green-500' />
									<span>{feature}</span>
								</li>
							))}
						</ul>
						<Button
							variant='ghost'
							className='mx-auto w-full rounded-lg px-6 py-3 font-semibold text-white shadow-md bg-gradient-to-r from-[#4d7ab6] to-[#004aad] hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300'>
							Assinar
						</Button>
					</Card>
				))}
			</div>
		</section>
	);
}
