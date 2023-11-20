/** @jsxImportSource theme-ui */
import { useState } from 'react';
import { Button, useThemeUI } from 'theme-ui';
import dynamic from 'next/dynamic';

const Github = dynamic(() => import('@src/components/svgs/NavIcon/Github'));
const Linkedin = dynamic(() => import('@src/components/svgs/NavIcon/Linkedin'));

interface NavIconProps {
  NavIconType: string;
  bodyColor?: string;
  hoverColor?: string;
}

NavIcon.defaultProps = {
  bodyColor: 'primary',
  hoverColor: 'secondary',
};

const navIconComponents = {
  Github,
  Linkedin,
};

function NavIcon({
  NavIconType,
  bodyColor,
  hoverColor,
}: NavIconProps): JSX.Element {
  const context = useThemeUI();
  const finalBodyColor = context.theme.colors[bodyColor] as string;
  const finalHoverColor = context.theme.colors[hoverColor] as string;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const NavIconComponent = navIconComponents[
    NavIconType
  ] as React.ComponentType<NavIconProps>;

  return (
    <Button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variant="navIcon"
    >
      <NavIconComponent
        NavIconType={NavIconType}
        bodyColor={isHovered ? finalHoverColor : finalBodyColor}
      />
    </Button>
  );
}

export default NavIcon;
