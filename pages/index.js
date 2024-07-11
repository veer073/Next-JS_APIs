// pages/index.js
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to User Authentication Project</h1>
      <p>This project demonstrates user registration, login, and password reset functionalities using Next.js.</p>
      <p>
        <a className={styles.link} href="/register">Register</a> | <a className={styles.link} href="/login">Login</a> | <a className={styles.link} href="/forgot-password">Forgot Password</a>
      </p>
    </div>
  );
}
