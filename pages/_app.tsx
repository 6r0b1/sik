import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";
import { useEffect } from "react";

import { setAccentColor } from "@/lib/ui/setAccentColor";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        setAccentColor();
    }, []);

    return (
        <NextIntlProvider messages={pageProps.messages}>
            <Component {...pageProps} />
        </NextIntlProvider>
    );
}
