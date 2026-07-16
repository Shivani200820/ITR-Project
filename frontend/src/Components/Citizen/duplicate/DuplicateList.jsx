import DuplicateCard from "./DuplicateCard";

const complaints = [
  {
    id: 101,
    title: "Road Damage",
    location: "Shivaji Nagar",
    distance: "120 meters",
    support: 18,
    priority: "High",
    status: "In Progress",
  },
  {
    id: 102,
    title: "Road Damage",
    location: "JM Road",
    distance: "300 meters",
    support: 8,
    priority: "Medium",
    status: "Pending",
  },
];

function DuplicateList() {
  return (
    <>
      {complaints.map((item) => (
        <DuplicateCard
          key={item.id}
          complaint={item}
        />
      ))}
    </>
  );
}

export default DuplicateList;