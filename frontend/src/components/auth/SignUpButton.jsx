import { SignUpButton as ClerkSignUpButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';

export function SignUpButton({ children, variant = "outline", ...props }) {
  return (
    <ClerkSignUpButton mode="modal" {...props}>
      <Button variant={variant} className="w-full" size="lg">
        {children || 'Create Account'}
      </Button>
    </ClerkSignUpButton>
  );
}
