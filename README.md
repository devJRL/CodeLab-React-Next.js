# Modern Server Side Rendering with React & Next.js

## Deploy with [Vercel](https://vercel.com/)

**[https://codelab-react-nextjs.vercel.app](https://codelab-react-nextjs.vercel.app)**

## How to run in localhost?

```bash
# Clone Git Repository
git clone https://github.com/devJRL/CodeLab-React-Next.js.git
cd CodeLab-React-Next.js

# Install node modules
yarn install # or npm install

# Build Next.js modules
yarn next build # or npm next build
```

## Dependencies

- [Node.js](https://nodejs.org/en/)
- [NVM(Node Version Manager)](https://github.com/nvm-sh/nvm#installing-and-updating)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)
- [IDE: Visual Studio Code](https://code.visualstudio.com/Download)

## [Init project](https://nextjs.org/docs/getting-started)

```bash
# init
npx create-next-app {app-name}
  # ..
  # Success! Created tvshow-pro at {Directory}
  # ..

# start
yarn dev
  # Served on 3000 port
  # http://localhost:3000
```

## Dependencies

- [@zeit/next-sass](https://github.com/vercel/next-plugins/tree/master/packages/next-sass)

  ```bash
  # Support Sass
  yarn add @zeit/next-sass node-sass
  ```

- [maticzav/nookies](https://github.com/maticzav/nookies)

  ```bash
  # Support to handle cookie in SSR(next.js)
  yarn add nookie
  ```

  [EditThisCookie - Chrome Extension](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg/related?hl=ko)
