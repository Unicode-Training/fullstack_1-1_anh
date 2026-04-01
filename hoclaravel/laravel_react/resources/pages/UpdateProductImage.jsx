import { useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../libs/axios";
export default function UpdateProductImage() {
    const { id } = useParams();
    const [file, setFile] = useState("");
    const handleChooseFile = (e) => {
        setFile(e.target.files[0]);
    };
    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("image", file);
        const response = await instance.post(`/products/${id}/image`, formData);
        console.log(response);
    };
    return (
        <div>
            <h1 className="text-3xl">Đổi ảnh sản phẩm</h1>
            <input
                type="file"
                className="w-full border border-[#ddd] px-3 py-1 my-3"
                onChange={handleChooseFile}
            />
            <button
                className="inline-block px-10 py-1 bg-green-600 text-white rounded-full hover:bg-amber-900"
                onClick={handleUpload}
            >
                Đổi ảnh
            </button>
        </div>
    );
}
