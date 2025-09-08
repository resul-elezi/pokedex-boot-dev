import readline from "readline";

export function cleanInput(input: string): string[] {
    return input
        .trim()
        .split(/\s+/)
        .filter(Boolean);
}

export function startREPL() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });

    rl.prompt();

    rl.on("line", (line) => {
        const words = cleanInput(line);

        if (words.length === 0) {
            rl.prompt();
            return;
        }

        const firstWord = words[0].toLowerCase();
        console.log(`Your command was: ${firstWord}`);

        rl.prompt();
    });
}
