// Generics(ジェネリックス)<T>でfetchを実行（大文字ならアルファベットは特に意味ないらしい）
export const fetchData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('response error');
    }
    return await response.json() as T;
};