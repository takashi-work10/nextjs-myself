import axios from 'axios';

// axios インスタンスを作成
const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '', // 必要に応じて環境変数からAPIのベースURLを取得
  timeout: 5000, // タイムアウト設定（ミリ秒）
});

// リクエスト前に認証トークンをヘッダーに付与（必要な場合のみ）
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// レスポンスのエラーハンドリング（必要な場合のみ）
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // エラー発生時の必要最小限の処理のみ実施
    return Promise.reject(error);
  }
);

export default axiosClient;
