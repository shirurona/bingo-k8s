// Generics(ジェネリックス)<T>でfetchを実行（大文字ならアルファベットは特に意味ないらしい）
// import.meta.env.BASE_URL で Vite の base 設定（/bingo/）を自動付与
export const fetchData = async <T>(url: string): Promise<T> => {
    const response = await fetch(`${import.meta.env.BASE_URL}${url.replace(/^\//, "")}`);
    if (!response.ok) {
        throw new Error('response error');
    }
    return await response.json() as T;
};