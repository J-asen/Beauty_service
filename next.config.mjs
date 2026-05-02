/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // This project is JavaScript-only. Skipping build-blocking TS checks
    // avoids Next's worker spawn issue in the current Windows environment.
    ignoreBuildErrors: true,
  },
  experimental: {
    workerThreads: true,
    cpus: 1,
  },
};

export default nextConfig;
