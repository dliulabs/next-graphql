module.exports = {
  //
  graphql: {
    io: {
      enabled: true,
      config: {
        IOServerOptions: {
          cors: { origin: "*", methods: ["*"] },
        },
      },
    },
    config: {
      endpoint: "/graphql",
      cors: { origin: "*", methods: ["*"] },
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
};
