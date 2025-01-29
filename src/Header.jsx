import React from "react";
import { Box, Flex, Button, HStack } from "@chakra-ui/react";

export function Header() {
  return (
    <Box as="header" bg="#213555" color="#F5EFE7" px={4} py={2}>
      <Flex
        // Switch to column on smaller screens, row on md+
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Logo / Brand */}
        <Button
          as="a"
          href="/praveenwebsite/"
          variant="ghost"
          _hover={{ bg: "#2a446d" }}
          fontSize={{ base: "lg", md: "2xl" }}
          fontWeight="bold"
          color="#F5EFE7"
          px={2}
          mb={{ base: 2, md: 0 }} // Add a little space on mobile
        >
          Praveen Vadlamani
        </Button>

        {/* Navigation Links */}
        <HStack
          as="nav"
          spacing={4}
          // On mobile, push them to the left (or center).
          // On md+, they're already side by side in a row.
        >
          <Button
            as="a"
            href="/praveenwebsite/"
            color="#F5EFE7"
            variant="link"
            fontSize="lg"
          >
            Home
          </Button>
          <Button
            as="a"
            href="/praveenwebsite/#/portfolio"
            color="#F5EFE7"
            variant="link"
            fontSize="lg"
          >
            Portfolio
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
