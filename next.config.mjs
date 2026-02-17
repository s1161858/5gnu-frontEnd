/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/5gnu-frontEnd',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig; // 注意这里变成了 export default
