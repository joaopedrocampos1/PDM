import { useContext, useRef, useState } from "react"
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native"

import Button from "../../components/Button"
import CategoryPicker from "../../components/CategoryPicker"
import CurrencyInput from "../../components/CurrencyInput"
import DatePicker from "../../components/DatePicker"
import DescriptionInput from "../../components/DescriptionInput"
import { categories } from "../../constants/categories"
import { MoneyContext, saveTransactions } from "../../contexts/GlobalState"
import { globalStyles } from "../../styles/globalStyles"

function createInitialForm() {
  return {
    description: "",
    value: 0,
    date: new Date(),
    category: categories.income.name,
  }
}

function createTransactionId(transactions) {
  return transactions.length
    ? Math.max(...transactions.map((transaction) => transaction.id)) + 1
    : 1
}

function createTransaction(form, transactions) {
  return {
    id: createTransactionId(transactions),
    ...form,
    date: form.date.toISOString(),
  }
}

export default function AddTransactions() {
  const [form, setForm] = useState(createInitialForm)
  const [transactions, setTransactions] = useContext(MoneyContext)
  const valueInputRef = useRef(null)

  const addTransaction = async () => {
    const newTransaction = createTransaction(form, transactions)
    const updatedTransactions = [...transactions, newTransaction]

    setTransactions(updatedTransactions)
    setForm(createInitialForm())

    try {
      await saveTransactions(updatedTransactions)
      Alert.alert("Transação adicionada com sucesso!")
    } catch (error) {
      console.log(error)
      Alert.alert("Não foi possível salvar a transação.")
    }
  }

  return (
    <KeyboardAvoidingView style={globalStyles.screenContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={globalStyles.content}>
          <View style={styles.form}>
            <DescriptionInput
              form={form}
              setForm={setForm}
              valueInputRef={valueInputRef}
            />
            <CurrencyInput
              form={form}
              setForm={setForm}
              valueInputRef={valueInputRef}
            />
            <DatePicker form={form} setForm={setForm} />
            <CategoryPicker form={form} setForm={setForm} />
          </View>

          <Button onPress={addTransaction}>Adicionar</Button>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  form: {
    gap: 12,
    marginTop: 10,
    marginBottom: 40,
  },
})
