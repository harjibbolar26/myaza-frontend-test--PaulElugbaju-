This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Information

Thsi project follows the exact design guide as given in the figma for the purpose of the test assessment

### Login

To Login, enter a valid email and password of at least 8 characters. 

Validations were made for the login input fields so anything short of the standard stated above will not login and will throw an error. 

Successful login will take you to the dashboard page which will be visible via the metadata

### Dashboard

The dashboard consists of 5 pages as implemented in the design but only the dashboard homepage and wallet page have contents, as implmented in the design. Other pages however will only show the title of the dashboard route.

Reusable components such as Search, Inputs and Buttons were adopted to ensure clean code. Code was also broken down into components to ensure easy readability. Best optimizations were also adopted to ensure seamless page loadings 

### Testing

Jest was used to test for the entry pages such as Login page, Dashboard page and Wallet page.

Enter the command below in your terminal to run the test

```bash
npm test
```
