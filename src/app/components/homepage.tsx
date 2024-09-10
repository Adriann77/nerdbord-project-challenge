import { SignInButton } from '@clerk/nextjs';
import React from 'react';

export default function Homepage() {
	return (
        <div className='h-screen w-full flex items-center flex-col gap-5 justify-center'>
            <h1 className='text-2xl text-white'>Welcome to FullstackApp</h1>
			<button className='btn btn-primary'>
				<SignInButton />
			</button>
		</div>
	);
}
