# BEEIT Contact Link

Trang liên kết cá nhân cho BEEIT, dùng để mở nhanh Zalo hoặc Telegram từ một đường link duy nhất.

## Thông tin đã cấu hình

- Zalo: `https://zalo.me/0978900397`
- Telegram: `https://t.me/BbeeIT`
- Mã QR: mở trang BEEIT trên GitHub Pages để người quét tiếp tục chọn kênh liên hệ.
- Logo: `assets/logo.png` là hình ảnh do chủ tài khoản cung cấp.

## Chạy xem trước

Đây là website tĩnh, không cần cài framework. Có thể chạy local bằng Python:

```bash
python3 -m http.server 3000
```

Sau đó mở `http://localhost:3000`.

## Triển khai GitHub Pages

1. Đưa toàn bộ nội dung repository này vào `cyberpunk-crypto/website-booking`.
2. Trong GitHub, mở **Settings → Pages**.
3. Ở **Build and deployment**, chọn **Deploy from a branch**, branch `main`, thư mục `/ (root)`.
4. Lưu cấu hình và chờ GitHub Pages cấp địa chỉ:
   `https://cyberpunk-crypto.github.io/website-booking/`
5. Nếu repository đang dùng workflow riêng, có thể triển khai thư mục gốc bằng `actions/deploy-pages` hoặc giữ cách publish branch đã chọn.

File `.nojekyll` được giữ trong repository để GitHub Pages phục vụ tài sản tĩnh mà không qua xử lý Jekyll.

## Bật thống kê lượt truy cập và lượt bấm

GitHub Pages chỉ phục vụ file tĩnh nên không tự lưu bộ đếm tập trung. Mã nguồn đã chuẩn bị hook GA4, gồm:

- `page_view`: lượt xem trang.
- `zalo_click`: lượt bấm nút Zalo.
- `telegram_click`: lượt bấm nút Telegram.

Để bật thống kê toàn cục, lấy **Measurement ID** của một Web data stream trong Google Analytics 4, có dạng `G-XXXXXXXXXX`, rồi mở `index.html` và thay:

```js
window.BEEIT_ANALYTICS_ID = "";
```

bằng:

```js
window.BEEIT_ANALYTICS_ID = "G-XXXXXXXXXX";
```

Không đưa API secret hoặc thông tin đăng nhập vào mã nguồn. Nếu chưa điền Measurement ID, website vẫn hoạt động bình thường nhưng các sự kiện chỉ được bỏ qua (không gửi dữ liệu).

## Cấu trúc chính

```text
index.html       Giao diện và nội dung trang
styles.css       Hệ thống màu, layout, responsive và animation
script.js        GA4 tùy chọn + sự kiện click
assets/logo.png  Logo người dùng cung cấp
assets/qr-contact.png  Mã QR mở trang liên hệ
public/manus-routes.json  Khai báo route cho Preview
```
