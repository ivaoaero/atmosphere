import {
  Group as RadixGroup,
  Portal as RadixPortal,
  Root as RadixRoot,
  Value as RadixValue,
} from '@radix-ui/react-select';

import { SelectContent } from './SelectContent';
import { SelectCheck, SelectChevronDown, SelectChevronUp } from './SelectIcons';
import { SelectItem, SelectItemIndicator, SelectItemText } from './SelectItem';
import { SelectLabel } from './SelectLabel';
import { SelectScrollDownButton, SelectScrollUpButton } from './SelectScrolls';
import { SelectSeparator } from './SelectSeparator';
import { SelectIcon, SelectTrigger } from './SelectTrigger';
import { SelectViewport } from './SelectViewport';

const SelectRoot = RadixRoot;

const SelectGroup = RadixGroup;

const SelectValue = RadixValue;

const SelectPortal = RadixPortal;

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
