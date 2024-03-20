const routes = [
	{ name: 'Terms & Conditions', path: '/terms-condition' },
	{ name: 'Privacy Policy', path: '/privacy-policy' },
];

export default function Footer() {
	return (
		<footer className='text-white/50 items-center border-white/10 border-t mt-auto flex justify-between h-12 px-3 lg:px-9 text-xs'>
			<small className='text-xs'>&copy; 2050 @mareklaz. All rights reserved.</small>
			<ul className='flex gap-x-6'>
				{routes.map((route) => (
					<li
						key={route.path}
						className='hover:text-white transition'>
						<a href={route.path}>{route.name}</a>
					</li>
				))}
			</ul>
		</footer>
	);
}
