module.exports = {
  apps: [
    {
      name: "pro manager",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
