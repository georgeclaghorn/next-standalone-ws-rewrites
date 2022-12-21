/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: "standalone",

  rewrites: async () => [
    {
      source: "/ws",
      destination: "https://ws.postman-echo.com/raw"
    }
  ]
}
