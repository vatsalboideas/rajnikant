import type { NextConfig } from 'next';
import path from 'path';
const __dirname = path.resolve();

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    // implementation: 'sass-embedded',
    includePaths: [path.join(__dirname, 'styles')],
  },
};

export default nextConfig;