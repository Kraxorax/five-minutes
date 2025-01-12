export default async function Put(
    url: string,
    body: Record<string, string>,
    headers: Record<string, string> = {}
): Promise<any> {
    try {
        const response: Response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...headers
            },
            body: JSON.stringify(body)
        });
        return response.json();
    } catch (e) {
        throw new Error(e as string);
    }
}
