import About from "~/about/about";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Giới thiệu | App Việt" },
    { name: "description", content: "Giới thiệu về App Việt" },
    {
      property: "og:image",
      content:
        "https://media.istockphoto.com/id/2197198226/photo/wadi-rum.webp?a=1&s=612x612&w=0&k=20&c=U1x_4WBTpbM-dpv1nDnAFqOVqZwqyo4sfO_7rkcrLII=", // hình ảnh khác
    },
  ];
}

const AboutRoute = () => {
  return <About />;
};

export default AboutRoute;
