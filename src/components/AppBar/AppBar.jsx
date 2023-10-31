import { Container, Item, Link, List } from './AppBar.styled';

const AppBar = () => {
  const navItems = [
    { href: '/', text: 'Home' },
    { href: 'movies', text: 'Movies' },
  ];

  return (
    <Container>
      <List>
        {navItems.map(({ href, text }) => {
          return (
            <Item key={href}>
              <Link to={href}>{text}</Link>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};
export default AppBar;
