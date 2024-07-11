// pages/api/register.js
import { users } from '../../data/users';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const userExists = users.find(user => user.email === email || user.username === username);
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = {
      id: users.length + 1,
      email,
      username,
      password, // In a real-world app, password should be hashed
    };

    users.push(newUser);
    return res.status(201).json({ message: 'User registered successfully', user: newUser });
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
