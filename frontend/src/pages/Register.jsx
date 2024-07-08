import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const toast = useToast();
  const validationToast = () => [
    toast({
      title: "Fields Missing!",
      description: "Fill in all the fields to continue.",
      status: "error",
      duration: 4000,
      isClosable: true,
    }),
  ];

  const registeredToast = () => {
    toast({
      title: "Success!",
      description: "User registered successfully!",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  const failToast = () => {
    toast({
      title: "Try to Login!",
      description: "Failed to Register, please try again!",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = () => {
    if (!email || !password || !username) {
      validationToast();
    }
  };
  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
    >
      <Box
        w={{ base: "90%", md: "400px" }}
        p={8}
        bg="white"
        boxShadow="lg"
        borderRadius="md"
      >
        <VStack spacing={4}>
          <Heading as="h1" size="lg" mb={6}>
            Login
          </Heading>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" onChange={(e) => handleEmail(e)} />
          </FormControl>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input type="text" onChange={(e) => handleUsername(e)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={(e) => handlePassword(e)} />
          </FormControl>
          <Button colorScheme="teal" w="full" mt={4} onClick={handleSubmit}>
            Login
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};
