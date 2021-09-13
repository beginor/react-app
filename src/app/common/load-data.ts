export async function loadData<T = any>(url: string): Promise<T> {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`error: ${res.status} ${res.statusText}`);
    }
    return await res.json() as T;
}
