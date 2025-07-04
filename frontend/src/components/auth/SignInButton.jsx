import { SignInButton as ClerkSignInButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';

export function SignInButton({ children, ...props }) {
  return (
    <ClerkSignInButton mode="modal" {...props}>
      <Button className="w-full" size="lg">
        {children || 'Sign In'}
      </Button>
    </ClerkSignInButton>
  );
}
