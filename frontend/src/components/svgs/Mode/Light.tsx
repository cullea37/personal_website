interface ModeProps {
  bodyColor: string;
}

function Light({ bodyColor }: ModeProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill={bodyColor}
        d="M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0 2q-2.075 0-3.538-1.463T7 12q0-2.075 1.463-3.538T12 7q2.075 0 3.538 1.463T17 12q0 2.075-1.463 3.538T12 17Zm-7-4H1v-2h4v2Zm18 0h-4v-2h4v2ZM11 5V1h2v4h-2Zm0 18v-4h2v4h-2ZM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5l-1.3 1.4Zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425L18.7 20.15ZM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4l-1.4-1.3ZM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525L3.85 18.7ZM12 12Z"
      />
    </svg>
  );
}

export default Light;
