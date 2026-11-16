import { ComponentType, ReactNode } from 'react';

import { ChevronDown } from 'lucide-react';

import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@components/atoms/dropdown-menu';

import { cn } from '@utils/styles';

export interface UserMenuProps {
  name: string;
  vid?: string | number;
  avatarUrl?: string;
  children?: ReactNode;
  showDetails?: boolean;
  className?: string;
}

const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

const UserAvatar = ({
  name,
  avatarUrl,
}: Pick<UserMenuProps, 'name' | 'avatarUrl'>) => (
  <span className="bg-atmos-100 text-atmos-700 dark:bg-fuselage-700 dark:text-fuselage-50 flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full text-xs font-semibold ring-1 ring-black/5 ring-inset dark:ring-white/10">
    {avatarUrl ? (
      <img src={avatarUrl} alt="" className="size-full object-cover" />
    ) : (
      getInitials(name)
    )}
  </span>
);

const UserDetails = ({
  name,
  vid,
  className,
}: Pick<UserMenuProps, 'name' | 'vid' | 'className'>) => (
  <span className={cn('min-w-0 flex-col text-left', className)}>
    <span className="text-fuselage-800 dark:text-fuselage-50 truncate text-sm leading-tight font-medium">
      {name}
    </span>
    {vid !== undefined && (
      <span className="text-fuselage-500 dark:text-fuselage-300 text-xs leading-tight tabular-nums">
        VID {vid}
      </span>
    )}
  </span>
);

export const UserMenu: ComponentType<UserMenuProps> = ({
  name,
  vid,
  avatarUrl,
  children,
  showDetails = true,
  className,
}) => (
  <DropdownMenuRoot>
    <DropdownMenuTrigger
      aria-label={`Account menu for ${name}`}
      className={cn(
        'group flex max-w-56 min-w-0 items-center gap-2.5 rounded-full p-1 transition-[background-color,transform] duration-150 ease-out outline-none active:scale-[0.97]',
        'hover:bg-fuselage-100 data-[state=open]:bg-fuselage-100 dark:hover:bg-white/10 dark:data-[state=open]:bg-white/10',
        'focus-visible:ring-atmos-500 dark:focus-visible:ring-fuselage-300 focus-visible:ring-2',
        showDetails && 'md:pr-3',
        className,
      )}
    >
      <UserAvatar name={name} avatarUrl={avatarUrl} />
      {showDetails && (
        <>
          <UserDetails name={name} vid={vid} className="hidden md:flex" />
          <ChevronDown
            aria-hidden="true"
            className="text-fuselage-500 dark:text-fuselage-300 hidden size-4 shrink-0 transition-transform duration-200 ease-out group-data-[state=open]:rotate-180 md:block"
          />
        </>
      )}
    </DropdownMenuTrigger>

    <DropdownMenuContent
      align="end"
      sideOffset={8}
      className="w-64 origin-(--radix-dropdown-menu-content-transform-origin)"
    >
      <DropdownMenuLabel className="flex items-center gap-3 px-2 py-2 font-normal">
        <UserAvatar name={name} avatarUrl={avatarUrl} />
        <UserDetails name={name} vid={vid} className="flex" />
      </DropdownMenuLabel>
      {children && (
        <>
          <DropdownMenuSeparator />
          {children}
        </>
      )}
    </DropdownMenuContent>
  </DropdownMenuRoot>
);
UserMenu.displayName = 'UserMenu';
