import tarefasMock from '@/data/constants/tarefas';
import Tarefa from "@/data/model/Tarefa";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { useState } from "react";
import {botao, input, mb10, flexRow, flex1, gapX5, gapY5, textWhite, bgRed500, bgBlue500, bgGreen500, alignCenter, px2, textZinc500, lineThrough, w9_10, fontBold, border} from "@/styles";
import { AntDesign } from '@expo/vector-icons';

export default function Index() {
  const [descricao, setDescricao] = useState('')
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasMock)

  function excluirTarefa(tarefa: Tarefa) {
    const novasTarefas = tarefas.filter((t) => t.id != tarefa.id)
    setTarefas(novasTarefas)
  }

  function adicionarTarefa(tarefa: Tarefa) {
    const novasTarefas = tarefas.push()
  }

  function alternarConclusao(tarefa: Tarefa) {
    const novasTarefas = tarefas.map((t) => {
      if(t.id === tarefa.id) {
        return {...t, concluida: !t.concluida}
      }
      return t
    })
    setTarefas(novasTarefas)
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={[flexRow, gapX5, w9_10, mb10]}>
        <TextInput value={descricao} onChangeText={setDescricao} style={[input, flex1]} />
        <Pressable style={[botao, bgGreen500, px2]} onPress={() => excluirTarefa(tarefa)}>
          <AntDesign name='plus' size={16} color="white" />
        </Pressable>
      </View>

      <View style={[w9_10, gapY5]}>
        {tarefas.map((tarefa) => (
          <View key={tarefa.id} style={[flexRow, gapX5, alignCenter]}>
            <View style={[flex1]}>
              <Text style={tarefa.concluida ? [textZinc500, lineThrough] : []}>
                {tarefa.descricao}
              </Text>
            </View>
            <Pressable style={tarefa.concluida ? [botao, bgGreen500, px2] : [botao, bgBlue500, px2]} onPress={() => alternarConclusao(tarefa)}>
              <AntDesign name={'check'} size={16} color="white" />
            </Pressable>
            <Pressable style={[botao, bgRed500, px2]} onPress={() => excluirTarefa(tarefa)}>
              <AntDesign name='delete' size={16} color="white" />
            </Pressable>
          </View>

        ))}


        {/*
        <Link href="/new">
          <Text>New Screen</Text>
        </Link>
        <Text>Edit app/index.tsx to edit this screen.</Text>
        */}
      </View>

    </ScrollView>
  );
}