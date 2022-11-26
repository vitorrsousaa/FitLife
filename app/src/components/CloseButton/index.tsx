import { LeftArrow } from '../icons/LeftArrow';
import { RightArrow } from '../icons/RightArrow';
import { CloseButtonContainer } from './styles';

interface CloseButtonProps {
  onPress: () => void;
  side: 'left' | 'right';
  color?: string;
  background?: string;
}

export function CloseButton({
  onPress,
  side,
  color,
  background,
}: CloseButtonProps) {
  return (
    <CloseButtonContainer onPress={onPress} background={background}>
      {side === 'left' && <LeftArrow color={color} />}
      {side === 'right' && <RightArrow color={color} />}
    </CloseButtonContainer>
  );
}
