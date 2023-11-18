import { useThemeUI } from 'theme-ui';
import dynamic from 'next/dynamic';

const Solid = dynamic(() => import('@src/components/svgs/Logo/Solid'));
const SolidLong = dynamic(() => import('@src/components/svgs/Logo/SolidLong'));
const Transparent = dynamic(
  () => import('@src/components/svgs/Logo/Transparent'),
);
const TransparentLong = dynamic(
  () => import('@src/components/svgs/Logo/TransparentLong'),
);
const Small = dynamic(() => import('@components/svgs/Logo/Small'));

interface LogoProps {
  width?: string;
  height?: string;
  bodyColor?: string;
  backgroundColor?: string;
  LogoType: string;
}

Logo.defaultProps = {
  width: null,
  height: null,
  bodyColor: 'primary',
  backgroundColor: 'background',
};

const logoComponents = {
  Solid,
  SolidLong,
  Transparent,
  TransparentLong,
  Small,
};

function Logo({
  LogoType,
  width,
  height,
  bodyColor,
  backgroundColor,
}: LogoProps): JSX.Element {
  const context = useThemeUI();
  const finalBodyColor = context.theme.colors[bodyColor] as string;
  const finalBackgroundColor = context.theme.colors[backgroundColor] as string;

  const LogoComponent = logoComponents[
    LogoType
  ] as React.ComponentType<LogoProps>;

  return (
    <LogoComponent
      LogoType={LogoType}
      width={width}
      height={height}
      bodyColor={finalBodyColor}
      backgroundColor={finalBackgroundColor}
    />
  );
}

export default Logo;
