import * as React from "react";
import { Button, type ButtonProps } from "./button";

export type SecondaryButtonProps = Omit<ButtonProps, "variant">;

export const SecondaryButton = React.forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  (props, ref) => <Button ref={ref} variant="secondary" {...props} />,
);

SecondaryButton.displayName = "SecondaryButton";
