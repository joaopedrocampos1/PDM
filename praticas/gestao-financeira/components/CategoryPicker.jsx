import { Picker } from "@react-native-picker/picker"
import { StyleSheet, Text, View } from "react-native"
import { categories } from "../constants/categories"
import { colors } from "../constants/colors"
import { globalStyles } from "../styles/globalStyles"

const categoryOptions = Object.values(categories)

export default function CategoryPicker({ form, setForm }) {
  return (
    <View>
      <Text style={globalStyles.inputLabel}>Categoria</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={form.category}
          onValueChange={(category) =>
            setForm((currentForm) => ({ ...currentForm, category }))
          }
        >
          {categoryOptions.map((category) => (
            <Picker.Item
              key={category.name}
              label={category.displayName}
              value={category.name}
            />
          ))}
        </Picker>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  picker: {
    justifyContent: "center",
    minHeight: 44,
    borderColor: colors.secondaryText,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: colors.primaryContrast,
  },
})
