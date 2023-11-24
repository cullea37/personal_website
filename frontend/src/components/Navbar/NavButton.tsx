import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'theme-ui';

interface NavButtonProps {
  href: string;
  label: string;
  variant?: string;
}

NavButton.defaultProps = {
  variant: 'nav',
};

function NavButton({ href, label, variant }: NavButtonProps) {
  const router = useRouter();
  const isSelected = router.pathname === href;

  return (
    <li style={{ height: '100%' }}>
      <Link href={href} passHref>
        <Button
          variant={variant}
          sx={{
            borderBottom: isSelected ? '4px solid' : 'none',
            '&:active': {
              borderBottom: '4px solid',
            },
          }}
        >
          {label}
        </Button>
      </Link>
    </li>
  );
}

export default NavButton;
