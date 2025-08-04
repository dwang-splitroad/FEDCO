import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Text
} from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

export const Route = createFileRoute("/_layout/small-biz-updates")({
  component: SmallBizUpdatesPage,
});

function SmallBizUpdatesPage() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  const onSubmit = () => {
    // No backend integration, just reset form and show alert
    reset();
    alert("Thank you for signing up! You'll receive updates soon.");
  };

  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Box maxW="2xl" bg="gray.50" p={{ base: 6, md: 12 }} mx="auto">
        <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#e07a22" fontWeight="bold" textAlign="center" mb={2}>
          SIGN UP
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
  );
} 