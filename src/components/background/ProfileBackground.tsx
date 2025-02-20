import { Box } from "@yamada-ui/layouts";
import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

export const ProfileBackground: React.FC<ChildrenProps> = ({ children }) => {
  return <Box backgroundImage={"url(background03.png)"}>{children}</Box>;
};
