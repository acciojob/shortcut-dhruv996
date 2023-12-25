document.addEventListener('DOMContentLoaded', function () {
  // Example usage
  const result1 = shortcut("Amnesty", "International");
  document.getElementById('result').innerText = `Shortcut of "Amnesty" and "International": '${result1}'`;

  const result2 = shortcut("Hello", "world");
  document.getElementById('result').innerText += `\nShortcut of "Hello" and "world": '${result2}'`;

  const result3 = shortcut("", "International");
  document.getElementById('result').innerText += `\nShortcut of empty string and "International": '${result3}'`;

  const result4 = shortcut("Amnesty", "");
  document.getElementById('result').innerText += `\nShortcut of "Amnesty" and empty string: '${result4}'`;
});

function shortcut(str1, str2) {
  const initialLetter1 = str1.charAt(0).toUpperCase();
  const initialLetter2 = str2.charAt(0).toLowerCase();

  return initialLetter1 + initialLetter2;
}

