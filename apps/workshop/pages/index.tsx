import { Layout } from 'components/layout';
import Head from 'next/head';
import { AuthForm } from 'packages.components.auth-form';
import { Modal } from 'packages.components.modal';
import { Button } from 'packages.inputs.button';
import { Input } from 'packages.inputs.input';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Powerful</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout isCreateProfilePage>
        <div>Powerful</div>
      </Layout>

    </div>
  );
}
