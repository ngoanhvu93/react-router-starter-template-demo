import About from "~/about/about";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Giới thiệu | App Việt" },
    { name: "description", content: "Giới thiệu về App Việt" },
    {
      property: "og:image",
      content:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", // hình ảnh test
    },
  ];
}

const AboutRoute = () => {
  return <About />;
};

export default AboutRoute;
