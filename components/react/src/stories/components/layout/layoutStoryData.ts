import { ExternalLink } from '@components/atoms/external-link';
import { FooterProps } from '@components/molecules/footer';
import { NavigationMenuSectionProps } from '@components/molecules/navigation-menu';

export const navbarSections: NavigationMenuSectionProps[] = [
  { title: 'Careers', href: '#careers' },
  {
    title: 'Courses catalogue',
    links: [
      {
        title: 'Pilot',
        href: '#pilot',
        description: 'Master the skies as a pilot.',
      },
      {
        title: 'Controller',
        href: '#atc',
        description: 'Guide aircraft safely on the ground and in the air.',
      },
    ],
  },
  { title: 'FAQ', href: '#faq' },
];

export const footerSections: FooterProps['sections'] = [
  {
    title: 'IVAO',
    links: [
      { title: 'About us', href: 'https://ivao.aero/', asLink: ExternalLink },
      {
        title: 'Create your account',
        href: 'https://ivao.aero/members/person/register.htm',
        asLink: ExternalLink,
      },
      {
        title: 'Heartbeat',
        href: 'https://heartbeat.ivao.aero/',
        asLink: ExternalLink,
      },
    ],
  },
  {
    title: 'Training',
    links: [
      { title: 'Pilot Career', href: '#pilot' },
      { title: 'Controller Career', href: '#atc' },
      { title: 'Activities', href: '#activities' },
    ],
  },
  {
    title: 'Documentation',
    links: [
      {
        title: 'Training Site',
        href: 'https://wiki.ivao.aero/en/home/training/documentation',
        asLink: ExternalLink,
      },
      {
        title: 'Pilot Career',
        href: 'https://wiki.ivao.aero/en/home/training/documentation',
        asLink: ExternalLink,
      },
      {
        title: 'Controller Career',
        href: 'https://wiki.ivao.aero/en/home/training/documentation',
        asLink: ExternalLink,
      },
    ],
  },
];

export const footerLegalLinks: FooterProps['legalLinks'] = [
  { title: 'Privacy Policy', href: '#privacy-policy' },
  { title: 'Terms of use', href: '#terms-of-use' },
];

export const footerDescription =
  'The Training department is responsible for setting training standards, managing the IVAO rating system, writing theoretical training material, providing practical training and invigilating all exams.';
