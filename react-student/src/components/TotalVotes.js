import React from "react";
import { useVoteContext } from "../VoteContext";

const TotalVotes = () => {
  const { candidates } = useVoteContext();

  const totalVotes = candidates.reduce(
    (total, candidate) => total + candidate.votes,
    0
  );

  return (
    <div>
      <h1>Total Votes: {totalVotes}</h1>
    </div>
  );
};

export default TotalVotes;
