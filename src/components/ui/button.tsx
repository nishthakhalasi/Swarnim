import * as React from "react";

function Button({
  className = "",
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = "button";

  return <Comp data-slot="button" className={className} {...props} />;
}

export { Button };
