import { ReactNode } from 'react';

type H1Pros = {
	children: ReactNode;
};

export default function H1({ children }: H1Pros) {
	return <h1 className='text-3xl lg:text-6xl font-bold tracking-tight'>{children}</h1>;
}
