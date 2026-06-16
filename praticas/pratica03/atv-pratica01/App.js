import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DespesasRecentes from './screens/DespesasRecentes';
import TodasDespesas from './screens/TodasDespesas';
import GerenciarDespesa from './screens/GerenciarDespesa';
import IconButton from './components/UI/IconButton';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function DespesasOverview({ navigation }) {
  return (
    <BottomTabs.Navigator
      // O screenOptions aplica configurações para TODAS as abas de uma vez
      screenOptions={{
        // Isso cria o botão no lado direito do cabeçalho
        headerRight: ({ tintColor }) => (
          <IconButton
            icone="add"
            tamanho={24}
            cor={tintColor}
            onPress={() => {
              // Isso faz o app navegar para a tela de adicionar despesa!
              navigation.navigate('GerenciarDespesa');
            }}
          />
        ),
      }}
    >
      <BottomTabs.Screen 
        name="DespesasRecentes" 
        component={DespesasRecentes} 
        options={{ 
          title: 'Despesas Recentes',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          )
        }} 
      />
      <BottomTabs.Screen 
        name="TodasDespesas" 
        component={TodasDespesas} 
        options={{ 
          title: 'Todas as Despesas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          )
        }} 
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="DespesasOverview" 
          component={DespesasOverview} 
          options={{ headerShown: false }} 
        />
        
        <Stack.Screen 
          name="GerenciarDespesa" 
          component={GerenciarDespesa} 
          options={{ title: 'Gerenciar Despesa' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}