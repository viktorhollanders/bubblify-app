import { cva } from "class-variance-authority";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "accept"
    | "warn"
    | "action"
    | "inactive"
    | "ghost";
  size?: "sm" | "md" | "lg" | "round" | "icon";
}

const button = cva("rounded-full cursor-pointer transition", {
  variants: {
    variant: {
      primary:
        "bg-brand-primary hover:bg-brand-secondary text-brand-gray-900 font-bold",
      secondary: "bg-gray-200",
      accept:
        "bg-brand-accept-primary hover:bg-brand-accept-secondary text-white",
      warn: "bg-brand-warn-primary hover:bg-brand-warn-secondary text-white",
      action:
        "bg-brand-action-primary hover:bg-brand-action-secondary text-white",
      inactive: "bg-brand-grey-500 text-brand-gray-900 font-bold",
      ghost: "bg-transparent",
    },
    size: {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-2 text-lg",
      round: "rounded-full w-10 h-10 flex justify-center items-center p-0",
      icon: "flex justify-center items-center",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export function Button({
  variant,
  size,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ variant, size }) + " " + className} {...props}>
      {children}
    </button>
  );
}
