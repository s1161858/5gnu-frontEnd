
export default nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  basePath: '/5gnu-frontEnd',  // 你的仓库名
  images: {
    unoptimized: true  // GitHub Pages 不支持图片优化
  }
}

module.exports = nextConfig

