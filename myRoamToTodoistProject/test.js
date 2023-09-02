const { TodoistApi } = require("@doist/todoist-api-typescript");

const api = new TodoistApi("b1b1a6b8a8f96ca137392acbd5fdc8db00db0314")

// api.getProjects()
//     .then((projects) => console.log(projects))
//     .catch((error) => console.log(error))
    
// api.addProject({ name: "Shopping List" })
//     .then((project) => console.log(project))
//     .catch((error) => console.log(error))

// api.addTask({ content: "Buy Milk", projectId: "2318839940" })
//     .then((task) => console.log(task))
//     .catch((error) => console.log(error))


// api.updateTask("7191539710", { dueString: "tomorrow" })
//     .then((isSuccess) => console.log(isSuccess))
//     .catch((error) => console.log(error))
// api.closeTask("7191539710")
//     .then((isSuccess) => console.log(isSuccess))
//     .catch((error) => console.log(error))

api.deleteProject("7191539710")
    .then((isSuccess) => console.log(isSuccess))
    .catch((error) => console.log(error))