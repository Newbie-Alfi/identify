import { CSSProperties } from "react";

interface ILoaderProps {
  children?: React.ReactNode;
  style?: CSSProperties;
}

export function Loader({ style, children = <>Loading...</> }: ILoaderProps) {
  return (
    <div style={style} className="full-size center">
      {children}
    </div>
  );
}
