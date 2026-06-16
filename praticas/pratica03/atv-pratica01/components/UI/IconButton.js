import { Pressable, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icone, tamanho, cor, onPress }) {
  return (
    <Pressable 
      onPress={onPress} 
      style={({ pressed }) => pressed && styles.pressionado}
    >
      <View style={styles.containerBotao}>
        <Ionicons name={icone} size={tamanho} color={cor} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  containerBotao: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2
  },
  pressionado: {
    opacity: 0.75, 
  }
});