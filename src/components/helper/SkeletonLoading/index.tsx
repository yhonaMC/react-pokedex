import { useState } from 'react';
import * as C from './styles';
import { SkeletonLoadingProps } from '../../../types/Pokemon';

export const SkeletonLoading = ({ src, alt }: SkeletonLoadingProps) => {
  const [skeleton, setSkeleton] = useState(true);

  return (
    <C.Container skeleton={skeleton}>
      {skeleton && <C.Skeleton />}
      <img
        onLoad={() => setSkeleton(false)}
        src={src}
        width="256"
        height="256"
        alt={alt}
      />
    </C.Container>
  );
};
