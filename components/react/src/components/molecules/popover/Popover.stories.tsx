import { FC } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Button } from '@components/atoms/button';
import { Input } from '@components/atoms/input';
import { Label } from '@components/atoms/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/atoms/popover';

interface PopoverDemoProps {
  width: string;
  maxWidth: string;
  height: string;
  maxHeight: string;
}

const PopoverDemo: FC<PopoverDemoProps> = ({
  width,
  maxWidth,
  height,
  maxHeight,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                value={width}
                className="col-span-2 h-8"
                readOnly
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                value={maxWidth}
                className="col-span-2 h-8"
                readOnly
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                value={height}
                className="col-span-2 h-8"
                readOnly
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                value={maxHeight}
                className="col-span-2 h-8"
                readOnly
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default {
  title: 'Components/PopoverDemo',
  component: PopoverDemo,
  argTypes: {
    width: { control: 'text', defaultValue: '100%' },
    maxWidth: { control: 'text', defaultValue: '300px' },
    height: { control: 'text', defaultValue: '25px' },
    maxHeight: { control: 'text', defaultValue: 'none' },
  },
} as Meta;

const Template: StoryFn<PopoverDemoProps> = (args: PopoverDemoProps) => (
  <PopoverDemo {...args} />
);

export const Default: StoryFn<PopoverDemoProps> = Template.bind({});
Default.args = {
  width: '100%',
  maxWidth: '300px',
  height: '25px',
  maxHeight: 'none',
};
