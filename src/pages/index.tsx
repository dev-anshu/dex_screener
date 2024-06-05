// src/pages/index.tsx
import SignIn from '@/app/auth/signin';
import Layout from '@/app/components/Layout';

export default function Home() {
  return (
    <Layout>
      <SignIn />
    </Layout>
  );
}
