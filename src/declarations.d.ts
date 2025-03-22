declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: React.FunctionComponent<React.SVGProps<HTMLDivElement>>;
  export default src;
}
