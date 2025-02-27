import { MainBackground } from "@/components/background/MainBackground";
import { Box } from "@yamada-ui/layouts";
import { Image } from "@yamada-ui/image";
import { Text } from "@yamada-ui/typography";
import React from "react";

export const SkillsSection = () => (
  <MainBackground>
    <Box
      h={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Text fontSize={"3rem"} lineHeight={"4rem"} p={"20px"}>
        SKILLS
      </Text>
      <Box display={"flex"}>
        <Box
          w={"300px"}
          backgroundColor={"#fff"}
          rounded={"50%"}
          border={"10px solid #DC4D03"}
        >
          <Image alt="ロゴ" w={"100%"} src="next-logo.png" />
        </Box>

        <Box
          w={"300px"}
          backgroundColor={"#fff"}
          rounded={"50%"}
          border={"10px solid #DC4D03"}
        >
          <Image alt="ロゴ" w={"100%"} src="ts-logo.png" />
        </Box>

        <Box
          w={"300px"}
          backgroundColor={"#fff"}
          rounded={"50%"}
          border={"10px solid #DC4D03"}
        >
          <Image alt="ロゴ" w={"100%"} src="vue-logo.png" />
        </Box>
      </Box>
    </Box>
  </MainBackground>
);
