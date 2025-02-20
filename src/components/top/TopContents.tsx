import { Box } from "@yamada-ui/layouts";
import React from "react";
import { HeroSection } from "./hero_section/HeroSection";
import { ProfileSection } from "./profile_section/ProfileSection";
import { ProductsSection } from "./products_section/ProductsSection";
import { SkillsSection } from "./skills_section/SkillsSection";

export const TopContents = () => {
  return (
    <Box>
      <HeroSection />
      <ProfileSection />
      <ProductsSection />
      <SkillsSection />
    </Box>
  );
};
