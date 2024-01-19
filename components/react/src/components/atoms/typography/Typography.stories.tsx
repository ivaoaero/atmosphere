import { Meta, StoryObj } from '@storybook/react';

import {
  BlockQuote,
  H1,
  H2,
  H3,
  H4,
  InlineCode,
  Large,
  Lead,
  OL,
  P,
  Small,
  Subtle,
  TD,
  TH,
  TR,
  UL,
} from '@components/atoms/typography';
import { CodeBlock } from '@components/molecules/typography';

const meta: Meta = { title: 'Theme/Typography' };

export default meta;
type Story = StoryObj;

export const H1Story: Story = {
  name: 'H1',
  render: () => <H1>IVAO Aero: As real as it gets</H1>,
  args: {},
};

export const H2Story: Story = {
  name: 'H2',
  render: () => <H2>IVAO Aero: As real as it gets</H2>,
  args: {},
};

export const H3Story: Story = {
  name: 'H3',
  render: () => <H3>IVAO Aero: As real as it gets</H3>,
  args: {},
};

export const H4Story: Story = {
  name: 'H4',
  render: () => <H4>IVAO Aero: As real as it gets</H4>,
  args: {},
};

export const PStory: Story = {
  name: 'P',
  render: () => <P>IVAO Aero: As real as it gets</P>,
  args: {},
};

export const BlockQuoteStory: Story = {
  name: 'BlockQuote',
  render: () => <BlockQuote>IVAO Aero: As real as it gets</BlockQuote>,
  args: {},
};

export const TableStory: Story = {
  name: 'Table',
  render: () => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <TR className="m-0 border-t p-0">
            <TH className="border px-4 py-2 text-left font-bold [&[align=right]]:text-right">
              King&apos;s Treasury
            </TH>
            <TH className="border px-4 py-2 text-left font-bold [&[align=right]]:text-right">
              People&apos;s happiness
            </TH>
          </TR>
        </thead>
        <tbody>
          <TR className="m-0 border-t p-0">
            <TD className="border px-4 py-2 text-left [&[align=right]]:text-right">
              Empty
            </TD>
            <TD className="border px-4 py-2 text-left [&[align=right]]:text-right">
              Overflowing
            </TD>
          </TR>
          <TR className="m-0 border-t p-0">
            <TD className="border px-4 py-2 text-left [&[align=right]]:text-right">
              Modest
            </TD>
            <TD className="border px-4 py-2 text-left [&[align=right]]:text-right">
              Satisfied
            </TD>
          </TR>
          <TR className="m-0 border-t p-0">
            <TD className="border px-4 py-2 text-left [&[align=right]]:text-right">
              Full
            </TD>
            <TD className="border px-4 py-2 text-left [&[align=right]]:text-right">
              Ecstatic
            </TD>
          </TR>
        </tbody>
      </table>
    </div>
  ),
  args: {},
};

export const ListULStory: Story = {
  name: 'List UL',
  render: () => (
    <UL>
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of humor: 15 gold coins</li>
    </UL>
  ),
  args: {},
};

export const ListOLStory: Story = {
  name: 'List OL',
  render: () => (
    <OL>
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of humor: 15 gold coins</li>
    </OL>
  ),
  args: {},
};

export const InlineCodeStory: Story = {
  name: 'InlineCode',
  render: () => <InlineCode>IVAO Aero: As real as it gets</InlineCode>,
  args: {},
};

export const CodeBlockStory: Story = {
  name: 'CodeBlock',
  render: () => (
    <CodeBlock>
      npx create-next-app@latest --typescript --tailwind --experimental-app
      --eslint contentlayer-example aa aaaaa a a a a a a aa a a a a a a a a a a
      a aaaaa a a a a a a aa a a a a a a a a a a a
    </CodeBlock>
  ),
  args: {},
};

export const LeadStory: Story = {
  name: 'Lead',
  render: () => <Lead>IVAO Aero: As real as it gets</Lead>,
  args: {},
};

export const LargeStory: Story = {
  name: 'Large',
  render: () => <Large>IVAO Aero: As real as it gets</Large>,
  args: {},
};

export const SmallStory: Story = {
  name: 'Small',
  render: () => <Small>IVAO Aero: As real as it gets</Small>,
  args: {},
};

export const SubtleStory: Story = {
  name: 'Subtle',
  render: () => <Subtle>IVAO Aero: As real as it gets</Subtle>,
  args: {},
};
