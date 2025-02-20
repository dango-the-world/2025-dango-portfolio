"use client";

import { Box, VStack } from "@yamada-ui/layouts";
import Link from "next/link";

const Navigation = () => {
  return (
    <Box
      position="fixed"
      bottom="40px"
      left="10px"
      height="200px"
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
        <Link href="/profile" style={{ fontSize: "lg", fontWeight: "bold" }}>
          Profile
        </Link>
        <Link href="/products" style={{ fontSize: "lg", fontWeight: "bold" }}>
          Products
        </Link>
        <Link href="/skills" style={{ fontSize: "lg", fontWeight: "bold" }}>
          Skills
        </Link>
      </VStack>
    </Box>
  );
};

export default Navigation;
