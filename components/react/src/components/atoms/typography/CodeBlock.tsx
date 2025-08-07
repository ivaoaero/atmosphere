import {
  ComponentPropsWithoutRef,
  ComponentType,
  forwardRef,
  useCallback,
  useState,
} from 'react';

import { Check, Copy } from 'lucide-react';

import { InlineCode } from '@components/atoms/typography/index';

import { cn } from '@utils/styles';

export const CodeBlock = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<'code'>
>(({ ...props }, ref) => (
  <div className={'relative flex w-full'}>
    <div
      className={
        'relative grow overflow-x-auto rounded bg-fuselage-200/10 p-3 font-mono text-sm dark:bg-fuselage-800'
      }
    >
      <InlineCode
        background={'plain'}
        className={'whitespace-pre pe-12'}
        ref={ref}
        {...props}
      />
    </div>
    <CopyToClipboardButton text={props.children as string} />
  </div>
));
CodeBlock.displayName = 'CodeBlock';

const CopyToClipboardButton: ComponentType<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    setCopied(true);
    navigator.clipboard.writeText(text).catch(console.error);
  }, [text]);

  return (
    <button
      type={'button'}
      className={cn(
        'absolute right-2 top-1.5 z-10 rounded-md p-2 backdrop-blur-sm transition-colors duration-300',
        copied
          ? 'bg-semantic-green-500 text-white dark:bg-semantic-green-500/10 dark:text-semantic-green-500'
          : 'bg-fuselage-200/10 text-fuselage-250 hover:bg-fuselage-200/75 hover:text-fuselage-400 dark:bg-fuselage-800/80 dark:text-fuselage-600 hover:dark:bg-fuselage-700 hover:dark:text-fuselage-250',
      )}
      onClick={handleCopy}
    >
      {copied ? <Check /> : <Copy />}
    </button>
  );
};
