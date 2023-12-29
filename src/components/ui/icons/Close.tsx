interface IconProps extends React.HTMLAttributes<SVGElement> {}

export const Close: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      color='currentColor'
      {...props}>
      <g clipPath='url(#clip0_1349_3588)'>
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.8'
          d='M5.636 5.636L12 12m6.364 6.364L12 12m0 0l6.364-6.364M12 12l-6.364 6.364'></path>
      </g>
      <defs>
        <clipPath id='clip0_1349_3588'>
          <path fill='#fff' d='M0 0H24V24H0z'></path>
        </clipPath>
      </defs>
    </svg>
  );
};
