import { Text } from '../Text';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <Text size={32}>
        Olá
        <Text weight="700" size={32}>
          {' '}
          Sarah
        </Text>
      </Text>
      <Text weight="600">Seja bem vindo</Text>
    </Container>
  );
}
