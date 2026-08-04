import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import { signIn } from "../../apis";
import FormField from "../../common/FormField";
import PrimaryButton from "../../common/PrimaryButton";
import { AlertIcon, CheckIcon } from "../../common/icons";
import { fields } from "./data";

function SignIn() {
  const navigate = useNavigate();
  const justRegistered = useLocation().state?.registered;
  const [errorLog, setErrorLog] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    setErrorLog("");
    try {
      const result = await signIn(data.email, data.password);
      localStorage.setItem("nickname", result.nickname);
      localStorage.setItem("token", result.token);
      navigate("/todolist");
    } catch (error) {
      setErrorLog(error.response?.data?.message || "發生錯誤，請稍後再試");
    }
  };

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {justRegistered && (
          <p className="flex items-center gap-1.5 rounded-card border border-accent-600 bg-accent-100 px-3 py-2 text-xs text-accent-800">
            <CheckIcon size={13} />
            恭喜成功註冊，歡迎加入 —— 請登入。
          </p>
        )}

        {fields.map((field) => (
          <FormField key={field.name} {...field} register={register} errors={errors} />
        ))}

        {errorLog && (
          <p className="flex items-center gap-1.5 rounded-card border border-danger-600 bg-danger-100 px-3 py-2 text-xs text-danger-700">
            <AlertIcon size={13} />
            {errorLog}
          </p>
        )}

        <PrimaryButton type="submit" className="w-full" disabled={isSubmitting}>
          登入
        </PrimaryButton>
      </form>

      <div className="flex items-center gap-2 text-[13px] opacity-70">
        還沒有帳號？
        <Link
          to="/register"
          className="font-heading inline-flex h-8 items-center rounded-card px-2.5 text-sm font-semibold tracking-[0.02em] text-accent-700 hover:bg-accent-100 active:bg-accent-200"
        >
          建立帳號
        </Link>
      </div>
    </>
  );
}

export default SignIn;
