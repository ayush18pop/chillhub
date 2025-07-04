import { SignInButton, SignUpButton } from '@clerk/clerk-react';

export function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <SignInButton />
      <SignUpButton />
    </div>
  );
}
