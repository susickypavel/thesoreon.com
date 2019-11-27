![thumbnail](https://repository-images.githubusercontent.com/217618305/556e7b00-f904-11e9-9758-c6775d26f742)

<div>
  <h1 align="center">thesoreon.com</h1>
</div>
<p align="center">
  <a href="https://github.com/Thesoreon/thesoreon.com/actions">
    <img src="https://github.com/Thesoreon/thesoreon.com/workflows/CI/badge.svg" alt="Actions Status" />
  </a>
  <a href="https://david-dm.org/Thesoreon/thesoreon.com">
    <img src="https://david-dm.org/Thesoreon/thesoreon.com.svg" alt="Dependencies Status" />
  </a>
  <a href="https://app.netlify.com/sites/theso/deploys">
    <img src="https://api.netlify.com/api/v1/badges/9b1675f4-b104-4e5c-a56f-3e1c0f0fee91/deploy-status" alt="Netlify Status" />
  </a>
</p>

This project is based on this repository: **[Thesoreon/blog-using-gatsby](https://github.com/Thesoreon/blog-using-gatsby)**.

## How to run this repo

**1. Clone this repository**

```sh
git clone https://github.com/Thesoreon/thesoreon.com.git
cd thesoreon.com
```

**2. Install dependencies**

```sh
yarn install
```

**3. Start development server**

```sh
yarn start
# or
yarn start:network
```

**4. Run tests**

```sh
yarn test:watch
```

## Technology stack

### Application

- React.js
- Gatsby.js
- Typescript
- MDX (Markdown enhanced by JSX)
- React icons
  - Using icons from **Font Awesome**

### Code climate

- Prettier
- Eslint
- Jest and React Testing Library
- Cypress

Repository is using Github Actions for CI/CD stuff and Netlify for hosting.
