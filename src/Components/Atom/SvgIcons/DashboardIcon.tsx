import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
  childClassName?: string;
}
const DashboardIcon: React.FC<Props> = (props) => {
  // Props
  const { width, height, className, childClassName } = props;

  //   Data to render
  return (
    <svg
      width={width || "20"}
      height={height || "20"}
      className={className ? className : ""}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={childClassName ? childClassName : ""}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 13C15.0478 13 14.4089 13.0625 13.7438 13.1536C13.4331 13.1962 13.1962 13.4331 13.1536 13.7438C13.0625 14.4089 13 15.0478 13 15.5C13 15.9522 13.0625 16.5911 13.1536 17.2562C13.1962 17.5669 13.4331 17.8038 13.7438 17.8464C14.4089 17.9375 15.0478 18 15.5 18C15.9522 18 16.5911 17.9375 17.2562 17.8464C17.5669 17.8038 17.8038 17.5669 17.8464 17.2562C17.9375 16.5911 18 15.9522 18 15.5C18 15.0478 17.9375 14.4089 17.8464 13.7438C17.8038 13.4331 17.5669 13.1962 17.2562 13.1536C16.5911 13.0625 15.9522 13 15.5 13ZM13.4724 11.1721C12.2725 11.3364 11.3364 12.2725 11.1721 13.4724C11.0778 14.1606 11 14.9082 11 15.5C11 16.0918 11.0778 16.8394 11.1721 17.5276C11.3364 18.7275 12.2725 19.6636 13.4724 19.8279C14.1606 19.9222 14.9082 20 15.5 20C16.0918 20 16.8394 19.9222 17.5276 19.8279C18.7275 19.6636 19.6636 18.7275 19.8279 17.5276C19.9222 16.8394 20 16.0918 20 15.5C20 14.9082 19.9222 14.1606 19.8279 13.4724C19.6636 12.2725 18.7275 11.3364 17.5276 11.1721C16.8394 11.0778 16.0918 11 15.5 11C14.9082 11 14.1606 11.0778 13.4724 11.1721Z"
        fill="#5F6388"
      />
      <path
        className={childClassName ? childClassName : ""}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 13C4.04782 13 3.40893 13.0625 2.74381 13.1536C2.43308 13.1962 2.19615 13.4331 2.15359 13.7438C2.0625 14.4089 2 15.0478 2 15.5C2 15.9522 2.0625 16.5911 2.15359 17.2562C2.19615 17.5669 2.43308 17.8038 2.74381 17.8464C3.40893 17.9375 4.04782 18 4.5 18C4.95218 18 5.59107 17.9375 6.25619 17.8464C6.56692 17.8038 6.80385 17.5669 6.84641 17.2562C6.9375 16.5911 7 15.9522 7 15.5C7 15.0478 6.9375 14.4089 6.84641 13.7438C6.80385 13.4331 6.56692 13.1962 6.25619 13.1536C5.59107 13.0625 4.95218 13 4.5 13ZM2.47244 11.1721C1.27253 11.3364 0.336423 12.2725 0.172092 13.4724C0.0778385 14.1606 0 14.9082 0 15.5C0 16.0918 0.0778385 16.8394 0.172092 17.5276C0.336423 18.7275 1.27253 19.6636 2.47244 19.8279C3.16065 19.9222 3.90816 20 4.5 20C5.09184 20 5.83935 19.9222 6.52756 19.8279C7.72747 19.6636 8.66358 18.7275 8.82791 17.5276C8.92216 16.8394 9 16.0918 9 15.5C9 14.9082 8.92216 14.1606 8.82791 13.4724C8.66358 12.2725 7.72747 11.3364 6.52756 11.1721C5.83935 11.0778 5.09184 11 4.5 11C3.90816 11 3.16065 11.0778 2.47244 11.1721Z"
        fill="#5F6388"
      />
      <path
        className={childClassName ? childClassName : ""}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 2C15.0478 2 14.4089 2.0625 13.7438 2.15359C13.4331 2.19615 13.1962 2.43308 13.1536 2.74381C13.0625 3.40893 13 4.04782 13 4.5C13 4.95218 13.0625 5.59107 13.1536 6.25619C13.1962 6.56692 13.4331 6.80385 13.7438 6.84641C14.4089 6.9375 15.0478 7 15.5 7C15.9522 7 16.5911 6.9375 17.2562 6.84641C17.5669 6.80385 17.8038 6.56692 17.8464 6.25619C17.9375 5.59107 18 4.95218 18 4.5C18 4.04782 17.9375 3.40893 17.8464 2.74381C17.8038 2.43308 17.5669 2.19615 17.2562 2.15359C16.5911 2.0625 15.9522 2 15.5 2ZM13.4724 0.172092C12.2725 0.336423 11.3364 1.27253 11.1721 2.47244C11.0778 3.16065 11 3.90816 11 4.5C11 5.09184 11.0778 5.83935 11.1721 6.52756C11.3364 7.72747 12.2725 8.66358 13.4724 8.82791C14.1606 8.92216 14.9082 9 15.5 9C16.0918 9 16.8394 8.92216 17.5276 8.82791C18.7275 8.66358 19.6636 7.72747 19.8279 6.52756C19.9222 5.83935 20 5.09184 20 4.5C20 3.90816 19.9222 3.16065 19.8279 2.47244C19.6636 1.27253 18.7275 0.336423 17.5276 0.172092C16.8394 0.0778385 16.0918 0 15.5 0C14.9082 0 14.1606 0.0778385 13.4724 0.172092Z"
        fill="#5F6388"
      />
      <path
        className={childClassName ? childClassName : ""}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 2C4.04782 2 3.40893 2.0625 2.74381 2.15359C2.43308 2.19615 2.19615 2.43308 2.15359 2.74381C2.0625 3.40893 2 4.04782 2 4.5C2 4.95218 2.0625 5.59107 2.15359 6.25619C2.19615 6.56692 2.43308 6.80385 2.74381 6.84641C3.40893 6.9375 4.04782 7 4.5 7C4.95218 7 5.59107 6.9375 6.25619 6.84641C6.56692 6.80385 6.80385 6.56692 6.84641 6.25619C6.9375 5.59107 7 4.95218 7 4.5C7 4.04782 6.9375 3.40893 6.84641 2.74381C6.80385 2.43308 6.56692 2.19615 6.25619 2.15359C5.59107 2.0625 4.95218 2 4.5 2ZM2.47244 0.172092C1.27253 0.336423 0.336423 1.27253 0.172092 2.47244C0.0778385 3.16065 0 3.90816 0 4.5C0 5.09184 0.0778385 5.83935 0.172092 6.52756C0.336423 7.72747 1.27253 8.66358 2.47244 8.82791C3.16065 8.92216 3.90816 9 4.5 9C5.09184 9 5.83935 8.92216 6.52756 8.82791C7.72747 8.66358 8.66358 7.72747 8.82791 6.52756C8.92216 5.83935 9 5.09184 9 4.5C9 3.90816 8.92216 3.16065 8.82791 2.47244C8.66358 1.27253 7.72747 0.336423 6.52756 0.172092C5.83935 0.0778385 5.09184 0 4.5 0C3.90816 0 3.16065 0.0778385 2.47244 0.172092Z"
        fill="#5F6388"
      />
    </svg>
  );
};

export default DashboardIcon;
