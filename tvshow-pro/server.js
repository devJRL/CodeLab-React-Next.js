// Custom Server | https://nextjs.org/docs/advanced-features/custom-server
const express = require("express"); // yarn add express
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const expressServer = express();
  // [ URL-Pattern ] for Render to Next.js by Express.js
  // [ /cast/:personId ]
  expressServer.get("/cast/:personId", (req, res) => {
    const { personId } = req.params;
    return nextApp.render(req, res, "/cast", { personId });
  });
  // [ * etc.. ]
  expressServer.all("*", (req, res) => {
    return nextHandler(req, res);
  });

  expressServer.listen(port, (err) => {
    if (err) throw err;
    console.log(
      "Custom Express.js Server has ready to bridge to Next.js Server"
    );
  });
});
