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
      {candidates.map((candidate) => (
        <div key={candidate.id}>
          <h1>{candidate.name}</h1>
          <p>Candidate votes: {candidate.votes} votes</p>

          <div>
            {votesByVoter[candidate.name] && (
              <ul>
                {votesByVoter[candidate.name].map((voter, index) => (
                  <li key={index}>
                    {voter}
                    <button onClick={() => handleDelete(candidate.name, voter)}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CandidatesList;
