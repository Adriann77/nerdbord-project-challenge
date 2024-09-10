'use client';
import { useUser } from '@clerk/nextjs';

export default function Dashboard() {
	const { isLoaded, isSignedIn, user } = useUser();
	console.log(user);

	if (!isLoaded || !isSignedIn) {
		return null;
	}

	return <div className='h-screen flex items-center justify-center'>Hello {user.username}</div>;
}
