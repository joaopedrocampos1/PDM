import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, useEffect, useState } from "react"

const TRANSACTIONS_STORAGE_KEY = "transactions"

export const MoneyContext = createContext()

export default function GlobalState({ children }) {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const getStoredTransactions = async () => {
      try {
        const storedTransactions = await AsyncStorage.getItem(
          TRANSACTIONS_STORAGE_KEY,
        )

        if (storedTransactions) {
          setTransactions(JSON.parse(storedTransactions))
        }
      } catch (error) {
        console.log(error)
      }
    }

    getStoredTransactions()
  }, [])

  return (
    <MoneyContext.Provider value={[transactions, setTransactions]}>
      {children}
    </MoneyContext.Provider>
  )
}

export async function saveTransactions(transactions) {
  await AsyncStorage.setItem(
    TRANSACTIONS_STORAGE_KEY,
    JSON.stringify(transactions),
  )
}
