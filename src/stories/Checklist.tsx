import ChecklistItem from "./ChecklistItem.tsx";
import React from "react";

interface ChecklistProps {
  header?: string;
  items: string[];
}

const Checklist: React.FC<ChecklistProps> = ({ header, items = [] }) => {
  if (!Array.isArray(items)) {
    console.error(
      "Invalid prop `items` in `Checklist`: expected an array of strings. " +
        "Received: " +
        typeof items,
    );
    return null;
  }

  return (
    <div>
      {header && (
        <h3
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          {header}
        </h3>
      )}
      {items.map((item, index) => (
        <ChecklistItem key={index} text={item} />
      ))}
    </div>
  );
};

export default Checklist;
