import api from "./api";

export const analyzeComplaint = async (formData) => {
  const response = await api.post(
    "/complaints/analyze",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};