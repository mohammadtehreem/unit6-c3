import { Box, Flex, Link, Spacer, Button } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Box bg="white" boxShadow="md">
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          padding="1.5rem"
          bg="teal.500"
          color="white"
        >
          <Box>
            <Link
              as={RouterLink}
              to="/"
              fontSize="lg"
              fontWeight="bold"
              color="white"
            >
              Home
            </Link>
          </Box>

          <Spacer />

          <Box>
            <Link
              as={RouterLink}
              to="/login"
              marginRight="1.5rem"
              fontSize="lg"
              fontWeight="bold"
              color="white"
            >
              Login
            </Link>
            <Button
              as={RouterLink}
              to="/register"
              colorScheme="purple"
              variant="solid"
              size="md"
            >
              Register
            </Button>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};
