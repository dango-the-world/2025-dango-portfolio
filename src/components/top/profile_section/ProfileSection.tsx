import { ProfileBackground } from "@/components/background/ProfileBackground";
import { Box } from "@yamada-ui/layouts";
import { Text } from "@yamada-ui/typography";
import { Image } from "@yamada-ui/image";
import React from "react";

export const ProfileSection = () => {
  return (
    <ProfileBackground>
      <Box height={"100vh"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
          gap={"50px"}
        >
          <Box w={"450px"} pt={"100px"}>
            <Text fontSize={"2rem"} fontWeight={"bold"} lineHeight={"3rem"}>
              Dango the World
            </Text>
            <Text fontSize={"1.1rem"} lineHeight={"2rem"}>
              プログラミング歴3年のくそざこエンジニア。Next.js勉強中。ハッカソンやエンジニア交流イベントでの目撃例が多数ある。
              音楽とグミとゲームで体が構成されている。口癖は、「WEBデザイン難しすぎる」。
            </Text>
          </Box>
          <Image
            alt="Dango the Image"
            src="dango_icon01.png"
            w={"400px"}
            borderRadius={"50%"}
          />
        </Box>
      </Box>
    </ProfileBackground>
  );
};
