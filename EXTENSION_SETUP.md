# YaarScript VS Code Extension - Setup Guide

## 📦 Extension Structure

```
yaar-scrpt-vs-cdode/
├── package.json                          # Extension manifest
├── language-configuration.json           # Language behavior configuration
├── extension.js                          # Extension entry point
├── syntaxes/
│   └── yaarscript.tmLanguage.json       # TextMate grammar for syntax highlighting
├── themes/
│   └── yaarscript-dark.json             # Color theme (VS Code theme format)
├── icons/
│   ├── yaar-script.png                  # Dark theme icon
│   ├── yaar-script-light.png           # Light theme icon
│   └── yaarscript-icon-theme.json      # Icon theme definition
├── README.md                             # YaarScript language documentation
└── README_EXTENSION.md                  # Extension documentation
```

## 🚀 Installation & Testing

### Option 1: Load as Development Extension
1. Open this folder in VS Code
2. Press `F5` (Run) to launch VS Code with the extension in debug mode
3. A new VS Code window will open with the extension active
4. Open a `.yaar` file to test syntax highlighting

### Option 2: Install Locally
1. Install `vsce` (VS Code Extension CLI):
   ```powershell
   npm install -g vsce
   ```
2. Package the extension:
   ```powershell
   vsce package
   ```
3. A `.vsix` file will be created
4. Install by dragging the `.vsix` into VS Code, or using:
   ```powershell
   code --install-extension yaarscript-1.0.0.vsix
   ```

### Option 3: Publish to VS Code Marketplace
1. Create a publisher account at https://marketplace.visualstudio.com
2. Create a Personal Access Token (PAT)
3. Login with:
   ```powershell
   vsce login YourPublisher
   ```
4. Publish:
   ```powershell
   vsce publish
   ```

## 🎨 Features Included

### 1. Syntax Highlighting
- **Keywords**: Control flow, declarations, constants
  - Control: `agar`, `warna`, `dohrao`, `karo`, `jabtak`, `intekhab`, `agar_ho`, `bas_kar`
  - Types: `number`, `faisla`, `khaali`, `qism`, `pakka`, `yaar`
  - Constants: `sahi`, `galat`, `RED`, `GREEN`, `BLUE`

- **Built-in Functions**:
  - I/O: `bolo()`, `suno()`
  - System: `waqt()` (time), `ittifaq()` (random)

- **Operators**: Standard arithmetic, comparison, logical, and exponentiation (`**`)

- **Comments**: `//` line comments and `/* */` block comments

### 2. File Icons
- `.yaar` files display your custom logo in the file explorer
- Separate icons for light and dark themes

### 3. Language Configuration
- Bracket matching: `{}`, `[]`, `()`
- Auto-closing pairs for quotes and brackets
- Code folding markers
- Proper indentation rules

### 4. Token Colors (C/C++ Style)
```
Keywords:           Blue (#569CD6)
Control Keywords:   Magenta (#C586C0)
Built-in Functions: Yellow (#DCDCAA)
Strings:            Orange (#CE9178)
Numbers:            Light Green (#B5CEA8)
Constants:          Light Blue (#4FC1FF)
Comments:           Green (#6A9955)
```

## 📝 Token Color Mapping

| Element | Color | Hex Code | Scope |
|---------|-------|----------|-------|
| Keywords | Blue | #569CD6 | `keyword.declaration` |
| Control Flow | Magenta | #C586C0 | `keyword.control` |
| Functions | Yellow | #DCDCAA | `entity.name.function`, `support.function` |
| Numbers | Light Green | #B5CEA8 | `constant.numeric` |
| Strings | Orange | #CE9178 | `string` |
| Constants | Light Blue | #4FC1FF | `constant.language`, `keyword.constant` |
| Comments | Green | #6A9955 | `comment` |
| Variables | Light Gray | #D4D4D4 | `variable` |

## 🔧 Configuration Details

### language-configuration.json
Defines:
- Comment syntax (`//` and `/* */`)
- Bracket pairs and auto-closing
- Block folding regions
- Indentation rules

### yaarscript.tmLanguage.json (TextMate Grammar)
Defines text patterns that match language elements:
- Each pattern has a `scope` that maps to color themes
- Includes: strings, numbers, keywords, operators, functions, identifiers

### yaarscript-dark.json (Color Theme)
Maps TextMate scopes to actual colors:
- Editor colors (background, foreground, selection)
- Token colors for all syntax elements

## 📚 Example YaarScript Program

```yaar
// Hello YaarScript!
qism Status { ACTIVE, INACTIVE };

pakka MESSAGE = "Processing...";

khaali greet(number id) {
    bolo("User ID: ", id);
    bolo(MESSAGE);
}

yaar {
    number x = 10;
    number y = 3;
    
    // Exponentiation example
    bolo("10 ** 3 = ", x ** y);
    
    // Loop example
    dohrao (number i = 0; i < 5; i++) {
        bolo("Iteration: ", i);
    }
    
    // Conditional example
    agar (x > y) {
        bolo("X is greater");
    } warna {
        bolo("Y is greater or equal");
    }
    
    // Switch example
    intekhab (Status.ACTIVE) {
        agar_ho Status.ACTIVE:
            bolo("Active mode");
            bas_kar;
        agar_ho Status.INACTIVE:
            bolo("Inactive mode");
            bas_kar;
    }
    
    // Call function
    greet(42);
}
```

## 🐛 Troubleshooting

### Syntax highlighting not working
1. Check that the file has `.yaar` extension
2. Verify `file type: yaarscript` shows in VS Code
3. Reload the window: `Ctrl+Shift+P` → `Developer: Reload Window`

### Icons not showing
1. Ensure `icons/` folder contains the PNG files
2. Check paths in `package.json` are correct
3. Restart VS Code

### Theme colors not applying
1. Verify theme is listed in `package.json` under "contributes"
2. Check that color hex codes are valid
3. Use Command Palette: `Preferences: Change Color Theme` and select "YaarScript"

## 📋 Extension Activation

The extension activates when:
- You open a `.yaar` file
- You explicitly command the extension to activate
- (Set in `package.json`: `"activationEvents": ["onLanguage:yaarscript"]`)

## 🎯 Next Steps

1. **Add IntelliSense**: Implement code completion for keywords and functions
2. **Add Linter**: Create a linter for syntax validation
3. **Add Debugger**: Integrate with YaarScript debugger
4. **Add Snippets**: Provide code templates for common patterns
5. **Build Tasks**: Add VS Code task configurations

---

**Happy coding with YaarScript! 🚀**
