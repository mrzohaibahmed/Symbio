import { companyInfo } from "@/constants";
import { formatAddress } from "@/utils";
import { cn } from "@/utils";

export interface ContactInfoProps {
  className?: string;
}

export function ContactInfo({ className }: ContactInfoProps) {
  return (
    <address
      className={cn(
        "not-italic rounded-xl border border-border bg-card p-6 text-sm shadow-sm",
        className,
      )}
    >
      <h3 className="heading-font text-lg font-semibold text-foreground">
        {companyInfo.name}
      </h3>
      <p className="mt-3 text-muted-foreground">
        {formatAddress(companyInfo.address)}
      </p>
      <p className="mt-2">
        <a
          href={`tel:${companyInfo.phone}`}
          className="font-medium text-primary hover:underline"
        >
          {companyInfo.phoneDisplay}
        </a>
      </p>
      <p className="mt-1">
        <a
          href={`mailto:${companyInfo.email}`}
          className="font-medium text-primary hover:underline"
        >
          {companyInfo.email}
        </a>
      </p>
    </address>
  );
}
