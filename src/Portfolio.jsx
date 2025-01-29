import React from "react";
import { Box, Text, VStack, HStack, Button, Link, Image } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export function Portfolio() {
  const projects = [
    // {
    //     title: "OpenTrellis Internship",
    //     description:
    //       "Worked on implementing various wireframes hand-designed, one of which is below.",
    //     github: "http://opentrellis.ai/",
    //     imageUrl: "./opentrellis.png", 
    //   },
    {
      title: "Space Travel",
      description: "Developed and designed website for a website competition. The goal was a space website for a theoretical space company.",
      github: "https://github.com/Jinneo",
      videoUrl: "https://www.youtube.com/embed/pJMVHqbi2jk?si=RG_6dHceKIbYTvtU",
    },
    
    {
      title: "OIRA",
      description: "Worked on creating a prototype chatbot for refugees in my area to use.",
      github: "https://github.com/Jinneo",
      videoUrl: "https://www.youtube.com/embed/t0jTR847oms?si=Vs6DgQgYvnHh6G2T",
    },
  ];

  return (
    <Box
      bg="#213555"
      color="#F5EFE7"
      minHeight="100vh"
      py={[4, 8]} // Responsive padding
      px={[4, 8, 12]} // Responsive padding
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Text fontSize={['2xl', '3xl', '4xl']} fontWeight="bold" mb={[4, 6]}>
        My Projects
      </Text>
      <Text fontSize={['md', 'lg']} mb={[4, 8]}>
        Currently interning at{" "}
        <Link
          href="https://www.orcana.ai/"
          target="_blank"
          color="#D8C4B6"
          _hover={{ textDecoration: "underline" }}
        >
          Orcana.AI ↗
        </Link>
        , working on full-stack development and data analytics.
      </Text>
      <HStack
        spacing={[4, 6, 8]} // Spacing between project cards
        wrap="wrap" // Allows wrapping on smaller screens
        justify="center"
        alignItems="center"
        width="100%"
      >
        {projects.map((project, index) => (
          <Box
            key={index}
            bg="#3E5879"
            p={[4, 6, 8]} // Responsive padding
            rounded="lg"
            boxShadow="md"
            textAlign="center"
            width={['100%', '45%', '30%']} // Responsive width
            maxWidth="400px"
          >
            <Text fontSize={['lg', 'xl', '2xl']} fontWeight="bold">
              {project.title}
            </Text>
            <Text mt={2} fontSize={['sm', 'md']}>
              {project.description}
            </Text>
            <Box mt={4} width="100%" height="200px">
              {project.imageUrl ? (
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} image`}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  
                />
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src={project.videoUrl}
                  title={`${project.title} video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </Box>
            <HStack spacing={4} mt={4} justify="center">
              <Button
                as="a"
                href={project.github}
                leftIcon={<FaGithub />}
                bg="#D8C4B6"
                color="#213555"
                _hover={{ bg: "#F5EFE7" }}
              >
                GitHub/Link to Project
              </Button>
            </HStack>
          </Box>
        ))}
      </HStack>
    </Box>
  );
}
