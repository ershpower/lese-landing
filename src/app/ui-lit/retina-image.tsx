import React from 'react';

type RetinaImageProps = {
  src1x: string;
  src2x: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
};

const RetinaImage: React.FC<RetinaImageProps> = ({
  src1x,
  src2x,
  alt = '',
  width,
  height,
  className = '',
}) => {
  return (
    <img
      src={src1x}
      srcSet={`${src1x} 1x, ${src2x} 2x`}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={'lazy'}
    />
  );
};

export default RetinaImage;
