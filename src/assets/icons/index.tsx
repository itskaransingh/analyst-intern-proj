const ArrowSVG = ({ fs }: { fs?: string }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      fontSize={fs ?? '25'}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M15.5 5H11l5 7-5 7h4.5l5-7z"></path>
      <path d="M8.5 5H4l5 7-5 7h4.5l5-7z"></path>
    </svg>
  );
};


export {ArrowSVG}