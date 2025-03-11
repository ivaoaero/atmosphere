import { Meta, StoryObj } from '@storybook/react/*';

import { Button } from '@components/atoms/button';
import { TooltipProvider } from '@components/atoms/tooltip';
import { Sheet } from '@components/molecules/sheet';
import { Tooltip } from '@components/molecules/tooltip';

const meta = {
  title: 'Components/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story:
          'Use the `Sheet` for displaying short information or short forms.',
      },
    },
  },
  argTypes: {
    side: {
      type: 'string',
      control: {
        type: 'select',
      },
      description: 'Side of the screen to open the sheet',
      options: ['left', 'right', 'top', 'bottom'],
      table: {
        type: {
          summary: 'right | left | top | bottom',
        },
        defaultValue: {
          summary: 'right',
        },
      },
    },
    footerCloseButton: {
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
  args: {
    title: 'About IVAO',
    description: 'International Virtual Aviation Organisation',
    trigger: 'Open sheet',
    children: (
      <div>
        <h3>IVAO Journey</h3>
        <p>
          Experience dynamic flight operations and real-time ATC with IVAO’s
          immersive network.
        </p>
      </div>
    ),
    footerCloseButton: true,
    side: 'right',
  },
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default = {} satisfies Story;

export const LongText = {
  args: {
    title: 'About IVAO',
    description: 'IVAO is a global organization',
    children: (
      <div>
        <h3>IVAO Journey</h3>
        <p>
          Experience dynamic flight operations and real-time ATC with IVAO’s
          immersive network.
        </p>
        <br />
        <p>
          IVAO is a global organization, with a strong focus on aviation
          simulation and air traffic control. It is a unique platform that
          allows virtual pilots and virtual air traffic controllers to simulate
          real-world operations in a dynamic and immersive environment.
        </p>
        <br />
        <p>
          IVAO was founded in 1998 and has since grown to become one of the
          largest and most active flight simulation networks in the world. With
          over 200,000 registered members, IVAO offers a wide range of services
          and features to its users, including real-time ATC services, flight
          planning tools, and a comprehensive training program.
        </p>
      </div>
    ),
  },
} satisfies Story;

export const WithFooter = {
  args: {
    title: 'About IVAO',
    description: 'IVAO is a global organization',
    children: (
      <div>
        <h3>IVAO Journey</h3>
        <p>
          Experience dynamic flight operations and real-time ATC with IVAO’s
          immersive network.
        </p>
        <br />
        <p>
          IVAO is a global organization, with a strong focus on aviation
          simulation and air traffic control. It is a unique platform that
          allows virtual pilots and virtual air traffic controllers to simulate
          real-world operations in a dynamic and immersive environment.
        </p>
        <br />
        <p>
          IVAO was founded in 1998 and has since grown to become one of the
          largest and most active flight simulation networks in the world. With
          over 200,000 registered members, IVAO offers a wide range of services
          and features to its users, including real-time ATC services, flight
          planning tools, and a comprehensive training program.
        </p>
      </div>
    ),
    footerCloseButton: true,
    footer: (
      <div>
        <Button onClick={() => {}}>Save</Button>
      </div>
    ),
  },
} satisfies Story;

export const WithComplexFooter = {
  args: {
    title: 'About IVAO',
    description: 'IVAO is a global organization',
    children: (
      <div>
        <h3>IVAO Journey</h3>
        <p>
          Experience dynamic flight operations and real-time ATC with IVAO’s
          immersive network.
        </p>
        <br />
        <p>
          IVAO is a global organization, with a strong focus on aviation
          simulation and air traffic control. It is a unique platform that
          allows virtual pilots and virtual air traffic controllers to simulate
          real-world operations in a dynamic and immersive environment.
        </p>
        <br />
        <p>
          IVAO was founded in 1998 and has since grown to become one of the
          largest and most active flight simulation networks in the world. With
          over 200,000 registered members, IVAO offers a wide range of services
          and features to its users, including real-time ATC services, flight
          planning tools, and a comprehensive training program.
        </p>
      </div>
    ),
    footerCloseButton: false,
    footer: (
      <div className="flex w-full items-center justify-between gap-2">
        <p className="text-sm text-fuselage-450">v1.13.0</p>
        <div className="flex gap-2">
          <TooltipProvider>
            <Tooltip content="This will uninstall the app">
              <Button variant="outline" onClick={() => {}}>
                Uninstall
              </Button>
            </Tooltip>
          </TooltipProvider>

          <Button onClick={() => {}}>Update</Button>
        </div>
      </div>
    ),
  },
} satisfies Story;
