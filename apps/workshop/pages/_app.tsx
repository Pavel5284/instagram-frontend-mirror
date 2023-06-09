import 'styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getScheme } from 'theme.scheme';
import { Layout } from 'components/layout';
import { AuthRedirect } from '../components/auth-redirect';

const queryClient = new QueryClient();

const theme = createTheme(getScheme());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Layout isCreateProfilePage>
          <AuthRedirect>
            <Component {...pageProps} />
          </AuthRedirect>
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
