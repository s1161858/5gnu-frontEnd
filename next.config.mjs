// next.config.mjs — 必须用 ES Module 语法，不能用 module.exports

const nextConfig = {
  output: 'export',               // 生成静态 HTML 到 out/
  basePath: '/5gnu-frontEnd',     // 👈 注意末尾的逗号（必须有）
  assetPrefix: '/5gnu-frontEnd/', // 👈 注意末尾的逗号（必须有）
  images: {
    unoptimized: true,            // GitHub Pages 不支持 Next.js 图片优化
  },
}

export default nextConfig
