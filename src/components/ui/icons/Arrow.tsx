interface IconProps extends React.HTMLAttributes<SVGElement> {}

export const Arrow: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='14'
      fill='none'
      viewBox='0 0 14 14'
      color='currentColor'
      {...props}>
      <path
        fill='currentColor'
        d='M7 12.25a.482.482 0 01-.48-.412l-.004-.065v-8.39l-3.063 3.03a.49.49 0 01-.685.002.472.472 0 01-.049-.621l.047-.054 3.89-3.85.01-.01a.49.49 0 01.033-.027l-.043.037a.486.486 0 01.326-.14h.034l.036.003L7 1.75a.495.495 0 01.347.144l3.887 3.846a.472.472 0 01-.002.675.49.49 0 01-.63.045l-.055-.046-3.062-3.03v8.389A.48.48 0 017 12.25z'></path>
    </svg>
  );
};
