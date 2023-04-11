import { useState } from 'react';
import 'styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getScheme } from 'theme.scheme';
import { Layout } from 'components/layout';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const theme = createTheme(getScheme());

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <Layout isCreateProfilePage>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
