/** @type {import('next').NextConfig} */
const nextConfig = {
  // AWS Amplify Console へ静的サイトとして書き出す（出力先: out/）
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
