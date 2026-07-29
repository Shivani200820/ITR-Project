import ComplaintCard from "./ComplaintCard";

const complaints = [
  {
    id: 1,
    title: "Road Damage",
    description: "Large pothole near the signal.",
    status: "Pending",
    priority: "High",
  },
  {
    id: 2,
    title: "Garbage Overflow",
    description: "Garbage bins are overflowing.",
    status: "Resolved",
    priority: "Medium",
  },
];

function ComplaintList() {
  return (
    <>
      {complaints.map((item) => (
        <ComplaintCard
          key={item.id}
          complaint={item}
        />
      ))}
    </>
  );
}

export default ComplaintList;