import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'theme-ui';
import { hover, active } from '@src/styles/theme';

interface NavButtonProps {
  href: string;
  label: string;
}

function NavButton({ href, label }: NavButtonProps) {
  const router = useRouter();
  const isSelected = router.pathname === href;

  return (
    <li>
      <Link href={href} passHref>
        <Button
          sx={{
            bg: 'background',
            color: 'primary',
            borderRadius: '0',
            height: '100%',
            '&:hover': {
              bg: hover('background'),
              transform: 'none',
            },
            '&:active': {
              bg: active('primary'),
              transform: 'none',
            },
            textDecoration: isSelected ? 'underline' : 'none',
          }}
        >
          {label}
        </Button>
      </Link>
    </li>
  );
}

export default NavButton;
