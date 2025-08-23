'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Rocket, Menu, X } from 'lucide-react';

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='fixed top-0 z-50 w-full border-b border-gray-900 bg-background/80 p-4 backdrop-blur'>
			<div className='container mx-auto flex justify-between items-center'>
				<Link
					href='/'
					className='flex items-center gap-2'>
					<Rocket className='w-6 h-6 text-brand-light' />
					<span className='font-semibold text-lg'>Eventa</span>
				</Link>

				<nav className='hidden md:flex items-center gap-8 text-sm'>
					<Link
						href='#benefits'
						className='transition-colors hover:text-foreground/80 hover:text-gray-300 hover-underline-animation'>
						Benefícios
					</Link>
					<Link
						href='#pricing'
						className='transition-colors hover:text-foreground/80 hover:text-gray-300 hover-underline-animation'>
						Preços
					</Link>
					<Link
						href='/login'
						className='transition-colors hover:text-foreground/80 hover:text-gray-300 hover-underline-animation'>
						Login
					</Link>
				</nav>

				<div className='md:hidden'>
					<button onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
					</button>
				</div>

				{isOpen && (
					<nav className='absolute top-full left-0 w-95 border-gray-800 bg-black p-4 backdrop-blur md:hidden flex flex-col items-center gap-4 py-4'>
						<Link
							href='#benefits'
							onClick={() => setIsOpen(false)}>
							Benefícios
						</Link>
						<Link
							href='#pricing'
							onClick={() => setIsOpen(false)}>
							Preços
						</Link>
						<Link
							href='/login'
							onClick={() => setIsOpen(false)}>
							Login
						</Link>
					</nav>
				)}
			</div>
		</header>
	);
}
