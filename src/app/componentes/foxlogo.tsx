"use client";
import { useEffect, useRef } from "react";
import type { NextPage } from "next";
// @ts-ignore

import createMetamaskLogo from "@metamask/logo";

interface FoxlogoProp{
    className?:string;
}


const FoxLogo: NextPage<FoxlogoProp> = ({className}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewer = createMetamaskLogo({
      pxNotRatio: true,
      width: 300,
      height: 300,
      followMouse: true,
      slowDrift: false,
    });

    if (ref.current) {
      ref.current.appendChild(viewer.container);
    }

    return () => {
      viewer.stopAnimation();
      if (ref.current && viewer.container.parentElement === ref.current) {
        ref.current.removeChild(viewer.container);
      }
    };
  }, []);

  return <div ref={ref} className={className}/>;
};

export default FoxLogo;
