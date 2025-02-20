import { Box } from "@yamada-ui/layouts";
import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

export const MainBackground: React.FC<ChildrenProps> = ({ children }) => {
  return <Box backgroundImage={"url(background01.png)"}>{children}</Box>;
};
