import { connect, styled } from 'frontity';
import Link from './link';
import Nav from './nav';
import MobileMenu from './menu';

const Header = ({ state }) => (
  <>
    <Container>
      <StyledLink link='/'>
        <Title>{state.frontity.title}</Title>
        <Description>{state.frontity.description}</Description>
      </StyledLink>
      <MobileMenu />
    </Container>
    <Nav />
  </>
);

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  max-width: var(--main-width);
  width: 100%;
  box-sizing: border-box;
  padding: 24px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0 0 5px;
  letter-spacing: -0.015em;
  font-size: 1.25em;
  text-transform: uppercase;
  transition: all .25s;
`;

const Description = styled.h4`
  margin: 0 0 6px;
  font-weight: normal;
  font-size: .9em;
  opacity: .77;
  transition: all .25s;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover > h2 {
    color: var(--hover-color);
  }
  &:hover > h4 {
    opacity: 1;
  }
`;
