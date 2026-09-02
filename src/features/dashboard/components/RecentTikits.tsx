import RecentTikitCard from "./RecentTikitCard";

const RecentTickets = () => {
  return (
    <div className="mx-w-7xl mx-auto">
      <div className="grid grid-cols-4 gap-5">
        {[1, 2, 3, 4].map((card) => (
          <RecentTikitCard />
        ))}
      </div>
    </div>
  );
};

export default RecentTickets;
