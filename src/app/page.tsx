import { BenefitsSection } from '@/components/landing/BenefitsSection/BenefitsSection';
import { Footer } from '@/components/landing/Footer/Footer';
import { Header } from '@/components/landing/Header/Header';
import { HeroSection } from '@/components/landing/Hero/Hero';
import { PricingSection } from '@/components/landing/PricingSection/PricingSection';
import { ProductSection } from '@/components/landing/ProductSection/ProductSection';

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen items-center'>
			<Header />
			<main className='w-full flex-grow'>
				<HeroSection />
				<div className='[--color:var(--color-one)] pointer-events-none relative -z-[2] mx-auto h-[50rem] overflow-hidden [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_50%)] my-[-18.8rem] before:absolute before:inset-0 before:h-full before:w-full before:opacity-40 before:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[hsl(var(--border))] after:bg-background'></div>
				<BenefitsSection />
				<ProductSection />
				<PricingSection />
			</main>
			<Footer />
		</div>
	);
}
