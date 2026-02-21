// next.config.mjs — 必须用 ES Module 语法，不能用 module.exports
const repo = '5gnu-Second-frontEnd' // ← 替换这里

const nextConfig = {
  output: 'export',           // 生成静态 HTML 到 out/
  basePath: `/${repo}`,       // GitHub Pages 子路径
  assetPrefix: `/${repo}/`,   // 静态资源前缀
  images: {
    unoptimized: true,        // GitHub Pages 不支持 Next.js 图片优化
  },
}

export default nextConfig

