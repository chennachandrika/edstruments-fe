# Vite + React Authentication & Invoice Submission App App

- A Vite + React application with authentication, protected routes, form validation, and invoice submission functionality.

# Features

- React Router - Routing with protected pages
- AuthContext, InvoiceContext - Manage authentication state, Invoice state
- LocalStorage - Persist user session and Invoice details
- PrivateRoute - Redirect unauthorized users
- Formik + Yup - Validated login form and Invoice creation form
- Tailwind CSS - Responsive and modern UI

## Steps followed in development

- Create a Vite+React application
- Configure the React Router (react-router-dom)
- Configure Tailwind CSS for styling
- Route setup for login and home and fallback route
- Created validated Login Form with Formik and Yup
- Created Sample Home page with logout button
- Implemented AuthContext for handling the userSession on login/signout with LocalStorage
- Configure PrivateRoute for Auto-login
- Created validated Invoice Form with Formik and Yup
- Persistent values for the invoice fields using localStorage
- OnSubmit preview the pdf using react-pdf and render the invoice values

## Hosted on netlify
- https://edstruments-fe-chandrika.netlify.app/
- https://67b690ce6d393e2c55e5863c--edstruments-fe-chandrika.netlify.app/

## Quick Setup

`git clone https://github.com/chennachandrika/edstruments-fe.git
cd vite-react-auth`

## Install Dependencies

`npm install
`

## Run the Development Server

`npm run dev
`

- Open http://localhost:5173 in your browser.
