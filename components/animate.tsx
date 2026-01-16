"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimateProps<T extends ElementType = "div"> = MotionProps & {
  as?: T;
  className?: string;
  children?: ReactNode;
};

export default function Animate<T extends ElementType = "div">(
  props: AnimateProps<T>
) {
  const {
    as,
    className,
    children,
    ...motionProps
  } = props;

  const Component = as ? motion(as) : motion.div;

  return (
    <Component className={cn(className)} {...motionProps}>
      {children}
    </Component>
  );
}
