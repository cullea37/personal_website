import NavButton from '@components/Navbar/NavButton';

function Navbar() {
  return (
    <nav>
      <ul>
        <NavButton href="/" label="Home" />
        <NavButton href="/blog" label="Blog" />
        <NavButton href="/portfolio" label="Portfolio" />
      </ul>
    </nav>
  );
}

export default Navbar;
