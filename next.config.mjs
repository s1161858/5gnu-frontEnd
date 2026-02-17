/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/5gnu-frontEnd',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
