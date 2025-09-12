import { memo } from "react";
function Text() {
  console.log(`Text re-render`);

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi
        quibusdam voluptas, doloribus voluptates autem veniam dolorem quasi
        porro vero harum libero rem ut sunt placeat eius molestias veritatis!
        Blanditiis.
      </p>
    </div>
  );
}
export default memo(Text);

//memo --> Ngăn hành động re-render không cần thiết
// Chỉ re-render khi props thay đổi hoặc lần đầu tiên
