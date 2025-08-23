import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(className)}
			{...props}>
			<div className=' bg-gray-900 w-full h-full rounded-3xl p-6'>{children}</div>
		</div>
	);
}
