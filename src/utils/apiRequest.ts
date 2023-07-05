import axios, { AxiosResponse, Method } from "axios";

export type ApiResponseVariant = "success" | "error";

interface ApiResponse {
  variant: ApiResponseVariant;
  data?: any;
  error?: any;
}

export const apiRequest = async (
  method: Method,
  data?: object
): Promise<ApiResponse> => {
  const fullUrl = `https://fe-task-api.mainstack.io/`;
  try {
    const response: AxiosResponse = await axios({ url: fullUrl, method, data });
    const variant =
      response.status >= 200 && response.status < 300
        ? ("success" as ApiResponseVariant)
        : ("error" as ApiResponseVariant);
    const apiResponse: ApiResponse = { variant, data: response.data };
    return apiResponse;
  } catch (error: unknown) {
    const variant = "error" as ApiResponseVariant;
    const apiResponse: ApiResponse = { variant, error: error };
    return apiResponse;
  }
};
