import React, { FC } from "react";

import DsrLogo from "@/src/assets/DsrLogo.svg";

export const iconTypes: any = {
  DsrLogo: DsrLogo,
} as const;
export type IconName = keyof typeof iconTypes;

interface IIconProps {
  name: IconName;
  stroke?: string;
  strokeWidth?: string;
  fill?: string;
  width?: string;
  height?: string;
  [key: string]: any;
}
const Icon: FC<IIconProps> = ({ name, ...props }) => {
  let Icon: any = iconTypes[name];
  return <Icon {...props} css={{ cursor: "pointer" }} />;
};

export default Icon;
