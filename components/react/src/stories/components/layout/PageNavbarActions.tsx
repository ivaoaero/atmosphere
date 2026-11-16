import { Button } from '@components/atoms/button';
import { TooltipProvider } from '@components/atoms/tooltip';
import { DarkModeToggle } from '@components/molecules/dark-mode-toggle';

import { ThemeProvider } from 'src/lib/contexts/ThemeProvider';

export const PageNavbarActions = () => (
  <ThemeProvider>
    <TooltipProvider>
      <Button variant="link" className="border-none">
        Staff Area
      </Button>
      <DarkModeToggle buttonVariant="outline" side="bottom" />
      <Button variant="outline">Juan Felipe (379491)</Button>
    </TooltipProvider>
  </ThemeProvider>
);

export const PageNavbarGuestActions = () => (
  <Button variant="primary">Log in</Button>
);
