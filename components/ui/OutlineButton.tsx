import * as React from "react";
import { Button, type ButtonProps } from "./button";

export type OutlineButtonProps = Omit<ButtonProps, "variant">;

export const OutlineButton = React.forwardRef<HTMLButtonElement, OutlineButtonProps>(
  (props, ref) => <Button ref={ref} variant="outline" {...props} />,
);

OutlineButton.displayName = "OutlineButton";
