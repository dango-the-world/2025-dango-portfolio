"use client";

import { HeroBackground } from "@/components/background/HeroBackground";
import { Box } from "@yamada-ui/layouts";
import { Image } from "@yamada-ui/image";
import { motion } from "framer-motion";
import React from "react";

export const HeroSection = () => {
  return (
    <HeroBackground>
      <Box h="100vh" display="flex" justifyContent="center" alignItems="center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Image alt="ロゴ" src="dtw_logo_new.png" w="600px" />
        </motion.div>
      </Box>
    </HeroBackground>
  );
};
