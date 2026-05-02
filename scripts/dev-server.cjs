const { loadEnvConfig } = require("@next/env");
const { startServer } = require("next/dist/server/lib/start-server");

const dir = process.cwd();
const args = process.argv.slice(2);

function readFlag(name, fallback) {
  const index = args.indexOf(name);
  if (index >= 0 && args[index + 1]) {
    return args[index + 1];
  }
  return fallback;
}

const hostname = readFlag("--hostname", process.env.HOSTNAME || "127.0.0.1");
const port = Number(readFlag("--port", process.env.PORT || "3000"));

loadEnvConfig(dir);
process.env.__NEXT_DEV_SERVER = "1";
process.env.NEXT_PRIVATE_WORKER = "0";

startServer({
  dir,
  port,
  allowRetry: false,
  isDev: true,
  hostname,
  serverFastRefresh: true,
})
  .then(() => {
    setInterval(() => {}, 2147483647);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
