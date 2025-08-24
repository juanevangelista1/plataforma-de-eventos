import { Button } from '@/components/ui/Button';
import { Rocket } from 'lucide-react';

export function HeroSection() {
	return (
		<section
			id='hero'
			className='relative mx-auto mt-24 md:mt-32 max-w-7xl px-4 text-center'>
			<h1 className='bg-gradient-to-br from-white to-white/40 bg-clip-text py-6 text-4xl font-medium leading-tight tracking-tighter text-transparent sm:text-5xl md:text-7xl lg:text-8xl'>
				A nova forma de gerenciar e vender para os seus eventos
			</h1>
			<p className='mb-12 text-lg tracking-tight text-gray-400 md:text-xl'>
				Nossa plataforma simplifica a descoberta, contratação e gestão de locais incríveis, conectando
				proprietários a organizadores de eventos.
			</p>
			<Button className='group mx-auto w-2xs rounded-lg px-6 py-3 font-semibold text-white shadow-md bg-gradient-to-r from-[#4d7ab6] to-[#004aad] hover:shadow-xl duration-300'>
				<div className='flex items-center gap-4 justify-center'>
					<span className='text-white text-lg'>Comece agora</span>
					<Rocket className='w-6 h-6 text-brand-light transition-transform duration-300 group-hover:scale-115' />
				</div>
			</Button>
		</section>
	);
}
