import Link from 'next/link';

interface NavButtonProps {
  href: string;
  label: string;
}

function NavButton({ href, label }: NavButtonProps) {
  return (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  );
}

export default NavButton;
