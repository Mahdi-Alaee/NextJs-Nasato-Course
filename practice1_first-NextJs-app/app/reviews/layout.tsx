import type { ReactNode } from "react";

interface ReviewsLayoutProps {
  children: ReactNode;
}

export default function ReviewsLayout({ children }: ReviewsLayoutProps) {
  return (
    <div style={{ display: "flex", gap: '20px', padding: '10px 0' }}>
      {/* side bar */}
      <div style={{border: '1px solid red', width: '20%'}}>
        side bar
      </div>
      {/* content */}
      <div>{children}</div>
    </div>
  );
}
