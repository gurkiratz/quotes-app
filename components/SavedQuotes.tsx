import { useAppDispatch } from '@/hooks'
import { removeQuote } from '@/redux/quoteSlice'
import { RootState } from '@/redux/store'
import { Ionicons } from '@expo/vector-icons'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

const SavedQuotesComponent: React.FC = () => {
  const dispatch = useAppDispatch()
  const quotes = useSelector((state: RootState) => state.quotes.quotes)

  const handleRemoveQuote = (id: string) => {
    dispatch(removeQuote(id))
  }

  const renderQuote = ({
    item,
  }: {
    item: { id: string; content: string; author: string }
  }) => (
    <View style={styles.card}>
      <Text style={styles.quoteText}>"{item.content}"</Text>
      <Text style={styles.authorText}>- {item.author}</Text>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => handleRemoveQuote(item.id)}
      >
        <Ionicons name="close" size={24} color="red" />
      </TouchableOpacity>
    </View>
  )

  return (
    <FlatList
      data={quotes}
      renderItem={renderQuote}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    position: 'relative',
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  authorText: {
    fontSize: 14,
    marginBottom: 10,
  },
  removeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
})
export default SavedQuotesComponent
