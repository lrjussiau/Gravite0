module.exports = {
  apps: [{
    name: "nextjs-app",
    script: "npm",
    args: "start",
    env: {
      NODE_ENV: "production",
      PORT: 4000,
      HOST: '0.0.0.0'
    }
  }]
};
