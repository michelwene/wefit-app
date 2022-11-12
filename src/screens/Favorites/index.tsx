import * as S from "./styles";
import { Header } from "../../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { UserProps } from "../Home";
import { Card } from "../../components/Card";
import { ListRenderItem } from "react-native";
import { EmptyMessage } from "../../components/EmptyMessage";

export function Favorites() {
  const [repositories, setRepositories] = useState<Array<UserProps>>([]);
  const [repositoriesKeys, setRepositoriesKeys] = useState<Array<string>>([]);

  const getAllKeys = async () => {
    let keys = [] as any;
    try {
      keys = await AsyncStorage.getAllKeys();
      setRepositoriesKeys(keys);
    } catch (e) {
      Alert.alert("Erro ao buscar as chaves dos repositórios favoritados");
    }
  };

  const getMultiple = async () => {
    try {
      const jsonValue = repositoriesKeys.map((key) => {
        return AsyncStorage.getItem(key);
      });
      const values = await Promise.all(jsonValue);
      const repositories = values.map((value) => {
        return JSON.parse(value!);
      });
      setRepositories(repositories);
    } catch (e) {
      Alert.alert("Erro ao buscar os repositórios favoritados");
    }
  };

  useEffect(() => {
    (async () => {
      await getAllKeys();
      await getMultiple();
    })();
  }, []);

  const Item = ({ data }: { data: UserProps }) => (
    <Card
      description={data.description}
      language={data.language}
      image={{
        uri: data.owner.avatar_url,
      }}
      stars={data.stargazers_count}
      title={data.full_name}
      onPress={() => {}}
      onFavorite={() => {}}
      isFavorited={data.isFavorited}
    />
  );

  const renderCard: ListRenderItem<UserProps> = ({ item }) => (
    <Item data={item} />
  );

  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      Alert.alert("Erro ao limpar os repositórios favoritados");
    }
  };
  // clearAll();

  return (
    <S.Container>
      <Header onPress={() => {}} />
      <S.Content>
        {repositories[0] && repositories.length > 0 ? (
          <S.CardList
            data={repositories}
            renderItem={renderCard}
            keyExtractor={(repository: UserProps) => repository.id}
          />
        ) : (
          <EmptyMessage
            title="Nenhum repositório encontrado"
            message="Aperte na engrenagem para selecionar um novo usuário"
          />
        )}
      </S.Content>
    </S.Container>
  );
}
