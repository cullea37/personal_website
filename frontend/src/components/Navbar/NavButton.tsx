import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'theme-ui';

interface NavButtonProps {
  href: string;
  label: string;
  variant?: string;
  closeMenuOnClick?: () => void;
}

NavButton.defaultProps = {
  variant: 'nav',
  closeMenuOnClick: null,
};

function NavButton({ href, label, variant, closeMenuOnClick }: NavButtonProps) {
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
          onClick={closeMenuOnClick}
        >
          {label}
        </Button>
      </Link>
    </li>
  );
}

export default NavButton;
