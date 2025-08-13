"use client";

import React, { PropsWithChildren, MouseEventHandler, FocusEventHandler } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface PrefetchOnHoverLinkProps extends Omit<LinkProps, "prefetch"> {
  /**
   * Whether to prefetch on hover/focus. Defaults to true.
   */
  prefetchOnHover?: boolean;
}

/**
 * A Next.js Link that disables automatic prefetch,
 * and only prefetches when hovered or focused.
 */
export function PrefetchOnHoverLink({
  href,
  children,
  className,
  prefetchOnHover = true,
  ...linkProps
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  const router = useRouter();

  // Only prefetch once per mount
  const prefetchRef = React.useRef(false);

  const handlePrefetch: MouseEventHandler<HTMLAnchorElement> & FocusEventHandler<HTMLAnchorElement> =
    (e) => {
      if (prefetchOnHover && !prefetchRef.current) {
        try {
          router.prefetch(href.toString());
        } catch {
          /* ignore errors */
        }
        prefetchRef.current = true;
      }
    };

  return (
    <Link
      href={href}
      className={className}
      prefetch={false}            // disable automatic idle prefetch
      onMouseEnter={handlePrefetch}
      onFocus={handlePrefetch}
      {...linkProps}
    >
      {children}
    </Link>
  );
}

