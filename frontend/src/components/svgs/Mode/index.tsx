/** @jsxImportSource theme-ui */
import { useState } from 'react';
import { Button, useThemeUI } from 'theme-ui';
import dynamic from 'next/dynamic';

const Light = dynamic(() => import('@src/components/svgs/Mode/Light'));
const Dark = dynamic(() => import('@src/components/svgs/Mode/Dark'));

interface ModeProps {
  bodyColor?: string;
  hoverColor?: string;
  ModeType: string;
}

Mode.defaultProps = {
  bodyColor: 'primary',
  hoverColor: 'secondary',
};

const modeComponents = {
  Light,
  Dark,
};

function Mode({ ModeType, bodyColor, hoverColor }: ModeProps): JSX.Element {
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

  const ModeComponent = modeComponents[
    ModeType
  ] as React.ComponentType<ModeProps>;

  return (
    <Button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variant="navIcon"
    >
      <ModeComponent
        ModeType={ModeType}
        bodyColor={isHovered ? finalHoverColor : finalBodyColor}
      />
    </Button>
  );
}

export default Mode;
