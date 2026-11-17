import type { Meta, StoryObj } from '@storybook/react-vite';

import { PageContainer } from '@components/atoms/page';
import { H1, Lead, P } from '@components/atoms/typography';
import { Footer } from '@components/molecules/footer';
import { Page } from '@components/molecules/page';
import { PageNavbar } from '@components/molecules/page-navbar';

import {
  footerDescription,
  footerLegalLinks,
  footerSections,
  navbarSections,
} from './layoutStoryData';
import { PageNavbarActions } from './PageNavbarActions';

const meta = {
  title: 'Layout/Page',
  component: Page,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Wraps the main content of a page with the common page spacing. Use `PageContainer` for full-bleed sections whose content must stay aligned with the page.',
      },
    },
  },
  args: {
    children: (
      <>
        <H1>Page title</H1>
        <Lead>Every page shares the same gutters and vertical spacing.</Lead>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </P>
      </>
    ),
  },
  argTypes: {
    children: { control: false },
    navbarOffset: {
      control: 'boolean',
      description:
        'Adds top spacing for a `fixed` PageNavbar so the content starts below it.',
    },
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const WithFixedNavbar = {
  args: { navbarOffset: true },
  render: (args) => (
    <div className="flex min-h-screen flex-col">
      <PageNavbar
        className="fixed"
        appName="Training"
        sections={navbarSections}
        actions={<PageNavbarActions />}
      />
      <Page {...args} />
    </div>
  ),
} satisfies Story;

export const FullLayout = {
  render: (args) => (
    <div className="flex min-h-screen flex-col">
      <PageNavbar
        appName="Training"
        sections={navbarSections}
        actions={<PageNavbarActions />}
      />
      <Page {...args} />
      <section className="bg-atmos-700 dark:bg-fuselage-900 py-12">
        <PageContainer>
          <P className="text-white">
            Full-bleed section aligned with the page through `PageContainer`.
          </P>
        </PageContainer>
      </section>
      <Footer
        title="Training"
        description={footerDescription}
        sections={footerSections}
        legalLinks={footerLegalLinks}
      />
    </div>
  ),
} satisfies Story;
