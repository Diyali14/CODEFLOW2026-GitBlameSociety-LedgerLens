import { uploadStatementApi } from "../api/uploadApi";

export const uploadStatement = async (
    file,
    onUploadProgress
) => {

    return await uploadStatementApi(
        file,
        onUploadProgress
    );
};