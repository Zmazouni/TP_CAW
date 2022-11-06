const { readFileSync, readdirSync, lstatSync } = require("fs");


function searchInTxt(path, regex) {
    try {
        if (path.toLowerCase().endsWith(".txt")) {
            let TxtFileText = readFileSync(path);
            if (TxtFileText.search(regex) != -1) return true
        }
        return false
    } catch (err) {
        return false
    }
}

function searchInDirectory(path, regex) {
    try {
        let DirContent = readdirSync(path);
        let result = [];
        DirContent.forEach((file) => {
            let state = lstatSync(path + "/" + file);
            if (state.isDirectory()) {
                let dirResult = searchInDirectory(path + "/" + file, regex);
                dirResult.length != 0 ? result.push(...dirResult) : null
            } else if (file.toLowerCase().endsWith(".txt")) {
                searchInTxt(path + "/" + file, regex) ? result.push(path + "/" + file) : null
            }
        })
        return result
    } catch (err) {
        return []
    }
}

function SearchOnlyDirectTxt(regexWord, ...args) {
    let wordInRegex = new RegExp(regexWord, "i");
    let result = [];
    args.forEach((path) => {
        searchInTxt(path, wordInRegex) ? result.push(path) : null
    });
    if (result.length == 0) return "None"
    return result
}

function SearchWithSubPathTxt(regexWord, ...args) {
    let wordInRegex = new RegExp(regexWord, "i");
    let result = [];
    args.forEach((path) => {
        let state = lstatSync(path);
        if (path.toLowerCase().endsWith(".txt")) {
            searchInTxt(path, wordInRegex) ? result.push(path) : null
        } else if (state.isDirectory()) {
            let dirResult = searchInDirectory(path, wordInRegex);
            dirResult.length != 0 ? result.push(...dirResult) : null
        }
    });
    if (result.length == 0) return "None"
    return result
}

// EX 3

// QUESTION A
console.log(SearchOnlyDirectTxt("bonjour", "./a.txt", "./b.txt"));
// QUESTION B
//console.log(SearchWithSubPathTxt("bonsoir je suis inas", "./content-1.txt", "./content-2.txt", "./welcome"));