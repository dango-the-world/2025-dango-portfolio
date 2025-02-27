import { MainBackground } from "@/components/background/MainBackground";
import { Box } from "@yamada-ui/layouts";
import { Image } from "@yamada-ui/image";
import { Text } from "@yamada-ui/typography";
import React from "react";

const products = [
  {
    id: 1,
    image: "recallmate.png",
    title: "RecallMate",
    description:
      "ハッカソンの作品として作成。単語帳のような、学習をサポートするアプリ。忘却曲線に沿って学習の周期を通知する。",
  },

  {
    id: 2,
    image: "zen.png",
    title: "禅",
    description:
      "ハッカソンの作品として作成。「人のストレスを解消するSNS」をテーマに作成。ストレスを感じていることを投稿し、それに対して解決策をリプライで提示する。タイムラインでは、「ストレスを感じていること」と「解決策」を切り替えることができる。",
  },
  {
    id: 3,
    image: "science3dlabo.png",
    title: "サイエンス3Dラボ",
    description:
      "ハッカソンの作品として作成。元素同士を組み合わせ、Web上で科学反応を起こす。選択した元素に酔って化学反応が異なる。技育CAMPハッカソンVol.21にて、最優秀賞を受賞。",
  },
];

export const ProductsSection = () => {
  return (
    <MainBackground>
      <Box h={"200vh"}>
        <Text
          textAlign={"center"}
          fontSize={"3rem"}
          lineHeight={"4rem"}
          p={"20px"}
        >
          PRODUCTS
        </Text>
        <Box>
          {products.map((item) => (
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"end"}
              gap={"50px"}
              key={item.id}
            >
              <Image
                alt={item.title}
                src={item.image}
                border={"10px solid #DC4D03"}
                borderRadius={"50%"}
              />
              <Box
                w={"500px"}
                borderRadius={"20px"}
                padding={"20px"}
                mb={"40px"}
                backgroundColor={"#FFFFFF"}
              >
                <Text fontSize={"2rem"} fontWeight={"bold"} lineHeight={"3rem"}>
                  {item.title}
                </Text>
                <Text>{item.description}</Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </MainBackground>
  );
};
