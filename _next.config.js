// next.config.js
module.exports = {
  webpack: (config, { dev, isServer }) => {
    // Add support for TypeScript
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true, // Speeds up TypeScript compilation
          },
        },
      ],
    });

    // Optimize build speeds for production
    if (!dev) {
      // Add optimizations here
    }

    return config;
  },
};

