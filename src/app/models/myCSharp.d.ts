export {};

declare global {
    interface Window { dotnet: Dotnet; }
}

interface Dotnet {
    boot: () => {},
    Maths: Maths;
}

interface Maths {
    FormCalcs: (x: number, y: number) => number
}