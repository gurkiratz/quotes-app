import { useAppDispatch, useAppSelector } from '@/hooks'
import { addQuote, setCurrentQuote } from '@/redux/quoteSlice'
import { RootState } from '@/redux/store'
import React, { FC, useEffect } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'
import Toast from 'react-native-toast-message'

const RandomQuoteComponent: React.FC = () => {
  const dispatch = useAppDispatch()
  const currentQuote = useAppSelector(
    (state: RootState) => state.quotes.currentQuote
  )

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('http://api.quotable.io/quotes/random')
      const data = await response.json()
      const quote = data[0]
      dispatch(
        setCurrentQuote({
          id: quote._id,
          content: quote.content,
          author: quote.author,
        })
      )
    } catch (error) {
      console.log('Failed to fetch quote', error)
    }
  }

  useEffect(() => {
    fetchRandomQuote()
  }, [])

  const saveQuote = () => {
    if (currentQuote) {
      dispatch(addQuote(currentQuote))
      Toast.show({
        type: 'success',
        text1: 'Quote Saved',
        text2: 'The quote has been added to your collection.',
      })
    }
  }

  return (
    <View style={styles.container}>
      {currentQuote && (
        <>
          <ThemedView style={styles.container}>
            <ThemedText style={styles.quoteText}>
              "{currentQuote.content}"
            </ThemedText>
            <ThemedText type="subtitle" style={styles.authorText}>
              - {currentQuote.author}
            </ThemedText>
          </ThemedView>
        </>
      )}
      <TouchableOpacity style={styles.button} onPress={saveQuote}>
        <Text style={styles.buttonText}>Save Quote</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={fetchRandomQuote}>
        <Text style={styles.buttonText}>Fetch New Quote</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  authorText: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
})

export default RandomQuoteComponent
