import { Link, useNavigate } from "react-router-dom";
import { getAccessToken } from "@/lib/services/auths/login.ts";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@/components/ui";

interface HookFormTypes {
  email: string;
  password: string;
}

export default function LoginCard() {
  const { register, handleSubmit, reset } = useForm<HookFormTypes>();
  const navigator = useNavigate();

  const onValid = async (data: HookFormTypes) => {
    try {
      const access_token = await getAccessToken(data);
      localStorage.setItem("access_token", access_token);
      navigator("/");
    } catch (e) {
      alert("올바른 아이디 및 비밀번호가 아닙니다.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>
          <form id="login-form" method="post" onSubmit={handleSubmit(onValid)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  {...register("email", {
                    required: true,
                  })}
                  type="email"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                  name="password"
                  type="password"
                />
              </div>
              <Link
                className="flex flex-col space-y-1.5"
                to="http://localhost:10010/auths/kakao/authorize"
              >
                <Button className="bg-amber-300 text-black" type="button">
                  KakaoTalk
                </Button>
              </Link>
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => {
                    reset();
                  }}
                  type="button"
                >
                  Cancel
                </Button>
                <Button variant="default" type="submit">
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
