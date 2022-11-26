import { SvgXml } from 'react-native-svg';

interface RightArrowProps {
  color?: string;
}

export function RightArrow({ color }: RightArrowProps) {
  const markup = `
  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 13L7 7L0.999999 1" stroke=${
      color ? color : '#f5f5f5'
    } stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

  return <SvgXml xml={markup} />;
}
