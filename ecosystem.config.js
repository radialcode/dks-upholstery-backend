module.exports = {
  apps: [
    {
      name: "dks-strapi",
      script: "yarn",
      args: "start",
      interpreter: "node",
      env_file: '.env',
      env: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: 3800,
        APP_KEYS: "kzmSWIRdto0nDW0qCuPE9Q==,vMiPMccaj8CXLtVtolhwmw==,gDf8jPc7wmCj9UyHICZsrg==,0W3s+liBzHsjObimolKNJQ==",
        API_TOKEN_SALT: "+FFcCdo8k9Dev/hhI2Ep/A==",
        ADMIN_JWT_SECRET: "ETQUxeA0ihj4v47SwoitOQ==",
        JWT_SECRET: "S/VVGONN2OurLTiVMNjztA==",
      },
    },
  ],
};
