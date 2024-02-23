import { IconEyeCloseOutline, IconEyeOutline } from "@/assets/index";
import { ErrorMessage } from "@/components/form";
import { RegisterValidation } from "@/interfaces/auth";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { isEmpty } from "@chakra-ui/utils";
import { useRouter } from "next/navigation";
import type { FC } from "react";
import { useState } from "react";
import NextLink from "next/link";
import { MdArrowBack } from "react-icons/md";
import { Link } from "@/components/link";
const Register: FC = () => {
  const toast = useToast();
  const router = useRouter();
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [type, setType] = useState("1");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState<RegisterValidation>();

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    // doLogin();
  };
  const onChangeCapctcha = (value: string | null) => {
    setCaptchaValue(value);
  };

  return (
    <>
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        gap={0}
        px={{ base: 3, md: 0 }}
        pb={{ base: 5, md: 0 }}
      >
        <Stack
          p={{ base: "0 0 260px", md: 8 }}
          mx={{ base: -3, md: 0 }}
          flex={1}
          gap={0}
          background={"url('/images/bg-auth.png') no-repeat, #ec7e73"}
          backgroundPosition={{ base: "bottom", md: "center" }}
          backgroundSize={"cover"}
        >
          <Stack mt={{ base: "56px", md: 20 }} gap={0}>
            <Flex
              gap={2}
              color={"white"}
              textStyle={"h2"}
              px={{ base: 7, md: 8 }}
              py={{ base: 1, md: 2 }}
              border={"3px solid white"}
              borderRadius={100}
              width={"fit-content"}
              mx="auto"
              mt={{ base: 0, md: 6 }}
            >
              {/* <Image src={"/images/logo.png"} width={40} height={40} alt="" /> */}
              <Center>
                <Text>Apatel Indonesia</Text>
              </Center>
            </Flex>
          </Stack>
        </Stack>
        <Stack
          w={"full"}
          p={{ base: 3, md: 8 }}
          flex={1}
          mt={{ base: -20, md: 20 }}
          borderRadius={{ base: 8, md: 0 }}
          background="white"
          gap={0}
        >
          <Center mb={{ base: 2, md: 4 }}>
            <Image src={"/images/full-logo.png"} alt="Logo" />
          </Center>
          <Text as={"h2"} textStyle={"h3"} mb={{ base: 4, md: 8 }} display="flex" justifyContent="center">
            Register di&nbsp;
            <Text color={"primary.500"}>Apatel Indonesia</Text>
          </Text>
          <Stack gap={5} w={"full"}>
            <FormControl isInvalid={!isEmpty(formErrors?.name)}>
              <FormLabel>Full Name</FormLabel>
              <InputGroup>
                <Input
                  type={"text"}
                  placeholder={"Enter your full name"}
                  onChange={e => setName(e.currentTarget.value)}
                  onKeyDown={handleEnter}
                />
              </InputGroup>
              {!isEmpty(formErrors?.name) && <ErrorMessage text={formErrors?.name.message} />}
            </FormControl>
            <FormControl isInvalid={!isEmpty(formErrors?.email)}>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <Input
                  type={"email"}
                  placeholder={"Enter your email"}
                  onChange={e => setEmail(e.currentTarget.value)}
                  onKeyDown={handleEnter}
                />
              </InputGroup>
              {!isEmpty(formErrors?.email) && <ErrorMessage text={formErrors?.email.message} />}
            </FormControl>
            <FormControl isInvalid={!isEmpty(formErrors?.phone)}>
              <FormLabel>Phone Number</FormLabel>
              <InputGroup>
                <Input
                  type={"text"}
                  placeholder={"Enter your phone number"}
                  onChange={e => setPhone(e.currentTarget.value)}
                  onKeyDown={handleEnter}
                />
              </InputGroup>
              {!isEmpty(formErrors?.phone) && <ErrorMessage text={formErrors?.phone.message} />}
            </FormControl>
            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={6}>
              <FormControl isInvalid={!isEmpty(formErrors?.password)}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan kata sandi anda"
                    onChange={e => setPassword(e.currentTarget.value)}
                    onKeyDown={handleEnter}
                  />
                  <InputRightElement onClick={() => setShowPassword(!showPassword)} cursor="pointer">
                    {showPassword ? <IconEyeCloseOutline color="#26334D" /> : <IconEyeOutline color="#26334D" />}
                  </InputRightElement>
                </InputGroup>
                {!isEmpty(formErrors?.password) && <ErrorMessage text={formErrors?.password.message} />}
              </FormControl>
              <FormControl isInvalid={!isEmpty(formErrors?.passwordConfirm)}>
                <FormLabel>Password Confirmation</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan kata sandi anda"
                    onChange={e => setPasswordConfirm(e.currentTarget.value)}
                    onKeyDown={handleEnter}
                  />
                  <InputRightElement onClick={() => setShowPassword(!showPassword)} cursor="pointer">
                    {showPassword ? <IconEyeCloseOutline color="#26334D" /> : <IconEyeOutline color="#26334D" />}
                  </InputRightElement>
                </InputGroup>
                {!isEmpty(formErrors?.passwordConfirm) && <ErrorMessage text={formErrors?.passwordConfirm.message} />}
              </FormControl>
            </Grid>
            <FormLabel>Register As:</FormLabel>
            <RadioGroup onChange={setType} value={type}>
              <Stack direction="row">
                <Radio value="1">Guest</Radio>
                <Radio value="2">Owner</Radio>
                <Radio value="3">Agent</Radio>
              </Stack>
            </RadioGroup>
          </Stack>
          <Stack gap={4} mt={{ base: 4, md: 8 }} align="center">
            <Stack w={"full"} gap={2}>
              <Button w={"full"}>Sign Up</Button>
              <HStack gap={2} justifyContent={"center"}>
                <Text textStyle={"p"}>Already have an account?&nbsp;</Text>
                <Text textStyle={"p"} fontWeight={700} textDecor="underline" color="primary.500">
                  <Link href="/login">Sign In</Link>
                </Text>
              </HStack>

              <Link href="/">
                <Box display="flex" alignItems={"center"} gap={2}>
                  <MdArrowBack />
                  Back to home
                </Box>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Register;
