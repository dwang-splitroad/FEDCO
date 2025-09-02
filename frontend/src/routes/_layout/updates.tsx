import { Box, Button, Container, Flex, Grid, GridItem, Heading, Input, Text } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

export const Route = createFileRoute("/_layout/updates")({
  component: UpdatesPage,
});

function UpdatesPage() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
  const onSubmit = () => {
    reset();
    alert("Thank you for signing up! You'll receive updates soon.");
  };

  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Container maxW="7xl" py={0}>
        <Flex direction={{ base: "column" }} align="center" justify="center">
          <Box flex={1} maxW="900px" w="100%" mx="auto">
            <Box bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 10 }}>
              <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#ffc107" fontWeight="bold" textAlign="center" mb={2}>
                Sign up for Updates
              </Heading>
              <Text color="gray.700" textAlign="center" mb={8}>
                Receive updates about the latest resources for small businesses.
              </Text>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Text fontWeight="bold" mb={1}>
                  Name <Text as="span" fontWeight="normal" fontSize="sm">(required)</Text>
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4} mb={4}>
                  <GridItem>
                    <Text fontSize="xs" mb={1}>First Name</Text>
                    <Input {...register("firstName", { required: true })} placeholder="First Name" />
                  </GridItem>
                  <GridItem>
                    <Text fontSize="xs" mb={1}>Last Name</Text>
                    <Input {...register("lastName", { required: true })} placeholder="Last Name" />
                  </GridItem>
                </Grid>
                <Text fontWeight="bold" mb={1}>
                  Email Address <Text as="span" fontWeight="normal" fontSize="sm">(required)</Text>
                </Text>
                <Input {...register("email", { required: true })} placeholder="Email Address" mb={4} />
                <Text fontWeight="bold" mb={1}>
                  Cell #
                </Text>
                <Input {...register("cell", { required: false })} placeholder="Cell #" mb={8} />
                <Flex justify="flex-start">
                  <Button type="submit" colorScheme="orange" size="lg" w="56" loading={isSubmitting} fontWeight="normal" letterSpacing={2}>
                    SIGN ME UP!
                  </Button>
                </Flex>
              </form>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
} 