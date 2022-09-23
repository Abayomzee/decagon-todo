import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
  childClassName?: string;
}
const CaretDownIcon: React.FC<Props> = (props) => {
  // Props
  const { width, height, className, childClassName } = props;
  return (
    <svg
      width={width || "14"}
      height={height || "8"}
      className={className ? className : ""}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={childClassName ? childClassName : ""}
        d="M7.41998 7.37079L13.07 1.71079C13.1637 1.61783 13.2381 1.50723 13.2889 1.38537C13.3396 1.26351 13.3658 1.1328 13.3658 1.00079C13.3658 0.868781 13.3396 0.738075 13.2889 0.616216C13.2381 0.494356 13.1637 0.383755 13.07 0.290792C12.8826 0.104542 12.6292 -3.21984e-08 12.365 -4.37463e-08C12.1008 -5.52942e-08 11.8473 0.104541 11.66 0.290792L6.65998 5.24079L1.70999 0.290792C1.52262 0.104541 1.26917 -5.2876e-07 1.00499 -5.40308e-07C0.7408 -5.51856e-07 0.487349 0.104541 0.299986 0.290792C0.205498 0.383407 0.130327 0.493852 0.0788307 0.615727C0.0273342 0.737602 0.000535927 0.868485 -1.33952e-05 1.00079C0.000535915 1.1331 0.0273342 1.26398 0.0788307 1.38586C0.130327 1.50773 0.205498 1.61818 0.299986 1.71079L5.94998 7.37079C6.04363 7.4723 6.15728 7.55331 6.28378 7.60871C6.41028 7.66412 6.54688 7.69272 6.68499 7.69272C6.82309 7.69272 6.95969 7.66412 7.08619 7.60871C7.21269 7.55331 7.32634 7.4723 7.41998 7.37079Z"
        fill="#4BA8A8"
      />
    </svg>
  );
};

export default CaretDownIcon;
