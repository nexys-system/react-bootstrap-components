import React from "react";

export interface LayoutProps {
  title?: string;
  subtitle?: string;
}

const Layout = ({
  title,
  subtitle,
  children,
}: LayoutProps & { children: any }) => (
  <div className="card">
    <div className="card-body">
      {title && <h5 className="card-title">{title}</h5>}
      {subtitle && (
        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
      )}
      {children}
    </div>
  </div>
);

export default Layout;
