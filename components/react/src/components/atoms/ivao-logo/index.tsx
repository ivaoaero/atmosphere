import { VariantProps } from 'class-variance-authority';

import { IVAOLogoVariants } from './IVAOlogoVariants';
import { HorizontalLogo } from './variants/HorizontalLogo';
import { IconLogo } from './variants/IconLogo';
import { SpinnerLogo } from './variants/SpinnerLogo';

type LogoProps = VariantProps<typeof IVAOLogoVariants> & {
  onlyIcon?: boolean;
  loading?: boolean;
};

export const IVAOLogo = ({
  color,
  size,
  onlyIcon = false,
  loading = false,
}: LogoProps) => {
  if (loading) {
    return <SpinnerLogo color={color} size={size} />;
  }

  if (onlyIcon) {
    return <IconLogo color={color} size={size} />;
  }

  return <HorizontalLogo color={color} size={size} />;
};
IVAOLogo.displayName = 'IVAOLogo';
