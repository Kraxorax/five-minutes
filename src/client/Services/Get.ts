export default async function Get(
    url: string,
    headers: Record<string, string> = {}
): Promise<any> {
    try {
        const response: Response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...headers
            },
        });
        return response.json();
    } catch (e) {
        throw new Error(e as string);
    }
}
