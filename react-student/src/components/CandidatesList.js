import React from "react";
import { useVoteContext } from "../VoteContext";

const CandidatesList = () => {
  const { candidates, votesByVoter, handleDeleteVoter } = useVoteContext();

  const handleDelete = (candidateName, voterName) => {
    handleDeleteVoter(candidateName, voterName);
  };

  return (
    <div>
      <h2>Candidates and Votes</h2>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>
            {candidate.name}: {candidate.votes} votes
            <ul>
              {votesByVoter[candidate.name] &&
                votesByVoter[candidate.name].map((voter, index) => (
                  <li key={index}>
                    {voter}
                    <button onClick={() => handleDelete(candidate.name, voter)}>
                      Delete
                    </button>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidatesList;
