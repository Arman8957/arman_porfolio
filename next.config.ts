// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'assets.aceternity.com',
//         pathname: '**', 
//       },
//       {
//         protocol: 'https',
//         hostname: 'pbs.twimg.com', 
//         pathname: '**',
//       },
//     ],
//   },
// };

// module.exports = nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//     images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'pbs.twimg.com',
//         pathname: '**', 
//       },
//       {
//         protocol: 'https',
//         hostname: 'assets.aceternity.com',
//         pathname: '**', 
//       },
//     ],
//   },
  /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  output: 'standalone', 
  images: {
    remotePatterns: [
      {
        protocol: 'https', 
        hostname: 'pbs.twimg.com', 
        pathname: '**',
      },
      {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
                pathname: '**', 
      },
    ],
  },

};


// module.exports = nextConfig;


  // images: {
  //   domains: ['pbs.twimg.com', 'assets.aceternity.com'], // Add external image domains here
  // },
// };
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'pbs.twimg.com',
//         pathname: '**', 
//       },
//       {
//         protocol: 'https',
//         hostname: 'assets.aceternity.com',
//         pathname: '**', 
//       },
//     ],
//   },

// };

// export default nextConfig;

// // images: {
// //   remotePatterns: [
// //     {
// //       protocol: 'https',
// //       hostname: 'example.com',
// //     },
// //     {
// //       protocol: 'https',
// //       hostname: 'cdn.example.com',
// //     },
// //   ],