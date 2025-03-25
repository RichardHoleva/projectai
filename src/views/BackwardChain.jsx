import { useState } from "react";
import sea from "../assets/sea.jpg";

export default function BackwardChain() {
  const [facts, setFacts] = useState({
    likes_sun: null,
    enjoys_swimming: null,
    dislikes_cold: null,
    likes_beaches: null,
    has_swimwear: null,
    enjoys_seafood: null,
    wants_to_relax: null,
    likes_warm_weather: null,
    has_budget: null,
  });

  const askQuestion = (fact) => {
    const questionMap = {
      likes_sun: "Do you like being in the sun?",
      enjoys_swimming: "Do you enjoy swimming?",
      dislikes_cold: "Do you dislike cold weather?",
      likes_beaches: "Do you enjoy spending time on beaches?",
      has_swimwear: "Do you have swimwear ready for a trip?",
      enjoys_seafood: "Do you enjoy eating seafood?",
      wants_to_relax: "Are you looking for a relaxing trip?",
      likes_warm_weather: "Do you prefer warm weather over cold?",
      has_budget: "Do you have a budget for flights and accommodation?",
    };

    return (
      <div key={fact}>
        <p>{questionMap[fact]}</p>
        <button onClick={() => setFacts({ ...facts, [fact]: "Yes" })}>
          Yes
        </button>
        <button onClick={() => setFacts({ ...facts, [fact]: "No" })}>No</button>
      </div>
    );
  };

  const backwardChain = (goal) => {
    let conclusions = [];

    if (goal === "beach_vacation") {
      // Ask questions in order of importance
      const rules = [
        "likes_sun",
        "likes_warm_weather",
        "likes_beaches",
        "enjoys_swimming",
        "dislikes_cold",
        "has_swimwear",
        "wants_to_relax",
        "enjoys_seafood",
        "has_budget",
      ];

      for (let i = 0; i < rules.length; i++) {
        const fact = rules[i];
        if (facts[fact] === null) {
          return askQuestion(fact);
        }
        conclusions.push(`${fact.replace(/_/g, " ")}: ${facts[fact]}`);
      }

      const positiveAnswers = rules.every((fact) => facts[fact] === "Yes");

      if (positiveAnswers) {
        return (
          <div>
            <p>✅ CONCLUSION: A beach vacation is PERFECT for you! 🏖️</p>
            <p>Based on your preferences:</p>
            <ul>
              {conclusions.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>
        );
      } else {
        return (
          <div>
            <p>❌ CONCLUSION: A beach vacation might not be ideal.</p>
            <p>Based on your preferences:</p>
            <ul>
              {conclusions.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>
        );
      }
    }

    return <p>No matching goal found.</p>;
  };

  const goal = "beach_vacation";

  return (
    <div>
      <h1>Backward Chaining: Trip Planner</h1>
      <p>
        Should you go on a{" "}
        <span style={{ backgroundColor: "lightblue" }}>
          {goal.replace("_", " ")}
        </span>
        ?
      </p>
      {backwardChain(goal)}
      <img
        src={sea}
        alt="Beach"
        style={{ marginTop: "25px", width: "250px" }}
      />
    </div>
  );
}
