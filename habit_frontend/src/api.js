const API_URL = "http://127.0.0.1:8000/api/habits/";

export const getHabits = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const addHabit = async (habitData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(habitData),
  });
  return response.json();
};

export const toggleHabitStatus = async (id, isCompleted) => {
  const response = await fetch(`${API_URL}${id}/`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isCompleted: !isCompleted }),
  });
  return response.json();
};

export const deleteHabit = async (id) => {
  await fetch(`${API_URL}${id}/`, { method: "DELETE" });
};
