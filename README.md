# Movie Web 2024

Đây là một dự án giao diện người dùng cho một trang web xem phim, được xây dựng bằng các công nghệ web hiện đại. Ứng dụng cho phép người dùng khám phá, tìm kiếm và xem thông tin chi tiết về các bộ phim khác nhau.

## ✨ Tính năng

-   **Khám phá phim:** Xem các danh sách phim thịnh hành, phim có đánh giá cao và phim sắp ra mắt.
-   **Tìm kiếm:** Chức năng tìm kiếm phim theo tên.
-   **Xem chi tiết:** Xem thông tin chi tiết của một bộ phim, bao gồm tóm tắt, diễn viên, đánh giá và trailer.
-   **Giao diện responsive:** Tương thích tốt trên nhiều kích thước màn hình khác nhau.
-   **Giao diện người dùng hiện đại:** Thiết kế sạch sẽ và trực quan, được xây dựng với Tailwind CSS và Shadcn UI.

## 🚀 Công nghệ sử dụng

-   **Framework:** [React](https://react.dev/)
-   **Ngôn ngữ:** [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
-   **Runtime/Package Manager:** [Bun](https://bun.sh/)
-   **Linting:** [ESLint](https://eslint.org/)

## 📦 Hướng dẫn cài đặt

Để chạy dự án này trên máy cục bộ của bạn, hãy làm theo các bước sau.

### Yêu cầu

-   [Bun](https://bun.sh/docs/installation) được cài đặt trên hệ thống của bạn.

### Các bước cài đặt

1.  **Clone repository:**
    ```bash
    git clone https://github.com/your-username/movie-web-2024.git
    cd movie-web-2024
    ```

2.  **Cài đặt các dependencies:**
    ```bash
    bun install
    ```

3.  **Cấu hình biến môi trường:**
    Tạo một file `.env` ở thư mục gốc của dự án và thêm các biến môi trường cần thiết. Ví dụ:
    ```env
    VITE_API_KEY=your_movie_db_api_key
    ```

4.  **Chạy ứng dụng:**
    ```bash
    bun dev
    ```
    Mở trình duyệt và truy cập `http://localhost:5173` (hoặc cổng khác nếu được chỉ định).

## 📜 Các lệnh có sẵn

-   `bun dev`: Chạy ứng dụng ở chế độ development.
-   `bun build`: Build ứng dụng cho môi trường production.
-   `bun lint`: Chạy ESLint để kiểm tra lỗi code.
-   `bun preview`: Xem trước bản build production.

## 📁 Cấu trúc thư mục

```
/
├── public/             # Chứa các tài sản tĩnh
├── src/
│   ├── apis/           # Các hàm gọi API
│   ├── assets/         # Hình ảnh, icon, svg
│   ├── components/     # Các component React tái sử dụng
│   ├── containers/     # Các component trang chính (Home, Detail, etc.)
│   ├── context/        # React Context
│   ├── data/           # Dữ liệu tĩnh (mock data)
│   ├── interface/      # Các định nghĩa interface TypeScript
│   ├── lib/            # Các hàm tiện ích
│   └── ...
├── .gitignore
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🤝 Đóng góp

Chào mừng các đóng góp! Nếu bạn muốn đóng góp cho dự án, vui lòng fork repository và tạo một Pull Request.

1.  Fork a project
2.  Tạo branch tính năng của bạn (`git checkout -b feature/AmazingFeature`)
3.  Commit các thay đổi của bạn (`git commit -m 'Add some AmazingFeature'`)
4.  Push lên branch (`git push origin feature/AmazingFeature`)
5.  Mở một Pull Request

## 📄 Bản quyền

Dự án này được cấp phép theo Giấy phép MIT.