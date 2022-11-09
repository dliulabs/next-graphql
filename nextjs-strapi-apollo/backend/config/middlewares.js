module.exports = ({ env }) => [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "script-src": ["'self'", "'unsafe-inline'", "cdn.jsdelivr.net"],
          "img-src": [
            "'self'",
            "data:",
            "cdn.jsdelivr.net",
            "strapi.io",
            `${env("AWS_BUCKET")}.s3.${env("AWS_REGION")}.amazonaws.com`,
          ],
        },
      },
      settings: {
        cors: {
          enabled: true, // tried true and false
          origin: "*",
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      header: "*",
      origin: ["*"],
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
