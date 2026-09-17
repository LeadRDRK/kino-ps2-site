export function formatPostDate(value: any) {
    return new Date(value).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
}