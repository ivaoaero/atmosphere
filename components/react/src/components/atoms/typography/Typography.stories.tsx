import { Meta, StoryObj } from '@storybook/react';

import { BlockQuote } from '@components/atoms/typography/BlockQuote';
import { H1 } from '@components/atoms/typography/H1';
import { H2 } from '@components/atoms/typography/H2';
import { H3 } from '@components/atoms/typography/H3';
import { H4 } from '@components/atoms/typography/H4';
import { InlineCode } from '@components/atoms/typography/InlineCode';
import { Large } from '@components/atoms/typography/Large';
import { Lead } from '@components/atoms/typography/Lead';
import { OL } from '@components/atoms/typography/OL';
import { P } from '@components/atoms/typography/P';
import { Small } from '@components/atoms/typography/Small';
import { Subtle } from '@components/atoms/typography/Subtle';
import { TD } from '@components/atoms/typography/TD';
import { TH } from '@components/atoms/typography/TH';
import { TR } from '@components/atoms/typography/TR';
import { UL } from '@components/atoms/typography/UL';

const meta: Meta = {
  title: 'Theme/Typography',
  // TODO: Fix
  // tags: ["autodocs"],
  argTypes: {},
};
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
