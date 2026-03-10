'use client';

import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { createPortal } from 'react-dom';
import { MessageSquare } from 'lucide-react';

export default function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{
			label: 'Sobre Nós',
			href: '#sobre',
		},
		{
			label: 'Soluções',
			href: '#solucoes',
		},
		{
			label: 'Avaliações',
			href: '#clientes',
		},
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn('fixed top-0 z-50 w-full border-b border-transparent transition-all duration-300', {
				'bg-primary/80 border-white/5 backdrop-blur-xl h-16 shadow-[0_4px_30px_rgba(0,0,0,0.1)]': scrolled,
				'bg-transparent h-24': !scrolled,
			})}
		>
			<nav className="mx-auto flex h-full w-full max-w-screen-2xl items-center justify-between px-4 md:px-8 lg:px-12 xl:px-16">
				<div className="flex items-center gap-3">
					<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary font-display font-bold text-xl shadow-[0_0_15px_rgba(255,255,255,0.3)]">
						C
					</div>
					<span className="text-xl font-display font-semibold tracking-tight text-white flex gap-1">
						Capital<span className="font-light opacity-60">Partners</span>
					</span>
				</div>

				<div className="hidden items-center gap-6 md:flex absolute left-1/2 -translate-x-1/2 bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md">
					{links.map((link) => (
						<a 
							key={link.label} 
							className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group py-1" 
							href={link.href}
						>
							{link.label}
							<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 rounded-full"></span>
						</a>
					))}
				</div>

				<div className="hidden items-center gap-4 md:flex">
					<a 
						href="#whatsapp" 
						className="relative flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-accent-hover hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95 overflow-hidden group"
					>
						<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
						<MessageSquare className="w-4 h-4 relative z-10" />
						<span className="relative z-10">Fale Conosco</span>
					</a>
				</div>

				<Button
					size="icon"
					variant="ghost"
					onClick={() => setOpen(!open)}
					className="md:hidden text-white"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-6" duration={300} />
				</Button>
			</nav>
			<MobileMenu open={open} className="flex flex-col justify-between gap-6">
				<div className="grid gap-y-4">
					{links.map((link) => (
						<a
							key={link.label}
							className={cn(
								buttonVariants({
									variant: 'ghost',
									className: 'justify-center text-lg text-gray-300 hover:text-white py-6',
								}),
							)}
							href={link.href}
							onClick={() => setOpen(false)}
						>
							{link.label}
						</a>
					))}
				</div>
				<div className="flex flex-col gap-4">
					<a 
						href="#whatsapp" 
						className="relative flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-4 text-center text-sm font-semibold text-primary transition-all w-full overflow-hidden hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
						onClick={() => setOpen(false)}
					>
						<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20 -translate-x-full animate-shimmer pointer-events-none" />
						<MessageSquare className="w-5 h-5 relative z-10" />
						<span className="relative z-10 text-base">Fale Conosco</span>
					</a>
				</div>
			</MobileMenu>
		</header>
	);
}


type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'bg-primary/95 backdrop-blur-2xl transition-all duration-300',
				'fixed inset-0 top-16 z-40 flex flex-col overflow-hidden md:hidden w-full h-[calc(100vh-4rem)]',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:fade-in data-[slot=open]:slide-in-from-top-4 duration-300',
					'size-full p-8 flex flex-col',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}
