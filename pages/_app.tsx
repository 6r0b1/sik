import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";
import { AccentProvider } from "../context/accentColor";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AccentProvider>
            <NextIntlProvider messages={pageProps.messages}>
                <Component {...pageProps} />
            </NextIntlProvider>
        </AccentProvider>
    );
}
