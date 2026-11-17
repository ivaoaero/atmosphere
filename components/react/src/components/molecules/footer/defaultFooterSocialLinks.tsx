import { ReactNode } from 'react';

import {
  SiDiscord,
  SiInstagram,
  SiX,
  SiYoutube,
} from '@icons-pack/react-simple-icons';

export interface FooterSocialLinkProps {
  href: string;
  title: string;
  icon: ReactNode;
}

export const defaultFooterSocialLinks: FooterSocialLinkProps[] = [
  {
    href: 'https://family.ivao.aero/',
    title: 'Join us on Discord',
    icon: <SiDiscord size={16} />,
  },
  {
    href: 'https://x.com/ivaoaero',
    title: 'Follow us on X',
    icon: <SiX size={12} />,
  },
  {
    href: 'https://www.youtube.com/c/ivaoaero',
    title: 'Watch us on YouTube',
    icon: <SiYoutube size={16} />,
  },
  {
    href: 'https://www.instagram.com/ivaoaero/',
    title: 'Follow us on Instagram',
    icon: <SiInstagram size={16} />,
  },
];
