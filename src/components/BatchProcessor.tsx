import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Zap, RefreshCw, PlayCircle, PauseCircle } from 'lucide-react'

interface Question {
  id: number
  text: string
  category: string
}

interface BatchProcessorProps {
  'data-id'?: string
}

export const BatchProcessor: React.FC<BatchProcessorProps> = ({
  'data-id': dataId,
}) => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [step, setStep] = useState(0)

  const questions: Question[] = [
    {
      id: 1,
      text: "What's the weather like?",
      category: 'weather',
    },
    {
      id: 2,
      text: 'Is it going to rain today?',
      category: 'weather',
    },
    {
      id: 3,
      text: "What's the temperature now?",
      category: 'weather',
    },
    {
      id: 4,
      text: 'Who won the game?',
      category: 'sports',
    },
    {
      id: 5,
      text: "What's the final score?",
      category: 'sports',
    },
    {
      id: 6,
      text: 'When is the next match?',
      category: 'sports',
    },
  ]

  const toggleProcessing = () => {
    if (!isProcessing) {
      setStep(0)
      setIsProcessing(true)
      const interval = setInterval(() => {
        setStep((prev) => {
          if (prev >= 2) {
            clearInterval(interval)
            return prev
          }
          return prev + 1
        })
      }, 2000)
    } else {
      setIsProcessing(false)
    }
  }

  const reset = () => {
    setIsProcessing(false)
    setStep(0)
  }

  return (
    <div data-id={dataId} className="w-full bg-surface rounded-2xl p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Brain className="text-primary" />
            AI Batch Processing Demo
          </h3>
          <div className="flex gap-2">
            <button
              onClick={toggleProcessing}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              {isProcessing ? (
                <PauseCircle size={20} />
              ) : (
                <PlayCircle size={20} />
              )}
              {isProcessing ? 'Pause' : 'Start'}
            </button>
            <button
              onClick={reset}
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <RefreshCw size={20} />
              Reset
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Without Batching
            </h4>
            <div className="space-y-3">
              {questions.map((q) => (
                <motion.div
                  key={q.id}
                  className="p-3 bg-surface-variant rounded-lg border border-border"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Zap className="text-energy" size={16} />
                    <span className="text-sm text-muted-foreground">{q.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-destructive/10 rounded-lg">
              <p className="text-destructive text-sm">
                6 separate API calls = Higher computational cost
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              With Batching
            </h4>
            <AnimatePresence>
              {step >= 1 && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  className="space-y-4"
                >
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h5 className="font-medium text-primary mb-2">
                      Weather Questions
                    </h5>
                    {questions
                      .filter((q) => q.category === 'weather')
                      .map((q) => (
                        <div
                          key={q.id}
                          className="ml-4 text-sm text-muted-foreground mb-1"
                        >
                          • {q.text}
                        </div>
                      ))}
                  </div>
                  {step >= 2 && (
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      className="p-4 bg-accent/10 rounded-lg border border-accent/20"
                    >
                      <h5 className="font-medium text-accent mb-2">
                        Sports Questions
                      </h5>
                      {questions
                        .filter((q) => q.category === 'sports')
                        .map((q) => (
                          <div
                            key={q.id}
                            className="ml-4 text-sm text-muted-foreground mb-1"
                          >
                            • {q.text}
                          </div>
                        ))}
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            {step >= 2 && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                className="mt-4 p-4 bg-accent/10 rounded-lg"
              >
                <p className="text-accent text-sm">
                  2 batched API calls = Lower computational cost
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}