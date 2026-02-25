// 1 zadanie
/*
const users = [
  { username: "David", status: "online", lastActivity: 10 },
  { username: "Lucy", status: "offline", lastActivity: 22 },
  { username: "Bob", status: "online", lastActivity: 104 },
];

const onlineUsers = users.filter((u) => u.status === "online");
const usersOnlineNames = onlineUsers.map((u) => u.username).join(", ");

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);
//2 zadanie
function giveTalonsInOrder(patients, orders) {
  const byId = Object.fromEntries(patients.map((p) => [p.id, p]));
  return orders.map((id) => byId[id]).filter(Boolean);
}

const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" },
];

const result = giveTalonsInOrder(people, ordersArr);
console.log("result", result);

//3 zadanie
function objectHandler(target, key, type) {
  if (type === "get") return target[key];

  if (type === "add" || type === "delete") {
    type === "add" ? (target[key] = "") : delete target[key];
    return target;
  }

  return target;
}

const student = {
  name: "Maxim",
  programmingLanguage: "JavaScript",
};

const result = objectHandler(student, "programmingLanguage", "delete");
console.log("result", result);

//4 zadanie

function employStudent(studentInfo, jobTitle) {
  alert(
    `Поздравляем! У студента ${studentInfo.fullName} появилась новая работа! Теперь он ${jobTitle}`,
  );

  return {
    ...studentInfo,
    profession: jobTitle,
  };
}

const student4 = {
  fullName: "Максим",
  experienceInMonths: 12,
  stack: ["HTML", "CSS", "JavaScript", "React"],
};

const updatedStudent = assignJobToPerson(student4, "веб-разработчик");
console.log(updatedStudent);
*/
