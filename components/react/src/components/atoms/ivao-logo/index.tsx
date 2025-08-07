import { VariantProps } from 'class-variance-authority';

import { IVAOLogoVariants } from './IVAOlogoVariants';
import { HorizontalLogo } from './variants/HorizontalLogo';
import { IconLogo } from './variants/IconLogo';

type LogoProps = VariantProps<typeof IVAOLogoVariants> & {
  onlyIcon?: boolean;
};

export const IVAOLogo = ({ color, size, onlyIcon = false }: LogoProps) => {
  if (onlyIcon) {
    return <IconLogo color={color} size={size} />;
  }

  return <HorizontalLogo color={color} size={size} />;
};
IVAOLogo.displayName = 'IVAOLogo';
