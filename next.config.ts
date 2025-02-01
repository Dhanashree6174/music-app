import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    domains: ['images.unsplash.com', 'res.cloudinary.com']
  } // configuring the images --> add hostname in domains array
};

export default nextConfig;
