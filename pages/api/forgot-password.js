// pages/api/forgot-password.js
import { users } from '../../data/users';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, newPassword } = req.body;
    if (!email || !newPassword) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const user = users.find(user => user.email === email);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.password = newPassword; // In a real-world app, password should be hashed
    return res.status(200).json({ message: 'Password reset successfully' });
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
