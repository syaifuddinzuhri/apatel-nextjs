import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
import "@fontsource/roboto/700.css";
import "../styles/carousel.css";
import "../styles/datepicker.css";
import "../styles/custom.css";
import "react-loading-skeleton/dist/skeleton.css";

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppContext } from "next/app";
import App from "next/app";
import { DefaultSeo } from "next-seo";
import type { ReactElement } from "react";
import React from "react";

import { theme } from "@/configs/themeConfiguration";
import { appHead } from "@/constants/app";
import type { NextAppProps } from "@/interfaces/next";
import AuthGuard from "@/modules/auth/AuthGuard";
import Head from "next/head";
import { LoadScript } from "@react-google-maps/api";
import getRuntimeEnv from "@/utils/env";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MyApp = ({ Component, pageProps }: NextAppProps): ReactElement => {
  const getLayout = Component?.layout ?? ((children: JSX.Element) => children);
  const page = getLayout(<Component {...pageProps} />);

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <link rel="icon" href="/images/logo.png" />
        </Head>
        <DefaultSeo {...appHead} />
        <LoadScript googleMapsApiKey={getRuntimeEnv("GOOGLE_MAPS_KEY")}>
          <AuthGuard>{page}</AuthGuard>
        </LoadScript>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
