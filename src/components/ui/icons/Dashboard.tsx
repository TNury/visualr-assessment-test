interface IconProps extends React.HTMLAttributes<SVGElement> {}

export const Dashboard: React.FC<IconProps> = (props) => {
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
        fill='currentColor'
        d='M10.498 6.76c.088.175.14.364.155.561l.389 5.489a.28.28 0 00.099.194.29.29 0 00.157.067l.062.001 5.574-.335c.453-.027.896.13 1.226.435.33.304.517.728.514 1.22-.247 3.612-2.901 6.632-6.515 7.415-3.614.782-7.323-.86-9.101-4.022a7.664 7.664 0 01-.944-2.61l-.048-.34A5.182 5.182 0 012 14.08l.003-.242c.01-3.771 2.659-7.033 6.385-7.913l.256-.056.137-.023c.721-.098 1.43.28 1.717.916zm-1.482.518l-.084.01-.228.051c-2.969.716-5.098 3.271-5.216 6.282l-.005.245c-.007.187 0 .373.022.572l.028.203c.1.854.375 1.68.816 2.436 1.467 2.61 4.518 3.96 7.49 3.316 2.972-.644 5.155-3.128 5.357-6.052a.158.158 0 00-.051-.116.165.165 0 00-.078-.04l-.043-.003-5.565.335a1.795 1.795 0 01-1.289-.42 1.716 1.716 0 01-.605-1.187l-.388-5.484c0-.009-.003-.018-.02-.053a.163.163 0 00-.14-.095zm4.407-5.277c4.285.121 7.88 3.2 8.567 7.34l.01.116-.002.202c-.024.297-.144.58-.344.808a1.46 1.46 0 01-.995.49l-6.646.433c-.851.048-1.583-.585-1.639-1.417L11.93 3.45l.005-.146.022-.165c.06-.292.211-.559.435-.762.282-.254.655-.39 1.031-.375zm-.012 1.448l.44 6.43c.003.038.037.068.07.066l6.597-.431-.033-.18c-.653-3.254-3.473-5.67-6.856-5.875l-.218-.01z'></path>
    </svg>
  );
};
