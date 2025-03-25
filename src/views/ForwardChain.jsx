import { useState } from "react";
import sea from "../assets/sea.jpg";

export default function ForwardChainTripPlanner() {
  // Knowledge base
  const [facts, setFacts] = useState({
    likes_warm_weather: null,
    prefers_adventure: null,
    enjoys_history: null,
    likes_nature: null,
    prefers_luxury: null,
    prefers_fast_paced: null,
    enjoys_food: null,
    has_high_budget: null,
    enjoys_beach: null,
    prefers_city: null,
  });

  // Question Map
  const questionMap = {
    likes_warm_weather: "Do you prefer warm weather?",
    prefers_adventure: "Do you enjoy adventurous activities?",
    enjoys_history: "Are you interested in historical landmarks and culture?",
    likes_nature: "Do you enjoy being surrounded by nature?",
    prefers_luxury: "Do you prefer luxury accommodations?",
    prefers_fast_paced: "Do you like fast-paced itineraries with lots to do?",
    enjoys_food: "Is food a big part of travel enjoyment for you?",
    has_high_budget: "Do you have a high budget for this trip?",
    enjoys_beach: "Do you enjoy spending time on the beach?",
    prefers_city: "Do you prefer city environments over rural settings?",
  };

  // Find first unanswered question
  const nextUnansweredFact = Object.keys(facts).find(
    (fact) => facts[fact] === null
  );

  const askQuestion = (fact) => {
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

  // Inference engine
  const forwardChain = () => {
    // Ask questions one by one
    if (nextUnansweredFact) {
      return askQuestion(nextUnansweredFact);
    }

    // All questions answered – make a recommendation
    let recommendation = "";
    let explanation = "Based on your preferences: ";

    const f = facts; // shorthand

    if (
      f.likes_warm_weather === "Yes" &&
      f.enjoys_beach === "Yes" &&
      f.prefers_luxury === "Yes" &&
      f.has_high_budget === "Yes"
    ) {
      recommendation = "We recommend a luxurious stay in the Maldives. 🌴";
      explanation += "you love beaches, warmth, and luxury.";
    } else if (
      f.prefers_city === "Yes" &&
      f.enjoys_history === "Yes" &&
      f.enjoys_food === "Yes"
    ) {
      recommendation =
        "A cultural tour of Rome or Paris could be amazing. 🏛️🍷";
      explanation += "you enjoy cities, history, and great cuisine.";
    } else if (
      f.likes_nature === "Yes" &&
      f.prefers_adventure === "Yes" &&
      f.prefers_fast_paced === "Yes"
    ) {
      recommendation =
        "Consider a backpacking trip through New Zealand or Costa Rica. 🥾🌋";
      explanation += "you love nature and adventure in an active setting.";
    } else if (f.likes_warm_weather === "Yes" && f.enjoys_beach === "Yes") {
      recommendation =
        "A beach holiday in Thailand or Bali might suit you perfectly. 🏖️";
      explanation += "you enjoy warmth and beaches.";
    } else if (f.likes_nature === "Yes" && f.has_high_budget === "No") {
      recommendation =
        "How about a national park road trip in the US or Canada? 🚙🌲";
      explanation += "you love nature and want a budget-friendly option.";
    } else {
      recommendation =
        "A flexible trip with a mix of city and nature in Portugal or Spain might be ideal. 🌍";
      explanation += "you have a variety of interests.";
    }

    return (
      <div>
        <p>{recommendation}</p>
        <p>{explanation}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Forward Chaining: Trip Planner</h1>
      {forwardChain()}
      <img
        src={sea}
        alt="Scenic view"
        style={{ marginTop: "25px", width: "250px" }}
      />
    </div>
  );
}
