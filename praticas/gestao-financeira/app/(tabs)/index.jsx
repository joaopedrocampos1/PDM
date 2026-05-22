import { useContext } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"

import TransactionItem from "../../components/TransactionItem"
import { MoneyContext } from "../../contexts/GlobalState"
import { globalStyles } from "../../styles/globalStyles"

export default function Transactions() {
  const [transactions] = useContext(MoneyContext)

  return (
    <View style={globalStyles.screenContainer}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <TransactionItem {...item} />}
        ListEmptyComponent={
          <Text style={[globalStyles.secondaryText, styles.emptyText]}>
            Ainda não há nenhum item!
          </Text>
        }
        contentContainerStyle={globalStyles.content}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  emptyText: {
    textAlign: "center",
    marginTop: 24,
  },
})
