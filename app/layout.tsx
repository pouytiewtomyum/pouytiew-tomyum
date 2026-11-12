import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pouy Tiew Tom Yum | ก๋วยเตี๋ยวต้มยำโบราณ & โมเดิร์น ซีฟู้ด รสแซ่บ",
  description:
    "สัมผัสความเข้มข้น จัดจ้าน หอมมะนาวแท้ ถั่วลิสงคั่วใหม่ กับก๋วยเตี๋ยวต้มยำสูตรต้นตำรับ พรีเมียมซีฟู้ด และเมนูฟิวชั่นสุดสร้างสรรค์",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <body className="min-h-screen bg-[#FFFDF9] text-zinc-900 font-sans antialiased selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
