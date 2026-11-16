import type { Meta, StoryObj } from '@storybook/react-vite';

import { Footer } from '@components/molecules/footer';

import { FooterDepartmentSwitcher } from './FooterDepartmentSwitcher';
import {
  footerDescription,
  footerLegalLinks,
  footerSections,
} from './layoutStoryData';

const meta = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: {
    title: 'Training',
    description: footerDescription,
    sections: footerSections,
    legalLinks: footerLegalLinks,
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    copyright: { control: 'text' },
    socialLinks: { control: false },
    asLink: { control: false },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const WithDepartmentSwitcher = {
  args: { title: <FooterDepartmentSwitcher /> },
} satisfies Story;

export const Minimal = {
  args: {
    title: undefined,
    description: undefined,
    sections: [],
    legalLinks: [],
    socialLinks: [],
  },
} satisfies Story;
