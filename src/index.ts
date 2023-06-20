console.log("Hello via Bun!");

import contents from "./file.txt";

console.log(contents);

Bun.serve({
  port: 8080, // defaults to $PORT, then 3000
  fetch(req) {
    return new Response(`404!`);
  },
});
