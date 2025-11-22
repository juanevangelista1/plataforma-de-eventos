'use client';

import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import {
	SectionContainer,
	CarouselWrapper,
	EventCard,
	InfoContainer,
	Title,
	Description,
} from './styles';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import ImageDashboard from '../../../../public/images/ProductSection/Image-Dashboard.jpeg';
import ImageEvent from '../../../../public/images/ProductSection/Image-Gestão.jpeg';
import ImageUser from '../../../../public/images/ProductSection/Image-gestão-usuario.jpeg';

const PRODUCT_BENEFITS = [
	{
		id: '1',
		title: 'Decisões Baseadas em Dados',
		description:
			'Acompanhe receita, taxa de vendas e check-ins em tempo real com um dashboard completo e intuitivo.',
		image: ImageDashboard,
	},
	{
		id: '2',
		title: 'Gestão de Eventos Centralizada',
		description:
			'Gerencie todos os seus eventos, detalhes e locais a partir de um único painel de controle.',
		image: ImageEvent,
	},
	{
		id: '3',
		title: 'Controle Total dos Usuários',
		description: 'Gerencie permissões e acessos de usuários com facilidade e segurança.',
		image: ImageUser,
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
				depth: 150,
				modifier: 1.5,
				slideShadows: true,
				scale: 0.85,
			},
			pagination: { clickable: true },
			modules: [EffectCoverflow, Pagination, Navigation, Autoplay],
		}),
		[]
	);

	return (
		<SectionContainer>
			<CarouselWrapper>
				<Swiper {...swiperConfig}>
					{PRODUCT_BENEFITS.map((benefit) => (
						<SwiperSlide
							key={benefit.id}
							style={{ width: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<EventCard $bgImage={benefit.image.src} />

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
