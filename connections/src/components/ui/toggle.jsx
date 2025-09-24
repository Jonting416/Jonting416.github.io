import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors lg:hover:bg-muted lg:hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[#65645a] data-[state=on]:text-[#f5f4ee]",
  {
    variants: {
      variant: {
        default: "bg-violet-500",
        outline:
          "border-hidden border border-input bg-[#cfcfc0] text-neutral-800 lg:hover:bg-accent lg:hover:text-accent-foreground",
      },
      size: {
        default: "h-20 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Toggle = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
);

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
