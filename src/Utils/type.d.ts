
interface subTaskTodo {
    subTaskId: string
    subTaskName: string
    subTaskDescription: string
    status: boolean
    createdAt?: string
    updatedAt?: string
}

interface ITodo {
    id: string
    name: string
    description: string
    status: boolean
    createdAt?: string
    updatedAt?: string
    subTasks: subTaskTodo[]
}

type TodoProps = {
    todo: ITodo
}