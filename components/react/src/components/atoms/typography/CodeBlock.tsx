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
        'bg-fuselage-200/10 dark:bg-fuselage-800 relative grow overflow-x-auto rounded-[0.25rem] p-3 font-mono text-sm'
      }
    >
      <InlineCode
        background={'plain'}
        className={'pe-12 whitespace-pre'}
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
        'absolute top-1.5 right-2 z-10 rounded-md p-2 backdrop-blur-xs transition-colors duration-300',
        copied
          ? 'bg-semantic-green-500 dark:bg-semantic-green-500/10 dark:text-semantic-green-500 text-white'
          : 'bg-fuselage-200/10 text-fuselage-250 hover:bg-fuselage-200/75 hover:text-fuselage-400 dark:bg-fuselage-800/80 dark:text-fuselage-600 dark:hover:bg-fuselage-700 dark:hover:text-fuselage-250',
      )}
      onClick={handleCopy}
    >
      {copied ? <Check /> : <Copy />}
    </button>
  );
};
