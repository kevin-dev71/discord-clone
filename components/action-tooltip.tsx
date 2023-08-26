"use client"

import { Tooltip, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import { TooltipTrigger } from "@radix-ui/react-tooltip"

interface ActionTooltipProps extends React.ComponentPropsWithoutRef<"div"> {
  label: string
  side?: "left" | "right" | "top" | "bottom"
  align?: "start" | "center" | "end"
}

const ActionTooltip = ({ label, side, align, children }: ActionTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <p className="text-sm font-semibold capitalize">{label.toLowerCase()}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default ActionTooltip
