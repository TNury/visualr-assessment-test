interface IconProps extends React.HTMLAttributes<SVGElement> {}

export const Add: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      color='currentColor'
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.8'
        d='M12 3v9m0 9v-9m0 0h9m-9 0H3'></path>
    </svg>
  );
};
