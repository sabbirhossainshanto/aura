const RecentWinner = ({ recentWinner }) => {
  return (
    <div className="flex justify-start w-full gap-1 p-1 overflow-x-scroll">
      {recentWinner?.map((winner) => {
        return (
          <span key={winner?.roundId}>
            <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
              <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                <span className="text-xs font-medium">{winner?.winner}</span>
              </div>
            </div>{" "}
          </span>
        );
      })}
    </div>
  );
};

export default RecentWinner;