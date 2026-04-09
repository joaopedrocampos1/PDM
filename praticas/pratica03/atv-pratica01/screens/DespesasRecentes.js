import { View, StyleSheet } from 'react-native';
import DespesaSaida from '../components/despesa/DespesaSaida';

const DESPESAS_TESTE = [
  { id: 'e1', descricao: 'Tênis novo', valor: 250.00, data: new Date('2023-10-01') },
  { id: 'e2', descricao: 'Mercado', valor: 85.50, data: new Date('2023-10-05') },
  { id: 'e3', descricao: 'Uber', valor: 15.90, data: new Date('2023-10-10') },
];

function DespesasRecentes() {
  return (
    <View style={styles.container}>
      <DespesaSaida despesas={DESPESAS_TESTE} despesasPeriodo="Últimos 7 dias" />
    </View>
  );
}

export default DespesasRecentes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});