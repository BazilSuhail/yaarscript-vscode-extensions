# YaarScript VS Code Extension - Quick Start

## ✅ What's Included

Your YaarScript extension is now fully configured with:

✨ **Syntax Highlighting**
- All YaarScript keywords colored like C/C++
- Built-in functions highlighted in yellow
- Comments, strings, and numbers properly colored
- Control flow keywords in magenta

🎨 **File Icons**
- Your `.png` logo displays next to `.yaar` files in the file explorer
- Icons for both light and dark themes

⚙️ **Language Configuration**
- Bracket auto-pairing and matching
- Comment block support
- Proper indentation handling
- Code folding regions

## 🚀 How to Test

### Quick Test (Recommended)
1. Open this folder in VS Code
2. Press **`F5`** or go to Run → Start Debugging
3. A new VS Code window opens with the extension active
4. Open your `test.yaar` file to see syntax highlighting
5. Notice your `.yaar` file has the custom icon in the explorer

### Install Locally
```powershell
# Install vsce globally (one time only)
npm install -g vsce

# Package the extension
vsce package

# Install via command line
code --install-extension yaarscript-1.0.0.vsix
```

## 📝 YaarScript Keywords Included

### Type Declarations
```yaar
number    (64-bit signed integer)
faisla    (boolean true/false)
khaali    (void/function declaration)
qism      (enum)
pakka     (constant)
```

### Control Flow
```yaar
agar      (if)
warna     (else)
dohrao    (for loop)
karo      (do-while)
jabtak    (!= condition for while)
intekhab  (switch)
agar_ho   (case for switch)
bas_kar   (break)
```

### Built-in Functions
```yaar
bolo()    (print/output)
suno()    (input/read)
waqt()    (current time)
ittifaq() (random number)
```

### Constants
```yaar
sahi      (true)
galat     (false)
RED, GREEN, BLUE  (enum values)
```

## 🎨 Color Scheme

| Element | Color | Example |
|---------|-------|---------|
| **Keywords** | Blue | `number`, `faisla`, `khaali` |
| **Control** | Magenta | `agar`, `warna`, `dohrao` |
| **Functions** | Yellow | `bolo`, `suno`, `waqt` |
| **Strings** | Orange | `"Hello Yaar"` |
| **Numbers** | Light Green | `42`, `3.14` |
| **Constants** | Light Blue | `sahi`, `galat` |
| **Comments** | Green | `// This is a comment` |

## 📂 Project Structure

```
yaar-scrpt-vs-cdode/
├── package.json
├── extension.js
├── language-configuration.json
├── syntaxes/
│   └── yaarscript.tmLanguage.json
├── themes/
│   └── yaarscript-dark.json
├── icons/
│   ├── yaar-script.png
│   ├── yaar-script-light.png
│   └── yaarscript-icon-theme.json
├── .vscode/
│   ├── launch.json (debug config)
│   ├── tasks.json (build tasks)
│   └── settings.json (editor settings)
└── EXTENSION_SETUP.md (detailed guide)
```

## 🔄 File Functions

| File | Purpose |
|------|---------|
| `package.json` | Extension manifest - declares language, grammar, icons, theme |
| `extension.js` | Main extension code (currently minimal) |
| `language-configuration.json` | Bracket matching, comments, indentation rules |
| `yaarscript.tmLanguage.json` | TextMate grammar - defines which scopes apply to text patterns |
| `yaarscript-dark.json` | Color theme - maps scopes to actual colors |
| `yaarscript-icon-theme.json` | Icon associations for file types |

## 💡 Pro Tips

1. **See Scopes**: Use `Developer: Inspect Editor Tokens and Scopes` (Ctrl+Shift+P) to see what scope is applied to a token
2. **Customize Colors**: Edit `themes/yaarscript-dark.json` to change token colors
3. **Add More Keywords**: Edit `syntaxes/yaarscript.tmLanguage.json` to add new keywords
4. **Debug Extension**: Use VS Code's debugger (F5) to debug the extension code

## 📚 Full Documentation

- See **EXTENSION_SETUP.md** for complete setup, installation, and architecture details
- See **README_EXTENSION.md** for extension features and examples
- See **README.md** for YaarScript language documentation

## 🎯 Next Features to Add

1. **Code Snippets** - Quick templates for common patterns
2. **IntelliSense** - Code completion suggestions
3. **Linting** - Error detection
4. **Debugging** - Step through code execution
5. **Go to Definition** - Jump to function/variable declarations

## ❓ Troubleshooting

**Highlighting not working?**
- Make sure file has `.yaar` extension
- Reload: Ctrl+Shift+P → "Developer: Reload Window"

**Icons not showing?**
- Restart VS Code completely
- Check that `icons/yaar-script.png` exists

**Colors look different?**
- VS Code theme might override colors
- Try "Preferences: Change Color Theme" → "YaarScript"

---

**Congratulations! Your YaarScript extension is ready! 🎉**

Press `F5` to start testing now.
