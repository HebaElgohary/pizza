// prisma.config.ts
const config = {
  url: process.env.DATABASE_URL,
  provider  : "postgresql",

  directUrl : process.env.DIRECT_URL

  // other configuration options
};

module.exports = config;