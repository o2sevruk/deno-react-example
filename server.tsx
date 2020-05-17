import React from 'https://dev.jspm.io/react';
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';

import App from './src/App.jsx';

import { Application } from 'https://deno.land/x/oak/mod.ts';

const server = new Application();

server.use(async (ctx) => {
    ctx.request.body({
        contentTypes: {
            text: ['application/javascript']
        }
    });
    ctx.response.body = `
      <!DOCTYPE html>
      <html lang="en">
        <body>
          ${ReactDOMServer.renderToString(<App />)}
        </body>
      </html>
    `;
});

await server.listen({ port: 8000 });