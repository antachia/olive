"use client";
import { ReactLenis, useLenis } from 'lenis/react'

function SmoothScrolling({ children }: React.PropsWithChildren<{}>) {
  const lenis = useLenis()
  return (
    <ReactLenis root options={{ duration: 2 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;