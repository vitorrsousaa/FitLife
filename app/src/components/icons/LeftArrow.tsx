import { SvgXml } from 'react-native-svg';

interface LeftArrowProps {
  color?: string;
}

export function LeftArrow({ color }: LeftArrowProps) {
  const markup = `<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.28573 14.8571L1.42859 7.99997L8.28573 1.14282" stroke=${
    color ? color : '#f5f5f5'
  } stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={markup} />;
}
