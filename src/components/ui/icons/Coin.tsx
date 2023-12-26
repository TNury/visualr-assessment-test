interface IconProps extends React.HTMLAttributes<SVGElement> {}

export const Coin: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      color='currentColor'
      {...props}>
      <circle
        cx='12'
        cy='12'
        r='9'
        stroke='currentColor'
        strokeWidth='1.8'></circle>
      <path
        fill='currentColor'
        d='M10.459 9.941c0-.594.457-.966 1.077-1.038V11c-.065-.013-.124-.033-.183-.053-.594-.195-.894-.535-.894-1.005zm3.264 4.074c0 .64-.49 1.064-1.181 1.123v-2.252c.045.013.091.026.13.032.731.203 1.051.562 1.051 1.097zm-1.168 3.362l-.007-.829c1.789-.17 2.925-1.155 2.925-2.71 0-1.58-1.064-2.245-2.376-2.526l-.555-.117V8.916c.692.111 1.077.633 1.096 1.156h1.672c-.026-1.358-1.09-2.39-2.742-2.566v-.849H11.51V7.5c-1.58.144-2.82 1.012-2.82 2.58 0 1.481 1.07 2.239 2.285 2.506l.561.124v2.429c-.835-.111-1.273-.614-1.306-1.214H8.52c.013 1.207.823 2.48 2.984 2.637l-.007.816h1.058z'></path>
    </svg>
  );
};
