import { MainBackground } from "@/components/background/MainBackground";
import { Box } from "@yamada-ui/layouts";
import { Image } from "@yamada-ui/image";
import React from "react";

export const SkillsSection = () => {
  return (
    <MainBackground>
      <Box
        h={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box display={"flex"}>
          <Box w={"300px"} backgroundColor={"#fff"} rounded={"50%"}>
            <Image alt="ロゴ" w={"100%"} src="next-logo.png" />
          </Box>

          <Box w={"300px"} backgroundColor={"#fff"} rounded={"50%"}>
            <Image alt="ロゴ" w={"100%"} src="ts-logo.png" />
          </Box>

          <Box w={"300px"} backgroundColor={"#fff"} rounded={"50%"}>
            <Image alt="ロゴ" w={"100%"} src="vue-logo.png" />
          </Box>
        </Box>
      </Box>
    </MainBackground>
  );
};
