import { ColumnDef } from '@tanstack/react-table';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CircleCheck,
  CircleHelp,
  CircleIcon,
  CircleX,
  TimerIcon,
} from 'lucide-react';

import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '@components/atoms/badge';
import { Checkbox } from '@components/atoms/checkbox';
import { Input } from '@components/atoms/input';
import {
  DataTable,
  DataTableColumnHeader,
  DataTableRowActions,
} from '@components/molecules/data-table';

// Copied from https://ui.shadcn.com/examples/tasks (Source: https://github.com/shadcn-ui/ui/blob/main/apps/www/app/(app)/examples/tasks/)

interface Task {
  id: string;
  title: string;
  status: string;
  label: string;
  priority: string;
}

const labels = [
  {
    value: 'bug',
    label: 'Bug',
  },
  {
    value: 'feature',
    label: 'Feature',
  },
  {
    value: 'documentation',
    label: 'Documentation',
  },
];

const statuses = [
  {
    value: 'backlog',
    label: 'Backlog',
    icon: CircleHelp,
  },
  {
    value: 'todo',
    label: 'Todo',
    icon: CircleIcon,
  },
  {
    value: 'in progress',
    label: 'In Progress',
    icon: TimerIcon,
  },
  {
    value: 'done',
    label: 'Done',
    icon: CircleCheck,
  },
  {
    value: 'canceled',
    label: 'Canceled',
    icon: CircleX,
  },
];

const priorities = [
  {
    label: 'Low',
    value: 'low',
    icon: ArrowDownIcon,
  },
  {
    label: 'Medium',
    value: 'medium',
    icon: ArrowRightIcon,
  },
  {
    label: 'High',
    value: 'high',
    icon: ArrowUpIcon,
  },
];

const columns: ColumnDef<Task>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label={'Select all'}
        className={'translate-y-[2px]'}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label={'Select row'}
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label);

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="leaked" text={label.label} />}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue('title')}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue('status'),
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 size-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value: string[]) => {
      return value.includes(row.getValue<string>(id));
    },
  },
  {
    accessorKey: 'priority',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue('priority'),
      );

      if (!priority) {
        return null;
      }

      return (
        <div className="flex items-center">
          {priority.icon && (
            <priority.icon className="mr-2 size-4 text-muted-foreground" />
          )}
          <span>{priority.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value: string[]) => {
      return value.includes(row.getValue<string>(id));
    },
  },
  {
    id: 'actions',
    cell: () => (
      <DataTableRowActions actions={[{ label: 'Edit' }, { label: 'Delete' }]} />
    ),
  },
];

const data: Task[] = [
  {
    id: 'TASK-8782',
    title:
      "You can't compress the program without quantifying the open-source SSD pixel!",
    status: 'in progress',
    label: 'documentation',
    priority: 'medium',
  },
  {
    id: 'TASK-7878',
    title:
      'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
    status: 'backlog',
    label: 'documentation',
    priority: 'medium',
  },
  {
    id: 'TASK-7839',
    title: 'We need to bypass the neural TCP card!',
    status: 'todo',
    label: 'bug',
    priority: 'high',
  },
  {
    id: 'TASK-5562',
    title:
      'The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!',
    status: 'backlog',
    label: 'feature',
    priority: 'medium',
  },
  {
    id: 'TASK-8686',
    title:
      "I'll parse the wireless SSL protocol, that should driver the API panel!",
    status: 'canceled',
    label: 'feature',
    priority: 'medium',
  },
  {
    id: 'TASK-1280',
    title:
      'Use the digital TLS panel, then you can transmit the haptic system!',
    status: 'done',
    label: 'bug',
    priority: 'high',
  },
  {
    id: 'TASK-7262',
    title:
      'The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!',
    status: 'done',
    label: 'feature',
    priority: 'high',
  },
  {
    id: 'TASK-1138',
    title:
      "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
    status: 'in progress',
    label: 'feature',
    priority: 'medium',
  },
  {
    id: 'TASK-7184',
    title: 'We need to program the back-end THX pixel!',
    status: 'todo',
    label: 'feature',
    priority: 'low',
  },
  {
    id: 'TASK-5160',
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
    status: 'in progress',
    label: 'documentation',
    priority: 'high',
  },
  {
    id: 'TASK-5618',
    title:
      "Generating the driver won't do anything, we need to index the online SSL application!",
    status: 'done',
    label: 'documentation',
    priority: 'medium',
  },
  {
    id: 'TASK-6699',
    title:
      "I'll transmit the wireless JBOD capacitor, that should hard drive the SSD feed!",
    status: 'backlog',
    label: 'documentation',
    priority: 'medium',
  },
  {
    id: 'TASK-2858',
    title: 'We need to override the online UDP bus!',
    status: 'backlog',
    label: 'bug',
    priority: 'medium',
  },
  {
    id: 'TASK-9864',
    title:
      "I'll reboot the 1080p FTP panel, that should matrix the HEX hard drive!",
    status: 'done',
    label: 'bug',
    priority: 'high',
  },
  {
    id: 'TASK-8404',
    title: 'We need to generate the virtual HEX alarm!',
    status: 'in progress',
    label: 'bug',
    priority: 'low',
  },
  {
    id: 'TASK-5365',
    title:
      "Backing up the pixel won't do anything, we need to transmit the primary IB array!",
    status: 'in progress',
    label: 'documentation',
    priority: 'low',
  },
  {
    id: 'TASK-1780',
    title:
      'The CSS feed is down, index the bluetooth transmitter so we can compress the CLI protocol!',
    status: 'todo',
    label: 'documentation',
    priority: 'high',
  },
  {
    id: 'TASK-6938',
    title:
      'Use the redundant SCSI application, then you can hack the optical alarm!',
    status: 'todo',
    label: 'documentation',
    priority: 'high',
  },
  {
    id: 'TASK-9885',
    title: 'We need to compress the auxiliary VGA driver!',
    status: 'backlog',
    label: 'bug',
    priority: 'high',
  },
  {
    id: 'TASK-3216',
    title:
      "Transmitting the transmitter won't do anything, we need to compress the virtual HDD sensor!",
    status: 'backlog',
    label: 'documentation',
    priority: 'medium',
  },
  {
    id: 'TASK-9285',
    title:
      'The IP monitor is down, copy the haptic alarm so we can generate the HTTP transmitter!',
    status: 'todo',
    label: 'bug',
    priority: 'high',
  },
  {
    id: 'TASK-1024',
    title:
      "Overriding the microchip won't do anything, we need to transmit the digital OCR transmitter!",
    status: 'in progress',
    label: 'documentation',
    priority: 'low',
  },
  {
    id: 'TASK-7068',
    title:
      "You can't generate the capacitor without indexing the wireless HEX pixel!",
    status: 'canceled',
    label: 'bug',
    priority: 'low',
  },
  {
    id: 'TASK-6502',
    title:
      "Navigating the microchip won't do anything, we need to bypass the back-end SQL bus!",
    status: 'todo',
    label: 'bug',
    priority: 'high',
  },
  {
    id: 'TASK-5326',
    title: 'We need to hack the redundant UTF8 transmitter!',
    status: 'todo',
    label: 'bug',
    priority: 'low',
  },
  {
    id: 'TASK-6274',
    title:
      'Use the virtual PCI circuit, then you can parse the bluetooth alarm!',
    status: 'canceled',
    label: 'documentation',
    priority: 'low',
  },
  {
    id: 'TASK-1571',
    title:
      "I'll input the neural DRAM circuit, that should protocol the SMTP interface!",
    status: 'in progress',
    label: 'feature',
    priority: 'medium',
  },
];

const meta = {
  title: 'DataDisplay/Lists/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  args: {
    data,
    // Open issue: https://github.com/TanStack/table/issues/4382
    columns: columns as ColumnDef<unknown>[],
    isClientSideData: true,
    ToolbarContent: ({ table }) => (
      <Input
        placeholder="Filter tasks..."
        value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
        onChange={(event) =>
          table.getColumn('title')?.setFilterValue(event.target.value)
        }
        className="h-8 w-[150px] lg:w-[250px]"
      />
    ),
  },
  argTypes: {
    data: {
      required: true,
      table: {
        type: {
          summary: 'TData[]',
        },
      },
    },
    columns: {
      table: {
        type: {
          summary: 'ColumnDef<TData>[]',
        },
      },
    },
    displayViewOptions: {
      description:
        'If true, the view options (column filter) will be displayed.',
      type: 'boolean',
    },
    ToolbarContent: {
      description:
        'A component that can be rendered above the table and receives all information about the table.',
      table: {
        type: {
          summary: 'ComponentType<{ table: Table<TData> }>',
        },
      },
    },
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default = {} satisfies Story;
