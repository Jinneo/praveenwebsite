import React from "react";
import { Box, Text, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <Box
      as="footer"
      bg="#213555"
      color="#F5EFE7"
      py={4}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={8}
      mt="auto"
    >
      <Text fontSize="sm">© 2025 Praveen Vadlamani. All rights reserved.</Text>
      <HStack spacing={4}>
        <a href="https://github.com/Jinneo" target="_blank" rel="noopener noreferrer" style={{ color: "#F5EFE7" }}>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/praveen-vadlamani-1810a9216/" target="_blank" rel="noopener noreferrer" style={{ color: "#F5EFE7" }}>
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/praveenv21/" target="_blank" rel="noopener noreferrer" style={{ color: "#F5EFE7" }}>
          <FaInstagram />
        </a>
      </HStack>
      <Text fontSize="sm">
        <a href="mailto:pvadl352@berkeley.edu" style={{ color: "#F5EFE7" }}>pvadl352@berkeley.edu</a>
      </Text>
    </Box>
  );
}
