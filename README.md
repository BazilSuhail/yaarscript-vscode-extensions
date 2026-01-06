<div align="center">
  <img src="icons/yaar-script.png" width="128" height="128" alt="YaarScript Logo">
  <h1>YaarScript VS Code Extension</h1>
  <p><strong>The official VS Code language support for YaarScript, an innovative, educational programming language written with localized syntax!</strong></p>
</div>

## Features

- **Built-in Code Runner**: Instantly execute your `.yaar` scripts with a single click using the integrated Play button in the editor title menu.
- **Cross-Platform Native Execution**: Bundles the YaarScript compiler to automatically detect your operating system (Windows, macOS, Linux) and natively compile your scripts inside your IDE terminal.
- **Interactive Terminal**: Captures standard output and supports input flows like `suno()` natively inside VS Code's Integrated Terminal, preventing the limitations of standard Output channels.
- **Rich Syntax Highlighting**: Accurate token colorization configured specifically for YaarScript grammar, helping you catch syntax errors visually before running your scripts.
- **Custom Theme**: Includes a built-in Dark Theme exclusively configured and tailored to make `.yaar` files look highly readable and professional.
- **File Icons**: Custom file icon associations for all files ending in `.yaar`.
- **Integrated Tooling**: Easily invoke your compiler from anywhere in your project workspace using seamless path resolution.

## Usage

1. Open your workspace folder containing your YaarScript files.
2. Open any file ending in `.yaar`.
3. In the top-right corner of your editor tab, click the **Play** button to execute it.
4. Alternatively, use the following keyboard shortcuts:
   - **Windows/Linux**: `Ctrl` + `Shift` + `R` or `Ctrl` + `Alt` + `R`
   - **Mac**: `Cmd` + `Shift` + `R`

## Architecture & Design

This extension bundles pre-compiled native executables of the YaarScript compiler (`yaar-windows.exe`, `yaar-macos`, `yaar-linux`). When you run a script, the extension intelligently detects the host platform natively and seamlessly spawns the corresponding executable directly in your workspace terminal. This design keeps development feedback loops fast and guarantees that standard I/O (like user input prompts) executes correctly.

## About YaarScript

YaarScript is an educational programming language meant to break down the barriers of entry into programming for native Urdu speakers. Utilizing simple, relatable, and localized syntax:
- `bolo("...")` instead of `print`
- `suno()` for capturing user input
- `dohrao` for iteration workflows
- `agar` and `warna` for conditional branching
- `qism` for custom structured data and enumerations

> [!IMPORTANT]
> **Check out the official open-source repositories to view the core compiler source code and client implementation!**
> - **Core Engine**: [BazilSuhail/YaarScript](https://github.com/BazilSuhail/YaarScript)
> - **YaarScript Extension Shell**: [BazilSuhail/YaarScript-Client](https://github.com/BazilSuhail/YaarScript-Client)

## Release Notes

### 1.0.0
- Initial beta release of YaarScript language support.
- Added comprehensive grammar syntax highlighting.
- Bundled the dedicated YaarScript Dark Theme.
- Integrated a Cross-Platform code runner natively bound to the VS Code Terminal.

## About the Author

Hi! I'm **Bazil Suhail**, the creator of YaarScript and this official VS Code extension. My goal is to make programming highly accessible and enjoyable for everyone, removing the intimidating syntax barriers often found in foundational computer science education. 

- **Reach out to me / View my portfolio:** [bazilsuhail.netlify.app](https://bazilsuhail.netlify.app/)
- **Support my work:** If you find YaarScript helpful, consider buying me a "Khoya Khjoor" at [bazilsuhail.netlify.app/bye-me-khoya-khjoor](https://bazilsuhail.netlify.app/bye-me-khoya-khjoor)

---
*Developed by Bazil Suhail*
