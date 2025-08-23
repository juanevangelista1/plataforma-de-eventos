import Link from 'next/link';
import { Rocket } from 'lucide-react';

export function Footer() {
	return (
		<footer className='w-full container mx-auto p-8 border-t border-gray-800 mt-20'>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left'>
				<div>
					<h4 className='font-semibold text-white mb-4'>Produto</h4>
					<ul className='space-y-2 text-sm text-gray-400'>
						<li>
							<Link
								href='#'
								className='hover:text-white'>
								Features
							</Link>
						</li>
						<li>
							<Link
								href='#'
								className='hover:text-white'>
								Preços
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-4'>
				<Link
					href='https://www.m3solucoesdigitais.com/'
					className='flex items-center gap-2 hover:text-white transition-colors'
					target='_blank'
					rel='noopener noreferrer'>
					<Rocket className='w-5 h-5' />
					<strong className='font-semibold text-base text-white'>M3 Digital Solutions</strong>
				</Link>
				<p>&copy; {new Date().getFullYear()} M3 Digital Solutions | Todos os direitos reservados.</p>
			</div>
		</footer>
	);
}
