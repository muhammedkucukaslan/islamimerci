const prodConfig = {
  apiUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
};

const devConfig = {
  apiUrl: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000",
};

export const urlConfig =
  process.env.NODE_ENV === "production" ? prodConfig : devConfig;
