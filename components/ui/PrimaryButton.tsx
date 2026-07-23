import * as React from "react";
import { Button, type ButtonProps } from "./button";

export type PrimaryButtonProps = Omit<ButtonProps, "variant">;

export const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  (props, ref) => <Button ref={ref} variant="primary" {...props} />,
);

PrimaryButton.displayName = "PrimaryButton";
