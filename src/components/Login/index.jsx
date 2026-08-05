import AuthLayout from "../../common/AuthLayout";
import SignIn from "./SignIn";
import { subTitle } from "./data";

function Login() {
  return (
    <section id="loginPage">
      <AuthLayout title="登入" subtitle={subTitle}>
        <SignIn />
      </AuthLayout>
    </section>
  );
}

export default Login;
