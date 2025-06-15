document.getElementById('quizForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const answers = Array.from(document.querySelectorAll('select')).map(s => s.value);
  const moodCount = { happy: 0, sad: 0, angry: 0, neutral: 0 };

  answers.forEach(ans => moodCount[ans]++);
  const detectedMood = Object.keys(moodCount).reduce((a, b) => moodCount[a] > moodCount[b] ? a : b);
  window.location.href = detectedMood + '.html';
});
