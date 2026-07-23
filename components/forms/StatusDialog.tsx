"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { CheckCircle2, XCircle, X } from "lucide-react";
import { PrimaryButton } from "@/components/ui";

export interface StatusDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  variant?: "success" | "error";
  actionLabel?: string;
}

export function StatusDialog({
  open,
  onOpenChange,
  title,
  description,
  variant = "success",
  actionLabel = "Close",
}: StatusDialogProps) {
  const Icon = variant === "success" ? CheckCircle2 : XCircle;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-brand-dark/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(100%,24rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card p-6 shadow-xl outline-none">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <Icon
                className={
                  variant === "success"
                    ? "h-6 w-6 text-success"
                    : "h-6 w-6 text-destructive"
                }
                aria-hidden="true"
              />
              <div>
                <Dialog.Title className="heading-font text-lg font-semibold text-foreground">
                  {title}
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-sm text-muted-foreground">
                  {description}
                </Dialog.Description>
              </div>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
                aria-label="Close dialog"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>
          <div className="mt-6 flex justify-end">
            <Dialog.Close asChild>
              <PrimaryButton type="button">{actionLabel}</PrimaryButton>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function SuccessDialog(props: Omit<StatusDialogProps, "variant">) {
  return <StatusDialog {...props} variant="success" />;
}

export function ErrorDialog(props: Omit<StatusDialogProps, "variant">) {
  return <StatusDialog {...props} variant="error" />;
}
