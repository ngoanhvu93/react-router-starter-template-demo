import Test from "~/test/test";
import type { Route } from "./+types/test";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Giới thiệu | App Việt" },
    { name: "description", content: "Giới thiệu về App Việt" },
  ];
}

const TestRoute = () => {
  return <Test />;
};

export default TestRoute;
