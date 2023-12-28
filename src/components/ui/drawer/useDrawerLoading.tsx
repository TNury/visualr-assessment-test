import { useEffect, useState } from 'react';

export const useDrawerLoading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const bodyRef = document.querySelector('body');
    const drawerContent = document.querySelector('#drawerContent');

    if (loading) {
      bodyRef?.classList.add('opacity-70');
      drawerContent?.classList.add('pointer-events-none');
    }

    return () => {
      bodyRef?.classList.remove('opacity-70');
      drawerContent?.classList.remove('pointer-events-none');
    };
  }, [loading]);

  return { loading, setLoading };
};
