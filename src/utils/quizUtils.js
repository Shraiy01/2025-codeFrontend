export const getScoreMessage = (score, total) => {
  const percentage = (score / total) * 100;
  
  if (percentage === 100) {
    return "Perfect score! You know me so well, my love! 💝";
  } else if (percentage >= 80) {
    return "Amazing! You really pay attention to our special moments! 💖";
  } else if (percentage >= 60) {
    return "Pretty good! We have so many memories together! 💕";
  } else if (percentage >= 40) {
    return "Not bad! Let's make even more memories together! 💓";
  } else {
    return "Aw, that's okay! Every day is a chance to learn more about each other! 💗";
  }
};