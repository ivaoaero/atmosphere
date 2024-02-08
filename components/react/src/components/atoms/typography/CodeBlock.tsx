import {
  ComponentPropsWithoutRef,
  ComponentType,
  forwardRef,
  useCallback,
  useState,
} from 'react';

import { Checkmark, Copy } from '@carbon/icons-react';

import { InlineCode } from '@components/atoms/typography/index';

import { cn } from '@utils/styles';

export const CodeBlock = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<'code'>
>(({ ...props }, ref) => (
  <div className={'w-full relative flex '}>
    <div
      className={
        'relative p-3 font-mono text-sm grow overflow-x-auto rounded bg-fuselage-200/10 dark:bg-fuselage-800'
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
      type="button"
      className={cn(
        'absolute top-1.5 right-2 p-2 rounded-md backdrop-blur-sm transition-colors duration-300 z-10',
        copied
          ? 'text-white bg-semantic-green-500 dark:text-semantic-green-500 dark:bg-semantic-green-500/10'
          : 'text-fuselage-250 dark:text-fuselage-600 hover:text-fuselage-400 hover:dark:text-fuselage-250 bg-fuselage-200/10 hover:bg-fuselage-200/75 dark:bg-fuselage-800/80 hover:dark:bg-fuselage-700',
      )}
      onClick={handleCopy}
    >
      {copied ? <Checkmark /> : <Copy />}
    </button>
  );
};
