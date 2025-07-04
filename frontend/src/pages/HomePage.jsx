import { Button } from "@/components/ui/button";

export function HomePage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to ChillHub</h1>
      <Button>Click me</Button>
    </div>
  );
}
