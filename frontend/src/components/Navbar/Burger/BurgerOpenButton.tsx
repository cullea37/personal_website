import { Button, useThemeUI } from 'theme-ui';
import { useSelector, useDispatch } from 'react-redux';
import { toggleBurgerMenu } from '@src/redux/burgerSlice';
import { RootState } from '@src/redux/store';

function BurgerOpenButton() {
  const dispatch = useDispatch();
  const toggled = useSelector((state: RootState) => state.burger.toggled);
  const hoverColor = useThemeUI().theme.colors.primary as string;

  const handleToggle = () => {
    dispatch(toggleBurgerMenu());
  };

  return (
    <Button
      variant="navIcon"
      sx={{
        borderRadius: '0px',
        stroke: hoverColor,
        height: '60px',
        width: '60px',
      }}
      onClick={handleToggle}
    >
      <svg width="60" height="60" viewBox="0 0 100 100">
        <path
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331
            94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942
            75.000211,74.999942 L 25.000021,25.000058"
          style={{
            fill: 'none',
            strokeWidth: '10',
            transition:
              'stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)',
            strokeDasharray: toggled ? '90 207' : '60 207',
            strokeDashoffset: toggled ? -134 : undefined,
          }}
        />
        <path
          d="M 20,50 H 80"
          style={{
            fill: 'none',
            strokeWidth: '10',
            transition:
              'stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)',
            strokeDasharray: toggled ? '1 60' : '60 60',
            strokeDashoffset: toggled ? -30 : undefined,
          }}
        />
        <path
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669
            94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058
            75.000211,25.000058 L 25.000021,74.999942"
          style={{
            fill: 'none',
            strokeWidth: '10',
            transition:
              'stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)',
            strokeDasharray: toggled ? '90 207' : '60 207',
            strokeDashoffset: toggled ? -134 : undefined,
          }}
        />
      </svg>
    </Button>
  );
}

export default BurgerOpenButton;
