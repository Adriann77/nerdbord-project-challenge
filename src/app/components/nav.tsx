import { UserButton } from '@clerk/nextjs';
import React from 'react';

export default function Nav() {
	return (
		<nav className='bg-secondary w-screen h-20 flex items-center justify-center fixed top-0'>
			<div className='flex top-0 left-0 right-0 mx-auto items-center justify-between max-w-[768px] w-full p-4'>
				<p className='text-black text-3xl'>FullstackApp</p>
				<UserButton />
			</div>
		</nav>
	);
}
