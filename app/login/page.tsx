'use client';

import { signIn } from 'next-auth/react';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError('Email ou mot de passe invalide');
    } else {
      // Rediriger vers le backoffice pour les admins, le calendrier pour les autres
      const session = await fetch('/api/auth/session').then(res => res.json());
      if (session?.user?.role === 'ADMIN') {
        router.push('/backoffice');
      } else {
        router.push('/calendar');
      }
    }
  };
  return (
    <div className={styles['login-page']}>
      <div className={styles['login-container']}>
        <h1 className={styles['login-title']}>Connexion</h1>
        <form onSubmit={handleSubmit} className={styles['login-form']}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className={styles['error-message']}>{error}</p>}
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
}

