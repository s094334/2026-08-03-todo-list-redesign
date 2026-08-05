import AuthLayout from "../../common/AuthLayout";
import Form from "./Form";

function Register() {
  return (
    <section id="signUpPage">
      <AuthLayout title="建立帳號">
        <Form />
      </AuthLayout>
    </section>
  );
}

export default Register;
