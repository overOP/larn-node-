// fs (File System) is a core module in Node.js that provides an API to interact with the file system 
// on your computer. It allows you to perform various file operations such as reading, writing,
// updating, deleting, and managing files and directories. The fs module can be used both
// synchronously and asynchronously, depending on your needs.

//Key Features of the fs Module:
//1. Reading files;
fs.readFile();// Asynchronously reads the entire contents of a file.

// Import the fs module
const fs = require('fs');
// Specify the file path
const filePath = 'example.txt';
// Use fs.readFile() to read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        // Handle errors (e.g., file not found, permission issues)
        console.error('Error reading the file:', err);
        return;
    }
    // If no error, log the file content
    console.log('File content:');
    console.log(data);
});

fs.readFileSync();//Synchronously reads the entire contents of a file.
// Import the fs module
const fs = require('fs');
// Define the file path
const filePath1 = 'example.txt';
try {
    // Read the file synchronously
    const data = fs.readFileSync(filePath1, 'utf8');
    // Log the file content to the console
    console.log('File content:');
    console.log(data);
} catch (err) {
    // Handle errors (e.g., file not found, permission issues)
    console.error('Error reading file:', err.message);
}

//2. Writing files;
fs.writeFile();// Asynchronously writes data to a file (replaces the file if it exists).

// Import the fs module
const fs = require('fs');
// Define the file path and content to write
const filePath2 = 'example.txt';
const content = 'Hello, this is some text written to the file using fs.writeFile()!';
// Use fs.writeFile() to write to the file
fs.writeFile(filePath2, content, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log(`File "${filePath2}" has been written successfully!`);
    }
});
fs.writeFileSync(); //Synchronously writes data to a file.

// Import the fs module
const fs = require('fs');
// Define the file path and content
const filePath3 = 'output.txt';
const content1 = 'Hello, this is written using fs.writeFileSync()!';
try {
    // Write content to the file synchronously
    fs.writeFileSync(filePath3, content1, 'utf8');
    console.log('File written successfully!');
} catch (err) {
    // Handle errors if any
    console.error('Error writing to file:', err);
}
//3. Appending to Files:
fs.appendFile();// Asynchronously appends data to a file.
const fs = require('fs');
// File path
const filePath4 = 'example.txt';
// Content to append
const contentToAppend = 'This is a new line of text.\n';
// Append content to the file
fs.appendFile(filePath4, contentToAppend, (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Content appended successfully!');
    }
});
fs.appendFileSync();// Synchronously appends data to a file.
const fs = require('fs');
// File path
const filePath5 = 'example.txt';
// Content to append
const contentToAppend1 = '\nThis is a new line appended to the file.';
try {
    // Append content to the file
    fs.appendFileSync(filePath5, contentToAppend1, 'utf8');
    console.log('Content appended successfully!');
} catch (err) {
    console.error('Error appending to file:', err);
}

//4. Deleting Files:
fs.unlink();// Asynchronously deletes a file.

// Import the fs module
const fs = require('fs');
// File to be deleted
const filePath6 = 'example.txt';
// Check if the file exists before attempting to delete it
fs.access(filePath6, fs.constants.F_OK, (err) => {
    if (err) {
        console.error(`File "${filePath}" does not exist.`);
        return;
    }
    // Delete the file asynchronously
    fs.unlink(filePath6, (err) => {
        if (err) {
            console.error(`Error deleting file "${filePath6}":`, err);
            return;
        }
        console.log(`File "${filePath6}" has been deleted successfully.`);
    });
});
fs.unlinkSync();// Synchronously deletes a file.

const fs = require('fs');
const filePath7 = 'example.txt';
try {
    // Check if the file exists
    fs.accessSync(filePath7, fs.constants.F_OK);
    // Delete the file synchronously
    fs.unlinkSync(filePath7);
    console.log(`File "${filePath7}" has been deleted successfully.`);
} catch (err) {
    if (err.code === 'ENOENT') {
        console.error(`File "${filePath7}" does not exist.`);
    } else {
        console.error(`Error deleting file "${filePath7}":`, err);
    }
}
//5. Working with Directories:
fs.mkdir();// Asynchronously creates a new directory.

// Import the fs module
const fs = require('fs');
// Define the directory name
const dirName = 'newDirectory';
// Create the directory asynchronously
fs.mkdir(dirName, { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating directory:', err);
    } else {
        console.log(`Directory "${dirName}" created successfully!`);
    }
});
fs.mkdirSync();// Synchronously creates a new directory.

const fs = require('fs');

const dirName1 = 'newDirectory';

try {
    fs.mkdirSync(dirName1, { recursive: true });
    console.log(`Directory "${dirName}" created successfully!`);
} catch (err) {
    console.error('Error creating directory:', err);
}

fs.rm();// Asynchronously removes a file or directory.

const fs = require('fs');
const path = require('path');
// Directory to remove
const directoryToRemove1 = path.join(__dirname, 'example-directory');
// Remove the directory (including its contents)
fs.rm(directoryToRemove1, { recursive: true, force: true }, (err) => {
    if (err) {
        console.error(`Error removing directory: ${err.message}`);
        return;
    }
    console.log(`Directory "${directoryToRemove}" removed successfully.`);
});

fs.rmdir();// Asynchronously removes a directory.

const fs = require('fs');
const path = require('path');
// Directory to remove
const directoryToRemove = path.join(__dirname, 'example-directory');
// Check if the directory exists
fs.access(directoryToRemove, fs.constants.F_OK, (err) => {
    if (err) {
        console.error(`Directory "${directoryToRemove}" does not exist.`);
        return;
    }
    // Remove the directory
    fs.rmdir(directoryToRemove, (err) => {
        if (err) {
            console.error(`Error removing directory: ${err.message}`);
            return;
        }
        console.log(`Directory "${directoryToRemove}" removed successfully.`);
    });
});
fs.rmSync();// Synchronously removes a file or directory.

const fs = require('fs');
const path = require('path');
const directoryToRemove3 = path.join(__dirname, 'exampleDirectory');
function removeDirectory(dirPath) {
    try {
        if (fs.existsSync(dirPath)) {
            console.log(`Removing directory: ${dirPath}`);
            // Remove directory recursively (including non-empty directories)
            fs.rmSync(dirPath, { recursive: true, force: true });
            console.log('Directory removed successfully.');
        } else {
            console.log(`Directory does not exist: ${dirPath}`);
        }
    } catch (err) {
        console.error('Error removing directory:', err);
    }
}
removeDirectory(directoryToRemove);

fs.rmdirSync();// Synchronously removes a directory.

// Import the fs module
const fs = require('fs');
const path = require('path');
// Define the directory to be removed
const directoryToRemove2 = path.join(__dirname, 'exampleDirectory');
// Function to remove a directory
function removeDirectory(dirPath) {
    try {
        // Check if the directory exists
        if (fs.existsSync(dirPath)) {
            console.log(`Removing directory: ${dirPath}`);
            // Remove the directory
            fs.rmdirSync(dirPath);
            console.log('Directory removed successfully.');
        } else {
            console.log(`Directory does not exist: ${dirPath}`);
        }
    } catch (err) {
        console.error('Error removing directory:', err);
    }
}
// Call the function to remove the directory
removeDirectory(directoryToRemove);

//6. Checking File/Directory Information:
fs.stat();// Asynchronously retrieves information about a file or directory.
fs.statSync();// Synchronously retrieves information about a file or directory.

//7.Renaming Files/Directories:
fs.rename();// Asynchronously renames a file or directory.
fs.renameSync();// Synchronously renames a file or directory.

//8.Watching Files/Directories:
fs.watch();// Watches for changes to a file or directory.
fs.watchFile();// Watches for changes to a file.

//Example Usage:
//Asynchronous File Read:
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

//Synchronous File Write:
const fs = require('fs');

try {
    fs.writeFileSync('example.txt', 'Hello, World!', 'utf8');
    console.log('File written successfully');
} catch (err) {
    console.error('Error writing file:', err);
}

//Checking File/Directory Information:
const fs = require('fs');

fs.stat('example.txt', (err, stats) => {
    if (err) {
        console.error('Error getting file stats:', err);
        return;
    }
    console.log('Is file?', stats.isFile());
    console.log('Is directory?', stats.isDirectory());
    console.log('File size:', stats.size);
});

//Promises and fs/promises:
//Node.js also provides a promise-based version of the fs module, which can be accessed via 
//fs/promises. This allows you to use async/await for cleaner code.

//Example with fs/promises:
const fs = require('fs/promises');

async function readFile() {
    try {
        const data = await fs.readFile('example.txt', 'utf8');
        console.log('File content:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

readFile();

//Key Points:
//Use asynchronous methods for non-blocking I/O operations.

//Use synchronous methods for simplicity in scripts or small applications.

//Always handle errors to avoid crashes.

//The fs module is a powerful tool for file management in Node.js, making it essential for tasks like 
//reading configuration files, logging, or handling user uploads.

