import { Box } from "@yamada-ui/layouts";
import { Image } from "@yamada-ui/image";
import React from "react";

export const Footer = () => {
  return (
    <Box
      w={"100%"}
      background={"#DC4D03"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Image alt="" src="logo.png" w={"200px"} />
    </Box>
  );
};
