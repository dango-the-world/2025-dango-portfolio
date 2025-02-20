import { HeroBackground } from "@/components/background/HeroBackground";
import { Box } from "@yamada-ui/layouts";
import { Image } from "@yamada-ui/image";
import React from "react";

export const HeroSection = () => {
  return (
    <HeroBackground>
      <Box
        h={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image alt="ロゴ" src="logo.png" w={"600px"} />
      </Box>
    </HeroBackground>
  );
};
