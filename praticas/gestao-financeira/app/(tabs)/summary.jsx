import { useContext, useMemo } from "react"
import { StyleSheet, Text, View } from "react-native"

import SummaryItem from "../../components/SummaryItem"
import { categories } from "../../constants/categories"
import { colors } from "../../constants/colors"
import { MoneyContext } from "../../contexts/GlobalState"
import { globalStyles } from "../../styles/globalStyles"

const summaryCategories = Object.values(categories)

function calculateTotals(transactions) {
  const totals = summaryCategories.reduce(
    (accumulator, category) => ({
      ...accumulator,
      [category.name]: 0,
    }),
    { balance: 0 },
  )

  transactions.forEach((transaction) => {
    if (!totals.hasOwnProperty(transaction.category)) {
      return
    }

    const value = Number(transaction.value)
    totals[transaction.category] += value

    if (transaction.category === categories.income.name) {
      totals.balance += value
    } else {
      totals.balance -= value
    }
  })

  return totals
}

export default function Summary() {
  const [transactions] = useContext(MoneyContext)
  const totals = useMemo(
    () => calculateTotals(transactions),
    [transactions],
  )

  const balanceStyle =
    totals.balance >= 0 ? globalStyles.positiveText : globalStyles.negativeText

  return (
    <View style={globalStyles.screenContainer}>
      <View style={globalStyles.content}>
        {summaryCategories.map((category) => (
          <SummaryItem
            key={category.name}
            category={category.name}
            value={totals[category.name]}
          />
        ))}

        <View style={globalStyles.line} />

        <View style={styles.balance}>
          <Text style={styles.balanceText}>Saldo</Text>
          <Text style={balanceStyle}>{formatCurrency(totals.balance)}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  balance: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  balanceText: {
    fontSize: 18,
    color: colors.primaryText,
    fontWeight: "800",
  },
})

function formatCurrency(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}
