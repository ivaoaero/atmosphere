import { ReactNode } from 'react';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { Button } from '@components/atoms/button';
import { Calendar, CalendarProps } from '@components/atoms/calendar';
import {
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@components/atoms/popover';

import { cn } from '@utils/styles';

export type DatePickerProps = CalendarProps & {
  trigger?: ReactNode;
};

export const DatePicker = ({ trigger, ...props }: DatePickerProps) => {
  const SelectedDateOrDefault = () => {
    if (props.mode === 'range' && props.selected?.from && props.selected?.to) {
      return `${format(props.selected.from, 'PPP')} - ${format(props.selected.to, 'PPP')}`;
    }
    if (props.selected instanceof Date) {
      return format(props.selected, 'PPP');
    }
    return <span>Pick a date</span>;
  };
  return (
    <PopoverRoot>
      <PopoverTrigger asChild>
        {trigger || (
          <Button
            variant="outline"
            className={cn(
              'w-[280px] justify-start text-left font-normal',
              !props.selected && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="mr-2 size-4" />
            <SelectedDateOrDefault />
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar {...props} />
      </PopoverContent>
    </PopoverRoot>
  );
};
DatePicker.storyName = 'DatePicker';
