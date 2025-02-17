import React, { useState, useCallback, useMemo } from "react";
import data from "../data";
import Button from "../components/Button";
import useTypedText from "../hooks/UseTypedText";
import useTimer from "../hooks/UseTimer";

const Quiz = () => {
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [attemptsLeft, setAttemptsLeft] = useState(2);
    const [gameOver, setGameOver] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const rulesText = useMemo(() => `
Welcome to the Quiz Game!
    
- You will answer 5 multiple-choice questions.
- Each question has 4 answer options, choose wisely!
- You have only 2 chances to fail before Game Over.
- Each question must be answered within 15 seconds.
- If the timer runs out, you will lose an attempt.
- The correct answer will highlight in green, incorrect in red.
- Click "Next Question" to continue or "Try Again" to restart.

Good luck!`, []);

    const typedRules = useTypedText(rulesText, 20);

    const currentQuestion = useMemo(() => data.quizData[currentQuestionIndex], [currentQuestionIndex]);

    const onTimeUp = useCallback(() => {
        setAttemptsLeft((prev) => {
            if (prev - 1 <= 0) {
                setGameOver(true);
                return 0;
            }
            return prev - 1;
        });

        setCurrentQuestionIndex((prev) => (prev + 1 < data.quizData.length ? prev + 1 : prev));
    }, []);
    const { timeLeft, resetTimer } = useTimer(15, onTimeUp, quizStarted);

    const startQuiz = useCallback(() => {
        setQuizStarted(true);
        resetTimer();
    }, [resetTimer]);

    const handleAnswerClick = useCallback((index) => {
        if (gameOver || isAnswered) return;

        setSelectedAnswerIndex(index);
        setIsAnswered(true);

        if (index === currentQuestion.correctAnswerIndex) {
            setScore((prev) => prev + 1);
        } else {
            setAttemptsLeft((prev) => {
                if (prev - 1 <= 0) {
                    setGameOver(true);
                    return 0;
                }
                return prev - 1;
            });
        }
    }, [gameOver, isAnswered, currentQuestion.correctAnswerIndex]);

    const handleNext = useCallback(() => {
        if (!isAnswered) return;

        setSelectedAnswerIndex(null);
        setIsAnswered(false);

        setCurrentQuestionIndex((prev) => {
            if (prev + 1 < data.quizData.length) {
                resetTimer();
                return prev + 1;
            } else {
                setGameOver(true);
                return prev;
            }
        });
    }, [isAnswered, resetTimer]);

    const resetGame = useCallback(() => {
        setQuizStarted(false);
        setCurrentQuestionIndex(0);
        setScore(0);
        setAttemptsLeft(2);
        setGameOver(false);
        setSelectedAnswerIndex(null);
        setIsAnswered(false);
        resetTimer();
    }, [resetTimer]);

    return (
        <div className="py-24 text-white h-full">
            {!quizStarted ? (
                <div>
                    <h1 className="text-shadow mb-6 mt-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-green-400">
                        Quiz Rules
                    </h1>
                    <pre className="min-h-48 text-xs mb-6 font-light lg:mb-8 text-yellow-300 whitespace-pre-wrap">
                        {typedRules}
                    </pre>
                    <Button onClick={startQuiz} text={'Start Quiz'} />
                </div>
            ) : gameOver ? (
                <div className="text-center">
                    <h1 className="text-shadow mb-6 mt-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-red-400">
                        {score < 2 ?? 'Game Over'}
                        {(score > 3 && score < 5) && 'Not bad'}
                        {score >= 5 && 'Well done!'}
                    </h1>
                    <p className="mb-6 text-xl font-semibold text-yellow-300 mt-4">Your score: {score}</p>
                    <Button onClick={resetGame} text={'Try Again'} />
                </div>
            ) : (
                <>
                    <h1 className="text-shadow mb-6 mt-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-green-400">
                        Quiz Game
                    </h1>
                    <div className="flex justify-between gap-4">
                        <p className="text-xl font-semibold text-yellow-300 mt-4">Score: {score}</p>
                        <p className="text-xl font-semibold text-yellow-300 mt-4">Lives: {attemptsLeft}</p>
                        <p className="text-xl font-semibold text-red-300 mt-4">Time: {timeLeft}s</p>
                    </div>
                    <div>
                        <p className="text-lg font-bold mt-6">{currentQuestion.question}</p>
                        <ul className="grid grid-cols-2 gap-4 my-6">
                            {currentQuestion.options.map((option, index) => {
                                let bgColor = "border-green-400 hover:bg-yellow-300 hover:text-black";
                                if (isAnswered) {
                                    if (index === currentQuestion.correctAnswerIndex) {
                                        bgColor = "bg-green-500 text-white";
                                    } else if (index === selectedAnswerIndex) {
                                        bgColor = "bg-red-500 text-white";
                                    }
                                }
                                return (
                                    <li key={index}>
                                        <button
                                            className={`w-full border p-4 text-center transition-colors ${bgColor}`}
                                            onClick={() => handleAnswerClick(index)}
                                            disabled={isAnswered}
                                        >
                                            {option}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {isAnswered && (
                        <div className="flex justify-center mt-4">
                            <Button onClick={handleNext} text={'Next Question'} />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Quiz;
