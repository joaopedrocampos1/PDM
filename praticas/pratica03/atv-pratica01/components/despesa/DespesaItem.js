import { Pressable, View, Text, StyleSheet } from 'react-native';

// Recebe as props para preencher os dados reais
function DespesaItem({ descricao, valor, data }) {
  return (
    <Pressable>
      <View style={styles.despesaItem}>
        <View>
          <Text style={[styles.textBase, styles.descricao]}>{descricao}</Text>
          <Text style={styles.textBase}>{data.toLocaleDateString('pt-BR')}</Text>
        </View>
        <View style={styles.valorContainer}>
          <Text style={styles.valor}>R$ {valor.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default DespesaItem;

const styles = StyleSheet.create({
  despesaItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#e6e6fa', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3, 
  },
  textBase: {
    color: '#333',
  },
  descricao: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  valorContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  valor: {
    color: '#333',
    fontWeight: 'bold',
  }
});