/** @jsxImportSource theme-ui */
import NextLink from 'next/link';
import { Box } from 'theme-ui';
import NavButton from '@components/Navbar/NavButton';
import Logo from '@components/svgs/Logo';

function Navbar() {
  return (
    <Box
      as="nav"
      sx={{
        bg: 'background',
        position: 'sticky',
        width: '100%',
        height: '60px',
      }}
    >
      <ul
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          listStyleType: 'none',
          marginTop: 'none',
          marginBlockStart: '0px',
          marginBlockEnd: '0px',
          padding:'0px',
        }}
      >
        <li>
          <NextLink href="/">
            <Logo
              LogoType="TransparentLong"
              height="60px"
              bodyColor="primary"
            />
          </NextLink>
        </li>
        <div sx={{ display: 'flex' }}>
          <NavButton href="/" label="Home" />
          <NavButton href="/blog" label="Blog" />
          <NavButton href="/portfolio" label="Portfolio" />
        </div>
      </ul>
    </Box>
  );
}

export default Navbar;
