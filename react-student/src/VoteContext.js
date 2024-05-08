import React, { createContext, useContext, useState } from "react";

const VoteContext = createContext();

export const useVoteContext = () => useContext(VoteContext);

export const VoteProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: "Vivek", votes: 0 },
    { id: 2, name: "Parvez", votes: 0 },
    { id: 3, name: "Prachuth", votes: 0 },
  ]);

  const [votesByVoter, setVotesByVoter] = useState({});

  const handleVote = (selectedCandidate, voterName) => {
    const updatedCandidates = candidates.map((candidate) =>
      candidate.name === selectedCandidate
        ? { ...candidate, votes: candidate.votes + 1 }
        : candidate
    );

    const updatedVotesByVoter = {
      ...votesByVoter,
      [selectedCandidate]: [
        ...(votesByVoter[selectedCandidate] || []),
        voterName,
      ],
    };

    setCandidates(updatedCandidates);
    setVotesByVoter(updatedVotesByVoter);
  };

  const handleDeleteVoter = (candidateName, voterName) => {
    const updatedVotesByVoter = {
      ...votesByVoter,
      [candidateName]: votesByVoter[candidateName].filter(
        (name) => name !== voterName
      ),
    };

    const updatedCandidates = candidates.map((candidate) => {
      if (candidate.name === candidateName) {
        return {
          ...candidate,
          votes: updatedVotesByVoter[candidateName].length,
        };
      }
      return candidate;
    });

    setCandidates(updatedCandidates);
    setVotesByVoter(updatedVotesByVoter);
  };

  return (
    <VoteContext.Provider
      value={{ candidates, votesByVoter, handleVote, handleDeleteVoter }}
    >
      {children}
    </VoteContext.Provider>
  );
};
