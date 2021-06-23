import React from 'react';
import { Page } from '@geist-ui/react';
import { signIn, useSession } from 'next-auth/client';

const Home = (): React.ReactNode => {
  const [session] = useSession();
  return (
    <>
      <Page>
        Home Page
      </Page>
    </>
  );
};

export default Home;
