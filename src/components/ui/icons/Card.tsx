interface IconProps extends React.HTMLAttributes<SVGElement> {}

export const Card: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='24'
      fill='none'
      viewBox='0 0 25 24'
      color='currentColor'
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M1.75 9A4.75 4.75 0 016.5 4.25h12A4.75 4.75 0 0123.25 9v6a4.75 4.75 0 01-4.75 4.75h-12A4.75 4.75 0 011.75 15V9zm1.587-.75h18.326a3.251 3.251 0 00-3.163-2.5h-12a3.251 3.251 0 00-3.163 2.5zm18.413 1.5H3.25V15a3.25 3.25 0 003.25 3.25h12A3.25 3.25 0 0021.75 15V9.75zm-8 5.25a.75.75 0 01.75-.75h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z'
        clipRule='evenodd'></path>
    </svg>
  );
};
