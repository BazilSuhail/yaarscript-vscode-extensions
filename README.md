<div align="center">
  <img src="https://raw.githubusercontent.com/BazilSuhail/yaarscript-vscode-extensions/main/icons/yaar-script.png" width="128" height="128" alt="YaarScript Logo">
  <h1>YaarScript VS Code Extension</h1>
  <p><strong>The official VS Code language support for YaarScript, an innovative, educational programming language written with localized syntax!</strong></p>
  
  ![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
  ![VS Code](https://img.shields.io/badge/VS_Code-%5E1.85.0-blueviolet.svg)
  ![License](https://img.shields.io/badge/License-MIT-green.svg)
</div>

## Overview

YaarScript Support is the ultimate Visual Studio Code extension designed for writing, executing, and debugging .yaar files. This extension serves as the professional bridge between the modern IDE interface and the **YaarScript Core Engine**, an innovative educational language that uniquely lowers the syntactic barrier for those seeking to learn computer science fundamentals.

This extension encapsulates a fully native, cross-platform compilation architecture directly into your workspace. Whether you are compiling numerical logic loops, structural data types, or terminal I/O functions, this extension guarantees absolutely stunning syntactic tokenization alongside a fully immersive, zero-configuration local execution environment.

---

## Comprehensive Feature Set

### 1. Cross-Platform Subprocess Code Runner
- Instantly execute your .yaar scripts with a single fluid click using the dedicated Play button (Run) located seamlessly in your editor's title navigation bar.
- **Operating-System Agnostic Architecture**: The extension statically bundles pre-compiled variations of the core Language compiler (yaar-windows.exe, yaar-macos, yaar-linux). It intelligently detects your host hardware schema and automatically executes the precise binary.
- Compiles custom .yaar files sequentially in zero-latency inside your IDE terminal!

### 2. Native Integrated Terminal Interaction
Unlike typical extensions that permanently confine your standard output logs within purely read-only "Output Channels", YaarScript binds explicitly to the genuine VS Code Integrated Environment Terminal.
- Completely supports blocking I/O calls (e.g., when your execution stream inevitably pauses pending suno() inputs).
- Safely inherits the dynamic runtime path-mapping resolving file associations relatively around your .yaar location seamlessly.

### 3. Masterful Syntax Highlighting & Tokenizing
Highly meticulous TextMate grammar definitions explicitly configured against the YaarScript Abstract Syntax Tree. The token matrix supports:
- Highlighting for built-in subroutines: bolo(), suno(), waqt(), ittifaq().
- Categorized keywords rendering logically logic branches: dohrao, agar, warna, qism, pakka.
- Beautiful numerical logic separation, capturing strings, brackets, logical iterators, and scope blocks gracefully, granting visual hints to debug logic problems prior to compiling.

### 4. "YaarScript Dark" Theme
We bundled an exclusive, hand-crafted aesthetic UI theme engineered to emphasize keyword hierarchy logically alongside semantic scope importance natively. To immerse yourself, type Ctrl+K Ctrl+T, hunt for "YaarScript Dark", and enable the fully authentic experience. 

### 5. Exclusive File Tree Associations
All files mapped physically under the suffix .yaar instantiate immediately alongside your exclusive stylized fox language icon dynamically injecting style into standard file explorer trees.

---

## Requirements & Version Dependencies

To guarantee the execution engines and dependency libraries boot flawlessly within the background host process, confirm your configurations align with the following specs:
- **VS Code Extension Host Engine Engine**: >= 1.85.0.
- **Supported Operating Systems**: Windows (10/11), macOS (Intel/Apple Silicon), and standard Linux distributions.
- **Extension Engine Level**: Current marketplace model v1.0.0 or newer.

---

## Complete Instruction Protocol

### Getting Started Visually
1. Open up an active local workspace folder possessing your algorithmic .yaar scripts.
2. Select any internal file mapping the .yaar extension to activate the language service natively.
3. Once engaged, immediately witness the flawless visual integration of syntax syntax mapping coloring inside loops and text.
4. **Initiating the Compilation Stream**:
   - Scroll up your cursor towards the top-right quadrant of the active window header and deliberately click the **Run YaarScript** icon.
   - For power developers utilizing zero mouse dependencies, run via core keyboard keybindings:
     - **Windows/Linux**: Ctrl + Shift + R or Ctrl + Alt + R
     - **macOS**: Cmd + Shift + R

### Core Syntax Code Implementation Formats
```yaar
// Minimal YaarScript Implementation Showcase
qism Color { RED, GREEN, BLUE };

pakka number MULTIPLIER = 5;

// Routine function test evaluating inputs
khaali demo_loop() {
    bolo("Please enter your baseline iteration limit:");
    number power = suno();
    
    // Looping execution branch natively
    dohrao(number i = 0; i < power; i++) {
        agar(i == MULTIPLIER) {
            bolo("Reached critical mass loop iteration!");
        } warna {
            bolo(i, "...");
        }
    }
}
```

---

> [!IMPORTANT]
> **Check out the official open-source repositories to explore the complete YaarScript ecosystem!**
> - **VS Code Extension (This Project)**: [BazilSuhail/yaarscript-vscode-extensions](https://github.com/BazilSuhail/yaarscript-vscode-extensions)
> - **Core Rust Compiler**: [BazilSuhail/YaarScript](https://github.com/BazilSuhail/YaarScript)
> - **Web App Client**: [BazilSuhail/YaarScript-Client](https://github.com/BazilSuhail/YaarScript-Client)

---

## Local Compilation & Packaging Build Methods

If you are an extension core-maintainer attempting to clone this repository, iterate components directly, or inject internal UI builds .vsix wrapper binaries cleanly:

1. **Implement Node Dependencies (VS Code Extension Manager)** utilizing standard NPM package structures tracking globally:
   ```bash
   npm install -g @vscode/vsce
   ```
2. **Executing Release Builds**:
   Traverse inside your fundamental terminal directly towards the root domain of the active clone directory and execute:
   ```bash
   vsce package
   ```
   *The builder streams out an independently zipped yaarscript-1.0.0.vsix wrapper. You are able securely drag that finalized deployment file directly against the Extension Panel inside any generic VS Code software variant.*

## Full License Implementation

This architectural repository and sub-assets possess completely generous security licenses dynamically deployed directly through the **MIT License**. Standard developers acquire free uninhibited capability authorizing them seamlessly to implement, transfer, clone, iterate, merge algorithms, and deploy modified iterations globally commercially. Read the fundamental LICENSE document file covering precise legalities completely.

---

## About The Foundational Architect

Greetings! I'm **Bazil Suhail**, the ultimate creator leading the YaarScript architectural algorithms, its specialized Core Rust Engine framework, alongside integrating this official VS Code language implementation! I operate under extreme passion mapping sophisticated software logic parameters making computational algorithms entirely welcoming and exceptionally joyful fundamentally reducing standard coding anxieties generated by heavy Western syntaxes dynamically.

- **Look at my Complete Portfolio / Open Network:** [bazilsuhail.netlify.app](https://bazilsuhail.netlify.app/)
- **Sponsor Ongoing Upgrades:** If YaarScript elevates your structural productivity significantly functionally consider providing algorithmic energy via a "Khoya Khjoor" at [bazilsuhail.netlify.app/bye-me-khoya-khjoor](https://bazilsuhail.netlify.app/bye-me-khoya-khjoor)!

*Developed by Bazil Suhail.*
