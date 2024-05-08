// VotingForm.js

import React, { useState } from "react";
import { useVoteContext } from "../VoteContext";
import Modal from "./Modal";

const VotingForm = () => {
  const { candidates, handleVote } = useVoteContext();
  const [voterName, setVoterName] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (voterName && selectedCandidate) {
      handleVote(selectedCandidate, voterName);
      setVoterName("");
      setSelectedCandidate("");
      setShowModal(false); // Close modal after submitting vote
    }
  };

  return (
    <div>
      <h2>Cast Your Vote</h2>
      <button onClick={() => setShowModal(true)}>Cast Vote</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={voterName}
              onChange={(e) => setVoterName(e.target.value)}
              required
            />
            <select
              value={selectedCandidate}
              onChange={(e) => setSelectedCandidate(e.target.value)}
              required
            >
              <option value="">Select Candidate</option>
              {candidates.map((candidate) => (
                <option key={candidate.id} value={candidate.name}>
                  {candidate.name}
                </option>
              ))}
            </select>
            <button type="submit">Submit Vote</button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default VotingForm;
