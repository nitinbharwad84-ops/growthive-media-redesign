import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Slot renders its single child element and merges the slot's own props
 * onto it. It is the minimal `asChild` implementation used by `Button`, so
 * a link can be styled as a button without nesting a <button> inside an
 * <a> (invalid interactive nesting).
 */
export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, className, ...props }, ref) => {
    const child = React.Children.only(children) as React.ReactElement<
      Record<string, unknown>
    >;

    const childProps = (child.props ?? {}) as Record<string, unknown>;

    const merged = {
      ...props,
      ...childProps,
      className: cn(className as string, childProps.className as string),
      ref,
    } as Partial<Record<string, unknown>> & React.Attributes;

    return React.cloneElement(child, merged);
  }
);

Slot.displayName = "Slot";
