import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    experimental: {
    // add supported experimental options here if needed
  
  },
    eslint: {
    ignoreDuringBuilds: true,
  },
  images:{
    remotePatterns:[
      {protocol:'https',hostname:'*'}
    ]
  },


};


export default nextConfig;
