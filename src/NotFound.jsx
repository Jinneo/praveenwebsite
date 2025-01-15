import React from "react";
import { Box, Button, Heading, Text, Link } from "@chakra-ui/react";
export function NotFound() {
    return (
      <Box textAlign="center" p={8} bg="#213555" color="#F5EFE7" height={"100vh"} >
        <Heading>404 - Page Not Found</Heading>
        <Text mt={4}>
          Oops! The page you're looking for doesn't exist.
        </Text>
        
      </Box>
    );
  }
