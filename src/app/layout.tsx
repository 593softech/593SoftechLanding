import "@/assets/styles/globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { styleToast } from "@/components/toast/toast";
import { APP_DOMAIN } from "@/config/config";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";

const robots: string = "index, follow";

// Asegúrate de que todas las propiedades sean strings
export const metadata: Metadata = {
  robots,
  title: "593softech", // Asegúrate de que sea un string
  description:
    "Soluciones tecnológicas a medida y servicios de hacking ético, desde el centro del mundo, mejorando la seguridad de informática.", // Asegúrate de que sea un string
  keywords:
    "desarrollo de software, hacking ético, ciberseguridad, soluciones de software, auditoría de seguridad, Ecuador, formación en hacking, consultoría en seguridad, Quito, ciencia de datos, java, python, javascript, google, gcp, cloud, nube, amazon, azure, microsoft",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <meta name="robots" content={robots} />
        <meta name="description" content={metadata.description || ""} />
        <meta
          name="keywords"
          content={metadata.keywords?.toString() || ""}
        />
        <meta property="og:image" content="/LogoIcono.png" />
        <meta property="og:url" content={APP_DOMAIN} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/LogoIcono.png" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover"
        />
        <link rel="apple-touch-icon" href="/LogoIcono.png" />
        <link rel="icon" type="image/png" href="/LogoIcono.png" />
        <title>{metadata.title?.toString()}</title>
      </head>
      <body className="bg-bunker-600">
        <Toaster toastOptions={styleToast} />
        <div className="sticky top-0 z-20">
          <Header />
        </div>
        <main className="">{children}</main>
        <Footer />
        <script
          src="//code.tidio.co/cy6ty3qv1w8uwqh0fpkzaad2wkuo6okq.js"
          async
        ></script>
      </body>
    </html>
  );
}
