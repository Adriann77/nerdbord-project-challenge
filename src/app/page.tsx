import { auth, currentUser } from '@clerk/nextjs/server';
import Dashboard from './components/dashboard';
import Nav from './components/nav';

const { userId } = auth();

console.log(currentUser);
console.log(userId);
console.log('123');

export default function Home() {
	return (
		<>
			<Nav />
			<Dashboard />
		</>
	);
}
