import { Box } from "@yamada-ui/layouts";
import { Text } from "@yamada-ui/typography";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <Box
      w={"100%"}
      background={"#DC4D03"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Link href={"https://x.com/dangorithm"}>
        <FontAwesomeIcon
          icon={faXTwitter}
          style={{ margin: "20px", width: "40px", height: "40px" }}
        />
      </Link>
      <Text pb={"20px"}>&copy;Dango the World</Text>
    </Box>
  );
};
