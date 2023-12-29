import Image, { ImageProps } from 'next/image';

import { cn } from '@vat/lib/utils';

type RoundedImageProps = ImageProps & {
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
};

export const RoundedImage: React.FC<RoundedImageProps> = (props) => {
  const { wrapperProps, ...imageProps } = props;

  const { className, ...restWrapperProps } = wrapperProps || {};

  return (
    <div
      {...restWrapperProps}
      className={cn(
        'flex items-center justify-center overflow-hidden rounded-full',
        className
      )}>
      <Image {...imageProps} />
    </div>
  );
};
