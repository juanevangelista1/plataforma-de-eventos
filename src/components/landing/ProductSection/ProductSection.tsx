'use client';

import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import {
	SectionContainer,
	CarouselWrapper,
	EventCard,
	InfoContainer,
	Title,
	Description,
	NavButton,
	GlowEffect,
} from './styles';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const PRODUCT_BENEFITS = [
	{
		id: '1',
		title: 'Decisões Baseadas em Dados',
		description: 'Acompanhe receita e vendas em tempo real.',
		image: '/images/ProductSection/Image-Dashboard.jpeg',
	},
	{
		id: '2',
		title: 'Gestão Centralizada',
		description: 'Controle todos os detalhes em um painel.',
		image: '/images/ProductSection/Image-Gestão.jpeg',
	},
	{
		id: '3',
		title: 'Controle de Usuários',
		description: 'Gerencie permissões com segurança.',
		image: '/images/ProductSection/Image-gestão-usuario.jpeg',
	},
	{
		id: '4',
		title: 'Relatórios Financeiros',
		description: 'Exportação detalhada para contabilidade.',
		image: '/images/ProductSection/Image-Dashboard.jpeg',
	},
];

export function ProductCarouselSection() {
	const swiperConfig = useMemo(
		() => ({
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto' as const,
			loop: true,
			speed: 600,
			coverflowEffect: {
				rotate: 0,
				stretch: 0,
				depth: 350,
				modifier: 1.5,
				slideShadows: true,
				scale: 1.2,
			},
			navigation: {
				nextEl: '.custom-next',
				prevEl: '.custom-prev',
			},
			pagination: { clickable: true },
			modules: [EffectCoverflow, Pagination, Navigation, Autoplay],
		}),
		[]
	);

	return (
		<SectionContainer>
			<CarouselWrapper>
				<GlowEffect />
				<div className='text-center mb-12 max-w-3xl mx-auto'>
					<h2 className='text-3xl sm:text-4xl font-bold text-white'>
						Controle Total do Seu Evento, do Início ao Fim
					</h2>
					<p className='text-gray-400 mt-2 text-lg sm:text-xl'>
						Tudo que você precisa para transformar seu evento em um sucesso.{' '}
					</p>
				</div>

				<NavButton className='custom-prev'>
					<ChevronLeft
						size={24}
						strokeWidth={2.5}
					/>
				</NavButton>

				<NavButton className='custom-next'>
					<ChevronRight
						size={24}
						strokeWidth={2.5}
					/>
				</NavButton>

				<Swiper {...swiperConfig}>
					{PRODUCT_BENEFITS.map((benefit) => (
						<SwiperSlide
							key={benefit.id}
							style={{ width: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<EventCard $bgImage={benefit.image} />

							<InfoContainer>
								<Title>{benefit.title}</Title>
								<Description>{benefit.description}</Description>
							</InfoContainer>
						</SwiperSlide>
					))}
				</Swiper>
			</CarouselWrapper>
		</SectionContainer>
	);
}
