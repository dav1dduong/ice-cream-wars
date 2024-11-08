import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [voteChoc, setVoteChoc] = useState(0);
  const [voteStraw, setVoteStraw] = useState(0);
  const [voteVan, setVoteVan] = useState(0);
  const totalVotes = voteChoc + voteStraw + voteVan;
  const getPercentage = (vote: number) => {
    return `${((vote / totalVotes) * 100).toFixed(1)}%`;
  };
  return (
    <div className="Votes">
      <h2>Vote Here</h2>
      {totalVotes > 0 ? (
        <>
          <p>
            Chocolate: {voteChoc}({getPercentage(voteChoc)})
          </p>
          <div
            className="vChocolate"
            style={{
              width: getPercentage(voteChoc),
              backgroundColor: "saddlebrown",
              height: "25px",
            }}
          ></div>
          <p>
            Vanilla: {voteVan} ({getPercentage(voteVan)})
          </p>
          <div
            className="vVanilla"
            style={{
              width: getPercentage(voteVan),
              backgroundColor: "beige",
              height: "25px",
            }}
          ></div>
          <p>
            Strawberry: {voteStraw} ({getPercentage(voteStraw)})
          </p>
          <div
            className="vStraw"
            style={{
              width: getPercentage(voteStraw),
              backgroundColor: "thistle",
              height: "25px",
            }}
          ></div>
        </>
      ) : (
        <p>No Votes Yet</p>
      )}
      <button
        onClick={() => {
          setVoteChoc(voteChoc + 1);
        }}
      >
        Chocolate
      </button>
      <button
        onClick={() => {
          setVoteVan(voteVan + 1);
        }}
      >
        Vanilla
      </button>
      <button
        onClick={() => {
          setVoteStraw(voteStraw + 1);
        }}
      >
        Strawberry
      </button>
      <div></div>
    </div>
  );
};

export default Votes;
