import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Cabeçalho */}
      <Text style={styles.titulo}>Minhas Tarefas</Text>

      {/* Área de inserção */}
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa..."
        />

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de tarefas (estática) */}
      <View style={styles.tarefa}>
        <Text style={styles.tarefaTexto}>Estudar React Native</Text>
        <TouchableOpacity>
          <Text style={styles.deletar}>X</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tarefa}>
        <Text style={styles.tarefaTexto}>Fazer exercício da disciplina</Text>
        <TouchableOpacity>
          <Text style={styles.deletar}>X</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tarefa}>
        <Text style={styles.tarefaTexto}>Assistir aula gravada</Text>
        <TouchableOpacity>
          <Text style={styles.deletar}>X</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  inputArea: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },

  botao: {
    marginLeft: 10,
    backgroundColor: '#007bff',
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderRadius: 8,
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 20,
  },

  tarefa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },

  tarefaTexto: {
    fontSize: 16,
  },

  deletar: {
    color: 'red',
    fontWeight: 'bold',
  }

});