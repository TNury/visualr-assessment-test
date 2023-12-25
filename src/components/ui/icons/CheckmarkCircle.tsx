interface IconProps extends React.HTMLAttributes<SVGElement> {}

export const CheckmarkCircle: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
      viewBox='0 0 16 16'
      color='currentColor'
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M10.864 6.404l-3.046 4a.666.666 0 01-.526.263h-.004a.668.668 0 01-.525-.256L5.142 8.34a.666.666 0 111.05-.822L7.28 8.91l2.523-3.313a.667.667 0 011.06.808zM8 1.334a6.667 6.667 0 100 13.333A6.667 6.667 0 008 1.334z'
        clipRule='evenodd'></path>
      <mask
        id='mask0_939_239'
        style={{ maskType: 'luminance' }}
        width='14'
        height='14'
        x='1'
        y='1'
        maskUnits='userSpaceOnUse'>
        <path
          fill='#fff'
          fillRule='evenodd'
          d='M10.864 6.404l-3.046 4a.666.666 0 01-.526.263h-.004a.668.668 0 01-.525-.256L5.142 8.34a.666.666 0 111.05-.822L7.28 8.91l2.523-3.313a.667.667 0 011.06.808zM8 1.334a6.667 6.667 0 100 13.333A6.667 6.667 0 008 1.334z'
          clipRule='evenodd'></path>
      </mask>
      <g mask='url(#mask0_939_239)'>
        <path fill='currentColor' d='M0 0H16V16H0z'></path>
      </g>
    </svg>
  );
};
