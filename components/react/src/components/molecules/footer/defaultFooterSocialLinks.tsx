import { ReactNode } from 'react';

import {
  DiscordIcon,
  InstagramIcon,
  XIcon,
  YouTubeIcon,
} from '@components/atoms/footer';

export interface FooterSocialLinkProps {
  href: string;
  title: string;
  icon: ReactNode;
}

export const defaultFooterSocialLinks: FooterSocialLinkProps[] = [
  {
    href: 'https://family.ivao.aero/',
    title: 'Join us on Discord',
    icon: <DiscordIcon />,
  },
  {
    href: 'https://x.com/ivaoaero',
    title: 'Follow us on X',
    icon: <XIcon />,
  },
  {
    href: 'https://www.youtube.com/c/ivaoaero',
    title: 'Watch us on YouTube',
    icon: <YouTubeIcon />,
  },
  {
    href: 'https://www.instagram.com/ivaoaero/',
    title: 'Follow us on Instagram',
    icon: <InstagramIcon />,
  },
];
