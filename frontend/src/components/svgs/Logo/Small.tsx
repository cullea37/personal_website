interface LogoProps {
  width?: string;
  height?: string;
  bodyColor: string;
}

Small.defaultProps = {
  width: null,
  height: null,
};

function Small({ width, height, bodyColor }: LogoProps): JSX.Element {
  return (
    <svg viewBox="0 0 281.25 258.75" height={height} width={width}>
      <g transform="matrix(5.625,0,0,5.625,-39.375,-50.625)" fill={bodyColor}>
        <g xmlns="http://www.w3.org/2000/svg">
          <path d="M56,9H8c-0.552,0-1,0.448-1,1v44c0,0.553,0.448,1,1,1h48c0.553,0,1-0.447,1-1V10C57,9.448,56.553,9,56,9z M30.707,32.707   l-10,10C20.512,42.902,20.256,43,20,43s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L28.586,32l-9.293-9.293   c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0l10,10C31.098,31.684,31.098,32.316,30.707,32.707z M44,43H34   c-0.553,0-1-0.447-1-1s0.447-1,1-1h10c0.553,0,1,0.447,1,1S44.553,43,44,43z" />
        </g>
      </g>
      <g transform="matrix(0.7,0,0,0.7,301,130)" fill={bodyColor}>
        <path d="" />
      </g>
    </svg>
  );
}

export default Small;
