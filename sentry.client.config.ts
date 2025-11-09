import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://a221e02dd37b4cde002a654bc09b2a39@o4510334692950016.ingest.de.sentry.io/4510334696030288",

  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "dark",
      autoInject: true,
    }),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
