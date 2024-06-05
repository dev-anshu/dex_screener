// src/app/auth/signin.tsx
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

export default function SignIn() {
  const { data: session } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signIn('credentials', { email, password });
      }}
    >
      <label>
        Email address
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
}
