/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'imgix',
    path: '', // 또는 CDN 경로
    unoptimized: true,
  },
}

module.exports = nextConfig
