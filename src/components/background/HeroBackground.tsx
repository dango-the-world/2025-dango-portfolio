import { Box } from "@yamada-ui/layouts";
import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

export const HeroBackground: React.FC<ChildrenProps> = ({ children }) => {
  return <Box backgroundImage={"url(background02.png)"}>{children}</Box>;
};
