import { ComponentType } from 'react';

import { sidebarIconVariants } from '@components/atoms/sidebar/sidebarIconVariants.ts';

import { cn } from '@utils/styles.ts';

interface SidebarIconProps {
  className?: string;
  isActive?: boolean;
  Icon: ComponentType;
}

export const SidebarIcon: ComponentType<SidebarIconProps> = ({
  className,
  isActive,
  Icon,
}) => (
  <div className={cn(sidebarIconVariants({ isActive }), className)}>
    <Icon />
  </div>
);
