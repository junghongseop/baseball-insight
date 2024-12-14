/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lgcxydabfbch3774324.cdn.ntruss.com',
        pathname: '/**', // 모든 경로를 허용
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**', // 이전의 placeholder 호스트도 허용
      },
    ],
  },
};

export default nextConfig;
