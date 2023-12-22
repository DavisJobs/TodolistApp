export const types = () => {
  let listTasks = [];

  const objTask = {
    id: "",
    title: "",
    description: "",
    completed: false,
    date: {
      dateDay: "",
      dateDayNumber: "",
      dateMonth: "",
      dateYear: "",
      dateHours: "",
      dateMinutes: "",
      ampm: "",
    },
  };

  let editing = false;

  return {
    listTasks,
    objTask,
    editing,
  };
};
