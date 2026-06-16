import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://lh3.googleusercontent.com/a/ACg8ocLN_gXw7rVZhs8vt_msH6Suj6Qy1uD5SATSN-EDocwEpxAwdUm1=s96-c'),
    ],
  },

};

export default nextConfig;
