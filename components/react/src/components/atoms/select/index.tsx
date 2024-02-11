import * as SelectPrimitive from '@radix-ui/react-select';

import { SelectContent } from './SelectContent';
import { SelectCheck, SelectChevronDown, SelectChevronUp } from './SelectIcons';
import { SelectItem, SelectItemIndicator, SelectItemText } from './SelectItem';
import { SelectLabel } from './SelectLabel';
import { SelectScrollDownButton, SelectScrollUpButton } from './SelectScrolls';
import { SelectSeparator } from './SelectSeparator';
import { SelectIcon, SelectTrigger } from './SelectTrigger';
import { SelectViewport } from './SelectViewport';

const SelectRoot = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectPortal = SelectPrimitive.Portal;

export {
  SelectRoot,
  SelectPortal,
  SelectContent,
  SelectViewport,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectChevronUp,
  SelectChevronDown,
  SelectCheck,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
