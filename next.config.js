/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingExcludes: {
    '*': [
      './node_modules/sharp/**/*',
      './compress-images.mjs',
    ],
  },
}

module.exports = nextConfig
