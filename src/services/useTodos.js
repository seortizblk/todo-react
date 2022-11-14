
import { collection,doc, addDoc, onSnapshot ,updateDoc, serverTimestamp, deleteDoc} from "firebase/firestore";
import { db } from './firebase_cfg'
import { useState, useEffect } from "react";

const useTodos = () => {
    
    const document = 'todos'

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db,document),(querySnapshot) => {
            console.log(JSON.stringify(querySnapshot.docs))

            setTasks(
                querySnapshot.docs.map((data) => ({
                    id: data.id,
                    description: data.data().description,
                    completed: data.data().completed,
                    timestamp: data.data().timestamp.seconds
                })))
        })
    }, [])
    
   
    const insertTodo = (task) => {
        addDoc(collection(db,document),{
            description:task,
            completed: false,
            timestamp: serverTimestamp()
        })
      }

      const toggleCompleted =  (id,value) => {
        updateDoc(doc(db, document, id),{
           completed:!value
       })
   }
   
   const deleteTodo = (id) => {
       deleteDoc(doc(db, document, id))
   }

   return [tasks, insertTodo, deleteTodo , toggleCompleted]
}

export default useTodos





