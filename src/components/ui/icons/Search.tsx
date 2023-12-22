interface IconProps extends React.HTMLAttributes<SVGElement> {}

export const Search: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      fill='none'
      viewBox='0 0 20 20'
      color='currentColor'
      {...props}>
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M4.167 9.167c0-2.758 2.242-5 5-5 2.757 0 5 2.242 5 5 0 2.757-2.243 5-5 5-2.758 0-5-2.243-5-5m13.089 6.91l-2.83-2.83a6.626 6.626 0 001.407-4.08A6.674 6.674 0 009.167 2.5 6.674 6.674 0 002.5 9.167a6.674 6.674 0 006.667 6.666c1.538 0 2.952-.529 4.08-1.406l2.83 2.829a.831.831 0 001.179 0 .832.832 0 000-1.178'
        clipRule='evenodd'></path>
      <mask
        id='mask0_604_3901'
        style={{ maskType: 'luminance' }}
        width='16'
        height='16'
        x='2'
        y='2'
        maskUnits='userSpaceOnUse'>
        <path
          fill='#fff'
          fillRule='evenodd'
          d='M4.167 9.167c0-2.758 2.242-5 5-5 2.757 0 5 2.242 5 5 0 2.757-2.243 5-5 5-2.758 0-5-2.243-5-5m13.089 6.91l-2.83-2.83a6.626 6.626 0 001.407-4.08A6.674 6.674 0 009.167 2.5 6.674 6.674 0 002.5 9.167a6.674 6.674 0 006.667 6.666c1.538 0 2.952-.529 4.08-1.406l2.83 2.829a.831.831 0 001.179 0 .832.832 0 000-1.178'
          clipRule='evenodd'></path>
      </mask>
      <g mask='url(#mask0_604_3901)'>
        <path fill='#fff' d='M0 0H20V20H0z'></path>
      </g>
    </svg>
  );
};
