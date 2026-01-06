# YaarScript VS Code Extension

## Features

✨ **Syntax Highlighting** - Full syntax highlighting support for YaarScript (.yaar) files with proper token coloring similar to C/C++

🎨 **File Icons** - Custom icon displayed next to .yaar files in the file explorer

⚡ **Language Support** - Complete language support including:
- Keywords: `yaar`, `number`, `faisla`, `khaali`, `qism`, `pakka`
- Control flow: `agar`, `warna`, `dohrao`, `karo`, `jabtak`, `intekhab`
- Built-in functions: `bolo()`, `suno()`, `waqt()`, `ittifaq()`
- Constants: `sahi`, `galat`, `RED`, `GREEN`, `BLUE`
- Operators: `+`, `-`, `*`, `/`, `**` (exponentiation), `%`, `==`, `!=`, `<`, `>`, `<=`, `>=`, `&&`, `||`, `!`

## Installation

1. Clone or download this extension
2. Open the folder in VS Code
3. Press `F5` to launch the extension in debug mode
4. Or, build and install the extension in your VS Code:
   ```
   npm install -g vsce
   vsce package
   ```

## Token Colors

The extension uses VS Code's token color scheme matching C/C++ highlighting:
- **Keywords**: Blue (`#569CD6`)
- **Control Keywords**: Magenta (`#C586C0`)
- **Built-in Functions**: Yellow (`#DCDCAA`)
- **Strings**: Orange (`#CE9178`)
- **Numbers**: Light Green (`#B5CEA8`)
- **Constants**: Light Blue (`#4FC1FF`)
- **Comments**: Green (`#6A9955`)

## Language Grammar

The extension provides a complete TextMate grammar for YaarScript featuring:
- Line and block comments (`//` and `/* */`)
- String literals with escape sequences
- Numeric literals (decimal, hex)
- Keyword recognition
- Function definition and call detection
- Proper bracket matching

## Keyboard Shortcuts

- **Comment Toggle**: `Ctrl+/`
- **Block Comment**: `Shift+Alt+A`
- **Format Document**: `Shift+Alt+F`

## Example Code

```yaar
// YaarScript Example
yaar {
    number x = 5;
    faisla flag = sahi;
    
    agar (x > 0) {
        bolo("Positive Number");
    } warna {
        bolo("Non-positive Number");
    }
}
```

## Support

For issues, feature requests, or feedback, visit the YaarScript repository.

---

Built with ❤️ for the YaarScript language
