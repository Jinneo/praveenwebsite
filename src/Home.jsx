import React from "react";
import { Box, Text, VStack, HStack, Button } from "@chakra-ui/react";

export function Home() {
  return (
    <Box
      bg="#213555"
      color="#F5EFE7"
      height="calc(100vh)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <VStack spacing={4}>
        <Text fontSize="5xl" fontWeight="bold">| Praveen Vadlamani |</Text>
        <Text fontSize="xl" fontWeight="medium">
          Full-Stack Developer | UC Berkeley | Data Science
        </Text>
        <HStack spacing={4} mt={4}>
          <Button as="a" href="/portfolio" bg="#D8C4B6" color="#213555" variant="solid" _hover={{ bg: "#F5EFE7" }}>Portfolio</Button>
          <Button
  as="a"
  href="https://drive.google.com/file/d/1oy_Ou4ir4d4zmcgTbd2V5ZQO1JDqFzPt/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  bg="#D8C4B6"
  color="#213555"
  variant="solid"
  _hover={{ bg: "#F5EFE7" }}
>
  Resume ↗
</Button>
        </HStack>
      </VStack>
    </Box>
  );
}
