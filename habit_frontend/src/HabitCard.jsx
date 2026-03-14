import { useState } from "react";

const HabitCard = ({ habit, onToggle, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(habit.isCompleted);

  const handleToggle = () => {
    const newStatus = !isCompleted;
    setIsCompleted(newStatus);
    onToggle(habit.id, newStatus);
  };

  const handleDelete = () => {
    onDelete(habit.id);
  };

  return (
    <div className={`habit-card ${isCompleted ? "completed" : ""}`}>
      <div className="habit-content">
        <h3 className="habit-title">{habit.title}</h3>
        {habit.description && (
          <p className="habit-description">{habit.description}</p>
        )}
        <small className="habit-date">{habit.created_at}</small>
      </div>
      <div className="habit-actions">
        <button onClick={handleToggle} className="toggle-btn">
          {isCompleted ? "Сделано" : "Не сделано"}
        </button>
        <button onClick={handleDelete} className="delete-btn">
          Удалить
        </button>
      </div>
    </div>
  );
};

export default HabitCard;
