import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static export to GitHub Pages
  images: { unoptimized: true }, // Required for static exports
};


export default nextConfig;
