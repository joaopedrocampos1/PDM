import { View, FlatList, StyleSheet } from 'react-native';
import DespesaSumario from './DespesaSumario';
import DespesaItem from './DespesaItem';

// 1. Função que ensina o FlatList a desenhar cada linha da despesa
function renderDespesaItem(itemData) {
  return <DespesaItem {...itemData.item} />;
}

// 2. Agora o componente recebe as props (despesas e despesasPeriodo)
function DespesaSaida({ despesas, despesasPeriodo }) {
  return (
    <View style={styles.container}>
      {/* 3. Repassa os dados para o Sumário fazer a conta certa */}
      <DespesaSumario despesas={despesas} periodoNome={despesasPeriodo} />
      
      {/* 4. Troca os itens estáticos pelo FlatList automático */}
      <FlatList
        data={despesas}
        renderItem={renderDespesaItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default DespesaSaida;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: '#f8f8f8',
  }
});