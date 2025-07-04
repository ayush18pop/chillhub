import { SignOutButton } from '@/components/auth';

export function ExamplePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Protected Example Page</h1>
      <p className="text-lg mb-8">You are viewing a protected page!</p>
      <SignOutButton />
    </div>
  );
}
