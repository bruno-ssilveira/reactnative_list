import tarefasMock from '@/data/constants/tarefas';
import Tarefa from "@/data/model/Tarefa";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { useState } from "react";
import {checkBox, taskCard, botao, deleteStyle, pressedScale, input, mb10, mt10, ml10, marginTask, flexRow, flex1, gapX5, gapY5, textWhite, bgRed500, bgBlue500, bgGreen500, bgYellow500, bgLightBlue500, alignCenter, px2, textZinc500, lineThrough, w9_10, fontBold} from "@/styles";
import { AntDesign } from '@expo/vector-icons';

export default function Index() {
  const [descricao, setDescricao] = useState('')
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasMock)
  const [editandoId, setEditandoId] = useState<number | null>(null)
  const [descricaoTemp, setDescricaoTemp] = useState('')

  function excluirTarefa(tarefa: Tarefa) {
    const novasTarefas = tarefas.filter((t) => t.id != tarefa.id)
    setTarefas(novasTarefas)
  }

  function adicionarTarefa() {
    if(descricao.trim() === '') {
      return
    }
    const novaTarefa: Tarefa = {
      id: tarefas.length +1,
      descricao,
      concluida: false,
    }
    setTarefas([...tarefas, novaTarefa]);
    setDescricao('');
  }

  function editarTarefa(tarefa: Tarefa) {
    if(editandoId === tarefa.id) {
      const novasTarefas = tarefas.map((t) => {
        if(t.id === tarefa.id) {
          return { ...t, descricao: descricaoTemp };
        }
        return t
      });
      setTarefas(novasTarefas);
      setEditandoId(null);
      setDescricaoTemp('');
    } else {
      // Entrar no modo de edição
      setEditandoId(tarefa.id);
      setDescricaoTemp(tarefa.descricao);
    }
  }

  function salvarEdicao() {
    if (editandoId !== null) {
      const novasTarefas = tarefas.map((t) => {
        if (t.id === editandoId) {
          return { ...t, descricao: descricaoTemp };
        }
        return t;
      });
      setTarefas(novasTarefas);
      setEditandoId(null);
      setDescricaoTemp('');
    }
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
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >

      {/* -------- Lista de Tarefas -------- */}
      <View style={[w9_10, gapY5, mt10]}>
        {tarefas.map((tarefa) => (
          <Pressable key={tarefa.id} style={({pressed}) => [flexRow, gapX5, alignCenter, pressed ? bgLightBlue500 : null]} onLongPress={() => editarTarefa(tarefa)} onBlur={salvarEdicao}>

            {/* Descrição da Tarefa */}
            <View style={[flexRow, taskCard]}>

              {/* Status Tarefa */}
              <Pressable style={({pressed}) => [tarefa.concluida ? [checkBox, px2, alignCenter] : [checkBox, px2, alignCenter], pressed ? pressedScale : null]} onPress={() => alternarConclusao(tarefa)}>
                <Text>{tarefa.concluida ? '✔' : ''}</Text>
              </Pressable>
              
              <View style={[flex1, marginTask]}>
                {
                  editandoId === tarefa.id ? (<TextInput value={descricaoTemp} onChangeText={setDescricaoTemp} onBlur={salvarEdicao} style={[input, fontBold]} />)
                  : <Text style={tarefa.concluida ? [textZinc500, lineThrough] : []}> {tarefa.descricao} </Text>
                }
              </View>

              {/* Excluir Tarefa */}
              <Pressable style={({pressed}) => [deleteStyle, pressed ? pressedScale : null]} onPress={() => excluirTarefa(tarefa)}>
                <Text>X</Text>
              </Pressable>

            </View>
            

          </Pressable>
        ))}


        {/*
        <Link href="/new">
          <Text>New Screen</Text>
        </Link>
        <Text>Edit app/index.tsx to edit this screen.</Text>
        */}
      </View>

      {/* -------- Adicionar Tarefa -------- */}
      <View style={[flexRow, gapX5, w9_10, mb10]}>
        <TextInput placeholder='Adicionar nova tarefa...' value={descricao} onChangeText={setDescricao} style={[input, flex1]} />
        <Pressable style={({pressed}) => [botao, bgBlue500, px2, pressed ? bgGreen500 : bgBlue500, pressed ? pressedScale : null]} onPress={adicionarTarefa}>
          <AntDesign name='plus' size={16} color="white" />
        </Pressable>
      </View>

    </ScrollView>
  );
}