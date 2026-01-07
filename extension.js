const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

let runTerminal = null;

function activate(context) {
    console.log('YaarScript extension is now active!');
    
    // Register the Run command
    let runCommand = vscode.commands.registerCommand('yaarscript.run', () => {
        runYaarScript(context);
    });

    // Register Insert Snippet command
    let insertSnippetCommand = vscode.commands.registerCommand('yaarscript.insertSnippet', () => {
        const snippets = [
            // Headings
            { label: 'PROJECT STARTERS', kind: vscode.QuickPickItemKind.Separator },
            { label: 'yr-init: Full Project Template (Required Entry Point)', description: 'Complete file structure with mandatory yaar{} block', snippet: '// YaarScript Project: ${1:ProjectName}\n// Author: Bazil Suhail\n\n// --- GLOBAL DEFINITIONS ---\n// Declare custom types and constants here\nqism ${2:Config} {\n\tSTART,\n\tSTOP,\n\tWAIT\n};\n\npakka number LIMIT = 100;\nnumber global_id = 1000;\n\n// --- HELPER ROUTINES ---\n// Define functions that capture logic outside main entry\nkhaali pracham(number code) {\n\tintekhab (code) {\n\t\tagar_ho 0: bolo(\"SUCCESS\"); bas_kar;\n\t\tagar_ho 1: bolo(\"ERROR\"); bas_kar;\n\t\taakhir: bolo(\"UNKNOWN\"); bas_kar;\n\t}\n}\n\n// --- REQUIRED ENTRY POINT ---\n// This block executes first recursively\nyaar {\n\tbolo(\"--- Welcome to ${1%[^a-zA-Z0-9]%/%} ---\");\n\t$0\n\t\n\t// Finalizing Execution\n\tpracham(0);\n}' },
            { label: 'yr-yaar: Mandatory Entry Point', description: 'The required block for execution: yaar { ... }', snippet: '// The required block for all YaarScript programs\nyaar {\n\t$0\n}' },

            { label: 'COMPONENT SNIPPETS', kind: vscode.QuickPickItemKind.Separator },
            { label: 'yr-agar: If Statement', description: 'agar (condition) { ... }', snippet: '// Branching Logic: Ensure condition evaluates to faisla (boolean)\nagar (${1:condition}) {\n\t$0\n}' },
            { label: 'yr-warna: If Else', description: 'agar-warna statement', snippet: '// Branching Logic: Ensure condition evaluates to faisla (boolean)\nagar (${1:condition}) {\n\t$2\n} warna {\n\t$0\n}' },
            { label: 'yr-dohrao: For Loop', description: 'dohrao (init; cond; step) { ... }', snippet: '// Iteration Loop: Initializer, Condition, and Step are required\ndohrao (number ${1:i} = 0; ${1:i} < ${2:10}; ${1:i}++) {\n\t$0\n}' },
            { label: 'yr-jabtak: While', description: 'jabtak (cond) { ... }', snippet: '// While Loop: Executes as long as condition remains sahi (true)\njabtak (${1:condition}) {\n\t$0\n}' },
            { label: 'yr-karo: Do-While', description: 'karo { ... } jabtak (cond)', snippet: 'karo {\n\t$0\n} jabtak (${1:condition});' },
            { label: 'yr-intekhab: Case Switch', description: 'Selection / Branching statement', snippet: '// Selection Branching: Variable \'${1:variable}\' must be declared before this block\nintekhab (${1:variable}) {\n\tagar_ho ${2:value}:\n\t\t// Execute logic if matches ${2:value}\n\t\t$3\n\t\tbas_kar;\n\taakhir:\n\t\t// Execute default logic if no match found\n\t\t$0\n\t\tbas_kar;\n}' },
            { label: 'yr-qism: Enum/Struct', description: 'Data type / enumeration declaration', snippet: '// Custom Type: Define structured enumerations using uppercase fields\nqism ${1:Name} {\n\t${2:Field1},\n\t${3:Field2}\n};' },
            { label: 'yr-khaali: Void Func', description: 'khaali func(...) { ... }', snippet: '// Routine: Use khaali for functions that do not return values\nkhaali ${1:functionName}(${2:parameters}) {\n\t$0\n}' },
            { label: 'yr-func: Typed Func', description: 'Typed function returning wapsi', snippet: '${1|number,float,faisla|} ${2:functionName}(${3:parameters}) {\n\t$0\n\twapsi ${4:result};\n}' },
            { label: 'yr-bolo: Console Print', description: 'Standard output', snippet: '// Output: Terminal logging\nbolo(${1:\"message\"});' },
            { label: 'yr-suno: User Input', description: 'Capture terminal input', snippet: '// Input Capture: suno() for terminal interaction\nnumber ${1:variable} = suno();' },
            { label: 'yr-pakka: Immutable Const', description: 'Constant declaration (e.g., pakka number X = 5)', snippet: '// Immutable: Values set via pakka cannot be modified after declaration\npakka ${1|number,float,faisla|} ${2:NAME} = ${3:value};' },
            { label: 'yr-var: Mutable Variable', description: 'Variable declaration (e.g., number X = 10)', snippet: '// Mutable: standard variable declaration\n${1|number,float,faisla|} ${2:name} = ${3:value};' },

            { label: 'ADVANCED CODE DEMOS', kind: vscode.QuickPickItemKind.Separator },
            { label: 'yr-diamond: Numeric Diamond Pattern (In yaar{})', description: 'Graphics logic wrapped in required entry point', snippet: 'yaar {\n\t// Generate a professional numeric diamond pattern\n\tnumber size = ${1:5}; // Define size of the diamond\n\tbolo(\"Generating Diamond (Size: \", size, \")...\\n\");\n\t\n\t// --- Top Half Generation ---\n\tdohrao (number i = 1; i <= size; i++) {\n\t\tdohrao (number s = 1; s <= (size - i); s++) { bolo(\" \"); }\n\t\tdohrao (number j = 1; j <= i; j++) {\n\t\t\tbolo(\" \");\n\t\t\tbolo(i);\n\t\t}\n\t\tbolo(\"\\n\");\n\t}\n\t\n\t// --- Bottom Half Generation ---\n\tdohrao (number i = (size - 1); i >= 1; i--) {\n\t\tdohrao (number s = 1; s <= (size - i); s++) { bolo(\" \"); }\n\t\tdohrao (number j = 1; j <= i; j++) {\n\t\t\tbolo(\" \");\n\t\t\tbolo(i);\n\t\t}\n\t\tbolo(\"\\n\");\n\t}\n}' },
            { label: 'yr-sensor: Calibration Demo (In yaar{})', description: 'Interactive loop wrapped in required entry point', snippet: 'yaar {\n\t// Automated Sensor Calibration Loop\n\tnumber attempt = 1; // Initialize tracking varaible\n\tfaisla sensor_ready = galat; // Boolean flag\n\t\n\tkaro {\n\t\tbolo(\"Probe #\", attempt, \": \");\n\t\tagar (attempt < ${1:10}) {\n\t\t\tbolo(\"Calibrating... [WAIT]\\n\");\n\t\t} warna {\n\t\t\tbolo(\"Optimal Status! [READY]\\n\");\n\t\t\tsensor_ready = sahi;\n\t\t}\n\t\tattempt = attempt + 1;\n\t} jabtak (!sensor_ready);\n}' },
            { label: 'yr-timer: Execution Metrics (In yaar{})', description: 'Performance logic wrapped in required entry point', snippet: 'yaar {\n\t// Start capturing time metrics\n\tnumber start_waqt = waqt();\n\t\n\t// --- Start Critical Tasks ---\n\t$0\n\t// --- End Critical Tasks ---\n\t\n\tnumber end_waqt = waqt();\n\tbolo(\"Execution Result: \", end_waqt - start_waqt, \" ms\\n\");\n}' },
            { label: 'yr-random: Probability Logic (In yaar{})', description: 'Random generation wrapped in required entry point', snippet: 'yaar {\n\t// Generate a random numeric result in range\n\tnumber result = ittifaq(${1:1}, ${2:100});\n\tbolo(\"Probability Outcome: \", result, \"\\n\");\n}' }
        ];

        vscode.window.showQuickPick(snippets, { placeHolder: 'Select a YaarScript snippet to insert' }).then(selection => {
            if (selection) {
                const editor = vscode.window.activeTextEditor;
                if (editor) {
                    editor.insertSnippet(new vscode.SnippetString(selection.snippet));
                }
            }
        });
    });
    
    context.subscriptions.push(runCommand, insertSnippetCommand);
}

function runYaarScript(context) {
    const editor = vscode.window.activeTextEditor;
    
    if (!editor) {
        vscode.window.showErrorMessage('No file is currently open');
        return;
    }
    
    const document = editor.document;
    
    // Check if file is .yaar
    if (document.languageId !== 'yaarscript' && !document.fileName.endsWith('.yaar')) {
        vscode.window.showErrorMessage('This is not a YaarScript file (.yaar)');
        return;
    }
    
    // Save the file first if it has unsaved changes
    if (document.isDirty) {
        document.save().then(() => {
            executeFile(document.fileName, context);
        });
    } else {
        executeFile(document.fileName, context);
    }
}

function executeFile(filePath, context) {
    const compilerDir = path.join(context.extensionPath, 'executables');
    
    // Determine the correct executable based on the operating system
    let executableName = 'yaar-linux'; // Default to linux
    if (process.platform === 'win32') {
        executableName = 'yaar-windows.exe';
    } else if (process.platform === 'darwin') {
        executableName = 'yaar-macos';
    }
    
    const compilerPath = path.join(compilerDir, executableName);
    
    if (!fs.existsSync(compilerPath)) {
        vscode.window.showErrorMessage(`YaarScript executable not found. Make sure ${executableName} is in the executables directory.`);
        return;
    }
    
    // Initialize or reuse terminal
    if (!runTerminal || runTerminal.exitStatus !== undefined) {
        // By adding our executables folder to the terminal's PATH, we can reliably 
        // execute 'compiler.exe' across PowerShell, CMD, Git Bash, etc. without syntax errors
        const pathKey = Object.keys(process.env).find(k => k.toLowerCase() === 'path') || 'PATH';
        const currentPath = process.env[pathKey] || '';
        const newPath = compilerDir + path.delimiter + currentPath;

        runTerminal = vscode.window.createTerminal({
            name: 'YaarScript',
            env: {
                [pathKey]: newPath
            }
        });
    }
    
    const fileDir = path.dirname(filePath);
    const fileName = path.basename(filePath);
    
    // Bring terminal to view
    runTerminal.show(true);
    
    // We send instructions to the terminal to compile
    runTerminal.sendText(`cd "${fileDir}"`);
    
    // Clear terminal screen for fresh output
    if (process.platform === 'win32') {
        runTerminal.sendText('cls');
    } else {
        runTerminal.sendText('clear');
    }
    
    // Execute compiler natively! Since we cd'ed into the directory, we just pass the file name.
    runTerminal.sendText(`${executableName} "${fileName}"`);
}

function deactivate() {
    if (runTerminal) {
        runTerminal.dispose();
    }
}

module.exports = {
    activate,
    deactivate
};
