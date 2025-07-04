import { SignOutButton as ClerkSignOutButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';

export function SignOutButton({ children, variant = "outline", ...props }) {
  return (
    <ClerkSignOutButton {...props}>
      <Button variant={variant}>
        {children || 'Sign Out'}
      </Button>
    </ClerkSignOutButton>
  );
}
