import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Button, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function GerenciarDespesa({ navigation }) {
  const [data, setData] = useState(new Date());
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  
  const [showPicker, setShowPicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    setShowPicker(false); 
    if (selectedDate) {
      setData(selectedDate); 
    }
  };

  const salvarDespesa = () => {
    const valorNumerico = parseFloat(valor);
    
    if (isNaN(valorNumerico) || valorNumerico <= 0 || descricao.trim().length === 0) {
      Alert.alert('Erro', 'Por favor, insira um valor válido e uma descrição.');
      return;
    }

    console.log("Salvo com sucesso:", { data, valor: valorNumerico, descricao });
    
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.label}>Data da Despesa:</Text>
      <Pressable onPress={() => setShowPicker(true)}>
        <Text style={styles.dateText}>{data.toLocaleDateString('pt-BR')}</Text>
      </Pressable>

      {showPicker && (
        <DateTimePicker
          value={data}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

      <Text style={styles.label}>Valor (R$):</Text>
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad" 
        value={valor}
        onChangeText={setValor} 
        placeholder="0.00"
      />

      <Text style={styles.label}>Descrição:</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao} 
        placeholder="Ex: Almoço"
      />

      <View style={styles.botoesContainer}>
        <Button title="Cancelar" color="red" onPress={() => navigation.goBack()} />
        <Button title="Salvar" onPress={salvarDespesa} />
      </View>

    </View>
  );
}

export default GerenciarDespesa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f8f8f8',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 6,
    fontSize: 16,
  },
  dateText: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#e6e6fa', 
    padding: 12,
    borderRadius: 6,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    overflow: 'hidden',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  }
});