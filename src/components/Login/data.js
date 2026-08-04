export const fields = [
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
    required: "請輸入密碼"
  },
]

export const subTitle = "使用你的工作電子郵件繼續。"
