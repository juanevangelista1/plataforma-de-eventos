import { Dot } from 'lucide-react';
import { Fragment } from 'react';

const words = [
	'Agilidade',
	'Resultados Imediatos',
	'Controle Total',
	'Gestão Simplificada',
	'Vendas Ampliadas',
	'Eventos de Sucesso',
	'Decisões Inteligentes',
	'Crescimento Exponencial',
	'Plataforma Intuitiva',
	'Eficiência Máxima',
	'Tudo em um só lugar',
	'Inovação para Eventos',
	'Segurança e Confiança',
	'Experiência Única',
	'Seu Sucesso Garantido',
	'Fácil e Rápido',
	'Poder em suas Mãos',
	'Transforme seu Evento',
];

export const TapeSection = () => {
	return (
		<div className='py-16 lg:pb-20 lg:pt-32 overflow-x-clip'>
			<div className='bg-gradient-to-r from-[#81b6fa] to-[#0061e1] -rotate-3 -mx-1'>
				<div className='flex justify-center'>
					<div className='flex flex-none gap-4 pr-4 py-3 marquee'>
						{[...new Array(2)].fill(0).map((_, index) => (
							<Fragment key={index}>
								{words.map((word) => (
									<div
										className='inline-flex gap-4 items-center'
										key={word}>
										<span className='text-gray-900 uppercase font-extrabold text-sm whitespace-nowrap'>
											{word}
										</span>
										<Dot className='size-6 text-gray-900 -rotate-12' />
									</div>
								))}
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
