// setupTests.js
const { server, rest } = require("@msw/client");

server.listen();

module.exports = async () => {
  await global.fetch.extend({
    method: "GET",
    handler: (request) => {
      const { url } = request;
      return rest.get(url);
    },
  });
};
