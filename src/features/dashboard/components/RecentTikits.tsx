import RecentTikitCard from "./RecentTikitCard";

const RecentTickets = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {[1, 2, 3, 4].map((card) => (
        <RecentTikitCard />
      ))}
    </div>
  );
};

export default RecentTickets;
