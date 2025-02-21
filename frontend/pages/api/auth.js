import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        // Here you would typically validate the user credentials with your database
        // For demonstration, we'll assume a successful login for a user "testuser"
        if (username === 'testuser' && password === 'password') {
            const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
            return res.status(200).json({ token });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}