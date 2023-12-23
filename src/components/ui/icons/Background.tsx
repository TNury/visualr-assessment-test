interface IconProps extends React.HTMLAttributes<SVGElement> {}

export const Background: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='93'
      height='104'
      fill='none'
      viewBox='0 0 93 104'
      color='currentColor'
      {...props}>
      <path
        fill='currentColor'
        d='M0 24c0-6.627 5.373-12 12-12h80v80H12C5.373 92 0 86.627 0 80V24zM88.5 8c4-4 3.5-8 3.5-8v12H80s4.5 0 8.5-4z'></path>
      <path
        fill='currentColor'
        d='M88.01 95.51c-4-4-8-3.5-8-3.5h12v12s0-4.5-4-8.5z'></path>
    </svg>
  );
};
