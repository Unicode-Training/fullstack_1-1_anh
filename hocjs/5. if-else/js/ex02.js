let action = "destroy";
switch (action) {
  case "create":
  case "add":
  case "insert":
    console.log("Thêm");
    break;

  case "update":
  case "edit":
    console.log("Sửa");
    break;

  case "delete":
  case "remove":
  case "destroy":
    console.log("Xóa");
    break;

  default:
    console.log("Không hợp lệ");
    break;
}

if (action === "create" || action === "add" || action === "insert") {
  console.log("Thêm");
} else if (action === "update" || action === "edit") {
  console.log("Sửa");
} else if (action === "delete" || action === "remove" || action === "destroy") {
  console.log("Xóa");
} else {
  console.log("Không hợp lệ");
}
