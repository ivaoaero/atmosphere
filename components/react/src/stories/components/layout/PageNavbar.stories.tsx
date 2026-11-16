import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@components/atoms/button';
import { PageNavbar } from '@components/molecules/page-navbar';

import { navbarSections } from './layoutStoryData';

const actions = (
  <>
    <Button variant="outline" size="sm">
      Log In
    </Button>
    <Button size="sm">Sign up</Button>
  </>
);

const meta = {
  title: 'Layout/PageNavbar',
  component: PageNavbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Navbar for public and marketing pages. Shares its horizontal spacing with `Page` and `Footer`. For application headers use `Navbar`.',
      },
    },
  },
  args: {
    sections: navbarSections,
    actions,
  },
  argTypes: {
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

export const ForcedDarkMode = {
  args: { darkMode: true },
  decorators: [
    (Story) => (
      <div className="bg-fuselage-950 min-h-80">
        <Story />
      </div>
    ),
  ],
} satisfies Story;

export const LogoOnly = {
  args: { sections: [], actions: undefined },
} satisfies Story;
