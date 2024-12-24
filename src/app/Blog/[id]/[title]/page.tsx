import { getArticleById } from "@/services/service/ArticleService";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { API_URL_IMG, APP_DOMAIN, APP_NAME } from "@/config/config";
import { sanitizeTitle } from "@/utils/functions";
import ArticleClient from "./ArticleClient";

// Función para generar metadatos dinámicos
export async function generateMetadata({
  params,
}: {
  params: { id: string; title: string };
}): Promise<Metadata> {
  try {
    // Esperar a los parámetros antes de usarlos
    const { id, title } = await params; // Aquí está la corrección

    const article = await getArticleById(Number(id));
    if (!article) {
      return {
        title: "Artículo no encontrado",
        description: "El artículo solicitado no existe.",
      };
    }

    const articleImageUrl = `${API_URL_IMG}Article/${decodeURIComponent(article.portada)}`;

    return {
      title: `${article.title} - ${APP_NAME}`,
      description: article.description || "Descripción del artículo",
      openGraph: {
        title: article.title,
        description: article.description,
        url: `${APP_DOMAIN}/Blog/${article.idArticle}/${sanitizeTitle(article.title)}`,
        images: [
          {
            url: articleImageUrl,
            width: 800,
            height: 600,
            alt: article.title,
          },
        ],
      },
    };
  } catch {
    return {
      title: "Error al cargar los metadatos",
      description: "Hubo un problema al cargar los datos del artículo.",
    };
  }
}

// Componente de página del artículo
const ArticlePageContainer = async ({
  params,
}: {
  params: { id: string; title: string };
}) => {
  try {
    // Esperar a los parámetros antes de usarlos
    const { id, title } = await params; // Aquí está la corrección

    const decodedTitle = decodeURIComponent(title);
    const articleId = Number(id);

    if (isNaN(articleId)) {
      notFound();
      return null;
    }

    const article = await getArticleById(articleId);
    if (!article) {
      notFound();
      return null;
    }

    const sanitizedArticleTitle = article.title
      ? sanitizeTitle(article.title)
      : "";
    const sanitizedParamTitle = sanitizeTitle(decodedTitle);

    if (sanitizedArticleTitle !== sanitizedParamTitle) {
      notFound();
      return null;
    }

    // Pasar los datos del artículo al componente ArticlePage
    return <ArticleClient article={article} />;
  } catch {
    notFound();
  }
};

export default ArticlePageContainer;
