import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Image, Platform } from 'react-native'

import { Collapsible } from '@/components/Collapsible'
import { ExternalLink } from '@/components/ExternalLink'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import SavedQuotesComponent from '@/components/SavedQuotes'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={{ marginTop: 24 }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Saved Quotes</ThemedText>
      </ThemedView>
      <SavedQuotesComponent />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
})
