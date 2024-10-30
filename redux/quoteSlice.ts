import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the Quote type
interface Quote {
  id: string
  content: string
  author: string
}

// Define the initial state
interface QuotesState {
  quotes: Quote[]
  currentQuote: Quote | null
}

const initialState: QuotesState = {
  quotes: [],
  currentQuote: null,
}

// Create the slice
const quoteSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    addQuote: (state, action: PayloadAction<Quote>) => {
      const quoteExists = state.quotes.some(
        (quote) => quote.id === action.payload.id
      )
      if (!quoteExists) {
        state.quotes.push(action.payload)
      }
    },
    removeQuote: (state, action: PayloadAction<string>) => {
      state.quotes = state.quotes.filter((quote) => quote.id !== action.payload)
    },
    setCurrentQuote: (state, action: PayloadAction<Quote>) => {
      state.currentQuote = action.payload
    },
  },
})

// Export actions
export const { addQuote, removeQuote, setCurrentQuote } = quoteSlice.actions

// Export reducer
export default quoteSlice.reducer
