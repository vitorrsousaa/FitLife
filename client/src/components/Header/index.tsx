import { Container, Content } from './styles';

export const Header = () => {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>Home</h1>

          <p>Acompanhe seus alunos</p>
        </div>

        <h2>
          Fit<span>life</span>
        </h2>
      </Content>
    </Container>
  );
};
