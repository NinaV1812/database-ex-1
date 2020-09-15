const { user, todoItem, todoList, tag } = require("./models");

async function listsWithUsers() {
  const lists = await todoList.findAll({
    include: [user],
  });

  return lists.map((list) => list.get({ plain: true }));
}

// listsWithUsers().then((lists) => console.log(lists));

async function getUsersWithList(id) {
  const result = await user.findByPk(id, { include: [todoList] });
  return result.get({ plain: true });
}
// getUsersWithList(1).then((user) => console.log("user by id", user));

async function getImportantTodos() {
  const todos = await todoItem.findAll();
  return todos.map((item) => item.get({ plain: true }));
}

// getImportantTodos().then((item) => console.log("important todoItems", item));

async function fullUserById(id) {
  const result = await user.findByPk(id, {
    include: [
      {
        model: todoList,
        attributes: ["name"],
        include: { model: todoItem, attributes: ["task"] },
      },
    ],
  });
  return result.get({ plain: true });
}
// fullUserById(1).then((user) => console.log("User with tasks", user));

async function allTodoItemsByTags() {
  const items = await todoItem.findAll({ include: [tag] });
  return items.map((item) => item.get({ plain: true }));
}
allTodoItemsByTags().then((items) => console.log("Items by tag", items));
