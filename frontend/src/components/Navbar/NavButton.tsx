import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'theme-ui';

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
          variant="nav"
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
