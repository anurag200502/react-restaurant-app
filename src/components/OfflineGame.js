import React, { useState, useEffect } from "react";

const OfflineGame = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [obstaclePosition, setObstaclePosition] = useState(100);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (obstaclePosition > 0) {
        setObstaclePosition(obstaclePosition - 2);
      } else {
        setObstaclePosition(100);
        setScore(score + 1);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [obstaclePosition, score]);

  const handleJump = () => {
    if (!isJumping) {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 500);
    }
  };

  return (
    <div
      onClick={handleJump}
      style={{ textAlign: "center", marginTop: "20px" }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "150px",
          backgroundColor: "#f0f0f0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: isJumping ? "100px" : "0",
            left: "50px",
            width: "50px",
            height: "50px",
            backgroundColor: "#1976d2",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            right: `${obstaclePosition}%`,
            width: "50px",
            height: "50px",
            backgroundColor: "#555",
          }}
        />
      </div>
      <p>Score: {score}</p>
    </div>
  );
};

export default OfflineGame;
