import React, { FC } from "react";

import Logo1 from "@/src/assets/logo1.svg"

export const iconTypes: any = {
    logo1: Logo1,
  } as const;
export type IconName = keyof typeof iconTypes;

interface IIconProps {
    name: IconName;
    stroke?: string;
    strokeWidth?: string;
    fill?: string;
    width?: string;
    height?: string;
}
// const Icon: FC<IIconProps> = ({ name, ...props }) => {
//     let Icon: any = iconTypes[name];
//     return <Icon {...props} css={{ cursor: "pointer" }} />;
// };

export default Icon;