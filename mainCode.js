
function countDeclarations(code) {
  let variables = {};
  let functions = [];

  const lines = code.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if ( line.startsWith('let ') || line.startsWith('const ')) {
      const variableName = line.split(/\s+/)[1];
      const variableValue = line.split('=')[1].trim();
      variables[variableName] = variableValue;
    } else if (line.startsWith('function ')) {
      const functionSignature = line.split('(')[0];
      const functionName = functionSignature.split(' ')[1];
      const functionParams = line.split('(')[1].split(')')[0];
      functions.push({ name: functionName, params: functionParams });
    }
  }

  return { variables, functions };
}

const fileInput = document.getElementById('fileInput');
const functionButton = document.getElementById('functionButton');
const variableButton = document.getElementById('variableButton');
const output = document.getElementById('output');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = (event) => {
    const code = event.target.result;

    functionButton.addEventListener('click', () => {
      const { functions } = countDeclarations(code);
      let functionHTML = '<p>Functions:</p><ul>';
      for (let i = 0; i < functions.length; i++) {
        functionHTML += `<li>${functions[i].name}(${functions[i].params})</li>`;
      }
      functionHTML += '</ul>';
      output.innerHTML = functionHTML;
    });

    variableButton.addEventListener('click', () => {
      const { variables } = countDeclarations(code);
      let variableHTML = '<p>Variables:</p><ul>';
      for (let variableName in variables) {
        variableHTML += `<li>${variableName}: ${variables[variableName]}</li>`;
      }
      variableHTML += '</ul>';
      output.innerHTML = variableHTML;
    });
  };
});
