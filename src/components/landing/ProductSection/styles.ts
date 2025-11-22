import styled from 'styled-components';

export const SectionContainer = styled.section`
	width: 100%;
	background-color: #030712;
	padding: 4rem 0;
	overflow: hidden;
	position: relative;
`;

export const CarouselWrapper = styled.div`
	overflow: hidden;
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	position: relative;

	.swiper {
		overflow: visible !important;
		padding-bottom: 3rem;
		z-index: 10;
	}

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

export const GlowEffect = styled.div`
	position: absolute;
	top: -15%;
	left: 50%;
	transform: translateX(-50%);
	width: 600px;
	height: 600px;
	background: radial-gradient(
		circle,
		rgba(255, 255, 255, 0.15) 0%,
		rgba(255, 255, 255, 0.05) 30%,
		rgba(3, 7, 18, 0) 70%
	);
	pointer-events: none;
	z-index: 1;
	border-radius: 50%;
	filter: blur(40px);
`;

export const EventCard = styled.div<{ $bgImage: string }>`
	position: relative;
	border-radius: 16px;
	background-image: url(${(props) => props.$bgImage});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50%;
	overflow: hidden;
	margin: 0 auto !important;
	box-sizing: border-box;
	box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
	border: 1px solid rgba(255, 255, 255, 0.1);
	transition: all 0.5s ease-out;

	width: 280px;
	height: 380px;

	@media screen and (min-width: 640px) {
		width: 450px;
		height: 280px;
	}

	@media screen and (min-width: 830px) {
		width: 550px;
		height: 340px;
	}

	@media screen and (min-width: 1100px) {
		width: 780px;
		height: 480px;
		pointer-events: auto;
	}

	@media screen and (min-width: 1600px) {
		width: 860px;
		height: 530px;
	}
`;

export const NavButton = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	z-index: 20;
	cursor: pointer;
	background-color: #ffffff;
	width: 44px;
	height: 44px;
	border-radius: 50%;
	color: #0056b3;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	align-items: center;
	justify-content: center;
	display: none;
	transition: transform 0.2s ease, background-color 0.2s;

	&:hover {
		transform: translateY(-50%) scale(1.1);
		background-color: #f8f9fa;
	}

	@media screen and (min-width: 830px) {
		display: flex;
	}

	&.custom-prev {
		left: 20px;
		@media screen and (min-width: 1100px) {
			left: 150px;
		}
		@media screen and (min-width: 1500px) {
			left: 225px;
		}
	}

	&.custom-next {
		right: 20px;
		@media screen and (min-width: 1100px) {
			right: 150px;
		}
		@media screen and (min-width: 1500px) {
			right: 250px;
		}
	}
`;

export const InfoContainer = styled.div`
	margin-top: 2rem;
	text-align: center;
	transition: all 0.4s ease-out;
	opacity: 0;
	transform: translateY(10px);
	filter: blur(5px);

	.swiper-slide-active &,
	.swiper-slide-duplicate-active & {
		opacity: 1;
		transform: translateY(0);
		filter: blur(0);
	}
`;

export const Title = styled.h3`
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
