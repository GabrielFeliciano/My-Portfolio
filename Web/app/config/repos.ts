const repos_urls_short: string[] = [
    'typestack/class-validator',
    'gabrielfeliciano/my-portfolio'
];

export const ShortTobaseUrl = (p: string) => `https://api.github.com/repos/${p}`;

export const repos_urls = repos_urls_short.map(ShortTobaseUrl);

export default repos_urls;