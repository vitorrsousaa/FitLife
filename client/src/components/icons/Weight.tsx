interface WeightProps {
  color?: string;
}

export function Weight({ color }: WeightProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_31_712)">
        <path
          d="M18 8.25C18 11.5641 15.3141 14.25 12 14.25C8.68594 14.25 6 11.5641 6 8.25C6 4.93594 8.68594 2.25 12 2.25C15.3141 2.25 18 4.93594 18 8.25ZM18.3656 3C16.8516 1.16719 14.5641 0 12 0C9.43594 0 7.14844 1.16719 5.63437 3H3C1.34531 3 0 4.34531 0 6V21C0 22.6547 1.34531 24 3 24H21C22.6547 24 24 22.6547 24 21V6C24 4.34531 22.6547 3 21 3H18.3656ZM13.875 10.5C13.875 10.0031 13.6828 9.55313 13.3641 9.21563L14.9391 5.54531C15.1031 5.16563 14.925 4.725 14.5453 4.56094C14.1656 4.39688 13.725 4.575 13.5609 4.95469L11.9859 8.625C10.9547 8.62969 10.125 9.46875 10.125 10.5C10.125 11.5359 10.9641 12.375 12 12.375C13.0359 12.375 13.875 11.5359 13.875 10.5Z"
          fill={color ? color : 'var(--gray-100)'}
          fillOpacity="0.6"
        />
      </g>
      <defs>
        <clipPath id="clip0_31_712">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
