# ChillHub Frontend

A React (Vite) application with Clerk authentication integration.

## Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the frontend directory with:

   ```
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   ```

3. **Get your Clerk publishable key:**

   - Sign up at [clerk.com](https://clerk.com)
   - Create a new application
   - Copy your publishable key from the dashboard
   - Replace `your_clerk_publishable_key_here` in `.env.local`

4. **Run the development server:**
   ```bash
   npm run dev
   ```

## Features

- ✅ Clerk authentication with React SDK
- ✅ Sign in/Sign up buttons with modal mode
- ✅ User button for signed-in users
- ✅ Protected dashboard content
- ✅ Responsive design with glassmorphism UI

## Clerk Components Used

- `<ClerkProvider>` - Wraps the entire app
- `<SignedIn>` - Shows content only to authenticated users
- `<SignedOut>` - Shows content only to unauthenticated users
- `<SignInButton>` - Pre-built sign-in button
- `<SignUpButton>` - Pre-built sign-up button
- `<UserButton>` - User profile and sign-out button

## Environment Variables

- `VITE_CLERK_PUBLISHABLE_KEY` - Your Clerk publishable key (required)

## Development

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
```
