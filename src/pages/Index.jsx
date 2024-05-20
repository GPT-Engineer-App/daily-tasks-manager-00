import React, { useState } from "react";
import {
  Container,
  Input,
  Button,
  VStack,
  HStack,
  Text,
  Checkbox,
  IconButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input) return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTodo = (index) => {
    const newTodos = todos.slice();
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.slice();
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const allTodos = todos;
  const completedTodos = todos.filter(todo => todo.completed);
  const pendingTodos = todos.filter(todo => !todo.completed);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Todo List
        </Text>
        <HStack width="100%">
          <Input
            placeholder="Add a new task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={addTodo} colorScheme="blue">
            Add
          </Button>
        </HStack>
        <Tabs width="100%">
          <TabList>
            <Tab>All</Tab>
            <Tab>Completed</Tab>
            <Tab>Pending</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack width="100%" spacing={2}>
                {allTodos.map((todo, index) => (
                  <HStack key={index} width="100%" justifyContent="space-between">
                    <Checkbox
                      isChecked={todo.completed}
                      onChange={() => toggleTodo(index)}
                    >
                      <Text as={todo.completed ? "s" : ""}>{todo.text}</Text>
                    </Checkbox>
                    <IconButton
                      aria-label="Delete"
                      icon={<FaTrash />}
                      onClick={() => deleteTodo(index)}
                    />
                  </HStack>
                ))}
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack width="100%" spacing={2}>
                {completedTodos.map((todo, index) => (
                  <HStack key={index} width="100%" justifyContent="space-between">
                    <Checkbox
                      isChecked={todo.completed}
                      onChange={() => toggleTodo(index)}
                    >
                      <Text as={todo.completed ? "s" : ""}>{todo.text}</Text>
                    </Checkbox>
                    <IconButton
                      aria-label="Delete"
                      icon={<FaTrash />}
                      onClick={() => deleteTodo(index)}
                    />
                  </HStack>
                ))}
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack width="100%" spacing={2}>
                {pendingTodos.map((todo, index) => (
                  <HStack key={index} width="100%" justifyContent="space-between">
                    <Checkbox
                      isChecked={todo.completed}
                      onChange={() => toggleTodo(index)}
                    >
                      <Text as={todo.completed ? "s" : ""}>{todo.text}</Text>
                    </Checkbox>
                    <IconButton
                      aria-label="Delete"
                      icon={<FaTrash />}
                      onClick={() => deleteTodo(index)}
                    />
                  </HStack>
                ))}
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  );
};

export default Index;