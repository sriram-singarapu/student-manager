import React from "react";
import TotalVotes from "./components/TotalVotes";
import VotingForm from "./components/VotingForm";
import CandidatesList from "./components/CandidatesList";
import { VoteProvider } from "./VoteContext";

const App = () => {
  return (
    <VoteProvider>
      <div>
        <TotalVotes />
        <VotingForm />
        <CandidatesList />
      </div>
    </VoteProvider>
  );
};

export default App;
