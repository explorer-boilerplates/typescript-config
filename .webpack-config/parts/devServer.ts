type DevServer = {
  host?: string;
  port?: number;
};

export default (
  { host, port }: DevServer = {
    host: process.env.HOST,
    port: Number(process.env.PORT)
  }
) => ({
  devServer: {
    // Display only errors to reduce the amount of output.
    stats: "errors-only",

    // Parse host and port from env to allow customization.
    //
    // If you use Docker, Vagrant or Cloud9, set
    // host: "0.0.0.0";
    //
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host,
    port,
    overlay: false,
    hot: true,
    open: true // Open the page in browser
  }
});
