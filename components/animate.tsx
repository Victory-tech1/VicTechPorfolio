"use client"

import { motion, MotionProps } from "framer-motion"

type AnimateProps = MotionProps & {
  as?: keyof JSX.IntrinsicElements
  className?: string
  children: React.ReactNode
}

export default function Animate({
  as = "div",
  children,
  className,
  ...motionProps
}: AnimateProps) {
  const MotionComponent = motion[as as keyof typeof motion]

  return (
    <MotionComponent className={className} {...motionProps}>
      {children}
    </MotionComponent>
  )
}