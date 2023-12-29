interface IconProps extends React.HTMLAttributes<SVGElement> {}

export const Dropdown: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='21'
      fill='none'
      viewBox='0 0 20 21'
      color='currentColor'
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M10 13.833a.828.828 0 01-.533-.193l-5-4.167a.833.833 0 111.066-1.28l4.476 3.73 4.468-3.595a.834.834 0 011.046 1.298l-5 4.023a.833.833 0 01-.523.184z'
        clipRule='evenodd'></path>
      <mask
        id='mask0_1262_1152'
        style={{ maskType: 'luminance' }}
        width='12'
        height='6'
        x='4'
        y='8'
        maskUnits='userSpaceOnUse'>
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M10 13.833a.828.828 0 01-.533-.193l-5-4.167a.833.833 0 111.066-1.28l4.476 3.73 4.468-3.595a.834.834 0 011.046 1.298l-5 4.023a.833.833 0 01-.523.184z'
          clipRule='evenodd'></path>
      </mask>
      <g mask='url(#mask0_1262_1152)'>
        <path fill='currentColor' d='M0 0.5H20V20.5H0z'></path>
      </g>
    </svg>
  );
};
