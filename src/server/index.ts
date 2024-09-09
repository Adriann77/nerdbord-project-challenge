import express from 'express';
import cors from 'cors';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

nextApp.prepare().then(() => {
	app.get('/api/hello', (req, res) => {
		res.json({ message: 'Hello from Express!' });
	});

	app.all('*', (req, res) => {
		return handle(req, res);
	});

	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
});
