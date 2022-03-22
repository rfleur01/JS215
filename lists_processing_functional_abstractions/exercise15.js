let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  // an array of score objects, with both exams and exercises
  let scoreData = Object.keys(scores).map(student => scores[student].scores);

  // transform the above score objects into an array of arrays for exam scores
  let examData = scoreData.map(score => score.exams);

  return {
    studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
    exams: getExamSummary(examData),
  };
}

function getStudentScore(scoreObj) {
  let examScore = getExamAverage(scoreObj.exams);
  let exerciseScore = getExercisesScore(scoreObj.exercises);
  let weightedScore = Math.round((examScore * 0.65) + (exerciseScore * 0.35));
  return `${weightedScore} (${getLetterGrade(weightedScore)})`;
}

function getExamAverage(exam) {
  return exam.reduce((total, score) => total + score) / exam.length;
}

function getExercisesScore(exercises) {
  return exercises.reduce((total, score) => total + score);
}

function getLetterGrade(score) {
  if (score >= 93) {
    return 'A';
  } else if (score >= 85 && score < 93) {
    return 'B';
  } else if (score >= 77 && score < 85) {
    return 'C';
  } else if (score >= 69 && score < 77) {
    return 'D';
  } else if (score >= 60 && score < 69) {
    return 'E';
  } else {
    return 'F';
  }
}

function getExamSummary(examScoresPerStudent) {
  let scoresPerExam = transpose(examScoresPerStudent);

  return scoresPerExam.map(examScores => {
    return {
      average: parseFloat(getExamAverage(examScores)),
      minimum: getExamMinimum(examScores),
      maximum: getExamMaximum(examScores),
    };
  });
}

function transpose(array) {
  return array[0].map((col, columnIdx) => {
    return array.map(row => row[columnIdx]);
  });
}

function computeExamAverage(scores) {
  return (scores.reduce((total, score) => total + score) / scores.length)
            .toFixed(1);
}

function computeExamMax(scores) {
  return (scores.reduce((min, score) => min <= score ? min : score));
}

function computeExamMin(scores) {
  return (scores.reduce((min, score) => min <= score ? min : score));
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }