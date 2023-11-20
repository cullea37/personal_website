import NavIcon from '@components/svgs/NavIcon';

interface NavIconButtonProps {
  href: string;
  NavIconType: string;
}

function NavIconButton({ href, NavIconType }: NavIconButtonProps) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={NavIconType}
      >
        <NavIcon NavIconType={NavIconType} />
      </a>
    </li>
  );
}

export default NavIconButton;
