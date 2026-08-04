import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { signUp } from "../../apis";
import FormField from "../../common/FormField";
import PrimaryButton from "../../common/PrimaryButton";
import { AlertIcon } from "../../common/icons";
import { fields } from "./data";

function Form() {
  const navigate = useNavigate();
  const [errorLog, setErrorLog] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    setErrorLog("");
    try {
      await signUp(data.email, data.password, data.name);
      alert('恭喜成功註冊，歡迎加入');
      navigate("/");
    } catch (error) {
      setErrorLog(error.response?.data?.message || "發生錯誤，請稍後再試");
    }
  };

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
          建立帳號
        </PrimaryButton>
      </form>

      <div className="flex items-center gap-2 text-[13px] opacity-70">
        已經有帳號了？
        <Link
          to="/"
          className="font-heading inline-flex h-8 items-center rounded-card px-2.5 text-sm font-semibold tracking-[0.02em] text-accent-700 hover:bg-accent-100 active:bg-accent-200"
        >
          登入
        </Link>
      </div>
    </>
  );
}

export default Form;
