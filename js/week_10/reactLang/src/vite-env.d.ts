/// <reference types="vite/client" />

type LangType = "ja" | "ur" | 'es' | "fr"

type WordType = {
    word: string,
    meaning: string,
    options: string[]
}

interface StateType {
    loading: boolean,
    result: string[],
    words: word[]
    error?: string
}