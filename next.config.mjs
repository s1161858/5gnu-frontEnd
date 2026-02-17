/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 必须：告诉 Next.js 导出静态 HTML
  basePath: '/5gnu-frontEnd', // 必须：你的仓库名作为子路径
  images: {
    unoptimized: true, // 必须：GitHub Pages 不支持 Next.js 的图片优化
  },
  // 可选：确保尾部斜杠，避免刷新 404
  trailingSlash: true,
};

module.exports = nextConfig;
