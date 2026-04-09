import { View, Text, StyleSheet } from 'react-native';

function DespesaSumario({ despesas = [], periodoNome }) {
  // A função reduce soma todos os valores do array de despesas
  const somaDespesas = despesas.reduce((soma, despesa) => {
    return soma + despesa.valor;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.periodo}>{periodoNome}</Text>
      <Text style={styles.soma}>R$ {somaDespesas.toFixed(2)}</Text>
    </View>
  );
}

export default DespesaSumario;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f5c6cb', // Fundo destacado para o total
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  periodo: {
    fontSize: 14,
    color: '#333',
  },
  soma: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#900',
  }
});