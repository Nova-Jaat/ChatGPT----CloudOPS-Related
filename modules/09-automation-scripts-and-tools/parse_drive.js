const fs = require('fs');
const vm = require('vm');

const htmlPath = 'C:\\Users\\SANJEEV01\\.gemini\\antigravity\\brain\\dcacec4e-675a-4ef9-8667-776d092f1e73\\.system_generated\\steps\\6\\output.txt';
const html = fs.readFileSync(htmlPath, 'utf-8');

const callbacks = {};
const sandbox = {
  AF_initDataCallback: function(obj) {
    callbacks[obj.key] = obj.data;
  }
};
vm.createContext(sandbox);

const matches = html.match(/AF_initDataCallback\(\{[\s\S]*?\}\);\s*<\/script>/g);
console.log('Matches found:', matches ? matches.length : 0);

if (matches) {
  matches.forEach((m, idx) => {
    // Strip trailing </script>
    const code = m.replace(/<\/script>$/, '');
    try {
      vm.runInContext(code, sandbox);
      console.log(`Executed match ${idx}`);
    } catch (e) {
      console.error(`Error in match ${idx}:`, e.message);
    }
  });
}

console.log('Parsed callback keys:', Object.keys(callbacks));
fs.writeFileSync('parsed_callbacks.json', JSON.stringify(callbacks, null, 2));
