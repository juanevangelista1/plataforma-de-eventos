// styes.ts
import styled from 'styled-components';

export const SectionContainer = styled.section`
	width: 100%;
	background-color: #030712;
	padding: 4rem 0;
	overflow: hidden;
`;

export const CarouselWrapper = styled.div`
	width: 100%;
	max-width: 1400px;
	margin: 0 auto;
	position: relative;

	/* Permite que sombras e slides laterais não sejam cortados */
	.swiper {
		overflow: visible !important;
		padding-bottom: 3rem; /* Espaço para o texto abaixo */
	}

	/* Customização dos pontos de paginação */
	.swiper-pagination-bullet {
		background: #4b5563;
		opacity: 0.5;
	}
	.swiper-pagination-bullet-active {
		background: #10b981;
		opacity: 1;
		width: 24px;
		border-radius: 4px;
		transition: width 0.3s;
	}
`;

// --- O COMPONENTE PRINCIPAL (Antio ._18dank00) ---
export const EventCard = styled.div<{ $bgImage: string }>`
	position: relative;

	border-radius: var(--radius-card, 16px);

	background-image: url(${(props) => props.$bgImage});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50%;

	overflow: hidden;
	margin: 0 auto !important;
	box-sizing: border-box;

	box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
	border: 1px solid rgba(255, 255, 255, 0.1);

	height: 190px;
	width: 100%;
	max-width: 89vw;
	transition: all 0.3s ease-out;

	@media screen and (min-width: 640px) {
		height: 44vw;
	}

	@media screen and (min-width: 830px) {
		height: 36vw;
	}

	@media screen and (min-width: 1100px) {
		width: 100%;
		max-width: 860px;
		height: 400px;

		pointer-events: auto;
	}

	@media screen and (min-width: 1500px) {
		height: 480px;
	}
`;

export const InfoContainer = styled.div`
	margin-top: 2rem;
	text-align: center;
	transition: all 0.4s ease-out;

	opacity: 0;
	transform: translateY(10px);
	filter: blur(5px);

	.swiper-slide-active & {
		opacity: 1;
		transform: translateY(0);
		filter: blur(0);
	}
`;

export const Title = styled.h3`
	font-family: serif;
	font-size: 1.5rem;
	color: white;
	font-weight: 700;
	margin-bottom: 0.5rem;

	@media (min-width: 768px) {
		font-size: 2rem;
	}
`;

export const Description = styled.p`
	color: #9ca3af;
	font-size: 0.875rem;
	max-width: 600px;
	margin: 0 auto;

	@media (min-width: 768px) {
		font-size: 1rem;
	}
`;
