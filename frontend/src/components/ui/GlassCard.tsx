import React from "react";

interface GlassCardProps {
  children?: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl shadow-purple-500/20 rounded-xl ${className}`}
    >
      {children}
    </div>
  );
}

export function GlassCardHeader({ children, className = "" }: GlassCardProps) {
  return (
    <div className={`border-b border-white/20 ${className} p-4`}>
      {children}
    </div>
  );
}

export function GlassCardContent({ children, className = "" }: GlassCardProps) {
  return <div className={`${className} p-4`}>{children}</div>;
}

export function GlassCardFooter({ children, className = "" }: GlassCardProps) {
  return (
    <div className={` border-t border-white/20 text-sm text-gray-200 ${className} p-4`}>
      {children}
    </div>
  );
}
