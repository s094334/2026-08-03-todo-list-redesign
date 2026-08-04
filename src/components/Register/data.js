export const fields = [
  {
    label: "姓名",
    name: "name",
    type: "text",
    placeholder: "陳可安",
    required: "請輸入您的暱稱"
  },
  {
    label: "電子郵件",
    name: "email",
    type: "email",
    placeholder: "you@studio.co",
    required: "請輸入 email",
    rules: {
      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "請輸入正確的 email 格式" }
    }
  },
  {
    label: "密碼",
    name: "password",
    type: "password",
    placeholder: "至少 8 個字元",
    required: "請輸入密碼",
    rules: {
      minLength: { value: 6, message: "密碼至少需要 6 個字元" }
    }
  },
  {
    label: "確認密碼",
    name: "password2",
    type: "password",
    placeholder: "再輸入一次",
    required: "請再次輸入密碼",
    rules: {
      minLength: { value: 6, message: "密碼至少需要 6 個字元" },
      validate: (value, { password }) =>
        value === password || "再次輸入的密碼不符",
    }
  },
]

export const subTitle = "註冊帳號"
