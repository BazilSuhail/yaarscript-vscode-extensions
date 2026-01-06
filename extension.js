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
    
    context.subscriptions.push(runCommand);
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
    const compilerPath = path.join(compilerDir, 'compiler.exe');
    
    if (!fs.existsSync(compilerPath)) {
        vscode.window.showErrorMessage('YaarScript compiler not found. Make sure compiler.exe is in the executables directory.');
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
    runTerminal.sendText(`compiler.exe "${fileName}"`);
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
