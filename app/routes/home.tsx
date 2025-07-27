import type { Route } from "../+types/root";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Trang chủ | App Việt" },
    { name: "description", content: "Trang chủ của App Việt" },
    {
      property: "og:image",
      content:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", // hình ảnh test
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
