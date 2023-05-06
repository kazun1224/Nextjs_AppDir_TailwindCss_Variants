import type { Config } from "tailwindcss";
import { withTV } from "tailwind-variants/transformer";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;

// レスポンシブ バリアントを使用する場合withTVで囲む
export default withTV(config);
