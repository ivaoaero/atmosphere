import { LogOut, ShieldCheck, User } from 'lucide-react';

import { Button } from '@components/atoms/button';
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@components/atoms/dropdown-menu';
import { TooltipProvider } from '@components/atoms/tooltip';
import { DarkModeToggle } from '@components/molecules/dark-mode-toggle';
import { UserMenu } from '@components/molecules/user-menu';

import { ThemeProvider } from 'src/lib/contexts/ThemeProvider';

interface PageNavbarActionsProps {
  name?: string;
  vid?: number;
  isStaff?: boolean;
}

export const PageNavbarActions = ({
  name = 'Felipe Lobo',
  vid = 379491,
  isStaff = true,
}: PageNavbarActionsProps) => (
  <ThemeProvider>
    <TooltipProvider>
      <DarkModeToggle buttonVariant="ghost" side="bottom" />
      <UserMenu name={name} vid={vid}>
        <DropdownMenuItem className="gap-2">
          <User className="size-4" />
          Profile
        </DropdownMenuItem>
        {isStaff && (
          <DropdownMenuItem className="gap-2">
            <ShieldCheck className="size-4" />
            Staff Area
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2">
          <LogOut className="size-4" />
          Log out
        </DropdownMenuItem>
      </UserMenu>
    </TooltipProvider>
  </ThemeProvider>
);

export const PageNavbarGuestActions = () => (
  <ThemeProvider>
    <TooltipProvider>
      <DarkModeToggle buttonVariant="ghost" side="bottom" />
      <Button variant="primary">Log in</Button>
    </TooltipProvider>
  </ThemeProvider>
);
