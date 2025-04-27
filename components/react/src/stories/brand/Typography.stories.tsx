import { Meta, StoryObj } from '@storybook/react';

import {
  BlockQuote,
  CodeBlock,
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

const meta: Meta = { title: 'Brand/Typography' };

export default meta;
type Story = StoryObj;

export const H1Story = {
  name: 'H1',
  render: () => <H1>IVAO Aero: As real as it gets</H1>,
  args: {},
} satisfies Story;

export const H2Story = {
  name: 'H2',
  render: () => <H2>IVAO Aero: As real as it gets</H2>,
  args: {},
} satisfies Story;

export const H3Story = {
  name: 'H3',
  render: () => <H3>IVAO Aero: As real as it gets</H3>,
  args: {},
} satisfies Story;

export const H4Story = {
  name: 'H4',
  render: () => <H4>IVAO Aero: As real as it gets</H4>,
  args: {},
} satisfies Story;

export const PStory = {
  name: 'P',
  render: () => <P>IVAO Aero: As real as it gets</P>,
  args: {},
} satisfies Story;

export const BlockQuoteStory = {
  name: 'BlockQuote',
  render: () => <BlockQuote>IVAO Aero: As real as it gets</BlockQuote>,
  args: {},
} satisfies Story;

export const TableStory = {
  name: 'Table',
  render: () => (
    <div className={'my-6 w-full overflow-y-auto'}>
      <table className={'w-full'}>
        <thead>
          <TR className={'m-0 border-t p-0'}>
            <TH
              className={
                'border px-4 py-2 text-left font-bold [&[align=right]]:text-right'
              }
            >
              King&apos;s Treasury
            </TH>
            <TH
              className={
                'border px-4 py-2 text-left font-bold [&[align=right]]:text-right'
              }
            >
              People&apos;s happiness
            </TH>
          </TR>
        </thead>
        <tbody>
          <TR className={'m-0 border-t p-0'}>
            <TD
              className={
                'border px-4 py-2 text-left [&[align=right]]:text-right'
              }
            >
              Empty
            </TD>
            <TD
              className={
                'border px-4 py-2 text-left [&[align=right]]:text-right'
              }
            >
              Overflowing
            </TD>
          </TR>
          <TR className={'m-0 border-t p-0'}>
            <TD
              className={
                'border px-4 py-2 text-left [&[align=right]]:text-right'
              }
            >
              Modest
            </TD>
            <TD
              className={
                'border px-4 py-2 text-left [&[align=right]]:text-right'
              }
            >
              Satisfied
            </TD>
          </TR>
          <TR className={'m-0 border-t p-0'}>
            <TD
              className={
                'border px-4 py-2 text-left [&[align=right]]:text-right'
              }
            >
              Full
            </TD>
            <TD
              className={
                'border px-4 py-2 text-left [&[align=right]]:text-right'
              }
            >
              Ecstatic
            </TD>
          </TR>
        </tbody>
      </table>
    </div>
  ),
  args: {},
} satisfies Story;

export const ListULStory = {
  name: 'List UL',
  render: () => (
    <UL>
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of humor: 15 gold coins</li>
    </UL>
  ),
  args: {},
} satisfies Story;

export const ListOLStory = {
  name: 'List OL',
  render: () => (
    <OL>
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of humor: 15 gold coins</li>
    </OL>
  ),
  args: {},
} satisfies Story;

export const InlineCodeStory = {
  name: 'InlineCode',
  render: () => <InlineCode>IVAO Aero: As real as it gets</InlineCode>,
  args: {},
} satisfies Story;

export const CodeBlockStory = {
  name: 'CodeBlock',
  render: () => (
    <CodeBlock>
      npx create-next-app@latest --typescript --tailwind --experimental-app
      --eslint contentlayer-example aa aaaaa a a a a a a aa a a a a a a a a a a
      a aaaaa a a a a a a aa a a a a a a a a a a a
    </CodeBlock>
  ),
  args: {},
} satisfies Story;

export const LeadStory = {
  name: 'Lead',
  render: () => <Lead>IVAO Aero: As real as it gets</Lead>,
  args: {},
} satisfies Story;

export const LargeStory = {
  name: 'Large',
  render: () => <Large>IVAO Aero: As real as it gets</Large>,
  args: {},
} satisfies Story;

export const SmallStory = {
  name: 'Small',
  render: () => <Small>IVAO Aero: As real as it gets</Small>,
  args: {},
} satisfies Story;

export const SubtleStory = {
  name: 'Subtle',
  render: () => <Subtle>IVAO Aero: As real as it gets</Subtle>,
  args: {},
} satisfies Story;
