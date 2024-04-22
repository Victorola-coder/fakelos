import clsx from "clsx";

const SMALL_CONTAINER = "w-8 h-8";
// const SMALL_CHILD = "w-[50%] h-4";
// const SMALL_PSEUDO = "before:w-4 before:h-4 after:w-4 after:h-4";

const MEDIUM = "w-12 h-12";
// const MEDIUM_CHILD = "w-6 h-6";
// const MEDIUM_PSEUDO = "before:w-6 before:h-6 after:w-6 after:h-6";

const LARGE = "w-16 h-16";
// const LARGE_CHILD = "w-8 h-8";
// const LARGE_PSEUDO = "before:w-8 before:h-8 after:w-8 after:h-8";

const PRIMARY_PSEUDO = "before:bg-primary after:bg-primary";
const BODY_PSEUDO = "before:bg-body after:bg-body";

export default function Spinner({
  color,
  size,
  className,
}: {
  color?: string;
  size?: "small" | "medium" | "large";
  className?: string;
}) {
  let spinSize;
  let childSize;
  switch (size) {
    case "small":
      spinSize = `${SMALL_CONTAINER} ${"SMALL_PSEUDO"}`;
      // childSize = SMALL_CHILD;
      break;

    case "medium":
      spinSize = `${MEDIUM} ${"MEDIUM_PSEUDO"}`;
      // childSize = MEDIUM_CHILD;
      break;

    case "large":
      spinSize = `${LARGE} ${"LARGE_PSEUDO"}`;
      // childSize = LARGE_CHILD;
      break;

    default:
      spinSize = `${MEDIUM} ${"MEDIUM_PSEUDO"}`;
      // childSize = MEDIUM_CHILD;
      break;
  }

  let spinColor;
  let childColor;
  switch (color) {
    case "primary":
      spinColor = `${PRIMARY_PSEUDO}`;
      childColor = "bg-primary";
      break;

    case "body":
      spinColor = `${BODY_PSEUDO}`;
      childColor = "bg-body";

      break;

    default:
      spinColor = `${PRIMARY_PSEUDO}`;
      childColor = "bg-primary";
      break;
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className={clsx(
          "z-10 mx-auto animate-spin flex justify-center before:absolute before:rounded-full before:-bottom-0 before:-left-[0.1rem] after:absolute after:rounded-full after:-bottom-0 after:-right-[0.1rem] before:w-[50%] before:h-[50%] after:w-[50%] after:h-[50%] before:bg-primary after:bg-primary w-8 h-8",
          className
        )}
      >
        <div
          className={`absolute -top-[0.1rem] rounded-full w-[50%] h-[50%] bg-primary`}
        />
      </div>
    </div>
  );
}
