
// EXERCÍCIO DO DESAFIO 02

const students = [
  {
    name: "Márcio",
    note1: 4.9,
    note2: 7.3
  },
  {
    name: "Ellen",
    note1: 4.2,
    note2: 5.1
  },
  {
    name: "Gabriel",
    note1: 3.9,
    note2: 5.9
  },
  {
    name: "Victor",
    note1: 3.0,
    note2: 7.5
  },
  {
    name: "Guilherme",
    note1: 9.9,
    note2: 10
  },
  {
    name: "Julice Magno",
    note1: 5.9,
    note2: 1.0
  },
  {
    name: "Tata Serrão",
    note1: 2.9,
    note2: 10
  },

];



function averageGrade(note1, note2) {
  return((note1 + note2) / 2).toFixed(2);
}

function printAverageStudent(student) {
  return `A média do(a) aluno(a) ${student.name} é: ${averageGrade(student.note1, student.note2)}`;
}

function printMessageStudent(student) {
  if (averageGrade(student.note1, student.note2) >= 7) {
    return `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`;
  } else {
    return `Não foi desta vez, ${student.name}! Tente novamente!`;
  }
}

for (let student of students) {
  let averageStudent = printAverageStudent(student);
  let messageStudent = printMessageStudent(student);


  alert(`${averageStudent}\n${messageStudent}`);
}