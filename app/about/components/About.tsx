import { TopAppBar } from "~/components/TopAppBar";
import { useNavigate } from "react-router";
import { BottomAppBar } from "~/components/BottomAppBar";
import { Button } from "@mui/material";

const About = () => {
  const navigate = useNavigate();
  const features = [
    {
      title: "Vì Cộng Đồng",
      description:
        "Ứng dụng được xây dựng với tâm huyết mang đến trải nghiệm tốt nhất cho người Việt.",
      icon: "👥",
      color: "primary",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      title: "Văn Hóa Việt",
      description:
        "Kết nối và lan tỏa những giá trị văn hóa Việt Nam truyền thống tới thế hệ mới.",
      icon: "🇻🇳",
      color: "error",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      title: "Thiết Kế Tinh Tế",
      description:
        "Giao diện được thiết kế tỉ mỉ, tối ưu trải nghiệm người dùng trên mọi thiết bị.",
      icon: "❤️",
      color: "secondary",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      title: "Hướng Dẫn Chi Tiết",
      description:
        "Hệ thống hướng dẫn đầy đủ, giúp người dùng dễ dàng làm quen với các tính năng.",
      icon: "📚",
      color: "success",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <TopAppBar onBack={() => navigate(-1)} title="Về Chúng Tôi" />

      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        {/* Hero Section */}
        <div className={`text-center mb-8 sm:mb-12`}>
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight"
            aria-label="Tiêu đề chào mừng"
          >
            Chào Mừng Bạn
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Ứng dụng Việt - được tạo ra bởi người Việt, vì người Việt và cho
            người Việt
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-12 sm:mb-16">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-white`}
          >
            Tính Năng Nổi Bật
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer`}
                role="button"
                tabIndex={0}
                aria-label={`Tính năng ${feature.title}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col gap-4 sm:gap-6">
                  <div className="flex items-start">
                    <div
                      className="size-16 sm:size-20 rounded-2xl flex items-center justify-center text-4xl sm:text-5xl shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: feature.gradient,
                        boxShadow: `0 10px 30px ${
                          feature.gradient
                            .split(",")[0]
                            .split("(")[1]
                            .split(" ")[0]
                        }40`,
                      }}
                      aria-hidden="true"
                    >
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl rounded-full"></div>
            <div
              className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10`}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">
                Bắt Đầu Hành Trình
              </h3>
              <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4">
                Khám phá những tính năng tuyệt vời và trải nghiệm ứng dụng Việt
                ngay hôm nay
              </p>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/")}
                aria-label="Khám phá ứng dụng ngay"
                className="capitalize"
              >
                Khám Phá Ngay
              </Button>
            </div>
          </div>
        </div>
      </div>

      <BottomAppBar />
    </div>
  );
};

export default About;
