import { Button } from '@/components/ui/Button';

export function HeroSection() {
	return (
		<section
			id='hero'
			className='relative mx-auto mt-24 md:mt-32 max-w-7xl px-4 text-center'>
			<h1 className='bg-gradient-to-br from-white to-white/40 bg-clip-text py-6 text-4xl font-medium leading-tight tracking-tighter text-transparent sm:text-5xl md:text-7xl lg:text-8xl'>
				A nova forma de gerenciar e vender espaços para eventos
			</h1>
			<p className='mb-12 text-lg tracking-tight text-gray-400 md:text-xl'>
				Nossa plataforma simplifica a descoberta, contratação e gestão de locais incríveis, conectando
				proprietários a organizadores de eventos.
			</p>
			<Button className='mx-auto w-fit rounded-lg px-6 py-3 font-semibold text-white shadow-md bg-gradient-to-r from-[#4d7ab6] to-[#004aad] hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300'>
				<span>Comece Agora &rarr;</span>
			</Button>
		</section>
	);
}
