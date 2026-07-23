import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { cn } from "@/utils";

export interface FieldWrapperProps {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

export function FieldWrapper({
  id,
  label,
  error,
  hint,
  required,
  children,
  className,
}: FieldWrapperProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={id} className="block text-sm font-semibold text-foreground">
        {label}
        {required ? (
          <span className="text-destructive" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children}
      {hint && !error ? (
        <p id={`${id}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-xs font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const controlClassName =
  "h-12 w-full rounded-xl border border-border bg-card px-4 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-60";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  function FormInput(
    { id, label, error, hint, required, className, name, ...props },
    ref,
  ) {
    const inputId = id || name || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <FieldWrapper
        id={inputId}
        label={label}
        error={error}
        hint={hint}
        required={required}
      >
        <input
          id={inputId}
          name={name}
          ref={ref}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
          }
          className={cn(controlClassName, Boolean(error) && "border-destructive focus:border-destructive focus:ring-destructive/20", className)}
          {...props}
        />
      </FieldWrapper>
    );
  },
);

export interface FormTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  hint?: string;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  function FormTextarea(
    { id, label, error, hint, required, className, name, ...props },
    ref,
  ) {
    const inputId = id || name || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <FieldWrapper
        id={inputId}
        label={label}
        error={error}
        hint={hint}
        required={required}
      >
        <textarea
          id={inputId}
          name={name}
          ref={ref}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
          }
          className={cn(
            "min-h-32 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-60",
            Boolean(error) && "border-destructive focus:border-destructive focus:ring-destructive/20",
            className,
          )}
          {...props}
        />
      </FieldWrapper>
    );
  },
);

export interface FormSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  hint?: string;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  function FormSelect(
    {
      id,
      label,
      error,
      hint,
      required,
      options,
      placeholder = "Select an option",
      className,
      name,
      ...props
    },
    ref,
  ) {
    const inputId = id || name || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <FieldWrapper
        id={inputId}
        label={label}
        error={error}
        hint={hint}
        required={required}
      >
        <select
          id={inputId}
          name={name}
          ref={ref}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
          }
          className={cn(controlClassName, Boolean(error) && "border-destructive focus:border-destructive focus:ring-destructive/20", className)}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </FieldWrapper>
    );
  },
);

export interface FormUploadProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  error?: string;
  hint?: string;
  fileName?: string;
}

export const FormUpload = forwardRef<HTMLInputElement, FormUploadProps>(
  function FormUpload(
    { id, label, error, hint, required, fileName, className, name, ...props },
    ref,
  ) {
    const inputId = id || name || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <FieldWrapper
        id={inputId}
        label={label}
        error={error}
        hint={hint}
        required={required}
      >
        <input
          id={inputId}
          name={name}
          ref={ref}
          type="file"
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
          }
          className={cn(
            "block w-full text-sm text-muted-foreground file:mr-4 file:rounded-xl file:border-0 file:bg-accent file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white hover:file:bg-accent-dark cursor-pointer",
            className,
          )}
          {...props}
        />
        {fileName ? (
          <p className="text-xs text-muted-foreground">Selected: {fileName}</p>
        ) : null}
      </FieldWrapper>
    );
  },
);
