import type { Meta, StoryObj } from '@storybook/react-vite';

import { PageNavbar } from '@components/molecules/page-navbar';

import { navbarSections } from './layoutStoryData';
import { PageNavbarActions, PageNavbarGuestActions } from './PageNavbarActions';

const meta = {
  title: 'Layout/PageNavbar',
  component: PageNavbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Floating navbar for public and marketing pages. For application headers use `Navbar`. It is `sticky` by default; pass `className="fixed"` to overlay it on top of a hero.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="from-ocean-300 to-fuselage-200 dark:from-fuselage-700 dark:to-fuselage-950 min-h-80 bg-linear-to-b">
        <Story />
      </div>
    ),
  ],
  args: {
    appName: 'Training',
    sections: navbarSections,
    actions: <PageNavbarActions />,
  },
  argTypes: {
    appName: { control: 'text' },
    collapseBelow: {
      control: 'select',
      options: ['md', 'lg', 'xl'],
      description:
        'Below this breakpoint the sections move into a side menu opened from a menu button.',
    },
    darkMode: {
      control: 'boolean',
      description:
        'Forces the dark variant, for better contrast over dark backgrounds or images.',
    },
    actions: { control: false },
    asLink: { control: false },
  },
} satisfies Meta<typeof PageNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Guest = {
  args: { actions: <PageNavbarGuestActions /> },
} satisfies Story;

export const WithoutAppName = {
  args: { appName: undefined },
} satisfies Story;

export const ForcedDarkMode = {
  args: { darkMode: true },
} satisfies Story;

export const LongContent = {
  args: {
    appName: 'Flight Operations Department',
    actions: (
      <PageNavbarActions name="Maximiliano Alejandro de la Fuente Rodríguez" />
    ),
  },
} satisfies Story;

export const LogoOnly = {
  args: { appName: undefined, sections: [], actions: undefined },
} satisfies Story;
