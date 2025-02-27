"use client";

import { Box, VStack } from "@yamada-ui/layouts";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      position="fixed"
      bottom="40px"
      left="10px"
      height="250px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={4}
      bg="white"
      shadow="md"
      borderRadius="lg"
    >
      <VStack
        textAlign="center"
        sx={{
          writingMode: "vertical-rl",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <button
          onClick={() => scrollToSection("profile")}
          style={{
            fontSize: "lg",
            fontWeight: "bold",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          Profile
        </button>
        <button
          onClick={() => scrollToSection("products")}
          style={{
            fontSize: "lg",
            fontWeight: "bold",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          Products
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          style={{
            fontSize: "lg",
            fontWeight: "bold",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          Skills
        </button>
      </VStack>
    </Box>
  );
};

export default Navigation;
