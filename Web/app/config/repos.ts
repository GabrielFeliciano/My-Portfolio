const repos_urls_short: string[] = [
    'my-portfolio',
    'STM32-Joystick-for-Racing-game',
    'Discord-TerminalJS',
    'FIPE-Table-prices',
    'Virtual-Dice-Bluepill'
];

export const ShortTobaseUrl = (p: string) => `https://api.github.com/repos/gabrielfeliciano/${p}`;

export const repos_urls = repos_urls_short.map(ShortTobaseUrl);

export default repos_urls;