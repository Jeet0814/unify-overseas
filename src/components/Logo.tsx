import logoImg from "@/assets/logo.jpeg";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = 44,
  label = "Unify Overseas",
}: {
  className?: string;
  size?: number;
  label?: string;
}) {
  return (
    <img
      src={logoImg}
      alt={label}
      width={size}
      height={size}
      className={cn("rounded-xl object-contain", className)}
      style={{ width: size, height: size }}
    />
  );
}
