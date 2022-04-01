import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, Center } from '@td-design/react-native';
import { Container } from 'components';

export function RecyclerListDemo() {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  return (
    <Container>
      <Center>
        <Button title="Demo1" onPress={() => navigation.navigate('RecyclerListDemo1')} />
        <Button title="Demo2" onPress={() => navigation.navigate('RecyclerListDemo2')} />
        <Button title="Demo3" onPress={() => navigation.navigate('RecyclerListDemo3')} />
        <Button title="Demo4" onPress={() => navigation.navigate('RecyclerListDemo4')} />
        <Button title="Demo5" onPress={() => navigation.navigate('RecyclerListDemo5')} />
      </Center>
    </Container>
  );
}
