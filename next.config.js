const nextConfig = {
  reactStrictMode: true,
  output: 'export',
 typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a6c61391m3.ufs.sh',
      },
    ],
    unoptimized: true, // static export için ŞART
  },
}

module.exports = nextConfig
