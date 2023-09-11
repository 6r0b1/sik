/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ["de_DE", "en_GB"],
        defaultLocale: "de_DE",
    },
    images: {
        domains: ["images.ctfassets.net"],
    },
};

module.exports = nextConfig;
