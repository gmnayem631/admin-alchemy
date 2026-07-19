import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthTabs = () => {
  return (
    <Tabs defaultValue="login" className="w-100">
      <TabsList className={"grid w-full grid-cols-2"}>
        <TabsTrigger value="login">LOGIN</TabsTrigger>
        <TabsTrigger value="register">REGISTER</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm />
      </TabsContent>
      <TabsContent value="register">
        <RegisterForm />
      </TabsContent>
    </Tabs>
  );
};

export default AuthTabs;
