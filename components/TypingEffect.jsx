'use client'

import { useState, useEffect } from 'react'

export default function TypingEffect({ words, speed = 100 }) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const current = words[currentWordIndex]
        let timeout

        if (!isDeleting && currentText.length < current.length) {
            // Typing
            timeout = setTimeout(() => {
                setCurrentText(current.substring(0, currentText.length + 1))
            }, speed)
        } else if (!isDeleting && currentText.length === current.length) {
            // Pause before deleting
            timeout = setTimeout(() => {
                setIsDeleting(true)
            }, 2000)
        } else if (isDeleting && currentText.length > 0) {
            // Deleting
            timeout = setTimeout(() => {
                setCurrentText(currentText.substring(0, currentText.length - 1))
            }, 50)
        } else if (isDeleting && currentText.length === 0) {
            // Move to next word
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }

        return () => clearTimeout(timeout)
    }, [currentText, isDeleting, currentWordIndex, words, speed])

    return (
        <span className="text-brand-primary dark:text-brand-accent font-mono">
            {currentText}
            <span className="animate-pulse">|</span>
        </span>
    )
}

