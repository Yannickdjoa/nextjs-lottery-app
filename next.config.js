/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = {
    images: {
        loader: "custom",
        loaderFile: "./my/image/loader.js",
    },
    nextConfig,
}
